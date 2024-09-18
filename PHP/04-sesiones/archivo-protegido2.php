<?php include("sesion.php") ?>
Bienvenido:
<?php 
    echo $_SESSION["usuario"];
?>
<br><br>
Estas en otra pagina segura con sesiones de PHP
<br><br>
<a href="archivo-protegido.php">Ir a la pagina anterior</a>
<br><br>
<a href="salir.php">Salir</a>