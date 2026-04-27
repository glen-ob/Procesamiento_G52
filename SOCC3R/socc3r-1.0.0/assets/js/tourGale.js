function initGuidedTour() {
  if (!window.driver || !window.driver.js) {
    console.warn("Driver.js no está disponible en window.driver.js");
    return;
  }

  const driver = window.driver.js.driver;

  const galetour = driver({
    showProgress: true,
    steps: [
      {
        element: "#video-grid",
        popover: {
          title: "Galería de videos",
          description: "Tenemos videos de los mejores momentos de cada equipo que ha participado en la Copa Mundial hasta el 2022.",
          position: "center"
        }
      },
      {
        element: "#video-item",
        popover: {
          title: "¡Haz click!",
          description: "Para probar nuestra selección de filtros y ver más a fondo el video, ¡haz click en el que quieras!",
          position: "center"
        }
      },
    ]
  });

  const btnTourGale = document.getElementById("btnTourGale");

  if (btnTourGale) {
    btnTourGale?.addEventListener("click", () => {
      galetour.drive();
    });
  }
}
initGuidedTour();