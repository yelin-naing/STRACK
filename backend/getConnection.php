<?php

function getConnection() {
    require __DIR__ . '/credentials.php';

    try {
        $connection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $connection;

    } catch (PDOException $e) {
        throw $e;
    }
}