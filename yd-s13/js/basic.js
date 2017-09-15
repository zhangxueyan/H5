Zepto(function($){
  var $month = $(".month");
  var $date = $(".date");
  var date = new Date();
  var getDay = date.getDay();
  var getDate = date.getDate();
  var getMonth = date.getMonth();
  switch(getDay){
   case 0:
   getDate+=3
   break;
   case 1:
   getDate+=2
   break;
   case 2:
   getDate+=1
   break;
   case 3:
   getDate+=2
   break;
   case 4:
   getDate+=1
   break;
   case 5:
   getDate+=2
   break;
   case 6:
   getDate+=1
   break;
  }
  $month.text(getMonth+1)
  $date.text(getDate)
})