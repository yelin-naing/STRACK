<?php
/**
 * Courses API - CRUD for strack_courses
 * GET: list all
 * POST: create
 * PUT: update
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

try {
    $connection = getConnection();

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
                    COALESCE(c.credits, 0) as credits
                FROM strack_courses c
                LEFT JOIN strack_lecturers l ON l.lecturer_id = c.lecturer_id
                LEFT JOIN strack_accounts a ON a.id = l.account_id AND a.role = 'teacher'
                ORDER BY c.course_code
            ");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'courses' => $rows]);
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $courseCode = trim($input['course_code'] ?? '');
            $courseName = trim($input['course_name'] ?? '');
            $department = trim($input['department'] ?? '');
            $lecturerId = trim($input['lecturer_id'] ?? '');
            $credits = (int) ($input['credits'] ?? 0);

            if (!$courseCode || !$courseName) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Course code and name are required']);
                exit;
            }

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

            $id = $connection->lastInsertId();
            echo json_encode(['success' => true, 'id' => (int) $id]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $id = (int) ($input['id'] ?? 0);
            $courseCode = trim($input['course_code'] ?? '');
            $courseName = trim($input['course_name'] ?? '');
            $department = trim($input['department'] ?? '');
            $lecturerId = trim($input['lecturer_id'] ?? '');
            $credits = (int) ($input['credits'] ?? 0);

            if (!$id || !$courseCode || !$courseName) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id, course code and name are required']);
                exit;
            }

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
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

