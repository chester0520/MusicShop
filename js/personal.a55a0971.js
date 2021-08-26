(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["personal"],{"0378":function(t,e,n){"use strict";var o=n("53ca"),s=n("5530"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("159b"),n("7db0"),n("d81d"),n("2b0e")),r=n("87e8"),i=n("d882"),c=n("dde5"),u=n("e704");e["a"]=a["a"].extend({name:"QForm",mixins:[r["a"]],props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean},computed:{onEvents:function(){return Object(s["a"])(Object(s["a"])({},this.qListeners),{},{submit:this.submit,reset:this.reset})}},mounted:function(){this.validateIndex=0,!0===this.autofocus&&this.focus()},methods:{validate:function(t){var e=this,n=[],s="boolean"===typeof t?t:!0!==this.noErrorFocus;this.validateIndex++;for(var a=this.getValidationComponents(),r=function(t,n){e.$emit("validation-"+(!0===t?"success":"error"),n)},i=function(t){var o=a[t],i=o.validate();if("function"===typeof i.then)n.push(i.then((function(t){return{valid:t,comp:o}}),(function(t){return{valid:!1,comp:o,error:t}})));else if(!0!==i){if(!1===e.greedy)return r(!1,o),!0===s&&"function"===typeof o.focus&&o.focus(),{v:Promise.resolve(!1)};n.push({valid:!1,comp:o})}},c=0;c<a.length;c++){var u=i(c);if("object"===Object(o["a"])(u))return u.v}if(0===n.length)return r(!0),Promise.resolve(!0);var l=this.validateIndex;return Promise.all(n).then((function(t){if(l===e.validateIndex){var n=t.filter((function(t){return!0!==t.valid}));if(0===n.length)return r(!0),!0;var o=n[0],a=o.valid,i=o.comp;return r(!1,i),!0===s&&!0!==a&&"function"===typeof i.focus&&i.focus(),!1}}))},resetValidation:function(){this.validateIndex++,this.getValidationComponents().forEach((function(t){"function"===typeof t.resetValidation&&t.resetValidation()}))},submit:function(t){var e=this;void 0!==t&&Object(i["l"])(t),this.validate().then((function(n){!0===n&&(void 0!==e.qListeners.submit?e.$emit("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))},reset:function(t){var e=this;void 0!==t&&Object(i["l"])(t),this.$emit("reset"),this.$nextTick((function(){e.resetValidation(),!0===e.autofocus&&!0!==e.noResetFocus&&e.focus()}))},focus:function(){var t=this;Object(u["a"])((function(){if(t.$el){var e=t.$el.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(t.$el.querySelectorAll("[tabindex]"),(function(t){return t.tabIndex>-1}));null!==e&&void 0!==e&&e.focus()}}))},getValidationComponents:function(){return Array.prototype.map.call(this.$el.getElementsByClassName("q-validation-component"),(function(t){return t.__vue__})).filter((function(t){return void 0!==t&&"function"===typeof t.validate}))}},render:function(t){return t("form",{staticClass:"q-form",on:this.onEvents},Object(c["c"])(this,"default"))}})},"90ab":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Personal"}},[n("div",{staticClass:"q-pa-md"},[n("h4",[t._v("個人資料")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col q-mx-xl"},[n("q-form",{staticClass:"q-gutter-md",on:{submit:t.submit}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("p",[t._v("帳號")])]),n("div",{staticClass:"col-4"},[n("q-input",{attrs:{outlined:"",readonly:""},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("p",[t._v("姓名")])]),n("div",{staticClass:"col-4"},[n("q-input",{attrs:{outlined:"",rules:[function(t){return t.length>0||"姓名不能為空"}]},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("p",[t._v("電話")])]),n("div",{staticClass:"col-4"},[n("q-input",{attrs:{outlined:"",rules:[function(t){return 10===t.length||"電話最多或最少 10 個字"}]},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("p",[t._v("地址")])]),n("div",{staticClass:"col-4"},[n("q-input",{attrs:{outlined:"",rules:[function(t){return t.length>0||"地址不能為空"}]},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"}),n("div",{staticClass:"col-4"},[n("q-btn",{staticClass:"q-my-lg",attrs:{color:"primary",label:"確認修改",type:"submit"}})],1)])])],1)])])])},s=[],a=n("1da1"),r=(n("96cf"),n("b0c0"),{name:"personal",data:function(){return{form:{account:"",name:"",phone:"",address:"",_id:""}}},methods:{submit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.patch("/users/"+t.form._id,t.form,{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:n=e.sent,o=n.data,t.form.name=o.result.name,t.form.phone=o.result.phone,t.form.address=o.result.address,t.$swal({icon:"success",title:"成功",text:"修改個人資料"}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/users",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:n=e.sent,o=n.data,t.form.account=o.result.account,t.form.name=o.result.name,t.form.phone=o.result.phone,t.form.address=o.result.address,t.form._id=o.result._id,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0),t.$swal({icon:"error",title:"錯誤",text:"取得個人資料失敗"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}),i=r,c=n("2877"),u=n("0378"),l=n("27f9"),d=n("9c40"),f=n("93dc"),m=n.n(f),v=Object(c["a"])(i,o,s,!1,null,null,null);e["default"]=v.exports;m()(v,"components",{QForm:u["a"],QInput:l["a"],QBtn:d["a"]})}}]);
//# sourceMappingURL=personal.a55a0971.js.map