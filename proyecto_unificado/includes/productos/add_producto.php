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
$myObj->affected_rows = 0;

if ($myObj->loggedin && isset($_GET["id"]) && isset($_SESSION['userId'])) {
    $idProducto = $_GET["id"];
    $userId = $_SESSION['userId'];

    $sql = 'SELECT unidades FROM productos WHERE id = ' . $idProducto;
    $resultado = $conn->query($sql);
    $unidades = $resultado->fetch_assoc()["unidades"];

    if ($unidades > 0) {
        $consulta = 'SELECT cantidad FROM carrito WHERE producto_id = ' . $idProducto . ' AND user_id = ' . $userId;
        $conn->query($consulta);
        if ($conn->affected_rows == 1) {
            $consulta = 'UPDATE carrito SET cantidad = cantidad + 1 WHERE producto_id = ' . $idProducto . ' AND user_id = ' . $userId;
            $conn->query($consulta);
        } else {
            $consulta = 'INSERT INTO carrito (producto_id, cantidad, user_id) VALUES (' . $idProducto . ', 1,' . $userId . ')';
            $conn->query($consulta);
        }
        $myObj->affected_rows = $conn->affected_rows;
    }
}

echo json_encode($myObj);
$conn->close();