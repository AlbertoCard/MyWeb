import menu_hamburguesa from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menu_hamburguesa(".panel-btn", ".panel", ".menu a");
});