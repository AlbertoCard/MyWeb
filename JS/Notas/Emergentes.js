var alerta = alert("Hola Mundo"); // Muestra un mensaje emergente
var confirmacion = confirm("¿Estás seguro de querer continuar?"); // Muestra un mensaje emergente con un botón de aceptar y otro de cancelar
if(confirmacion){
    console.log("Has aceptado");
}
else{
    console.log("Has cancelado");
}

var aviso = prompt("Introduce tu nombre"); // Muestra un mensaje emergente con un campo de texto
console.log(aviso); // Muestra el valor introducido en el campo de texto




// uso de ventanas emergentes
const abrir = document.getElementById('abrir-ventana'),
        cerrar = document.getElementById('cerrar-ventana'),
        imprimir = document.getElementById('imprimir-ventana');