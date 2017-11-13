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
      // s12
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay : 2000,
        slidesPerView : 4,
        spaceBetween : 10
      })
      $(".s12-diploma").mouseenter(function(){
        mySwiper.stopAutoplay();
      }).mouseleave(function(){
        mySwiper.startAutoplay();
      })
      //s13
        var speed=50;
        var tab=document.getElementById("demo");
        var tab1=document.getElementById("demo1");
        var tab2=document.getElementById("demo2");
        tab2.innerHTML=tab1.innerHTML;
        function Marquee(){
            if(tab2.offsetHeight-tab.scrollTop<=0)
                tab.scrollTop-=tab1.offsetHeight;
            else{
                tab.scrollTop++;
            }
        }
        var MyMar=setInterval(Marquee,speed);
        tab.onmouseover=function() {clearInterval(MyMar)};
        tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
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


