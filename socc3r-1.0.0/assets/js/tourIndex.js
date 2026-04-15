function initGuidedTour() {
  if (!window.driver || !window.driver.js) {
    console.warn("Driver.js no está disponible en window.driver.js");
    return;
  }

  const driver = window.driver.js.driver;

  const tour = driver({
    showProgress: true,
    steps: [
      {
        popover: {
          title: "¡Bienvenido a Socc3r!",
          description: "Te invitamos a tomar este tour virtual por nuestra página.",
          position: "center",
          popoverClass: 'my-custom-popover-class'
        }
      },
      {
        element: "#inicio",
        popover: {
          title: "Página principal",
          description: "¡Aquí nos encontramos actualmente! Es la base de Socc3r y donde puedes ver nuestro contenido más reciente.",
          position: "center"
        }
      },
      {
        element: "#galeria",
        popover: {
          title: "Galeria",
          description: "Donde encontrarás nuestros clips favoritos de los equipos futuros a participar en la FIFA World Cup 2026™, los cuales puedes editar y aplicar filtros.",
          position: "center"
        }
      },
      {
        element: "#trivia",
        popover: {
          title: "Trivia",
          description: "¿Crees saber todo sobre tus equipos y partidos favoritos? ¡Prueba tu conocimiento con nuestros tests!",
          position: "center"
        }
      },
      {
        element: "#scan",
        popover: {
          title: "Escanear",
          description: "¡Con una de nuestras cartas coleccionables puedes escanear la parte de atrás y visualizar SU modelo 3D!",
          position: "center"
        }
      },
    ]
  });
  const btnTourIndex = document.getElementById("btnTourIndex");

  if (btnTourIndex) {
    btnTourIndex?.addEventListener("click", () => {
      tour.drive();
    });
  } else { }


}
initGuidedTour();