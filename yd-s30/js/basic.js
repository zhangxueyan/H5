$(function(){
      var mySwiper = new Swiper ('.swiper-container', {
            direction : 'vertical',
            loop: true,
            initialSlide :2
      });

      // page sel
      var $page_word = $(".page-word");
      $page_word.click(function(){
            var $item_sel = $(this).parent(".page-sel");
            var $unit_sels = $item_sel.siblings(".page-sel");
            $unit_sels.removeClass("active");
            $item_sel.addClass("active")
      })
});