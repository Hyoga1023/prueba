document.addEventListener("DOMContentLoaded", () => {
  const arrowDown = document.getElementById("arrowDown");
  const nextButton = document.querySelector(".carousel-control-next");

  // Activar la flecha derecha al inicio (titilar)
  if (nextButton) {
    nextButton.classList.add("pulsing");
  }

  // Mostrar la flecha hacia abajo después de 7 segundos
  setTimeout(() => {
    if (arrowDown) {
      arrowDown.classList.add("visible", "pulsing");
    }
    // Opcional: dejar de titilar la flecha siguiente cuando aparece la de abajo
    if (nextButton) {
      nextButton.classList.remove("pulsing");
    }
  }, 10000);

  // Acción al hacer clic en la flecha hacia abajo
  if (arrowDown) {
    arrowDown.addEventListener("click", () => {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });
  }
});
