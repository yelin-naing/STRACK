<?php
/**
 * Attendance marks API.
 *
 * GET  ?user_email=...&class_id=...                       lecturer loads marks for one class
 * GET  ?user_email=...&student_summary=1                  student loads attendance summary by course
 * GET  ?user_email=...&lecturer_summary=1                 lecturer rollup, by_course, trend (optional course_ids=)
 * POST body: { user_email, class_id, marks: {studentId: status} }  lecturer saves marks
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

const ATTENDANCE_STATUSES = ['present', 'late', 'absent'];

function normalizeEmail(string $email): string
{
    $value = trim($email);
    return function_exists('mb_strtolower') ? mb_strtolower($value, 'UTF-8') : strtolower($value);
}

function ensureAttendanceTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_attendance_marks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            class_id INT NOT NULL,
            course_id INT NOT NULL,
            student_id INT NOT NULL,
            status VARCHAR(16) NOT NULL,
            marked_by_account_id INT NOT NULL,
            marked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY uq_attendance_class_student (class_id, student_id),
            INDEX idx_attendance_student (student_id),
            INDEX idx_attendance_course (course_id),
            INDEX idx_attendance_status (status),
            CONSTRAINT fk_attendance_class FOREIGN KEY (class_id) REFERENCES strack_timetable_entries (id) ON DELETE CASCADE,
            CONSTRAINT fk_attendance_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE,
            CONSTRAINT fk_attendance_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE,
            CONSTRAINT fk_attendance_marker FOREIGN KEY (marked_by_account_id) REFERENCES strack_accounts (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
}

function resolveUser(PDO $connection, string $email): ?array
{
    $norm = normalizeEmail($email);
    if ($norm === '') {
        return null;
    }

    $accStmt = $connection->prepare("
        SELECT id, full_name, email, role
        FROM strack_accounts
        WHERE LOWER(TRIM(email)) = :email
        LIMIT 1
    ");
    $accStmt->execute(['email' => $norm]);
    $acc = $accStmt->fetch(PDO::FETCH_ASSOC);
    if ($acc && ($acc['role'] ?? '') === 'teacher') {
        $lidStmt = $connection->prepare('SELECT lecturer_id FROM strack_lecturers WHERE account_id = :id LIMIT 1');
        $lidStmt->execute(['id' => (int) $acc['id']]);
        return [
            'role' => 'lecturer',
            'account_id' => (int) $acc['id'],
            'email' => (string) $acc['email'],
            'lecturer_id' => (string) ($lidStmt->fetchColumn() ?: ''),
        ];
    }

    $stuStmt = $connection->prepare("
        SELECT id, email
        FROM strack_students
        WHERE LOWER(TRIM(email)) = :email
        LIMIT 1
    ");
    $stuStmt->execute(['email' => $norm]);
    $stu = $stuStmt->fetch(PDO::FETCH_ASSOC);
    if ($stu) {
        return [
            'role' => 'student',
            'student_id' => (int) $stu['id'],
            'email' => (string) $stu['email'],
        ];
    }

    return null;
}

function classOwnedByLecturer(PDO $connection, int $classId, array $lecturer): ?array
{
    if (($lecturer['role'] ?? '') !== 'lecturer' || $classId <= 0) {
        return null;
    }

    $stmt = $connection->prepare("
        SELECT e.id AS class_id, e.course_id, c.lecturer_id
        FROM strack_timetable_entries e
        LEFT JOIN strack_courses c ON c.id = e.course_id
        WHERE e.id = :class_id AND e.entry_type = 'class'
        LIMIT 1
    ");
    $stmt->execute(['class_id' => $classId]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$row || (int) ($row['course_id'] ?? 0) <= 0) {
        return null;
    }

    $lecturerOwnsCourse = StringMatches::eqTrimCaseSensitive(
        (string) ($row['lecturer_id'] ?? ''),
        (string) ($lecturer['lecturer_id'] ?? '')
    );

    if ($lecturerOwnsCourse) {
        return [
            'class_id' => (int) $row['class_id'],
            'course_id' => (int) $row['course_id'],
        ];
    }

    $assignedStmt = $connection->prepare("
        SELECT entry_id
        FROM strack_timetable_entry_lecturers
        WHERE entry_id = :class_id AND account_id = :account_id
        LIMIT 1
    ");
    $assignedStmt->execute([
        'class_id' => $classId,
        'account_id' => (int) ($lecturer['account_id'] ?? 0),
    ]);
    if ($assignedStmt->fetch(PDO::FETCH_ASSOC)) {
        return [
            'class_id' => (int) $row['class_id'],
            'course_id' => (int) $row['course_id'],
        ];
    }

    return null;
}

final class StringMatches
{
    public static function eqTrimCaseSensitive(string $a, string $b): bool
    {
        return trim($a) !== '' && trim($a) === trim($b);
    }
}

function readJsonBody(): array
{
    $raw = file_get_contents('php://input');
    $parsed = json_decode($raw, true);
    return is_array($parsed) ? $parsed : [];
}

try {
    $connection = getConnection();
    ensureAttendanceTable($connection);

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        $email = (string) ($_GET['user_email'] ?? '');
        $viewer = resolveUser($connection, $email);
        if (!$viewer) {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Invalid user']);
            exit;
        }

        if (isset($_GET['student_summary'])) {
            if (($viewer['role'] ?? '') !== 'student') {
                http_response_code(403);
                echo json_encode(['success' => false, 'error' => 'Only students can view student summary']);
                exit;
            }
            $studentId = (int) ($viewer['student_id'] ?? 0);
            $summaryStmt = $connection->prepare("
                SELECT
                    am.course_id,
                    SUM(CASE WHEN am.status = 'present' THEN 1 ELSE 0 END) AS present_count,
                    SUM(CASE WHEN am.status = 'late' THEN 1 ELSE 0 END) AS late_count,
                    SUM(CASE WHEN am.status = 'absent' THEN 1 ELSE 0 END) AS absent_count,
                    COUNT(*) AS total_count
                FROM strack_attendance_marks am
                WHERE am.student_id = :student_id
                GROUP BY am.course_id
            ");
            $summaryStmt->execute(['student_id' => $studentId]);
            $rows = $summaryStmt->fetchAll(PDO::FETCH_ASSOC);

            $byCourse = [];
            foreach ($rows as $row) {
                $present = (int) ($row['present_count'] ?? 0);
                $late = (int) ($row['late_count'] ?? 0);
                $absent = (int) ($row['absent_count'] ?? 0);
                $total = (int) ($row['total_count'] ?? 0);
                $rate = $total > 0 ? (int) round(($present / $total) * 100) : 0;
                $byCourse[] = [
                    'course_id' => (int) ($row['course_id'] ?? 0),
                    'present' => $present,
                    'late' => $late,
                    'absent' => $absent,
                    'total' => $total,
                    'attendance_rate' => $rate,
                ];
            }

            $rollupStmt = $connection->prepare("
                SELECT
                    COALESCE(SUM(CASE WHEN am.status = 'present' THEN 1 ELSE 0 END), 0) AS present,
                    COALESCE(SUM(CASE WHEN am.status = 'late' THEN 1 ELSE 0 END), 0) AS late,
                    COALESCE(SUM(CASE WHEN am.status = 'absent' THEN 1 ELSE 0 END), 0) AS absent
                FROM strack_attendance_marks am
                WHERE am.student_id = :student_id
            ");
            $rollupStmt->execute(['student_id' => $studentId]);
            $rollupRow = $rollupStmt->fetch(PDO::FETCH_ASSOC) ?: [];
            $rollup = [
                'present' => (int) ($rollupRow['present'] ?? 0),
                'late' => (int) ($rollupRow['late'] ?? 0),
                'absent' => (int) ($rollupRow['absent'] ?? 0),
            ];

            echo json_encode(['success' => true, 'by_course' => $byCourse, 'rollup' => $rollup]);
            exit;
        }

        if (isset($_GET['lecturer_summary'])) {
            if (($viewer['role'] ?? '') !== 'lecturer') {
                http_response_code(403);
                echo json_encode(['success' => false, 'error' => 'Only lecturers can view this summary']);
                exit;
            }
            $lid = trim((string) ($viewer['lecturer_id'] ?? ''));
            if ($lid === '') {
                echo json_encode([
                    'success' => true,
                    'rollup' => ['present' => 0, 'late' => 0, 'absent' => 0, 'total' => 0, 'rate' => 0],
                    'by_course' => [],
                    'trend' => [],
                ]);
                exit;
            }

            $filterIds = [];
            $rawFilter = (string) ($_GET['course_ids'] ?? '');
            if (trim($rawFilter) !== '') {
                foreach (explode(',', $rawFilter) as $p) {
                    $cid = (int) trim($p);
                    if ($cid > 0) {
                        $filterIds[] = $cid;
                    }
                }
                $filterIds = array_values(array_unique($filterIds));
            }
            $allowedCourseFilter = [];
            if ($filterIds !== []) {
                $ph = implode(',', array_fill(0, count($filterIds), '?'));
                $chk = $connection->prepare("
                    SELECT id FROM strack_courses
                    WHERE TRIM(lecturer_id) = TRIM(?) AND id IN ($ph)
                ");
                $chk->execute(array_merge([$lid], $filterIds));
                while ($cid = $chk->fetchColumn()) {
                    $allowedCourseFilter[] = (int) $cid;
                }
            }
            $courseFilterSql = '';
            $rollupParams = [$lid];
            if ($allowedCourseFilter !== []) {
                $courseFilterSql = ' AND am.course_id IN (' . implode(',', array_fill(0, count($allowedCourseFilter), '?')) . ')';
                foreach ($allowedCourseFilter as $cid) {
                    $rollupParams[] = $cid;
                }
            }

            $rollupStmt = $connection->prepare("
                SELECT
                    COALESCE(SUM(CASE WHEN am.status = 'present' THEN 1 ELSE 0 END), 0) AS present,
                    COALESCE(SUM(CASE WHEN am.status = 'late' THEN 1 ELSE 0 END), 0) AS late,
                    COALESCE(SUM(CASE WHEN am.status = 'absent' THEN 1 ELSE 0 END), 0) AS absent,
                    COUNT(*) AS total
                FROM strack_attendance_marks am
                INNER JOIN strack_courses c ON c.id = am.course_id
                WHERE TRIM(c.lecturer_id) = TRIM(?)
                $courseFilterSql
            ");
            $rollupStmt->execute($rollupParams);
            $rollupRow = $rollupStmt->fetch(PDO::FETCH_ASSOC) ?: [];
            $present = (int) ($rollupRow['present'] ?? 0);
            $late = (int) ($rollupRow['late'] ?? 0);
            $absent = (int) ($rollupRow['absent'] ?? 0);
            $total = (int) ($rollupRow['total'] ?? 0);
            $rate = $total > 0 ? (int) round(($present / $total) * 100) : 0;
            $rollup = [
                'present' => $present,
                'late' => $late,
                'absent' => $absent,
                'total' => $total,
                'rate' => $rate,
            ];

            $byCourseStmt = $connection->prepare("
                SELECT
                    am.course_id,
                    TRIM(COALESCE(c.course_code, '')) AS course_code,
                    TRIM(COALESCE(c.course_name, '')) AS course_name,
                    COALESCE(SUM(CASE WHEN am.status = 'present' THEN 1 ELSE 0 END), 0) AS present,
                    COALESCE(SUM(CASE WHEN am.status = 'late' THEN 1 ELSE 0 END), 0) AS late,
                    COALESCE(SUM(CASE WHEN am.status = 'absent' THEN 1 ELSE 0 END), 0) AS absent,
                    COUNT(*) AS total
                FROM strack_attendance_marks am
                INNER JOIN strack_courses c ON c.id = am.course_id
                WHERE TRIM(c.lecturer_id) = TRIM(:lid)
                GROUP BY am.course_id, c.course_code, c.course_name
                ORDER BY c.course_code ASC
            ");
            $byCourseStmt->execute(['lid' => $lid]);
            $byCourse = [];
            foreach ($byCourseStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $t = (int) ($row['total'] ?? 0);
                $p = (int) ($row['present'] ?? 0);
                $byCourse[] = [
                    'course_id' => (int) ($row['course_id'] ?? 0),
                    'course_code' => (string) ($row['course_code'] ?? ''),
                    'course_name' => (string) ($row['course_name'] ?? ''),
                    'present' => $p,
                    'late' => (int) ($row['late'] ?? 0),
                    'absent' => (int) ($row['absent'] ?? 0),
                    'total' => $t,
                    'rate' => $t > 0 ? (int) round(($p / $t) * 100) : 0,
                ];
            }

            $trendStmt = $connection->prepare("
                SELECT
                    e.entry_date AS session_date,
                    COALESCE(SUM(CASE WHEN am.status = 'present' THEN 1 ELSE 0 END), 0) AS present,
                    COALESCE(SUM(CASE WHEN am.status = 'late' THEN 1 ELSE 0 END), 0) AS late,
                    COALESCE(SUM(CASE WHEN am.status = 'absent' THEN 1 ELSE 0 END), 0) AS absent,
                    COUNT(*) AS total
                FROM strack_attendance_marks am
                INNER JOIN strack_courses c ON c.id = am.course_id
                INNER JOIN strack_timetable_entries e ON e.id = am.class_id AND e.entry_type = 'class'
                WHERE TRIM(c.lecturer_id) = TRIM(?)
                $courseFilterSql
                GROUP BY e.entry_date
                ORDER BY e.entry_date ASC
                LIMIT 400
            ");
            $trendStmt->execute($rollupParams);
            $trend = [];
            foreach ($trendStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $t = (int) ($row['total'] ?? 0);
                $p = (int) ($row['present'] ?? 0);
                $trend[] = [
                    'session_date' => (string) ($row['session_date'] ?? ''),
                    'present' => $p,
                    'late' => (int) ($row['late'] ?? 0),
                    'absent' => (int) ($row['absent'] ?? 0),
                    'total' => $t,
                    'rate' => $t > 0 ? (int) round(($p / $t) * 100) : 0,
                ];
            }

            echo json_encode(['success' => true, 'rollup' => $rollup, 'by_course' => $byCourse, 'trend' => $trend]);
            exit;
        }

        $classId = (int) ($_GET['class_id'] ?? 0);
        if (($viewer['role'] ?? '') !== 'lecturer' || $classId <= 0) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'class_id and lecturer user are required']);
            exit;
        }
        $classInfo = classOwnedByLecturer($connection, $classId, $viewer);
        if (!$classInfo) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'You are not assigned to this class']);
            exit;
        }

        $marksStmt = $connection->prepare("
            SELECT student_id, status
            FROM strack_attendance_marks
            WHERE class_id = :class_id
        ");
        $marksStmt->execute(['class_id' => $classId]);
        $rows = $marksStmt->fetchAll(PDO::FETCH_ASSOC);
        $marks = [];
        foreach ($rows as $row) {
            $marks[(int) $row['student_id']] = (string) $row['status'];
        }
        echo json_encode(['success' => true, 'marks' => $marks, 'course_id' => (int) $classInfo['course_id']]);
        exit;
    }

    if ($method === 'POST') {
        $input = readJsonBody();
        $email = (string) ($input['user_email'] ?? '');
        $viewer = resolveUser($connection, $email);
        if (!$viewer || ($viewer['role'] ?? '') !== 'lecturer') {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Only lecturers can mark attendance']);
            exit;
        }

        $classId = (int) ($input['class_id'] ?? 0);
        $classInfo = classOwnedByLecturer($connection, $classId, $viewer);
        if (!$classInfo) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'You are not assigned to this class']);
            exit;
        }

        $rawMarks = $input['marks'] ?? [];
        if (!is_array($rawMarks)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'marks must be an object map of student_id -> status']);
            exit;
        }

        $filteredMarks = [];
        foreach ($rawMarks as $studentId => $status) {
            $sid = (int) $studentId;
            $st = trim((string) $status);
            if ($sid <= 0 || !in_array($st, ATTENDANCE_STATUSES, true)) {
                continue;
            }
            $filteredMarks[$sid] = $st;
        }

        $connection->beginTransaction();
        $upsertStmt = $connection->prepare("
            INSERT INTO strack_attendance_marks (class_id, course_id, student_id, status, marked_by_account_id)
            VALUES (:class_id, :course_id, :student_id, :status, :marked_by_account_id)
            ON DUPLICATE KEY UPDATE
                status = VALUES(status),
                course_id = VALUES(course_id),
                marked_by_account_id = VALUES(marked_by_account_id),
                marked_at = CURRENT_TIMESTAMP
        ");

        foreach ($filteredMarks as $sid => $status) {
            $upsertStmt->execute([
                'class_id' => (int) $classInfo['class_id'],
                'course_id' => (int) $classInfo['course_id'],
                'student_id' => $sid,
                'status' => $status,
                'marked_by_account_id' => (int) $viewer['account_id'],
            ]);
        }
        $connection->commit();

        echo json_encode(['success' => true, 'saved_count' => count($filteredMarks)]);
        exit;
    }

    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
} catch (PDOException $e) {
    if (isset($connection) && $connection->inTransaction()) {
        $connection->rollBack();
    }
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

