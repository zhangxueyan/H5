window.onload=function(){
     var vm = new Vue({
        el: '#app',
        data: {
           message: 'Hello',
           _mySwiper3:'',
           navInfos:[
             {
              cate:'小米手机',
              isActive:false,
              isShow:false,
              cateChild:[
               {
                 isNew: true,
                 noBorder:true,
                 name: "小米MIX2",
                 price: 3299
               },
               {
                 isNew: true,
                 noBorder:false,
                 name: "小米Note3",
                 price: 2499
               }
              ]
             },
             {
              cate:'红米',
              isActive:false,
              isShow:false,
              cateChild:[
                {
                 isNew: true,
                 noBorder:true,
                 name: "红米5A",
                 price: 3299
                },
                {
                 isNew: true,
                 noBorder:false,
                 name: "红米4X",
                 price: 3299
                }
              ]
             },
             {
              cate:'笔记本',
              isActive:false,
              isShow:false,
              cateChild:[
                {
                 isNew: true,
                 noBorder:true,
                 name: "小米笔记本12.5",
                 price: 3299
                },
                {
                 isNew: true,
                 noBorder:false,
                 name: "小米笔记本13.5",
                 price: 3299
                }
              ]
             },
             {
              cate:'电视',
              isActive:false,
              isShow:false,
              cateChild:[
                {
                 isNew: true,
                 noBorder:true,
                 name: "小米电视4",
                 price: 3299
                },
                {
                 isNew: true,
                 noBorder:false,
                 name: "小米电视4A",
                 price: 3299
                }
              ]
             },
             {
              cate:'盒子',
              isActive:false,
              isShow:false,
              cateChild:[
                {
                 isNew: true,
                 noBorder:true,
                 name: "小米盒子3A",
                 price: 3299
                },
                {
                 isNew: true,
                 noBorder:false,
                 name: "小米盒子3S",
                 price: 3299
                }
              ]
             },
             {
              cate:'新品',
              isActive:false
             },
             {
              cate:'路由器',
              isActive:false,
              isShow:false,
              cateChild:[
                {
                 isNew: true,
                 noBorder:true,
                 name: "小米路由3A",
                 price: 3299
                },
                {
                 isNew: true,
                 noBorder:false,
                 name: "小米路由3G",
                 price: 3299
                }
              ]
             },
             {
              cate:'智能硬件',
              isActive:false,
              isShow:false,
              cateChild:[
                {
                 isNew: true,
                 noBorder:true,
                 name: "小米无人机",
                 price: 3299
                },
                {
                 isNew: true,
                 noBorder:false,
                 name: "小米手环",
                 price: 3299
                }
              ]
             },
             {
              cate:'服务',
              isActive:false
             },
             {
              cate:'社区',
              isActive:false
             },
           ],
           isShowFull:false,
           isShowMask:false,
           headNavs:['小米商城','MUI','米聊','游戏','多看阅读','云服务','金融','米币','小米商城手机版','问题反馈','selectRegion'],
           regInfos:['登录','注册','消息通知'],
           banNavs:[
              {
                cate:'手机 电话卡',
                isShow:false,
                cateChild:[{
                  name:'小米5s1'
                }]
              },
              {
                cate:'笔记本',
                isShow:false,
                cateChild:[{
                  name:'小米5s2'
                }]
              },
              {
                cate:'电视盒子',
                isShow:false,
                cateChild:[{
                  name:'小米5s3'
                }]
              },
              {
                cate:'路由器 智能硬件',
                isShow:false,
                cateChild:[{
                  name:'小米5s4'
                }]
              },
              {
                cate:'移动电源',
                isShow:false,
                cateChild:[{
                  name:'小米5s5'
                }]
              },
              {
                cate:'耳机音响',
                isShow:false,
                cateChild:[{
                  name:'小米5s6'
                }]
              },
              {
                cate:'保护套',
                isShow:false,
                cateChild:[{
                  name:'小米5s7'
                }]
              },
              {
                cate:'线材',
                isShow:false,
                cateChild:[{
                  name:'小米5s8'
                }]
              },
              {
                cate:'箱包',
                isShow:false,
                cateChild:[{
                  name:'小米5s9'
                }]
              },
              {
                cate:'生活周边',
                isShow:false,
                cateChild:[{
                  name:'小米5s10'
                }]
              }
           ],
           banPics:[
             {imgUrl:"./images/xm_03.jpg"},
             {imgUrl:"./images/xm_04.jpg"},
             {imgUrl:"./images/xm_05.jpg"}
           ],
           s0Pics:[
             {imgUrl:"./images/xm_07.jpg"},
             {imgUrl:"./images/xm_07.jpg"},
             {imgUrl:"./images/xm_07.jpg"}
           ],
           s1Infos:[
              {
                s1Childs:[
                {name:'小米note3',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:true,type:'type1'},
                {name:'小米note3',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type2'},
                {name:'小米note3',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type3'},
                {name:'小米note3',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type4'},
                {name:'小米note3',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type5'}
                ]
              },
              {
                s1Childs:[
                {name:'小米note4',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:true,type:'type1'},
                {name:'小米note4',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type2'},
                {name:'小米note4',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type3'},
                {name:'小米note4',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type4'},
                {name:'小米note4',desc:'1600万美颜自拍，2倍变焦双摄',price:2499,imgUrl:"./images/xm_08.jpg",noMl:false,type:'type5'}
                ]
              }
           ],
           s2Infos:{
              s2Tabs:[
               {cate:'热门',isActive:true},
               {cate:'电视',isActive:false},
               {cate:'电脑',isActive:false},
               {cate:'家居',isActive:false}
              ],
              s2Divs:[
                {
                 s2Div:[
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                  ]
                },
                {
                 s2Div:[
                   {name:'第2屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                  ]
                },
                {
                 s2Div:[
                   {name:'第3屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                  ]
                },
                {
                 s2Div:[
                   {name:'第4屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                   {name:'第1屏小米笔记本Air 13.3" i7处理器',desc:'Intel酷睿i7处理器，8GB内存+256GB',
                   price:5999,NoMt:true,isNew:true,isFreeFreight:false,isShowEva:false,evaluate:'重要的事情说三遍,超爱客服妹妹',author:'顺其自然'},
                  ]
                }
             ]
           },
           s3Infos:{
              s3Div1:[
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'}
               ],
              s3Div2:[
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'}
               ],
              s3Div3:[
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'}
               ],
              s3Div4:[
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'},
                {name:"哈利·波特与被诅咒的孩子",brief:"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！",
                price:25.99,imgUrl:'./images/xm_06.jpg'}
               ]
           },
           s4Infos:[
             {imgUrl:'./images/xm_11.jpg',subt:'雷军与斯塔克打造全面屏2.0',
             brief:'一场关于小米MIX 2 极致工艺的巅峰对话',isShowVideo:false,
             videoUrl:'./videos/shipin1.mp4',posterUrl:'./images/xm_12.jpg',noMl:true},
             {imgUrl:'./images/xm_13.jpg',subt:'雷军与斯塔克打造全面屏2.0',
             brief:'一场关于小米MIX 2 极致工艺的巅峰对话',isShowVideo:false,
             videoUrl:'./videos/shipin2.mp4',posterUrl:'./images/xm_14.jpg',noMl:false},
             {imgUrl:'./images/xm_11.jpg',subt:'雷军与斯塔克打造全面屏2.0',
             brief:'一场关于小米MIX 2 极致工艺的巅峰对话',isShowVideo:false,
             videoUrl:'./videos/shipin1.mp4',posterUrl:'./images/xm_12.jpg',noMl:false},
             {imgUrl:'./images/xm_13.jpg',subt:'雷军与斯塔克打造全面屏2.0',
             brief:'一场关于小米MIX 2 极致工艺的巅峰对话',isShowVideo:false,
             videoUrl:'./videos/shipin2.mp4',posterUrl:'./images/xm_14.jpg',noMl:false}
           ],
           fotInfos:{
              advs:[
                {name:'预约维修服务',noBorder:true,isActive:false},
                {name:'7天无理由退货',noBorder:false,isActive:false},
                {name:'15天免费换货',noBorder:false,isActive:false},
                {name:'满150元包邮',noBorder:false,isActive:false},
                {name:'520余家售后网点',noBorder:false,isActive:false}
              ],
              mid:[
               {
                subt:'帮助中心',
                noMl:true,
                navs:[{name:'账户管理'},{name:'购物指南'},{name:'订单操作'}]
               },
               {
                subt:'帮助中心',
                noMl:false,
                navs:[{name:'账户管理'},{name:'购物指南'},{name:'订单操作'}]
               },
               {
                subt:'帮助中心',
                noMl:false,
                navs:[{name:'账户管理'},{name:'购物指南'},{name:'订单操作'}]
               },
               {
                subt:'帮助中心',
                noMl:false,
                navs:[{name:'账户管理'},{name:'购物指南'},{name:'订单操作'}]
               },
               {
                subt:'帮助中心',
                noMl:false,
                navs:[{name:'账户管理'},{name:'购物指南'},{name:'订单操作'}]
               },
               {
                subt:'帮助中心',
                noMl:false,
                navs:[{name:'账户管理'},{name:'购物指南'},{name:'订单操作'}]
               }
              ]
           }
        },
        beforeCreate:function(){
          console.log("创建前")
          console.log(this.message)
          console.log(this.$el) 
        },
        created:function(){
         console.log("创建后")
         console.log(this.message)
         console.log(this.$el)
        },
        beforeMount:function(){
          console.log("挂载前")
          console.log(this.message)
          console.log(this.$el) 
        },
        mounted:function(){
          console.log(this.s3Infos)
          //banner图轮播
          var mySwiper1 = new Swiper ('.swiper-container1', {
            initialSlide :2,
            loop: true,
            effect : 'fade',
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplayDisableOnInteraction : false,
            paginationClickable :true
          })
          //s1小米单品左右滚动
          var mySwiper2 = new Swiper ('.swiper-container2', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplayDisableOnInteraction : false
          })
          //s2鼠标经过显示对应的内容
          var mySwiper3 = new Swiper ('.swiper-container3', {
             effect : 'fade'
          })
          this._mySwiper3 = mySwiper3
          //s3鼠标经过显示对应的内容 共4个swiper 分别是4 5 6 7
          var mySwiper4 = new Swiper ('.swiper-container4', {
           pagination: '.swiper-pagination',
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           autoplayDisableOnInteraction : false,
           paginationClickable :true
         })
          var mySwiper5 = new Swiper ('.swiper-container5', {
           pagination: '.swiper-pagination',
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           autoplayDisableOnInteraction : false,
           paginationClickable :true
         })
         var mySwiper6 = new Swiper ('.swiper-container6', {
           pagination: '.swiper-pagination',
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           autoplayDisableOnInteraction : false,
           paginationClickable :true
         })
          var mySwiper7 = new Swiper ('.swiper-container7', {
           pagination: '.swiper-pagination',
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           autoplayDisableOnInteraction : false,
           paginationClickable :true
         })
        },
        beforeUpdate:function(){
           console.log("更新前")
        },
        updated:function(){
           console.log("更新后")
        },
        beforeDestroy:function(){
          console.log("销毁前")
        },
        destroyed:function(){
          console.log("销毁后")
        },
        methods:{
          // nav
          showNavChild:function(item){
            if(item.cateChild){
              item.isShow= true
              this.isShowFull = true
            }
            item.isActive= true
          },
          hideNavChild:function(item){
            item.isShow= false
            this.isShowFull = false
            item.isActive= false
          },
          // banner
          showBanChild:function(item){
            item.isShow= true
          },
          hideBanChild:function(item){
            item.isShow= false
          },
          // s2
          slideToPage:function(idx,s2Tab){
            this._mySwiper3.slideTo(idx, 1000, false) //切换到第一个slide，速度为1秒
            this.s2Infos.s2Tabs.forEach(function(item){
                 item.isActive = false
                 console.log(item)
             })
            s2Tab.isActive = true
          },
          showEva:function(item){
             item.isShowEva = true
          },
          hideEva:function(item){
             item.isShowEva = false
          },
          //s4
          showVideo:function(item){
            item.isShowVideo =true
            this.isShowMask=true
          },
          hideVideo:function(item){
            item.isShowVideo =false
            this.isShowMask=false
          },
          //footer
          addStyle:function(item){
            this.fotInfos.advs.forEach(function(item){
              item.isActive = false
            })
             item.isActive =true
          },
          redStyle:function(item){
            item.isActive =false
          }
        }
      })
}