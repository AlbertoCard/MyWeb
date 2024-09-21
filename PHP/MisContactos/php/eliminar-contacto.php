<?php 
    $email = $_POST["email_slc"];
    include("conexion.php");
    $consulta = "DELETE FROM contactos WHERE email='$email'";

    $ejecutar_consulta = $conexion->query($consulta);

    if($ejecutar_consulta)
        $mensaje = "El contacto ha sido eliminado";
    else 
        $mensaje = "No se pudo borrar joven";
    
    mysqli_close($conexion);
    header("Location: ../index.php?op=baja&mensaje=$mensaje");

?>