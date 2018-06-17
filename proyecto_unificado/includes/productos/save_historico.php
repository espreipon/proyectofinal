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
if($myObj->loggedin) {
    $userId = $_SESSION['userId'];
    $consulta=  'SELECT c.*, p.precio FROM carrito c INNER JOIN productos p ON c.producto_id = p.id WHERE c.user_id='.$userId;
    /*
    $user_Id = 'SELECT user_id FROM carrito WHERE user_id='.$userId;
    $cantidad = 'SELECT cantidad FROM carrito WHERE user_id='.$userId;

    */


   //$consulta= 'SELECT p.id, p.nombre, p.image, h.cantidad, h.precio_ud, h.fecha FROM tienda.historico h INNER JOIN tienda.productos p ON h.producto_id = p.id WHERE h.user_id ='.$userId;
    //$sql = "INSERT INTO historico(producto_id, user_id, cantidad, precio_ud) VALUES ($prod_Id, $user_Id, $cantidad, $precio)";
    if ($resultado = $conn->query($consulta)) {
        while($row = $resultado->fetch_assoc()) {
            $prod_Id = $row['producto_id'];
            $cantidad = $row['cantidad'];
            $user_Id = $row['user_id'];
            $precio = $row['precio'];
            $myObj->list[] = $row;
            $ins = 'INSERT INTO historico(producto_id, user_id, cantidad, precio_ud) VALUES ('.$prod_Id.','.$user_Id.','.$cantidad.','.$precio.')';
            $conn->query($ins);

            $updt = "UPDATE productos SET unidades = unidades - ".$cantidad." WHERE id = ".$prod_Id;
            $conn->query($updt);

            $del = "DELETE FROM carrito WHERE user_id = ".$user_Id;
            $conn->query($del);
        }
    }
}
echo json_encode($myObj);
$conn->close();
?>