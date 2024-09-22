<?php 
    include("conexion.php");

    $consulta = "SELECT email FROM contactos ORDER BY email";

    $ejecutar_consulta = mysqli_query($conexion, $consulta);

    while ($registro = mysqli_fetch_assoc($ejecutar_consulta)) {
        echo "<option value='".$registro["email"]."'";
        if($_GET["contacto_slc"] == $registro["email"]){
            echo " selected";
        }
        echo ">".$registro["email"]."</option>";
    }
?>