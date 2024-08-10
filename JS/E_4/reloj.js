const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTime;

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)){
            clockTime = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
    
            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTime);
            // d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }

    });
    

}


export function alarm() {

}