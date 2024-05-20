<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Sample data, replace with actual database queries
    $valid_user = "user";
    $valid_password = "pass";

    if ($username == $valid_user && $password == $valid_password) {
        echo "Login successful!";
    } else {
        echo "Invalid username or password.";
    }
}
?>
