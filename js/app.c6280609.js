(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},s=[];function a(t){return i.p+"js/"+({"AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service":"AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service","AdminNews~AdminOrders~AdminProducts~cart~order":"AdminNews~AdminOrders~AdminProducts~cart~order",AdminNews:"AdminNews",AdminOrders:"AdminOrders",AdminProducts:"AdminProducts",cart:"cart",login:"login",personal:"personal",product:"product",register:"register",service:"service",order:"order",aboutus:"aboutus",admin:"admin",news:"news",productlist:"productlist",userinfo:"userinfo"}[t]||t)+"."+{"AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service":"19de3b03","AdminNews~AdminOrders~AdminProducts~cart~order":"509bcc65",AdminNews:"61cd6137",AdminOrders:"4fb84061",AdminProducts:"302f3cea",cart:"e927fd9a",login:"0027dfdf",personal:"429f75f4",product:"23fb3a5f",register:"1752a3be",service:"dd2eb15d",order:"7ec6e4c1",aboutus:"ec644273",admin:"6b83d629",news:"a54476d1",productlist:"cb646f01",userinfo:"ffa13c71"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}o[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0e21":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("q-layout",{attrs:{view:"hHh lpR fff"}},[r("Header"),r("q-page-container",[r("router-view",{key:t.$route.fullPath})],1),r("Footer")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Header"}},[r("q-header",{attrs:{elevated:""}},[r("div",{staticClass:"container"},[r("q-toolbar",[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:t.image}})])],1),r("div",{staticClass:"column"},[r("div",{staticClass:"row"},[r("q-btn",{attrs:{flat:"",round:"",icon:"person"}},[r("q-menu",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-list",{staticStyle:{"min-width":"100px"}},[t.user.islogin?t._e():r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/login"}},[t._v("登入")])],1)],1),t.user.islogin?t._e():r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/register"}},[t._v("註冊")])],1)],1),t.user.islogin&&!t.user.isAdmin?r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/userinfo/personal"}},[t._v("會員專區")])],1)],1):t._e(),t.user.islogin&&t.user.isAdmin?r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/admin/AdminNews"}},[t._v("管理專區")])],1)],1):t._e(),t.user.islogin?r("q-item",{attrs:{clickable:""}},[r("q-item-section",{on:{click:t.logout}},[t._v("登出")])],1):t._e()],1)],1)],1),r("router-link",{attrs:{to:"/cart"}},[r("q-btn",{attrs:{flat:"",round:"",icon:"shopping_cart"}})],1),r("q-btn",{staticClass:"lt-md",attrs:{flat:"",round:"",icon:"menu"}},[r("q-menu",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-list",{staticStyle:{"min-width":"100px"}},[r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1)],1),r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/news"}},[t._v("最新消息")])],1)],1),r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/productlist"}},[t._v("商品列表")])],1)],1),r("q-item",{attrs:{clickable:""}},[r("q-item-section",[r("router-link",{attrs:{to:"/aboutus"}},[t._v("關於我們")])],1)],1)],1)],1)],1)],1),r("div",{staticClass:"navbar row gt-sm"},[r("router-link",{attrs:{to:"/"}},[r("q-btn",{attrs:{flat:""}},[t._v("首頁")])],1),r("router-link",{attrs:{to:"/news"}},[r("q-btn",{attrs:{flat:""}},[t._v("最新消息")])],1),r("router-link",{attrs:{to:"/productlist"}},[r("q-btn",{attrs:{flat:""}},[t._v("商品列表")])],1),r("router-link",{attrs:{to:"/aboutus"}},[r("q-btn",{attrs:{flat:""}},[t._v("關於我們")])],1)],1)])])],1)])],1)},i=[],c=r("1da1"),u=(r("96cf"),{name:"Header",data:function(){return{image:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files//專題/ZAKK.png")}},methods:{logout:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.delete("/users/logout",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:t.$store.commit("logout"),t.$swal({icon:"success",title:"登出成功",text:"期待下次見面"}),"/"!==t.$route.path&&t.$router.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"發生錯誤"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,o,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.$store.state.jwt.token.length){e.next=2;break}return e.abrupt("return");case 2:if(r=Date.now()-t.$store.state.jwt.received,e.prev=3,!(r>5184e5)){e.next=10;break}return e.next=7,t.axios.post("/users/extend",{},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 7:n=e.sent,o=n.data,t.$store.commit("extend",o.result);case 10:return e.next=12,t.axios.get("/users/",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 12:s=e.sent,a=s.data,t.$store.commit("getinfo",a.result),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](3),t.$store.commit("logout");case 20:case"end":return e.stop()}}),e,null,[[3,17]])})))()}}),l=u,d=r("2877"),m=r("e359"),p=r("65c6"),f=r("9c40"),g=r("4e73"),h=r("1c1c"),P=r("66e5"),A=r("4074"),v=r("93dc"),_=r.n(v),b=Object(d["a"])(l,a,i,!1,null,null,null),k=b.exports;_()(b,"components",{QHeader:m["a"],QToolbar:p["a"],QBtn:f["a"],QMenu:g["a"],QList:h["a"],QItem:P["a"],QItemSection:A["a"]});var w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Footer"}},[r("q-footer",{attrs:{elevated:""}},[r("div",{staticClass:"container"},[r("p",[t._v("網站為練習用，圖片皆取自網路")]),r("p",[t._v("Copyright © 2021")])])])],1)},E=[],O=r("7ff0"),q={},y=Object(d["a"])(q,w,E,!1,null,null,null),x=y.exports;_()(y,"components",{QFooter:O["a"]});var U={components:{Header:k,Footer:x}},j=U,N=r("4d5a"),C=r("09e3"),S=Object(d["a"])(j,o,s,!1,null,null,null),R=S.exports;_()(S,"components",{QLayout:N["a"],QPageContainer:C["a"]});var T=r("9483");Object(T["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7"),r("3ca3"),r("ddb0");var V=r("8c4f"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("q-carousel",{attrs:{animated:"",navigation:"",infinite:"",autoplay:t.autoplay,arrows:"","transition-prev":"slide-right","transition-next":"slide-left"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("q-carousel-slide",{attrs:{name:1,"img-src":t.image.carousel1}}),r("q-carousel-slide",{attrs:{name:2,"img-src":t.image.carousel2}}),r("q-carousel-slide",{attrs:{name:3,"img-src":t.image.carousel3}}),r("q-carousel-slide",{attrs:{name:4,"img-src":t.image.carousel4}})],1),r("div",{staticClass:"container"},[r("h4",[t._v("精選商品")]),r("div",{staticClass:"row justify-center"},t._l(t.products,(function(e){return r("div",{key:e._id,staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/"+e._id}},[r("q-card",{staticClass:"q-mx-md q-mb-xl q-pa-md homeProduct"},[r("q-card-section",{staticClass:"q-mb-md",staticStyle:{height:"75%"}},[r("q-img",{attrs:{src:e.image}})],1),r("q-card-section",{staticClass:"text-center",staticStyle:{height:"20%"}},[r("div",{staticClass:"text-subtitle1"},[t._v(t._s(e.name))]),r("div",{staticClass:"text-subtitle2"},[t._v("NT$"+t._s(e.price))])])],1)],1)],1)})),0)]),r("div",{staticClass:"container q-mb-xl"},[r("h4",[t._v("商品分類")]),r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category1"},on:{click:function(e){t.link="category1"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:t.image.category1}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[t._v("樂器")])])],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category2"},on:{click:function(e){t.link="category2"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:t.image.category2}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[t._v("音響")])])],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category3"},on:{click:function(e){t.link="category3"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:t.image.category3}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[t._v("效果器")])])],1)],1)],1),r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[r("router-link",{attrs:{to:"/productlist?category=category4"},on:{click:function(e){t.link="category4"}}},[r("q-card",{staticClass:"q-mx-md q-mb-md category"},[r("q-img",{attrs:{src:t.image.category4}},[r("div",{staticClass:"absolute-bottom text-subtitle2 text-center"},[t._v("週邊耗材")])])],1)],1)],1)])])],1)},I=[],L=(r("9911"),r("d81d"),r("99af"),r("e915")),$={data:function(){return{slide:1,autoplay:!0,image:{carousel1:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/carousel1.jpg"),carousel2:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/carousel2.jpg"),carousel3:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/carousel3.jpg"),carousel4:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/carousel4.jpg"),category1:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/樂器.jpg"),category2:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/音響.jpg"),category3:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/效果器.jpg"),category4:"".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/週邊.jpg")},products:[],link:""}},methods:{showCategory:function(){return this.$store.commit("showCategory",this.link)}},components:{ProductCard:L["a"]},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products/random");case 3:r=e.sent,n=r.data,t.products=n.result.map((function(t){return t.image&&(t.image="".concat(Object({VUE_APP_FTPHOST:"220.128.133.15",VUE_APP_FTPUSER:"s1100113",VUE_APP_API:"https://zakkmusicshop.herokuapp.com/",NODE_ENV:"production",BASE_URL:""}).API_URL,"/files/").concat(t.image)),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},Q=$,H=r("880c"),B=r("62cd"),D=r("f09f"),z=r("a370"),M=r("068f"),J=Object(d["a"])(Q,F,I,!1,null,null,null),K=J.exports;_()(J,"components",{QCarousel:H["a"],QCarouselSlide:B["a"],QCard:D["a"],QCardSection:z["a"],QImg:M["a"]});var Z=r("5530"),G=(r("b0c0"),r("2f62")),W=r("0e44");n["a"].use(G["a"]);var X=new G["a"].Store({state:{jwt:{token:"",received:0},user:{account:"",name:"",phone:"",address:"",role:0},category:"all"},mutations:{login:function(t,e){t.jwt.token=e.token,t.jwt.received=(new Date).getTime(),t.user.account=e.account,t.user.name=e.name,t.user.phone=e.phone,t.user.address=e.address,t.user.role=e.role},logout:function(t){t.jwt={token:"",received:0},t.user={account:"",name:"",phone:"",address:"",role:0}},extend:function(t,e){t.jwt.token=e,t.jwt.received=(new Date).getTime()},getinfo:function(t,e){t.user.account=e.account,t.user.name=e.name,t.user.phone=e.phone,t.user.address=e.address,t.user.role=e.role},showCategory:function(t,e){t.category=e}},actions:{},modules:{},getters:{user:function(t){return Object(Z["a"])({islogin:t.user.account.length>0,isAdmin:1===t.user.role},t.user)}},plugins:[Object(W["a"])()]});n["a"].use(V["a"]);var Y=[{path:"/",name:"Home",component:K,meta:{title:"查克樂器"}},{path:"/cart",name:"Cart",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("cart")]).then(r.bind(null,"b789"))},meta:{login:!0,title:"購物車 | 查克樂器"}},{path:"/news",name:"News",component:function(){return r.e("news").then(r.bind(null,"a2f9"))},meta:{title:"最新消息 | 查克樂器"}},{path:"/productlist",name:"Productlist",component:function(){return r.e("productlist").then(r.bind(null,"578c"))},meta:{title:"商品列表 | 查克樂器"}},{path:"/aboutus",name:"Aboutus",component:function(){return r.e("aboutus").then(r.bind(null,"4047"))},meta:{title:"關於我們 | 查克樂器"}},{path:"/login",name:"Login",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("login")]).then(r.bind(null,"a55b"))},meta:{title:"登入 | 查克樂器"}},{path:"/register",name:"Register",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("register")]).then(r.bind(null,"73cf"))},meta:{title:"註冊 | 查克樂器"}},{path:"/:id",name:"Product",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("product")]).then(r.bind(null,"d2f1"))},meta:{title:"商品內容 | 購物網"}},{path:"/userinfo",name:"Userinfo",component:function(){return r.e("userinfo").then(r.bind(null,"d246"))},meta:{title:"會員專區 | 查克樂器",login:!0},children:[{path:"personal",name:"Personal",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("personal")]).then(r.bind(null,"90ab"))},meta:{title:"個人資料修改 | 查克樂器",login:!0}},{path:"order",name:"Order",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("order")]).then(r.bind(null,"cf2a"))},meta:{title:"訂單查詢 | 查克樂器",login:!0}},{path:"service",name:"Service",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("service")]).then(r.bind(null,"e2f8"))},meta:{title:"個人資料修改 | 查克樂器",login:!0}}]},{path:"/admin",name:"Admin",component:function(){return r.e("admin").then(r.bind(null,"3530"))},meta:{admin:!0,login:!0,title:"後台管理 | 查克樂器"},children:[{path:"AdminProducts",name:"AdminProducts",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("AdminProducts")]).then(r.bind(null,"aa93"))},meta:{admin:!0,login:!0,title:"商品管理 | 查克樂器"}},{path:"AdminOrders",name:"AdminOrders",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("AdminOrders")]).then(r.bind(null,"ec5c"))},meta:{admin:!0,login:!0,title:"訂單管理 | 查克樂器"}},{path:"AdminNews",name:"AdminNews",component:function(){return Promise.all([r.e("AdminNews~AdminOrders~AdminProducts~cart~login~personal~product~register~service"),r.e("AdminNews~AdminOrders~AdminProducts~cart~order"),r.e("AdminNews")]).then(r.bind(null,"afb5"))},meta:{admin:!0,login:!0,title:"最新消息管理 | 查克樂器"}}]}],tt=new V["a"]({routes:Y});tt.beforeEach((function(t,e,r){t.meta.login&&0===X.state.user.account.length?r("/login"):t.meta.admin&&1!==X.state.user.role?r("/"):r()})),tt.afterEach((function(t,e){document.title=t.meta.title}));var et=tt,rt=(r("0e21"),r("5c7d"),r("db10")),nt=(r("7d6e"),r("e54f"),r("573e"),r("b05d"));n["a"].use(nt["a"],{config:{},plugins:{},lang:rt["a"]});var ot=r("bc3a"),st=r.n(ot),at=r("2106"),it=r.n(at),ct=r("f9d5"),ut=r.n(ct),lt=(r("4413"),r("657c")),dt=(r("2bd9"),{computed:{user:function(){return this.$store.getters.user}}}),mt=r("a584");n["a"].use(mt["a"],{config:{id:"G-DRN7ZNDBW7"}}),st.a.defaults.baseURL="https://zakkmusicshop.herokuapp.com/",n["a"].use(it.a,st.a),n["a"].use(ut.a),n["a"].component("ImgInputer",lt["a"]),n["a"].mixin(dt),n["a"].config.productionTip=!1,new n["a"]({router:et,store:X,render:function(t){return t(R)}}).$mount("#app")},e915:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-card",{staticClass:"q-mx-md q-mb-xl q-pa-md ProductCard"},[r("q-card-section",{staticClass:"q-mb-md",staticStyle:{height:"75%"}},[r("q-img",{attrs:{src:t.product.image}})],1),r("q-card-section",{staticClass:"text-center",staticStyle:{height:"20%"}},[r("div",{staticClass:"text-subtitle1"},[t._v(t._s(t.product.name))]),r("div",{staticClass:"text-subtitle2"},[t._v("NT$"+t._s(t.product.price))])])],1)},o=[],s={name:"ProductCard",props:{product:{type:Object,required:!0}}},a=s,i=r("2877"),c=r("f09f"),u=r("a370"),l=r("068f"),d=r("93dc"),m=r.n(d),p=Object(i["a"])(a,n,o,!1,null,null,null);e["a"]=p.exports;m()(p,"components",{QCard:c["a"],QCardSection:u["a"],QImg:l["a"]})}});
//# sourceMappingURL=app.c6280609.js.map