<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8'); 
// Esto le dice a PHP que generaremos cadenas UTF-8
mb_http_output('UTF-8');

require_once('../conexion.php');
header('Content-Type: text/json');
header("Cache-Control: no-cache, must-revalidate");
$myObj = new stdClass();
$myObj->loggedin = isset($_SESSION['loggedin']);
$myObj->list = array();
if( isset($_GET['typeId'])) { //si se pone $myObj->loggedin cuando no esta logeado no salen los articulos
    $typeId = $_GET['typeId'];
    $consulta= 'SELECT * FROM productos WHERE type_id = '.$typeId;
    if ($resultado = $conn->query($consulta)) {
    
        while($row = $resultado->fetch_assoc()) {
            $myObj->list[] = $row;
        }
    }
}
echo json_encode($myObj);
$conn->close();