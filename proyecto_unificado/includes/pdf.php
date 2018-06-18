<?php
require('../libs/pdf/clase/fpdf.php');

$pdf=new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10, "Factura BarfMania - v.Beta");
$pdf->Output();


echo json_encode($myObj);
$conn->close();

?>