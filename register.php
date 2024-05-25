<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="body">
        <h2>Register</h2>
        <?php
        session_start();
        if (isset($_SESSION['db_status'])) {
            echo '<p>' . $_SESSION['db_status'] . '</p>';
            unset($_SESSION['db_status']); // Clear the message after displaying it
        }
        ?>
        <form action="register_user.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Register</button>
        </form>
    </div>
</body>
</html>