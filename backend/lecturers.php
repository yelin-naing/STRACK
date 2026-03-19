<?php
/**
 * Lecturer API - CRUD for lecturer accounts (role='teacher')
 *
 * We store lecturer extra fields in strack_accounts:
 * - lecturer_id
 * - department
 * - modules (currently always 0)
 *
 * Password for newly created lecturers is set to the default temp password 'asd123'.
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
                SELECT id, lecturer_id, full_name, email, department, modules
                FROM strack_accounts
                WHERE role = 'teacher'
                ORDER BY lecturer_id
            ");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'lecturers' => $rows]);
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $lecturerId = trim($input['lecturer_id'] ?? '');
            $fullName = trim($input['full_name'] ?? '');
            $email = trim($input['email'] ?? '');
            $department = trim($input['department'] ?? '');

            if (!$lecturerId || !$fullName || !$email || !$department) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Lecturer ID, full name, email and department are required']);
                exit;
            }

            $defaultPassword = 'asd123';

            $stmt = $connection->prepare("
                INSERT INTO strack_accounts (lecturer_id, full_name, email, department, modules, password, role)
                VALUES (:lecturer_id, :full_name, :email, :department, 0, :password, 'teacher')
                ON DUPLICATE KEY UPDATE
                    full_name = VALUES(full_name),
                    password = VALUES(password),
                    department = VALUES(department),
                    modules = 0,
                    role = 'teacher'
            ");
            $stmt->execute([
                'lecturer_id' => $lecturerId,
                'full_name' => $fullName,
                'email' => $email,
                'department' => $department,
                'password' => $defaultPassword,
            ]);

            $id = $connection->lastInsertId();
            // If this was an UPDATE path, lastInsertId() may be 0; fall back by email.
            if ((int) $id === 0) {
                $q = $connection->prepare("SELECT id FROM strack_accounts WHERE email = :email AND role = 'teacher' LIMIT 1");
                $q->execute(['email' => $email]);
                $id = (int) ($q->fetchColumn() ?: 0);
            }

            echo json_encode(['success' => true, 'id' => (int) $id]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $id = (int) ($input['id'] ?? 0);
            $lecturerId = trim($input['lecturer_id'] ?? '');
            $fullName = trim($input['full_name'] ?? '');
            $email = trim($input['email'] ?? '');
            $department = trim($input['department'] ?? '');

            if (!$id || !$lecturerId || !$fullName || !$email || !$department) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id, Lecturer ID, full name, email and department are required']);
                exit;
            }

            $stmt = $connection->prepare("
                UPDATE strack_accounts
                SET lecturer_id = :lecturer_id,
                    full_name = :full_name,
                    email = :email,
                    department = :department,
                    modules = 0,
                    role = 'teacher'
                WHERE id = :id
            ");
            $stmt->execute([
                'id' => $id,
                'lecturer_id' => $lecturerId,
                'full_name' => $fullName,
                'email' => $email,
                'department' => $department,
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

            $stmt = $connection->prepare("DELETE FROM strack_accounts WHERE id = :id AND role = 'teacher'");
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

