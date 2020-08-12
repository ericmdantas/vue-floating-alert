!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-floating-alert"]=t():e["vue-floating-alert"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=10)}([function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(11).default)("12f9e022",r,!1,{})},function(e,t,n){e.exports={ca:n(3),en:n(4),fr:n(5),"pt-BR":n(6)}},function(e,t,n){var r,i,o;i=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();e.Bus=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._q=new Set}return n(e,[{key:"emit",value:function(e,t){if(!e)throw new TypeError(this._invalidTokenMessage("emit"));var n=!0,r=!1,i=void 0;try{for(var o,a=this._q[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s.token===e&&(s.cb(t),s.once)){this._q.delete(s);break}}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}},{key:"on",value:function(e,t){var n=this;if(!e)throw new TypeError(this._invalidTokenMessage("on"));var r=this._genId();return this._q.add({_id:r,token:e,cb:t,once:!1,del:!1}),function(){var e=!0,t=!1,i=void 0;try{for(var o,a=n._q[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;if(s._id===r){n._q.delete(s);break}}}catch(e){t=!0,i=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw i}}}}},{key:"once",value:function(e,t){if(!e)throw new TypeError(this._invalidTokenMessage("once"));this._q.add({_id:this._genId(),token:e,cb:t,once:!0,del:!1})}},{key:"off",value:function(){for(var e=this,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];"object"===(void 0===r?"undefined":t(r))&&r.length&&r.forEach((function(t){var n=!0,r=!1,i=void 0;try{for(var o,a=e._q[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;s.token===t&&e._q.delete(s)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}))}},{key:"_invalidTokenMessage",value:function(e){return"["+e+"] - Token not informed."}},{key:"_genId",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}}]),e}()})?r.apply(t,i):r)||(e.exports=o)},function(e,t){e.exports={btnCloseName:"Cerca"}},function(e,t){e.exports={btnCloseName:"Close"}},function(e,t){e.exports={btnCloseName:"Proche"}},function(e,t){e.exports={btnCloseName:"Fechar"}},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"#floating-alert[data-v-b4fa4b24]{position:fixed;width:98%;right:1%;top:94px;font-size:1em;border:none;background-color:#fff;padding:15px 15px 0 0;border-radius:4px;z-index:9999;transition:right .3s ease;will-change:right;box-shadow:0 1px 8px 0 rgba(0,0,0,0.2),0 3px 4px 0 rgba(0,0,0,0.14),0 3px 3px -2px rgba(0,0,0,0.12)}#floating-alert.floating-alert-invisible[data-v-b4fa4b24]{right:-999px}#floating-alert.alert-danger .floating-alert-icon-container[data-v-b4fa4b24]{background-color:#FF4655}#floating-alert.alert-success .floating-alert-icon-container[data-v-b4fa4b24]{background-color:#25a949}#floating-alert.alert-info .floating-alert-icon-container[data-v-b4fa4b24]{background-color:#1094D9}#floating-alert.alert-warning .floating-alert-icon-container[data-v-b4fa4b24]{background-color:#FFAD46}#floating-alert hr[data-v-b4fa4b24]{border-top-color:#eee;margin:15px -15px 0 50px}#floating-alert .alert[data-v-b4fa4b24]{padding:15px 15px 20px 15px}#floating-alert .floating-alert-icon-container[data-v-b4fa4b24]{width:50px;position:absolute;top:0;bottom:0;text-align:center;padding-top:16px;border-top-left-radius:4px;border-bottom-left-radius:4px;color:#fff}#floating-alert .floating-alert-message-container[data-v-b4fa4b24]{margin-left:65px;color:#333}#floating-alert .floating-alert-message[data-v-b4fa4b24]{word-wrap:break-word}#floating-alert .floating-alert-close-container[data-v-b4fa4b24]{text-align:right;margin-right:-15px;margin-left:50px;padding:5px}#floating-alert .floating-alert-close-container .floating-alert-btn-close[data-v-b4fa4b24]{border-radius:0;padding:7px 15px;text-transform:uppercase;font-weight:500;background-color:transparent;color:#333;border:none}@media (min-width: 576px){#floating-alert[data-v-b4fa4b24]{width:500px;left:auto;right:15px}}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"floatingAlert",(function(){return m}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alert",class:{"floating-alert-invisible":!e.isVisible,"alert-danger":e.isError,"alert-warning":e.isWarning,"alert-info":e.isInfo,"alert-success":e.isSuccess},attrs:{id:"floating-alert"}},[n("div",{staticClass:"floating-alert-icon-container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.isError||e.isWarning,expression:"isError || isWarning"}]},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}}),n("line",{attrs:{x1:"12",y1:"9",x2:"12",y2:"13"}}),n("line",{attrs:{x1:"12",y1:"17",x2:"12",y2:"17"}})])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isInfo,expression:"isInfo"}]},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),n("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"12"}}),n("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"8"}})])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isSuccess,expression:"isSuccess"}]},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"round"}},[n("polyline",{attrs:{points:"20 6 9 17 4 12"}})])])]),e._v(" "),n("div",{staticClass:"floating-alert-message-container"},[n("p",{directives:[{name:"show",rawName:"v-show",value:!!e.cfgFloatingAlert.title,expression:"!!cfgFloatingAlert.title"}],staticClass:"floating-alert-spacing-bottom"},[e._v(e._s(e.cfgFloatingAlert.title))]),e._v(" "),n("p",{staticClass:"floating-alert-message",domProps:{innerHTML:e._s(e.cfgFloatingAlert.message)}})]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"floating-alert-close-container"},[n("button",{staticClass:"floating-alert-btn-close",attrs:{type:"button"},on:{click:function(t){return e.hide()}}},[e._v(e._s(e.btnCloseName))])])])};r._withStripped=!0;var i=n(2),o=n(1),a=n.n(o),s=new i.Bus,l=0,f=1,c=2,u=3,d="floating-alert.show",p="floating-alert.hide",g={error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={title:"Oops!",message:"",timeVisible:3e4};this._show(Object.assign(t,e,{visible:!0,type:l}))},warn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={title:"",message:"",timeVisible:3e4};this._show(Object.assign(t,e,{visible:!0,type:f}))},info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={title:"",message:"",timeVisible:3e4};this._show(Object.assign(t,e,{visible:!0,type:c}))},success:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={title:"",message:"",timeVisible:3e4};this._show(Object.assign(t,e,{visible:!0,type:u}))},hide:function(){this._hide()},_show:function(e){s.emit(d,e)},_hide:function(){s.emit(p)}},v={name:"FloatingAlert",props:{language:{type:String,default:"en"}},data:function(){return{btnCloseName:a.a[this.language||"en"].btnCloseName,idTimeoutTimeVisible:0,cfgFloatingAlert:{visible:!1,type:l,title:"",message:""}}},methods:{hide:function(){clearTimeout(this.idTimeoutTimeVisible),this.cfgFloatingAlert.visible=!1}},mounted:function(){var e=this;s.on(d,(function(t){Object.assign(e.cfgFloatingAlert,t),e.idTimeoutTimeVisible=setTimeout((function(){e.hide()}),e.cfgFloatingAlert.timeVisible)})),s.on(p,(function(){e.hide()}))},computed:{isError:function(){return this.cfgFloatingAlert.type===l},isWarning:function(){return this.cfgFloatingAlert.type===f},isInfo:function(){return this.cfgFloatingAlert.type===c},isSuccess:function(){return this.cfgFloatingAlert.type===u},isVisible:function(){return this.cfgFloatingAlert.visible}},watch:{language:function(){this.btnCloseName=a.a[this.language||"en"].btnCloseName}}};n(7);var h=function(e,t,n,r,i,o,a,s){var l,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},f._ssrRegister=l):i&&(l=s?function(){i.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var c=f.render;f.render=function(e,t){return l.call(t),c(e,t)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:f}}(v,r,[],!1,null,"b4fa4b24",null);h.options.__file="src/floating-alert.vue";var b=h.exports,m=(t.default={install:function(e){e.prototype.$floatingAlert={error:function(e){g.error(e)},success:function(e){g.success(e)},info:function(e){g.info(e)},warn:function(e){g.warn(e)},hide:function(){g.hide()}},e.component(b.name,b)}},g)},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,f=!1,c=function(){},u=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){f=n,u=i||{};var a=r(e,t);return g(a),function(t){for(var n=[],i=0;i<a.length;i++){var s=a[i];(l=o[s.id]).refs--,n.push(l)}t?g(a=r(e,t)):a=[];for(i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete o[l.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(h(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(h(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(f)return c;r.parentNode.removeChild(r)}if(d){var i=l++;r=s||(s=v()),t=x.bind(null,r,i,!1),n=x.bind(null,r,i,!0)}else r=v(),t=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,m=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function y(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}));