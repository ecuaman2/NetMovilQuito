<?php
$usuario=$_POST ['usuario'];
$clave=$_POST ['clave'];

	session_start();
	$_SESSION['usuario'] = $usuario;

//conectar a la base de datos
include '../include/cn.php';
$consulta="SELECT usuario,clave FROM administradores WHERE usuario='$usuario' and clave='$clave'";
$resultado=mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);

if ($filas>0)
	header("Location:admin.php");
else {
	header("Location: index.php?errorlogin");
	session_destroy();
}
mysqli_free_result($resultado);
mysqli_close($conexion);
?>