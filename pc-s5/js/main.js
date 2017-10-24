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

     //英文的日期/月份
     var mm = parseInt($month.text());
     var $enMonth = $(".en-month");
     switch(mm){
        case 1:
        $enMonth.text("January")
        break;
        case 2:
        $enMonth.text("February")
        break;
        case 3:
        $enMonth.text("March")
        break;
        case 4:
        $enMonth.text("April")
        break;
        case 5:
        $enMonth.text("May")
        break;
        case 6:
        $enMonth.text("June")
        break;
        case 7:
        $enMonth.text("July")
        break;
        case 8:
        $enMonth.text("August")
        break;
        case 9:
        $enMonth.text("September")
        break;
        case 10:
        $enMonth.text("October")
        break;
        case 11:
        $enMonth.text("November")
        break;
        case 12:
        $enMonth.text("December")
        break;
     }
     //英文的日期/日期
     var dd = parseInt($date.text());
     var $enDate = $(".en-date");
     switch(dd){
        case 1:
        $enDate.text("1st")
        break;
        case 2:
        $enDate.text("2nd")
        break;
        case 3:
        $enDate.text("3rd")
        break;
        case 4:
        $enDate.text("4th")
        break;
        case 5:
        $enDate.text("5th")
        break;
        case 6:
        $enDate.text("6th")
        break;
        case 7:
        $enDate.text("7th")
        break;
        case 8:
        $enDate.text("8th")
        break;
        case 9:
        $enDate.text("9th")
        break;
        case 10:
        $enDate.text("10th")
        break;
        case 11:
        $enDate.text("11th")
        break;
        case 12:
        $enDate.text("12th")
        break;
        case 13:
        $enDate.text("13th")
        break;
        case 14:
        $enDate.text("14th")
        break;
        case 15:
        $enDate.text("15th")
        break;
        case 16:
        $enDate.text("16th")
        break;
        case 17:
        $enDate.text("17th")
        break;
        case 18:
        $enDate.text("18th")
        break;
        case 19:
        $enDate.text("19th")
        break;
        case 20:
        $enDate.text("20th")
        break;
        case 21:
        $enDate.text("21st")
        break;
        case 22:
        $enDate.text("22nd")
        break;
        case 23:
        $enDate.text("23th")
        break;
        case 24:
        $enDate.text("24th")
        break;
        case 25:
        $enDate.text("25th")
        break;
        case 26:
        $enDate.text("26th")
        break;
        case 27:
        $enDate.text("27th")
        break;
        case 28:
        $enDate.text("28th")
        break;
        case 29:
        $enDate.text("29th")
        break;
        case 30:
        $enDate.text("30th")
        break;
        case 31:
        $enDate.text("31st")
        break;
      }
      //底部bot-fixed month
      var $botMonth = $(".bot-month");
      if(date>27){
        $botMonth.text(myDate.getMonth()+2);
      }
      else{
        $botMonth.text(myDate.getMonth()+1);
      }
  })


