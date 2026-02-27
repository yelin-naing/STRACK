<?php
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

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['email']) || !isset($input['password'])) {
    echo json_encode(['success' => false, 'message' => 'Email and password are required']);
    exit();
}

$email = trim($input['email']);
$password = $input['password'];

if (empty($email) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'Email and password are required']);
    exit();
}

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();

    $stmt = $connection->prepare(
        "SELECT id, email, full_name, role FROM strack_accounts WHERE email = :email AND password = :password LIMIT 1"
    );
    $stmt->execute(['email' => $email, 'password' => $password]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
        exit();
    }

    session_start();
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_email'] = $user['email'];
    $_SESSION['user_name'] = $user['full_name'] ?? $user['email'];
    $_SESSION['user_role'] = $user['role'] ?? 'student';

    echo json_encode([
        'success' => true,
        'message' => 'Login successful',
        'user' => [
            'id' => $user['id'],
            'email' => $user['email'],
            'name' => $user['full_name'] ?? $user['email'],
            'role' => $user['role'] ?? 'student',
        ],
    ]);
} catch (PDOException $e) {
    error_log('Login error: ' . $e->getMessage());
    $msg = $e->getMessage();
    if (strpos($msg, 'strack_accounts') !== false) {
        echo json_encode(['success' => false, 'message' => 'Table not found. Run setup_accounts.php first.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Database error. Check credentials and connection.']);
    }
}
