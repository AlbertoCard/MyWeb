export default function temaOscuro(btn, classDark) {
    const findBtn = document.querySelector(btn),
        $selectors = document.querySelectorAll("[data-dark]");
    
    let moon = "🌙",
        sun = "☀️";

    document.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if (findBtn.textContent === moon) {
                $selectors.forEach((el) => el.classList.add(classDark));
                findBtn.textContent = sun;
            } else {
                $selectors.forEach((el) => el.classList.remove(classDark));
                findBtn.textContent = moon;
            }
        }
    });
}