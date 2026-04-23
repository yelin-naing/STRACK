<?php
/**
 * Demo student assignment uploads (Courses → Assignments). Stored for lecturer dashboard
 * "Assignment submission trends" overlay (weekly file counts).
 *
 * GET  ?user_email=&course_id=              — list current student's uploads for a course (JSON)
 * GET  ?lecturer_email=&course_id=          — list all student uploads on that course (lecturer owns module)
 * GET  ?download=1&submission_id=&lecturer_email= — download one file (lecturer must own the course)
 * POST multipart: user_email, course_id, timetable_entry_id, file — upload (JSON; entry = calendar assignment)
 * GET  ?lecturer_submission_bands=1&lecturer_email=&course_ids=1,2&from=&to= — per–due-date on-time / late / missing % (enrolled students)
 *
 * When included from assessment_scores.php (not as main script), only functions below run.
 */

function demoAssignmentUploadDir(): string
{
    return __DIR__ . '/uploads/demo_assignments';
}

function ensureDemoAssignmentSubmissionsTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_demo_assignment_submissions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            student_id INT NOT NULL,
            course_id INT NOT NULL,
            original_filename VARCHAR(255) NOT NULL,
            stored_filename VARCHAR(255) NOT NULL,
            file_size INT UNSIGNED NOT NULL DEFAULT 0,
            uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_demo_course (course_id),
            INDEX idx_demo_student (student_id),
            INDEX idx_demo_uploaded (uploaded_at),
            CONSTRAINT fk_demo_sub_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE,
            CONSTRAINT fk_demo_sub_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
    ensureDemoAssignmentTimetableEntryColumn($connection);
}

