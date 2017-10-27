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
      //底部bot-fixed month
      var $botMonth = $(".bot-month");
      var $botYear = $(".bot-year")
      var botDate = new Date();//   12/31
      if(date>27){
        botDate.setMonth(botDate.getMonth()+1)
        $botMonth.text(botDate.getMonth()+1);
        $botYear.text(botDate.getFullYear())
      }
      else{
        $botMonth.text(botDate.getMonth()+1);
        $botYear.text(botDate.getFullYear())
      }
    //s5 交互效果 两个
    var $s5_li = $(".s5-li");
    $('#element').toggleStyle($s5_li,"animated bounce")
  })


