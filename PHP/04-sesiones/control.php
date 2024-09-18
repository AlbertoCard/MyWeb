<?php
    if($_POST["usuario_txt"] == "admin" && $_POST["password_txt"] == "123"){
        session_start();

        $_SESSION["autentificado"] = true;
        $_SESSION["usuario"] = $_POST["usuario_txt"];

        header("Location: archivo-protegido.php");
    } else{
        header("Location: index.php?error=si");
    }
?>