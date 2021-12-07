hoverGnb('#gnb > ul > li > a');
hoverGnb("#gnb > #top-menu > a");

$(window).on('resize', function () {
  hoverGnb();
});

function hoverGnb(id) {
  $(id).on('mouseenter focus', function () {
    if ($(window).width() > 769) {
      $(this).next().css({
        'display': 'block'
      });
      $(id).addClass('open');
    }
  });

  $(id).next().on('mouseleave', function () {
    if ($(window).width() > 769) {
      $(id).next().css({
        'display': 'none'
      });
      $(id).removeClass('open');
    }
  });
  $('#header').on('mouseleave', function () {
    if ($(window).width() > 769) {
      $(id).next().css({
        'display': 'none'
      });
      $(id).removeClass('open');
    }
  });
}