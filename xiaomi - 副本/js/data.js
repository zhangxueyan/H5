window.onload=function(){
     var vm = new Vue({
        el: '#app',
        data: {
           message: 'Hello',
           obj:''
        },
       created:function(){
         var url="https://zhangxueyan.github.io/private/xiaomi/data.json";
         $.ajax({
           url:url,
           dataType:"json",
           success:function(result){
            vm.obj = result
           }
          });
        }
      })
}