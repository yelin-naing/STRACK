<?php
/**
 * Creates strack_course_resources and uploads folder.
 * Visit: /strack/backend/setup_course_resources.php
 */

require_once __DIR__ . '/getConnection.php';

$uploadDir = __DIR__ . '/uploads/course_resources';

try {
    $connection = getConnection();

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_course_resources (
            id INT AUTO_INCREMENT PRIMARY KEY,
            course_id INT NOT NULL,
            original_filename VARCHAR(255) NOT NULL,
            stored_filename VARCHAR(255) NOT NULL,
            mime_type VARCHAR(127) DEFAULT NULL,
            file_size INT UNSIGNED NOT NULL DEFAULT 0,
            uploaded_by_account_id INT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE KEY uq_stored_filename (stored_filename),
            INDEX idx_course_resources_course (course_id),
            CONSTRAINT fk_cr_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE,
            CONSTRAINT fk_cr_account FOREIGN KEY (uploaded_by_account_id) REFERENCES strack_accounts (id) ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    $ht = $uploadDir . '/.htaccess';
    if (!is_file($ht)) {
        file_put_contents($ht, "# Block script execution in uploads\n<FilesMatch \"\\.(php|phtml|php5|phar)$\">\n  Require all denied\n</FilesMatch>\n");
    }

    echo '<h2>Course resources setup complete</h2>';
    echo '<p>Table <strong>strack_course_resources</strong> is ready and uploads directory exists.</p>';
    echo '<p><a href="../">Go to Strack</a></p>';
} catch (PDOException $e) {
    echo '<h2>Error</h2><p>' . htmlspecialchars($e->getMessage()) . '</p>';
}
