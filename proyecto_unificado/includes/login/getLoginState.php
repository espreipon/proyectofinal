<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8'); 
// Esto le dice a PHP que generaremos cadenas UTF-8
mb_http_output('UTF-8');
header('Content-Type: text/json');
header("Cache-Control: no-cache, must-revalidate");
$myObj = new stdClass();
$myObj->loggedin = isset($_SESSION['loggedin']);
if($myObj->loggedin) {
    $myObj->userId = $_SESSION['userId'];
    $myObj->username = $_SESSION['username'];        
}
echo json_encode($myObj);