<br><br>
<div>
    <label for="m">Sexo</label>
    <input type="hidden" name="op" value="consultas">
    <input type="radio" id="m" name="sexo_rdo" title="Tu sexo" value="M" required>
    <label for="m" id="m">Masculino</label>
    <input type="radio" id="f" name="sexo_rdo" title="Tu sexo" value="F" required>
    <label for="m" id="f">Masculino</label>
</div>
<input type="submit" id="enviar-buscar" class="cambio" name="enviar_btn" value="buscar">

<?php
    if($_GET["sexo_rdo"] != null){
        $sexo = $_GET["sexo_rdo"];
        $consulta = "SELECT * FROM contactos WHERE sexo = '$sexo'";
        include("tabla-resultados.php");
    }
?>