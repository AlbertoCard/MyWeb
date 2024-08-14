const d = document;

export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime(); // convertimos la fecha límite a milisegundos
    
    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitDate = countdownDate - now,
            days = Math.floor(limitDate / (1000 * 60 * 60 * 24)),
            hours = Math.floor((limitDate % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60)),
            minutes = Math.floor((limitDate % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((limitDate % (1000 * 60)) / 1000);
    
    $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

    }, 1000);
}