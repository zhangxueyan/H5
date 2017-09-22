$(function(){
   var $s3_btn = $(".s3-btn");
    $s3_btn.click(function(){
      var $item = $(this);
      var $item_p = $item.parent("p");
      var $item_sel = $item_p.parent(".s3-select");
      var $sel_items = $item_sel.find("p");
      $sel_items.removeClass("active")
      $item_p.addClass("active")
      var $all_items_active = $(".s3-sel").find(".s3-item.active");
      if($all_items_active.length==3){
       $(".see-result").show()
       }
    })
    // 点击不同的tab显示不同的结果
    var $s3_results =  $(".s3-results");
    var $s3_result = $s3_results.find(".s3-result");
    $(".see-result").click(function(){
        $s3_results.show()
        $s3_result.hide()
        if($(".s3-item1").hasClass("active")){
          $(".s3-result1").show()
        }
        if($(".s3-item2").hasClass("active")){
          $(".s3-result2").show()
        }
        if($(".s3-item3").hasClass("active")){
          $(".s3-result3").show()
        }
        if($(".s3-item4").hasClass("active")){
          $(".s3-result4").show()
        }
        if($(".s3-item5").hasClass("active")){
          $(".s3-result5").show()
        }
        if($(".s3-item6").hasClass("active")){
          $(".s3-result6").show()
        }
    })
})