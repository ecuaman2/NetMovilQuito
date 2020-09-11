
<?php
session_start();
$varsesion = $_SESSION['usuario'];

  if($varsesion == null || $varsesion = '') {
    header("Location: index.php");
    die();
  }


require('fpdf/fpdf.php');

//Connect to your database
include("../include/cn.php");


$fecha_actual = date("Y-m-d");

//Select the Products you want to show in your PDF file
$sql9="SELECT * from solicitudes WHERE dia_entrega= '$fecha_actual'  ORDER BY hora_entrega";
$result9=mysqli_query($conexion,$sql9);


//Contar Cantidad de Registros
    $contar_registros = "SELECT id FROM solicitudes WHERE dia_entrega= '$fecha_actual'";
    $resultado_soli = mysqli_query($conexion,$contar_registros);
    $total_reg = mysqli_num_rows($resultado_soli); 

//Initialize the 3 columns and the total
$column_nombre = "";
$column_combo = "";
$column_cedula = "";
$column_celular = "";
$column_domicilio = "";
$column_hora = "";

//For each row, add the field to the corresponding column
while($row = mysqli_fetch_array($result9))
{
    $nombre = $row["nombre"];
    $combo = substr($row["combo"], 0, 8);
    $cedula = $row["cedula"];
    $celular = $row["celular"];
    $domicilio = substr($row["domicilio"], 0, 50);
    $hora = $row["hora_entrega"];

    $column_nombre = $column_nombre.$nombre."\n";
    $column_combo = $column_combo.$combo."\n";
    $column_cedula = $column_cedula.$cedula."\n";
    $column_celular = $column_celular.$celular."\n";
    $column_domicilio = $column_domicilio.$domicilio."\n";
    $column_hora = $column_hora.$hora."\n";

}


//Create a new PDF file    HORIZONTAL
$pdf=new FPDF('L','mm','A4');
$pdf->AddPage();


$pdf->SetFont('Arial','B',20);
$pdf->SetX(18);
$pdf->Cell(80,10,'NetMovilQuito (' .$fecha_actual. ') #'.$total_reg,0,1,'C');


//Fields Name position
$Y_Fields_Name_position = 20;
//Table position, under Fields Name
$Y_Table_Position = 26;

//First create each Field Name
//Gray color filling each Field Name box
$pdf->SetFillColor(232,232,232);
//Bold Font for Field Name
$pdf->SetFont('Arial','B',12);

$pdf->SetY($Y_Fields_Name_position);

$pdf->SetX(10);
$pdf->Cell(0,6,'Nombre',1,0,'L',1);

$pdf->SetX(50);
$pdf->Cell(0,6,'Combo',1,0,'L',1);

$pdf->SetX(75);
$pdf->Cell(0,6,'Cédula',1,0,'L',1);


$pdf->SetX(103);
$pdf->Cell(0,6,'Celular',1,0,'L',1);

$pdf->SetX(131);
$pdf->Cell(0,6,'Hora',1,0,'L',1);

$pdf->SetX(165);
$pdf->Cell(0,6,'Dirección',1,0,'L',1);



//Now show the 3 columns
$pdf->SetFont('Arial','',12);

$pdf->SetY($Y_Table_Position);
$pdf->SetX(10);
$pdf->MultiCell(0,6,$column_nombre,1);

$pdf->SetY($Y_Table_Position);
$pdf->SetX(50);
$pdf->MultiCell(0,6,$column_combo,1);

$pdf->SetY($Y_Table_Position);
$pdf->SetX(75);
$pdf->MultiCell(0,6,$column_cedula,1);

$pdf->SetY($Y_Table_Position);
$pdf->SetX(103);
$pdf->MultiCell(0,6,$column_celular,1);

$pdf->SetY($Y_Table_Position);
$pdf->SetX(131);
$pdf->MultiCell(0,6,$column_hora,1);

$pdf->SetY($Y_Table_Position);
$pdf->SetX(165);
$pdf->MultiCell(0,6,$column_domicilio,1);


//Create lines (boxes) for each ROW (Product)


//If you don't use the following code, you don't create the lines separating each row
$i = 0;
$pdf->SetY($Y_Table_Position);
while ($i < $total_reg)
{
    $pdf->SetX(10);
    $pdf->MultiCell(0,6,'',1);
    $i = $i +1;
}




$pdf->Output();

?>
