$(document).ready(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
  $("#navHome").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 1000)
  });
  $("#navAbout").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000)
  });
  $("#navPortfolio").click(function () {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 1000)
  });
  $("#navContact").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000)
  });
});
