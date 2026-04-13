<?php
/**
 * Notifications API
 * GET  ?email=student@uni.ac.uk[&limit=40] -> list notifications for recipient
 * PUT  { email, id } or { email, mark_all: true } -> mark read
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

function ensureNotificationsTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_notifications (
            id INT AUTO_INCREMENT PRIMARY KEY,
            recipient_email VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            type VARCHAR(64) NOT NULL DEFAULT 'general',
            is_read TINYINT(1) NOT NULL DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_notifications_email (recipient_email),
            INDEX idx_notifications_email_read (recipient_email, is_read),
            INDEX idx_notifications_created (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
}

try {
    $connection = getConnection();
    ensureNotificationsTable($connection);

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        $email = strtolower(trim($_GET['email'] ?? ''));
        $limit = (int) ($_GET['limit'] ?? 40);
        if ($email === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'email is required']);
            exit;
        }
        if ($limit <= 0) {
            $limit = 40;
        }
        if ($limit > 200) {
            $limit = 200;
        }

        $stmt = $connection->prepare("
            SELECT id, title, message, type, is_read, created_at
            FROM strack_notifications
            WHERE recipient_email = :email
            ORDER BY created_at DESC, id DESC
            LIMIT {$limit}
        ");
        $stmt->execute(['email' => $email]);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach ($rows as &$row) {
            $row['id'] = (int) $row['id'];
            $row['is_read'] = (int) $row['is_read'] === 1;
        }
        unset($row);

        $unreadStmt = $connection->prepare('
            SELECT COUNT(*) FROM strack_notifications
            WHERE recipient_email = :email AND is_read = 0
        ');
        $unreadStmt->execute(['email' => $email]);
        $unreadCount = (int) $unreadStmt->fetchColumn();

        echo json_encode([
            'success' => true,
            'notifications' => $rows,
            'unread_count' => $unreadCount,
        ]);
        exit;
    }

    if ($method === 'PUT') {
        $input = json_decode(file_get_contents('php://input'), true) ?: [];
        $email = strtolower(trim($input['email'] ?? ''));
        if ($email === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'email is required']);
            exit;
        }

        if (!empty($input['mark_all'])) {
            $stmt = $connection->prepare('
                UPDATE strack_notifications
                SET is_read = 1
                WHERE recipient_email = :email AND is_read = 0
            ');
            $stmt->execute(['email' => $email]);
            echo json_encode(['success' => true, 'updated' => (int) $stmt->rowCount()]);
            exit;
        }

        $id = (int) ($input['id'] ?? 0);
        if ($id <= 0) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'id is required']);
            exit;
        }
        $stmt = $connection->prepare('
            UPDATE strack_notifications
            SET is_read = 1
            WHERE id = :id AND recipient_email = :email
            LIMIT 1
        ');
        $stmt->execute([
            'id' => $id,
            'email' => $email,
        ]);
        echo json_encode(['success' => true, 'updated' => (int) $stmt->rowCount()]);
        exit;
    }

    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server error']);
}

