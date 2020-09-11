<?php
session_start();

include('../include/cn.php');
//Consultar DAtos de Usuario
/////// CONEXIÓN A LA BASE DE DATOS /////////
if ($conexion -> connect_errno)
{
	die("Fallo la conexion:(".$conexion -> mysqli_connect_errno().")".$conexion-> mysqli_connect_error());
}
//////////////// SACAR ID DE COBRADOR ///////////////////////
//////////////// VALORES INICIALES ///////////////////////
$tabla="";

$query="SELECT * FROM solicitudes ORDER BY dia_entrega DESC";



///////// LO QUE OCURRE AL TECLEAR SOBRE EL INPUT DE BUSQUEDA ////////////
if(isset($_POST['alumnos2']))
{

    $q=$conexion->real_escape_string($_POST['alumnos2']);

$originalDate = $q;
$newDate = date("Y-m-d", strtotime($originalDate));

	$query="SELECT * FROM solicitudes where
		dia_entrega LIKE '%".$newDate."%'";
}

$buscarAlumnos=$conexion->query($query);
if ($buscarAlumnos->num_rows > 0)
{
	$tabla.= 
	'
		<table class="tabla">

  <tr>

    <th>ID</th>
    <th>Nombre</th>
    <th>Combo</th>
    <th>Cédula</th>
    <th>Celular</th>
    <th>Domicilio</th>
    <th>Nota</th>
    <th>Dia de Entrega</th>
    <th>Horario de Entrega</th>
    <th>Fecha de Registro</th>

  </tr>

	';

	while($filaAlumnos= $buscarAlumnos->fetch_assoc())
	{
		$tabla.=
		'
  <tr>

    <td>'.$filaAlumnos['id'].'</td>
    <td>'.$filaAlumnos['nombre'].'</td>
    <td>'.substr($filaAlumnos['combo'], 0, 8).'</td>
    <td>'.$filaAlumnos['cedula'].'</td>
    <td>'.$filaAlumnos['celular'].'</td>
    <td>'.$filaAlumnos['domicilio'].'</td>
    <td>'.$filaAlumnos['nota'].'</td>
    <td>'.$filaAlumnos['dia_entrega'].'</td>
    <td>'.$filaAlumnos['hora_entrega'].'</td>
    <td>'.$filaAlumnos['fecha_reg'].'</td>

  </tr>


		';
	}

	$tabla.='</table>';
} else
	{
		$tabla="<h5>No existe el Cliente</5>";
	}


echo $tabla;

mysqli_close($conexion);
?>
