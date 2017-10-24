$(function () {
    var nowimg = 0;
    $(".navli").hover(function () {
        if (!$(this).children(".slideDown").is(":animated")) {
            $(this).children(".slideDown").slideDown();
            $(this).siblings().children(".slideDown").slideUp();
        }
    }, function () {
        $(this).children(".slideDown").slideUp();
    });

      // 自动日期以及底部领取计划的
      var $month = $(".month");
	  var $date = $(".day");
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
      //bot-fixed month
      var $botMonth = $(".bot-month");
      if(date>27){
      	$botMonth.text(myDate.getMonth()+2);
      }else{
      	$botMonth.text(myDate.getMonth()+1);
      }

});