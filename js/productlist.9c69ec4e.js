(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productlist"],{"079e":function(t,e,a){"use strict";var r=a("ade3"),i=a("5530"),s=a("2b0e"),c=a("dde5"),n=a("87e8"),o=a("0016"),l=a("8716");e["a"]=s["a"].extend({name:"QBreadcrumbsEl",mixins:[n["a"],l["a"]],props:{label:String,icon:String},render:function(t){var e=[];return void 0!==this.icon&&e.push(t(o["a"],{staticClass:"q-breadcrumbs__el-icon",class:void 0!==this.label?"q-breadcrumbs__el-icon--with-label":null,props:{name:this.icon}})),this.label&&e.push(this.label),t(!0===this.hasRouterLink?"router-link":"span",Object(r["a"])({staticClass:"q-breadcrumbs__el q-link flex inline items-center relative-position",props:!0===this.hasRouterLink?this.routerLinkProps:null},!0===this.hasRouterLink?"nativeOn":"on",Object(i["a"])({},this.qListeners)),Object(c["a"])(e,this,"default"))}})},"578c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Products"}},[a("div",{staticClass:"container"},[a("q-breadcrumbs",{staticClass:"q-my-lg"},[a("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),a("q-breadcrumbs-el",{attrs:{label:"商品列表"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("q-list",{staticClass:"q-mx-md",attrs:{bordered:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"all"===t.link,"active-class":"my-menu-link"},on:{click:function(e){return t.showCategory("all")}}},[a("q-item-section",[t._v("全部商品")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"category1"===t.link,"active-class":"my-menu-link"},on:{click:function(e){return t.showCategory("category1")}}},[a("q-item-section",[t._v("樂器")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"category2"===t.link,"active-class":"my-menu-link"},on:{click:function(e){return t.showCategory("category2")}}},[a("q-item-section",[t._v("音響")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"category3"===t.link,"active-class":"my-menu-link"},on:{click:function(e){return t.showCategory("category3")}}},[a("q-item-section",[t._v("效果器")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"category4"===t.link,"active-class":"my-menu-link"},on:{click:function(e){return t.showCategory("category4")}}},[a("q-item-section",[t._v("週邊耗材")])],1)],1)],1),a("div",{staticClass:"col"},[a("div",{staticClass:"row q-mb-xl"},t._l(t.filterProducts,(function(t){return a("div",{key:t._id,staticClass:"col-4"},[a("router-link",{attrs:{to:"/"+t._id}},[a("ProductCard",{attrs:{product:t}})],1)],1)})),0)])])],1)])},i=[],s=a("1da1"),c=(a("96cf"),a("9911"),a("ac1f"),a("5319"),a("4de4"),a("d81d"),a("99af"),a("e915")),n={data:function(){return{link:"all",products:[]}},methods:{showCategory:function(t){this.link=t,this.$router.replace("/productlist?category="+this.link)}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return"all"===t.link||("category1"===t.link&&"樂器"===e.category||("category2"===t.link&&"音響"===e.category||("category3"===t.link&&"效果器"===e.category||("category4"===t.link&&"週邊耗材"===e.category||void 0))))}))}},components:{ProductCard:c["a"]},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products");case 3:a=e.sent,r=a.data,t.products=r.result.map((function(t){return t.image&&(t.image="http://".concat("220.128.133.15","/").concat("s1100113","/專題/").concat(t.image)),t})),t.$route.query.category&&(t.link=t.$route.query.category),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},o=n,l=a("2877"),u=a("ead5"),d=a("079e"),p=a("1c1c"),m=a("66e5"),v=a("4074"),h=a("714f"),b=a("93dc"),f=a.n(b),g=Object(l["a"])(o,r,i,!1,null,null,null);e["default"]=g.exports;f()(g,"components",{QBreadcrumbs:u["a"],QBreadcrumbsEl:d["a"],QList:p["a"],QItem:m["a"],QItemSection:v["a"]}),f()(g,"directives",{Ripple:h["a"]})},ead5:function(t,e,a){"use strict";var r=a("5530"),i=(a("caad"),a("99af"),a("4de4"),a("8a79"),a("159b"),a("2b0e")),s=a("99b6"),c=a("dde5"),n=a("87e8");e["a"]=i["a"].extend({name:"QBreadcrumbs",mixins:[n["a"],s["a"]],props:{separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:function(t){return["none","xs","sm","md","lg","xl"].includes(t)},default:"sm"}},computed:{classes:function(){return"".concat(this.alignClass).concat("none"===this.gutter?"":" q-gutter-".concat(this.gutter))},sepClass:function(){if(this.separatorColor)return"text-".concat(this.separatorColor)},activeClass:function(){return"text-".concat(this.activeColor)}},render:function(t){var e=this,a=Object(c["c"])(this,"default");if(void 0!==a){var i=1,s=[],n=a.filter((function(t){return void 0!==t.tag&&t.tag.endsWith("-QBreadcrumbsEl")})).length,o=void 0!==this.$scopedSlots.separator?this.$scopedSlots.separator:function(){return e.separator};return a.forEach((function(a){if(void 0!==a.tag&&a.tag.endsWith("-QBreadcrumbsEl")){var r=i<n;i++,s.push(t("div",{staticClass:"flex items-center",class:r?e.activeClass:"q-breadcrumbs--last"},[a])),r&&s.push(t("div",{staticClass:"q-breadcrumbs__separator",class:e.sepClass},o()))}else s.push(a)})),t("div",{staticClass:"q-breadcrumbs",on:Object(r["a"])({},this.qListeners)},[t("div",{staticClass:"flex items-center",class:this.classes},s)])}}})}}]);
//# sourceMappingURL=productlist.9c69ec4e.js.map