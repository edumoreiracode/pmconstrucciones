
$(document).ready(function() {
  // Función para actualizar el fondo del navbar cuando se despliegan los elementos
  function updateNavbarBackground() {
    var scroll = $(window).scrollTop();
    var navbar = $(".navbar");
    var navbarToggler = $(".navbar-toggler");

    if (scroll > 0 || navbarToggler.attr("aria-expanded") === "true") {
      navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  }

  // Evento para detectar cuando se despliegan los elementos del navbar
  $(".navbar-toggler").click(function() {
    updateNavbarBackground();
  });

  // Evento para detectar cuando se cierra el menú (si se hace clic fuera de él)
  $(document).click(function(event) {
    var navbarToggler = $(".navbar-toggler");
    if (
      !navbarToggler.is(event.target) &&
      navbarToggler.attr("aria-expanded") === "true"
    ) {
      updateNavbarBackground();
    }
  });

  // Evento para detectar el desplazamiento y actualizar el fondo del navbar
  $(window).scroll(function() {
    updateNavbarBackground();
  });
});