$(window).on('resize', function () {
  if ($(window).width() >= 769.1) {
    $('#gnb > ul > li > ul').removeAttr('style');
  }
});

// 모바일 gnb 오픈
$('#header a.menu').on('click', function () {
  $(this).toggleClass('close');
  $('#gnb').toggleClass('open');

  if ($('#gnb').hasClass("open") == true) {
    $('.gnb-box').attr({'tabindex': 0}).focus();

    $('.gnb-box').before('<a href="#"></a>').after('<a href="#"></a>');
    $('.gnb-box').prev().on('focusin', function() {
      $('.gnb-box').find('.last-focus').focus();
    });
    $('.gnb-box').next().on('focusin', function() {
      $('.gnb-box').focus();
    });
  }
  else if ($('#gnb').hasClass("open") == false) {
    $('.gnb-box').prev().remove();
    $('.gnb-box').next().remove();
  }
});


function showPage(n) {
  var scrollAmt = $('section.aboutPage:eq(' + (n - 1) + ')').offset().top;
  $('html').stop(true).animate({'scrollTop': scrollAmt}, 500, function() {
    //isBlocked = false;
  });
}