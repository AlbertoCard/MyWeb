import menu_hamburguesa from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import sorteo from "./sorteo.js";
import slider from "./carrusel.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menu_hamburguesa(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#detener-reloj");
    alarm("assets/fire-alarm-33770.mp3", "#activar-alarma", "#detener-alarma");
    countdown("countdown", "Sep 19, 2024 00:00:00", "Feliz Cumpleaños!! 🎂🎉");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=Z47tQaJ39tA" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/Z47tQaJ39tA?si=wBZa1IpioqftZbLS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "maps", 
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/5o1zQJZ2HJ6mZz9e6" target="_blank" rel="noopener">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.050370372235!2d-107.37906582463125!3d24.79372867797288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd781d3ffa737%3A0xdf51d5881ac1823e!2sLa%20Torre%20Pizza!5e0!3m2!1ses-419!2smx!4v1723772085101!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    sorteo("#winner-btn", ".player");
    slider();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});


darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();