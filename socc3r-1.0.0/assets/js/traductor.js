const translations = {
    mx: {
        // inicio: "inicio",
        // galeria: "galeria",
        // trivia: "trivia",
        // scan: "escaneo",
        // minijuego: "minijuego",
        // btnTourIndex: "ayuda",
        bienv: "Bienvenido a ",
        scr: "Socc3r",
        desc: "Donde tienes tu colección de cartas favoritas!",
        h3: "Socc3r Trading Cards",
        h3p: "Balones de Mundiales, Estadios y Equipos"

    },
    en: {
        // inicio: "index",
        // galeria: "gallery",
        // trivia: "trivia",
        // scan: "scanning",
        // minijuego: "minigame",
        // btnTourIndex: "help",
        bienv: "Welcome to ",
        scr: "Socc3r",
        desc: "Where you keep your favorite collection of cards!",
        h3: "Socc3r Trading Cards",
        h3p: "World Cups, stadiums and countries"
    }


}

const languageSelectop = document.querySelector("select");
let navmenu = document.getElementById("navmenu"); //body?
let h2 = document.getElementById("h2");
let span = document.getElementById("span");
let p = document.getElementById("p")
let h3 = document.getElementById("h3");
let h3p = document.getElementById("h3p")

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "esp") {
        console.log(language);
        h2.innerText = translations.mx.bienv;
        span.innerText = translations.mx.scr;
        p.innerText = translations.mx.desc;
        h3.innerText = translations.mx.h3;
        h3p.innerText = translations.mx.h3p;

    } else if (language == "en") {
        console.log(language);
        h2.innerText = translations.en.bienv;
        span.innerText = translations.en.scr;
        p.innerText = translations.en.desc;
        h3.innerText = translations.mx.h3;
        h3p.innerText = translations.mx.h3p;
    }
}

