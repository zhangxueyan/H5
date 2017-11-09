$(function(){
// 倒计时效果
      var $year = $(".year");
      var $month = $(".month");
      var $date = $(".date");
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
      $year.text(myDate.getFullYear())
     // select options
     var $s8_btn = $(".s8-btn");
      $s8_btn.click(function(){
      var $item = $(this);
      var $sel_item = $item.parent(".s8-item");
      var $sel_items =$sel_item.parent().find(".s8-item");
      $sel_items.removeClass("active")
      $sel_item.addClass("active")
    })
});