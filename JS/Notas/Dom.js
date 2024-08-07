// Document object model

// Sirve para manipular el contenido de una pagina web
// Interpreta el html y lo convierte en un arbol de nodos
// Cada etiqueta html es un nodo
// Cada nodo tiene propiedades y metodos
// Se puede acceder a los nodos con javascript

// Ejemplo de un arbol de nodos
// <html>
//     <head>
//         <title>Titulo</title>
//     </head>
//     <body>
//         <h1>Titulo</h1>
//         <p>Parrafo</p>
//     </body>
// </html>

// Acceder a los nodos
let nodo = document; // nodo raiz
console.log(nodo); // <html>...</html>
console.log(nodo.nodeType); // 9
console.log(nodo.nodeName); // HTML
console.log(nodo.nodeValue); // null
console.log(nodo.childNodes); // NodeList(2) [head, body]
console.log(nodo.childNodes[0]); // <head>...</head>

// Acceder a los hijos de un nodo
let head = nodo.childNodes[0];
console.log(head); // <head>...</head>
console.log(head.nodeType); // 1
console.log(head.nodeName); // HEAD
console.log(head.nodeValue); // null

let title = head.childNodes[0];
console.log(title); // <title>Titulo</title>
console.log(title.nodeType); // 1
console.log(title.nodeName); // TITLE
console.log(title.nodeValue); // null
console.log(title.childNodes); // NodeList(1) [text]

// Manipular el DOM
let h1 = document.createElement("h1"); // crear un nodo
let texto = document.createTextNode("Titulo"); // crear un nodo de texto
h1.appendChild(texto); // agregar un nodo de texto al nodo h1
document.body.appendChild(h1); // agregar el nodo h1 al body

// eliminar un nodo
document.body.removeChild(h1);

// modificar un nodo
let p = document.querySelector("p"); // seleccionar un nodo
p.textContent = "Nuevo texto"; // modificar el texto del nodo

// agregar un atributo
p.setAttribute("class", "parrafo"); // agregar un atributo al nodo
p.removeAttribute("class"); // eliminar un atributo del nodo

// agregar un evento
p.addEventListener("click", function() {
    console.log("click");
});

// Ejemplo de un formulario
// <form>
//     <input type="text" id="nombre">
//     <input type="text" id="apellido">
//     <button type="submit">Enviar</button>
// </form>

// Acceder a los elementos de un formulario
let formulario = document.querySelector("form");
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let boton = document.querySelector("button");

// Agregar un evento al formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // prevenir el envio del formulario
    console.log(nombre.value); // obtener el valor del input nombre
    console.log(apellido.value); // obtener el valor del input apellido
});

// Agregar un evento al boton
boton.addEventListener("click", function() {
    console.log("click");
});















