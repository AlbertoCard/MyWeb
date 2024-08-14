const d = document,
    w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 500){
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }

    }); // Evento scroll

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            w.scrollTo({ 
                behavior: "smooth", // smooth: suaviza el desplazamiento
                top: 0
            });
        }
    }); // Evento click
}