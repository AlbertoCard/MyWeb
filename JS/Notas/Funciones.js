// funcion declarada 
function ejemplo() {
    console.log("Hola mundo");
}
ejemplo();

// funcion con retorno
function suma(a, b) {
    return a + b;
}
console.log(suma(5, 3));

// funcion flecha
const resta = (a, b) => a - b;

console.log(resta(5, 3));

// funcion flecha con un solo parametro
const cuadrado = a => a * a;

console.log(cuadrado(5));

// funcion flecha con multiples lineas
const cubo = a => {
    return a * a * a;
}

console.log(cubo(5));

// funcion anonima
const multiplicacion = function(a, b) {
    return a * b;
}
console.log(multiplicacion(5, 3));

// parametros rest

function sumar(a, b, ...numeros) {
    let resultado = a + b;
    numeros.forEach(function(numero) {
        resultado += numero;
    });
    return resultado;
}

console.log(sumar(5, 3)); // 8
console.log(sumar(5, 3, 2)); // 10
console.log(sumar(5, 3, 2, 4)); // 14
console.log(sumar(5, 3, 2, 4, 6)); // 20

// parametros por defecto
function saludar(nombre = "Mundo") {
    console.log("Hola " + nombre);
}

// operador spread
const arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 10];
const arr3 = [arr1, arr2]; // [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
const arr4 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]







