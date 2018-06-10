<?php
session_start();
// Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
mb_internal_encoding('UTF-8'); 
// Esto le dice a PHP que generaremos cadenas UTF-8
mb_http_output('UTF-8');
header('Content-Type: text/json');
header("Cache-Control: no-cache, must-revalidate");

$host_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "tienda";
$tbl_name = "usuarios";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);

if ($conexion->connect_error) {
 die("La conexion falló: " . $conexion->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM $tbl_name WHERE username = '$username';";
$result = $conexion->query($sql);
$myObj = new stdClass();
$myObj->loggedin = false;
if ($result->num_rows > 0) {
 }
 $row = $result->fetch_array(MYSQLI_ASSOC);

 if(password_verify($password, $row["password"])) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    $_SESSION['userId'] = $row["id"];
    $_SESSION['start'] = time();
    //La sesion expira en 30 minutos
    $_SESSION['expire'] = $_SESSION['start'] + (30 * 60);
    $myObj->loggedin = true;  
  /*
    echo "Bienvenido! " . $_SESSION['username'];
    echo "<br><br><a href=panel-control.php>Panel de Control</a><br>";
    echo "<a href=logout.php>Cerrar Sesion X </a>";
  */
 }else{ 
  $myObj->error = "Username o Password estan incorrectos.";
 }

echo json_encode($myObj);
mysqli_close($conexion);
 

 ?>