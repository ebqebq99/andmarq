$(".tab > a").click(function () {
  var submenu = $(this).next("div");

  if (submenu.is(":visible")) {
    $(this).removeClass("open");
    submenu.slideUp();
  } else {
    $(this).addClass("open");
    submenu.slideDown();
  }
});