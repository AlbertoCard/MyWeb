<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesiones php</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form name="autentificacion_frm" action="control.php" method="post" enctype="application/x-www-form-urlencoded">
        <?php
            if(isset($_GET["error"]) && $_GET["error"] == "si"){
                echo "<span>Verifica tus datos</span>";
            } else{
                echo "Introduce tus datos";
            }
        ?>
        <br><br>
        <label>Usuario</label>
        <input type="text" name="usuario_txt">
        <br><br>
        <label>Pasword</label>
        <input type="password" name="password_txt">
        <br><br>
        <input type="submit" name="entrar_btn" value="Entrar">
    </form>
</body>
</html>