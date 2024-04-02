<?php
    //conexion a la base de datos
    try{
        $sql = "select * from users;";
        $state = $conn->query($sql);
        $json = [];
        while($row = $result->fetch()){
            //echo $row['id'] . "<br />";
            array_push($json, [
                "id"=> $row['id'], 
                "firstname" => $row['firstname'],
                "lastname" => $row['lastname'],
                "email" => $row['email']]);
            //var_dump($json) . "<br />";
        };
        header('Access-Control-Allow-Origin: *');
        $jsonString = json_encode($json);
        echo $jsonString;
    } catch(PDOException $e){
        echo $e->getMessage();
    }