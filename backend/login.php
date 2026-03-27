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
$password = trim((string) $input['password']);

if ($email === '' || $password === '') {
    echo json_encode(['success' => false, 'message' => 'Email and password are required']);
    exit();
}

require_once __DIR__ . '/getConnection.php';

/**
 * Match stored value whether it is plain text (legacy) or password_hash() output (bcrypt/argon2).
 */
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
        "SELECT id, email, full_name, role, `password` AS pwd FROM strack_accounts WHERE LOWER(TRIM(email)) = :email LIMIT 1"
    );
    $stmt->execute(['email' => $emailNorm]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $user = null;
    $accountPwd = (string) ($row['pwd'] ?? $row['password'] ?? '');
    if ($row && passwordMatches($accountPwd, $password)) {
        $user = [
            'id' => $row['id'],
            'email' => $row['email'],
            'full_name' => $row['full_name'],
            'role' => $row['role'] ?? 'teacher',
        ];
    }

    if (!$user) {
        $stmt = $connection->prepare(
            "SELECT id, email, full_name, `password` AS pwd FROM strack_students WHERE LOWER(TRIM(email)) = :email LIMIT 1"
        );
        $stmt->execute(['email' => $emailNorm]);
        $student = $stmt->fetch(PDO::FETCH_ASSOC);
        $studentPwd = (string) ($student['pwd'] ?? $student['password'] ?? '');
        if ($student && passwordMatches($studentPwd, $password)) {
            $user = [
                'id' => 's' . $student['id'],
                'email' => $student['email'],
                'full_name' => $student['full_name'],
                'role' => 'student',
            ];
        }
    }

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
    if (strpos($msg, 'strack_accounts') !== false || strpos($msg, 'strack_students') !== false) {
        echo json_encode(['success' => false, 'message' => 'Database tables missing. Run setup_accounts.php and setup_students.php first.']);
    } elseif (stripos($msg, 'getaddrinfo') !== false || stripos($msg, 'Connection refused') !== false || stripos($msg, '2002') !== false) {
        echo json_encode(['success' => false, 'message' => 'Cannot reach the database host. Check host in credentials.php (use nuwebspace_db on NUWebSpace).']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Database error. Check credentials.php (host, dbname, username, password).']);
    }
}
