<?php
/**
 * Reset the test user - uses strack_accounts with plain text password.
 * Visit: /strack/backend/reset_user.php
 */

require_once __DIR__ . '/getConnection.php';

    $users = [
        // [email, password, full_name, role, lecturer_id, department, modules]
        ['student@uni.ac.uk', 'student123', 'Test Student', 'student', null, null, 0],
        ['lecturer@uni.ac.uk', 'lecturer123', 'Test Lecturer', 'teacher', 'LEC001', 'School of Computer Science', 0],
        ['admin@uni.ac.uk', 'admin123', 'Test Admin', 'admin', null, null, 0],
    ];

try {
    $connection = getConnection();

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_accounts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            full_name VARCHAR(255),
            lecturer_id VARCHAR(20) DEFAULT NULL UNIQUE,
            department VARCHAR(255) DEFAULT NULL,
            modules INT DEFAULT 0,
            role ENUM('student', 'teacher', 'admin') DEFAULT 'student',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");

    // Migration: add lecturer-related columns for existing installs
    try {
        $connection->exec("ALTER TABLE strack_accounts ADD COLUMN lecturer_id VARCHAR(20) DEFAULT NULL UNIQUE");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }
    try {
        $connection->exec("ALTER TABLE strack_accounts ADD COLUMN department VARCHAR(255) DEFAULT NULL");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }
    try {
        $connection->exec("ALTER TABLE strack_accounts ADD COLUMN modules INT DEFAULT 0");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    $stmt = $connection->prepare(
        "INSERT INTO strack_accounts (email, password, full_name, role, lecturer_id, department, modules)
         VALUES (:email, :password, :name, :role, :lecturer_id, :department, :modules)
         ON DUPLICATE KEY UPDATE password = :password2, full_name = :name2, role = :role2"
    );

    foreach ($users as $u) {
        $stmt->execute([
            'email' => $u[0],
            'password' => $u[1],
            'name' => $u[2],
            'role' => $u[3],
            'lecturer_id' => $u[4],
            'department' => $u[5],
            'modules' => $u[6],
            'password2' => $u[1],
            'name2' => $u[2],
            'role2' => $u[3],
        ]);
    }

    echo "<h2>Reset complete</h2>";
    echo "<p><strong>Student:</strong> student@uni.ac.uk / student123</p>";
    echo "<p><strong>Lecturer:</strong> lecturer@uni.ac.uk / lecturer123</p>";
    echo "<p><strong>Admin:</strong> admin@uni.ac.uk / admin123</p>";
    echo "<p><a href='../'>Go to login</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2><p>" . htmlspecialchars($e->getMessage()) . "</p>";
}
