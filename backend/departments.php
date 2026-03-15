<?php
/**
 * Departments API - CRUD for strack_departments
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
            $stmt = $connection->query("SELECT id, code, name, description FROM strack_departments ORDER BY code");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'departments' => $rows]);
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $code = trim($input['code'] ?? '');
            $name = trim($input['name'] ?? '');
            $description = trim($input['description'] ?? '');

            if (!$code || !$name) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Code and name are required']);
                exit;
            }

            $stmt = $connection->prepare(
                "INSERT INTO strack_departments (code, name, description) VALUES (:code, :name, :description)"
            );
            $stmt->execute([
                'code' => $code,
                'name' => $name,
                'description' => $description,
            ]);
            $id = $connection->lastInsertId();
            echo json_encode(['success' => true, 'id' => (int) $id]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $id = (int) ($input['id'] ?? 0);
            $code = trim($input['code'] ?? '');
            $name = trim($input['name'] ?? '');
            $description = trim($input['description'] ?? '');

            if (!$id || !$code || !$name) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id, code and name are required']);
                exit;
            }

            $stmt = $connection->prepare(
                "UPDATE strack_departments SET code = :code, name = :name, description = :description WHERE id = :id"
            );
            $stmt->execute([
                'id' => $id,
                'code' => $code,
                'name' => $name,
                'description' => $description,
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
            $stmt = $connection->prepare("DELETE FROM strack_departments WHERE id = :id");
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
