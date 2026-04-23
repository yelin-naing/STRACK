<?php
/**
 * POST JSON { "lecturer_email", "student_id" (strack_students.id), "badge_id" }
 * — verifies caller is a lecturer, student is on one of their modules, then adds points and records the badge.
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

require_once __DIR__ . '/getConnection.php';
require_once __DIR__ . '/ensure_badge_awards.php';
require_once __DIR__ . '/badge_catalog.php';

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$lecturerEmail = trim($input['lecturer_email'] ?? '');
$studentId = (int) ($input['student_id'] ?? 0);
$badgeId = trim($input['badge_id'] ?? '');

if ($lecturerEmail === '' || $studentId <= 0 || $badgeId === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'lecturer_email, student_id, and badge_id are required']);
    exit;
}

$pointsMap = strack_badge_points();
if (!isset($pointsMap[$badgeId])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown badge']);
    exit;
}
$points = (int) $pointsMap[$badgeId];

try {
    $connection = getConnection();
    ensure_badge_awards_table($connection);

    $le = $connection->prepare("
        SELECT a.id AS account_id, TRIM(l.lecturer_id) AS lecturer_id
        FROM strack_accounts a
        INNER JOIN strack_lecturers l ON l.account_id = a.id
        WHERE a.role = 'teacher' AND LOWER(TRIM(a.email)) = LOWER(TRIM(:e))
        LIMIT 1
    ");
    $le->execute(['e' => $lecturerEmail]);
    $lecturerRow = $le->fetch(PDO::FETCH_ASSOC);
    if (!$lecturerRow) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Not a lecturer account']);
        exit;
    }
    $lecturerAccountId = (int) $lecturerRow['account_id'];
    $lecturerLid = (string) ($lecturerRow['lecturer_id'] ?? '');

    $chkStu = $connection->prepare('SELECT id, full_name, email FROM strack_students WHERE id = :id LIMIT 1');
    $chkStu->execute(['id' => $studentId]);
    $studentRow = $chkStu->fetch(PDO::FETCH_ASSOC);
    if (!$studentRow) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Student not found']);
        exit;
    }

    $enroll = $connection->prepare("
        SELECT 1
        FROM strack_courses c
        INNER JOIN strack_course_students cs ON cs.course_id = c.id AND cs.student_id = :sid
        WHERE TRIM(COALESCE(c.lecturer_id, '')) = :lid
        LIMIT 1
    ");
    $enroll->execute(['sid' => $studentId, 'lid' => $lecturerLid]);
    if (!$enroll->fetchColumn()) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'You can only award badges to students enrolled on your modules.']);
        exit;
    }

    $connection->beginTransaction();

    $dup = $connection->prepare('
        SELECT id FROM strack_lecturer_awarded_badges WHERE student_id = :sid AND badge_id = :bid LIMIT 1
    ');
    $dup->execute(['sid' => $studentId, 'bid' => $badgeId]);
    if ($dup->fetch()) {
        $connection->rollBack();
        http_response_code(409);
        echo json_encode(['success' => false, 'message' => 'This student already has that badge.']);
        exit;
    }

    $ins = $connection->prepare("
        INSERT INTO strack_lecturer_awarded_badges
            (student_id, badge_id, points_awarded, lecturer_account_id)
        VALUES (:sid, :bid, :pts, :lid)
    ");
    $ins->execute([
        'sid' => $studentId,
        'bid' => $badgeId,
        'pts' => $points,
        'lid' => $lecturerAccountId,
    ]);

    $upd = $connection->prepare('UPDATE strack_students SET points = COALESCE(points, 0) + :pts WHERE id = :id');
    $upd->execute(['pts' => $points, 'id' => $studentId]);

    $bal = $connection->prepare('SELECT COALESCE(points, 0) FROM strack_students WHERE id = :id LIMIT 1');
    $bal->execute(['id' => $studentId]);
    $newPoints = (int) $bal->fetchColumn();

    $connection->commit();

    echo json_encode([
        'success' => true,
        'message' => 'Badge awarded',
        'points_added' => $points,
        'student_points' => $newPoints,
        'student_id' => $studentId,
        'badge_id' => $badgeId,
    ]);
} catch (PDOException $e) {
    if (isset($connection) && $connection->inTransaction()) {
        $connection->rollBack();
    }
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
}
