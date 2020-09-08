<?php
  session_start();
  if(isset($_SESSION['usuario']))
  {
    header("Location: admin.php");
  }

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administracion NetMovil Quito</title>
    <link rel="stylesheet" href="../css/admin.css?v=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=eadge">
    <link href="../img/favicon.ico" rel="icon" />
</head>
<body>

<div class="contenedor-form">
        
        <div class="formulario">
            <h2>Administración</h2>
            <form action="validar.php" method="post">
                <input type="text" placeholder="Usuario" name="usuario" required>
                <input type="password" placeholder="Contraseña" name="clave" required>
                <input type="submit" value="Iniciar Sesión">
            </form>
            
            <?php
            if  (isset($_GET['errorlogin'])){
                echo "<br /><center><h4  style='color: red;'>Usuario y Contraseña Inconrrecta</h4></center>";        
            }            
            
            ?>
            
        </div>
</div>
    <script src="js/jquery-3.1.1.min.js"></script>    
    <script src="js/main.js"></script>

</body>
</html>