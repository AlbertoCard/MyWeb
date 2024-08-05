// setTimeout
// setTimeout es una función que se ejecuta una sola vez después de un tiempo determinado solo una vez.
setTimeout(() => { 
    console.log('Hola Mundo'); 
}, 2000);

// setInterval
// setInterval es una función que se ejecuta de manera continua cada cierto tiempo.
setInterval(() => { 
    console.log('Hola Mundo'); 
}, 2000);

// actualizar la hora cada segundo
setInterval(() => { 
    console.log(new Date().toLocaleTimeString()); 
}, 1000);

// limpiar un temporizador
// Para detener un temporizador, se puede usar la función clearInterval.
// clearInterval recibe como argumento el identificador del temporizador que se quiere detener.
// Para detener un temporizador, se debe guardar el identificador que devuelve la función setInterval.
const temporizador = setInterval(() => {
    console.log('Hola Mundo');
}, 2000);

setTimeout(() => {
    clearInterval(temporizador);
}, 10000);

// se puede hacer lo mismo con setTimeout
const temporizador2 = setTimeout(() => {
    console.log('Hola Mundo');
}, 2000);

setTimeout(() => {
    clearTimeout(temporizador2);
}, 10000);
