<?php
/**
 * POST JSON { "user_email", "award_ids": [1,2,3] } — mark lecturer badge rows as seen (login popup dismissed).
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
$email = trim($input['user_email'] ?? '');
$ids = $input['award_ids'] ?? [];
if (!is_array($ids)) {
    $ids = [];
}
$ids = array_values(array_unique(array_map('intval', $ids)));
$ids = array_filter($ids, fn ($x) => $x > 0);

if ($email === '' || empty($ids)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'user_email and award_ids are required']);
    exit;
}

require_once __DIR__ . '/getConnection.php';
require_once __DIR__ . '/ensure_badge_awards.php';

try {
    $connection = getConnection();
    ensure_badge_awards_table($connection);

    $norm = function_exists('mb_strtolower') ? mb_strtolower($email, 'UTF-8') : strtolower($email);
    $stu = $connection->prepare('SELECT id FROM strack_students WHERE LOWER(TRIM(email)) = :e LIMIT 1');
    $stu->execute(['e' => $norm]);
    $sid = (int) $stu->fetchColumn();
    if ($sid === 0) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Student not found']);
        exit;
    }

    $ph = implode(',', array_fill(0, count($ids), '?'));
    $params = array_merge([$sid], $ids);
    $upd = $connection->prepare("
        UPDATE strack_lecturer_awarded_badges
        SET student_popup_seen = 1
        WHERE student_id = ? AND id IN ($ph)
    ");
    $upd->execute($params);
    $n = $upd->rowCount();

    echo json_encode(['success' => true, 'updated' => $n]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
}
