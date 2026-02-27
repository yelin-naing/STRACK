<?php
/**
 * Adds lecturer and admin accounts if they don't exist.
 * Visit: /strack/backend/add_lecturer_admin.php
 */

require_once __DIR__ . '/getConnection.php';

$users = [
    ['lecturer@uni.ac.uk', 'lecturer123', 'Test Lecturer', 'teacher'],
    ['admin@uni.ac.uk', 'admin123', 'Test Admin', 'admin'],
];

try {
    $connection = getConnection();

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

    echo "<h2>Lecturer and Admin added</h2>";
    echo "<p><strong>Lecturer:</strong> lecturer@uni.ac.uk / lecturer123</p>";
    echo "<p><strong>Admin:</strong> admin@uni.ac.uk / admin123</p>";
    echo "<p><a href='check.php'>View all users</a> | <a href='../'>Go to login</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2><p>" . htmlspecialchars($e->getMessage()) . "</p>";
}
