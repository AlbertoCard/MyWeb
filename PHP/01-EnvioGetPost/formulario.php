<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <hgroup>
        <h1>Formulario enviado por el metodo  get</h1>
    </hgroup>
    <form name="envia-get_frm" action="envia-datos.php" method="get" enctype="application/x-www-form-urlencoded">
        <label>Ingresa tu nombre:</label>
        <input type="text" name="nombre_txt">
        <br><br>
        <label>Ingresa tu contraseña:</label>
        <input type="password" name="password_txt">
        <br><br>
        <input type="submit" name="enviar_btn" value="Enviar-get">
    </form>

    
    <hgroup>
        <h1>Formulario enviado por el metodo post</h1>
    </hgroup>
    <form name="envia-post_frm" action="envia-datos.php" method="post" enctype="application/x-www-form-urlencoded">
        <label>Ingresa tu nombre:</label>
        <input type="text" name="nombre_txt">
        <br><br>
        <label>Ingresa tu contraseña:</label>
        <input type="password" name="password_txt">
        <br><br>
        <input type="submit" name="enviar_btn" value="Enviar-post">
    </form>
</body>
</html>