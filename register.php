<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Here you would typically insert the new user into a database
    // This is just a simulation
    echo "User registered: $username";
}
?>
