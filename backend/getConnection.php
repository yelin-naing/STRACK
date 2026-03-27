<?php
/**
 * PDO connection for Strack backend.
 * Loads credentials.php from this same directory (always use __DIR__ — relative paths break under the web server).
 */

function getConnection(): PDO
{
    require_once __DIR__ . '/credentials.php';

    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=utf8mb4',
        $host,
        $dbname
    );

    return new PDO(
        $dsn,
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
}
