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
        // loop-pop js
      var $popup = $('.popup');
      var $pop_mask= $(".pop-mask");
      $('#element').showPopup($popup,$pop_mask,3000);
      $(".popup-close").click(function(){
        $('#element').hidePopup($popup,$pop_mask);
        $('#element').showPopup($popup,$pop_mask,15000);
      })
      $(".popup img").click(function(){
        var $item = $(this);
        $item.parent(".popup").hide()
        $pop_mask.hide();
      })
       // pop time
       function show(){
       var aa =new Date();
       var hh = aa.getHours();
       var mm = aa.getMinutes();
       $(".hours").text(hh<10?'0'+hh:hh)
       $(".minutes").text(mm<10?'0'+mm:mm)
       }
      setInterval(show,1000)
      //bot-popup循环弹窗效果
      var $bot_tc = $(".bot-tc");
      $('#element').showPopup($bot_tc,$bot_tc,1000);
      $(".bot-close").click(function(){
        $('#element').hidePopup($bot_tc,$bot_tc);
        $('#element').showPopup($bot_tc,$bot_tc,3000);
      })
}