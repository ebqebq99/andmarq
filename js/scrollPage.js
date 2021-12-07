$(document).ready(function () {
  setParallaxScroll('section.page', '#page-indicator');
});


function setParallaxScroll(selectorPage, selectorIndicator) {
  var $page = $(selectorPage);
  var $indicator = $(selectorIndicator)
  var numPage = $('section.page').length;
  var pageNow = 0;
  var pagePrev = 0;
  var pageNext = 0;
  var wheelEvent = ('onmousewheel' in window) ? 'mousewheel' : 'DOMMouseScroll';
  var onAnimation = false;
  var onEvent = false;
  var timerId = '';

  // 현재 페이지 표시 (scroll/resize시 마다 체크)
  checkPageNow();
  $(window).on('scroll resize', function () {
    checkPageNow();
  });

  $indicator.find('> li > a').on('click', function () {
    var index = $indicator.find('> li').index($(this).parent());
    showPage(index + 1);
  });

  window.addEventListener(wheelEvent, function (e) {
    e.preventDefault();
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      onEvent = false
    }, 150);
    if (onAnimation === true || onEvent === true) return false;
    onEvent = true;
    var delta = ('onmousewheel' in window) ? (e.wheelDelta / -120) : (e.detail / 3);
    if (delta > 0) {
      showPage(pageNext);
    } else if (delta < 0) {
      showPage(pagePrev);
    }
  }, {
    passive: false
  });

  function checkPageNow() {
    var scrollAmt = $(document).scrollTop();
    var n = 0;
    $page.each(function (i) {
      var pageStart = $(this).offset().top - ($(window).height() / 2);
      var pageEnd = pageStart + $(this).outerHeight(true);
      // console.log((i + 1) + 'page range : ' + pageStart + ' ~ ' + pageEnd);
      if (scrollAmt >= pageStart && scrollAmt < pageEnd) {
        n = i + 1;
        return false;
      }
    });
    $indicator.find('> li').removeClass('on');
    $indicator.find('> li:eq(' + (n - 1) + ')').addClass('on');
    pageNow = n;
    pagePrev = (n === 1) ? 1 : (n - 1);
    pageNext = (n === numPage) ? numPage : (n + 1);

    if (n % 2 == 0) {
      $('#header').removeClass('orange');
      $('#footer').removeClass('orange');
      $('#header').addClass('white');
      $('#footer').addClass('white');
    } else {
      $('#header').removeClass('white');
      $('#footer').removeClass('white');
      $('#header').addClass('orange');
      $('#footer').addClass('orange');
    }
    // return n;
  }

  function showPage(n) {

    if (n === pageNow) return false;
    onAnimation = true;
    var scrollAmt = $page.eq(n - 1).offset().top;
    $('html, body').stop(true).animate({
      'scrollTop': scrollAmt + 'px'
    }, 500, function () {
      onAnimation = false;
    });

  }
}