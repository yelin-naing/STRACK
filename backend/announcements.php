<?php
/**
 * Announcements API.
 *
 * GET: list announcements visible to user_email
 * POST: create announcement (lecturer only)
 * PUT: update announcement (owner lecturer only)
 * DELETE: delete announcement (owner lecturer only)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/announcements_shared.php';

const REACTION_TYPES = ['like', 'love', 'celebrate', 'idea', 'fire'];

function initialReactionCounts(): array
{
    return [
        'like' => 0,
        'love' => 0,
        'celebrate' => 0,
        'idea' => 0,
        'fire' => 0,
    ];
}

function readJsonBody(): array
{
    $raw = file_get_contents('php://input');
    $parsed = json_decode($raw, true);
    return is_array($parsed) ? $parsed : [];
}

function announcementIdsFromRows(array $rows): array
{
    $ids = [];
    foreach ($rows as $row) {
        $id = (int) ($row['id'] ?? 0);
        if ($id > 0) {
            $ids[] = $id;
        }
    }
    return $ids;
}

function loadReactionSummary(PDO $connection, array $announcementIds): array
{
    $result = [];
    if (empty($announcementIds)) {
        return $result;
    }
    $in = buildInClause($announcementIds);
    $sql = "
        SELECT announcement_id, reaction_type, COUNT(*) AS total
        FROM strack_announcement_reactions
        WHERE announcement_id IN {$in['sql']}
        GROUP BY announcement_id, reaction_type
    ";
    $stmt = $connection->prepare($sql);
    $stmt->execute($in['params']);
    foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $aid = (int) ($row['announcement_id'] ?? 0);
        if (!isset($result[$aid])) {
            $result[$aid] = initialReactionCounts();
        }
        $type = (string) ($row['reaction_type'] ?? '');
        if (array_key_exists($type, $result[$aid])) {
            $result[$aid][$type] = (int) ($row['total'] ?? 0);
        }
    }
    return $result;
}

function loadMyReactions(PDO $connection, array $announcementIds, int $studentId): array
{
    $result = [];
    if ($studentId <= 0 || empty($announcementIds)) {
        return $result;
    }
    $in = buildInClause($announcementIds);
    $sql = "
        SELECT announcement_id, reaction_type
        FROM strack_announcement_reactions
        WHERE student_id = ? AND announcement_id IN {$in['sql']}
    ";
    $params = array_merge([$studentId], $in['params']);
    $stmt = $connection->prepare($sql);
    $stmt->execute($params);
    foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $aid = (int) ($row['announcement_id'] ?? 0);
        $result[$aid] = (string) ($row['reaction_type'] ?? '');
    }
    return $result;
}

function loadComments(PDO $connection, array $announcementIds): array
{
    $result = [];
    if (empty($announcementIds)) {
        return $result;
    }
    $in = buildInClause($announcementIds);
    $sql = "
        SELECT
            c.id,
            c.announcement_id,
            c.comment_text,
            c.created_at,
            s.full_name AS student_name
        FROM strack_announcement_comments c
        INNER JOIN strack_students s ON s.id = c.student_id
        WHERE c.announcement_id IN {$in['sql']}
        ORDER BY c.created_at ASC, c.id ASC
    ";
    $stmt = $connection->prepare($sql);
    $stmt->execute($in['params']);
    foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $aid = (int) ($row['announcement_id'] ?? 0);
        if (!isset($result[$aid])) {
            $result[$aid] = [];
        }
        $result[$aid][] = [
            'id' => (int) ($row['id'] ?? 0),
            'student_name' => (string) ($row['student_name'] ?? 'Student'),
            'comment_text' => (string) ($row['comment_text'] ?? ''),
            'created_at' => (string) ($row['created_at'] ?? ''),
        ];
    }
    return $result;
}

function loadAnnouncementsForViewer(PDO $connection, array $viewer, ?int $courseFilter): array
{
    $visibleCourseIds = getVisibleCourseIds($connection, $viewer);
    $whereParts = [];
    $params = [];

    if (($viewer['role'] ?? '') === 'lecturer') {
        $in = buildInClause($visibleCourseIds);
        $whereParts[] = "(a.lecturer_account_id = ? OR a.course_id IS NULL OR a.course_id IN {$in['sql']})";
        $params[] = (int) ($viewer['account_id'] ?? 0);
        $params = array_merge($params, $in['params']);
    } else {
        $in = buildInClause($visibleCourseIds);
        $whereParts[] = "(a.course_id IS NULL OR a.course_id IN {$in['sql']})";
        $params = array_merge($params, $in['params']);
    }

    if ($courseFilter !== null && $courseFilter > 0) {
        $whereParts[] = 'a.course_id = ?';
        $params[] = $courseFilter;
    }

    $whereSql = implode(' AND ', $whereParts);
    $sql = "
        SELECT
            a.id,
            a.course_id,
            a.lecturer_account_id,
            a.lecturer_name,
            a.title,
            a.content,
            a.created_at,
            a.updated_at,
            c.course_code,
            c.course_name
        FROM strack_announcements a
        LEFT JOIN strack_courses c ON c.id = a.course_id
        WHERE {$whereSql}
        ORDER BY a.created_at DESC, a.id DESC
    ";
    $stmt = $connection->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $ids = announcementIdsFromRows($rows);
    $reactionSummary = loadReactionSummary($connection, $ids);
    $commentMap = loadComments($connection, $ids);
    $myReactions = loadMyReactions($connection, $ids, (int) ($viewer['student_id'] ?? 0));

    $announcements = [];
    foreach ($rows as $row) {
        $aid = (int) ($row['id'] ?? 0);
        $editable = (($viewer['role'] ?? '') === 'lecturer') && ((int) ($row['lecturer_account_id'] ?? 0) === (int) ($viewer['account_id'] ?? 0));
        $comments = array_map(
            static function (array $comment) use ($editable): array {
                $comment['can_delete'] = $editable;
                return $comment;
            },
            $commentMap[$aid] ?? []
        );
        $announcements[] = [
            'id' => $aid,
            'course_id' => $row['course_id'] !== null ? (int) $row['course_id'] : null,
            'course_code' => (string) ($row['course_code'] ?? ''),
            'course_name' => (string) ($row['course_name'] ?? ''),
            'lecturer_name' => (string) ($row['lecturer_name'] ?? 'Lecturer'),
            'title' => (string) ($row['title'] ?? ''),
            'content' => (string) ($row['content'] ?? ''),
            'created_at' => (string) ($row['created_at'] ?? ''),
            'updated_at' => (string) ($row['updated_at'] ?? ''),
            'editable' => $editable,
            'reaction_counts' => $reactionSummary[$aid] ?? initialReactionCounts(),
            'my_reaction' => $myReactions[$aid] ?? null,
            'comments' => $comments,
            'comment_count' => count($comments),
        ];
    }

    return $announcements;
}

try {
    $connection = getConnection();
    ensureAnnouncementsTables($connection);

    $method = $_SERVER['REQUEST_METHOD'];
    if ($method === 'GET') {
        $email = (string) ($_GET['user_email'] ?? '');
        $viewer = resolveViewer($connection, $email);
        if (!$viewer) {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Invalid user']);
            exit;
        }

        $courseFilterRaw = (int) ($_GET['course_id'] ?? 0);
        $courseFilter = $courseFilterRaw > 0 ? $courseFilterRaw : null;
        $announcements = loadAnnouncementsForViewer($connection, $viewer, $courseFilter);
        $courses = getVisibleCourseRows($connection, $viewer);

        echo json_encode([
            'success' => true,
            'role' => $viewer['role'],
            'available_courses' => $courses,
            'announcements' => $announcements,
            'reaction_types' => REACTION_TYPES,
        ]);
        exit;
    }

    if ($method === 'DELETE') {
        $id = (int) ($_GET['id'] ?? 0);
        $emailFromQuery = (string) ($_GET['user_email'] ?? '');
        if ($id <= 0 || trim($emailFromQuery) === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Id and user_email are required']);
            exit;
        }

        $viewerFromQuery = resolveViewer($connection, $emailFromQuery);
        if (!$viewerFromQuery || ($viewerFromQuery['role'] ?? '') !== 'lecturer') {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Only lecturers can delete announcements']);
            exit;
        }

        $stmt = $connection->prepare("
            DELETE FROM strack_announcements
            WHERE id = :id AND lecturer_account_id = :lecturer_account_id
        ");
        $stmt->execute([
            'id' => $id,
            'lecturer_account_id' => (int) $viewerFromQuery['account_id'],
        ]);

        echo json_encode(['success' => true, 'deleted' => $stmt->rowCount() > 0]);
        exit;
    }

    $input = readJsonBody();
    $email = (string) ($input['user_email'] ?? '');
    $viewer = resolveViewer($connection, $email);
    if (!$viewer) {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Invalid user']);
        exit;
    }

    if (($viewer['role'] ?? '') !== 'lecturer') {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Only lecturers can manage announcements']);
        exit;
    }

    if ($method === 'POST') {
        $title = trim((string) ($input['title'] ?? ''));
        $content = trim((string) ($input['content'] ?? ''));
        $courseId = (int) ($input['course_id'] ?? 0);
        $courseIdValue = $courseId > 0 ? $courseId : null;

        if ($title === '' || $content === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Title and content are required']);
            exit;
        }
        if ($courseIdValue !== null && !canLecturerUseCourse($connection, $viewer, $courseIdValue)) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'You can only post announcements for your own courses']);
            exit;
        }

        $stmt = $connection->prepare("
            INSERT INTO strack_announcements (course_id, lecturer_account_id, lecturer_name, title, content)
            VALUES (:course_id, :lecturer_account_id, :lecturer_name, :title, :content)
        ");
        $stmt->execute([
            'course_id' => $courseIdValue,
            'lecturer_account_id' => (int) $viewer['account_id'],
            'lecturer_name' => (string) ($viewer['name'] ?? 'Lecturer'),
            'title' => $title,
            'content' => $content,
        ]);

        echo json_encode(['success' => true, 'id' => (int) $connection->lastInsertId()]);
        exit;
    }

    if ($method === 'PUT') {
        $id = (int) ($input['id'] ?? 0);
        $title = trim((string) ($input['title'] ?? ''));
        $content = trim((string) ($input['content'] ?? ''));
        $courseId = (int) ($input['course_id'] ?? 0);
        $courseIdValue = $courseId > 0 ? $courseId : null;

        if ($id <= 0 || $title === '' || $content === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Id, title and content are required']);
            exit;
        }
        if ($courseIdValue !== null && !canLecturerUseCourse($connection, $viewer, $courseIdValue)) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'You can only assign your own courses']);
            exit;
        }

        $ownCheck = $connection->prepare("
            SELECT id
            FROM strack_announcements
            WHERE id = :id AND lecturer_account_id = :lecturer_account_id
            LIMIT 1
        ");
        $ownCheck->execute([
            'id' => $id,
            'lecturer_account_id' => (int) $viewer['account_id'],
        ]);
        if (!$ownCheck->fetchColumn()) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'You can only edit your own announcements']);
            exit;
        }

        $stmt = $connection->prepare("
            UPDATE strack_announcements
            SET course_id = :course_id,
                title = :title,
                content = :content
            WHERE id = :id
        ");
        $stmt->execute([
            'id' => $id,
            'course_id' => $courseIdValue,
            'title' => $title,
            'content' => $content,
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

