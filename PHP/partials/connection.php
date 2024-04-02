<?php
header('Access-Control-Allow-Origin: *');
try{
    $conn = new PDO(
        "mysql:host=localhost;dbname=tasklist", 
        "root", 
        ""
    );
} catch(PDOException $e){
    echo $e->getMessage;
}