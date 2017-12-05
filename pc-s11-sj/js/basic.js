  $(function(){
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
   // left right-slide 
    var $close= $(".suspend-close") 
    $close.click(function(){
      var $item = $(this);
      $item.parent(".suspend").hide()
    })
  //pop-tc
    var $popup1 = $('.popup1');
    var $popup2 = $('.popup2');
    var $popup3 = $('.popup3');
    $('#element').showPopup($popup1,3000);  
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
    var $popup_ul = $(".popup").find("ul");
    $popup_ul.click(function(){
      $(".popup").fadeOut()
    })
  // s0
  var $s0_item = $(".s0-item");
  $s0_item.mouseenter(function(){
    var $item = $(this);
    $s0_item.removeClass("active");
    $item.addClass("active")
  })
   // s1
   var $s1_switch = $(".s1-switch");
   $s1_switch.hover(function(){
    $(this).toggleClass("active")
   })
   // s3
   var $s3_li = $(".s3-li");
   $('#element').toggleStyle($s3_li,"animated bounce");
   // s6
   var $s6_li = $(".s6-li");
   $s6_li.hover(function(){
     $(this).toggleClass("active")
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
      $year.text(myDate.getFullYear());
      $month.text(myDate.getMonth()+1);
      $date.text(myDate.getDate());

      //底部bot-fixed month
      var $botMonth = $(".bot-month");
      var $botYear = $(".bot-year")
      var botDate = new Date();// 12/31
      if(date>27){
        botDate.setDate(botDate.getDate()+5)
        $botMonth.text(botDate.getMonth()+1);
        $botYear.text(botDate.getFullYear())
      }
      else{
        $botMonth.text(botDate.getMonth()+1);
        $botYear.text(botDate.getFullYear())
      }    
  })


