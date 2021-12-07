function openLayerPopup(id, closenum, returnElement){
  var $popup = $("#"+id);
  var $close = $("#close-"+closenum);
  var $mask = $(".layer-mask");
  var $artistDetail = $(".artist-detail");
  var $button = $(returnElement);

  $artistDetail.addClass("on");
  $mask.addClass("on");
  $popup.addClass("on");
  $close.addClass("on");

  $popup.prepend('<a href="#" class="start ir-hidden">팝업창 시작</a>');
  $popup.prepend('<a href="#" class="goto-end ir-hidden">팝업창 시작</a>');
   
  $popup.append('<a href="#" class="end ir-hidden">팝업창 끝</a>');
  $popup.append('<a href="#" class="goto-start ir-hidden">팝업창 끝</a>');
  
  $popup.find("a.start").trigger("focus");
  
  $popup.find(".close").on("click", function(){
    gotoTopEnd();
    $popup.find(".close").off("click");
  });

  $popup.find("a.goto-end").on("focus", function(){
    $popup.find("a.end").trigger("focus");
  });
  $popup.find("a.goto-start").on("focus", function(){
    $popup.find("a.start").trigger("focus");
  });

  function gotoTopEnd(){
    var scrollAmt = $(document).scrollTop();
    if(scrollAmt!=0){
      $("html, body").animate({ scrollTop: 0 }, "slow", function(){
        setTimeout(function(){
          popupClose();
        }, 500);
      });
    }
    else {
      popupClose();
    }
  }

  function popupClose(){
    $button.trigger("focus");
    $popup.find("a.start, a.end, a.goto-end, a.goto-start").remove();
    $popup.removeClass("on");
    $mask.removeClass("on");
    $close.removeClass("on");
  };

}