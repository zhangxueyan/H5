window.onload = function() {
        // 1、安卓手机数字键固定定位失效解决
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('.bot-fixed').hide();
          }
          if($(window).height()>=h){
            $('.bot-fixed').show();
          }
        });
      // 报名截止日期
      var $month = $(".month");
      var $date = $(".date");
      var myDate = new Date();//月日年
      var date = myDate.getDate();//几号
      var day = myDate.getDay();//周几 如果是周7  date+7
      if(day == 0){
        myDate.setDate(date+3);   
      }else if(day == 1){
        myDate.setDate(date+2);
      }else if(day == 2){
        myDate.setDate(date+1);
      }else if(day == 3){
        myDate.setDate(date+2);
      }else if(day == 4){
        myDate.setDate(date+1);
      }else if(day == 5){
        myDate.setDate(date+2);
      }else if(day == 6){
        myDate.setDate(date+1);
      }
      $month.text(myDate.getMonth()+1);
      $date.text(myDate.getDate());
      //循环弹窗效果
      var $bot_tc = $(".bot-tc");
      var $bot_close = $bot_tc.find(".bot-close")
       setTimeout(function(){
        $bot_tc.show()
       },1000)
      function toggleTc(){
       $bot_tc.hide()
       setTimeout(function(){
        $bot_tc.show()
       },3000)
      }
      $bot_close.click(function(){
        toggleTc()
      })

}