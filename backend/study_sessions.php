<?php
/**
 * Student Pomodoro / study session log (server sync).
 *
 * GET  ?user_email=...     — list completed sessions for that student (newest last; capped)
 * POST JSON: { user_email, course_id, duration_minutes?, completed_at? (ISO8601), kind? }
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

function normalizeEmail(string $email): string
{
    $value = trim($email);

    return function_exists('mb_strtolower') ? mb_strtolower($value, 'UTF-8') : strtolower($value);
}

function normDept(?string $v): string
{
    return strtolower(trim((string) ($v ?? '')));
}

function ensureStudySessionsTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_study_sessions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            student_id INT NOT NULL,
            course_id INT NOT NULL,
            course_code VARCHAR(64) NOT NULL DEFAULT '',
            course_name VARCHAR(255) NOT NULL DEFAULT '',
            duration_minutes INT NOT NULL DEFAULT 25,
            session_kind VARCHAR(32) NOT NULL DEFAULT 'pomodoro',
            completed_at DATETIME NOT NULL,
            INDEX idx_study_student_time (student_id, completed_at),
            INDEX idx_study_course (course_id),
            CONSTRAINT fk_study_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE,
            CONSTRAINT fk_study_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
}

function resolveStudentId(PDO $connection, string $email): ?int
{
    $norm = normalizeEmail($email);
    if ($norm === '') {
        return null;
    }
    $stmt = $connection->prepare('SELECT id FROM strack_students WHERE LOWER(TRIM(email)) = :e LIMIT 1');
    $stmt->execute(['e' => $norm]);
    $id = $stmt->fetchColumn();

    return $id ? (int) $id : null;
}

function studentMayAccessCourse(PDO $connection, int $studentId, int $courseId): bool
{
    if ($studentId <= 0 || $courseId <= 0) {
        return false;
    }
    $cStmt = $connection->prepare('
        SELECT id, TRIM(COALESCE(department, "")) AS cdept
        FROM strack_courses
        WHERE id = :id
        LIMIT 1
    ');
    $cStmt->execute(['id' => $courseId]);
    $course = $cStmt->fetch(PDO::FETCH_ASSOC);
    if (!$course) {
        return false;
    }
    $en = $connection->prepare('
        SELECT 1 FROM strack_course_students
        WHERE course_id = :cid AND student_id = :sid
        LIMIT 1
    ');
    $en->execute(['cid' => $courseId, 'sid' => $studentId]);
    if ($en->fetchColumn()) {
        return true;
    }
    $sStmt = $connection->prepare('SELECT TRIM(COALESCE(department, "")) AS sdept FROM strack_students WHERE id = :id LIMIT 1');
    $sStmt->execute(['id' => $studentId]);
    $sdept = normDept($sStmt->fetchColumn());
    $cdept = normDept($course['cdept'] ?? '');
    if ($sdept === '') {
        return $cdept === '';
    }

    return $sdept !== '' && $sdept === $cdept;
}

function fetchCourseSnapshot(PDO $connection, int $courseId): ?array
{
    $stmt = $connection->prepare('
        SELECT id,
               TRIM(COALESCE(course_code, "")) AS course_code,
               TRIM(COALESCE(course_name, "")) AS course_name
        FROM strack_courses
        WHERE id = :id
        LIMIT 1
    ');
    $stmt->execute(['id' => $courseId]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    return $row ?: null;
}

/** Store and read completed_at as UTC (MySQL DATETIME, no TZ column). @return array{0: string, 1: bool} */
function parseCompletedAtUtc(?string $iso): array
{
    try {
        if ($iso === null || trim((string) $iso) === '') {
            $dt = new DateTime('now', new DateTimeZone('UTC'));
        } else {
            $dt = new DateTime(trim((string) $iso));
            $dt->setTimezone(new DateTimeZone('UTC'));
        }

        return [$dt->format('Y-m-d H:i:s'), true];
    } catch (Throwable $e) {
        return ['', false];
    }
}

function completedAtRowToIso(string $mysqlUtc): string
{
    $t = trim($mysqlUtc);
    $dt = DateTime::createFromFormat('Y-m-d H:i:s.u', $t, new DateTimeZone('UTC'))
        ?: DateTime::createFromFormat('Y-m-d H:i:s', $t, new DateTimeZone('UTC'));
    if ($dt instanceof DateTimeInterface) {
        return $dt->format('Y-m-d\TH:i:s') . '.000Z';
    }

    return gmdate('Y-m-d\TH:i:s') . '.000Z';
}

