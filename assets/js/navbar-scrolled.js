$(document).ready(function() {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var navbar = $(".navbar");

        if (scroll > 0) {
          navbar.addClass("scrolled");
        } else {
          navbar.removeClass("scrolled");
        }
      });
    });