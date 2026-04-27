function initGuidedTour() {
    if (!window.driver || !window.driver.js) {
        console.warn("Driver.js no está disponible en window.driver.js");
        return;
    }

    const driver = window.driver.js.driver;

    const juegotour = driver({
        showProgress: true,
        steps: [
            {
                element: "#game-section",
                popover: {
                    title: "Cancha",
                    description: "Aquí se encuentra una cancha diminuta de futbol, tiene jugadores, sus porterías y puedes controlar el balón.",
                    position: "center"
                }
            },

            {
                element: "#next_8",
                popover: {
                    title: "¡Haz click para jugar!",
                    description: "A partir de aquí, solo deberas apuntar el balón para tirar. ¡Suerte!",
                    position: "center"
                }
            },
        ]
    });

    const btnTourJuego = document.getElementById("btnTourJuego");

    if (btnTourJuego) {
        btnTourJuego?.addEventListener("click", () => {
            juegotour.drive();
        });
    }
}
initGuidedTour();