/*!
* Vue Material v0.8.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=472)})({0:function(e,t){e.exports=function(e,t,n,r,i){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):n&&(d=n),d){var c=u.functional,l=c?u.render:u.beforeCreate;c?u.render=function(e,t){return d.call(t),l(e,t)}:u.beforeCreate=l?[].concat(l,d):[d]}return{esModule:o,exports:s,options:u}}},1:function(e,t,n){"use strict";function r(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||r(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return r(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},351:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-speed-dial",s.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(352),s=r(o),a=n(356),u=r(a);e.exports=t.default},352:function(e,t,n){function r(e){n(353)}var i=n(0)(n(354),n(355),r,null,null);e.exports=i.exports},353:function(e,t){},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default={name:"md-speed-dial",props:{mdOpen:{type:String,default:"click"},mdMode:{type:String,default:"fling"},mdDirection:{type:String,default:"top"}},mixins:[i.default],data:function(){return{fabTrigger:null,active:!1}},computed:{classes:function(){var e={"md-active":this.active};return e["md-mode-"+this.mdMode]=!0,e["md-direction-"+this.mdDirection]=!0,e}},methods:{closeSpeedDial:function(e){!e.target!==this.fabTrigger&&this.fabTrigger.contains(e.target)||(this.active=!1,document.body.removeEventListener("click",this.closeSpeedDial))},toggleSpeedDial:function(){var e=this;this.active=!this.active,window.setTimeout((function(){document.body.addEventListener("click",e.closeSpeedDial)}),50)}},mounted:function(){var e=this;this.$nextTick((function(){e.fabTrigger=e.$el.querySelector("[md-fab-trigger]"),"click"===e.mdOpen?e.fabTrigger.addEventListener("click",e.toggleSpeedDial):(e.$el.addEventListener("mouseenter",e.toggleSpeedDial),e.$el.addEventListener("mouseleave",e.closeSpeedDial))}))},beforeDestroy:function(){this.fabTrigger.removeEventListener("click",this.toggleSpeedDial),document.body.removeEventListener("click",this.closeSpeedDial)}},e.exports=t.default},355:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-speed-dial",class:[e.themeClass,e.classes]},[e._t("default")],2)},staticRenderFns:[]}},356:function(e,t){e.exports=""},472:function(e,t,n){e.exports=n(351)}})}));