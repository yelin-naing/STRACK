<?php
/**
 * Debug: Test students API - visit /strack/backend/test_students_api.php then delete this file.
 */
header('Content-Type: application/json');
require_once __DIR__ . '/getConnection.php';
try {
    $connection = getConnection();
    $cols = $connection->query("DESCRIBE strack_students")->fetchAll(PDO::FETCH_ASSOC);
    $stmt = $connection->query("SELECT id, student_id, full_name, email, `password` FROM strack_students LIMIT 2");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([
        'table_columns' => array_column($cols, 'Field'),
        'raw_rows' => $rows,
        'first_password_value' => $rows[0]['password'] ?? 'MISSING',
    ], JSON_PRETTY_PRINT);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()], JSON_PRETTY_PRINT);
}
