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
  //banner
    var mySwiper1 = new Swiper ('.swiper-container1', {
       loop: true,
       initialSlide :1,
       pagination: '.swiper-pagination',
       paginationClickable :true
       // autoplay:3000
    })
    // $(".swiper-container1").mouseenter(function(){
    //   mySwiper1.stopAutoplay()
    // }).mouseleave(function(){
    //   mySwiper1.startAutoplay()
    // })

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
      $month.text(newMonth<10?'0'+newMonth:newMonth);
      $date.text(newDate<10?'0'+newDate:newDate);
      $year.text(myDate.getFullYear());

      //底部bot-fixed month
      var $botYear = $(".bot-year");
      var $botMonth = $(".bot-month");
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


