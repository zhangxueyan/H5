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
    $slideDown.slideUp();
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
   $s1_switch.click(function(){
    $(this).toggleClass("active")
   })
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

      //底部bot-fixed month
      var $botMonth = $(".bot-month");
      var $botYear = $(".bot-year")
      var botDate = new Date();//   12/31
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


