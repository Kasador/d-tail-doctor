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
