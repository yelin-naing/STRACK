<?php
/**
 * Courses API - CRUD for strack_courses
 * GET: list all (with enrolled students)
 * POST: create (+ optional student_ids enrollment array)
 * PUT: update (+ optional student_ids enrollment array)
 * DELETE: delete by id
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

$method = $_SERVER['REQUEST_METHOD'];

function normalizeStudentIds($input): array
{
    if (!is_array($input)) {
        return [];
    }
    $ids = [];
    foreach ($input as $v) {
        $id = (int) $v;
        if ($id > 0) {
            $ids[$id] = true;
        }
    }
    return array_keys($ids);
}

function syncEnrollments(PDO $connection, int $courseId, array $studentIds): void
{
    $del = $connection->prepare("DELETE FROM strack_course_students WHERE course_id = :course_id");
    $del->execute(['course_id' => $courseId]);

    if (empty($studentIds)) {
        return;
    }

    $ins = $connection->prepare("
        INSERT INTO strack_course_students (course_id, student_id)
        VALUES (:course_id, :student_id)
    ");
    foreach ($studentIds as $sid) {
        $ins->execute([
            'course_id' => $courseId,
            'student_id' => $sid,
        ]);
    }
}

function ensureEnrollmentTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_course_students (
            course_id INT NOT NULL,
            student_id INT NOT NULL,
            PRIMARY KEY (course_id, student_id),
            CONSTRAINT fk_course_students_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE,
            CONSTRAINT fk_course_students_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
}

try {
    $connection = getConnection();
    ensureEnrollmentTable($connection);

    switch ($method) {
        case 'GET':
            $stmt = $connection->query("
                SELECT
                    c.id,
                    c.course_code,
                    c.course_name,
                    c.department,
                    c.lecturer_id,
                    COALESCE(a.full_name, c.lecturer_id) as lecturer_name,
                    COALESCE(c.credits, 0) as credits,
                    COUNT(cs.student_id) as enrolled_count
                FROM strack_courses c
                LEFT JOIN strack_lecturers l ON l.lecturer_id = c.lecturer_id
                LEFT JOIN strack_accounts a ON a.id = l.account_id AND a.role = 'teacher'
                LEFT JOIN strack_course_students cs ON cs.course_id = c.id
                GROUP BY c.id, c.course_code, c.course_name, c.department, c.lecturer_id, lecturer_name, c.credits
                ORDER BY c.course_code
            ");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $enrollmentStmt = $connection->query("
                SELECT
                    cs.course_id,
                    s.id as student_id,
                    s.student_id as student_code,
                    s.full_name as student_name
                FROM strack_course_students cs
                INNER JOIN strack_students s ON s.id = cs.student_id
                ORDER BY s.student_id
            ");
            $enrollmentsByCourse = [];
            foreach ($enrollmentStmt->fetchAll(PDO::FETCH_ASSOC) as $r) {
                $cid = (int) $r['course_id'];
                if (!isset($enrollmentsByCourse[$cid])) {
                    $enrollmentsByCourse[$cid] = [];
                }
                $enrollmentsByCourse[$cid][] = [
                    'id' => (int) $r['student_id'],
                    'student_id' => $r['student_code'],
                    'full_name' => $r['student_name'],
                ];
            }

            foreach ($rows as &$row) {
                $cid = (int) $row['id'];
                $row['enrolled_count'] = (int) ($row['enrolled_count'] ?? 0);
                $row['students'] = $enrollmentsByCourse[$cid] ?? [];
                $row['student_ids'] = array_map(static fn ($s) => (int) $s['id'], $row['students']);
            }
            unset($row);
            echo json_encode(['success' => true, 'courses' => $rows]);
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $courseCode = trim($input['course_code'] ?? '');
            $courseName = trim($input['course_name'] ?? '');
            $department = trim($input['department'] ?? '');
            $lecturerId = trim($input['lecturer_id'] ?? '');
            $credits = (int) ($input['credits'] ?? 0);
            $studentIds = normalizeStudentIds($input['student_ids'] ?? []);

            if (!$courseCode || !$courseName) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Course code and name are required']);
                exit;
            }

            $connection->beginTransaction();

            $stmt = $connection->prepare("
                INSERT INTO strack_courses (course_code, course_name, department, lecturer_id, credits)
                VALUES (:course_code, :course_name, :department, :lecturer_id, :credits)
            ");
            $stmt->execute([
                'course_code' => $courseCode,
                'course_name' => $courseName,
                'department' => $department ?: null,
                'lecturer_id' => $lecturerId ?: null,
                'credits' => $credits,
            ]);

            $id = (int) $connection->lastInsertId();
            syncEnrollments($connection, $id, $studentIds);

            $connection->commit();
            echo json_encode(['success' => true, 'id' => $id]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $id = (int) ($input['id'] ?? 0);
            $courseCode = trim($input['course_code'] ?? '');
            $courseName = trim($input['course_name'] ?? '');
            $department = trim($input['department'] ?? '');
            $lecturerId = trim($input['lecturer_id'] ?? '');
            $credits = (int) ($input['credits'] ?? 0);
            $studentIds = normalizeStudentIds($input['student_ids'] ?? []);

            if (!$id || !$courseCode || !$courseName) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id, course code and name are required']);
                exit;
            }

            $connection->beginTransaction();

            $stmt = $connection->prepare("
                UPDATE strack_courses
                SET course_code = :course_code,
                    course_name = :course_name,
                    department = :department,
                    lecturer_id = :lecturer_id,
                    credits = :credits
                WHERE id = :id
            ");
            $stmt->execute([
                'id' => $id,
                'course_code' => $courseCode,
                'course_name' => $courseName,
                'department' => $department ?: null,
                'lecturer_id' => $lecturerId ?: null,
                'credits' => $credits,
            ]);

            syncEnrollments($connection, $id, $studentIds);

            $connection->commit();
            echo json_encode(['success' => true]);
            break;

        case 'DELETE':
            $id = (int) ($_GET['id'] ?? 0);
            if (!$id) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id is required']);
                exit;
            }
            $stmt = $connection->prepare("DELETE FROM strack_courses WHERE id = :id");
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

