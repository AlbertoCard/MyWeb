setInterval(() => {
    var  hora = new Date().toLocaleTimeString();
    document.getElementsByClassName('hora')[0].innerHTML = hora;
}, 1000);