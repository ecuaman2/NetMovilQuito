<?php
if (isset($_POST['cedula'])) {

include 'cn.php';
//Recibir los datos y almacenarlos en variables
    $combo = $_POST['combo'];
    $nombre = $_POST['nombre'];
    $cedula = $_POST['cedula'];
    $celular = $_POST['celular'];
    $domicilio = $_POST['domicilio'];
    $nota = $_POST['nota'];
    $dia_entrega = $_POST['dia_entrega'];
    $hora_entrega = $_POST['hora_entrega'];
    $hora_ref = date('Y-m-d H:i:s');
    date_default_timezone_set('America/Guayaquil');

    $fecha_actual = date("Y-m-d");

    $entrega = "";
    if ($dia_entrega == "Hoy") {
        $entrega = $fecha_actual;
    }

    if ($dia_entrega == "Mañana") {
        $entrega = date("Y-m-d",strtotime($fecha_actual."+ 1 days"));
    }

    if ($dia_entrega == "Pasado de Mañana") {
        $entrega = date("Y-m-d",strtotime($fecha_actual."+ 2 days"));
    }
 

	// consunlta para insertar
$insertar = "INSERT INTO solicitudes (combo, nombre, cedula, celular, domicilio, nota, dia_entrega, hora_entrega, fecha_reg, hora_ref) VALUES ('$combo', '$nombre', '$cedula', '$celular', '$domicilio', '$nota', '$entrega', '$hora_entrega',now(), '$hora_ref')";
//Ejecutar consultas
$resultado = mysqli_query($conexion, $insertar);

if (!$resultado) {
		//cerrar conexion
		mysqli_close($conexion);
		echo "Error al Registrar";
}	else {
		//cerrar conexion
		mysqli_close($conexion);
		echo "Registro Exitoso";

$to = "netmovilquito@gmail.com";
$subject = "Solicitud de CHIP";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$message = "
<html>
<head>
<title>HTML</title>
</head>
<body>
<h1>Nuevo Cliente</h1><br><br>

<span>Nombre: $nombre</span><br>
<span>Combo: $combo</span><br>
<span>Cédula: $cedula</span><br>
<span>Celular: $celular</span><br>
<span>Domicilio: $domicilio</span><br>
<span>Nota: $nota</span><br>
<span>Dia Entrega: $dia_entrega</span><br>
<span>Hora Entrega: $hora_entrega</span><br><br>

</body>
</html>";

mail($to, $subject, $message, $headers);

}
}
