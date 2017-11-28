  $(function(){
  // Deadline for registration
    var $month = $(".month");
    var $date = $(".date");
    var myDate = new Date();
    var date = myDate.getDate();
    var day = myDate.getDay();
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
    //循环弹窗js 共弹出6次
    var $popup1 = $('.popup1');
    var $popup2 = $('.popup2');
    var $popup3 = $('.popup3');
    var $popup4 = $('.popup4');
    var $popup5 = $('.popup5');
    var $popup6 = $('.popup6');
    $('#element').showPopup($popup1,6000);  
    $(".popup-close1").click(function(){
      $('#element').hidePopup($popup1);
      $('#element').showPopup($popup3,7000);
    })
    $(".popup-close3").click(function(){
      $('#element').hidePopup($popup3);
      $('#element').showPopup($popup2,7000);
    })
    $(".popup-close2").click(function(){
      $('#element').hidePopup($popup2);
      $('#element').showPopup($popup4,10000);
    })
    $(".popup-close4").click(function(){
      $('#element').hidePopup($popup4);
      $('#element').showPopup($popup6,7000);
    })
    $(".popup-close6").click(function(){
      $('#element').hidePopup($popup6);
      $('#element').showPopup($popup5,7000);
    })
    $(".popup-close5").click(function(){
      $('#element').hidePopup($popup5);
    })
    // 点击对话之后不再弹出对话框
    var $popup_txt = $(".popup").find(".popup-txt");
    $popup_txt.click(function(){
      $(".popup").fadeOut()
    })
    // left right-slide 
    function showSuspend(){
      var t = setTimeout(function(){
        $suspend.show()
      },10000)
    }
    var $close= $(".suspend-close") 
    $close.click(function(){
      var $item = $(this);
      $item.parent(".suspend").hide()
    })
    //nav
    var $nav = $("nav");
    var $nav_a = $nav.find("a");
    $nav_a.hover(function(){
      $nav_a.removeClass("active")
      $(this).addClass("active")
    })
    //banner
    var mySwiper = new Swiper ('.swiper-container', {
       loop: true,
       pagination: '.swiper-pagination',
       paginationClickable :true,
       autoplay:2500,
       speed:1800,
       effect : 'cube',
       cube: {
        shadowScale: 0.6
       }
    })
    $(".swiper-container").mouseenter(function(){
      mySwiper.stopAutoplay()
    }).mouseleave(function(){
      mySwiper.startAutoplay()
    })
    //s3 交互效果盾牌
    var $s3_a = $(".s3-items").find("a");
    $('#element').toggleStyle($s3_a,"animated pluse")
    // s4 rotate
     var $s4_orb = $(".s4-orb");
     $s4_orb.hover(function () {
     var $li_orb = $(this).parent(".s4-orbs").find(".s4-orb");
     $li_orb.toggleClass("orb-stop")
     $(this).toggleClass("active")
    })
    //s6 交互效果 两个
    var $s6_item = $(".s6-item");
    $('#element').toggleStyle($s6_item,"animated bounce")
  })


