// Estandar json
// sirve para intercambiar datos entre el servidor y el cliente
// estructura de un json
// {
//     "nombre": "Juan",
//     "apellido": "Perez",
//     "edad": 30,
//     "casado": false,
//     "hijos": null,
//     "mascotas": [
//         {
//             "nombre": "Firulais",
//             "raza": "Caniche"
//         },
//         {
//             "nombre": "Ramon",
//             "raza": "Pastor Aleman"
//         }
//     ]
// }
// en un json se pueden guardar strings, numeros, booleanos, null y arrays
// no se pueden guardar funciones, objetos, fechas, undefined

// insertar un json en un string
let persona = {
    "nombre": "Juan",
    "apellido": "Perez",
    "edad": 30,
    "casado": false,
    "hijos": null,
    "mascotas": [
        {
            "nombre": "Firulais",
            "raza": "Caniche"
        },
        {
            "nombre": "Ramon",
            "raza": "Pastor Aleman"
        }
    ]
};

let json = JSON.stringify(persona); // convierte el objeto en un string json
console.log(json); // {"nombre":"Juan","apellido":"Perez","edad":30,"casado":false,"hijos":null,"mascotas":[{"nombre":"Firulais","raza":"Caniche"},{"nombre":"Ramon","raza":"Pastor Aleman"}]}

console.log(typeof json); // string

// convertir un string json en un objeto
let objeto = JSON.parse(json); // convierte el string json en un objeto
console.log(objeto); // { nombre: 'Juan', apellido: 'Perez', edad: 30, casado: false, hijos: null, mascotas: [ { nombre: 'Firulais', raza: 'Caniche' }, { nombre: 'Ramon', raza: 'Pastor Aleman' } ] }

console.log(typeof objeto); // object

// leer un json de un archivo
let fs = require("fs"); // importar el modulo fs
let archivo = fs.readFileSync("archivo.json", "utf-8"); // leer el archivo
let datos = JSON.parse(archivo); // convertir el string json en un objeto
console.log(datos); // { nombre: 'Juan', apellido: 'Perez', edad: 30, casado: false, hijos: null, mascotas: [ { nombre: 'Firulais', raza: 'Caniche' }, { nombre: 'Ramon', raza: 'Pastor Aleman' } ] }




