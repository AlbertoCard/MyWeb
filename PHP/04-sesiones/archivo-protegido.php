<?php include("sesion.php") ?>
Bienvenido:
<?php 
    echo $_SESSION["usuario"];
?>
<br><br>
Estas en una pagina segura con sesiones de PHP
<br><br>
<a href="archivo-protegido2.php">Ir a la siguiente</a>
<br><br>
<a href="salir.php">Salir</a>