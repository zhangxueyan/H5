  $(function(){
    //检测代码
    window._pt_lt = new Date().getTime();
    window._pt_sp_2 = [];
    _pt_sp_2.push('setAccount,7b4c606e');
    var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    (function() {
        var atag = document.createElement('script'); atag.type = 'text/javascript'; atag.async = true;
        atag.src = _protocol + 'js.ptengine.cn/7b4c606e.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(atag, s);
    })();
    
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
    // 倒计时效果
    var $month = $(".s1-end-month");
    var $date = $(".s1-end-date");
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
     // s4区域
     var $s4_cates = $(".s4-cates");
     var $cate = $s4_cates.find("a:not('.s4-cate-more')");
     $cate.mouseenter(function(){
      var $item = $(this);
      var $siblings = $item.siblings();
      $item.addClass("active");
      $siblings.removeClass("active");
     })

    // s5滚动毕业证
    var $diplomas = $(".s5-diplomas");
    var mySwiper1 = new Swiper ('.swiper-container1', {
      autoplay:true,
      loop: true,
      speed:20000,
      loop : true
    })
    $diplomas.mouseenter(function(){
      mySwiper1.stopAutoplay();
    }).mouseleave(function(){
      mySwiper1.startAutoplay();
    })
  })


