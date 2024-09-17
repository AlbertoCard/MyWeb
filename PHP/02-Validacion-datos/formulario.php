<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validacion de datos</title>
</head>
<body>
    <hgroup><h1>Formulario de datos GET</h1></hgroup>
    <form name="valida_get_frm" action="validar-datos.php" method="get" enctype="application/x-www-form-urlencoded">
        <label>Ingresa tu nombre:</label>
        <input type="text" name="name_txt" id="name-get">
        <br><br>
        <label>Ingresa password</label>
        <input type="password" name="password_txt" id="password-get">
        <br><br>
        <input type="radio" name="sexo_rdo" value="M">
        <label>Masculino</label>
        <input type="radio" name="sexo_rdo" value="F">
        <label>Femenino</label>
        <input type="hidden" name="enviar_hdn" value="get">
        <input type="button" name="enviar_btn" value="Enviar GET" id="enviar-get">
    </form>
    <br><br>
    <hgroup><h1>Formulario de datos POST</h1></hgroup>
    <form name="valida_post_frm" action="validar-datos.php" method="post" enctype="application/x-www-form-urlencoded">
        <label>Ingresa tu nombre:</label>
        <input type="text" name="name_txt">
        <br><br>
        <label>Ingresa password</label>
        <input type="password" name="password_txt">
        <br><br>
        <input type="radio" name="sexo_rdo" value="M">
        <label>Masculino</label>
        <input type="radio" name="sexo_rdo" value="F">
        <label>Femenino</label>
        <input type="hidden" name="enviar_hdn" value="post">
        <input type="button" name="enviar_btn" value="Enviar POST">
    </form>
    <script src="script.js"></script>
</body>
</html>