const d = document;
let x = 0, y = 0;

export function shortcuts (e){
    console.log(e);
    // keycode: es un valor numerico que representa una tecla en el teclado
    // key: es un valor string que representa una tecla en el teclado
}

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          limitsBall = $ball.getBoundingClientRect(),
          limitsStage = $stage.getBoundingClientRect(); // Devuelve las coordenadas de un elemento y su tamaño
    

    switch(e.keyCode){
        case 37: // left
            e.preventDefault();
            if(limitsBall.left > (limitsStage.left + 10)) x--;
            break;
        case 38: // up
            e.preventDefault();
            if(limitsBall.top > limitsStage.top) y--;
            break;
        case 39: // right
            e.preventDefault();
            if(limitsBall.right < (limitsStage.right - 10)) x++;
            break;
        case 40: // down
            e.preventDefault();
            if(limitsBall.bottom < limitsStage.bottom) y++;
            break;
        default:
            break;
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}