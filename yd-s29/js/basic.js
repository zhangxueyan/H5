$(function(){
// 倒计时效果
      var $month = $(".month");
      var $date = $(".date");
      var $before_date = $(".before-date")
      var myDate = new Date();//鏈堟棩骞�
      var date = myDate.getDate();//鍑犲彿
      var day = myDate.getDay();//鍛ㄥ嚑 濡傛灉鏄懆7  date+7
      switch(day){
       case 0:
       myDate.setDate(date+3)
       break;
       case 1:
       myDate.setDate(date+2)
       break;
       case 2:
       myDate.setDate(date+1)
       break;
       case 3:
       myDate.setDate(date+2)
       break;
       case 4:
       myDate.setDate(date+1)
       break;
       case 5:
       myDate.setDate(date+2)
       break;
       case 6:
       myDate.setDate(date+1)
       break;
      }
      var newMonth = myDate.getMonth()+1;
      var newDate = myDate.getDate();
      $month.text(newMonth<10?'0'+newMonth:newMonth)
      $date.text(newDate<10?'0'+newDate:newDate)
});