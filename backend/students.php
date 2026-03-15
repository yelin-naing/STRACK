<?php
/**
 * Students API - CRUD for strack_students
 * GET: list all (with optional department filter)
 * POST: create (gpa, points, attendance default to 0)
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
                SELECT id, student_id, full_name, email, 
                       COALESCE(`password`, '') as student_pwd,
                       department, year, 
                       COALESCE(gpa, 0) as gpa, COALESCE(points, 0) as points, COALESCE(attendance, 0) as attendance
                FROM strack_students 
                ORDER BY student_id
            ");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            // Map student_pwd to password for frontend (avoid MySQL reserved word issues)
            foreach ($rows as &$r) {
                $r['password'] = $r['student_pwd'] ?? '';
                unset($r['student_pwd']);
            }
            unset($r);
            echo json_encode(['success' => true, 'students' => $rows]);
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $studentId = trim($input['student_id'] ?? '');
            $fullName = trim($input['full_name'] ?? '');
            $email = trim($input['email'] ?? '');
            $password = trim($input['password'] ?? '');
            $department = trim($input['department'] ?? '');
            $year = trim($input['year'] ?? '');

            if (!$studentId || !$fullName || !$email || !$password) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Student ID, full name, email and password are required']);
                exit;
            }

            $stmt = $connection->prepare("
                INSERT INTO strack_students (student_id, full_name, email, password, department, year, gpa, points, attendance)
                VALUES (:student_id, :full_name, :email, :password, :department, :year, 0, 0, 0)
            ");
            $stmt->execute([
                'student_id' => $studentId,
                'full_name' => $fullName,
                'email' => $email,
                'password' => $password,
                'department' => $department ?: null,
                'year' => $year ?: null,
            ]);
            $id = $connection->lastInsertId();
            echo json_encode(['success' => true, 'id' => (int) $id]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $id = (int) ($input['id'] ?? 0);
            $studentId = trim($input['student_id'] ?? '');
            $fullName = trim($input['full_name'] ?? '');
            $email = trim($input['email'] ?? '');
            $password = trim($input['password'] ?? '');
            $department = trim($input['department'] ?? '');
            $year = trim($input['year'] ?? '');

            if (!$id || !$studentId || !$fullName || !$email) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id, student ID, full name and email are required']);
                exit;
            }

            if ($password !== '') {
                $stmt = $connection->prepare("
                    UPDATE strack_students 
                    SET student_id = :student_id, full_name = :full_name, email = :email, password = :password,
                        department = :department, year = :year
                    WHERE id = :id
                ");
                $stmt->execute([
                    'id' => $id,
                    'student_id' => $studentId,
                    'full_name' => $fullName,
                    'email' => $email,
                    'password' => $password,
                    'department' => $department ?: null,
                    'year' => $year ?: null,
                ]);
            } else {
                $stmt = $connection->prepare("
                    UPDATE strack_students 
                    SET student_id = :student_id, full_name = :full_name, email = :email, 
                        department = :department, year = :year
                    WHERE id = :id
                ");
                $stmt->execute([
                    'id' => $id,
                    'student_id' => $studentId,
                    'full_name' => $fullName,
                    'email' => $email,
                    'department' => $department ?: null,
                    'year' => $year ?: null,
                ]);
            }
            echo json_encode(['success' => true]);
            break;

        case 'DELETE':
            $id = (int) ($_GET['id'] ?? 0);
            if (!$id) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id is required']);
                exit;
            }
            $stmt = $connection->prepare("DELETE FROM strack_students WHERE id = :id");
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
