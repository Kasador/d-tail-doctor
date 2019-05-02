// hamburger menu

$(document).ready(function() {

  //toggle menu
  $('.hamburger-container').click(function() {
    $('#menu').slideToggle("slow");
  });

  //to fix issue that toggle adds style(hides) to nav
  $(window).resize(function() {
    if (window.innerWidth > 1024) {
      $('#menu').removeAttr('style');
    }
  });

  //icon animation
  var topBar = $('.hamburger li:nth-child(1)'),
    middleBar = $('.hamburger li:nth-child(2)'),
    bottomBar = $('.hamburger li:nth-child(3)');

  $('.hamburger-container').on('click', function() {
    if (middleBar.hasClass('rot-45deg')) {
      topBar.removeClass('rot45deg');
      middleBar.removeClass('rot-45deg');
      bottomBar.removeClass('hidden');
    } else {
      bottomBar.addClass('hidden');
      topBar.addClass('rot45deg');
      middleBar.addClass('rot-45deg');
    }
  });

});

// end of hamburger menu

// get date
var date = new Date();
var today = date.getDay();

switch (today) {
  case 0:
    document.getElementById('hours').innerHTML = "Domingo | Cerrado";
    break;
  case 1:
    document.getElementById('hours').innerHTML = "Lunes | Abierto hasta 7:00 P.M.";
    break;
  case 2:
    document.getElementById('hours').innerHTML = "Martes | Abierto hasta 7:00 P.M.";
    break;
  case 3:
    document.getElementById('hours').innerHTML = "Miércoles | Abierto hasta 7:00 P.M.";
    break;
  case 4:
    document.getElementById('hours').innerHTML = "Jueves | Abierto hasta 7:00 P.M.";
    break;
  case 5:
    document.getElementById('hours').innerHTML = "Viernes | Abierto hasta 7:00 P.M.";
    break;
  case 6:
    document.getElementById('hours').innerHTML = "Sábado | Abierto hasta 7:00 P.M.";
    break;
}

// scroll to top button

$(document).ready(function() {

  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});

// hr on load

$(document).ready(function(){
	$('#hr').css('transition', '4.0s');
	$('#hr').css('width', '50%');
});

// hr-footer on load

$(document).ready(function(){
	$('#hr-footer').css('transition', '4.0s');
	$('#hr-footer').css('width', '50%');
});
