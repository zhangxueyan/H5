window.onload = function() {
        // 1、安卓手机数字键固定定位失效解决
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('.fot-scroll').hide();
          }
          if($(window).height()>=h){
            $('.fot-scroll').show();
          }
        });
      // 2、底部滚动的信息 swiper-container2
      var mySwiper2 = new Swiper ('.swiper-container2', {
        direction: 'vertical',
        loop: true,
        slidesPerView : 1,
        loopedSlides :10,
        autoplay: 2500,
        speed:500,
        observe:true,
        observeParents:true,
        autoplayDisableOnInteraction : false
      }) 
      // 3、报名截止日期
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
}