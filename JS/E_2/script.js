const listaDeCompras = document.querySelector("ul");
const comida = ["Arroz", "Feijão", "Carne", "Legumes", "Frutas"];

function addElements() {
    for (let i = 0; i < comida.length; i++) {
        const item = document.createElement("li");
        item.innerText = comida[i];
        listaDeCompras.appendChild(item);
        }
}

