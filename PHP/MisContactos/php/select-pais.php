<?php
    if(!$registro_contacto["pais"])
        include("conexion.php");
    
    $consulta = "SELECT * FROM pais ORDER BY pais";
    $ejecutar_consulta = mysqli_query($conexion, $consulta);

    while ($registro = mysqli_fetch_array($ejecutar_consulta) ) {
        echo "<option value='".$registro["pais"]."'";
        
        if($registro["pais"] == $registro_contacto["pais"])
            echo " selected ";

        echo ">".$registro["pais"]."</option>";
    }
?>  