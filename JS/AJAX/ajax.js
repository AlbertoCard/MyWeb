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