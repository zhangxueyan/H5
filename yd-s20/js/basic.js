$(function(){
   // fixed-nav + iframe + Android
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('.bot-fixed').hide();
          }
          if($(window).height()>=h){
            $('.bot-fixed').show();
          }
        });
     // loop-pop js
      var $popup1 = $('.popup1');
      var $popup2 = $('.popup2');
      var $pop_mask = $('.pop-mask');
      $('#element').showPopup($popup1,$pop_mask,8000);
      $(".popup-close1").click(function(){
        $('#element').hidePopup($popup1,$pop_mask);
        $('#element').showPopup($popup2,$pop_mask,10000);
      })
      $(".popup-close2").click(function(){
        $('#element').hidePopup($popup2,$pop_mask);
      })
      $(".popup div").click(function(){
        var $item = $(this);
        $item.parent(".popup").hide()
        $pop_mask.hide();
      })
});