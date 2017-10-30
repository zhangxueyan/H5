  $(function(){
    //s0鼠标经过交互
    var $s0_promo = $(".s0-promo");
    $s0_promo.hover(function(){
        $(this).toggleClass("s-active")
    })
    //s1小米单品左右滚动
    var mySwiper2 = new Swiper ('.swiper-container2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplayDisableOnInteraction : false
    })
    //s2鼠标经过显示对应的内容
    var $s2_tabs = $(".s2-tabs");
    var $s2_tab = $s2_tabs.find("a");
    var $slide = $(".swiper-container3").find(".swiper-slide");
    var mySwiper3 = new Swiper ('.swiper-container3', {
     effect : 'fade'
    })
     $s2_tab.mouseenter(function(){
        var $item = $(this);
        $s2_tab.removeClass("active")
        $item.addClass("active")
        var idx = $item.index();
        mySwiper3.slideTo(idx, 1000, false);//切换到第一个slide，速度为1秒
      })
  })


