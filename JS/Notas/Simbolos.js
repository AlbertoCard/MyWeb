// symbols
// sirven para crear propiedades privadas

let id = Symbol('id');
let id2 = Symbol('id2');

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol('nombre');
const SALUDAR = Symbol('saludar');

const persona = {
    [NOMBRE]: 'Juan'
};

console.log(persona);

persona.NOMBRE = 'Pedro';
console.log(persona);
console.log(persona[NOMBRE]);
persona[NOMBRE] = 'Alberto';
console.log(persona);

persona[SALUDAR] = function() {
    console.log('Hola');
};

console.log(persona);
console.log(persona[SALUDAR]);
persona[SALUDAR]();

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
};

console.log(Object.getOwnPropertySymbols(persona));




// set es una lista de valores que no se repiten
let set = new Set([1, 2, 3, 3, 4, 5, true, false, true, {}, {}, 'hola', 'HOLA']);
console.log(set);

set.add(6); // add es un metodo de set
set.add(6); // no se repiten los valores
set.add(6);
set.add({}); // los objetos son diferentes
console.log(set); // no se repiten los valores

console.log(set.size);  

console.log(set.has(1)); // has revisa si existe el valor
console.log(set.has(7)); 

set.delete(1); // delete elimina el valor
console.log(set);

set.forEach(item => console.log(item)); // forEach recorre el set

set.clear(); // clear limpia el set

console.log(set);





// map es una lista de valores que se pueden repetir
// map es un objeto iterable
// map es una lista de llave y valor

let mapa = new Map();
mapa.set('nombre', 'alberto');
mapa.set('apellido', 'cardenas');   

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has('nombre'));

mapa.set(19, 'edad');
mapa.set(true, 'soltero');
mapa.set({}, 'objeto');
console.log(mapa);

// for of recorre el map
for (let [key, value] of mapa) {
    console.log(key, value);
}

mapa.forEach((value, key) => {
    console.log(key, value);
});


// weakset
// weakset es una lista de valores debiles
// weakset es un objeto iterable
// weakset no se puede recorrer
// weakset solo acepta objetos
// weakset no es enumerable
// weakset no tiene size
// weakset no tiene clear
// weakset no tiene keys
// weakset no tiene values
// weakset no tiene entries

const ws = new WeakSet();
let valor1 = {'valor1': 1};
let valor2 = {'valor2': 2};
let valor3 = {'valor3': 3};
let valor4 = {'valor4': 4};

ws.add(valor1);
ws.add(valor2);
console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws);

// weakmap
// weakmap es un objeto iterable
// weakmap solo acepta objetos como llaves
// weakmap no es enumerable
// weakmap no tiene size
// weakmap no tiene clear
// weakmap no tiene keys
// weakmap no tiene values
// weakmap no tiene entries

const wm = new WeakMap();
let llave1 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

wm.delete(llave2);

console.log(wm);

// tanto weakset como weakmap son debiles, si no hay referencias a los objetos, estos son eliminados por el garbage collector
// se utilizan para optimizar la memoria
// no se pueden recorrer



