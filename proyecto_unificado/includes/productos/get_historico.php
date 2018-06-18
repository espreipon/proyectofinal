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
if ($myObj->loggedin) {
    $userId = $_SESSION['userId'];
    $consulta = 'SELECT p.id, p.nombre, p.image, h.cantidad, h.precio_ud, h.fecha FROM tienda.historico h INNER JOIN tienda.productos p ON h.producto_id = p.id WHERE h.user_id =' . $userId;
    if ($resultado = $conn->query($consulta)) {
        while ($row = $resultado->fetch_assoc()) {
            $myObj->list[] = $row;
        }
    }
}
if (!isset($_SESSION['loggedin'])) {
    echo "Debe iniciar sesion para acceder a esta página";
}
echo json_encode($myObj);
$conn->close();
?>



