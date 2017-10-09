  $(function(){
  // 报名截止日期
    var $month = $(".month");
    var $date = $(".date");
    var myDate = new Date();//鏈堟棩骞�
    var date = myDate.getDate();//鍑犲彿
    var day = myDate.getDay();//鍛ㄥ嚑 濡傛灉鏄懆7  date+7
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
      //banner 交互效果
      var $ban_btn = $(".ban-dl").find("a");
      setTimeout(function(){
        $ban_btn.removeClass("animated bounceInLeft s-step2 bounceInRight s-step3")
      },2000)
      $('#element').toggleStyle($ban_btn,"animated pulse")
      //s1 交互效果
      var $s1_li = $(".s1-li");
      $('#element').toggleStyle($s1_li,"animated bounce")
      //s3 交互效果
      var $s3_li = $(".s3-li");
      $('#element').toggleStyle($s3_li,"animated bounce")
      //s4 交互效果
      var $s4_li = $(".s4-li");
      $('#element').toggleStyle($s4_li,"animated pulse")
      // s5交互效果
      var $s5_li = $(".s5-li");
      $('#element').toggleStyle($s5_li,"hover animated swing")
      // s7交互效果
      var $s7_li = $(".s7-li");
      $('#element').toggleStyle($s7_li,"animated pulse")
      //s6滚动信息
        var speed=30;//控制速度
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
        //定时器
        var MyMar=setInterval(Marquee,speed);
        //鼠标滑过停止滚动
        tab.onmouseover=function() {clearInterval(MyMar)};
        //鼠标滑出继续滚动
        tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)}; 

      //s8滚动的老师信息
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView : 5,//'auto'
        spaceBetween : 20,
        autoplay :1000,
        speed:800
      })
      $('.swiper-container').mouseenter(function(){
        mySwiper.stopAutoplay();
      }).mouseleave(function(){
        mySwiper.startAutoplay();
      })
  })


