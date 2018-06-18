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
if($myObj->loggedin) {
    $username = $_SESSION['username'];        
}

$oldPass = $_POST['oldPass'];
$newPass = $_POST['newPass'];
$hash;

//Comprobar si la oldPass introducida coincide con la del usuario.
//$sql = "SELECT * FROM $tbl_name WHERE username = '.$username.'";


//$sql = "INSERT INTO `$tbl_name` (`username`, `password`, `firstname`, `lastname`, `phone`, `email`) VALUES ('$username','$hash','$firstname','$lastname','$phone','$email');";

$sql = "SELECT password FROM usuarios WHERE username = '$username'";
//echo $sql;
//$result = $conn->query($sql);
//print_r($result);

if ($resultado = $conn->query($sql)) {
    while($row = $resultado->fetch_assoc()) {
       $hash = $row['password'];
    }
    //echo "<br>pass antigua coincide con la bdd? ".password_verify($oldPass, $hash); 
    if (password_verify($oldPass, $hash)) {
    //if ($hashOldPass == $hash) {
        $hashNewPass = password_hash($newPass, PASSWORD_DEFAULT);
        $query = "UPDATE usuarios SET password = '$hashNewPass' WHERE username = '$username'";
        //echo "<br>hash antiguo: ".$hash;
        //echo "<br>hash nuevo: ".$hashNewPass;
        //echo "<br> query insertar ".$query;
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