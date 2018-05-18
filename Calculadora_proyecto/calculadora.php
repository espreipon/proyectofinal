<?php

$pet = $_POST['a'];
$age = $_POST['b'];
$ageText = $_POST['c'];
$weigth = $_POST['d'];
$activity = $_POST['e'];
$percent;
//echo "pet: ".$pet."<br>peso ".$weigth."<br> edad ".$ageText."<br>actividad: ".$activity."<br>";

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
    $cantidadMes = round($cantidad*31/1000,2);
   
    echo "<p>----Ración diaria de comida: ".$cantidad ." gr----<br>".
        $cantidad*0.4 . " gr hueso carnoso<br>".
        $cantidad*0.2 . " gr carne<br>".
        $cantidad*0.2 . " gr corazón<br>".
        $cantidad*0.1 . " gr hígado<br>".
        $cantidad*0.1 . " gr otras vísceras<br>".
        $cantidad*0.05 . " gr máximo de verduras (opcional)<p>".
        "<p>----Cantidad mensual de comida: ".$cantidadMes ." kg----<br>".
        round($cantidadMes*0.4, 2) . " kg hueso carnoso<br>".
        round($cantidadMes*0.2, 2) . " kg carne<br>".
        round($cantidadMes*0.2, 2) . " kg corazón<br>".
        round($cantidadMes*0.1, 2) . " kg hígado<br>".
        round($cantidadMes*0.1, 2) . " kg otras vísceras<br>".
        round($cantidadMes*0.05, 2) . " kg máximo de verduras (opcional)<p>";
}

//PERRO - Calcular cantidad de comida en base al peso
function rationDog(){
    global $weigth, $percent;
    $cantidad = $weigth*$percent*1000;
    $cantidadMes = round($cantidad*31/1000, 2);
    echo "<p>----Ración diaria de comida: ".$cantidad ." gr----<br>".
    $cantidad*0.6 . " gr hueso carnoso<br>".
    $cantidad*0.2 . " gr carne<br>".
    $cantidad*0.05 . " gr hígado<br>".
    $cantidad*0.05 . " gr otras vísceras<br>".
    $cantidad*0.1 . " gr verduras<p>".
    "<p>----Cantidad mensual de comida: ".$cantidadMes ." kg----<br>".
    round($cantidadMes*0.6, 2) . " kg hueso carnoso<br>".
    round($cantidadMes*0.2, 2) . " kg carne<br>".
    round($cantidadMes*0.05, 2) . " kg hígado<br>".
    round($cantidadMes*0.05, 2) . " kg otras vísceras<br>".
    round($cantidadMes*0.1, 2) . " kg verduras<p>";
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
                    rationDog();
                    break;
                case "medium":
                    rationDog();
                    break;
                case "high":
                    $percent = $percent + 0.005;
                    rationDog();
                    break;
            }
        break;
        //% Actividad Gato
        case "cat";
            switch ($activity){
                case "low":
                    $percent = $percent - 0.01;
                    rationCat();
                    break;
                case "medium":
                    rationCat();
                    break;
                case "high":
                    $percent = $percent + 0.01;
                    rationCat();
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
            rationCat();
            break;
        case 3:
            $percent = 0.09;
            rationCat();
            break;
        case 4:
            $percent = 0.085;
            rationCat();
            break;
        case 5:
            $percent = 0.08;
            rationCat();
            break;
        case 6:
            $percent = 0.075;
            rationCat();
            break;
        case 7:
            $percent = 0.07;
            rationCat();
            break;
        case 8:
            $percent = 0.065;
            rationCat();
            break;
        case 9:
            $percent = 0.06;
            rationCat();
            break;
        case 10:
            $percent = 0.055;
            rationCat();
            break;
        case 11:
            $percent = 0.05;
            rationCat();
            break;
        case 12:
            $percent = 0.045;
            rationCat();
            break;
        case 13:
            $percent = 0.04;
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
            rationDog();
            break;
        case 3:
            $percent = 0.95;
            rationDog();
            break;
        case 4:
            $percent = 0.09;
            rationDog();
            break;
        case 5:
            $percent = 0.08;
            rationDog();
            break;
        case 6:
            $percent = 0.07;
            rationDog();
            break;
        case 7:
            $percent = 0.06;
            rationDog();
            break;
        case 8:
            $percent = 0.05;
            rationDog();
            break;
        case 9:
            $percent = 0.045;
            rationDog();
            break;
        case 10:
            $percent = 0.04;
            rationDog();
            break;
        case 11:
            $percent = 0.03;
            rationDog();
            break;
        case 12:
            $percent = 0.03;
            rationDog();
            break;
        case 13:
            $percent = 0.025;
            activity();
            break;
    } 
}

?>