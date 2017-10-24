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
      // swiper-container1
      var mySwiper1 = new Swiper ('.swiper-container1', {
        autoplay : 3000,
        loop: true,
        slidesPerView : 3,
        centeredSlides : true,
        effect : 'coverflow',
        autoplayDisableOnInteraction : false,
        onSlideChangeEnd: function(swiper){
          $(".swiper-container1 .swiper-slide").removeClass("active");
          $(swiper.slides[swiper.activeIndex]).addClass("active")
        }
      })
      // swiper-container2
      var mySwiper2 = new Swiper ('.swiper-container2', {
        direction: 'vertical',
        loop: true,
        autoplay: 1500,
        speed:800,
        slidesPerView : 1,
        grabCursor: true,
        observe:true,
        observeParents:true,
        autoplayDisableOnInteraction : false,
      }) 
      $('.swiper-container2').mouseenter(function(){
        mySwiper2.stopAutoplay();
      }).mouseleave(function(){
        mySwiper2.startAutoplay();
      })
      // 报名截止日期
      var $month = $(".s1-month");
      var $date = $(".s1-day");
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