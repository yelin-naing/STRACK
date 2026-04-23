<?php
/**
 * POST JSON { "email": "...", "rewardId": "food_drink" } — deducts points if balance allows.
 * Costs are enforced server-side only.
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$email = trim($input['email'] ?? '');
$rewardId = trim($input['rewardId'] ?? '');

$costs = [
    'food_drink' => 500,
    'discount_local' => 600,
    'digital_custom' => 350,
    'uni_merch' => 800,
    'recognition' => 300,
    'print_credits' => 250,
    'charity' => 550,
    'priority_booking' => 1000,
];

if ($email === '' || $rewardId === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'email and rewardId are required']);
    exit;
}

if (!isset($costs[$rewardId])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown reward']);
    exit;
}

$cost = (int) $costs[$rewardId];

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();
    $norm = function_exists('mb_strtolower') ? mb_strtolower($email, 'UTF-8') : strtolower($email);

    $stmt = $connection->prepare(
        'SELECT id, COALESCE(points, 0) AS pts FROM strack_students WHERE LOWER(TRIM(email)) = :e LIMIT 1'
    );
    $stmt->execute(['e' => $norm]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$row) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Student not found']);
        exit;
    }

    $balance = (int) $row['pts'];
    if ($balance < $cost) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Not enough points',
            'points' => $balance,
            'cost' => $cost,
        ]);
        exit;
    }

    $upd = $connection->prepare(
        'UPDATE strack_students SET points = points - :cost WHERE id = :id AND COALESCE(points, 0) >= :need'
    );
    $upd->execute([
        'cost' => $cost,
        'id' => (int) $row['id'],
        'need' => $cost,
    ]);

    if ($upd->rowCount() === 0) {
        http_response_code(409);
        echo json_encode(['success' => false, 'message' => 'Could not redeem — try again']);
        exit;
    }

    $stmt2 = $connection->prepare(
        'SELECT COALESCE(points, 0) FROM strack_students WHERE id = :id LIMIT 1'
    );
    $stmt2->execute(['id' => (int) $row['id']]);
    $newPoints = (int) $stmt2->fetchColumn();

    echo json_encode([
        'success' => true,
        'message' => 'Redeemed',
        'points' => $newPoints,
        'rewardId' => $rewardId,
        'cost' => $cost,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
}
