document.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// 1) Skrypt wykonywany jest przed załadowaniem body
// 2) Tak
// 3) Nie