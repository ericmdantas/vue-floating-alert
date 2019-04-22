!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-floating-alert"]=e():t["vue-floating-alert"]=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=10)}([function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(11).default)("2c9001d6",r,!1,{})},function(t,e,n){t.exports={ca:n(3),en:n(4),fr:n(5),"pt-BR":n(6)}},function(t,e,n){var r,i,o;i=[e],void 0===(o="function"==typeof(r=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();t.Bus=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this._q=[]}return n(t,[{key:"emit",value:function(t,e){if(!t)throw new TypeError(this._invalidTokenMessage("emit"));for(var n=0,r=this._q.length;n<r;n++)if(this._q[n].token===t&&(this._q[n].cb(e),this._q[n].once)){this._q.splice(n,1);break}}},{key:"on",value:function(t,e){var n=this;if(!t)throw new TypeError(this._invalidTokenMessage("on"));var r=this._genId();return this._q.push({_id:r,token:t,cb:e,once:!1,del:!1}),function(){for(var t=0,e=n._q.length;t<e;t++)if(n._q[t]._id===r){n._q.splice(t,1);break}}}},{key:"once",value:function(t,e){if(!t)throw new TypeError(this._invalidTokenMessage("once"));this._q.push({_id:this._genId(),token:t,cb:e,once:!0,del:!1})}},{key:"off",value:function(){for(var t=this,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];"object"===(void 0===r?"undefined":e(r))&&r.length&&r.forEach(function(e){for(var n=0,r=t._q.length;n<r;n++)t._q[n].token===e&&(t._q[n].del=!0)}),this._q=this._q.filter(function(t){return!t.del})}},{key:"_invalidTokenMessage",value:function(t){return"["+t+"] - Token not informed."}},{key:"_genId",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),t}()})?r.apply(e,i):r)||(t.exports=o)},function(t,e){t.exports={btnCloseName:"Cerca"}},function(t,e){t.exports={btnCloseName:"Close"}},function(t,e){t.exports={btnCloseName:"Proche"}},function(t,e){t.exports={btnCloseName:"Fechar"}},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"#floating-alert[data-v-b4fa4b24] {\n  position: fixed;\n  width: 98%;\n  right: 1%;\n  top: 94px;\n  font-size: 1em;\n  border: none;\n  background-color: #fff;\n  padding: 15px 15px 0 0;\n  border-radius: 4px;\n  z-index: 9999;\n  transition: right .3s ease;\n  will-change: right;\n  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n}\n#floating-alert.floating-alert-invisible[data-v-b4fa4b24] {\n    right: -999px;\n}\n#floating-alert.alert-danger .floating-alert-icon-container[data-v-b4fa4b24] {\n    background-color: #FF4655;\n}\n#floating-alert.alert-success .floating-alert-icon-container[data-v-b4fa4b24] {\n    background-color: #25a949;\n}\n#floating-alert.alert-info .floating-alert-icon-container[data-v-b4fa4b24] {\n    background-color: #1094D9;\n}\n#floating-alert.alert-warning .floating-alert-icon-container[data-v-b4fa4b24] {\n    background-color: #FFAD46;\n}\n#floating-alert hr[data-v-b4fa4b24] {\n    border-top-color: #eee;\n    margin: 15px -15px 0 50px;\n}\n#floating-alert .alert[data-v-b4fa4b24] {\n    padding: 15px 15px 20px 15px;\n}\n#floating-alert .floating-alert-icon-container[data-v-b4fa4b24] {\n    width: 50px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    text-align: center;\n    padding-top: 16px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    color: #fff;\n}\n#floating-alert .floating-alert-message-container[data-v-b4fa4b24] {\n    margin-left: 65px;\n    color: #333;\n}\n#floating-alert .floating-alert-message[data-v-b4fa4b24] {\n    word-wrap: break-word;\n}\n#floating-alert .floating-alert-close-container[data-v-b4fa4b24] {\n    text-align: right;\n    margin-right: -15px;\n    margin-left: 50px;\n    padding: 5px;\n}\n#floating-alert .floating-alert-close-container .floating-alert-btn-close[data-v-b4fa4b24] {\n      border-radius: 0;\n      padding: 7px 15px;\n      text-transform: uppercase;\n      font-weight: 500;\n      background-color: transparent;\n      color: #333;\n      border: none;\n}\n@media (min-width: 576px) {\n#floating-alert[data-v-b4fa4b24] {\n      width: 500px;\n      left: auto;\n      right: 15px;\n}\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert",class:{"floating-alert-invisible":!t.isVisible,"alert-danger":t.isError,"alert-warning":t.isWarning,"alert-info":t.isInfo,"alert-success":t.isSuccess},attrs:{id:"floating-alert"}},[n("div",{staticClass:"floating-alert-icon-container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isError||t.isWarning,expression:"isError || isWarning"}]},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}}),n("line",{attrs:{x1:"12",y1:"9",x2:"12",y2:"13"}}),n("line",{attrs:{x1:"12",y1:"17",x2:"12",y2:"17"}})])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isInfo,expression:"isInfo"}]},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),n("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"12"}}),n("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"8"}})])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isSuccess,expression:"isSuccess"}]},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"round"}},[n("polyline",{attrs:{points:"20 6 9 17 4 12"}})])])]),t._v(" "),n("div",{staticClass:"floating-alert-message-container"},[n("p",{directives:[{name:"show",rawName:"v-show",value:!!t.cfgFloatingAlert.title,expression:"!!cfgFloatingAlert.title"}],staticClass:"floating-alert-spacing-bottom"},[t._v(t._s(t.cfgFloatingAlert.title))]),t._v(" "),n("p",{staticClass:"floating-alert-message",domProps:{innerHTML:t._s(t.cfgFloatingAlert.message)}})]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"floating-alert-close-container"},[n("button",{staticClass:"floating-alert-btn-close",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v(t._s(t.btnCloseName))])])])};r._withStripped=!0;var i=n(2),o=n(1),a=n.n(o),s=new i.Bus,l=0,f=1,c=2,u=3,d="floating-alert.show",p="floating-alert.hide",g={error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._show(Object.assign({title:"Oops!",timeVisible:3e4},t,{visible:!0,type:l}))},warn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._show(Object.assign({timeVisible:3e4},t,{visible:!0,type:f}))},info:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._show(Object.assign({timeVisible:3e4},t,{visible:!0,type:c}))},success:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._show(Object.assign({timeVisible:3e4},t,{visible:!0,type:u}))},hide:function(){this._hide()},_show:function(t){s.emit(d,t)},_hide:function(){s.emit(p)}},h={name:"FloatingAlert",props:{language:{type:String,default:"en"}},data:function(){return{btnCloseName:a.a[this.language||"en"].btnCloseName,idTimeoutTimeVisible:0,cfgFloatingAlert:{visible:!1,type:l,title:"Oops!",message:""}}},methods:{hide:function(){clearTimeout(this.idTimeoutTimeVisible),this.cfgFloatingAlert.visible=!1}},mounted:function(){var t=this;s.on(d,function(e){Object.assign(t.cfgFloatingAlert,e),t.idTimeoutTimeVisible=setTimeout(function(){t.hide()},t.cfgFloatingAlert.timeVisible)}),s.on(p,function(){t.hide()})},computed:{isError:function(){return this.cfgFloatingAlert.type===l},isWarning:function(){return this.cfgFloatingAlert.type===f},isInfo:function(){return this.cfgFloatingAlert.type===c},isSuccess:function(){return this.cfgFloatingAlert.type===u},isVisible:function(){return this.cfgFloatingAlert.visible}},watch:{language:function(){this.btnCloseName=a.a[this.language||"en"].btnCloseName}}};n(7);var v=function(t,e,n,r,i,o,a,s){var l,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var c=f.render;f.render=function(t,e){return l.call(e),c(t,e)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:f}}(h,r,[],!1,null,"b4fa4b24",null);v.options.__file="src/floating-alert.vue";var b=v.exports;n.d(e,"floatingAlert",function(){return x});e.default={install:function(t){t.prototype.$floatingAlert={error:function(t){g.error(t)},success:function(t){g.success(t)},info:function(t){g.info(t)},warn:function(t){g.warn(t)},hide:function(){g.hide()}},t.component(b.name,b)}};var x=g},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return g});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,f=!1,c=function(){},u=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(t,e,n,i){f=n,u=i||{};var a=r(t,e);return h(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i];(l=o[s.id]).refs--,n.push(l)}e?h(a=r(t,e)):a=[];for(i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete o[l.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(b(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(b(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function b(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(f)return c;r.parentNode.removeChild(r)}if(p){var i=l++;r=s||(s=v()),e=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(d,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var x,m=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function y(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}}])});