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
        desc: "Where you have your collection of favorite cards!",

    }


}

const languageSelectop = document.querySelector("select");
let navmenu = document.getElementById("navmenu"); //body?
let h2 = document.getElementById("h2");
let span = document.getElementById("span");
let p = document.getElementById("p")

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "esp") {
        console.log(language);
        h2.innerText = translations.mx.bienv;
        span.innerText = translations.mx.scr;
        p.innerText = translations.mx.desc;

    } else if (language == "en") {
        console.log(language);
        h2.innerText = translations.en.bienv;
        span.innerText = translations.en.scr;
        p.innerText = translations.en.desc;

    }
}

