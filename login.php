<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="body">
        <h2>Login</h2>
        <?php
        session_start();
        if (isset($_SESSION['db_status'])) {
            echo '<p>' . $_SESSION['db_status'] . '</p>';
            unset($_SESSION['db_status']); // Clear the message after displaying it
        }
        ?>
        <form action="authenticate.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" class="logininput" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" class="logininput" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="register.php">Register here</a>.</p>
    </div>
</body>
</html>