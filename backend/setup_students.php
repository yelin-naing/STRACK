<?php
/**
 * Creates strack_students table.
 * Visit: /strack/backend/setup_students.php
 */

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();

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
        )
    ");

    // Add password column if table existed before (migration for existing installs)
    try {
        $connection->exec("ALTER TABLE strack_students ADD COLUMN password VARCHAR(255) DEFAULT NULL AFTER email");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    // Add degree column if table existed before (migration for existing installs)
    try {
        $connection->exec("ALTER TABLE strack_students ADD COLUMN degree VARCHAR(50) DEFAULT NULL AFTER year");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    echo "<h2>Students setup complete</h2>";
    echo "<p>The <strong>strack_students</strong> table has been created.</p>";
    echo "<p><a href='../'>Go to Strack</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2>";
    echo "<p>" . htmlspecialchars($e->getMessage()) . "</p>";
}
