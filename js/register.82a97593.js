(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0378":function(t,e,n){"use strict";var r=n("53ca"),o=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("159b"),n("7db0"),n("d81d"),n("2b0e")),a=n("87e8"),c=n("d882"),u=n("dde5"),s=n("e704");e["a"]=i["a"].extend({name:"QForm",mixins:[a["a"]],props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean},computed:{onEvents:function(){return Object(o["a"])(Object(o["a"])({},this.qListeners),{},{submit:this.submit,reset:this.reset})}},mounted:function(){this.validateIndex=0,!0===this.autofocus&&this.focus()},methods:{validate:function(t){var e=this,n=[],o="boolean"===typeof t?t:!0!==this.noErrorFocus;this.validateIndex++;for(var i=this.getValidationComponents(),a=function(t,n){e.$emit("validation-"+(!0===t?"success":"error"),n)},c=function(t){var r=i[t],c=r.validate();if("function"===typeof c.then)n.push(c.then((function(t){return{valid:t,comp:r}}),(function(t){return{valid:!1,comp:r,error:t}})));else if(!0!==c){if(!1===e.greedy)return a(!1,r),!0===o&&"function"===typeof r.focus&&r.focus(),{v:Promise.resolve(!1)};n.push({valid:!1,comp:r})}},u=0;u<i.length;u++){var s=c(u);if("object"===Object(r["a"])(s))return s.v}if(0===n.length)return a(!0),Promise.resolve(!0);var l=this.validateIndex;return Promise.all(n).then((function(t){if(l===e.validateIndex){var n=t.filter((function(t){return!0!==t.valid}));if(0===n.length)return a(!0),!0;var r=n[0],i=r.valid,c=r.comp;return a(!1,c),!0===o&&!0!==i&&"function"===typeof c.focus&&c.focus(),!1}}))},resetValidation:function(){this.validateIndex++,this.getValidationComponents().forEach((function(t){"function"===typeof t.resetValidation&&t.resetValidation()}))},submit:function(t){var e=this;void 0!==t&&Object(c["l"])(t),this.validate().then((function(n){!0===n&&(void 0!==e.qListeners.submit?e.$emit("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))},reset:function(t){var e=this;void 0!==t&&Object(c["l"])(t),this.$emit("reset"),this.$nextTick((function(){e.resetValidation(),!0===e.autofocus&&!0!==e.noResetFocus&&e.focus()}))},focus:function(){var t=this;Object(s["a"])((function(){if(t.$el){var e=t.$el.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(t.$el.querySelectorAll("[tabindex]"),(function(t){return t.tabIndex>-1}));null!==e&&void 0!==e&&e.focus()}}))},getValidationComponents:function(){return Array.prototype.map.call(this.$el.getElementsByClassName("q-validation-component"),(function(t){return t.__vue__})).filter((function(t){return void 0!==t&&"function"===typeof t.validate}))}},render:function(t){return t("form",{staticClass:"q-form",on:this.onEvents},Object(u["c"])(this,"default"))}})},"73cf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Register"}},[n("div",{staticClass:"container flex justify-center items-center",staticStyle:{width:"100%",height:"70vh"}},[n("div",{staticClass:"q-pa-md",staticStyle:{width:"400px",height:"600px"}},[n("q-form",{staticClass:"q-gutter-md",on:{submit:t.submit}},[n("h4",{staticClass:"text-center"},[t._v("會員註冊")]),n("q-input",{attrs:{filled:"",label:"請輸入信箱",error:!t.isValid,"error-message":"信箱格式錯誤","bottom-slots":""},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}}),n("q-input",{attrs:{filled:"",label:"請輸入密碼",type:"password",rules:[function(t){return t.length>=4&&t.length<=10||"密碼必須 4 個字以上 或 10個字以下"}]},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),n("q-input",{attrs:{filled:"",label:"請輸入姓名",rules:[function(t){return t.length>1||"姓名最少兩個字"}]},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),n("q-input",{attrs:{filled:"",label:"請輸入電話",rules:[function(t){return 10===t.length||"電話最多或最少 10 個字"}]},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),n("q-input",{attrs:{filled:"",label:"請輸入地址",rules:[function(t){return t.length>0||"請填入地址"}]},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),n("p",[t._v("已經有會員嗎?"),n("router-link",{attrs:{to:"/login"}},[t._v("登入")])],1),n("q-btn",{attrs:{label:"註冊",type:"submit",color:"negative"}})],1)],1)])])},o=[],i=n("1da1"),a=(n("96cf"),n("edd5")),c={data:function(){return{form:{account:"",password:"",name:"",phone:"",address:""}}},computed:{isValid:function(){var t=this.form.account;return 0===t.length?null:Object(a["a"])(t)}},methods:{submit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("/users",t.form);case 3:t.$swal({icon:"success",title:"成功",text:"註冊成功"}),t.$router.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},u=c,s=n("2877"),l=n("0378"),f=n("27f9"),d=n("9c40"),m=n("93dc"),p=n.n(m),h=Object(s["a"])(u,r,o,!1,null,null,null);e["default"]=h.exports;p()(h,"components",{QForm:l["a"],QInput:f["a"],QBtn:d["a"]})},edd5:function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){var e="string"===typeof t||t instanceof String;if(!e){var n=r(t);throw null===t?n="null":"object"===n&&(n=t.constructor.name),new TypeError("Expected a string but received a ".concat(n))}}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var n in e)"undefined"===typeof t[n]&&(t[n]=e[n]);return t}function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){var n,r;o(t),"object"===a(e)?(n=e.min||0,r=e.max):(n=arguments[1],r=arguments[2]);var i=encodeURI(t).split(/%..|./).length-1;return i>=n&&("undefined"===typeof r||i<=r)}n.d(e,"a",(function(){return q}));var u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function s(t,e){o(t),e=i(e,u),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var n=t.split("."),r=n[n.length-1];if(e.require_tld){if(n.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(r))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(r))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(r))&&n.every((function(t){return!(t.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)&&(!/[\uff01-\uff5e]/.test(t)&&(!/^-|-$/.test(t)&&!(!e.allow_underscores&&/_/.test(t)))))}))}var l="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",f="(".concat(l,"[.]){3}").concat(l),d=new RegExp("^".concat(f,"$")),m="(?:[0-9a-fA-F]{1,4})",p=new RegExp("^("+"(?:".concat(m,":){7}(?:").concat(m,"|:)|")+"(?:".concat(m,":){6}(?:").concat(f,"|:").concat(m,"|:)|")+"(?:".concat(m,":){5}(?::").concat(f,"|(:").concat(m,"){1,2}|:)|")+"(?:".concat(m,":){4}(?:(:").concat(m,"){0,1}:").concat(f,"|(:").concat(m,"){1,3}|:)|")+"(?:".concat(m,":){3}(?:(:").concat(m,"){0,2}:").concat(f,"|(:").concat(m,"){1,4}|:)|")+"(?:".concat(m,":){2}(?:(:").concat(m,"){0,3}:").concat(f,"|(:").concat(m,"){1,5}|:)|")+"(?:".concat(m,":){1}(?:(:").concat(m,"){0,4}:").concat(f,"|(:").concat(m,"){1,6}|:)|")+"(?::((?::".concat(m,"){0,5}:").concat(f,"|(?::").concat(m,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(o(t),e=String(e),!e)return h(t,4)||h(t,6);if("4"===e){if(!d.test(t))return!1;var n=t.split(".").sort((function(t,e){return t-e}));return n[3]<=255}return"6"===e&&!!p.test(t)}var v={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},x=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,b=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,g=/^[a-z\d]+$/,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,y=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,F=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,w=254;function $(t){var e=t.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;var n=/[\.";<>]/.test(e);if(n){if(e===t)return!1;var r=e.split('"').length===e.split('\\"').length;if(!r)return!1}return!0}function q(t,e){if(o(t),e=i(e,v),e.require_display_name||e.allow_display_name){var n=t.match(x);if(n){var r=n[1];if(t=t.replace(r,"").replace(/(^<|>$)/g,""),r.endsWith(" ")&&(r=r.substr(0,r.length-1)),!$(r))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>w)return!1;var a=t.split("@"),u=a.pop(),l=a.join("@"),f=u.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===f||"googlemail.com"===f)){l=l.toLowerCase();var d=l.split("+")[0];if(!c(d.replace(".",""),{min:6,max:30}))return!1;for(var m=d.split("."),p=0;p<m.length;p++)if(!g.test(m[p]))return!1}if(!1===e.ignore_max_length&&(!c(l,{max:64})||!c(u,{max:254})))return!1;if(!s(u,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!h(u)){if(!u.startsWith("[")||!u.endsWith("]"))return!1;var q=u.substr(1,u.length-2);if(0===q.length||!h(q))return!1}}if('"'===l[0])return l=l.slice(1,l.length-1),e.allow_utf8_local_part?F.test(l):_.test(l);for(var E=e.allow_utf8_local_part?y:b,S=l.split("."),j=0;j<S.length;j++)if(!E.test(S[j]))return!1;return!e.blacklisted_chars||-1===l.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))}}}]);
//# sourceMappingURL=register.82a97593.js.map