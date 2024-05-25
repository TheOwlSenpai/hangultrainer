<?php
session_start();
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($conn) { // Check if connection was successful
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Check if the username already exists
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch();

        if ($user) {
            echo "Username already taken. Please choose a different username.";
        } else {
            // Insert new user into the database
            $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
            $stmt->execute(['username' => $username, 'password' => $password]);

            header("Location: login.php");
            exit;
        }
    } else {
        echo "Database connection failed.";
    }
}
?>