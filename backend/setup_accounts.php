<?php
/**
 * Creates strack_accounts table with plain text password.
 * Visit: /strack/backend/setup_accounts.php
 */

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_accounts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            full_name VARCHAR(255),
            role ENUM('student', 'teacher', 'admin') DEFAULT 'student',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");

    $users = [
        ['student@uni.ac.uk', 'student123', 'Test Student', 'student'],
        ['lecturer@uni.ac.uk', 'lecturer123', 'Test Lecturer', 'teacher'],
        ['admin@uni.ac.uk', 'admin123', 'Test Admin', 'admin'],
    ];

    $stmt = $connection->prepare(
        "INSERT INTO strack_accounts (email, password, full_name, role) VALUES (:email, :password, :name, :role)
         ON DUPLICATE KEY UPDATE password = :password2, full_name = :name2, role = :role2"
    );

    foreach ($users as $u) {
        $stmt->execute([
            'email' => $u[0],
            'password' => $u[1],
            'name' => $u[2],
            'role' => $u[3],
            'password2' => $u[1],
            'name2' => $u[2],
            'role2' => $u[3],
        ]);
    }

    echo "<h2>Setup complete</h2>";
    echo "<p><strong>Student:</strong> student@uni.ac.uk / student123</p>";
    echo "<p><strong>Lecturer:</strong> lecturer@uni.ac.uk / lecturer123</p>";
    echo "<p><strong>Admin:</strong> admin@uni.ac.uk / admin123</p>";
    echo "<p><a href='../'>Go to login</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2><p>" . htmlspecialchars($e->getMessage()) . "</p>";
}
