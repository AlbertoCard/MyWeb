<?php
    if(isset($_GET["enviar_btn"])){
        echo "Los datos enviados por GET fueron: <br>El nombre: ".$_GET["nombre_txt"]."<br>Contraseña:".$_GET["password_txt"];
    } else if(isset($_POST["enviar_btn"])){
        echo "Los datos enviados por GET fueron: <br>El nombre: "
        .$_POST["nombre_txt"]."<br>Contraseña:"
        .$_POST["password_txt"];
    }
?>
