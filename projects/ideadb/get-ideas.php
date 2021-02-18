<?php

ini_set('display_errors', 1);
error_reporting(-1);

$servername = "localhost";
$username = "thejykco_idea_main";
$password = "Puckshin98789";
$dbname = "thejykco_idea_db";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$sql = "SELECT id, user, title, content FROM idea_table";
$result = mysqli_query($connection, $sql);

if ($result === false) {
    die("Connection failed");
}

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {
        echo $row["id"] . "~" . $row["user"] . "~" . $row["title"] . "~" . $row["content"] . "|";
    }
} else {
    echo "";
}

$connection->close();
?>