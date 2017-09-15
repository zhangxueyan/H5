  $(function(){
    var $nav = $(".nav-ul");
    var $nav_li = $nav.find("li");
    $nav_li.hover(function(){
      $nav_li.removeClass("active")
      $(this).addClass("active")
    })
    //循环弹窗js
    var $popup1 = $('.popup1');
    var $popup2 = $('.popup2');
    var $popup3 = $('.popup3');
    var $popup4 = $('.popup4');
    $('#element').showPopup($popup1,5000);  
    $(".popup-close1").click(function(){
      $('#element').hidePopup($popup1);
      $('#element').showPopup($popup2,5000);
    })
    $(".popup-close2").click(function(){
      $('#element').hidePopup($popup2);
      $('#element').showPopup($popup3,5000);
    })
    $(".popup-close3").click(function(){
      $('#element').hidePopup($popup3);
      $('#element').showPopup($popup4,10000);
    })
    $(".popup-close4").click(function(){
      $('#element').hidePopup($popup4);
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
    //banner轮播效果
    var mySwiper1 = new Swiper ('.swiper-container1', {
       loop: true,
       pagination: '.swiper-pagination',
       paginationClickable :true,
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       autoplay:2500
    })
    $(".swiper-container1").mouseenter(function(){
      mySwiper1.stopAutoplay()
    }).mouseleave(function(){
      mySwiper1.startAutoplay()
    })
    // 倒计时效果
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
      //底部bot-fixed month
      var $botMonth = $(".bot-month");
      if(date>27){
        $botMonth.text(myDate.getMonth()+2);
      }
      else{
        $botMonth.text(myDate.getMonth()+1);
      }
     // s5 部分
     var $s5_li =  $(".s5-li");
     $s5_li.mouseenter(function(){
      $s5_li.removeClass("active")
      var $item =$(this);
      $item.addClass("active")
     })

  })


