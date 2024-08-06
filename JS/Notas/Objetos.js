// declaracion de objeto
const objeto = {
    nombre: "Alberto",
    apellido: "Cardenas",
    edad: 21
}

// declaracion de objeto con objeto como parametro
const objeto2 = {
    nombre: "Alberto",
    apellido: "Cardenas",
    edad: 21,
    direccion: {
        calle: "Calle 1",
        numero: 123
    }
}

// declaracion de objeto con metodos
const objeto3 = {
    nombre: "Alberto",
    apellido: "Cardenas",
    edad: 21,
    saludar: function() {
        console.log("Hola");
    }
}


// declaracion de objeto con las tres formas de declarar metodos
const objeto4 = {
    nombre: "Alberto",
    apellido: "Cardenas",
    edad: 21,
    direccion: {
        calle: "Calle 1",
        numero: 123
    },
    presentarse: function() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}



// propiedades de los objetos
console.log(objeto.nombre); // Imprimir el valor de una propiedad del objeto
console.log(objeto2.direccion.calle); // Imprimir el valor de una propiedad de un objeto anidado
objeto.saludar(); // Llamar a un metodo de un objeto
objeto4.presentarse(); // Llamar a un metodo de un objeto


// metodos de los objetos
console.log(Object.keys(objeto)); // Obtener las propiedades de un objeto
console.log(Object.values(objeto)); // Obtener los valores de un objeto
console.log(Object.entries(objeto)); // Obtener las propiedades y valores de un objeto
console.log(objeto.hasOwnProperty("nombre")); // Verificar si un objeto tiene una propiedad
console.log(objeto2.hasOwnProperty("direccion")); // Verificar si un objeto tiene una propiedad



// clases
// Las clases son funciones especiales que se utilizan para crear objetos
// Las clases se definen con la palabra reservada class
// Las clases tienen un constructor que se ejecuta al momento de crear un objeto
// Las clases pueden tener metodos
// Las clases pueden tener propiedades
// Las clases pueden tener setters y getters

// Declaracion de una clase
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola");
    }
}

// Creacion de un objeto de la clase Persona
const persona = new Persona("Alberto", "Cardenas", 21);
console.log(persona);

// Llamar a un metodo de un objeto de la clase Persona
persona.saludar();





// propiedades dinamicas de los objetos
// las propiedades dinamicas son propiedades que se crean en tiempo de ejecucion
// declaracion de un objeto con propiedades dinamicas

const objUsuarios = {};
const usuarios = ["Alberto", "Juan", "Pedro", "Maria"];
usuarios.forEach((usuario, index) => {
    objUsuarios[`id_${index}`] = usuario;
});

// declaracion de un objeto con propiedades dinamicas math.random
const objUsuarios2 = {
    [`id_${Math.floor(Math.random() * 10)}`]: "Alberto"
};




// this en js
// this hace referencia al objeto que ejecuta el codigo
// en el navegador, this hace referencia al objeto window
// en node, this hace referencia al objeto global

// this en el navegador
console.log(this); // window
console.log(this === window); // true

// propiedades del objeto window
this.nombre = "Alberto"; // se agrega la propiedad nombre al objeto window
console.log(window.nombre); // Alberto

// this en node
console.log(this); // {}
console.log(this === global); // true




// apply, call y bind

this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

const obj = {
    lugar: "Contexto Objeto"
}

// call
// call es un metodo que permite llamar a una funcion con un objeto que sera el valor de this
// call recibe dos parametros: el objeto que sera el valor de this y los argumentos de la funcion
// call ejecuta la funcion y retorna el resultado

// declaracion de una funcion

saludar.call(obj, "Hola", "Alberto"); // Hola Alberto desde el Contexto Objeto


// apply
// apply hace lo mismo que call, pero recibe los argumentos de la funcion en un array

saludar.apply(obj, ["Hola", "Alberto"]); // Hola Alberto desde el Contexto Objeto


// bind
// bind crea una nueva funcion con el objeto que sera el valor de this
// bind recibe el objeto que sera el valor de this
// bind retorna una nueva funcion

const nuevoObj = {
    nombre: "Alberto",
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    }
}

nuevoObj.saludar(); // Hola Alberto

const nuevaFuncion = {
    saludar: nuevoObj.saludar.bind(this) // Hola Alberto
}

nuevaFuncion.saludar(); // Hola Alberto

