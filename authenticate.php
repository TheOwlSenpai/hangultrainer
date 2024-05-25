<?php
session_start();
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($conn) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch();

        if ($user && $password === $user['password']) {
            $_SESSION['username'] = $user['username'];
            header("Location: index.html");
            exit;
        } else {
            echo "Invalid username or password.";
        }
    } else {
        echo "Database connection failed.";
    }
}
?>