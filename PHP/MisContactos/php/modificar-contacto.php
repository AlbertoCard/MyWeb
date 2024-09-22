<?php
    $email = $_POST["email_hdn"];
    $nombre = $_POST["nombre_txt"];
    $sexo = $_POST["sexo_rdo"];
    $nacimiento = $_POST["nacimiento_txt"];
    $telefono = $_POST["telefono_txt"];
    $pais = $_POST["pais_slc"];

    include("conexion.php");

    $consulta = "SELECT * FROM contactos WHERE email='$email'";
    $ejecutar_consulta = $conexion->query($consulta);
    $num_regs = mysqli_num_rows($ejecutar_consulta);

    if($num_regs == 1){

        if(empty($_FILES["fotos_fls"]["tmp_names"])){
            $imagen = $_POST["foto_hdn"];
        }
        else {
            include("funciones.php");
            $tipo = $_FILES["fotos_fls"]["tmp_name"];
            $archivo = $_FILES["fotos_fls"]["tmp_name"];
            $imagen = subir_imagen($tipo, $archivo,$email);
        }

        $consulta = "UPDATE contactos SET nombre='$nombre', sexo='$sexo', nacimiento='$nacimiento', telefono='$telefono', pais='$pais', imagen='$imagen' WHERE email='$email'";

        $ejecutar_consulta = mysqli_query($conexion, $consulta);

        if($ejecutar_consulta){
            $mensaje = "Se han hecho los cambios en el contacto";
        } else{
            $mensaje = "no se pudo actualizar contacto";
        }

    } else{
        $mensaje = "error";
    }
    $conexion->close();

    header("Location: ../index.php?op=cambio&mensaje=$mensaje");

?>