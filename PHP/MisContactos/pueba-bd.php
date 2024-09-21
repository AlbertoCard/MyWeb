<?php
    //Pasos para conectarme a un BD MySql con php
    //1) Conectarme a la bd
    /*
        1)Sevidor
        2)Usuario
        3)Password del user de la bd
    */
    
    $conexion = mysqli_connect("localhost","root","") or die("No se pudo conectar a la BD");
    echo "Estoy conectado a MySQL <br>";

    //2) seleccionar la bd donde se va a trabajar
    mysqli_select_db($conexion,"mis_contactos") or die ("No se pudo conectar a mis_contactos");
    echo "BD seleccionada: mis_contactos";

    //3) Crear consulta
    $consulta = 'SELECT * FROM pais';

    //4)ejecutar consulta
    $ejecutar_consulta = mysqli_query($conexion, $consulta) or die("No se pudo ejecutar la consulta");

    echo "Se ejecuto la consulta<br>";

    //5) mostrar consulta
    while($registro = mysqli_fetch_array($ejecutar_consulta)){
        echo $registro["id_pais"] . " - " . $registro["pais"] . "<br>";
    }

    //6) cerrar session 
    mysqli_close($conexion) or die ("Error al cerrar la conexion");
    echo "Conexion cerrada";

?>