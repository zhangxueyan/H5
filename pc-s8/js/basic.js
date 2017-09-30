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
      //s1 交互效果
      var $s1_li = $(".s1-li");
      $s1_li.hover(function(){
        var $item = $(this);
        $item.toggleClass("animated bounce")
      })
      // s5交互效果
      var $s5_li = $(".s5-li");
      $s5_li.hover(function(){
        var $item = $(this);
        $item.toggleClass("hover animated swing")
      })
      //s6滚动信息
        var speed=50;//控制速度
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


