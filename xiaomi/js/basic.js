  $(function(){
    var $nav_item = $(".nav-item");
    var $nav_full = $(".nav-full");
    $nav_item.hover(function(){
    	var $nav_children = $(this).find(".nav-children");
    	if($nav_children.length){
         $nav_children.toggle()
         $nav_full.toggle()
    	}
    })
    // nav ending
    var mySwiper1 = new Swiper ('.swiper-container1', {
    	initialSlide :2,
    	loop: true,
    	effect : 'fade',
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplayDisableOnInteraction : false,
        paginationClickable :true
    })
    //banner 侧边类目 交互
    var $side_cate= $(".side-cate");
    $side_cate.hover(function(){
    	var $cate_children = $(this).find(".cate-children");
    	$cate_children.toggle()
    })
    //s0鼠标经过交互
    var $s0_promo = $(".s0-promo");
    $s0_promo.hover(function(){
        $(this).toggleClass("s-active")
    })
    //s1小米单品左右滚动
    var mySwiper2 = new Swiper ('.swiper-container2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplayDisableOnInteraction : false
    })
    //s2鼠标经过显示对应的内容
    var $s2_tabs = $(".s2-tabs");
    var $s2_tab = $s2_tabs.find("a");
    var $slide = $(".swiper-container3").find(".swiper-slide");
    var mySwiper3 = new Swiper ('.swiper-container3', {
     effect : 'fade'
    })
     $s2_tab.mouseenter(function(){
        var $item = $(this);
        $s2_tab.removeClass("active")
        $item.addClass("active")
        var idx = $item.index();
        mySwiper3.slideTo(idx, 1000, false);//切换到第一个slide，速度为1秒
      })
  })


