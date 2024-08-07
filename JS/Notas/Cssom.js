// CSS object model

// Sirve para manipular el estilo de una pagina web
// Se puede acceder a los estilos con javascript
// Se pueden modificar los estilos de los elementos
// Se pueden agregar y quitar clases
// Se pueden agregar y quitar reglas
// Se pueden agregar y quitar estilos
// Se pueden agregar y quitar animaciones
// Se pueden agregar y quitar transiciones

// Ejemplo de un objeto css
let css = document.styleSheets[0];
console.log(css); // CSSStyleSheet { ownerNode: link, cssRules: CSSRuleList, ... }

// Acceder a los estilos
let regla = css.cssRules[0];
console.log(regla); // CSSStyleRule { selectorText: 'body', style: CSSStyleDeclaration, ... }
console.log(regla.selectorText); // body
console.log(regla.style); // CSSStyleDeclaration { 0: 'color', 1: 'background-color', ... }
console.log(regla.style.color); // black
console.log(regla.style.backgroundColor); // white

// Modificar los estilos
regla.style.color = "red"; // modificar el color del body
regla.style.backgroundColor = "blue"; // modificar el fondo del body

// Modificar un estilo especifico
let h1 = document.querySelector("h1");
h1.style.color = "green"; // modificar el color del h1
h1.style.backgroundColor = "yellow"; // modificar el fondo del h1

// Agregar una clase
h1.classList.add("titulo"); // agregar la clase titulo al h1
h1.classList.remove("titulo"); // quitar la clase titulo al h1

// Agregar una regla
css.insertRule("h1 { color: purple; background-color: orange; }", 0); // agregar una regla al css

// Eliminar una regla
css.deleteRule(0); // eliminar una regla del css

// Agregar una animacion
let keyframes = `@keyframes animacion {
    from { color: red; }
    to { color: blue; }
}`;
css.insertRule(keyframes, 0); // agregar una animacion al css

// Eliminar una animacion
css.deleteRule(0); // eliminar una animacion del css

// Agregar una transicion
h1.style.transition = "color 1s"; // agregar una transicion al h


