<?php 

session_start();
$varsesion = $_SESSION['usuario'];

  if($varsesion == null || $varsesion = '') {
    header("Location: index.php");
    die();
  }

include('../include/cn.php');
//Consultar DAtos de Usuario
$usuario = $_SESSION['usuario'];

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="mis_clientes.js"></script>
    <script src="mis_fecha.js"></script>
	<link rel="stylesheet" href="../css/admin.css?v=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=eadge">
    <link href="../img/favicon.ico" rel="icon" />
	<title>Administracion NetMovil Quito</title>
</head> 

<!-- MANEJADO POR CONSULTA_mis_clientes.PHP + BOTONES.PHP -->
<div class="contenedorbotones_clientes"> 

    <h2>Administración NetMovilQuito</h2>

    <div class="cont_input">
        <div class="buscar">
            <section>
                <input type="text" name="busqueda" id="busqueda" placeholder="Buscar...">
                
                <input id="fecha" type="date" value="" name="fecha">
                <input type="submit" name="Imprimir" value="Imprimir" onclick="Imprimir()">
            </section>      
        </div>
        <div class="salir">
            <form method="post">    
                <input class="atras" type="submit" name="cerrar_sesion" value="Cerrar Sesión">
            </form>
                 <?php
                    if (isset($_POST['cerrar_sesion']))
                        {                            
                            session_start();
                            session_destroy();
                            header("Location: index.php");                            
                        }
                ?>            
        </div>
        
    </div>

		<section id="tabla_resultado">
		<!-- AQUI SE DESPLEGARA NUESTRA TABLA DE CONSULTA -->
		</section>

</div>


</body>
</html>