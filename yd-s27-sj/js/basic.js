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
      // loop-pop js
      var $popup = $('.popup');
      var $mask= $(".pop-mask");
      $('#element').showPopup($popup,$mask,3000);
      $(".popup-close").click(function(){
        $('#element').hidePopup($popup,$mask);
        $('#element').showPopup($popup,$mask,15000);
      })
      $(".popup img").click(function(){
        var $item = $(this);
        $item.parent(".popup").hide()
        $mask.hide();
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
      // banner swiper
      var mySwiper1 = new Swiper ('.swiper-container1', {
        loop: true,
        // 用户操作之后是否停止play 默认true停止
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination',
        autoplay:3000
     }) 
      // s4 swiper
      var mySwiper2 = new Swiper ('.swiper-container2', {
        loop: true,
        // 用户操作之后是否停止play 默认true停止
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination',
        autoplay:5000,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
     }) 
});