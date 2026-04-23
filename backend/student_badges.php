<?php
/**
 * GET ?user_email= — awarded badges for a student (lecturer-issued) + point rewards applied.
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

$email = trim($_GET['user_email'] ?? '');
if ($email === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'user_email is required']);
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
        echo json_encode(['success' => true, 'awards' => []]);
        exit;
    }

    $unseenOnly = isset($_GET['unseen_only']) && $_GET['unseen_only'] === '1';

    $sql = "
        SELECT
            a.id,
            a.badge_id,
            a.points_awarded,
            a.awarded_at,
            a.student_popup_seen,
            a.lecturer_account_id,
            acc.full_name AS lecturer_name
        FROM strack_lecturer_awarded_badges a
        INNER JOIN strack_accounts acc ON acc.id = a.lecturer_account_id
        WHERE a.student_id = :sid
    ";
    if ($unseenOnly) {
        $sql .= ' AND COALESCE(a.student_popup_seen, 0) = 0';
    }
    $sql .= ' ORDER BY a.awarded_at DESC, a.id DESC';

    $q = $connection->prepare($sql);
    $q->execute(['sid' => $sid]);
    $awards = [];
    while ($row = $q->fetch(PDO::FETCH_ASSOC)) {
        $awards[] = [
            'id' => (int) $row['id'],
            'badge_id' => $row['badge_id'],
            'points_awarded' => (int) $row['points_awarded'],
            'awarded_at' => $row['awarded_at'],
            'student_popup_seen' => (int) ($row['student_popup_seen'] ?? 0),
            'lecturer_name' => $row['lecturer_name'],
        ];
    }

    echo json_encode(['success' => true, 'awards' => $awards]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
}
