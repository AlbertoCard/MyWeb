import menu_hamburguesa from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menu_hamburguesa(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#detener-reloj");
    alarm("assets/fire-alarm-33770.mp3", "#activar-alarma", "#detener-alarma");
    countdown("countdown", "Sep 19, 2024 00:00:00", "Feliz Cumpleaños!! 🎂🎉");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});