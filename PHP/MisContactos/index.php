<?php
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
    $op = $_GET["op"];

    switch($op){
        case "alta":
            $contenido = "./php/alta-contacto.php";
            $titulo = "Alta de contacto";
            break;
        case "baja":
            $contenido = "./php/baja-contacto.php";
            $titulo = "Baja de contacto";
            break;
        case "cambio":
            $contenido = "./php/cambios-contacto.php";
            $titulo = "Cambio a contacto";
            break;
         case "consultas":
             $contenido = "./php/alta-contacto.php";
             $titulo = "Consulta de contactos";
             break;
        default:
        $contenido = "php/home.php";
            break;
    } 
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis contactos</title>
    <link rel="stylesheet" href="css/mis-contactos.css">
</head>
<body>
    <section id="contenido">
        <nav>
            <ul>
                <li><a href="index.php" class="cambio">Home</a></li>
                <li><a href="?op=alta" class="cambio">Nuevo contacto</a></li>
                <li><a href="?op=baja" class="cambio">Borrar contacto</a></li>
                <li><a href="?op=cambio" class="cambio">Actualizar contacto</a></li>
                <li><a href="?op=consultas" class="cambio">Ver contactos</a></li>
            </ul>
        </nav>
    </section>
    <section id="principal">
        <?php include($contenido)?>
    </section>
    <script src="js/mis-contactos.js"></script>
</body>
</html>