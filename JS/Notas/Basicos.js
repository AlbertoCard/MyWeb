alert("Hola Mundo"); // Muestra un mensaje emergente
console.log("Hola Mundo"); // Muestra un mensaje en la consola del navegador
document.write("Hola Mundo"); // Muestra un mensaje en el documento HTML
typeof(variable) // Devuelve el tipo de dato de la variable

var nombre = "Juan"; // La variable var es global (Se puede acceder desde cualquier parte del código)
var apellido = "Perez"; // La variable let es local (Solo se puede acceder desde el bloque de código donde fue declarada)
const PI = 3.1416; // La variable const es una constante (No se puede modificar su valor)

// Declarar un arreglo
let arreglo = [1, 2, 3, 4, 5];

arreglo.push(6); // Agregar un elemento al final del arreglo
arreglo.pop(); // Eliminar el último elemento del arreglo
arreglo.shift(); // Eliminar el primer elemento del arreglo
arreglo.unshift(0); // Agregar un elemento al inicio del arreglo

// Declarar un objeto
let objeto = {
    nombre: "Alberto",
    apellido: "Cardenas",
    edad: 21
}

console.log(objeto.nombre); // Imprimir el valor de una propiedad del objeto
objeto.correo = "alberto.cardenaszazueta@gmail.com"; // Agregar una propiedad al objeto
delete objeto.edad; // Eliminar una propiedad del objeto
objeto.apellido = "Zazueta"; // Modificar el valor de una propiedad del objeto


// Metodos para Strings
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

console.log(lorem.length); // Obtener la longitud de un string
console.log(lorem.indexOf("ipsum")); // Obtener la posición de una subcadena
console.log(lorem.slice(0, 5)); // Obtener una subcadena
console.log(lorem.split(" ")); // Convertir un string en un arreglo
console.log(lorem.toLowerCase()); // Convertir un string a minúsculas
console.log(lorem.toUpperCase()); // Convertir un string a mayúsculas
console.log(lorem.replace("ipsum", "dolor")); // Reemplazar una subcadena
console.log(lorem.includes("ipsum")); // Verificar si una subcadena existe en el string
console.log(lorem.startsWith("Lorem")); // Verificar si el string inicia con una subcadena
console.log(lorem.endsWith("elit")); // Verificar si el string termina con una subcadena
console.log(lorem.concat(" sed do eiusmod")); // Concatenar dos strings
console.log(lorem.trim()); // Eliminar los espacios en blanco al inicio y al final del string

// template strings
nombre = "Alberto";
apellido = "Cardenas";
edad = 21;

let saludo = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;
console.log(saludo);

let ul = `
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
`;
console.log(ul);

// Undefined 
let variable; // Variable sin valor asignado
console.log(variable);

// Null
variable = null; // Variable con valor nulo
console.log(variable);

// NaN (Not a Number)
variable = "Hola" / 2; // Operación matemática inválida






