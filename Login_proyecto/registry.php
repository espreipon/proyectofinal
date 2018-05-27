<?php
$host_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "databaselogin";
$tbl_name = "usuarios";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);

if ($conexion->connect_error) {
 die("La conexion falló: " . $conexion->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

//Comprobar si el nombre de usuario ya existe.
$sql = "SELECT * FROM $tbl_name WHERE nombre_usuario = '$username';";
$result = $conexion->query($sql);

if ($result->num_rows > 0) {
    echo "El nombre de usuario ya existe, debe elegir otro";
}
else{
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO `$tbl_name` (`nombre_usuario`, `password`) VALUES ('$username','$hash');";
    if($conexion->query($sql)){
    echo "Registro realizado con exito";
    }
}
mysqli_close($conexion);
?>