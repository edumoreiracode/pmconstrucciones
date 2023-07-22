// Función para mostrar u ocultar el botón al hacer scroll
window.onscroll = function() {
    showGoToTopButton();
  };

  function showGoToTopButton() {
    const btn = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  }

  // Función para ir al tope de la página
  function goToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
  }