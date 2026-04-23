<?php

require_once __DIR__ . '/getConnection.php';

function ensureAnnouncementsTables(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_announcements (
            id INT AUTO_INCREMENT PRIMARY KEY,
            course_id INT DEFAULT NULL,
            lecturer_account_id INT NOT NULL,
            lecturer_name VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            CONSTRAINT fk_announcements_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE SET NULL,
            CONSTRAINT fk_announcements_lecturer FOREIGN KEY (lecturer_account_id) REFERENCES strack_accounts (id) ON DELETE CASCADE,
            INDEX idx_announcements_course (course_id),
            INDEX idx_announcements_lecturer (lecturer_account_id),
            INDEX idx_announcements_created (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_announcement_reactions (
            announcement_id INT NOT NULL,
            student_id INT NOT NULL,
            reaction_type VARCHAR(20) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (announcement_id, student_id),
            CONSTRAINT fk_reactions_announcement FOREIGN KEY (announcement_id) REFERENCES strack_announcements (id) ON DELETE CASCADE,
            CONSTRAINT fk_reactions_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE,
            INDEX idx_reactions_type (reaction_type)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_announcement_comments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            announcement_id INT NOT NULL,
            student_id INT NOT NULL,
            comment_text TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_comments_announcement FOREIGN KEY (announcement_id) REFERENCES strack_announcements (id) ON DELETE CASCADE,
            CONSTRAINT fk_comments_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE,
            INDEX idx_comments_announcement (announcement_id),
            INDEX idx_comments_created (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
}

function normalizeEmail(string $email): string
{
    $value = trim($email);
    return function_exists('mb_strtolower') ? mb_strtolower($value, 'UTF-8') : strtolower($value);
}

function resolveViewer(PDO $connection, string $email): ?array
{
    $emailNorm = normalizeEmail($email);
    if ($emailNorm === '') {
        return null;
    }

    $accStmt = $connection->prepare("
        SELECT id, full_name, email, role
        FROM strack_accounts
        WHERE LOWER(TRIM(email)) = :email
        LIMIT 1
    ");
    $accStmt->execute(['email' => $emailNorm]);
    $acc = $accStmt->fetch(PDO::FETCH_ASSOC);
    if ($acc && ($acc['role'] ?? '') === 'teacher') {
        $lecStmt = $connection->prepare("
            SELECT lecturer_id
            FROM strack_lecturers
            WHERE account_id = :account_id
            LIMIT 1
        ");
        $lecStmt->execute(['account_id' => (int) $acc['id']]);
        $lecturerId = (string) ($lecStmt->fetchColumn() ?: '');

        return [
            'role' => 'lecturer',
            'email' => $acc['email'],
            'account_id' => (int) $acc['id'],
            'name' => (string) ($acc['full_name'] ?? ''),
            'lecturer_id' => trim($lecturerId),
            'student_id' => null,
        ];
    }

    $stuStmt = $connection->prepare("
        SELECT id, full_name, email
        FROM strack_students
        WHERE LOWER(TRIM(email)) = :email
        LIMIT 1
    ");
    $stuStmt->execute(['email' => $emailNorm]);
    $stu = $stuStmt->fetch(PDO::FETCH_ASSOC);
    if ($stu) {
        return [
            'role' => 'student',
            'email' => $stu['email'],
            'account_id' => null,
            'name' => (string) ($stu['full_name'] ?? ''),
            'lecturer_id' => null,
            'student_id' => (int) $stu['id'],
        ];
    }

    return null;
}

function getLecturerCourseRows(PDO $connection, string $lecturerId): array
{
    if (trim($lecturerId) === '') {
        return [];
    }
    $stmt = $connection->prepare("
        SELECT id, course_code, course_name
        FROM strack_courses
        WHERE lecturer_id = :lecturer_id
        ORDER BY course_code
    ");
    $stmt->execute(['lecturer_id' => $lecturerId]);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getStudentCourseRows(PDO $connection, int $studentId): array
{
    if ($studentId <= 0) {
        return [];
    }
    $stmt = $connection->prepare("
        SELECT c.id, c.course_code, c.course_name
        FROM strack_course_students cs
        INNER JOIN strack_courses c ON c.id = cs.course_id
        WHERE cs.student_id = :student_id
        ORDER BY c.course_code
    ");
    $stmt->execute(['student_id' => $studentId]);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getVisibleCourseRows(PDO $connection, array $viewer): array
{
    if (($viewer['role'] ?? '') === 'lecturer') {
        return getLecturerCourseRows($connection, (string) ($viewer['lecturer_id'] ?? ''));
    }
    if (($viewer['role'] ?? '') === 'student') {
        return getStudentCourseRows($connection, (int) ($viewer['student_id'] ?? 0));
    }
    return [];
}

function getVisibleCourseIds(PDO $connection, array $viewer): array
{
    $rows = getVisibleCourseRows($connection, $viewer);
    $ids = [];
    foreach ($rows as $row) {
        $id = (int) ($row['id'] ?? 0);
        if ($id > 0) {
            $ids[$id] = true;
        }
    }
    return array_map('intval', array_keys($ids));
}

function buildInClause(array $ids): array
{
    if (empty($ids)) {
        return ['sql' => '(NULL)', 'params' => []];
    }
    $marks = implode(',', array_fill(0, count($ids), '?'));
    return ['sql' => "($marks)", 'params' => array_values($ids)];
}

function canLecturerUseCourse(PDO $connection, array $viewer, int $courseId): bool
{
    if (($viewer['role'] ?? '') !== 'lecturer' || $courseId <= 0) {
        return false;
    }
    $stmt = $connection->prepare("
        SELECT id
        FROM strack_courses
        WHERE id = :id AND lecturer_id = :lecturer_id
        LIMIT 1
    ");
    $stmt->execute([
        'id' => $courseId,
        'lecturer_id' => (string) ($viewer['lecturer_id'] ?? ''),
    ]);
    return (bool) $stmt->fetchColumn();
}

