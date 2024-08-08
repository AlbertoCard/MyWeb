// Eventos atraves de un elemento html

// atraves de una funcion
// <button onclick="saludar()">Saludar</button>

function saludar() {
    alert('Hola');
}   


// añadir el evento desde el script
// <button id="boton">Saludar</button>
const boton = document.getElementById('boton');

boton.onclick = saludar;

// añadir el evento con addEventListener
boton.addEventListener('click', saludar);


// flujo de eventos
// <div onclick="alert('Div')">
//     <button onclick="alert('Boton')">Boton</button>
// </div>

// Evento de burbujeo
// se ejecuta primero el evento del boton y luego el del div
// .addEventListener('click', saludar, false); // false es el valor por defecto

// Evento de captura
// se ejecuta primero el evento del div y luego el del boton
// .addEventListener('click', saludar, true); // true para captura



//parar propagacion de eventos
// <div onclick="alert('Div')">
//     <button onclick="alert('Boton'); event.stopPropagation()">Boton</button>
// </div>

// desde el script

boton.addEventListener('click', (e) => {
    e.stopPropagation();
    saludar();
});


// prevenir el comportamiento por defecto
// el comportamiento por defecto es el que tiene un elemento al hacer click
// <a href="http://google.com" onclick="event.preventDefault()">Google</a>

// desde el script
boton.addEventListener('click', (e) => {
    e.preventDefault(); 
    saludar();
});


