<?php 
    include("conexion.php");

    $consulta = "SELECT email FROM contactos ORDER BY email";

    $ejecutar_consulta = mysqli_query($conexion, $consulta);

    while ($registro = mysqli_fetch_assoc($ejecutar_consulta)) {
        echo "<option value='".$registro["email"]."'>".$registro["email"]."</option>";
    }
?>