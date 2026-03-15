<?php
/**
 * Creates strack_departments table and seeds sample data.
 * Visit: /strack/backend/setup_departments.php
 */

require_once __DIR__ . '/getConnection.php';

try {
    $connection = getConnection();

    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_departments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            code VARCHAR(20) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");

    $departments = [
        ['CS', 'School of Computer Science', 'Part of Faculty of Science and Environment'],
        ['NBS', 'Newcastle Business School', 'Part of Faculty of Society and Culture'],
        ['EPM', 'School of Engineering, Physics and Mathematics', 'Part of Faculty of Science and Environment'],
        ['DACI', 'School of Design, Arts and Creative Industries', 'Part of Faculty of Society and Culture'],
    ];

    $stmt = $connection->prepare(
        "INSERT IGNORE INTO strack_departments (code, name, description) VALUES (:code, :name, :description)"
    );

    foreach ($departments as $d) {
        $stmt->execute([
            'code' => $d[0],
            'name' => $d[1],
            'description' => $d[2],
        ]);
    }

    echo "<h2>Departments setup complete</h2>";
    echo "<p>The <strong>strack_departments</strong> table has been created and seeded with 4 sample departments.</p>";
    echo "<p><a href='../'>Go to Strack</a></p>";
} catch (PDOException $e) {
    echo "<h2>Error</h2>";
    echo "<p>" . htmlspecialchars($e->getMessage()) . "</p>";
    echo "<p>Make sure your database credentials in <code>credentials.php</code> are correct and the database exists.</p>";
}
