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

$idProducto = $_GET["id"];

$cantidad=null;
$consulta= 'SELECT cantidad FROM carrito WHERE producto_id = '.$idProducto;
$resultado = $conn->query($consulta);
if($conn->affected_rows == 1)
{
    $cantidad = $resultado->fetch_assoc()["cantidad"];
}
$resultado->close();
$consulta = '';
if($cantidad != null && $cantidad > 1)
{
    $consulta = 'UPDATE carrito SET cantidad = '.($cantidad-1).' WHERE producto_id = '.$idProducto;
}
else
{
    $consulta = 'DELETE FROM carrito WHERE producto_id = '.$idProducto;
}
$conn->query($consulta);
echo $conn->affected_rows;
$conn->close();