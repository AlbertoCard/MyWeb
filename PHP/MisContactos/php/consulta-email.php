<br>
<div>
    <input type="hidden" name="op" value="consultas">
    <label for="email">Email:</label>
    <input type="email" name="email_txt" id="email" class="cambio" placeholder="Escribe el email" title="Email" required>
</div>
<input type="submit" id="enviar-buscar" class="cambio" name="enviar-btn" value="buscar">
<?php 
    if($_GET["email_txt"] != null){
        $email = $_GET["email_txt"];
        $consulta = "SELECT * FROM contactos WHERE email like '%$email%'";
        include("tabla-resultados.php");
    }
?>
