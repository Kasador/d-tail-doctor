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

// gallery


$(document).ready(function() {
  $('.images').on('click', function() {
    // bring up photo gallery
    var $imageClicked = $(this);
    $imageClicked.addClass('first-image');
    if ($imageClicked.hasClass('first-image')) {
      $('.first-image').parent().addClass('start');
      var $image = $imageClicked.attr('src');
    }
    $('#overlay').css('display', 'block');
    $('.clicked').css('display', 'block');
    $('#imageInsert').attr('src', $image);

    // close photo gallery
    $('#x').on('click', function() {
      $('#overlay').css('display', 'none');
      $('.clicked').css('display', 'none');
      if ($('img').hasClass('first-image')) {
        $('.first-image').parent().removeClass('start');
        $imageClicked.removeClass('first-image');
      }
    });
    // close photo gallery
    $('#imageInsert').on('click', function() {
      $('#overlay').css('display', 'none');
      $('.clicked').css('display', 'none');
      if ($('img').hasClass('first-image')) {
        $('.first-image').parent().removeClass('start');
        $imageClicked.removeClass('first-image');
      }
      if ($('img').hasClass('first-image')) {
        $('img').removeClass('first-image');
      }
    });
});

    // right arrow next
  $('.right').on('click', function() {
    var $first = $('.imageFirst').attr('src');
    var $last = $('.imageLast').attr('src');
    var $next = $('li.start').next();
    var $changeImage = $next.find('img').attr('src');
    var $classHold = $next.find('img');
    $('#imageInsert').attr('src', $changeImage);
    if ($('#imageInsert').attr('src') == $changeImage) {
      $('li').removeClass('start');
      $('img').removeClass('first-image');
      var $parent = $classHold.addClass('first-image');
      $parent.parent().addClass('start');
    } else if ($('.first-image').attr('src') == $last) {
      $('#imageInsert').attr('src', $first);
      $('li').removeClass('start');
      $('img').removeClass('first-image');
      $('.imageFirst').addClass('first-image');
      $('.imageFirst').parent().addClass('start');
    }
  });

    // left arrow prev
    $('.left').on('click', function() {
      var $first = $('.imageFirst').attr('src');
      var $last = $('.imageLast').attr('src');
      var $prev = $('li.start').prev();
      var $changeImage = $prev.find('img').attr('src');
      var $classHold = $prev.find('img');
      $('#imageInsert').attr('src', $changeImage);
      if ($('#imageInsert').attr('src') == $changeImage) {
        $('li').removeClass('start');
        $('img').removeClass('first-image');
        var $parent = $classHold.addClass('first-image');
        $parent.parent().addClass('start');
      } else if ($('.first-image').attr('src') == $first) {
        $('#imageInsert').attr('src', $last);
        $('li').removeClass('start');
        $('img').removeClass('first-image');
        $('.imageLast').addClass('first-image');
        $('.imageLast').parent().addClass('start');
    }
  });
});

$(document).keydown(function(e) {
switch(e.which) {
    case 27: // exit

    var $imageClicked = $(this);
    $('.clicked').css('display', 'none');
    $('#overlay').css('display', 'none');
    if ($('img').hasClass('first-image')) {
      $('.first-image').parent().removeClass('start');
      $imageClicked.removeClass('first-image');
    }
    if ($('img').hasClass('first-image')) {
      $('img').removeClass('first-image');
    }
    break;


    case 37: // left

    var $first = $('.imageFirst').attr('src');
    var $last = $('.imageLast').attr('src');
    var $prev = $('li.start').prev();
    var $changeImage = $prev.find('img').attr('src');
    var $classHold = $prev.find('img');
    $('#imageInsert').attr('src', $changeImage);
    if ($('#imageInsert').attr('src') == $changeImage) {
      $('li').removeClass('start');
      $('img').removeClass('first-image');
      var $parent = $classHold.addClass('first-image');
      $parent.parent().addClass('start');
    } else if ($('.first-image').attr('src') == $first) {
      $('#imageInsert').attr('src', $last);
      $('li').removeClass('start');
      $('img').removeClass('first-image');
      $('.imageLast').addClass('first-image');
      $('.imageLast').parent().addClass('start');
    }
    break;

    case 39: // right

    var $first = $('.imageFirst').attr('src');
    var $last = $('.imageLast').attr('src');
    var $next = $('li.start').next();
    var $changeImage = $next.find('img').attr('src');
    var $classHold = $next.find('img');
    $('#imageInsert').attr('src', $changeImage);
    if ($('#imageInsert').attr('src') == $changeImage) {
      $('li').removeClass('start');
      $('img').removeClass('first-image');
      var $parent = $classHold.addClass('first-image');
      $parent.parent().addClass('start');
    } else if ($('.first-image').attr('src') == $last) {
      $('#imageInsert').attr('src', $first);
      $('li').removeClass('start');
      $('img').removeClass('first-image');
      $('.imageFirst').addClass('first-image');
      $('.imageFirst').parent().addClass('start');
    }
    break;

    default: return; // exit this handler for other keys
  }
    e.preventDefault(); // prevent the default action

});

// slide down images on load
$(document).ready(function() {
  $('.photo-gallery').slideDown(2500);
});
