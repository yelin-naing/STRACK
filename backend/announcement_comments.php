<?php
/**
 * Announcement comments API.
 *
 * POST: add a student's comment to an announcement
 * DELETE: lecturer moderation delete of comments on own announcements
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (!in_array($_SERVER['REQUEST_METHOD'], ['POST', 'DELETE'], true)) {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/announcements_shared.php';

function readJsonBody(): array
{
    $raw = file_get_contents('php://input');
    $parsed = json_decode($raw, true);
    return is_array($parsed) ? $parsed : [];
}

function announcementVisibleToStudent(PDO $connection, int $announcementId, int $studentId): bool
{
    if ($announcementId <= 0 || $studentId <= 0) {
        return false;
    }
    $stmt = $connection->prepare("
        SELECT a.id
        FROM strack_announcements a
        WHERE a.id = :id
          AND (
            a.course_id IS NULL OR
            a.course_id IN (
                SELECT cs.course_id
                FROM strack_course_students cs
                WHERE cs.student_id = :student_id
            )
          )
        LIMIT 1
    ");
    $stmt->execute([
        'id' => $announcementId,
        'student_id' => $studentId,
    ]);
    return (bool) $stmt->fetchColumn();
}

function commentModeratableByLecturer(PDO $connection, int $commentId, int $lecturerAccountId): bool
{
    if ($commentId <= 0 || $lecturerAccountId <= 0) {
        return false;
    }
    $stmt = $connection->prepare("
        SELECT c.id
        FROM strack_announcement_comments c
        INNER JOIN strack_announcements a ON a.id = c.announcement_id
        WHERE c.id = :comment_id
          AND a.lecturer_account_id = :lecturer_account_id
        LIMIT 1
    ");
    $stmt->execute([
        'comment_id' => $commentId,
        'lecturer_account_id' => $lecturerAccountId,
    ]);
    return (bool) $stmt->fetchColumn();
}

try {
    $connection = getConnection();
    ensureAnnouncementsTables($connection);

    $input = readJsonBody();
    $email = (string) ($input['user_email'] ?? '');
    $viewer = resolveViewer($connection, $email);
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!$viewer || ($viewer['role'] ?? '') !== 'student') {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Only students can comment on announcements']);
            exit;
        }

        $announcementId = (int) ($input['announcement_id'] ?? 0);
        $commentText = trim((string) ($input['comment_text'] ?? ''));
        if ($announcementId <= 0 || $commentText === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Announcement and comment text are required']);
            exit;
        }
        $commentLength = function_exists('mb_strlen') ? mb_strlen($commentText) : strlen($commentText);
        if ($commentLength > 1000) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Comment is too long']);
            exit;
        }
        if (!announcementVisibleToStudent($connection, $announcementId, (int) $viewer['student_id'])) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Announcement not available']);
            exit;
        }

        $stmt = $connection->prepare("
            INSERT INTO strack_announcement_comments (announcement_id, student_id, comment_text)
            VALUES (:announcement_id, :student_id, :comment_text)
        ");
        $stmt->execute([
            'announcement_id' => $announcementId,
            'student_id' => (int) $viewer['student_id'],
            'comment_text' => $commentText,
        ]);

        echo json_encode(['success' => true, 'id' => (int) $connection->lastInsertId()]);
        exit;
    }

    if (!$viewer || ($viewer['role'] ?? '') !== 'lecturer') {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Only lecturers can moderate comments']);
        exit;
    }

    $commentId = (int) ($input['comment_id'] ?? 0);
    if ($commentId <= 0) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Comment id is required']);
        exit;
    }
    if (!commentModeratableByLecturer($connection, $commentId, (int) ($viewer['account_id'] ?? 0))) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'You can only moderate comments on your announcements']);
        exit;
    }

    $del = $connection->prepare('DELETE FROM strack_announcement_comments WHERE id = :comment_id');
    $del->execute(['comment_id' => $commentId]);
    echo json_encode(['success' => true, 'deleted' => $del->rowCount() > 0]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

