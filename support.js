!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=83)}({0:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",(function(){return r}));var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.closeButton=n,this._setEventListeners()}var t,n,r;return t=e,(n=[{key:"open",value:function(){this.container.classList.add("modal_is-opened")}},{key:"close",value:function(){this.container.classList.remove("modal_is-opened")}},{key:"_setEventListeners",value:function(){var e=this;this.closeButton.addEventListener("click",(function(){e.close()}))}}])&&o(t.prototype,n),r&&o(t,r),e}()},2:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);n(2),n(84);var o=n(0),r=document.querySelector(".header__lk-button"),u=document.querySelector(".burger-menu__button"),c=document.querySelector(".burger-menu"),i=document.querySelector(".main"),l=document.querySelector(".modal_lk"),a=document.querySelector(".popup__close_lk"),s=document.querySelector(".nav-bar__link_lk"),d=document.querySelector(".header__start-button"),p=document.querySelector(".modal_reg"),f=document.querySelector(".popup__close_reg"),_=document.querySelector(".popup__button_reg"),m=document.querySelector(".modal_thanks"),v=document.querySelector(".popup__link"),y=document.querySelector(".modal_recovery"),b=document.querySelector(".popup__button_recovery"),S=document.querySelector(".modal_reset"),q=document.querySelector(".support__bottom-button"),k=document.querySelector(".modal_question"),g=document.querySelector(".popup__close_question"),L=document.querySelector(".modal_thanks-question"),h=document.querySelector(".popup__button_question"),E=new o.a(l,a);r.addEventListener("click",(function(){E.open()})),s.addEventListener("click",(function(){E.open(),c.classList.remove("burger-menu_opened")}));var w=new o.a(p,f);d.addEventListener("click",(function(){w.open()})),u.addEventListener("click",(function(){c.classList.toggle("burger-menu_opened")})),i.addEventListener("click",(function(){c.classList.remove("burger-menu_opened")}));var j=new o.a(m,f);_.addEventListener("click",(function(e){e.preventDefault(),j.open(),w.close()}));var O=new o.a(y,f);v.addEventListener("click",(function(){E.close(),O.open()}));var P=new o.a(S,f);b.addEventListener("click",(function(e){e.preventDefault(),P.open(),O.close()}));var x=new o.a(k,g);q.addEventListener("click",(function(){x.open()}));var M=new o.a(L,g);h.addEventListener("click",(function(e){e.preventDefault(),M.open(),x.close()}))},84:function(e,t,n){}});