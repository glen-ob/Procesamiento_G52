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
          title: "Trivia",
          description: "En esta parte encontrarás preguntas sobre la Copa Mundial de la FIFA y las selecciones que participan en ellas.",
          position: "center"
        }
      },
      {
        element: "#display-question",
        popover: {
          title: "",
          description: "Aquí verás la pregunta principal",
          position: "center"
        }
      },
      {
        element: "#option-one-label",
        popover: {
          title: "",
          description: "Y sus posibles respuestas",
          position: "center"
        }
      },
      {
        element: "#nextQuestion",
        popover: {
          title: "",
          description: "una vez selecciones la que crees correcta, ¡da click aquí para pasar a la siguiente!",
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