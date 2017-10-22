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
    var mySwiper = new Swiper ('.swiper-container', {
    	initialSlide :2,
    	loop: true,
    	effect : 'fade',
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })
    //banner 侧边类目 交互
    var $side_cate= $(".side-cate");
    $side_cate.hover(function(){
    	var $cate_children = $(this).find(".cate-children");
    	$cate_children.toggle()
    })
    //mock data test
    Mock.mock('http://api.com', {
        "nav-item|1": [{
            'name': '@cname',   //中文名称
            'age|1-100': 100,   //100以内随机整数
            'birthday': '@date("yyyy-MM-dd")',  //日期
            'city': '@city(true)'   //中国城市
        }]
    });
    //JQuery方式
    $.ajax({
        url: 'http://api.com',
        dataType: 'json'
    }).done(function(data, status, xhr) {
        console.log(
            JSON.stringify(data, null, 4)
        )
    });
  })


