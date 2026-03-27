<?php
/**
 * Creates strack_accounts (admin + teacher logins only) and strack_lecturers (lecturer profiles).
 * Seeds test admin + lecturer; test student is seeded into strack_students.
 * Visit: /strack/backend/setup_accounts.php
 */

require_once __DIR__ . '/getConnection.php';

function columnExists(PDO $connection, string $table, string $column): bool
{
    // Do not use SHOW ... LIKE ? — MariaDB can reject placeholders there (error near '?').
    if (!preg_match('/^[a-zA-Z0-9_]+$/', $table) || !preg_match('/^[a-zA-Z0-9_]+$/', $column)) {
        return false;
    }
    $stmt = $connection->prepare(
        'SELECT COUNT(*) FROM information_schema.COLUMNS
         WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = :t AND COLUMN_NAME = :c'
    );
    $stmt->execute(['t' => $table, 'c' => $column]);

    return (int) $stmt->fetchColumn() > 0;
}

try {
    $connection = getConnection();

    $connection->exec('SET FOREIGN_KEY_CHECKS = 0');

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_accounts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            full_name VARCHAR(255),
            role ENUM('admin', 'teacher') NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    try {
        $connection->exec('ALTER TABLE strack_accounts MODIFY COLUMN password VARCHAR(255) NOT NULL');
    } catch (PDOException $e) {
    }

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_lecturers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            account_id INT NOT NULL,
            lecturer_id VARCHAR(20) NOT NULL,
            department VARCHAR(255) DEFAULT NULL,
            modules INT DEFAULT 0,
            UNIQUE KEY uq_lecturers_account (account_id),
            UNIQUE KEY uq_lecturers_staff_id (lecturer_id),
            CONSTRAINT fk_lecturers_account FOREIGN KEY (account_id) REFERENCES strack_accounts (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    // Migrate lecturer fields from legacy strack_accounts into strack_lecturers (requires table above)
    if (columnExists($connection, 'strack_accounts', 'lecturer_id')) {
        $connection->exec("
            INSERT INTO strack_lecturers (account_id, lecturer_id, department, modules)
            SELECT a.id, a.lecturer_id, COALESCE(a.department, ''), COALESCE(a.modules, 0)
            FROM strack_accounts a
            WHERE a.role = 'teacher'
              AND a.lecturer_id IS NOT NULL
              AND TRIM(a.lecturer_id) <> ''
            ON DUPLICATE KEY UPDATE
                lecturer_id = VALUES(lecturer_id),
                department = VALUES(department),
                modules = VALUES(modules)
        ");
        try {
            $connection->exec('ALTER TABLE strack_accounts DROP COLUMN lecturer_id');
        } catch (PDOException $e) {
        }
        try {
            $connection->exec('ALTER TABLE strack_accounts DROP COLUMN department');
        } catch (PDOException $e) {
        }
        try {
            $connection->exec('ALTER TABLE strack_accounts DROP COLUMN modules');
        } catch (PDOException $e) {
        }
    }

    // Remove test / stray student rows from strack_accounts (students belong in strack_students)
    try {
        $connection->exec("DELETE FROM strack_accounts WHERE LOWER(TRIM(email)) = 'student@uni.ac.uk'");
    } catch (PDOException $e) {
    }
    try {
        $connection->exec("DELETE FROM strack_accounts WHERE role = 'student'");
    } catch (PDOException $e) {
    }

    try {
        $connection->exec("ALTER TABLE strack_accounts MODIFY COLUMN role ENUM('admin', 'teacher') NOT NULL");
    } catch (PDOException $e) {
    }

    $connection->exec('SET FOREIGN_KEY_CHECKS = 1');

    // --- Seed: admin + lecturer only in strack_accounts ---
    $accounts = [
        ['admin@uni.ac.uk', 'admin123', 'Test Admin', 'admin'],
        ['lecturer@uni.ac.uk', 'lecturer123', 'Test Lecturer', 'teacher'],
    ];

    $stmtAcc = $connection->prepare("
        INSERT INTO strack_accounts (email, password, full_name, role)
        VALUES (:email, :password, :name, :role)
        ON DUPLICATE KEY UPDATE password = :password2, full_name = :name2, role = :role2
    ");

    foreach ($accounts as $u) {
        $hash = password_hash($u[1], PASSWORD_BCRYPT);
        $stmtAcc->execute([
            'email' => $u[0],
            'password' => $hash,
            'name' => $u[2],
            'role' => $u[3],
            'password2' => $hash,
            'name2' => $u[2],
            'role2' => $u[3],
        ]);
    }

    $q = $connection->prepare('SELECT id FROM strack_accounts WHERE LOWER(TRIM(email)) = :e LIMIT 1');
    $q->execute(['e' => 'lecturer@uni.ac.uk']);
    $lecturerAccountId = (int) $q->fetchColumn();

    if ($lecturerAccountId > 0) {
        $stmtFree = $connection->prepare(
            'UPDATE strack_lecturers SET lecturer_id = :new WHERE lecturer_id = :old AND account_id <> :aid'
        );
        $stmtFree->execute(['new' => 'LEC_SEED_OLD', 'old' => 'LEC_SEED', 'aid' => $lecturerAccountId]);

        $stmtL = $connection->prepare("
            INSERT INTO strack_lecturers (account_id, lecturer_id, department, modules)
            VALUES (:account_id, 'LEC_SEED', 'School of Computer Science', 0)
            ON DUPLICATE KEY UPDATE lecturer_id = 'LEC_SEED', department = 'School of Computer Science', modules = 0
        ");
        $stmtL->execute(['account_id' => $lecturerAccountId]);
    }

    // --- Seed test student in strack_students ---
    try {
        $connection->exec("
            CREATE TABLE IF NOT EXISTS strack_students (
                id INT AUTO_INCREMENT PRIMARY KEY,
                student_id VARCHAR(20) NOT NULL UNIQUE,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) DEFAULT NULL,
                department VARCHAR(255) DEFAULT NULL,
                year VARCHAR(20) DEFAULT NULL,
                degree VARCHAR(50) DEFAULT NULL,
                gpa DECIMAL(3,2) DEFAULT 0,
                points INT DEFAULT 0,
                attendance DECIMAL(5,2) DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        ");
        try {
            $connection->exec('ALTER TABLE strack_students ADD COLUMN password VARCHAR(255) DEFAULT NULL AFTER email');
        } catch (PDOException $e) {
        }
        try {
            $connection->exec('ALTER TABLE strack_students ADD COLUMN degree VARCHAR(50) DEFAULT NULL AFTER year');
        } catch (PDOException $e) {
        }

        // Remove duplicate emails (keep newest id); then enforce one email per student.
        $connection->exec("
            DELETE s1 FROM strack_students s1
            INNER JOIN strack_students s2
              ON LOWER(TRIM(s1.email)) = LOWER(TRIM(s2.email)) AND s1.id < s2.id
        ");
        try {
            $connection->exec('ALTER TABLE strack_students ADD UNIQUE KEY uq_students_email (email)');
        } catch (PDOException $e) {
        }

        $stuHash = password_hash('student123', PASSWORD_BCRYPT);
        $stmtStu = $connection->prepare("
            INSERT INTO strack_students (student_id, full_name, email, password, department, year, degree, gpa, points, attendance)
            VALUES ('STU001', 'Test Student', 'student@uni.ac.uk', :password, 'Computer Science', '1', NULL, 0, 0, 0)
            ON DUPLICATE KEY UPDATE
                student_id = VALUES(student_id),
                full_name = VALUES(full_name),
                email = VALUES(email),
                password = VALUES(password),
                department = VALUES(department),
                year = VALUES(year),
                degree = VALUES(degree),
                gpa = VALUES(gpa),
                points = VALUES(points),
                attendance = VALUES(attendance)
        ");
        $stmtStu->execute(['password' => $stuHash]);

        // Default points = 0 for everyone; test account gets 10,000 for Rewards testing
        $connection->exec('UPDATE strack_students SET points = 0');
        $connection->exec(
            "UPDATE strack_students SET points = 10000 WHERE LOWER(TRIM(email)) = 'student@uni.ac.uk'"
        );
    } catch (PDOException $e) {
        echo '<p style="color:orange">Note: could not seed strack_students — ' . htmlspecialchars($e->getMessage()) . '</p>';
    }

    echo '<h2>Setup complete</h2>';
    echo '<p><strong>strack_accounts</strong> (logins): admin, lecturer test users only.</p>';
    echo '<p><strong>strack_lecturers</strong>: profile for the test lecturer (LEC_SEED).</p>';
    echo '<p><strong>strack_students</strong>: test student <strong>student@uni.ac.uk</strong> / <strong>student123</strong> (10,000 points for Rewards testing; others set to 0)</p>';
    echo '<p><strong>Admin:</strong> admin@uni.ac.uk / admin123 &nbsp;|&nbsp; <strong>Lecturer:</strong> lecturer@uni.ac.uk / lecturer123</p>';
    echo '<p><a href="check.php">Check database</a> | <a href="../">Go to login</a></p>';
} catch (PDOException $e) {
    echo '<h2>Error</h2><p>' . htmlspecialchars($e->getMessage()) . '</p>';
}
