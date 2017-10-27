window.onload=function(){
     var vm = new Vue({
        el: '#app',
        data: {
           message: 'Hello',
           obj:'',
           isShowFull:false
        },
       created:function(){
         var url="https://zhangxueyan.github.io/private/xiaomi/data.json";
         $.ajax({
           url:url,
           dataType:"json",
           success:function(result){
            vm.obj = result.nav;
           }
          });
        },
        methods:{
          // nav
          showNavChild:function(item){
            item.isShow= true
            this.isShowFull = true
          },
          HideNavChild:function(item){
            item.isShow= false
            this.isShowFull = false
          }
        }
      })
}