<?php
/**
 * Creates strack_degrees table.
 * Visit: /strack/backend/setup_degrees.php
 */

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_degrees (
            id INT AUTO_INCREMENT PRIMARY KEY,
            code VARCHAR(20) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL,
            department VARCHAR(255) DEFAULT NULL,
            description TEXT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");

    // Migration for existing installs
    try {
        $connection->exec("ALTER TABLE strack_degrees ADD COLUMN department VARCHAR(255) DEFAULT NULL");
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    echo "<h2>Degrees setup complete</h2>";
    echo "<p>The <strong>strack_degrees</strong> table has been created.</p>";
    echo "<p><a href='../'>Go to Strack</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2><p>" . htmlspecialchars($e->getMessage()) . "</p>";
}

