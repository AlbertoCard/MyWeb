function agregar(valor) {
    let display = document.getElementById('display').value;

    if(display.length == 20){
        return;
    }

    if(display === '0' && !isNaN(valor)) {
        document.getElementById('display').value = valor;
        return;
    }

    if(isNaN(valor) && isNaN(display[display.length - 1])) {
        display = display.substring(0, display.length - 1);
        document.getElementById('display').value = display + valor;
        return;
    }

    if(display.length != 0) {
        document.getElementById('display').value += valor;
        return;
    }
}

function borrar() {
    let display = document.getElementById('display').value;
    if (display.length <= 1) {
        document.getElementById('display').value = '0';
        return;
    }
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function calcular() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = eval(display);
}

function limpiar() {
    document.getElementById('display').value = '0';
}
