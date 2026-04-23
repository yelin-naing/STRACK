<?php
/**
 * Announcement reactions API.
 *
 * POST: add/update a student's reaction for an announcement
 * DELETE: remove a student's reaction for an announcement
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/announcements_shared.php';

const ALLOWED_REACTIONS = ['like', 'love', 'celebrate', 'idea', 'fire'];

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

try {
    $connection = getConnection();
    ensureAnnouncementsTables($connection);

    $method = $_SERVER['REQUEST_METHOD'];
    $input = readJsonBody();
    $email = (string) ($input['user_email'] ?? '');
    $viewer = resolveViewer($connection, $email);
    if (!$viewer || ($viewer['role'] ?? '') !== 'student') {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Only students can react to announcements']);
        exit;
    }

    $announcementId = (int) ($input['announcement_id'] ?? 0);
    if (!announcementVisibleToStudent($connection, $announcementId, (int) $viewer['student_id'])) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Announcement not available']);
        exit;
    }

    if ($method === 'POST') {
        $reaction = trim((string) ($input['reaction_type'] ?? ''));
        if (!in_array($reaction, ALLOWED_REACTIONS, true)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Unsupported reaction type']);
            exit;
        }

        $stmt = $connection->prepare("
            INSERT INTO strack_announcement_reactions (announcement_id, student_id, reaction_type)
            VALUES (:announcement_id, :student_id, :reaction_type)
            ON DUPLICATE KEY UPDATE
                reaction_type = VALUES(reaction_type),
                created_at = CURRENT_TIMESTAMP
        ");
        $stmt->execute([
            'announcement_id' => $announcementId,
            'student_id' => (int) $viewer['student_id'],
            'reaction_type' => $reaction,
        ]);

        echo json_encode(['success' => true]);
        exit;
    }

    if ($method === 'DELETE') {
        $stmt = $connection->prepare("
            DELETE FROM strack_announcement_reactions
            WHERE announcement_id = :announcement_id AND student_id = :student_id
        ");
        $stmt->execute([
            'announcement_id' => $announcementId,
            'student_id' => (int) $viewer['student_id'],
        ]);
        echo json_encode(['success' => true]);
        exit;
    }

    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

