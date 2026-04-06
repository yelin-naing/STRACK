<?php
/**
 * Creates strack_timetable_entries and strack_timetable_entry_lecturers.
 * Visit: /strack/backend/setup_timetable.php
 */

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_timetable_entries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            entry_type ENUM('class', 'event') NOT NULL,
            course_id INT DEFAULT NULL,
            event_title VARCHAR(255) DEFAULT NULL,
            event_description TEXT DEFAULT NULL,
            entry_date DATE NOT NULL,
            start_time TIME NOT NULL,
            end_time TIME NOT NULL,
            room_location VARCHAR(255) DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_timetable_date (entry_date),
            CONSTRAINT fk_timetable_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_timetable_entry_lecturers (
            entry_id INT NOT NULL,
            account_id INT NOT NULL,
            PRIMARY KEY (entry_id, account_id),
            CONSTRAINT fk_ttel_entry FOREIGN KEY (entry_id) REFERENCES strack_timetable_entries (id) ON DELETE CASCADE,
            CONSTRAINT fk_ttel_account FOREIGN KEY (account_id) REFERENCES strack_accounts (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    echo '<h2>Timetable setup complete</h2>';
    echo '<p>Tables <strong>strack_timetable_entries</strong> and <strong>strack_timetable_entry_lecturers</strong> are ready.</p>';
    echo '<p><a href="../">Go to Strack</a></p>';
} catch (PDOException $e) {
    echo '<h2>Error</h2><p>' . htmlspecialchars($e->getMessage()) . '</p>';
}
