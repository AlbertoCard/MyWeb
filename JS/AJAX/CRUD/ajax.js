const d = document;

$table = d.querySelector('.crud-table');
$form = d.querySelector('.crud-form');
$alert = d.querySelector('.crud-title');
$template = d.getElementById('crud-template').content;
$fragment = d.createDocumentFragment();

const ajax = (options) => {
    let {url, method, success, error, data} = options;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', e => {
        if(xhr.readyState !== 4) return; 

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            success(json); 
        } else {
            let message = xhr.statusText || 'Ocurrió un error';
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || 'GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data)); // convertir un objeto a string
}

const getAll = () => {
    ajax({
        method: 'GET',
        url: 'http://localhost:3000/sayajins',
        success: (res) => {
            res.forEach(el => {
                $template.querySelector('.name').textContent = el.name;
                $template.querySelector('.power').textContent = el.power;
                
                $template.querySelector('.edit').dataset.id = el.id;
                $template.querySelector('.edit').dataset.name = el.name;
                $template.querySelector('.edit').dataset.power = el.power;

                $template.querySelector('.delete').dataset.id = el.id;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });

            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
        },
        data: null
    })
}

d.addEventListener('DOMContentLoaded', getAll);

d.addEventListener('submit', e => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            ajax({
                url: 'http://localhost:3000/sayajins',
                method: 'POST',
                success: (res) => location.reload(),
                error: (err) => $alert.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.name.value,
                    power: e.target.power.value
                }
            });
        } else {
            ajax({
                url: `http://localhost:3000/sayajins/${e.target.id.value}`,
                method: 'PUT',
                success: (res) => location.reload(),
                error: (err) => $alert.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.name.value,
                    power: e.target.power.value
                }
            });
        }
    }
});

d.addEventListener('click', e => {
    if(e.target.matches('.edit')){
        $form.title.textContent = 'Editar Sayajin';
        $form.id.value = e.target.dataset.id;
        $form.name.value = e.target.dataset.name;
        $form.power.value = e.target.dataset.power;
    }

    if(e.target.matches('.delete')){
        let isDelete = confirm(`¿Estás seguro de eliminar a ${e.target.dataset.id}?`);

        if(isDelete){
            ajax({
                url: `http://localhost:3000/sayajins/${e.target.dataset.id}`,
                method: 'DELETE',
                success: (res) => location.reload(),
                error: (err) => $alert.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
                data: null
            });
        }
    }
});