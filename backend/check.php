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
    echo "<table border='1' cellpadding='8'><tr><th>ID</th><th>Email</th><th>Password (DB)</th><th>Role</th></tr>";
    foreach ($users as $u) {
        $pw = (string) ($u['password'] ?? '');
        $pwCell = (strncmp($pw, '$2', 2) === 0 || strncmp($pw, '$argon2', 7) === 0)
            ? '<code>bcrypt hash (hidden)</code>'
            : htmlspecialchars($pw);
        echo '<tr><td>' . (int) $u['id'] . '</td><td>' . htmlspecialchars($u['email']) . '</td><td>' . $pwCell . '</td><td>' . htmlspecialchars($u['role']) . '</td></tr>';
    }
    echo "</table>";

    $tablesL = $connection->query("SHOW TABLES LIKE 'strack_lecturers'")->fetchAll();
    if (!empty($tablesL)) {
        echo "<p style='color:green'>✓ Table strack_lecturers exists</p>";
        $lecs = $connection->query("
            SELECT l.id, l.account_id, l.lecturer_id, l.department, a.email
            FROM strack_lecturers l
            INNER JOIN strack_accounts a ON a.id = l.account_id
            ORDER BY l.lecturer_id
        ")->fetchAll(PDO::FETCH_ASSOC);
        if (empty($lecs)) {
            echo "<p style='color:orange'>No lecturer profiles yet (add via Admin or run setup_accounts.php).</p>";
        } else {
            echo "<table border='1' cellpadding='8'><tr><th>ID</th><th>account_id</th><th>lecturer_id</th><th>department</th><th>email (login)</th></tr>";
            foreach ($lecs as $L) {
                echo '<tr><td>' . (int) $L['id'] . '</td><td>' . (int) $L['account_id'] . '</td><td>' . htmlspecialchars($L['lecturer_id']) . '</td><td>' . htmlspecialchars($L['department'] ?? '') . '</td><td>' . htmlspecialchars($L['email']) . '</td></tr>';
            }
            echo "</table>";
        }
    } else {
        echo "<p style='color:orange'>Table strack_lecturers not found — run <a href='setup_accounts.php'>setup_accounts.php</a>.</p>";
    }

    echo '<h3>Password check (server-side)</h3>';
    $testSeeds = [
        ['admin@uni.ac.uk', 'admin123'],
        ['lecturer@uni.ac.uk', 'lecturer123'],
        ['student@uni.ac.uk', 'student123'],
    ];
    echo '<ul>';
    foreach ($testSeeds as $pair) {
        [$em, $plain] = $pair;
        if (strtolower($em) === 'student@uni.ac.uk') {
            $st = $connection->prepare(
                'SELECT `password` AS pwd FROM strack_students WHERE LOWER(TRIM(email)) = :e LIMIT 1'
            );
        } else {
            $st = $connection->prepare(
                'SELECT `password` AS pwd FROM strack_accounts WHERE LOWER(TRIM(email)) = :e LIMIT 1'
            );
        }
        $st->execute(['e' => strtolower($em)]);
        $r = $st->fetch(PDO::FETCH_ASSOC);
        if (!$r) {
            $where = strtolower($em) === 'student@uni.ac.uk' ? 'strack_students' : 'strack_accounts';
            echo '<li><strong>' . htmlspecialchars($em) . '</strong>: <span style="color:red">no row in ' . htmlspecialchars($where) . '</span></li>';
            continue;
        }
        $stored = (string) ($r['pwd'] ?? '');
        $len = strlen($stored);
        $ok = false;
        if ($stored !== '') {
            if (strncmp($stored, '$2', 2) === 0 || strncmp($stored, '$argon2', 7) === 0) {
                $ok = password_verify($plain, $stored);
            } else {
                $ok = $stored === $plain;
            }
        }
        $lenHint = $len < 60 && strncmp($stored, '$2', 2) === 0
            ? ' (hash looks truncated — widen password column and run setup_accounts again)'
            : '';
        echo '<li><strong>' . htmlspecialchars($em) . '</strong>: ' . ($ok ? '<span style="color:green">password OK</span>' : '<span style="color:red">password mismatch</span>') . ' <small>(stored length ' . $len . ')</small>' . htmlspecialchars($lenHint) . '</li>';
    }
    echo '</ul>';

    echo "<h3>Seed accounts (password column may be hashed — that is OK)</h3>";
    echo "<p>If login fails with the usual test passwords, <a href='setup_accounts.php'>open setup_accounts.php once</a> to reset them.</p>";
    echo "<ul>";
    foreach ($users as $u) {
        $pw = (string) ($u['password'] ?? '');
        $hint = (strncmp($pw, '$2', 2) === 0 || strncmp($pw, '$argon2', 7) === 0)
            ? '(stored as hash — use the seed password from setup_accounts, e.g. admin123)'
            : htmlspecialchars($pw);
        echo "<li><strong>" . htmlspecialchars($u['email']) . "</strong> — " . $hint . " <em>(" . htmlspecialchars($u['role']) . ")</em></li>";
    }
    echo "</ul>";
    echo "<p><a href='../'>Go to login</a></p>";

} catch (PDOException $e) {
    echo "<p style='color:red'>Error: " . htmlspecialchars($e->getMessage()) . "</p>";
}
