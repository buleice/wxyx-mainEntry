(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07e78658"],{"05c9":function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"bonus-page"},[n("div",{staticClass:"myAcount"},[n("div",{staticClass:"rule",on:{click:function(s){t.showGuize=!0}}},[n("img",{attrs:{src:"//udata.youban.com/webimg/wxyx/puintuan/bonus-rule-icon.png",alt:"奖学金规则"}})]),n("div",{staticClass:"balance"},[n("span",[t._v(t._s(t.bonus))]),n("sub",[t._v("优币")])]),n("div",{staticClass:"btn",on:{click:function(s){t.$router.push({path:"bill"})}}},[t._v("\r\n      查看明细\r\n    ")]),n("div",{staticClass:"danmaku-box"},[n("DanMaku",{attrs:{lists:t.barrage}})],1)]),n("div",{staticClass:"cash"},[n("div",[n("img",{attrs:{src:"//udata.youban.com/webimg/wxyx/puintuan/duigou.png",alt:""}}),t._v("可提现 "),n("span",[t._v(t._s(t.bonus/100))]),t._v("元")]),n("a",{attrs:{href:"/bonus/cash/center"}},[t._v("立即提现")])]),n("div",{staticClass:"share_ad"},[t._v("\r\n   分享课程获取更多奖学金\r\n ")]),n("ul",{staticClass:"canGetCourses"},t._l(t.canGetCourses,function(s){return n("li",[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.gotoUrl(s.url,s.title)}}},[n("img",{attrs:{src:s.img,alt:s.title}}),n("div",{staticClass:"infos"},[n("div",{staticClass:"title",domProps:{textContent:t._s(s.title)}}),n("div",{staticClass:"subtitle",domProps:{innerHTML:t._s(s.subtitle)}}),n("div",{staticClass:"bonus"},[t._v("预计可得奖学金："),n("span",[t._v(t._s(Number(s.bonus))+" \r\n            "),n("b",[t._v("优币")])])])])])])})),n("transition",{attrs:{name:"fade"}},[t.showGuize?n("div",{staticClass:"rule-pultop"},[n("div",{staticClass:"closeBtn",on:{click:function(s){t.showGuize=!1}}}),n("h2",[t._v("提现规则")]),n("ul",[n("li",[n("h3",[t._v("1. 什么是奖学金？")]),n("p",[t._v("奖学金是小伴龙优学商城发放给学员的积分，学员可以使用奖学金兑换各种福利。")])]),n("li",[n("h3",[t._v("2. 如何获取奖学金？")]),n("p",[t._v("目前奖学金主要通过邀请好友报名课程获得。你可以将自己正在参与的评课分享给好友，也可以直接分享推荐课程的邀请卡片分享至朋友圈，只要有好友通过你的邀请报名成功你即可获得奖学金。\r\n        "),n("br"),t._v("后续将更新更多获得奖学金的方式，敬请期待。")])]),n("li",[n("h3",[t._v("3. 奖学金有什么用？")]),n("p",[t._v("奖学金可用于兑换小伴龙优学的课程，后续将定期更新奖学金专属福利奖品；同时奖学金还可直接用于提现。")])])])]):t._e()])],1)},i=[],u=n("0c6d"),e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return t.showDanMaku?n("ul",{staticClass:"danmaku"},[n("li",{staticClass:"danmaku_box danmaku_tip"},[n("p",{domProps:{innerHTML:t._s(t.danmakuText)}})])]):t._e()},o=[],c={name:"danmaku",props:{lists:{type:Array,default:function(){return[]}}},data:function(){return{activeNum:0,danmakuText:"JIMI 获得了￥0.3奖学金",showDanMaku:!1}},watch:{lists:function(){var t=this;if(this.lists.length>0){this.showDanMaku=!0;var s=0;setInterval(function(){t.danmakuText=t.lists[s],s++,s>=t.lists.length&&(s=0)},4e3)}}}},r=c,l=(n("c6c6"),n("2877")),d=Object(l["a"])(r,e,o,!1,null,"36a757d5",null);d.options.__file="danmaku.vue";var v=d.exports,b={name:"BonusIndex",components:{DanMaku:v},data:function(){return{canGetCourses:[],bonus:0,count:0,showGuize:!1,barrage:[]}},created:function(){var t=this;new u["a"]("/shop/bonus.json","POST").returnJson().then(function(s){t.canGetCourses=s.data,t.bonus=s.bonus,t.count=s.count,t.barrage=s.barrage})},methods:{gotoUrl:function(t,s){window.location.href=t}}},_=b,f=(n("c348"),n("d2b3"),Object(l["a"])(_,a,i,!1,null,"4bbc4c8b",null));f.options.__file="bonus-index.vue";s["default"]=f.exports},4480:function(t,s,n){},c348:function(t,s,n){"use strict";var a=n("f870"),i=n.n(a);i.a},c6c6:function(t,s,n){"use strict";var a=n("fd9a"),i=n.n(a);i.a},d2b3:function(t,s,n){"use strict";var a=n("4480"),i=n.n(a);i.a},f870:function(t,s,n){},fd9a:function(t,s,n){}}]);