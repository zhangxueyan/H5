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
     $month.text(myDate.getMonth()+1)
     $date.text(myDate.getDate())
     // select options
     var $s3_btn = $(".s3-btn");
      $s3_btn.click(function(){
      var $item = $(this);
      var $sel_item = $item.parent(".s3-item");
      var $sel_items =$sel_item.parent().find(".s3-item");
      $sel_items.removeClass("active")
      $sel_item.addClass("active")
    })
});