// Browser object model

// Sirve para manipular la ventana del navegador
// Se puede acceder a la ventana con javascript
// Se pueden abrir y cerrar ventanas
// Se pueden redirigir a otras paginas
// Se pueden mostrar mensajes de alerta
// Se pueden mostrar mensajes de confirmacion
// Se pueden mostrar mensajes de ingreso de datos
// Se pueden mostrar mensajes de error
// Se pueden mostrar mensajes de impresion
// Se pueden mostrar mensajes de carga
// Se pueden mostrar mensajes de desconexion
// Se pueden mostrar mensajes de pantalla completa
// Se pueden mostrar mensajes de notificacion
// Se pueden mostrar mensajes de progreso
// Se pueden mostrar mensajes de seleccion de archivos
// Se pueden mostrar mensajes de almacenamiento local
// Se pueden mostrar mensajes de geolocalizacion
// Se pueden mostrar mensajes de notificaciones push
// Se pueden mostrar mensajes de captura de pantalla
// Se pueden mostrar mensajes de reconocimiento de voz
// Se pueden mostrar mensajes de realidad aumentada
// Se pueden mostrar mensajes de realidad virtual
// Se pueden mostrar mensajes de websockets
// Se pueden mostrar mensajes de web workers
// Se pueden mostrar mensajes de web assembly
// Se pueden mostrar mensajes de webgl
// Se pueden mostrar mensajes de webxr

// Ejemplo de un objeto window
let ventana = window;
console.log(ventana); // [object Window]
console.log(ventana.location); // [object Location]
console.log(ventana.document); // [object Document]

// Abrir una ventana
let nuevaVentana = window.open("https://www.google.com", "_blank");

// Cerrar una ventana
nuevaVentana.close();

// Redirigir a otra pagina
window.location.href = "https://www.google.com";

// Mostrar un mensaje de alerta
window.alert("Mensaje de alerta");

// Mostrar un mensaje de confirmacion
let confirmacion = window.confirm("Mensaje de confirmacion");
console.log(confirmacion); // true o false

// Mostrar un mensaje de ingreso de datos
let ingreso = window.prompt("Mensaje de ingreso de datos");
console.log(ingreso); // string o null

// Mostrar un mensaje de error
window.onerror = function(mensaje, url, linea, columna, error) {
    console.log(mensaje);
    console
    console.log(url);
    console.log(linea);
    console.log(columna);
    console.log(error);
}

// Mostrar un mensaje de impresion
window.print();

// Mostrar un mensaje de carga
window.onload = function() {
    console.log("Carga completa");
}

// Mostrar un mensaje de desconexion
window.onoffline = function() {
    console.log("Desconexion");
}

// Mostrar un mensaje de pantalla completa
let pantalla = document.querySelector("div");
pantalla.requestFullscreen();

// Mostrar un mensaje de notificacion
let notificacion = new Notification("Titulo", {
    body: "Mensaje"
});

// Mostrar un mensaje de progreso
let progreso = document.querySelector("progress");
progreso.value = 50;

// Mostrar un mensaje de seleccion de archivos
let archivos = document.querySelector("input[type=file]");
archivos.click();

// Mostrar un mensaje de almacenamiento local
localStorage.setItem("nombre", "Juan");
let nombre = localStorage.getItem("nombre");
console.log(nombre);

// Mostrar un mensaje de geolocalizacion
navigator.geolocation.getCurrentPosition(function(posicion) {
    console.log(posicion.coords.latitude);
    console.log(posicion.coords.longitude);
});

// Mostrar un mensaje de notificaciones push
navigator.serviceWorker.register("service-worker.js");

// Mostrar un mensaje de captura de pantalla
navigator.mediaDevices.getDisplayMedia();

// Mostrar un mensaje de reconocimiento de voz
let reconocimiento = new webkitSpeechRecognition();
reconocimiento.start();

// Mostrar un mensaje de realidad aumentada
let ar = navigator.xr.requestSession("immersive-ar");

// Mostrar un mensaje de realidad virtual
let vr = navigator.xr.requestSession("immersive-vr");

// Mostrar un mensaje de websockets
let socket = new WebSocket("ws://localhost:3000");

// Mostrar un mensaje de web workers
let worker = new Worker("worker.js");

// Mostrar un mensaje de web assembly
let wasm = new WebAssembly.Module("module.wasm");

// Mostrar un mensaje de webgl
let gl = canvas.getContext("webgl");

// Mostrar un mensaje de webxr
let xr = navigator.xr.requestSession("immersive-xr");

// Ejemplo de un objeto location
let ubicacion = window.location;
console.log(ubicacion); // [object Location]
console.log(ubicacion.href); // https://www.google.com/
console.log(ubicacion.protocol); // https:
console.log(ubicacion.host); // www.google.com
console.log(ubicacion.hostname); // www.google.com
console.log(ubicacion.port); // 443
console.log(ubicacion.pathname); // /
console.log(ubicacion.search); // ?gws_rd=ssl
console.log(ubicacion.hash); // #











console.log(window.innerHeight); // altura de la ventana
console.log(window.innerWidth); // ancho de la ventana

console.log(window.outerHeight); // altura de la ventana incluyendo la barra de herramientas
console.log(window.outerWidth); // ancho de la ventana incluyendo la barra de herramientas

console.log(window.screen.height); // altura de la pantalla
console.log(window.screen.width); // ancho de la pantalla

console.log(window.screen.availHeight); // altura de la pantalla disponible
console.log(window.screen.availWidth); // ancho de la pantalla disponible



// evento con el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    console.log('Cambio de tamaño');
    console.log(window.innerHeight);
    console.log(window.innerWidth);
});



// evento con el cambio de scroll
window.addEventListener('scroll', () => {
    console.log('Cambio de scroll');
    console.log(window.scrollY);
    console.log(window.scrollX);
});


// evento con la carga de la pagina
window.addEventListener('load', () => {
    console.log('Carga completa');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Contenido cargado');
});