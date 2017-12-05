  $(function(){
    //suspend
    var $close= $(".suspend-close");
    $close.click(function(){
      var $item = $(this);
      $item.parent(".suspend").addClass("active")
      $item.siblings(".suspend-open").show()
    })
    var $open = $(".suspend-open");
    $open.click(function(){
      var $item = $(this);
      $item.fadeOut()
      $item.parent(".suspend").removeClass("active")
    })
    // pop-tc
    var $popup1 = $('.popup1');
    var $popup2 = $('.popup2');
    var $popup3 = $('.popup3');
    $('#element').showPopup($popup1,5000);  
    $(".popup-close1").click(function(){
      $('#element').hidePopup($popup1);
      $('#element').showPopup($popup2,10000);
    })
    $(".popup-close2").click(function(){
      $('#element').hidePopup($popup2);
      $('#element').showPopup($popup3,10000);
    })
    $(".popup-close3").click(function(){
      $('#element').hidePopup($popup3);
    })
    var $pop_txt = $(".popup").find(".pop-txt");
    $pop_txt.click(function(){
      $(".popup").fadeOut()
    })
    //nav
   var $nav = $(".nav-list");
   var $li = $nav.find("li");
   $li.mouseenter(function(){
    var $item = $(this);
    var $slideDown = $item.find(".slideDown")
    $slideDown.slideDown();
  }).mouseleave(function(){
    var $item = $(this);
    var $slideDown = $item.find(".slideDown")
    $slideDown.fadeOut();
  })
  //banner
    var mySwiper1 = new Swiper ('.swiper-container1', {
       loop: true,
       initialSlide :1,
       pagination: '.swiper-pagination',
       paginationClickable :true,
       autoplay:3000,
       speed:1800,
       effect : 'cube',
       cube: {
        shadowScale: 0.6
       }
    })
    $(".swiper-container1").mouseenter(function(){
      mySwiper1.stopAutoplay()
    }).mouseleave(function(){
      mySwiper1.startAutoplay()
    })
    //s2
    var $s2_item = $(".s2-item");
    $s2_item.mouseenter(function(){
      $(this).find("a").slideDown(300)
    }).mouseleave(function(){
      $(this).find("a").slideUp(50)
    })
      //s6
      var $s6_tab = $(".s6-tab");
      $s6_tab.click(function(){
        var $item = $(this);
        var idx = $item.index();
        var $s6_div = $(".s6-div");
        $s6_tab.removeClass("active");
        $item.addClass("active");
        $s6_div.removeClass("active");
        $s6_div.hide();
        $s6_div.eq(idx).addClass("active");
        $s6_div.eq(idx).show()
      })
      //s6 search 点击按钮值为空了
      var $s6_btn = $(".s6-btn");
      var $input = $(".s-inp").find("input");
      $s6_btn.click(function(){
        $input.val("")
      })
   // Deadline for registration
    var $month = $(".month");
    var $date = $(".date");
    var $year = $(".year");
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
      var newMonth = myDate.getMonth()+1;
      var newDate = myDate.getDate();
      $year.text(myDate.getFullYear());
      $month.text(newMonth<10?'0'+newMonth:newMonth);
      $date.text(newDate<10?'0'+newDate:newDate);
  })


