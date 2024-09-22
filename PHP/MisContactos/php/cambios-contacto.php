<script>
    window.onload = function (){
        var lista = document.getElementById("contacto-lista");
        lista.onchange = seleccionarContacto;

        function seleccionarContacto(){
            window.location = "?op=cambio&contacto_slc="+lista.value;
        }
    }
</script>

<form action="php/modificar-contacto.php" id="cambio-contacto" name="cambio-contacto" method="post" enctype="multipart/form-data">
    <fieldset>
        <legend>Cambio de contacto</legend>
        <div>
            <label for="contacto-lista">Contacto:</label>
            <select name="contacto_slc" id="contacto-lista" class="cambio" required>
                <option value="">- - -</option>
                <?php include("select-email.php"); ?>
            </select>
        </div>
        <?php
            if($_GET["contacto_slc"] != null){
                $conexion2 = conectarse();
                $contacto = $_GET["contacto_slc"];
                $consulta_contacto = "SELECT * FROM contactos WHERE email='$contacto'";

                $ejecutar_consulta_contacto = mysqli_query($conexion2, $consulta_contacto);
                $registro_contacto = mysqli_fetch_assoc($ejecutar_consulta_contacto);
                include("php/cambio-form.php");
            }
            include("php/mensajes.php");
        ?>
    </fieldset>
</form>