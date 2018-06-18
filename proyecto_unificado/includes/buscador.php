<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8'); 
// Esto le dice a PHP que generaremos cadenas UTF-8
mb_http_output('UTF-8');

require_once('conexion.php');
header('Content-Type: text/json');
header("Cache-Control: no-cache, must-revalidate");


$myObj = new stdClass();
$myObj->list = array();
$myObj->loggedin = isset($_SESSION['loggedin']);
if(isset($_GET['typeId'])) {
    $typeId = $_GET['typeId'];
    if($_GET){
        $busqueda = trim($_GET['buscar']);
        if (!empty($busqueda)){
            $sql = "SELECT * FROM productos WHERE nombre LIKE '%$busqueda%' AND type_id = $typeId ORDER BY nombre";
            if ($resultado = $conn->query($sql)){
                while($row = $resultado->fetch_assoc()) {
                    $myObj->list[] = $row;
                }
            }
        }
    }    
}
echo json_encode($myObj);
$conn->close();
?>