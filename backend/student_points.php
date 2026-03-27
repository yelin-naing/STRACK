<?php
/**
 * GET ?email= — returns current points for a student row (strack_students).
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$email = trim($_GET['email'] ?? '');
if ($email === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'email is required']);
    exit;
}

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();
    $norm = function_exists('mb_strtolower') ? mb_strtolower($email, 'UTF-8') : strtolower($email);
    $stmt = $connection->prepare(
        'SELECT COALESCE(points, 0) AS pts FROM strack_students WHERE LOWER(TRIM(email)) = :e LIMIT 1'
    );
    $stmt->execute(['e' => $norm]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $points = $row ? (int) $row['pts'] : 0;
    echo json_encode(['success' => true, 'points' => $points]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
}
