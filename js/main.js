$(document).ready(function() {

  new WOW().init();
  $('.burger-nav').on("click", function(){
    $(".container nav ul").toggleClass('open');
  });

  $('.js-wp2').waypoint(function() {
    $('.js-wp2').addClass('animated slideInUp');
  }, {
    offset: '70%'
  });

  $('.js-wp3').waypoint(function() {
    $('.js-wp3').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });

  $('.iphone-btn').delay(2300).animate({
    bottom: "+=-3"
  }, 300).delay(300).animate({
    bottom: "+=3"
  }, 300);

})
