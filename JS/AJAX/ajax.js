(() => {
    // crear instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"), // referencia al elemento
        $fragment = document.createDocumentFragment(); // fragmento de documento

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return; // si no ha completado la peticion

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }


    }); // escuchar el cambio de estado

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();


(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(
        (res) => {
            return res.ok ? res.json() : Promise.reject(res);
        })
    .then(
        (json) => {
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        }
    )
    .catch(
        err => {
            console.log("Esto es un error: ", err);
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
    .finally(
        console.log("Esto se ejecutara independientemente del resultado de la promesa Fetch")
    );
})();

(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();
    
    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch (error) {
            let message = error.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutara independientemente del resultado de la promesa Fetch");
        }
    }

    getData()
})();