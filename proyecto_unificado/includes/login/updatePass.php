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
    die("La conexion falló: " . $conn->connect_error);
}

$myObj = new stdClass();
$myObj->loggedin = isset($_SESSION['loggedin']);
if ($myObj->loggedin) {
    $username = $_SESSION['username'];
}

$oldPass = $_POST['oldPass'];
$newPass = $_POST['newPass'];
$hash;

$sql = "SELECT password FROM usuarios WHERE username = '$username'";
if ($resultado = $conn->query($sql)) {
    while ($row = $resultado->fetch_assoc()) {
        $hash = $row['password'];
    }
    if (password_verify($oldPass, $hash)) {
        $hashNewPass = password_hash($newPass, PASSWORD_DEFAULT);
        $query = "UPDATE usuarios SET password = '$hashNewPass' WHERE username = '$username'";
        if ($conn->query($query)) {
            echo "La contraseña se ha actualizado correctamente";
        } else {
            echo "No se ha podido actualizar la password, inténtelo más tarde";
        }
    } else {
        echo "La contraseña antigua no es correcta";
    }
}

mysqli_close($conn);

?>  