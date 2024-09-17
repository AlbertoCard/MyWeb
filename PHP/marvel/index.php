<?php
const API_URL = "https://whenisthenextmcufilm.com/api";
#se inicia una nueva sesion en el curl
$ch = curl_init(API_URL);
# se indica que queremos recibir el resultado de la peticion y no mostrarla en la pantalla
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

#se ejecuta la peticion
$result = curl_exec($ch);

$data = json_decode($result, true);


?>

<head>
    <meta charset="utf-8"/>
    <title>La proxima pelicula de marvel</title>
    <link rel="stylesheet" href="styles.css">
</head>

<main>
    <section>
        <img src="<?= $data["poster_url"];?>" width="200" alt="Poster de <?= $data["title"]; ?> "style="border-radius: 16px"/>

    </section>
    <hgroup>
        <h3><?= $data["title"]; ?> se  estrena en <?= $data["days_until"]; ?> dias</h3>
        <p>Fecha de estreno: <?= $data["release_date"]; ?> </p>
        <p>La siguiente es: <?= $data["following_production"]["title"] ;?> </p>
    </hgroup>
</main>