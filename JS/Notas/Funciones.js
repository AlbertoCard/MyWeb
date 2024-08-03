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







