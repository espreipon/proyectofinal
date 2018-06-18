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

if ($conn->connect_error) {
 die("La conexion falló: " . $conexion->connect_error);
}

$myObj = new stdClass();
$myObj->loggedin = isset($_SESSION['loggedin']);
if($myObj->loggedin) {
    $username = $_SESSION['username'];        
}

$phone = $_POST['phone'];
$sql = "UPDATE usuarios SET phone = '$phone' WHERE username = '$username'";

if ($resultado = $conn->query($sql)) {
    echo "El teléfono se ha actualizado correctamente";
} else {
    echo "El teléfono no ha sido actualizado";
}
mysqli_close($conn);
?>  