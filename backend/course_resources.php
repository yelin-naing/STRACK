<?php
/**
 * Course file resources: list (GET), upload (POST multipart), delete (DELETE JSON), download (?download=1&id=)
 */

$downloadId = (!empty($_GET['download']) && isset($_GET['id'])) ? (int) $_GET['id'] : 0;
if ($downloadId > 0) {
    header('Access-Control-Allow-Origin: *');
    require_once __DIR__ . '/getConnection.php';
    try {
        $connection = getConnection();
        ensureCourseResourcesTable($connection);
        $email = strtolower(trim($_GET['lecturer_email'] ?? $_GET['student_email'] ?? ''));
        if ($email === '' || !canAccessResourceRow($connection, $downloadId, $email)) {
            http_response_code(403);
            header('Content-Type: text/plain; charset=utf-8');
            echo 'Forbidden';
            exit;
        }
        $stmt = $connection->prepare('
            SELECT stored_filename, original_filename, mime_type, file_size
            FROM strack_course_resources WHERE id = :id LIMIT 1
        ');
        $stmt->execute(['id' => $downloadId]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            http_response_code(404);
            echo 'Not found';
            exit;
        }
        $path = uploadPath($row['stored_filename']);
        if (!is_file($path)) {
            http_response_code(404);
            echo 'File missing';
            exit;
        }
        $mime = $row['mime_type'] ?: 'application/octet-stream';
        $name = $row['original_filename'] ?: 'download';
        header('Content-Type: ' . $mime);
        header('Content-Length: ' . (int) $row['file_size']);
        header('Content-Disposition: attachment; filename="' . basename($name) . '"');
        header('X-Content-Type-Options: nosniff');
        readfile($path);
        exit;
    } catch (Throwable $e) {
        http_response_code(500);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Server error';
        exit;
    }
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

const MAX_BYTES = 20 * 1024 * 1024;

const ALLOWED_EXT = [
    'pdf' => true,
    'doc' => true,
    'docx' => true,
    'ppt' => true,
    'pptx' => true,
    'xls' => true,
    'xlsx' => true,
    'txt' => true,
    'csv' => true,
    'zip' => true,
    'png' => true,
    'jpg' => true,
    'jpeg' => true,
    'gif' => true,
    'webp' => true,
];

function uploadPath(string $stored): string
{
    return __DIR__ . '/uploads/course_resources/' . $stored;
}

function ensureUploadDir(): void
{
    $dir = __DIR__ . '/uploads/course_resources';
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

function ensureCourseResourcesTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_course_resources (
            id INT AUTO_INCREMENT PRIMARY KEY,
            course_id INT NOT NULL,
            original_filename VARCHAR(255) NOT NULL,
            stored_filename VARCHAR(255) NOT NULL,
            mime_type VARCHAR(127) DEFAULT NULL,
            file_size INT UNSIGNED NOT NULL DEFAULT 0,
            uploaded_by_account_id INT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE KEY uq_stored_filename (stored_filename),
            INDEX idx_course_resources_course (course_id),
            CONSTRAINT fk_cr_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE,
            CONSTRAINT fk_cr_account FOREIGN KEY (uploaded_by_account_id) REFERENCES strack_accounts (id) ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
    ensureUploadDir();
}

function ensureNotificationsTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_notifications (
            id INT AUTO_INCREMENT PRIMARY KEY,
            recipient_email VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            type VARCHAR(64) NOT NULL DEFAULT 'general',
            is_read TINYINT(1) NOT NULL DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_notifications_email (recipient_email),
            INDEX idx_notifications_email_read (recipient_email, is_read),
            INDEX idx_notifications_created (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
}

function lecturerOwnsCourse(PDO $c, string $emailLower, int $courseId): bool
{
    $q = $c->prepare('
        SELECT 1 FROM strack_courses co
        INNER JOIN strack_lecturers l ON l.lecturer_id = co.lecturer_id
        INNER JOIN strack_accounts a ON a.id = l.account_id AND a.role = \'teacher\'
        WHERE co.id = :cid AND LOWER(TRIM(a.email)) = :em
        LIMIT 1
    ');
    $q->execute(['cid' => $courseId, 'em' => $emailLower]);
    return (bool) $q->fetchColumn();
}

function studentEnrolledInCourse(PDO $c, string $emailLower, int $courseId): bool
{
    $q = $c->prepare('
        SELECT 1 FROM strack_course_students cs
        INNER JOIN strack_students s ON s.id = cs.student_id
        WHERE cs.course_id = :cid AND LOWER(TRIM(s.email)) = :em
        LIMIT 1
    ');
    $q->execute(['cid' => $courseId, 'em' => $emailLower]);
    return (bool) $q->fetchColumn();
}

function canViewCourseResources(PDO $c, int $courseId, string $emailLower): bool
{
    return lecturerOwnsCourse($c, $emailLower, $courseId) || studentEnrolledInCourse($c, $emailLower, $courseId);
}

function canAccessResourceRow(PDO $c, int $resourceId, string $emailLower): bool
{
    $stmt = $c->prepare('SELECT course_id FROM strack_course_resources WHERE id = :id LIMIT 1');
    $stmt->execute(['id' => $resourceId]);
    $cid = $stmt->fetchColumn();
    if (!$cid) {
        return false;
    }
    return canViewCourseResources($c, (int) $cid, $emailLower);
}

function safeExtension(string $name): ?string
{
    $base = basename($name);
    $pos = strrpos($base, '.');
    if ($pos === false) {
        return null;
    }
    $ext = strtolower(substr($base, $pos + 1));
    if ($ext === '' || strlen($ext) > 12) {
        return null;
    }
    return isset(ALLOWED_EXT[$ext]) ? $ext : null;
}


function lookupCourseSummary(PDO $c, int $courseId): array
{
    $stmt = $c->prepare('
        SELECT co.course_code, co.course_name, a.full_name AS lecturer_name
        FROM strack_courses co
        LEFT JOIN strack_lecturers l ON l.lecturer_id = co.lecturer_id
        LEFT JOIN strack_accounts a ON a.id = l.account_id AND a.role = \'teacher\'
        WHERE co.id = :cid
        LIMIT 1
    ');
    $stmt->execute(['cid' => $courseId]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$row) {
        return [
            'course_code' => 'Course',
            'course_name' => 'Module',
            'lecturer_name' => 'Your lecturer',
        ];
    }
    return [
        'course_code' => (string) ($row['course_code'] ?? 'Course'),
        'course_name' => (string) ($row['course_name'] ?? 'Module'),
        'lecturer_name' => (string) ($row['lecturer_name'] ?? 'Your lecturer'),
    ];
}

function enrolledStudentEmails(PDO $c, int $courseId): array
{
    $stmt = $c->prepare('
        SELECT DISTINCT LOWER(TRIM(s.email)) AS email, s.full_name
        FROM strack_course_students cs
        INNER JOIN strack_students s ON s.id = cs.student_id
        WHERE cs.course_id = :cid
          AND s.email IS NOT NULL
          AND TRIM(s.email) <> \'\'
    ');
    $stmt->execute(['cid' => $courseId]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $out = [];
    foreach ($rows as $r) {
        $email = trim((string) ($r['email'] ?? ''));
        if ($email !== '') {
            $out[] = [
                'email' => $email,
                'full_name' => trim((string) ($r['full_name'] ?? 'Student')),
            ];
        }
    }
    return $out;
}

function insertInAppNotificationsForResource(PDO $c, int $courseId, string $filename): int
{
    ensureNotificationsTable($c);
    $course = lookupCourseSummary($c, $courseId);
    $title = sprintf('New resource in %s', $course['course_code']);
    $message = sprintf(
        '%s uploaded "%s" for %s - %s.',
        $course['lecturer_name'],
        $filename,
        $course['course_code'],
        $course['course_name']
    );

    $students = enrolledStudentEmails($c, $courseId);
    if (count($students) === 0) {
        return 0;
    }

    $ins = $c->prepare('
        INSERT INTO strack_notifications (recipient_email, title, message, type, is_read)
        VALUES (:email, :title, :message, :type, 0)
    ');
    $count = 0;
    foreach ($students as $student) {
        $ins->execute([
            'email' => $student['email'],
            'title' => $title,
            'message' => $message,
            'type' => 'resource_upload',
        ]);
        $count += 1;
    }
    return $count;
}

try {
    $connection = getConnection();
    ensureCourseResourcesTable($connection);

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        $courseId = (int) ($_GET['course_id'] ?? 0);
        $email = strtolower(trim($_GET['lecturer_email'] ?? $_GET['student_email'] ?? ''));
        if ($courseId <= 0 || $email === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'course_id and lecturer_email or student_email required']);
            exit;
        }
        if (!canViewCourseResources($connection, $courseId, $email)) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Not allowed to view resources for this course']);
            exit;
        }
        $stmt = $connection->prepare('
            SELECT id, course_id, original_filename, mime_type, file_size, created_at
            FROM strack_course_resources
            WHERE course_id = :cid
            ORDER BY created_at DESC
        ');
        $stmt->execute(['cid' => $courseId]);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach ($rows as &$r) {
            $r['id'] = (int) $r['id'];
            $r['course_id'] = (int) $r['course_id'];
            $r['file_size'] = (int) $r['file_size'];
        }
        unset($r);
        echo json_encode(['success' => true, 'resources' => $rows]);
        exit;
    }

    if ($method === 'POST') {
        $courseId = (int) ($_POST['course_id'] ?? 0);
        $lecturerEmail = strtolower(trim($_POST['lecturer_email'] ?? ''));
        if ($courseId <= 0 || $lecturerEmail === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'course_id and lecturer_email required']);
            exit;
        }
        if (!lecturerOwnsCourse($connection, $lecturerEmail, $courseId)) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Only the module lecturer can upload resources']);
            exit;
        }
        if (empty($_FILES['file']) || !is_uploaded_file($_FILES['file']['tmp_name'])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'No file uploaded']);
            exit;
        }
        $err = (int) ($_FILES['file']['error'] ?? UPLOAD_ERR_NO_FILE);
        if ($err !== UPLOAD_ERR_OK) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Upload failed (code ' . $err . ')']);
            exit;
        }
        $size = (int) ($_FILES['file']['size'] ?? 0);
        if ($size <= 0 || $size > MAX_BYTES) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'File too large (max 20 MB)']);
            exit;
        }
        $origName = $_FILES['file']['name'] ?? 'file';
        $ext = safeExtension($origName);
        if ($ext === null) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'File type not allowed']);
            exit;
        }
        $stored = bin2hex(random_bytes(16)) . '.' . $ext;
        $dest = uploadPath($stored);
        ensureUploadDir();
        if (!move_uploaded_file($_FILES['file']['tmp_name'], $dest)) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Could not save file']);
            exit;
        }
        $mime = 'application/octet-stream';
        if (function_exists('mime_content_type')) {
            $detected = @mime_content_type($dest);
            if (is_string($detected) && $detected !== '') {
                $mime = $detected;
            }
        }
        $accStmt = $connection->prepare('SELECT a.id FROM strack_accounts a INNER JOIN strack_lecturers l ON l.account_id = a.id WHERE LOWER(TRIM(a.email)) = :em AND a.role = \'teacher\' LIMIT 1');
        $accStmt->execute(['em' => $lecturerEmail]);
        $accountId = (int) $accStmt->fetchColumn();

        $ins = $connection->prepare('
            INSERT INTO strack_course_resources (course_id, original_filename, stored_filename, mime_type, file_size, uploaded_by_account_id)
            VALUES (:cid, :oname, :sname, :mime, :size, :aid)
        ');
        $displayName = function_exists('mb_substr')
            ? mb_substr($origName, 0, 255, 'UTF-8')
            : substr($origName, 0, 255);
        $ins->execute([
            'cid' => $courseId,
            'oname' => $displayName,
            'sname' => $stored,
            'mime' => $mime,
            'size' => $size,
            'aid' => $accountId > 0 ? $accountId : null,
        ]);
        $id = (int) $connection->lastInsertId();
        $inAppCount = insertInAppNotificationsForResource($connection, $courseId, $displayName);
        echo json_encode([
            'success' => true,
            'id' => $id,
            'resource' => [
                'id' => $id,
                'course_id' => $courseId,
                'original_filename' => $displayName,
                'mime_type' => $mime,
                'file_size' => $size,
                'created_at' => date('Y-m-d H:i:s'),
            ],
            'notifications' => [
                'in_app_created' => $inAppCount,
            ],
        ]);
        exit;
    }

    if ($method === 'DELETE') {
        $input = json_decode(file_get_contents('php://input'), true) ?: [];
        $id = (int) ($input['id'] ?? 0);
        $lecturerEmail = strtolower(trim($input['lecturer_email'] ?? ''));
        if ($id <= 0 || $lecturerEmail === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'id and lecturer_email required']);
            exit;
        }
        $stmt = $connection->prepare('
            SELECT r.id, r.stored_filename, r.course_id
            FROM strack_course_resources r
            WHERE r.id = :id
            LIMIT 1
        ');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Resource not found']);
            exit;
        }
        if (!lecturerOwnsCourse($connection, $lecturerEmail, (int) $row['course_id'])) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Not allowed to delete this resource']);
            exit;
        }
        $del = $connection->prepare('DELETE FROM strack_course_resources WHERE id = :id');
        $del->execute(['id' => $id]);
        $path = uploadPath($row['stored_filename']);
        if (is_file($path)) {
            @unlink($path);
        }
        echo json_encode(['success' => true]);
        exit;
    }

    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server error']);
}
