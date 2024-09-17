<?php
    $nombre = "admin";
    $password = "123";

    if(isset($_GET["enviar_hdn"])){
        if($nombre == $_GET["name_txt"] && $password == $_GET["password_txt"]){
            echo("Usuario:".$_GET["name_txt"]."<br>");
            echo("Password: ".$_GET["password_txt"]."<br>");
            echo("Sexo: ".$_GET["sexo_rdo"]);
        } else{
            echo("Location: formulario.php?err=si");
        }
    }
?>