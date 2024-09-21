<?php
    include("conexion.php");
    $consulta = "SELECT * FROM pais ORDER BY pais";
    $ejecutar_consulta = mysqli_query($conexion, $consulta);

    while ($registro = mysqli_fetch_array($ejecutar_consulta) ) {
        echo "<option value='".$registro["pais"]."'>".$registro["pais"]."</option>";
    }
?>