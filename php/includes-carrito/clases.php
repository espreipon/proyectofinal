<?php
// crear un carrito de compra
//para ello primero creamos un objeto producto con todos los atributos del producto a vender (nombre, precio, id)
class Producto{
    private $id;
    private $nombre;
    private $precio;
    private $image;

    //constructor
    public function  __construct($id, $nombre, $precio, $image){
        $this -> id = $id;
        $this -> nombre = $nombre;
        $this -> precio = $precio;
        $this -> image = $image;
    }

    //Metodos Getters
    public function getId(){
        return $this -> id;
    }
    public function getNombre(){
        return $this -> nombre;
    }
    public function getPrecio(){
        return $this -> precio;
    }
    public function getImage(){
        return $this -> image;
    }
}
?>