<?php
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

$myArray = array();
$consulta= 'SELECT p.id, p.nombre, p.descripcion, c.cantidad, p.precio, (p.precio*c.cantidad) AS total FROM tienda.carrito c INNER JOIN tienda.productos p ON c.producto_id = p.id WHERE c.user_id ='.$userId;
if ($resultado = $conn->query($consulta)) {

    while($row = $resultado->fetch_assoc()) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

$resultado->close();
$conn->close();