$(function(){
      // ios android fixed
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('.fot-scroll').hide();
          }
          if($(window).height()>=h){
            $('.fot-scroll').show();
          }
        });
      //box-fixe tc
      var $bot_tc = $(".bot-tc");
       setTimeout(function(){
        $bot_tc.show()
       },1000)
      function toggleTc(){
       $bot_tc.hide()
       setTimeout(function(){
        $bot_tc.show()
       },3000)
      }
      $(".bot-close").click(function(){
        toggleTc()
      })
});