(function($){
  $.fn.hidePopup = function (sel) {
    sel.hide()
  };
  $.fn.showPopup = function (sel,time) {
    setTimeout(function(){
      sel.show()
    },time)
  };
}(jQuery));