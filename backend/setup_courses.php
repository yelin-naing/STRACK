<?php
/**
 * Creates strack_courses table.
 * Visit: /strack/backend/setup_courses.php
 */

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_courses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            course_code VARCHAR(20) NOT NULL UNIQUE,
            course_name VARCHAR(255) NOT NULL,
            department VARCHAR(255) DEFAULT NULL,
            lecturer_id VARCHAR(20) DEFAULT NULL,
            credits INT DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_course_students (
            course_id INT NOT NULL,
            student_id INT NOT NULL,
            PRIMARY KEY (course_id, student_id),
            CONSTRAINT fk_course_students_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE,
            CONSTRAINT fk_course_students_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    // Migrations for existing installs
    try {
        $connection->exec("ALTER TABLE strack_courses ADD COLUMN department VARCHAR(255) DEFAULT NULL");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) throw $e;
    }
    try {
        $connection->exec("ALTER TABLE strack_courses ADD COLUMN lecturer_id VARCHAR(20) DEFAULT NULL");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) throw $e;
    }
    try {
        $connection->exec("ALTER TABLE strack_courses ADD COLUMN credits INT DEFAULT 0");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) throw $e;
    }

    echo "<h2>Courses setup complete</h2>";
    echo "<p>The <strong>strack_courses</strong> and <strong>strack_course_students</strong> tables are ready.</p>";
    echo "<p><a href='../'>Go to Strack</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2><p>" . htmlspecialchars($e->getMessage()) . "</p>";
}