function ensureDemoAssignmentTimetableEntryColumn(PDO $connection): void
{
    try {
        $stmt = $connection->query("
            SELECT COUNT(*) FROM information_schema.COLUMNS
            WHERE TABLE_SCHEMA = DATABASE()
              AND TABLE_NAME = 'strack_demo_assignment_submissions'
              AND COLUMN_NAME = 'timetable_entry_id'
        ");
        if ($stmt && (int) $stmt->fetchColumn() > 0) {
            return;
        }
        $connection->exec('
            ALTER TABLE strack_demo_assignment_submissions
            ADD COLUMN timetable_entry_id INT NULL DEFAULT NULL AFTER course_id
        ');
        $connection->exec('
            ALTER TABLE strack_demo_assignment_submissions
            ADD INDEX idx_demo_timetable_entry (timetable_entry_id)
        ');
        try {
            $connection->exec('
                ALTER TABLE strack_demo_assignment_submissions
                ADD CONSTRAINT fk_demo_timetable_entry
                FOREIGN KEY (timetable_entry_id) REFERENCES strack_timetable_entries (id) ON DELETE SET NULL
            ');
        } catch (Throwable $e) {
        }
    } catch (Throwable $e) {
    }
}

/**
 * Per calendar assignment: % of enrolled students on time (first upload <= deadline), late, or missing.
 *
 * @param array<int,int> $courseFilterIds
 * @return array<int,array<string,mixed>>
 */
function submissionBandsByDeadlineForLecturer(PDO $connection, string $lecturerIdTrim, array $courseFilterIds, string $fromYmd, string $toYmd): array
{
    ensureDemoAssignmentSubmissionsTable($connection);
    $lid = trim($lecturerIdTrim);
    if ($lid === '' || $courseFilterIds === []) {
        return [];
    }
    $inParts = [];
    $params = ['lid' => $lid, 'from' => $fromYmd, 'to' => $toYmd];
    foreach ($courseFilterIds as $i => $cid) {
        $k = 'bcid' . $i;
        $inParts[] = ':' . $k;
        $params[$k] = (int) $cid;
    }
    $inSql = implode(',', $inParts);
    $stmt = $connection->prepare("
        SELECT
            e.id AS entry_id,
            e.course_id,
            e.event_title,
            DATE_FORMAT(e.entry_date, '%Y-%m-%d') AS entry_date,
            TIME_FORMAT(e.start_time, '%H:%i:%s') AS start_time,
            c.course_code,
            c.course_name
        FROM strack_timetable_entries e
        INNER JOIN strack_courses c ON c.id = e.course_id
        WHERE e.entry_type = 'event'
          AND TRIM(c.lecturer_id) = TRIM(:lid)
          AND e.course_id IN ($inSql)
          AND e.entry_date BETWEEN :from AND :to
        ORDER BY e.entry_date ASC, e.start_time ASC, e.id ASC
    ");
    $stmt->execute($params);
    $events = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $out = [];
    foreach ($events as $ev) {
        $eid = (int) ($ev['entry_id'] ?? 0);
        $cid = (int) ($ev['course_id'] ?? 0);
        if ($eid <= 0 || $cid <= 0) {
            continue;
        }
        $entryDate = (string) ($ev['entry_date'] ?? '');
        $startTime = trim((string) ($ev['start_time'] ?? '23:59:00'));
        if (strlen($startTime) < 8) {
            $startTime = '23:59:00';
        }
        $dueStr = $entryDate . ' ' . substr($startTime, 0, 8);
        $dueTs = strtotime($dueStr);
        if ($dueTs === false) {
            continue;
        }

        $enrStmt = $connection->prepare('SELECT student_id FROM strack_course_students WHERE course_id = :cid');
        $enrStmt->execute(['cid' => $cid]);
        $studentIds = [];
        while ($row = $enrStmt->fetch(PDO::FETCH_ASSOC)) {
            $studentIds[] = (int) ($row['student_id'] ?? 0);
        }
        $enrolled = count($studentIds);

        $firstByStudent = [];
        $subStmt = $connection->prepare('
            SELECT student_id, MIN(uploaded_at) AS first_up
            FROM strack_demo_assignment_submissions
            WHERE timetable_entry_id = :eid AND course_id = :cid
            GROUP BY student_id
        ');
        $subStmt->execute(['eid' => $eid, 'cid' => $cid]);
        while ($row = $subStmt->fetch(PDO::FETCH_ASSOC)) {
            $sid = (int) ($row['student_id'] ?? 0);
            if ($sid > 0) {
                $firstByStudent[$sid] = (string) ($row['first_up'] ?? '');
            }
        }

        $onTime = 0;
        $late = 0;
        $missing = 0;
        foreach ($studentIds as $sid) {
            if (!isset($firstByStudent[$sid]) || $firstByStudent[$sid] === '') {
                $missing++;
                continue;
            }
            $upTs = strtotime($firstByStudent[$sid]);
            if ($upTs === false) {
                $missing++;
                continue;
            }
            if ($upTs <= $dueTs) {
                $onTime++;
            } else {
                $late++;
            }
        }

        $pct = static function (int $n) use ($enrolled): float {
            return $enrolled > 0 ? round(($n / $enrolled) * 1000) / 10 : 0.0;
        };

        $out[] = [
            'timetable_entry_id' => $eid,
            'course_id' => $cid,
            'entry_date' => $entryDate,
            'start_time' => $startTime,
            'event_title' => (string) ($ev['event_title'] ?? 'Assignment'),
            'course_code' => (string) ($ev['course_code'] ?? ''),
            'course_name' => (string) ($ev['course_name'] ?? ''),
            'enrolled' => $enrolled,
            'on_time' => $pct($onTime),
            'late' => $pct($late),
            'missing' => $pct($missing),
            'on_time_count' => $onTime,
            'late_count' => $late,
            'missing_count' => $missing,
        ];
    }

    return $out;
}

function ensureDemoAssignmentUploadFilesystem(): void
{
    $dir = demoAssignmentUploadDir();
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

/** @return array<int, array{yw_key: string, cnt: int}> */
function weeklyDemoUploadCountsForLecturer(PDO $connection, string $lecturerIdTrim, array $courseFilterIds): array
{
    ensureDemoAssignmentSubmissionsTable($connection);
    $lid = trim($lecturerIdTrim);
    if ($lid === '') {
        return [];
    }
    $params = ['lid' => $lid];
    $whereCourses = '';
    if ($courseFilterIds !== []) {
        $inParts = [];
        foreach ($courseFilterIds as $i => $cid) {
            $k = 'dcid' . $i;
            $inParts[] = ':' . $k;
            $params[$k] = (int) $cid;
        }
        $whereCourses = ' AND s.course_id IN (' . implode(',', $inParts) . ') ';
    }
    $stmt = $connection->prepare("
        SELECT
            DATE_FORMAT(s.uploaded_at, '%x-W%v') AS yw_key,
            COUNT(*) AS cnt
        FROM strack_demo_assignment_submissions s
        INNER JOIN strack_courses c ON c.id = s.course_id
        WHERE TRIM(c.lecturer_id) = TRIM(:lid)
        $whereCourses
          AND s.uploaded_at >= DATE_SUB(CURDATE(), INTERVAL 120 DAY)
        GROUP BY yw_key
        ORDER BY yw_key ASC
    ");
    $stmt->execute($params);
    $out = [];
    foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $r) {
        $out[] = [
            'yw_key' => (string) ($r['yw_key'] ?? ''),
            'cnt' => (int) ($r['cnt'] ?? 0),
        ];
    }
    return $out;
}

function demoNormalizeEmail(string $email): string
{
    $value = trim($email);
    return function_exists('mb_strtolower') ? mb_strtolower($value, 'UTF-8') : strtolower($value);
}

function resolveStudentByEmail(PDO $connection, string $email): ?array
{
    $norm = demoNormalizeEmail($email);
    if ($norm === '') {
        return null;
    }
    $stmt = $connection->prepare('SELECT id FROM strack_students WHERE LOWER(TRIM(email)) = :e LIMIT 1');
    $stmt->execute(['e' => $norm]);
    $id = (int) ($stmt->fetchColumn() ?: 0);
    if ($id <= 0) {
        return null;
    }
    return ['student_id' => $id];
}

function studentEnrolledInCourse(PDO $connection, int $studentId, int $courseId): bool
{
    $stmt = $connection->prepare('
        SELECT 1 FROM strack_course_students WHERE student_id = :sid AND course_id = :cid LIMIT 1
    ');
    $stmt->execute(['sid' => $studentId, 'cid' => $courseId]);
    return (bool) $stmt->fetchColumn();
}

function lecturerOwnsCourseByEmail(PDO $connection, string $emailNorm, int $courseId): bool
{
    if ($emailNorm === '' || $courseId <= 0) {
        return false;
    }
    $q = $connection->prepare('
        SELECT 1 FROM strack_courses co
        INNER JOIN strack_lecturers le ON TRIM(le.lecturer_id) = TRIM(co.lecturer_id)
        INNER JOIN strack_accounts a ON a.id = le.account_id AND a.role = \'teacher\'
        WHERE co.id = :cid AND LOWER(TRIM(a.email)) = :em
        LIMIT 1
    ');
    $q->execute(['cid' => $courseId, 'em' => $emailNorm]);

    return (bool) $q->fetchColumn();
}

const DEMO_MAX_BYTES = 10 * 1024 * 1024;

const DEMO_ALLOWED_EXT = [
    'pdf' => true, 'doc' => true, 'docx' => true, 'ppt' => true, 'pptx' => true,
    'txt' => true, 'zip' => true, 'png' => true, 'jpg' => true, 'jpeg' => true,
];

function demoStoredPath(string $stored): string
{
    return demoAssignmentUploadDir() . '/' . $stored;
}

$demoScriptBase = basename((string) ($_SERVER['SCRIPT_FILENAME'] ?? ''));
$demoDownloadId = (!empty($_GET['download']) && isset($_GET['submission_id'])) ? (int) $_GET['submission_id'] : 0;
if ($demoDownloadId > 0 && $demoScriptBase === 'demo_assignment_submissions.php') {
    header('Access-Control-Allow-Origin: *');
    require_once __DIR__ . '/getConnection.php';
    try {
        $connection = getConnection();
        ensureDemoAssignmentSubmissionsTable($connection);
        ensureDemoAssignmentUploadFilesystem();
        $em = demoNormalizeEmail((string) ($_GET['lecturer_email'] ?? ''));
        if ($em === '') {
            http_response_code(400);
            header('Content-Type: text/plain; charset=utf-8');
            echo 'lecturer_email required';
            exit;
        }
        $stmt = $connection->prepare('
            SELECT s.stored_filename, s.original_filename, s.file_size
            FROM strack_demo_assignment_submissions s
            INNER JOIN strack_courses c ON c.id = s.course_id
            INNER JOIN strack_lecturers l ON TRIM(l.lecturer_id) = TRIM(c.lecturer_id)
            INNER JOIN strack_accounts a ON a.id = l.account_id AND a.role = \'teacher\'
            WHERE s.id = :sid AND LOWER(TRIM(a.email)) = :em
            LIMIT 1
        ');
        $stmt->execute(['sid' => $demoDownloadId, 'em' => $em]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            http_response_code(403);
            header('Content-Type: text/plain; charset=utf-8');
            echo 'Forbidden';
            exit;
        }
        $path = demoStoredPath((string) ($row['stored_filename'] ?? ''));
        if (!is_file($path)) {
            http_response_code(404);
            header('Content-Type: text/plain; charset=utf-8');
            echo 'File missing';
            exit;
        }
        $name = (string) ($row['original_filename'] ?: 'download');
        header('Content-Type: application/octet-stream');
        header('Content-Length: ' . (int) ($row['file_size'] ?? 0));
        header('Content-Disposition: attachment; filename="' . basename($name) . '"');
        header('X-Content-Type-Options: nosniff');
        readfile($path);
        exit;
    } catch (Throwable $e) {
        http_response_code(500);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Server error';
        exit;
    }
}

// ---- HTTP API when this file is the entry script ----
if ($demoScriptBase !== 'demo_assignment_submissions.php') {
    return; // only function definitions when included from assessment_scores.php
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

$method = $_SERVER['REQUEST_METHOD'];

try {
    $connection = getConnection();
    ensureDemoAssignmentSubmissionsTable($connection);
    ensureDemoAssignmentUploadFilesystem();

    if ($method === 'GET') {
        if (isset($_GET['lecturer_submission_bands']) && (string) ($_GET['lecturer_submission_bands'] ?? '') === '1') {
            $lem = demoNormalizeEmail((string) ($_GET['lecturer_email'] ?? ''));
            if ($lem === '') {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'lecturer_email required']);
                exit;
            }
            $acc = $connection->prepare('
                SELECT l.lecturer_id
                FROM strack_accounts a
                INNER JOIN strack_lecturers l ON l.account_id = a.id
                WHERE LOWER(TRIM(a.email)) = :em AND a.role = \'teacher\'
                LIMIT 1
            ');
            $acc->execute(['em' => $lem]);
            $lidBands = trim((string) ($acc->fetchColumn() ?: ''));
            if ($lidBands === '') {
                http_response_code(403);
                echo json_encode(['success' => false, 'error' => 'Lecturer login required']);
                exit;
            }
            $rawIds = (string) ($_GET['course_ids'] ?? '');
            $courseIdsBands = [];
            foreach (explode(',', $rawIds) as $part) {
                $n = (int) trim($part);
                if ($n > 0) {
                    $courseIdsBands[$n] = true;
                }
            }
            $courseIdsBands = array_keys($courseIdsBands);
            if ($courseIdsBands === []) {
                echo json_encode(['success' => true, 'submission_bands' => []]);
                exit;
            }
            foreach ($courseIdsBands as $cidCheck) {
                if (!lecturerOwnsCourseByEmail($connection, $lem, (int) $cidCheck)) {
                    http_response_code(403);
                    echo json_encode(['success' => false, 'error' => 'Not allowed for one or more courses']);
                    exit;
                }
            }
            $fromBands = (string) ($_GET['from'] ?? '');
            $toBands = (string) ($_GET['to'] ?? '');
            if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $fromBands) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $toBands)) {
                $fromBands = (new \DateTimeImmutable('now'))->modify('-6 months')->format('Y-m-d');
                $toBands = (new \DateTimeImmutable('now'))->modify('+12 months')->format('Y-m-d');
            }
            $bands = submissionBandsByDeadlineForLecturer($connection, $lidBands, $courseIdsBands, $fromBands, $toBands);
            echo json_encode(['success' => true, 'submission_bands' => $bands]);
            exit;
        }

        $courseId = (int) ($_GET['course_id'] ?? 0);
        $lecturerEmail = demoNormalizeEmail((string) ($_GET['lecturer_email'] ?? ''));
        if ($lecturerEmail !== '' && $courseId > 0) {
            if (!lecturerOwnsCourseByEmail($connection, $lecturerEmail, $courseId)) {
                http_response_code(403);
                echo json_encode(['success' => false, 'error' => 'Not allowed to view this course']);
                exit;
            }
            $list = $connection->prepare('
                SELECT s.id, s.original_filename, s.file_size, s.uploaded_at, s.student_id,
                    st.full_name AS student_name, st.email AS student_email
                FROM strack_demo_assignment_submissions s
                INNER JOIN strack_students st ON st.id = s.student_id
                WHERE s.course_id = :cid
                ORDER BY s.uploaded_at DESC
                LIMIT 200
            ');
            $list->execute(['cid' => $courseId]);
            $rows = [];
            foreach ($list->fetchAll(PDO::FETCH_ASSOC) as $r) {
                $rows[] = [
                    'id' => (int) ($r['id'] ?? 0),
                    'original_filename' => (string) ($r['original_filename'] ?? ''),
                    'file_size' => (int) ($r['file_size'] ?? 0),
                    'uploaded_at' => (string) ($r['uploaded_at'] ?? ''),
                    'student_id' => (int) ($r['student_id'] ?? 0),
                    'student_name' => (string) ($r['student_name'] ?? ''),
                    'student_email' => (string) ($r['student_email'] ?? ''),
                ];
            }
            echo json_encode(['success' => true, 'submissions' => $rows]);
            exit;
        }

        $email = (string) ($_GET['user_email'] ?? '');
        $stu = resolveStudentByEmail($connection, $email);
        if (!$stu || $courseId <= 0) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'user_email and course_id required']);
            exit;
        }
        if (!studentEnrolledInCourse($connection, (int) $stu['student_id'], $courseId)) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Not enrolled in this course']);
            exit;
        }
        $list = $connection->prepare('
            SELECT id, original_filename, file_size, uploaded_at
            FROM strack_demo_assignment_submissions
            WHERE student_id = :sid AND course_id = :cid
            ORDER BY uploaded_at DESC
            LIMIT 50
        ');
        $list->execute(['sid' => (int) $stu['student_id'], 'cid' => $courseId]);
        $rows = [];
        foreach ($list->fetchAll(PDO::FETCH_ASSOC) as $r) {
            $rows[] = [
                'id' => (int) ($r['id'] ?? 0),
                'original_filename' => (string) ($r['original_filename'] ?? ''),
                'file_size' => (int) ($r['file_size'] ?? 0),
                'uploaded_at' => (string) ($r['uploaded_at'] ?? ''),
            ];
        }
        echo json_encode(['success' => true, 'submissions' => $rows]);
        exit;
    }

    if ($method === 'POST') {
        $email = demoNormalizeEmail((string) ($_POST['user_email'] ?? ''));
        $courseId = (int) ($_POST['course_id'] ?? 0);
        $stu = resolveStudentByEmail($connection, $email);
        if (!$stu || $courseId <= 0) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'user_email and course_id required']);
            exit;
        }
        if (!studentEnrolledInCourse($connection, (int) $stu['student_id'], $courseId)) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Not enrolled in this course']);
            exit;
        }
        $timetableEntryId = (int) ($_POST['timetable_entry_id'] ?? 0);
        if ($timetableEntryId <= 0) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'timetable_entry_id required — select which assignment you are submitting for']);
            exit;
        }
        $evChk = $connection->prepare("
            SELECT id FROM strack_timetable_entries
            WHERE id = :eid AND course_id = :cid AND entry_type = 'event'
            LIMIT 1
        ");
        $evChk->execute(['eid' => $timetableEntryId, 'cid' => $courseId]);
        if (!(int) ($evChk->fetchColumn() ?: 0)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid assignment for this course']);
            exit;
        }
        if (!isset($_FILES['file']) || !is_uploaded_file($_FILES['file']['tmp_name'] ?? '')) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'No file uploaded']);
            exit;
        }
        $f = $_FILES['file'];
        if (($f['error'] ?? UPLOAD_ERR_OK) !== UPLOAD_ERR_OK) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Upload failed']);
            exit;
        }
        $size = (int) ($f['size'] ?? 0);
        if ($size <= 0 || $size > DEMO_MAX_BYTES) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'File too large (max 10 MB)']);
            exit;
        }
        $orig = basename((string) ($f['name'] ?? 'upload'));
        $ext = strtolower(pathinfo($orig, PATHINFO_EXTENSION));
        if ($ext === '' || !isset(DEMO_ALLOWED_EXT[$ext])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'File type not allowed for demo upload']);
            exit;
        }
        $stored = 'd_' . bin2hex(random_bytes(12)) . '.' . $ext;
        $dest = demoStoredPath($stored);
        if (!move_uploaded_file($f['tmp_name'], $dest)) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Could not save file']);
            exit;
        }
        $ins = $connection->prepare('
            INSERT INTO strack_demo_assignment_submissions
                (student_id, course_id, timetable_entry_id, original_filename, stored_filename, file_size)
            VALUES (:sid, :cid, :eid, :oname, :sname, :sz)
        ');
        $ins->execute([
            'sid' => (int) $stu['student_id'],
            'cid' => $courseId,
            'eid' => $timetableEntryId,
            'oname' => $orig,
            'sname' => $stored,
            'sz' => $size,
        ]);
        echo json_encode([
            'success' => true,
            'id' => (int) $connection->lastInsertId(),
            'original_filename' => $orig,
            'file_size' => $size,
        ]);
        exit;
    }

    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
