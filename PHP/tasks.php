<?php
    include "./partials/connection.php";
    try{
        $sql = "select * from tasks;";
        $state = $conn->query($sql);
        $json = [];
        while($row = $state->fetch()){
            $json[] = [
                "id" => $row['id'],
                "userid" => $row['userid'],
                "title" => $row['title'],
                "completed" => $row['compelted'] == 1
            ];
        };
        $jsonString = json_encode($json);
        echo $jsonString;
    } catch(PDOException $e){
        echo $e->getMessage();
    }