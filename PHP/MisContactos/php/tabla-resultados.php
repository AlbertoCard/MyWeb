<?php
    include("conexion.php");
    include("funciones.php");

    $ejecutar_consulta = mysqli_query($conexion, $consulta);
    $num_regs = mysqli_num_rows($ejecutar_consulta);

    if($num_regs == 0){
        echo "<br><br><span class='mensajes'>Sin registros</span>";
    } else{
?>
    <br><br>
    <table>
        <thead>
            <te>
                <th>email</th>
                <th>nombre</th>
                <th>sexo</th>
                <th>nacimiento</th>
                <th>telefono</th>
                <th>pais</th>
                <th>imagen</th>
            </te>
        </thead>
        <tbody>
            <?php
                while($registro = mysqli_fetch_assoc($ejecutar_consulta)){
                    ?>
                    <tr>
                        <td><?php echo $registro['email']; ?></td>
                        <td><?php echo $registro['nombre']; ?></td>
                        <td><?php echo $registro['sexo']; ?></td>
                        <td><?php echo $registro['nacimiento']; ?></td>
                        <td><?php echo $registro['telefono']; ?></td>
                        <td><?php echo $registro['pais']; ?></td>
                        <td><img src="<?php echo $registro['imagen']; ?>"></td>
                    </tr>
                    <?php
                }    
            ?>
        </tbody>
    </table>
<?php
    }
    
?>