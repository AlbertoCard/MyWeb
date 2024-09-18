<?php
    $nombre = "admin";
    $password = "123";

    if(isset($_GET["enviar_hdn"])){
        if($nombre == $_GET["name_txt"] && $password == $_GET["password_txt"]){
            echo("Usuario:".$_GET["name_txt"]."<br>");
            echo("Password: ".$_GET["password_txt"]."<br>");
            echo("Sexo: ".$_GET["sexo_rdo"]);
        } else{
            header("Location: formulario.php?error=si");
        }
    }
    if(isset($_POST["enviar_hdn"])){
        if($nombre == $_POST["name_txt"] && $password == $POST["password_txt"]){
            echo("Usuario:".$POST["name_txt"]."<br>");
            echo("Password: ".$POST["password_txt"]."<br>");
            echo("Sexo: ".$POST["sexo_rdo"]);
        } else{
            header("Location: formulario.php?error=si");
        }
    }

?>