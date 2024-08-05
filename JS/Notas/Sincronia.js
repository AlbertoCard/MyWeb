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