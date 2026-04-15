function initGuidedTour() {
  if (!window.driver || !window.driver.js) {
    console.warn("Driver.js no está disponible en window.driver.js");
    return;
  }
  const driver = window.driver.js.driver;

    const tourTrivia = driver({
    showProgress: true,
    steps: [
      {
        element: "#starter-section",
        popover: {
          title: "Categorías",
          description: "Para empezar los tests, puedes escoger entre nuestras temáticas tu favorita. ",
          position: "center"
        }
      },
      {
        element: "#questions",
        popover: {
          title: "tema",
          description: "Puedes tomar los tests que quieras haciendo click en ellos.",
          position: "center"
        }
      },
    ]
  });

  const btnTourTrivia = document.getElementById("btnTourTrivia");

  if (btnTourTrivia) {
    btnTourTrivia?.addEventListener("click", () => {
      tourTrivia.drive();
    });
  } else { }
}
initGuidedTour();