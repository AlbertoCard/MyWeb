import menu_hamburguesa from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menu_hamburguesa(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#detener-reloj");
});