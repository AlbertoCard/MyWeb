<form id="baja-contacto" name="baja_frm" action="eliminar-contacto.php">
    <fieldset>
        <legend>Baja de contacto</legend>
        <div>
            <label for="email">Email:</label>
            <select name="email" class="cambio" name="email_slc" required>
                <option value="">- - - </option>
                <?php include("select-email.php"); ?>
            </select>
        </div>
        <div>
            <input type="submit" id="enviar-baja" class="cambio" value="eliminar">
        </div>
        <?php include("./mensajes.php"); ?>
    </fieldset>
</form>