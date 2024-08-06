const persona = {
    nombre: '',
    apellido: '',
    edad: 0
};

const manejador = {
    set(obj, {name, value}) {
        if (Object.keys(obj).indexOf(name) === -1) { // validamos si la propiedad existe en el objeto
            return console.error(`La propiedad "${name}" no existe en el objeto persona.`);
        }
        if (
            (name === 'nombre' || name === 'apellido') && 
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(value)) 
        ) {
            return console.error(`La propiedad "${name}" sólo acepta letras y espacios en blanco.`);
        }
        obj[name] = value;
    }
};

const alberto = new Proxy(persona, manejador);
alberto.nombre = 'Alberto';
alberto.apellido = 'Cardenas';
alberto.edad = 21;
alberto.twitter = '@alberto'; // si no hay validacion de la propiedad, se agrega al objeto

console.log(alberto); // { nombre: 'Alberto', apellido: 'Cardenas', edad: 21 }

