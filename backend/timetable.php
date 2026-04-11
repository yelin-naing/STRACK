<?php
/**
 * Timetable API — class sessions and school events.
 * GET    ?from=YYYY-MM-DD&to=YYYY-MM-DD  list entries in range
 * POST   create
 * PUT    update
 * DELETE ?id=
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

function normalize_time(string $t): string
{
    $t = trim($t);
    if (preg_match('/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/', $t, $m)) {
        return sprintf('%02d:%02d:00', (int) $m[1], (int) $m[2]);
    }
    throw new InvalidArgumentException('Invalid time format');
}

function fetch_lecturers_for_entries(PDO $connection, array $entryIds): array
{
    if (empty($entryIds)) {
        return [];
    }
    $placeholders = implode(',', array_fill(0, count($entryIds), '?'));
    $stmt = $connection->prepare("
        SELECT
            tel.entry_id,
            a.id,
            a.full_name,
            l.lecturer_id,
            l.department
        FROM strack_timetable_entry_lecturers tel
        INNER JOIN strack_accounts a ON a.id = tel.account_id AND a.role = 'teacher'
        INNER JOIN strack_lecturers l ON l.account_id = a.id
        WHERE tel.entry_id IN ($placeholders)
        ORDER BY l.lecturer_id
    ");
    $stmt->execute($entryIds);
    $byEntry = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $eid = (int) $row['entry_id'];
        if (!isset($byEntry[$eid])) {
            $byEntry[$eid] = [];
        }
        $byEntry[$eid][] = [
            'id' => (int) $row['id'],
            'full_name' => $row['full_name'],
            'lecturer_id' => $row['lecturer_id'],
            'department' => $row['department'],
        ];
    }

    return $byEntry;
}

function row_to_entry(array $row, array $lecturers): array
{
    $type = $row['entry_type'];
    $dept = null;
    if ($type === 'class' && !empty($row['course_department'])) {
        $dept = $row['course_department'];
    } elseif (!empty($lecturers)) {
        $dept = $lecturers[0]['department'] ?? null;
    }

    return [
        'id' => (int) $row['id'],
        'entry_type' => $type,
        'course_id' => $row['course_id'] !== null ? (int) $row['course_id'] : null,
        'course_code' => $row['course_code'] ?? null,
        'course_name' => $row['course_name'] ?? null,
        'department' => $dept,
        'event_title' => $row['event_title'],
        'event_description' => $row['event_description'],
        'entry_date' => $row['entry_date'],
        'start_time' => $row['start_time'],
        'end_time' => $row['end_time'],
        'room_location' => $row['room_location'],
        'lecturers' => $lecturers,
    ];
}

$method = $_SERVER['REQUEST_METHOD'];

try {
    $connection = getConnection();

    switch ($method) {
        case 'GET':
            $from = $_GET['from'] ?? '';
            $to = $_GET['to'] ?? '';
            if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $from) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $to)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'from and to (YYYY-MM-DD) are required']);
                exit;
            }

            $stmt = $connection->prepare("
                SELECT
                    e.id,
                    e.entry_type,
                    e.course_id,
                    e.event_title,
                    e.event_description,
                    DATE_FORMAT(e.entry_date, '%Y-%m-%d') AS entry_date,
                    TIME_FORMAT(e.start_time, '%H:%i:%s') AS start_time,
                    TIME_FORMAT(e.end_time, '%H:%i:%s') AS end_time,
                    e.room_location,
                    c.course_code,
                    c.course_name,
                    c.department AS course_department
                FROM strack_timetable_entries e
                LEFT JOIN strack_courses c ON c.id = e.course_id
                WHERE e.entry_date BETWEEN :from AND :to
                ORDER BY e.entry_date, e.start_time, e.id
            ");
            $stmt->execute(['from' => $from, 'to' => $to]);
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $ids = array_map(fn ($r) => (int) $r['id'], $rows);
            $lecturerMap = fetch_lecturers_for_entries($connection, $ids);

            $entries = [];
            foreach ($rows as $row) {
                $id = (int) $row['id'];
                $entries[] = row_to_entry($row, $lecturerMap[$id] ?? []);
            }

            echo json_encode(['success' => true, 'entries' => $entries]);
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $entryType = $input['entry_type'] === 'event' ? 'event' : 'class';
            $courseId = isset($input['course_id']) ? (int) $input['course_id'] : 0;
            $eventTitle = trim($input['event_title'] ?? '');
            $eventDescription = trim($input['event_description'] ?? '');
            $entryDate = trim($input['entry_date'] ?? '');
            $room = trim($input['room_location'] ?? '');
            $lecturerIds = $input['lecturer_account_ids'] ?? [];
            if (!is_array($lecturerIds)) {
                $lecturerIds = [];
            }
            $lecturerIds = array_values(array_unique(array_map('intval', $lecturerIds)));

            try {
                $startT = normalize_time($input['start_time'] ?? '');
                $endT = normalize_time($input['end_time'] ?? '');
            } catch (InvalidArgumentException $e) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Invalid start or end time']);
                exit;
            }

            if ($startT >= $endT) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'End time must be after start time']);
                exit;
            }

            if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $entryDate)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'entry_date must be YYYY-MM-DD']);
                exit;
            }

            if ($entryType === 'class') {
                if ($courseId <= 0) {
                    http_response_code(400);
                    echo json_encode(['success' => false, 'error' => 'course_id is required for class entries']);
                    exit;
                }
                $eventTitle = null;
                $eventDescription = null;
            } else {
                if ($eventTitle === '') {
                    http_response_code(400);
                    echo json_encode(['success' => false, 'error' => 'event_title is required for events']);
                    exit;
                }
                $courseId = $courseId > 0 ? $courseId : null;
            }

            $connection->beginTransaction();

            $stmt = $connection->prepare("
                INSERT INTO strack_timetable_entries
                    (entry_type, course_id, event_title, event_description, entry_date, start_time, end_time, room_location)
                VALUES
                    (:entry_type, :course_id, :event_title, :event_description, :entry_date, :start_time, :end_time, :room_location)
            ");
            $stmt->execute([
                'entry_type' => $entryType,
                'course_id' => $courseId,
                'event_title' => $entryType === 'event' ? $eventTitle : null,
                'event_description' => $entryType === 'event' && $eventDescription !== '' ? $eventDescription : null,
                'entry_date' => $entryDate,
                'start_time' => $startT,
                'end_time' => $endT,
                'room_location' => $room !== '' ? $room : null,
            ]);
            $newId = (int) $connection->lastInsertId();

            $insL = $connection->prepare('
                INSERT INTO strack_timetable_entry_lecturers (entry_id, account_id) VALUES (:eid, :aid)
            ');
            foreach ($lecturerIds as $aid) {
                if ($aid <= 0) {
                    continue;
                }
                $insL->execute(['eid' => $newId, 'aid' => $aid]);
            }

            $connection->commit();
            echo json_encode(['success' => true, 'id' => $newId]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $id = (int) ($input['id'] ?? 0);
            if ($id <= 0) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'id is required']);
                exit;
            }

            $entryType = $input['entry_type'] === 'event' ? 'event' : 'class';
            $courseId = isset($input['course_id']) ? (int) $input['course_id'] : 0;
            $eventTitle = trim($input['event_title'] ?? '');
            $eventDescription = trim($input['event_description'] ?? '');
            $entryDate = trim($input['entry_date'] ?? '');
            $room = trim($input['room_location'] ?? '');
            $lecturerIds = $input['lecturer_account_ids'] ?? [];
            if (!is_array($lecturerIds)) {
                $lecturerIds = [];
            }
            $lecturerIds = array_values(array_unique(array_map('intval', $lecturerIds)));

            try {
                $startT = normalize_time($input['start_time'] ?? '');
                $endT = normalize_time($input['end_time'] ?? '');
            } catch (InvalidArgumentException $e) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Invalid start or end time']);
                exit;
            }

            if ($startT >= $endT) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'End time must be after start time']);
                exit;
            }

            if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $entryDate)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'entry_date must be YYYY-MM-DD']);
                exit;
            }

            if ($entryType === 'class') {
                if ($courseId <= 0) {
                    http_response_code(400);
                    echo json_encode(['success' => false, 'error' => 'course_id is required for class entries']);
                    exit;
                }
                $eventTitle = null;
                $eventDescription = null;
            } else {
                if ($eventTitle === '') {
                    http_response_code(400);
                    echo json_encode(['success' => false, 'error' => 'event_title is required for events']);
                    exit;
                }
                $courseId = $courseId > 0 ? $courseId : null;
            }

            $connection->beginTransaction();

            $stmt = $connection->prepare("
                UPDATE strack_timetable_entries SET
                    entry_type = :entry_type,
                    course_id = :course_id,
                    event_title = :event_title,
                    event_description = :event_description,
                    entry_date = :entry_date,
                    start_time = :start_time,
                    end_time = :end_time,
                    room_location = :room_location
                WHERE id = :id
            ");
            $stmt->execute([
                'id' => $id,
                'entry_type' => $entryType,
                'course_id' => $courseId,
                'event_title' => $entryType === 'event' ? $eventTitle : null,
                'event_description' => $entryType === 'event' && $eventDescription !== '' ? $eventDescription : null,
                'entry_date' => $entryDate,
                'start_time' => $startT,
                'end_time' => $endT,
                'room_location' => $room !== '' ? $room : null,
            ]);

            $connection->prepare('DELETE FROM strack_timetable_entry_lecturers WHERE entry_id = :id')->execute(['id' => $id]);
            $insL = $connection->prepare('
                INSERT INTO strack_timetable_entry_lecturers (entry_id, account_id) VALUES (:eid, :aid)
            ');
            foreach ($lecturerIds as $aid) {
                if ($aid <= 0) {
                    continue;
                }
                $insL->execute(['eid' => $id, 'aid' => $aid]);
            }

            $connection->commit();
            echo json_encode(['success' => true]);
            break;

        case 'DELETE':
            $id = (int) ($_GET['id'] ?? 0);
            if ($id <= 0) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'id is required']);
                exit;
            }
            $stmt = $connection->prepare('DELETE FROM strack_timetable_entries WHERE id = :id');
            $stmt->execute(['id' => $id]);
            echo json_encode(['success' => true]);
            break;

        default:
            http_response_code(405);
            echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    }
} catch (PDOException $e) {
    if (isset($connection) && $connection->inTransaction()) {
        $connection->rollBack();
    }
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
