console.log('************');
$(document).ready(function () {
  var $nav = $("#mainNavbar");
  var $btn = $("#myBtn");
  if ($(this).scrollTop() > $nav.height()) {
    $btn.addClass("active");
  } else {
    $btn.removeClass("active");
  };
  $(document).scroll(function () {
    if ($(this).scrollTop() > $nav.height()) {
      $btn.addClass("active");
    } else {
      $btn.removeClass("active");
    };
  });
  $("#myBtn").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 100);
  })
  $("#navHome").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 100);
  });
  $("#navAbout").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 100)
  });
  $("#moreInfo").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 100)
  });
  $("#navActivity").click(function () {
    $('html, body').animate({
      scrollTop: $("#activity").offset().top
    }, 100)
  });
  $("#navPortfolio").click(function () {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 100)
  });
  $("#navContact").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 100)
  });
});
