// los iterables pueden ser:
// - Arrays
// - Strings
// - Maps
// - Sets
// - Arguments (son los argumentos que se pasan a una función)
let iterable = [1, 2, 3, 4, 5];

const iterador = iterable[Symbol.iterator]();

// value: valor del elemento
// done: si ya terminó de iterar
console.log(iterador.next()); // { value: 1, done: false }
console.log(iterador.next()); // { value: 2, done: false }
console.log(iterador.next()); // { value: 3, done: false }
console.log(iterador.next()); // { value: 4, done: false }
console.log(iterador.next()); // { value: 5, done: false }
console.log(iterador.next()); // { value: undefined, done: true }

let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
    }


// generadores
// se definen con la palabra reservada function* y se utilizan con la palabra reservada yield
// sirven para pausar y continuar la ejecución de una función
function* iterable() {
    yield 1;
    console.log('Hola');
    yield 2;
    console.log('Hola de nuevo');
    yield 3;
    yield 4;
}

let iterador2 = iterable();

for (let y of iterador2) {
    console.log(y); // 1, 'Hola', 2, 'Hola de nuevo', 3, 4
}

const arr = [...iterable()]; // [1, 2, 3, 4]

// Generador para el cuadrado de un número
function cuadrados(valor){
    setTimeout(() => {
        for (let i = 0; i < valor.length; i++) {
            yield valor[i] * valor[i];
        }
    }, 1000);

    return{
        valor,
        result: valor * valor
    }
}

function* generador(){
    console.log('Inicio Generador');
    yield cuadrados(0);
    yield cuadrados(1);
    yield cuadrados(2);
    yield cuadrados(3);
    yield cuadrados(4);
    yield cuadrados(5);
    console.log('Fin Generador');
}

let gen = generador();

for (let y of gen) {
    console.log(y);
}

