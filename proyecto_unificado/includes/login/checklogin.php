<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8');
// Esto le dice a PHP que generaremos cadenas UTF-8
//require_once('../conexion.php');
header('Content-Type: text/json');
header("Cache-Control: no-cache, must-revalidate");


$host_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "tienda";
$tbl_name = "usuarios";

$conn = new mysqli($host_db, $user_db, $pass_db, $db_name);


if ($conn->connect_error) {
    die("La conexion falló: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];
$sql = "SELECT * FROM $tbl_name WHERE username = '$username';";

$result = $conn->query($sql);

$myObj = new stdClass();
$myObj->loggedin = false;

if ($result->num_rows > 0) {
}
$row = $result->fetch_array(MYSQLI_ASSOC);

if (password_verify($password, $row["password"])) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    $_SESSION['userId'] = $row["id"];
    $_SESSION['start'] = time();
    //La sesion expira en 30 minutos
    $_SESSION['expire'] = $_SESSION['start'] + (30 * 60);
    $myObj->loggedin = true;
} else {
    $myObj->error = "Username o Password estan incorrectos.";
}

echo json_encode($myObj);
mysqli_close($conn);


?>