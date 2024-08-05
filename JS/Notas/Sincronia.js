// codigo sincrono no bloqueante
(()=> {
    console.log('Inicio');

    function dos() {
        console.log('Dos');
    }

    function uno() {
        console.log('Uno');
        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin');
})();


// codigo asincrono bloqueante
(()=> {
    console.log('Inicio');

    function dos() {
        setTimeout(function() {
            console.log('Dos');
        }, 1000);
    }

    function uno() {
        setTimeout(function() {
            console.log('Uno');
        }, 0);
        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin');
})();

// callback
// Un callback es una función que se pasa como argumento a otra función.
// La función que recibe el callback, lo ejecuta en un momento determinado.
function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

cuadradoCallback(0, (value, result) => {
    console.log('Inicio Callback');
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                        console.log('Fin Callback');
                    });
                });
            });
        });
    });
});

// promesas
// Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona.
// Las promesas tienen tres estados: pendiente, resuelta o rechazada.
// Las promesas se crean con el constructor Promise.

function cuadradoPromise(value) {
    if (typeof value !== 'number') {
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}

cuadradoPromise(0)
    .then(obj => {
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log('Fin Promise');
    })
    .catch(err => console.error(err));
    


// async await
// La palabra clave async se utiliza para declarar funciones asíncronas.
// Las funciones async siempre devuelven una promesa.
// La palabra clave await se utiliza para esperar a que una promesa se resuelva.
// Await solo se puede usar dentro de una función async.

async function funcionAsincronaDeclarada() {
    try {
        console.log('Inicio Async Function');
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        console.log('Fin Async Function');
    } catch (err) {
        console.error(err);
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
    try {
        console.log('Inicio Async Function');
        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        console.log('Fin Async Function');
    } catch (err) {
        console.error(err);
    }
}

funcionAsincronaExpresada();

