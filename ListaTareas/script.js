const listaTareas = document.querySelector("ul");
var tarea = document.getElementById('nueva');

function addTask(){
    if(tarea.value == ''){
        alert('Ingrese una tarea');
        return;
    }
    const listaTareas = document.querySelector("ul");
    const item = document.createElement("li");
    listaTareas.appendChild(item);

    const texto = document.createElement("p");
    texto.innerText = tarea.value;
    texto.className = 'tarea';
    item.appendChild(texto);

    const boton = document.createElement("button");
    boton.innerText = 'Eliminar';
    boton.className = 'boton';
    boton.onclick = function(){
        item.remove();
    }
    item.appendChild(boton);

    tarea.value = '';
}