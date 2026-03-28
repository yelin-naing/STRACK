<?php
/**
 * Change password for strack_accounts (admin/teacher) or strack_students (student).
 * POST JSON: email, current_password, new_password
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$email = trim((string) ($input['email'] ?? ''));
$current = (string) ($input['current_password'] ?? '');
$new = (string) ($input['new_password'] ?? '');

if ($email === '' || $current === '' || $new === '') {
    echo json_encode(['success' => false, 'message' => 'Email, current password, and new password are required.']);
    exit();
}

$minLen = 6;
if (strlen($new) < $minLen) {
    echo json_encode(['success' => false, 'message' => "New password must be at least {$minLen} characters."]);
    exit();
}

if ($new === $current) {
    echo json_encode(['success' => false, 'message' => 'New password must be different from your current password.']);
    exit();
}

require_once __DIR__ . '/getConnection.php';

function looksLikePasswordHash(string $stored): bool
{
    if ($stored === '' || $stored[0] !== '$') {
        return false;
    }
    return strncmp($stored, '$2a$', 4) === 0
        || strncmp($stored, '$2b$', 4) === 0
        || strncmp($stored, '$2y$', 4) === 0
        || strncmp($stored, '$argon2', 7) === 0;
}

function passwordMatches(string $stored, string $plain): bool
{
    $stored = trim($stored);
    $plain = trim($plain);
    if ($stored === '' || $plain === '') {
        return false;
    }
    if (looksLikePasswordHash($stored)) {
        return password_verify($plain, $stored);
    }
    $info = password_get_info($stored);
    if (($info['algo'] ?? 0) !== 0) {
        return password_verify($plain, $stored);
    }
    return $stored === $plain;
}

try {
    $connection = getConnection();
    $emailNorm = function_exists('mb_strtolower')
        ? mb_strtolower($email, 'UTF-8')
        : strtolower($email);

    $stmt = $connection->prepare(
        "SELECT id, `password` AS pwd FROM strack_accounts WHERE LOWER(TRIM(email)) = :email LIMIT 1"
    );
    $stmt->execute(['email' => $emailNorm]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        $stored = (string) ($row['pwd'] ?? '');
        if (!passwordMatches($stored, $current)) {
            echo json_encode(['success' => false, 'message' => 'Current password is incorrect.']);
            exit();
        }
        $hash = password_hash($new, PASSWORD_BCRYPT);
        $upd = $connection->prepare('UPDATE strack_accounts SET `password` = :p WHERE id = :id LIMIT 1');
        $upd->execute(['p' => $hash, 'id' => (int) $row['id']]);
        echo json_encode(['success' => true, 'message' => 'Password updated successfully.']);
        exit();
    }

    $stmt = $connection->prepare(
        "SELECT id, `password` AS pwd FROM strack_students WHERE LOWER(TRIM(email)) = :email LIMIT 1"
    );
    $stmt->execute(['email' => $emailNorm]);
    $stu = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($stu) {
        $stored = (string) ($stu['pwd'] ?? '');
        if (!passwordMatches($stored, $current)) {
            echo json_encode(['success' => false, 'message' => 'Current password is incorrect.']);
            exit();
        }
        $hash = password_hash($new, PASSWORD_BCRYPT);
        $upd = $connection->prepare('UPDATE strack_students SET `password` = :p WHERE id = :id LIMIT 1');
        $upd->execute(['p' => $hash, 'id' => (int) $stu['id']]);
        echo json_encode(['success' => true, 'message' => 'Password updated successfully.']);
        exit();
    }

    echo json_encode(['success' => false, 'message' => 'No account found for this email.']);
} catch (PDOException $e) {
    error_log('change_password: ' . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Could not update password. Try again later.']);
}
