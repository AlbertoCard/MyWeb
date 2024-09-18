<?php 
    //nombre de la cookie, variable, duracion de la cookie , directorio de la cookie
    setcookie("idioma_solicitado", $_GET["idioma"], time() + 86400, "/");
    header("Location: usar-cookie.php");
?>