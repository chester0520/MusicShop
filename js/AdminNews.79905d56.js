(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AdminNews"],{"0378":function(t,e,i){"use strict";var n=i("53ca"),a=i("5530"),s=(i("d3b7"),i("3ca3"),i("ddb0"),i("4de4"),i("159b"),i("7db0"),i("d81d"),i("2b0e")),o=i("87e8"),r=i("d882"),l=i("dde5"),c=i("e704");e["a"]=s["a"].extend({name:"QForm",mixins:[o["a"]],props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean},computed:{onEvents:function(){return Object(a["a"])(Object(a["a"])({},this.qListeners),{},{submit:this.submit,reset:this.reset})}},mounted:function(){this.validateIndex=0,!0===this.autofocus&&this.focus()},methods:{validate:function(t){var e=this,i=[],a="boolean"===typeof t?t:!0!==this.noErrorFocus;this.validateIndex++;for(var s=this.getValidationComponents(),o=function(t,i){e.$emit("validation-"+(!0===t?"success":"error"),i)},r=function(t){var n=s[t],r=n.validate();if("function"===typeof r.then)i.push(r.then((function(t){return{valid:t,comp:n}}),(function(t){return{valid:!1,comp:n,error:t}})));else if(!0!==r){if(!1===e.greedy)return o(!1,n),!0===a&&"function"===typeof n.focus&&n.focus(),{v:Promise.resolve(!1)};i.push({valid:!1,comp:n})}},l=0;l<s.length;l++){var c=r(l);if("object"===Object(n["a"])(c))return c.v}if(0===i.length)return o(!0),Promise.resolve(!0);var u=this.validateIndex;return Promise.all(i).then((function(t){if(u===e.validateIndex){var i=t.filter((function(t){return!0!==t.valid}));if(0===i.length)return o(!0),!0;var n=i[0],s=n.valid,r=n.comp;return o(!1,r),!0===a&&!0!==s&&"function"===typeof r.focus&&r.focus(),!1}}))},resetValidation:function(){this.validateIndex++,this.getValidationComponents().forEach((function(t){"function"===typeof t.resetValidation&&t.resetValidation()}))},submit:function(t){var e=this;void 0!==t&&Object(r["l"])(t),this.validate().then((function(i){!0===i&&(void 0!==e.qListeners.submit?e.$emit("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))},reset:function(t){var e=this;void 0!==t&&Object(r["l"])(t),this.$emit("reset"),this.$nextTick((function(){e.resetValidation(),!0===e.autofocus&&!0!==e.noResetFocus&&e.focus()}))},focus:function(){var t=this;Object(c["a"])((function(){if(t.$el){var e=t.$el.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(t.$el.querySelectorAll("[tabindex]"),(function(t){return t.tabIndex>-1}));null!==e&&void 0!==e&&e.focus()}}))},getValidationComponents:function(){return Array.prototype.map.call(this.$el.getElementsByClassName("q-validation-component"),(function(t){return t.__vue__})).filter((function(t){return void 0!==t&&"function"===typeof t.validate}))}},render:function(t){return t("form",{staticClass:"q-form",on:this.onEvents},Object(l["c"])(this,"default"))}})},"3b16":function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("0481"),i("caad"),i("2b0e")),s=i("9c40"),o=i("27f9"),r=i("b7fa"),l=i("87e8"),c=i("d882"),u=i("7937"),d=i("d728"),h=i("0cd3");e["a"]=a["a"].extend({name:"QPagination",mixins:[r["a"],l["a"]],props:{value:{type:Number,required:!0},min:{type:Number,default:1},max:{type:Number,required:!0},color:{type:String,default:"primary"},textColor:String,activeColor:String,activeTextColor:String,inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},maxPages:{type:Number,default:0,validator:function(t){return t>=0}},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,dense:Boolean,padding:{type:String,default:"3px 2px"}},data:function(){return{newPage:null}},watch:{min:function(){this.model=this.value},max:function(){this.model=this.value}},computed:{model:{get:function(){return this.value},set:function(t){if(t=parseInt(t,10),!this.disable&&!isNaN(t)){var e=Object(u["a"])(t,this.min,this.max);this.$emit("input",e)}}},inputPlaceholder:function(){return this.model+" / "+this.max},__boundaryLinks:function(){return this.__getBool(this.boundaryLinks,this.input)},__boundaryNumbers:function(){return this.__getBool(this.boundaryNumbers,!this.input)},__directionLinks:function(){return this.__getBool(this.directionLinks,this.input)},__ellipses:function(){return this.__getBool(this.ellipses,!this.input)},icons:function(){var t=[this.iconFirst||this.$q.iconSet.pagination.first,this.iconPrev||this.$q.iconSet.pagination.prev,this.iconNext||this.$q.iconSet.pagination.next,this.iconLast||this.$q.iconSet.pagination.last];return!0===this.$q.lang.rtl?t.reverse():t},attrs:function(){if(!0===this.disable)return{"aria-disabled":"true"}},btnProps:function(){return{round:this.round,rounded:this.rounded,outline:this.outline,unelevated:this.unelevated,push:this.push,glossy:this.glossy,dense:this.dense,padding:this.padding,color:this.color,flat:!0,size:this.size,ripple:null===this.ripple||this.ripple}},activeBtnProps:function(){return{flat:this.flat,color:this.activeColor||this.color,textColor:this.activeTextColor||this.textColor}}},methods:{set:function(t){this.model=t},setByOffset:function(t){this.model=this.model+t},__update:function(){this.model=this.newPage,this.newPage=null},__getBool:function(t,e){return[!0,!1].includes(t)?t:e},__getBtn:function(t,e,i,a){var o=this;return e.props=Object(n["a"])(Object(n["a"])({},this.btnProps),i),void 0!==a&&(void 0!==this.toFn?e.props.to=this.toFn(a):e.on={click:function(){return o.set(a)}}),t(s["a"],e)}},render:function(t){var e=this,i=[],a=[],s=[];if(this.__boundaryLinks&&(i.push(this.__getBtn(t,{key:"bls"},{disable:this.disable||this.value<=this.min,icon:this.icons[0]},this.min)),a.unshift(this.__getBtn(t,{key:"ble"},{disable:this.disable||this.value>=this.max,icon:this.icons[3]},this.max))),this.__directionLinks&&(i.push(this.__getBtn(t,{key:"bdp"},{disable:this.disable||this.value<=this.min,icon:this.icons[1]},this.value-1)),a.unshift(this.__getBtn(t,{key:"bdn"},{disable:this.disable||this.value>=this.max,icon:this.icons[2]},this.value+1))),!0===this.input)s.push(t(o["a"],{staticClass:"inline",style:{width:"".concat(this.inputPlaceholder.length/1.5,"em")},props:{type:"number",dense:!0,value:this.newPage,disable:this.disable,dark:this.isDark,borderless:!0,inputClass:this.inputClass,inputStyle:this.inputStyle},attrs:{placeholder:this.inputPlaceholder,min:this.min,max:this.max},on:Object(h["b"])(this,"inp",{input:function(t){e.newPage=t},keyup:function(t){!0===Object(d["a"])(t,13)&&e.__update()},blur:this.__update})}));else{var r=Math.max(this.maxPages,1+(this.__ellipses?2:0)+(this.__boundaryNumbers?2:0)),l=this.min,u=this.max,p=!1,f=!1,m=!1,b=!1;this.maxPages&&r<this.max-this.min+1&&(r=1+2*Math.floor(r/2),l=Math.max(this.min,Math.min(this.max-r+1,this.value-Math.floor(r/2))),u=Math.min(this.max,l+r-1),this.__boundaryNumbers&&(m=!0,l+=1),this.__ellipses&&l>this.min+(this.__boundaryNumbers?1:0)&&(p=!0,l+=1),this.__boundaryNumbers&&(b=!0,u-=1),this.__ellipses&&u<this.max-(this.__boundaryNumbers?1:0)&&(f=!0,u-=1));var v={minWidth:"".concat(Math.max(2,String(this.max).length),"em")};if(m){var g=this.min===this.value,x={disable:this.disable,flat:!g,label:this.min};g&&(x.color=this.activeColor||this.color,x.textColor=this.activeTextColor||this.textColor),i.push(this.__getBtn(t,{key:"bns",style:v},x,this.min))}if(b){var _=this.max===this.value,y={disable:this.disable,flat:!_,label:this.max};_&&(y.color=this.activeColor||this.color,y.textColor=this.activeTextColor||this.textColor),a.unshift(this.__getBtn(t,{key:"bne",style:v},y,this.max))}p&&i.push(this.__getBtn(t,{key:"bes",style:v},{disable:this.disable,label:"…",ripple:!1},l-1)),f&&a.unshift(this.__getBtn(t,{key:"bee",style:v},{disable:this.disable,label:"…",ripple:!1},u+1));for(var k=l;k<=u;k++){var w={disable:this.disable,flat:!0,label:k};k===this.value&&Object.assign(w,this.activeBtnProps),s.push(this.__getBtn(t,{key:"bpg".concat(k),style:v},w,k))}}return t("div",{staticClass:"q-pagination row no-wrap items-center",class:{disabled:this.disable},attrs:this.attrs,on:Object(n["a"])({},this.qListeners)},[i,t("div",{staticClass:"row justify-center",on:!0===this.input?Object(h["b"])(this,"stop",{input:c["k"]}):null},[s]),a])}})},"9f0a":function(t,e,i){"use strict";var n=i("5530"),a=(i("b64b"),i("caad"),i("2532"),i("fb6a"),i("d81d"),i("b0c0"),i("2b0e")),s=(i("a9e3"),i("99af"),i("b7fa")),o=i("ff7b"),r=i("f89c"),l=i("2b69"),c=i("d882"),u=i("dde5"),d=i("0cd3"),h=a["a"].extend({name:"QRadio",mixins:[s["a"],o["a"],r["b"],l["a"]],props:{value:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},computed:{isTrue:function(){return this.value===this.val},classes:function(){return"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(!0===this.disable?" disabled":"")+(!0===this.isDark?" q-radio--dark":"")+(!0===this.dense?" q-radio--dense":"")+(!0===this.leftLabel?" reverse":"")},innerClass:function(){var t=void 0===this.color||!0!==this.keepColor&&!0!==this.isTrue?"":" text-".concat(this.color);return"q-radio__inner--".concat(!0===this.isTrue?"truthy":"falsy").concat(t)},computedTabindex:function(){return!0===this.disable?-1:this.tabindex||0},formAttrs:function(){var t={type:"radio"};return void 0!==this.name&&Object.assign(t,{name:this.name,value:this.val}),t},formDomProps:function(){if(void 0!==this.name&&!0===this.isTrue)return{checked:!0}},attrs:function(){var t={tabindex:this.computedTabindex,role:"radio","aria-label":this.label,"aria-checked":!0===this.isTrue?"true":"false"};return!0===this.disable&&(t["aria-disabled"]="true"),t}},methods:{set:function(t){void 0!==t&&(Object(c["l"])(t),this.__refocusTarget(t)),!0!==this.disable&&!0!==this.isTrue&&this.$emit("input",this.val,t)}},render:function(t){var e=this,i=[t("svg",{staticClass:"q-radio__bg absolute non-selectable",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"}},[t("path",{attrs:{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}}),t("path",{staticClass:"q-radio__check",attrs:{d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"}})])];!0!==this.disable&&this.__injectFormInput(i,"unshift","q-radio__native q-ma-none q-pa-none");var n=[t("div",{staticClass:"q-radio__inner relative-position",class:this.innerClass,style:this.sizeStyle},i)];void 0!==this.__refocusTargetEl&&n.push(this.__refocusTargetEl);var a=void 0!==this.label?Object(u["a"])([this.label],this,"default"):Object(u["c"])(this,"default");return void 0!==a&&n.push(t("div",{staticClass:"q-radio__label q-anchor--skip"},a)),t("div",{class:this.classes,attrs:this.attrs,on:Object(d["b"])(this,"inpExt",{click:this.set,keydown:function(t){13!==t.keyCode&&32!==t.keyCode||Object(c["l"])(t)},keyup:function(t){13!==t.keyCode&&32!==t.keyCode||e.set(t)}})},n)}}),p=i("8f8e"),f=i("0016"),m=i("85fc"),b=a["a"].extend({name:"QToggle",mixins:[m["a"]],props:{icon:String,checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,iconColor:String},computed:{computedIcon:function(){return(!0===this.isTrue?this.checkedIcon:!0===this.isIndeterminate?this.indeterminateIcon:this.uncheckedIcon)||this.icon},computedIconColor:function(){if(!0===this.isTrue)return this.iconColor}},methods:{__getInner:function(t){return[t("div",{staticClass:"q-toggle__track"}),t("div",{staticClass:"q-toggle__thumb absolute flex flex-center no-wrap"},void 0!==this.computedIcon?[t(f["a"],{props:{name:this.computedIcon,color:this.computedIconColor}})]:void 0)]}},created:function(){this.type="toggle"}}),v=i("87e8"),g={radio:h,checkbox:p["a"],toggle:b},x=Object.keys(g);e["a"]=a["a"].extend({name:"QOptionGroup",mixins:[s["a"],v["a"]],props:{value:{required:!0},options:{type:Array,validator:function(t){return t.every((function(t){return"value"in t&&"label"in t}))}},name:String,type:{default:"radio",validator:function(t){return x.includes(t)}},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},computed:{component:function(){return g[this.type]},model:function(){return Array.isArray(this.value)?this.value.slice():this.value},classes:function(){return"q-option-group q-gutter-x-sm"+(!0===this.inline?" q-option-group--inline":"")},attrs:function(){if("radio"===this.type){var t={role:"radiogroup"};return!0===this.disable&&(t["aria-disabled"]="true"),t}}},methods:{__update:function(t){this.$emit("input",t)}},created:function(){var t=Array.isArray(this.value);"radio"===this.type?t&&console.error("q-option-group: model should not be array"):!1===t&&console.error("q-option-group: model should be array in your case")},render:function(t){var e=this;return t("div",{class:this.classes,attrs:this.attrs,on:Object(n["a"])({},this.qListeners)},this.options.map((function(i){return t("div",[t(e.component,{props:{value:e.value,val:i.value,name:void 0===i.name?e.name:i.name,disable:e.disable||i.disable,label:i.label,leftLabel:void 0===i.leftLabel?e.leftLabel:i.leftLabel,color:void 0===i.color?e.color:i.color,checkedIcon:i.checkedIcon,uncheckedIcon:i.uncheckedIcon,dark:i.dark||e.isDark,size:void 0===i.size?e.size:i.size,dense:e.dense,keepColor:void 0===i.keepColor?e.keepColor:i.keepColor},on:Object(d["b"])(e,"inp",{input:e.__update})})])})))}})},afb5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"AdminNews"}},[i("div",{staticClass:"q-px-md"},[i("div",{staticClass:"row"},[i("h4",[t._v("最新消息管理"),i("q-btn",{staticClass:"q-mx-lg",attrs:{round:"",color:"primary",icon:"add"},on:{click:function(e){t.modal=!0}}}),i("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[i("q-card",[i("q-card-section",[t.form._id.length>0?i("h4",[t._v("編輯最新消息")]):i("h4",[t._v("新增最新消息")])]),i("q-card-section",[i("q-form",{staticClass:"q-gutter-md",on:{submit:t.submit,reset:t.reset}},[i("img-inputer",{attrs:{theme:"dark",size:"large",placeholder:"點擊或拖曳選擇圖片","bottom-text":"點擊或拖曳以修改"},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}}),i("q-input",{attrs:{filled:"",label:"標題",rules:[function(t){return t.length>=1||"必須 1 個字以上"}]},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),i("q-input",{attrs:{filled:"",type:"textarea",label:"內容",rules:[function(t){return t.length>=1||"必須 1 個字以上"}]},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}}),i("q-option-group",{attrs:{options:t.options,color:"primary",inline:"",dense:""},model:{value:t.form.post,callback:function(e){t.$set(t.form,"post",e)},expression:"form.post"}}),i("q-btn",{attrs:{label:"取消",type:"reset",color:"red"}}),i("q-btn",{attrs:{label:"確認",type:"submit",color:"primary"}})],1)],1)],1)],1)],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("q-table",{attrs:{flat:"",bordered:"",data:t.news,columns:t.columns,"row-key":"date",pagination:t.pagination,"hide-pagination":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"body-cell-image",fn:function(t){return[i("q-td",{attrs:{props:t}},[i("img",{staticStyle:{height:"100px"},attrs:{src:t.row.image}})])]}},{key:"body-cell-post",fn:function(e){return[i("q-td",{attrs:{props:e}},[t._v(t._s(e.row.post?"公開":"隱藏"))])]}},{key:"body-cell-action",fn:function(e){return[i("q-td",{attrs:{props:e}},[i("q-btn",{attrs:{icon:"edit",color:"primary"},on:{click:function(i){return t.editNews(e.rowIndex)}}})],1)]}}])})],1)])])])},a=[],s=i("1da1"),o=(i("96cf"),i("99af"),i("d81d"),{name:"#AdminNews",data:function(){return{news:[],modal:!1,columns:[{name:"date",field:"date",align:"center",label:"刊登日期"},{name:"image",field:"image",align:"center",label:"圖片"},{name:"title",field:"title",align:"center",label:"標題"},{name:"text",field:"text",align:"center",label:"內容"},{name:"post",field:"post",align:"center",label:"刊登"},{name:"action",field:"action",align:"center",label:"設定"}],pagination:{sortBy:"date",descending:!1,page:1,rowsPerPage:10},form:{title:"",text:"",image:null,post:!0,date:"",_id:""},options:[{label:"公開",value:!0},{label:"隱藏",value:!1}]}},methods:{editNews:function(t){this.modal=!0,this.form={title:this.news[t].title,text:this.news[t].text,date:this.news[t].date,image:this.news[t].image,post:this.news[t].post,_id:this.news[t]._id,index:t}},reset:function(t){this.form={title:"",text:"",image:null,date:"",post:!0,_id:""},this.modal=!1},submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,n,a,s,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in e.prev=0,i=new FormData,t.form)i.append(n,t.form[n]);if(0!==t.form._id.length){e.next=12;break}return e.next=6,t.axios.post("/news",i,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 6:a=e.sent,s=a.data,t.news.push(t.form),t.form.image="http://".concat("220.128.133.15","/").concat("s1100113","/專題/").concat(s.result.image),e.next=22;break;case 12:return e.next=14,t.axios.patch("/news/"+t.form._id,i,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 14:o=e.sent,r=o.data,t.news[t.form.index]={title:t.form.title,text:t.form.text,date:t.form.date,post:t.form.post,image:"http://".concat("220.128.133.15","/").concat("s1100113","/專題/").concat(r.result.image),_id:t.form._id},t.$set(t.news[t.form.index],"title",t.form.title),t.$set(t.news[t.form.index],"text",t.form.text),t.$set(t.news[t.form.index],"date",t.form.date),t.$set(t.news[t.form.index],"post",t.form.post),t.$set(t.news[t.form.index],"image",t.form.image);case 22:t.form={title:"",text:"",image:null,date:"",post:!0,_id:""},t.$swal({icon:"success",title:"成功",text:"新增/修改商品"}),t.modal=!1,e.next=30;break;case 27:e.prev=27,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message});case 30:case"end":return e.stop()}}),e,null,[[0,27]])})))()}},computed:{pagesNumber:function(){return Math.ceil(this.products.length/this.pagination.rowsPerPage)}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/news/all",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:i=e.sent,n=i.data,t.news=n.result.map((function(t){return t.image&&(t.image="http://".concat("220.128.133.15","/").concat("s1100113","/專題/").concat(t.image)),t.date=new Date(t.date).toLocaleDateString(),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得最新消息失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),r=o,l=i("2877"),c=i("9c40"),u=i("24e8"),d=i("f09f"),h=i("a370"),p=i("0378"),f=i("27f9"),m=i("9f0a"),b=i("eaac"),v=i("db86"),g=i("3b16"),x=i("93dc"),_=i.n(x),y=Object(l["a"])(r,n,a,!1,null,null,null);e["default"]=y.exports;_()(y,"components",{QBtn:c["a"],QDialog:u["a"],QCard:d["a"],QCardSection:h["a"],QForm:p["a"],QInput:f["a"],QOptionGroup:m["a"],QTable:b["a"],QTd:v["a"],QPagination:g["a"]})}}]);
//# sourceMappingURL=AdminNews.79905d56.js.map