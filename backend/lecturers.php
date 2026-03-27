<?php
/**
 * Lecturer API - CRUD for lecturers.
 * Login credentials live in strack_accounts (role = teacher).
 * Profile fields (lecturer_id, department, modules) live in strack_lecturers (account_id FK).
 *
 * New lecturers get temp password 'asd123' (bcrypt).
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
                    a.id,
                    l.lecturer_id,
                    a.full_name,
                    a.email,
                    l.department,
                    l.modules
                FROM strack_accounts a
                INNER JOIN strack_lecturers l ON l.account_id = a.id
                WHERE a.role = 'teacher'
                ORDER BY l.lecturer_id
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

            $defaultPassword = password_hash('asd123', PASSWORD_BCRYPT);

            $connection->beginTransaction();

            $stmt = $connection->prepare("
                INSERT INTO strack_accounts (email, password, full_name, role)
                VALUES (:email, :password, :full_name, 'teacher')
                ON DUPLICATE KEY UPDATE
                    password = VALUES(password),
                    full_name = VALUES(full_name),
                    role = 'teacher'
            ");
            $stmt->execute([
                'email' => $email,
                'password' => $defaultPassword,
                'full_name' => $fullName,
            ]);

            $q = $connection->prepare('SELECT id FROM strack_accounts WHERE LOWER(TRIM(email)) = LOWER(TRIM(:email)) LIMIT 1');
            $q->execute(['email' => $email]);
            $accountId = (int) $q->fetchColumn();
            if ($accountId === 0) {
                $connection->rollBack();
                http_response_code(500);
                echo json_encode(['success' => false, 'error' => 'Could not resolve account id']);
                exit;
            }

            $stmtL = $connection->prepare("
                INSERT INTO strack_lecturers (account_id, lecturer_id, department, modules)
                VALUES (:account_id, :lecturer_id, :department, 0)
                ON DUPLICATE KEY UPDATE
                    lecturer_id = VALUES(lecturer_id),
                    department = VALUES(department),
                    modules = 0
            ");
            $stmtL->execute([
                'account_id' => $accountId,
                'lecturer_id' => $lecturerId,
                'department' => $department,
            ]);

            $connection->commit();

            echo json_encode(['success' => true, 'id' => $accountId]);
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

            $connection->beginTransaction();

            $stmt = $connection->prepare("
                UPDATE strack_accounts
                SET full_name = :full_name,
                    email = :email
                WHERE id = :id AND role = 'teacher'
            ");
            $stmt->execute([
                'id' => $id,
                'full_name' => $fullName,
                'email' => $email,
            ]);

            $stmtL = $connection->prepare("
                UPDATE strack_lecturers l
                INNER JOIN strack_accounts a ON a.id = l.account_id
                SET l.lecturer_id = :lecturer_id,
                    l.department = :department,
                    l.modules = 0
                WHERE a.id = :id AND a.role = 'teacher'
            ");
            $stmtL->execute([
                'id' => $id,
                'lecturer_id' => $lecturerId,
                'department' => $department,
            ]);

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

            $stmt = $connection->prepare('DELETE FROM strack_accounts WHERE id = :id AND role = \'teacher\'');
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