try {
    $connection = getConnection();
    ensureStudySessionsTable($connection);

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        $email = normalizeEmail((string) ($_GET['user_email'] ?? ''));
        if ($email === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'user_email is required']);
            exit;
        }
        $studentId = resolveStudentId($connection, $email);
        if ($studentId === null) {
            echo json_encode(['success' => true, 'events' => []]);
            exit;
        }
        $stmt = $connection->prepare("
            SELECT id,
                   student_id,
                   course_id,
                   course_code,
                   course_name,
                   duration_minutes,
                   session_kind,
                   completed_at
            FROM strack_study_sessions
            WHERE student_id = :sid
            ORDER BY completed_at ASC
            LIMIT 5000
        ");
        $stmt->execute(['sid' => $studentId]);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $out = [];
        foreach ($rows as $r) {
            $raw = (string) ($r['completed_at'] ?? '');
            $iso = $raw !== '' ? completedAtRowToIso($raw) : gmdate('Y-m-d\TH:i:s') . '.000Z';
            $out[] = [
                'id' => (int) ($r['id'] ?? 0),
                'course_id' => (int) ($r['course_id'] ?? 0),
                'course_code' => (string) ($r['course_code'] ?? ''),
                'course_name' => (string) ($r['course_name'] ?? ''),
                'duration_minutes' => (int) ($r['duration_minutes'] ?? 25),
                'session_kind' => (string) ($r['session_kind'] ?? 'pomodoro'),
                'completed_at' => $iso,
            ];
        }
        echo json_encode(['success' => true, 'events' => $out]);
        exit;
    }

    if ($method !== 'POST') {
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        exit;
    }

    $input = json_decode((string) file_get_contents('php://input'), true) ?: [];
    $email = normalizeEmail((string) ($input['user_email'] ?? ''));
    $courseId = (int) ($input['course_id'] ?? 0);
    $duration = (int) ($input['duration_minutes'] ?? 25);
    if ($duration <= 0 || $duration > 240) {
        $duration = 25;
    }
    $kind = trim((string) ($input['kind'] ?? 'pomodoro'));
    if ($kind !== 'pomodoro') {
        $kind = 'pomodoro';
    }
    $completedIso = isset($input['completed_at']) ? (string) $input['completed_at'] : null;

    if ($email === '' || $courseId <= 0) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'user_email and course_id are required']);
        exit;
    }

    $studentId = resolveStudentId($connection, $email);
    if ($studentId === null) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Student not found for this email']);
        exit;
    }

    if (!studentMayAccessCourse($connection, $studentId, $courseId)) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'You cannot log study for this module']);
        exit;
    }

    $snap = fetchCourseSnapshot($connection, $courseId);
    if (!$snap) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid course']);
        exit;
    }

    [$completedSql, $ok] = parseCompletedAtUtc($completedIso);
    if (!$ok) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid completed_at']);
        exit;
    }

    $ins = $connection->prepare("
        INSERT INTO strack_study_sessions
            (student_id, course_id, course_code, course_name, duration_minutes, session_kind, completed_at)
        VALUES
            (:student_id, :course_id, :course_code, :course_name, :duration_minutes, :session_kind, :completed_at)
    ");
    $ins->execute([
        'student_id' => $studentId,
        'course_id' => $courseId,
        'course_code' => (string) ($snap['course_code'] ?? ''),
        'course_name' => (string) ($snap['course_name'] ?? ''),
        'duration_minutes' => $duration,
        'session_kind' => $kind,
        'completed_at' => $completedSql,
    ]);
    $newId = (int) $connection->lastInsertId();

    echo json_encode([
        'success' => true,
        'id' => $newId,
        'event' => [
            'id' => $newId,
            'course_id' => $courseId,
            'course_code' => (string) ($snap['course_code'] ?? ''),
            'course_name' => (string) ($snap['course_name'] ?? ''),
            'duration_minutes' => $duration,
            'session_kind' => $kind,
            'completed_at' => $completedIso !== null && trim((string) $completedIso) !== ''
                ? (string) $completedIso
                : gmdate('Y-m-d\TH:i:s.000\Z'),
        ],
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
}
