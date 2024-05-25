try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $_SESSION['db_status'] = "Connection established";
} catch (PDOException $e) {
    $_SESSION['db_status'] = "Connection failed: " . $e->getMessage();
    $conn = null;
}