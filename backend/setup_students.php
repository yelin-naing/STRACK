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

    // Graduation year (e.g. 2027) — shown as "Class of" in admin
    try {
        $connection->exec("ALTER TABLE strack_students ADD COLUMN class_of VARCHAR(10) DEFAULT NULL AFTER degree");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    try {
        $connection->exec('ALTER TABLE strack_students ADD COLUMN intake_month VARCHAR(8) DEFAULT NULL');
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }
    try {
        $connection->exec('ALTER TABLE strack_students ADD COLUMN intake_year SMALLINT UNSIGNED DEFAULT NULL');
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    $connection->exec("
        DELETE s1 FROM strack_students s1
        INNER JOIN strack_students s2
          ON LOWER(TRIM(s1.email)) = LOWER(TRIM(s2.email)) AND s1.id < s2.id
    ");
    try {
        $connection->exec('ALTER TABLE strack_students ADD UNIQUE KEY uq_students_email (email)');
    } catch (PDOException $e) {
    }

    $connection->exec('UPDATE strack_students SET points = 0');
    $connection->exec(
        "UPDATE strack_students SET points = 10000 WHERE LOWER(TRIM(email)) = 'student@uni.ac.uk'"
    );

    echo "<h2>Students setup complete</h2>";
    echo "<p>The <strong>strack_students</strong> table has been created.</p>";
    echo "<p><a href='../'>Go to Strack</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2>";
    echo "<p>" . htmlspecialchars($e->getMessage()) . "</p>";
}
