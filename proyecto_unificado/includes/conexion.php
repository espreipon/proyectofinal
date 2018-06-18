<?php
//Conexión a la base de datos para extraer los productos
$url = "localhost";
$user = "root";
$pass = "";
$bd = "tienda";

$conn = mysqli_connect($url, $user, $pass, $bd);
if (!empty($mysqli->connect_errno)) {
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    } else {
        echo "Conexión a la base de datos realizada correctamente";
    }
}
/* change character set to utf8 */
if (!$conn->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $conn->error);
} else {

}
?>