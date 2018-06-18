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
$myObj->listNotBought = array();
if ($myObj->loggedin) {
    $userId = $_SESSION['userId'];
    $consulta = 'SELECT c.producto_id, c.cantidad, p.precio, p.nombre, p.unidades FROM carrito c INNER JOIN productos p ON c.producto_id = p.id WHERE p.unidades-c.cantidad < 0 AND c.user_id = ' . $userId;
    $resultado = $conn->query($consulta);
    if ($conn->affected_rows > 0) {
        while ($row = $resultado->fetch_assoc()) {
            $myObj->listNotBought[] = $row;
        }
    } else {
        $consulta = 'SELECT c.producto_id, c.cantidad, p.precio, p.nombre FROM carrito c INNER JOIN productos p ON c.producto_id = p.id WHERE c.user_id = ' . $userId;
        if ($resultado = $conn->query($consulta)) {
            while ($row = $resultado->fetch_assoc()) {
                $prod_Id = $row['producto_id'];
                $cantidad = $row['cantidad'];
                $precio = $row['precio'];
                $nombreProducto = $row['nombre'];

                $updt = "UPDATE productos SET unidades = unidades - " . $cantidad . " WHERE id = " . $prod_Id;
                $conn->query($updt);
                
                $ins = 'INSERT INTO historico(producto_id, user_id, cantidad, precio_ud) VALUES (' . $prod_Id . ',' . $userId . ',' . $cantidad . ',' . $precio . ')';
                $conn->query($ins);

                $del = "DELETE FROM carrito WHERE user_id = " . $userId;
                $conn->query($del);
            }
        }
    }

    /*
    $consulta = 'SELECT c.*, p.nombre, p.precio  FROM carrito c INNER JOIN productos p ON c.producto_id = p.id WHERE c.user_id=' . $userId;
    //$consulta = 'SELECT c.*, p.precio  FROM carrito c INNER JOIN productos p ON c.producto_id = p.id WHERE c.user_id=' . $userId;
    if ($resultado = $conn->query($consulta)) {
        while ($row = $resultado->fetch_assoc()) {
            $prod_Id = $row['producto_id'];
            $cantidad = $row['cantidad'];
            $userId = $row['user_id'];
            $precio = $row['precio'];
            $nombreProducto = $row['nombre'];
            $myObj->list[] = $row;
            //Comprobar si la cantidad de productos en el carrito no supera la de la base de datos
            $consultaStock = 'SELECT unidades FROM productos WHERE id = ' . $prod_Id;
            if ($result = $conn->query($consultaStock)) {
                while ($fila = $result->fetch_assoc()){
                    $unidades = $row['unidades'];
                    if($cantidad <= $unidades){
                        //Codigo anterior
                        $ins = 'INSERT INTO historico(producto_id, user_id, cantidad, precio_ud) VALUES (' . $prod_Id . ',' . $userId . ',' . $cantidad . ',' . $precio . ')';
                        $conn->query($ins);

                        $updt = "UPDATE productos SET unidades = unidades - " . $cantidad . " WHERE id = " . $prod_Id;
                        $conn->query($updt);

                        $del = "DELETE FROM carrito WHERE user_id = " . $userId;
                        $conn->query($del);
                        // header("Location: ../../finCompra.html");
                    }
                }
            }else{
                echo "No hay stock disponible para el producto " . $nombreProducto;
            }         
        }
    }
    */
    
}
echo json_encode($myObj);
$conn->close();
?>