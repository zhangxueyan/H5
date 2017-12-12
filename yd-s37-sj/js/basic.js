$(function(){
   // 1銆佸畨鍗撴墜鏈烘暟瀛楅敭鍥哄畾瀹氫綅澶辨晥瑙ｅ喅
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('.fot-scroll').hide();
          }
          if($(window).height()>=h){
            $('.fot-scroll').show();
          }
        });
   // 倒计时效果
      var $year = $(".year");
      var $month = $(".month");
      var $date = $(".date");
      var myDate = new Date();//鏈堟棩骞�
      var date = myDate.getDate();//鍑犲彿
      var day = myDate.getDay();//鍛ㄥ嚑 濡傛灉鏄懆7  date+7
      switch(day){
       case 0:
       myDate.setDate(date+3)
       break;
       case 1:
       myDate.setDate(date+2)
       break;
       case 2:
       myDate.setDate(date+1)
       break;
       case 3:
       myDate.setDate(date+2)
       break;
       case 4:
       myDate.setDate(date+1)
       break;
       case 5:
       myDate.setDate(date+2)
       break;
       case 6:
       myDate.setDate(date+1)
       break;
      }
      var newMonth = myDate.getMonth()+1;
      var newDate = myDate.getDate();
      $month.text(newMonth<10?'0'+newMonth:newMonth)
      $date.text(newDate<10?'0'+newDate:newDate)
      $year.text(myDate.getFullYear())
      // swiper-container1
      var mySwiper1 = new Swiper ('.swiper-container1', {
        autoplay : 3000,
        loop: true,
        slidesPerView : 2,
        centeredSlides : true,
        effect : 'coverflow',
        autoplayDisableOnInteraction : false
      })
      // s4 iframe-btn
      var $if_btn = $(".if-btn");
      $if_btn.click(function(){
        $(this).siblings("input").val("")
      })
       //s6 jishu
       function show(){
        var $s7_jishu = parseInt($(".s7-jishu").text());
         setInterval(function(){
          if($s7_jishu<99999){
            $s7_jishu = $s7_jishu +1
            $(".s7-jishu").text($s7_jishu)
          }
         },3000)
       }
      show()
      // loop-pop js
      var $popup1 = $('.popup1');
      var $popup2 = $('.popup2');
      var $pop_mask = $('.pop-mask');
      $('#element').showPopup($popup1,$pop_mask,10000);
      $(".popup-close1").click(function(){
        $('#element').hidePopup($popup1,$pop_mask);
        $('#element').showPopup($popup2,$pop_mask,15000);
      })
      $(".popup-close2").click(function(){
        $('#element').hidePopup($popup2,$pop_mask);
      })
      $(".popup1-txt").click(function(){
        var $item = $(this);
        $item.parent(".popup").hide()
        $pop_mask.hide();
      })
});