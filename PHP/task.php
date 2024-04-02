<?php
include "./partials/connection.php";
$userid = $_GET['idUser'];

try{
    $sql = "SELECT * FROM tasks WHERE id = {$userid};";
    $state = $conn->query($sql);
    $row = $state->fetch();
    $json[] = [
        "id" => $row['id'],
        "userid" => $row['userid'],
        "title" => $row['title'],
    ];
    $jsonString = json_encode($json);
    echo $jsonString;
} catch(PDOException $e){
    echo $e->getMessage();
}