<?php
session_start();

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

    echo "Bienvenido! " . $_SESSION['username'];
    echo "<br><br><a href=panel-control.php>Panel de Control</a><br>";
    echo "<a href=logout.php>Cerrar Sesion X </a>";
  
 }else{ 
   echo "Username o Password estan incorrectos.";

   echo "<br><a href='login.html'>Volver a Intentarlo</a>";
 }
 
mysqli_close($conexion);
 

 ?>