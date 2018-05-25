<?php

$pet = $_POST['a'];
$age = $_POST['b'];
//$agetext = $_POST['c'];
$weigth = $_POST['d'];
$activity = $_POST['e'];
$percent;
echo "pet: ".$pet."<br>peso ".$weigth."<br> edad ".$age."<br>actividad: ".$activity."<br>";

switch($pet){
    case "dog":
        calculationDog();
        break;
    case "cat":
        calculationCat();
        break;
}

//PERRO - Calcular cantidad de comida en base al peso

function rationCat(){
    global $weigth, $percent;
    $cantidad = $weigth*$percent*1000;
    $cantidadMes = $cantidad*31/1000; //TRUNCAR 2 DECIMALES
    echo "<br><br>----Ración diaria de comida: ".$cantidad ." gr----<br>";
    echo $cantidad*0.4 . " gr  Hueso carnoso<br>";
    echo $cantidad*0.2 . " gr carne<br>";
    echo $cantidad*0.2 . " gr corazón<br>";
    echo $cantidad*0.1 . " gr Hígado<br>";
    echo $cantidad*0.1 . " gr otras vísceras<br>";
    echo $cantidad*0.05 . " gr máximo de verduras (opcional)<br>";
    echo "<br>----Cantidad mensual de comida: ".$cantidadMes ." kg----<br>";
    echo $cantidadMes*0.4 . " kg  Hueso carnoso<br>";
    echo $cantidadMes*0.2 . " kg carne<br>";
    echo $cantidadMes*0.2 . " kg corazón<br>";
    echo $cantidadMes*0.1 . " kg Hígado<br>";
    echo $cantidadMes*0.1 . " kg otras vísceras<br>";
    echo $cantidadMes*0.05 . " gr máximo de verduras (opcional)<br>";
}

//PERRO - Calcular cantidad de comida en base al peso
function rationDog(){
    global $weigth, $percent;
    $cantidad = $weigth*$percent*1000;
    $cantidadMes = $cantidad*31/1000; //TRUNCAR 2 DECIMALES
    echo "<br><br>----Ración diaria de comida: ".$cantidad ." gr----<br>";
    echo $cantidad*0.6 . " gr  Hueso carnoso<br>";
    echo $cantidad*0.2 . " gr carne<br>";
    echo $cantidad*0.05 . " gr Hígado<br>";
    echo $cantidad*0.05 . " gr otras vísceras<br>";
    echo $cantidad*0.1 . " gr verduras<br>";
    echo "<br>----Cantidad mensual de comida: ".$cantidadMes ." kg----<br>";
    echo $cantidadMes*0.6 . " kg  Hueso carnoso<br>";
    echo $cantidadMes*0.2 . " kg carne<br>";
    echo $cantidadMes*0.05 . " kg Hígado<br>";
    echo $cantidadMes*0.05 . " kg otras vísceras<br>";
    echo $cantidadMes*0.1 . " kg verduras";
}

//Modificación del % en función de la actividad. Si es cachorro obviar esta parte.
function activity(){
    global $percent, $activity, $pet;
    switch($pet){
        //% Actividad Perro
        case "dog":
            switch ($activity) {
                case "low":
                    $percent = $percent - 0.005;
                    echo $percent*100 ."% del peso";
                    rationDog(); //REVISAR TAMBIÉN PARA GATO
                    break;
                case "medium":
                    echo $percent*100 ."% del peso";
                    rationDog(); //REVISAR TAMBIÉN PARA GATO
                    break;
                case "high":
                    $percent = $percent + 0.005;
                    echo $percent*100 ."% del peso";
                    rationDog(); //REVISAR TAMBIÉN PARA GATO
                    break;
            }
        break;
        //% Actividad Gato
        case "cat";
            switch ($activity){
                case "low":
                    $percent = $percent - 0.01;
                    echo $percent*100 ."% del peso";
                    rationCat(); //REVISAR TAMBIÉN PARA GATO
                    break;
                case "medium":
                    echo $percent*100 ."% del peso";
                    rationCat(); //REVISAR TAMBIÉN PARA GATO
                    break;
                case "high":
                    $percent = $percent + 0.01;
                    echo $percent*100 ."% del peso";
                    rationCat(); //REVISAR TAMBIÉN PARA GATO
                    break;
            }
        break;
    }   
}

//GATO - Calculo del % en función de la edad
function calculationCat(){
    global $age, $percent;
    switch ($age) {
        case 2:
            $percent = 0.1;
            echo "10% peso";
            rationCat();
            break;
        case 3:
            $percent = 0.09;
            echo "9% peso";
            rationCat();
            break;
        case 4:
            $percent = 0.085;
            echo "8,5% peso";
            rationCat();
            break;
        case 5:
            $percent = 0.08;
            echo "8% peso";
            rationCat();
            break;
        case 6:
            $percent = 0.075;
            echo "7,5% peso";
            rationCat();
            break;
        case 7:
            $percent = 0.07;
            echo "7% peso";
            rationCat();
            break;
        case 8:
            $percent = 0.065;
            echo "6,5% peso";
            rationCat();
            break;
        case 9:
            $percent = 0.06;
            echo "6% peso";
            rationCat();
            break;
        case 10:
            $percent = 0.055;
            echo "5,5% peso";
            rationCat();
            break;
        case 11:
            $percent = 0.05;
            echo "5% peso";
            rationCat();
            break;
        case 12:
            $percent = 0.045;
            echo "4,5% peso";
            rationCat();
            break;
        case 13:
            $percent = 0.04;
            echo "4% peso";
            activity();
            break;
    }
}

//PERRO - Calculo del % en función de la edad
function calculationDog(){
    global $age, $percent;
    switch ($age) {
        case 2:
            $percent = 0.1;
            echo "10% peso";
            rationDog();
            break;
        case 3:
            $percent = 0.95;
            echo "9,5% peso";
            rationDog();
            break;
        case 4:
            $percent = 0.09;
            echo "9% peso";
            rationDog();
            break;
        case 5:
            $percent = 0.08;
            echo "8% peso";
            rationDog();
            break;
        case 6:
            $percent = 0.07;
            echo "7% peso";
            rationDog();
            break;
        case 7:
            $percent = 0.06;
            echo "6% peso";
            rationDog();
            break;
        case 8:
            $percent = 0.05;
            echo "5% peso";
            rationDog();
            break;
        case 9:
            $percent = 0.045;
            echo "4,5% peso";
            rationDog();
            break;
        case 10:
            $percent = 0.04;
            echo "4% peso";
            rationDog();
            break;
        case 11:
            $percent = 0.03;
            echo "3,5% peso";
            rationDog();
            break;
        case 12:
            $percent = 0.03;
            echo "3% peso";
            rationDog();
            break;
        case 13:
            $percent = 0.025;
            echo "3% peso";
            activity();
            break;
    } 
}


?>