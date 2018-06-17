<?php
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
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$email = $_POST['email'];

//Comprobar si el nombre de usuario ya existe.
$sql = "SELECT * FROM $tbl_name WHERE username = '$username';";
$result = $conexion->query($sql);

if ($result->num_rows > 0) {
    echo "El nombre de usuario ya existe, debe elegir otro";
}
else{
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO `$tbl_name` (`username`, `password`, `firstname`, `lastname`, `phone`, `email`) VALUES ('$username','$hash','$firstname','$lastname','$phone','$email');";
    if($conexion->query($sql)){
    echo "Registro realizado con exito";
    }
}

mysqli_close($conexion);

?>  