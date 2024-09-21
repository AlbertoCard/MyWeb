<?php
    $email = $_POST["email_txt"];
    $nombre = $_POST["nombre_txt"];
    $sexo = $_POST["sexo_txt"];
    $nacimiento = $_POST["nacimiento_txt"];
    $telefono = $_POST["telefono_txt"];
    $pais = $_POST["pais_slc"];

    $imagen_generica = ($sexo=="M")?"img/fotos/amigo.png":"img/fotos/amiga.png";

    //validar existencia del email
    include("conexion.php");
    $consulta = "SELECT * FROM contactos WHERE email='$email'";
    $ejecutar_consulta = $conexion->query($consulta);
    $num_regs = $ejecutar_consulta->num_rows;

    if($num_regs == 0){
        include("funciones.php");
        $tipo = $_FILES["foto_fls"]["type"];
        $archivo = $_FILES["foto_fls"]["tmp_name"];
        $se_subio_imagen = subir_imagen($tipo,$archivo,$emai);

        $imagen = empty($archivo)?$imagen_generica:$se_subio_imagen;

        $consulta = "INSERT INTO contactos (email,nombre,sexo,nacimiento,telefono,pais,imagen) VALUES ('$email','$nombre','$sexo','$nacimiento','$telefono','$pais','$imagen')";

        $ejecutar_consulta = $conexion->query($consulta);

        if($ejecutar_consulta)
            $mensaje = "Se ha dado de alta el contacto";
        else
            $mensaje = "No se pudo dar de alta";

    } else{
        $mensaje = "Email ya registrado";
    }

    $conexion->close();
    header("Location: ../index.php?op=alta&mensaje=$mensaje");

?>