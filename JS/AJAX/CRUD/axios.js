const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await axios.get("http://localhost:3000/sayajins"),
            json = await res.data;

        json.forEach((el) => {
            $template.querySelector(".name").textContent = el.name;
            $template.querySelector(".power").textContent = el.power;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.name;
            $template.querySelector(".edit").dataset.power = el.power;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            // Create - POST
            try {
                let options = {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json; charset=utf-8",
                        },
                        data: JSON.stringify({
                            name: e.target.name.value,
                            power: e.target.power.value,
                        }),
                    },
                    res = await axios("http://localhost:3000/sayajins", options),
                    json = await res.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        } else {
            // Update - PUT
            try {
                let options = {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json; charset=utf-8",
                        },
                        data: JSON.stringify({
                            name: e.target.name.value,
                            power: e.target.power.value,
                        }),
                    },
                    res = await axios(`http://localhost:3000/sayajins/${e.target.id.value}`, options),
                    json = await res.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Sayajin";
        $form.name.value = e.target.dataset.name;
        $form.power.value = e.target.dataset.power;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

        if (isDelete) {
            // Delete - DELETE
            try {
                let options = {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json; charset=utf-8",
                        },
                    },
                    res = await axios(`http://localhost:3000/sayajins/${e.target.dataset.id}`, options),
                    json = await res.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
});