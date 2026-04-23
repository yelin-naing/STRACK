<?php
/**
 * strack_lecturer_awarded_badges — lecturer-assigned achievements + points.
 */
function ensure_badge_awards_table(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_lecturer_awarded_badges (
            id INT AUTO_INCREMENT PRIMARY KEY,
            student_id INT NOT NULL,
            badge_id VARCHAR(64) NOT NULL,
            points_awarded INT NOT NULL,
            lecturer_account_id INT NOT NULL,
            awarded_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            UNIQUE KEY uq_student_badge (student_id, badge_id),
            KEY idx_award_student (student_id),
            KEY idx_award_lecturer (lecturer_account_id),
            CONSTRAINT fk_award_badge_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE,
            CONSTRAINT fk_award_lecturer_acct FOREIGN KEY (lecturer_account_id) REFERENCES strack_accounts (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
    try {
        $connection->exec('
            ALTER TABLE strack_lecturer_awarded_badges
            ADD COLUMN student_popup_seen TINYINT(1) NOT NULL DEFAULT 0
            AFTER awarded_at
        ');
    } catch (PDOException $e) {
        if (stripos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }
}
