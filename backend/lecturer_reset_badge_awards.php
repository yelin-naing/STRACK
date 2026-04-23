<?php
/**
 * POST JSON { "lecturer_email" } — removes all badge awards this lecturer gave, and sets points to 0
 * for every student who had at least one of those awards.
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
$lecturerEmail = trim($input['lecturer_email'] ?? '');

if ($lecturerEmail === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'lecturer_email is required']);
    exit;
}

require_once __DIR__ . '/getConnection.php';
require_once __DIR__ . '/ensure_badge_awards.php';

try {
    $connection = getConnection();
    ensure_badge_awards_table($connection);

    $le = $connection->prepare("
        SELECT a.id AS account_id
        FROM strack_accounts a
        INNER JOIN strack_lecturers l ON l.account_id = a.id
        WHERE a.role = 'teacher' AND LOWER(TRIM(a.email)) = LOWER(TRIM(:e))
        LIMIT 1
    ");
    $le->execute(['e' => $lecturerEmail]);
    $lecturerAccountId = (int) $le->fetchColumn();
    if ($lecturerAccountId === 0) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Not a lecturer account']);
        exit;
    }

    $sel = $connection->prepare('
        SELECT DISTINCT student_id
        FROM strack_lecturer_awarded_badges
        WHERE lecturer_account_id = :lid
    ');
    $sel->execute(['lid' => $lecturerAccountId]);
    $studentIds = [];
    while ($row = $sel->fetch(PDO::FETCH_ASSOC)) {
        $studentIds[] = (int) $row['student_id'];
    }
    $studentIds = array_values(array_unique(array_filter($studentIds, fn ($x) => $x > 0)));

    $del = $connection->prepare('DELETE FROM strack_lecturer_awarded_badges WHERE lecturer_account_id = :lid');
    $del->execute(['lid' => $lecturerAccountId]);
    $deletedRows = $del->rowCount();

    $zeroed = 0;
    if (!empty($studentIds)) {
        $u = $connection->prepare('UPDATE strack_students SET points = 0 WHERE id = :id');
        foreach ($studentIds as $stid) {
            $u->execute(['id' => $stid]);
            $zeroed += $u->rowCount();
        }
    }

    echo json_encode([
        'success' => true,
        'message' => 'Badge awards reset; affected students’ points set to 0.',
        'awards_deleted' => $deletedRows,
        'students_reset' => count($studentIds),
        'points_zeroed' => $zeroed,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
}
