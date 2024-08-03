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

