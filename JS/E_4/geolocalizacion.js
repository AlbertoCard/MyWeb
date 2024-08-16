const d = document,
    n = navigator;

export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    
    const success = (position) => {
        let coords = position.coords;
        $id.insertAdjacentHTML("beforebegin", `<p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy} metros</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `);

    };

    const error = (err) => {
        $id.insertAdjacentHTML("beforebegin", `<p>¡Sucedió el siguiente error!: <b>${err}</b></p>`);
        console.log(`¡Sucedió el siguiente error!: ${err}`);
    };

    n.geolocation.getCurrentPosition(success, error, options);
}