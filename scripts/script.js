$(document).ready(() => {

  // Variables
  const $navbar = $('#navbar');
  const $navHome = $('#nav-home');
  const $navAbout = $('#nav-about');
  const $navActivity = $('#nav-activity');
  const $navPortfolio = $('#nav-portfolio');
  const $navContact = $('#nav-contact');
  const $moreInfo = $('#more-info');
  const $topBtn = $('#top-btn');
  const $navbarHeight = $navbar.outerHeight();

  // Functions
  const toggleTopActive = () => {
    if ($(this).scrollTop() > $navbarHeight) {
      $topBtn.addClass('top-btn-active');
    } else {
      $topBtn.removeClass('top-btn-active');
    };
  };

  const controlScroll = (id, navHeight) => {
    $('html, body').animate({
      scrollTop: $(id).offset().top - navHeight
    }, 100);
  };


  // Initialization
  toggleTopActive();

  // Events
  $(document).scroll(() => toggleTopActive());
  $topBtn.click(() => controlScroll('#home', $navbarHeight));
  $navHome.click(() => controlScroll('#home', $navbarHeight));
  $navAbout.click(() => controlScroll('#about', 0));
  $moreInfo.click(() => controlScroll('#about', 0));
  $navActivity.click(() => controlScroll('#activity', 0));
  $navPortfolio.click(() => controlScroll('#portfolio', 0));
  $navContact.click(() => controlScroll('#contact', 0));
});