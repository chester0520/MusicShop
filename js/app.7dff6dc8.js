(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"js/"+({"AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service":"AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service","AdminNews~AdminOrders~AdminProducts~cart~order":"AdminNews~AdminOrders~AdminProducts~cart~order",AdminNews:"AdminNews",AdminOrders:"AdminOrders",AdminProducts:"AdminProducts",cart:"cart",login:"login",personal:"personal",product:"product",register:"register",service:"service",order:"order",aboutus:"aboutus",admin:"admin",news:"news",productlist:"productlist",userinfo:"userinfo"}[e]||e)+"."+{"AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service":"19de3b03","AdminNews~AdminOrders~AdminProducts~cart~order":"509bcc65",AdminNews:"6eca9a56",AdminOrders:"4fb84061",AdminProducts:"969a41b6",cart:"3d5e34e0",login:"0027dfdf",personal:"429f75f4",product:"cd8641f6",register:"1752a3be",service:"dd2eb15d",order:"13671533",aboutus:"cf8e110e",admin:"6b83d629",news:"0b8b8e36",productlist:"7466ee85",userinfo:"ffa13c71"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0e21":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("q-layout",{attrs:{view:"hHh lpR fff"}},[r("Header"),r("q-page-container",[r("router-view",{key:e.$route.fullPath})],1),r("Footer")],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Header"}},[r("q-header",{attrs:{elevated:""}},[r("div",{staticClass:"container"},[r("q-toolbar",[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:e.image}})])],1),r("div",{staticClass:"column"},[r("div",{staticClass:"row"},[r("q-btn",{attrs:{flat:"",round:"",icon:"person"}},[r("q-menu",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-list",{staticStyle:{"min-width":"100px"}},[e.user.islogin?e._e():r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/login"}},[e._v("登入")])],1)],1),e.user.islogin?e._e():r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/register"}},[e._v("註冊")])],1)],1),e.user.islogin&&!e.user.isAdmin?r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/userinfo/personal"}},[e._v("會員專區")])],1)],1):e._e(),e.user.islogin&&e.user.isAdmin?r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/admin/AdminNews"}},[e._v("管理專區")])],1)],1):e._e(),e.user.islogin?r("q-item",{attrs:{clickable:""}},[r("q-item-section",{on:{click:e.logout}},[e._v("登出")])],1):e._e()],1)],1)],1),r("router-link",{attrs:{to:"/cart"}},[r("q-btn",{attrs:{flat:"",round:"",icon:"shopping_cart"}})],1),r("q-btn",{staticClass:"lt-md",attrs:{flat:"",round:"",icon:"menu"}},[r("q-menu",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-list",{staticStyle:{"min-width":"100px"}},[r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/"}},[e._v("首頁")])],1)],1),r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/news"}},[e._v("最新消息")])],1)],1),r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/productlist"}},[e._v("商品列表")])],1)],1),r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/aboutus"}},[e._v("關於我們")])],1)],1)],1)],1)],1)],1),r("div",{staticClass:"navbar row gt-sm"},[r("router-link",{attrs:{to:"/"}},[r("q-btn",{attrs:{flat:""}},[e._v("首頁")])],1),r("router-link",{attrs:{to:"/news"}},[r("q-btn",{attrs:{flat:""}},[e._v("最新消息")])],1),r("router-link",{attrs:{to:"/productlist"}},[r("q-btn",{attrs:{flat:""}},[e._v("商品列表")])],1),r("router-link",{attrs:{to:"/aboutus"}},[r("q-btn",{attrs:{flat:""}},[e._v("關於我們")])],1)],1)])])],1)])],1)},i=[],c=r("1da1"),l=(r("96cf"),{name:"Header",data:function(){return{image:"".concat(Object({VUE_APP_API:"https://zakkmusicshop.herokuapp.com",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files//專題/ZAKK.png")}},methods:{logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.delete("/users/logout",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:e.$store.commit("logout"),e.$swal({icon:"success",title:"登出成功",text:"期待下次見面"}),"/"!==e.$route.path&&e.$router.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"發生錯誤"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.$store.state.jwt.token.length){t.next=2;break}return t.abrupt("return");case 2:if(r=Date.now()-e.$store.state.jwt.received,t.prev=3,!(r>5184e5)){t.next=10;break}return t.next=7,e.axios.post("/users/extend",{},{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 7:n=t.sent,o=n.data,e.$store.commit("extend",o.result);case 10:return t.next=12,e.axios.get("/users/",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 12:a=t.sent,s=a.data,e.$store.commit("getinfo",s.result),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](3),e.$store.commit("logout");case 20:case"end":return t.stop()}}),t,null,[[3,17]])})))()}}),u=l,d=r("2877"),m=r("e359"),p=r("65c6"),g=r("9c40"),f=r("4e73"),h=r("1c1c"),v=r("66e5"),b=r("4074"),k=r("93dc"),w=r.n(k),A=Object(d["a"])(u,s,i,!1,null,null,null),q=A.exports;w()(A,"components",{QHeader:m["a"],QToolbar:p["a"],QBtn:g["a"],QMenu:f["a"],QList:h["a"],QItem:v["a"],QItemSection:b["a"]});var y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Footer"}},[r("q-footer",{attrs:{elevated:""}},[r("div",{staticClass:"container"},[r("p",[e._v("網站為練習用，圖片皆取自網路")]),r("p",[e._v("Copyright © 2021")])])])],1)},x=[],_=r("7ff0"),P={},C=Object(d["a"])(P,y,x,!1,null,null,null),O=C.exports;w()(C,"components",{QFooter:_["a"]});var j={components:{Header:q,Footer:O}},N=j,$=r("4d5a"),S=r("09e3"),Q=Object(d["a"])(N,o,a,!1,null,null,null),E=Q.exports;w()(Q,"components",{QLayout:$["a"],QPageContainer:S["a"]});var z=r("9483");Object(z["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var R=r("8c4f"),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("q-carousel",{attrs:{animated:"",navigation:"",infinite:"",autoplay:e.autoplay,arrows:"","transition-prev":"slide-right","transition-next":"slide-left"},on:{mouseenter:function(t){e.autoplay=!1},mouseleave:function(t){e.autoplay=!0}},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[r("q-carousel-slide",{attrs:{name:1,"img-src":e.image.carousel1}}),r("q-carousel-slide",{attrs:{name:2,"img-src":e.image.carousel2}}),r("q-carousel-slide",{attrs:{name:3,"img-src":e.image.carousel3}}),r("q-carousel-slide",{attrs:{name:4,"img-src":e.image.carousel4}})],1),r("div",{staticClass:"container"},[r("h4",[e._v("精選商品")]),r("div",{staticClass:"row justify-center"},e._l(e.products,(function(t){return r("div",{key:t._id,staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/"+t._id}},[r("q-card",{staticClass:"q-mx-md q-mb-xl q-pa-md homeProduct"},[r("q-card-section",{staticClass:"q-mb-md",staticStyle:{height:"75%"}},[r("q-img",{attrs:{src:t.image}})],1),r("q-card-section",{staticClass:"text-center",staticStyle:{height:"20%"}},[r("div",{staticClass:"text-subtitle1"},[e._v(e._s(t.name))]),r("div",{staticClass:"text-subtitle2"},[e._v("NT$"+e._s(t.price))])])],1)],1)],1)})),0)]),r("div",{staticClass:"container q-mb-xl"},[r("h4",[e._v("商品分類")]),r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category1"},on:{click:function(t){e.link="category1"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:e.image.category1}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[e._v("樂器")])])],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category2"},on:{click:function(t){e.link="category2"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:e.image.category2}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[e._v("音響")])])],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category3"},on:{click:function(t){e.link="category3"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:e.image.category3}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[e._v("效果器")])])],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category4"},on:{click:function(t){e.link="category4"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:e.image.category4}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[e._v("週邊耗材")])])],1)],1)],1)])])],1)},I=[],L=(r("9911"),r("d81d"),r("99af"),r("e915")),B={data:function(){return{slide:1,autoplay:!0,image:{carousel1:"".concat("https://zakkmusicshop.herokuapp.com","/files/carousel1.jpg"),carousel2:"".concat("https://zakkmusicshop.herokuapp.com","/files/carousel2.jpg"),carousel3:"".concat("https://zakkmusicshop.herokuapp.com","/files/carousel3.jpg"),carousel4:"".concat("https://zakkmusicshop.herokuapp.com","/files/carousel4.jpg"),category1:"".concat("https://zakkmusicshop.herokuapp.com","/files/樂器.jpg"),category2:"".concat("https://zakkmusicshop.herokuapp.com","/files/音響.jpg"),category3:"".concat("https://zakkmusicshop.herokuapp.com","/files/效果器.jpg"),category4:"".concat("https://zakkmusicshop.herokuapp.com","/files/週邊.jpg")},products:[],link:""}},methods:{showCategory:function(){return this.$store.commit("showCategory",this.link)}},components:{ProductCard:L["a"]},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/products/random");case 3:r=t.sent,n=r.data,e.products=n.result.map((function(e){return e.image&&(e.image="".concat("https://zakkmusicshop.herokuapp.com","/files/").concat(e.image)),e})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},H=B,D=r("880c"),F=r("62cd"),M=r("f09f"),U=r("a370"),J=r("068f"),K=Object(d["a"])(H,T,I,!1,null,null,null),V=K.exports;w()(K,"components",{QCarousel:D["a"],QCarouselSlide:F["a"],QCard:M["a"],QCardSection:U["a"],QImg:J["a"]});var Z=r("5530"),G=(r("b0c0"),r("2f62")),W=r("0e44");n["a"].use(G["a"]);var X=new G["a"].Store({state:{jwt:{token:"",received:0},user:{account:"",name:"",phone:"",address:"",role:0},category:"all"},mutations:{login:function(e,t){e.jwt.token=t.token,e.jwt.received=(new Date).getTime(),e.user.account=t.account,e.user.name=t.name,e.user.phone=t.phone,e.user.address=t.address,e.user.role=t.role},logout:function(e){e.jwt={token:"",received:0},e.user={account:"",name:"",phone:"",address:"",role:0}},extend:function(e,t){e.jwt.token=t,e.jwt.received=(new Date).getTime()},getinfo:function(e,t){e.user.account=t.account,e.user.name=t.name,e.user.phone=t.phone,e.user.address=t.address,e.user.role=t.role},showCategory:function(e,t){e.category=t}},actions:{},modules:{},getters:{user:function(e){return Object(Z["a"])({islogin:e.user.account.length>0,isAdmin:1===e.user.role},e.user)}},plugins:[Object(W["a"])()]});n["a"].use(R["a"]);var Y=[{path:"/",name:"Home",component:V,meta:{title:"查克樂器"}},{path:"/cart",name:"Cart",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("cart")]).then(r.bind(null,"b789"))},meta:{login:!0,title:"購物車 | 查克樂器"}},{path:"/news",name:"News",component:function(){return r.e("news").then(r.bind(null,"a2f9"))},meta:{title:"最新消息 | 查克樂器"}},{path:"/productlist",name:"Productlist",component:function(){return r.e("productlist").then(r.bind(null,"578c"))},meta:{title:"商品列表 | 查克樂器"}},{path:"/aboutus",name:"Aboutus",component:function(){return r.e("aboutus").then(r.bind(null,"4047"))},meta:{title:"關於我們 | 查克樂器"}},{path:"/login",name:"Login",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("login")]).then(r.bind(null,"a55b"))},meta:{title:"登入 | 查克樂器"}},{path:"/register",name:"Register",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("register")]).then(r.bind(null,"73cf"))},meta:{title:"註冊 | 查克樂器"}},{path:"/:id",name:"Product",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("product")]).then(r.bind(null,"d2f1"))},meta:{title:"商品內容 | 購物網"}},{path:"/userinfo",name:"Userinfo",component:function(){return r.e("userinfo").then(r.bind(null,"d246"))},meta:{title:"會員專區 | 查克樂器",login:!0},children:[{path:"personal",name:"Personal",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("personal")]).then(r.bind(null,"90ab"))},meta:{title:"個人資料修改 | 查克樂器",login:!0}},{path:"order",name:"Order",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("order")]).then(r.bind(null,"cf2a"))},meta:{title:"訂單查詢 | 查克樂器",login:!0}},{path:"service",name:"Service",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("service")]).then(r.bind(null,"e2f8"))},meta:{title:"個人資料修改 | 查克樂器",login:!0}}]},{path:"/admin",name:"Admin",component:function(){return r.e("admin").then(r.bind(null,"3530"))},meta:{admin:!0,login:!0,title:"後台管理 | 查克樂器"},children:[{path:"AdminProducts",name:"AdminProducts",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("AdminProducts")]).then(r.bind(null,"aa93"))},meta:{admin:!0,login:!0,title:"商品管理 | 查克樂器"}},{path:"AdminOrders",name:"AdminOrders",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("AdminOrders")]).then(r.bind(null,"ec5c"))},meta:{admin:!0,login:!0,title:"訂單管理 | 查克樂器"}},{path:"AdminNews",name:"AdminNews",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("AdminNews")]).then(r.bind(null,"afb5"))},meta:{admin:!0,login:!0,title:"最新消息管理 | 查克樂器"}}]}],ee=new R["a"]({routes:Y});ee.beforeEach((function(e,t,r){e.meta.login&&0===X.state.user.account.length?r("/login"):e.meta.admin&&1!==X.state.user.role?r("/"):r()})),ee.afterEach((function(e,t){document.title=e.meta.title}));var te=ee,re=(r("0e21"),r("5c7d"),r("db10")),ne=(r("7d6e"),r("e54f"),r("573e"),r("b05d"));n["a"].use(ne["a"],{config:{},plugins:{},lang:re["a"]});var oe=r("bc3a"),ae=r.n(oe),se=r("2106"),ie=r.n(se),ce=r("f9d5"),le=r.n(ce),ue=(r("4413"),r("657c")),de=(r("2bd9"),{computed:{user:function(){return this.$store.getters.user}}}),me=r("a584");n["a"].use(me["a"],{config:{id:"G-DRN7ZNDBW7"}}),ae.a.defaults.baseURL="https://zakkmusicshop.herokuapp.com",n["a"].use(ie.a,ae.a),n["a"].use(le.a),n["a"].component("ImgInputer",ue["a"]),n["a"].mixin(de),n["a"].config.productionTip=!1,new n["a"]({router:te,store:X,render:function(e){return e(E)}}).$mount("#app")},e915:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{staticClass:"q-mx-md q-mb-xl q-pa-md ProductCard"},[r("q-card-section",{staticClass:"q-mb-md",staticStyle:{height:"75%"}},[r("q-img",{attrs:{src:e.product.image}})],1),r("q-card-section",{staticClass:"text-center",staticStyle:{height:"20%"}},[r("div",{staticClass:"text-subtitle1"},[e._v(e._s(e.product.name))]),r("div",{staticClass:"text-subtitle2"},[e._v("NT$"+e._s(e.product.price))])])],1)},o=[],a={name:"ProductCard",props:{product:{type:Object,required:!0}}},s=a,i=r("2877"),c=r("f09f"),l=r("a370"),u=r("068f"),d=r("93dc"),m=r.n(d),p=Object(i["a"])(s,n,o,!1,null,null,null);t["a"]=p.exports;m()(p,"components",{QCard:c["a"],QCardSection:l["a"],QImg:u["a"]})}});
//# sourceMappingURL=app.7dff6dc8.js.map