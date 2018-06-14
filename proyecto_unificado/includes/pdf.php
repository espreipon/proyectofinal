<?php
require('../libs/pdf/clase/fpdf.php');

$pdf=new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,'¡HOLII!');
$pdf->Output();

/*
// libreria para escribir un  PDF
require_once('../libs/pdf/clase/fpdf.php');

// libreria para importar documentos dentro de FPDF
require_once('../libs/pdf/template/src/fpdi.php');

$template_pdf = "recibo_template.pdf";
$pdf = new FPDI();

// importamos el documento
$pdf->setSourceFile($template_pdf);

// seteamos la fuente, el estilo y el tamano
$pdf->SetFont('Times','B',10);

// seteamos la posicion inicial
$pdf->SetXY(25, 80);

// iteramos 100 veces, una por recibo
for($i=0; $i < 100; $i++){
    //agregamos una pagina
    $pdf->AddPage();
    // seleccionamos la primera pagina del docuemnto importado
    $tplIdx = $pdf->importPage(1);
    // usamos la pagina importado como template
    $pdf->useTemplate($tplIdx);
    //seteamos la posicion X
    $pdf->SetX(25);
    //escribimos el numero de recibo
    $pdf->Write(0, "Numero: " . $i);
    //salto de linea
    $pdf->Ln(5);
}

//enviamos cabezales http para no tener problemas
header("Content-Transfer-Encoding", "binary");
header('Cache-Control: maxage=3600');
header('Pragma: public');

//enviamos el documento creado con un nombre nuevo y forzamos su descarga.
$pdf->Output('recibos.pdf', 'D');
*/
?>