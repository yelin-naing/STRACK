<?php
/**
 * Login diagnostic - run this to check why login might fail.
 * Visit: /strack/backend/check.php
 */
header('Content-Type: text/html; charset=utf-8');

echo "<h2>Strack Login Check</h2>";

try {
    require_once __DIR__ . '/credentials.php';
    echo "<p>DB: <strong>$host</strong> / <strong>$dbname</strong> / <strong>$username</strong></p>";

    require_once __DIR__ . '/getConnection.php';
    $connection = getConnection();
    echo "<p style='color:green'>✓ Database connected</p>";

    $tables = $connection->query("SHOW TABLES LIKE 'strack_accounts'")->fetchAll();
    if (empty($tables)) {
        echo "<p style='color:red'>✗ Table strack_accounts does NOT exist.</p>";
        echo "<p><a href='setup_accounts.php'>Run setup_accounts.php</a> first.</p>";
        exit;
    }
    echo "<p style='color:green'>✓ Table strack_accounts exists</p>";

    $users = $connection->query("SELECT id, email, password, full_name, role FROM strack_accounts")->fetchAll(PDO::FETCH_ASSOC);

    if (empty($users)) {
        echo "<p style='color:red'>✗ No users in table.</p>";
        echo "<p><a href='setup_accounts.php'>Run setup_accounts.php</a> to create test users.</p>";
        exit;
    }

    echo "<p style='color:green'>✓ Found " . count($users) . " user(s)</p>";
    echo "<table border='1' cellpadding='8'><tr><th>ID</th><th>Email</th><th>Password</th><th>Role</th></tr>";
    foreach ($users as $u) {
        echo "<tr><td>{$u['id']}</td><td>{$u['email']}</td><td>{$u['password']}</td><td>{$u['role']}</td></tr>";
    }
    echo "</table>";

    echo "<h3>Try logging in with:</h3>";
    echo "<ul>";
    foreach ($users as $u) {
        echo "<li><strong>{$u['email']}</strong> / <strong>{$u['password']}</strong> ({$u['role']})</li>";
    }
    echo "</ul>";
    echo "<p><a href='../'>Go to login</a></p>";

} catch (PDOException $e) {
    echo "<p style='color:red'>Error: " . htmlspecialchars($e->getMessage()) . "</p>";
}
