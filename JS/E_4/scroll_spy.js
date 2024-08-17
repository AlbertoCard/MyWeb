const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) => { // entries es un array de objetos que contienen la información de cada elemento que se está observando
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    }

    const observer = new IntersectionObserver(cb, {
        // rootMargin: "-250px",
        threshold: [0.5, 0.75]
    });

    $sections.forEach((el) => observer.observe(el));
}