"use strict";(self.webpackChunkelao_=self.webpackChunkelao_||[]).push([[885],{5508:(t,e,n)=>{n(4812),n(9070),n(2564);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;i(this,t),this.frequency=e,this.callback=n,this.interval=null,this.update=this.update.bind(this)}var e,n,a;return e=t,(n=[{key:"setCallback",value:function(t){this.callback=t}},{key:"start",value:function(){this.interval||(this.interval=setInterval(this.update,this.frequency))}},{key:"stop",value:function(){this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(){this.callback()}}])&&r(e.prototype,n),a&&r(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(3843),n(3710);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o(this,t),this.callback=e,this.frame=null,this.time=Date.now(),this.update=this.update.bind(this)}var e,n,i;return e=t,(n=[{key:"setCallback",value:function(t){this.callback=t}},{key:"start",value:function(){this.frame||(this.frame=window.requestAnimationFrame(this.update),this.time=Date.now())}},{key:"stop",value:function(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=null)}},{key:"update",value:function(){this.frame=window.requestAnimationFrame(this.update);var t=this.time;this.time=Date.now(),this.callback(this.time-t)}}])&&s(e.prototype,n),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(1249),n(2222);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.55;u(this,t),this.size=e,this.border=n,this.element=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.element.setAttribute("fill","#FFFFFF"),this.element.setAttribute("stroke","none"),this.element.setAttribute("x",-this.border),this.element.setAttribute("y",-this.border),this.element.setAttribute("width",this.size-1+2*this.border),this.element.setAttribute("height",this.size-1+2*this.border)}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){t.appendChild(this.element)}}])&&h(e.prototype,n),i&&h(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(5827),n(1539),n(9753),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(7042),n(8309),n(1038),n(4916);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(a.push(i.value),!e||a.length!==e);o=!0);}catch(t){s=!0,r=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.snake=e,this.element=document.createElementNS("http://www.w3.org/2000/svg","path"),this.element.setAttribute("fill","none"),this.element.setAttribute("stroke","#FF4344"),this.element.setAttribute("stroke-width","0.9"),this.element.setAttribute("stroke-linecap","square"),this.element.setAttribute("d",this.getPath())}var e,n,i;return e=t,n=[{key:"attach",value:function(t){t.appendChild(this.element)}},{key:"getPath",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.snake.positions,n=e.length-1;return e.reduce((function(i,r,a){var o="L",s=f(r,2),l=s[0],u=s[1];if(0===a){var h=f(e[a+1],2),c=h[0],p=h[1];o="M",l+=(1-t)*(c-l),u+=(1-t)*(p-u)}if(a===n){var d=f(e[a-1],2),v=d[0],y=d[1];l+=t*(v-l),u+=t*(y-u)}return"".concat(i," ").concat(o).concat(l,",").concat(u)}),"")}},{key:"update",value:function(t){this.element.setAttribute("d",this.getPath(this.snake.alive?Math.min(t,1):1))}}],n&&d(e.prototype,n),i&&d(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(1532),n(9554),n(4747),n(7327),n(6699),n(2023);function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var b=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;y(this,t),this.pixels=e,this.length=n,this.element=document.createElementNS("http://www.w3.org/2000/svg","g"),this.symbols=new Map,this.element.setAttribute("class","point__container"),this.renderPixel=this.renderPixel.bind(this),this.removePixel=this.removePixel.bind(this)}var e,n,i;return e=t,i=[{key:"createSymbol",value:function(t,e,n){var i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",n),i.setAttribute("d","M".concat(t-.5,",").concat(e-.5," m0.92148,0.50153c0,0.24796 -0.19211,0.39889 -0.42148,0.39889c-0.22937,0 -0.42148,-0.15092 -0.42148,-0.39889c0,-0.2495 0.19223,-0.40196 0.42148,-0.40196c0.22937,0.00012 0.42148,0.15246 0.42148,0.40196zm-0.23554,0c0,-0.12934 -0.05885,-0.18937 -0.18594,-0.18937c-0.12709,0 -0.18594,0.06002 -0.18594,0.18937c0,0.12628 0.05885,0.1863 0.18594,0.1863c0.12709,0 0.18594,-0.06002 0.18594,-0.1863z")),i.setAttribute("class","point color-".concat(n)),i.style.transformOrigin="".concat(t,"px ").concat(e,"px"),i}}],(n=[{key:"attach",value:function(t){t.appendChild(this.element)}},{key:"getRandomColor",value:function(){return Math.floor(Math.random()*this.length)}},{key:"renderPixel",value:function(t){if(!this.symbols.has(t)){var e=(0,this.constructor.createSymbol)(t.x,t.y,this.getRandomColor());this.element.appendChild(e),this.symbols.set(t,e)}}},{key:"removePixel",value:function(t){var e=this.symbols.get(t);this.element.removeChild(e),this.symbols.delete(t)}},{key:"update",value:function(){var t=this;this.pixels.forEach(this.renderPixel),Array.from(this.symbols.keys()).filter((function(e){return!t.pixels.includes(e)})).forEach(this.removePixel)}}])&&m(e.prototype,n),i&&m(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.snake=e,this.container=null,this.element=document.createElementNS("http://www.w3.org/2000/svg","g"),this.element.setAttribute("class","crash__symbol_container")}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){this.container=t,this.container.appendChild(this.element)}},{key:"createSymbol",value:function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","text");e.innerHTML=t,e.setAttribute("x",0+.1*(Math.random()-.5)),e.setAttribute("y",0+.1*(Math.random()-.5)),e.setAttribute("class","crash__symbol"),this.element.appendChild(e)}},{key:"update",value:function(){if(this.snake.crash){if(!this.element.children.length){var t=this.snake,e=t.crash,n=t.head,i=(e[0]+n[0])/2-1,r=(e[1]+n[1])/2-1;this.element.setAttribute("style","transform: translate(".concat(i,"px, ").concat(r,"px);")),this.createSymbol("@"),this.createSymbol("#"),this.createSymbol("$"),this.createSymbol(";"),this.createSymbol("?"),this.container.classList.add("shake")}}else this.element.children.length&&(this.element.innerHTML="",this.container.classList.remove("shake"))}}])&&w(e.prototype,n),i&&w(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(9714);function k(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var A=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.snake=e,this.score=null,this.element=document.createElementNS("http://www.w3.org/2000/svg","text"),this.element.setAttribute("class","score")}var e,n,i;return e=t,n=[{key:"attach",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5;this.element.setAttribute("x",e-1+n),this.element.setAttribute("y",.1-i),t.appendChild(this.element)}},{key:"update",value:function(){this.score!==this.snake.score&&(this.score=this.snake.score,this.element.innerHTML=this.score.toString())}}],n&&k(e.prototype,n),i&&k(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.snake=e,this.alive=!0,this.container=null,this.element=document.createElement("div"),this.element.innerHTML='\n            <p>Score :</p>\n            <p class="end__score"></p>\n            <p class="message">Appuyez pour rejouer <span>_</span></p>\n            <div class="arrows">\n                <div class="icon icon--arrow up"></div>\n                <div class="break"></div>\n                <div class="icon icon--arrow left"></div>\n                <div class="icon icon--arrow down"></div>\n                <div class="icon icon--arrow right"></div>\n            </div\n        ',this.element.setAttribute("class","snake__end-panel"),this.score=this.element.querySelector(".end__score")}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){this.container=t}},{key:"update",value:function(){this.alive!==this.snake.alive&&(this.score.innerHTML=this.snake.score,this.alive=this.snake.alive,this.alive?this.container.removeChild(this.element):this.container.appendChild(this.element))}}])&&x(e.prototype,n),i&&x(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var E=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.element.setAttribute("viewBox","0 0 300 100"),this.element.setAttribute("width",2.1),this.element.setAttribute("height",.7),this.element.setAttribute("class","snake__logo");var n=this.constructor,i=n.createPath,r=n.createRect;n.paths.forEach((function(t){return e.element.appendChild(i(t))})),this.element.appendChild(r(256.98,91.44,59.96,15.85))}var e,n,i;return e=t,n=[{key:"attach",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5;this.element.setAttribute("x",-n),this.element.setAttribute("y",-n-i),t.appendChild(this.element)}}],i=[{key:"paths",get:function(){return["m65.04,65.04l-44.27,0c1.31,7.84 5.35,11.23 13.58,11.23c6.27,0 9.27,-1.96 12.41,-8.23l16.98,7.31c-4.44,11.23 -14.24,17.37 -29.91,17.37c-20.24,0 -33.83,-13.32 -33.83,-33.43c0,-20.63 13.32,-34.48 33.17,-34.48c19.2,0 32,13.32 32,33.43c0,2.23 0,3.93 -0.13,6.8zm-44.4,-12.93l24.94,0c-0.26,-8.36 -4.31,-11.49 -12.02,-11.49c-7.83,0 -11.75,3.52 -12.92,11.49z","m75.23,0l19.85,0l0,91.42l-19.85,0l0,-91.42z","m175.53,26.12l0,65.3l-19.85,0l0,-14.63c-3.66,10.32 -11.1,15.93 -21.55,15.93c-18.68,0 -28.99,-13.58 -28.99,-33.83c0,-20.5 9.79,-34.09 27.69,-34.09c11.1,0 19.07,5.75 22.85,16.46l0,-15.14l19.85,0zm-19.2,32.78c0,-10.97 -5.09,-16.06 -15.93,-16.06c-10.45,0 -15.41,5.09 -15.41,16.06c0,10.71 4.96,15.8 15.41,15.8c10.84,0 15.93,-5.09 15.93,-15.8z","m256.63,58.9c0,21.03 -16.19,33.83 -35.52,33.83c-19.33,0 -35.52,-12.8 -35.52,-33.83c0,-21.16 16.2,-34.09 35.52,-34.09c19.33,0.01 35.52,12.93 35.52,34.09zm-19.85,0c0,-10.97 -4.96,-16.06 -15.67,-16.06c-10.71,0 -15.67,5.09 -15.67,16.06c0,10.71 4.96,15.8 15.67,15.8c10.71,0 15.67,-5.09 15.67,-15.8z"]}},{key:"createPath",value:function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("d",t),e}},{key:"createRect",value:function(t,e,n,i){var r=document.createElementNS("http://www.w3.org/2000/svg","rect");return r.setAttribute("x",t),r.setAttribute("y",e),r.setAttribute("width",n),r.setAttribute("height",i),r}}],n&&P(e.prototype,n),i&&P(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.createElement("button"),this.element.innerHTML="&times;",this.element.className="close-button",this.element.type="button",this.element.addEventListener("click",e)}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){t.appendChild(this.element)}}])&&S(e.prototype,n),i&&S(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var z=function(){function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3.5;T(this,t),this.map=new c(e.size),this.snake=new v(e.snake),this.pixels=new b(e.pixels),this.crash=new g(e.snake,this.container),this.score=new A(e.snake),this.end=new C(e.snake),this.logo=new E,this.close=new j(n),this.touchControls=i,this.margin=r,this.element=document.createElement("div"),this.svg=this.constructor.createElement(e.size,this.margin),this.container=document.createElementNS("http://www.w3.org/2000/svg","g"),this.element.appendChild(this.svg),this.svg.appendChild(this.container),this.element.className="snake-container",this.period=e.period,this.time=0,this.width=null,this.height=null,this.update=this.update.bind(this),this.map.attach(this.container),this.snake.attach(this.container),this.pixels.attach(this.container),this.score.attach(this.container,e.size,this.map.border),this.logo.attach(this.container,e.size,this.map.border),this.crash.attach(this.container),this.end.attach(this.element),this.close.attach(this.element),this.touchControls.attach(this.element)}var e,n,i;return e=t,i=[{key:"createElement",value:function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns","http://www.w3.org/2000/svg"),n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),n.setAttribute("version","1.1"),n.setAttribute("viewBox","".concat(-e," ").concat(-e," ").concat(t-1+2*e," ").concat(t-1+2*e)),n.setAttribute("class","snake-renderer"),n}}],(n=[{key:"attach",value:function(){document.body.classList.add("snake"),document.body.appendChild(this.element)}},{key:"detach",value:function(){document.body.classList.remove("snake"),document.body.removeChild(this.element)}},{key:"onGameFrame",value:function(){this.time=0}},{key:"update",value:function(t){this.time+=t,this.snake.update(this.time/this.period%this.period),this.pixels.update(),this.crash.update(),this.score.update(),this.end.update()}}])&&O(e.prototype,n),i&&O(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(3290),n(561),n(2772),n(5212),n(9826),n(4723);function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(a.push(i.value),!e||a.length!==e);o=!0);}catch(t){s=!0,r=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}(t,e)||M(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t){return function(t){if(Array.isArray(t))return N(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||M(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var D=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.alive=!1,this.horizontal=!0,this.forward=!0,this.positions=[],this.lastTail=null,this.crash=null,this.died=null,this.reset()}var e,n,i;return e=t,i=[{key:"length",get:function(){return 5}},{key:"defaultPositions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.length,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Array(t).fill(null).map((function(i,r){return[e+t-r,n]}))}}],(n=[{key:"head",get:function(){return this.positions[0]}},{key:"score",get:function(){return this.positions.length-this.constructor.length}},{key:"eat",value:function(){this.lastTail&&(this.positions.push(this.lastTail),this.lastTail=null)}},{key:"die",value:function(t){this.alive=!1,this.crash=t,this.died=Date.now()}},{key:"reset",value:function(){var t;this.positions.length=0,(t=this.positions).push.apply(t,I(this.constructor.defaultPositions())),this.horizontal=!0,this.forward=!0,this.alive=!0,this.crash=null,this.died=null}},{key:"isHorizontal",value:function(){return this.positions[0][1]===this.positions[1][1]}},{key:"getDirection",value:function(){var t=L(this.positions,2),e=t[0],n=t[1],i=L(e,2),r=i[0],a=i[1],o=L(n,2),s=o[0],l=o[1];return a===l?r>s?"right":"left":a>l?"down":"up"}},{key:"update",value:function(t){this.lastTail=this.positions.pop(),this.positions.unshift(t)}},{key:"getNextHead",value:function(){var t=this.forward?1:-1,e=L(this.head,2),n=e[0],i=e[1];return this.horizontal?[n+t,i]:[n,i+t]}},{key:"getNextTail",value:function(){return this.positions.slice(0,-1)}},{key:"onInput",value:function(t){switch(t){case"left":this.setDirection(!0,!1);break;case"right":this.setDirection(!0,!0);break;case"up":this.setDirection(!1,!1);break;case"down":this.setDirection(!1,!0);break;default:throw new Error("Unsopported direction ".concat(t))}}},{key:"setDirection",value:function(t,e){t!==this.isHorizontal()&&(this.horizontal=t,this.forward=e)}}])&&_(e.prototype,n),i&&_(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var H=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n,i;return e=t,i=[{key:"getRandomPoint",value:function(t){return Math.floor(Math.random()*(t+1))}}],(n=[{key:"match",value:function(t,e){return t===this.x&&e===this.y}}])&&F(e.prototype,n),i&&F(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(a.push(i.value),!e||a.length!==e);o=!0);}catch(t){s=!0,r=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return a}(t,e)||K(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t){return function(t){if(Array.isArray(t))return U(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||K(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){if(t){if("string"==typeof t)return U(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(t,e):void 0}}function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function $(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var G=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:225,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;$(this,t),this.period=e,this.size=n,this.snake=new D,this.pixels=[],this.timeouts=[],this.addPixel=this.addPixel.bind(this)}var e,n,i;return e=t,n=[{key:"reset",value:function(){var t=this;this.snake.reset(),this.timeouts.forEach((function(t){return clearTimeout(t)})),this.timeouts.length=0,this.pixels.length=0,this.timeouts=new Array(5).fill(null).map((function(e,n){return setTimeout(t.addPixel,1500*n)}))}},{key:"addPixel",value:function(){var t=this.generatePixel();t&&this.pixels.push(t)}},{key:"update",value:function(){if(this.snake.alive){var t=this.snake.getNextHead(),e=this.getPixelAt.apply(this,q(t));e&&(this.pixels.splice(this.pixels.indexOf(e),1),this.snake.eat(),this.timeouts.push(setTimeout(this.addPixel,500+500*Math.random()))),this.hasCollision.apply(this,q(t))?this.end(t):this.snake.update(t)}}},{key:"onInput",value:function(t){if(!this.snake.alive){if(Date.now()-this.snake.died<3e3)return;return this.reset()}this.snake.onInput(t)}},{key:"hasCollision",value:function(t,e){var n=this.snake.getNextTail();return t<0||t>=this.size||e<0||e>=this.size||n.some((function(n){var i=R(n,2),r=i[0],a=i[1];return r===t&&a===e}))}},{key:"generatePixel",value:function(){for(var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,i=0;null!==this.getPixelAt(t,e)||this.hasCollision(t,e);)if(t=H.getRandomPoint(this.size),e=H.getRandomPoint(this.size),++i>n)return null;return new H(t,e)}},{key:"getPixelAt",value:function(t,e){return void 0===t||void 0===e||this.pixels.find((function(n){return n.match(t,e)}))||null}},{key:"end",value:function(t){console.info("💀"),this.snake.die(t)}}],n&&B(e.prototype,n),i&&B(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function X(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var J=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onChange=e,this.x=[!1,!1],this.y=[!1,!1],this.left=!1,this.right=!1,this.up=!1,this.down=!1,this.onKey=this.onKey.bind(this)}var e,n,i;return e=t,(n=[{key:"start",value:function(){document.addEventListener("keydown",this.onKey),document.addEventListener("keyup",this.onKey)}},{key:"stop",value:function(){document.removeEventListener("keydown",this.onKey),document.removeEventListener("keyup",this.onKey)}},{key:"onKey",value:function(t){var e=t.keyCode,n="keydown"===t.type;switch(e){case 37:this.x[0]=n;break;case 39:this.x[1]=n;break;case 38:this.y[0]=n;break;case 40:this.y[1]=n}this.resolve()}},{key:"resolve",value:function(){return this.setLeft(this.x[0]&&this.x[0]!==this.x[1])?this.onChange("left",this.left):this.setRight(this.x[1]&&this.x[0]!==this.x[1])?this.onChange("right",this.right):this.setUp(this.y[0]&&this.y[0]!==this.y[1])?this.onChange("up",this.up):this.setDown(this.y[1]&&this.y[0]!==this.y[1])?this.onChange("down",this.down):void 0}},{key:"setLeft",value:function(t){return this.left!==t&&(this.left=t,!0)}},{key:"setRight",value:function(t){return this.right!==t&&(this.right=t,!0)}},{key:"setUp",value:function(t){return this.up!==t&&(this.up=t,!0)}},{key:"setDown",value:function(t){return this.down!==t&&(this.down=t,!0)}}])&&X(e.prototype,n),i&&X(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var V=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onChange=e,this.snake=n,this.available="ontouchstart"in window,this.element=document.createElement("div"),this.element.className="touch-control",this.element.innerHTML='\n            <div class="pad">\n                <div>\n                    <button type="button" value="up" class="icon icon--arrow"></button>\n                    <button type="button" value="right" class="icon icon--arrow"></button>\n                </div>\n                <div>\n                    <button type="button" value="left" class="icon icon--arrow"></button>\n                    <button type="button" value="down" class="icon icon--arrow"></button>\n                </div>\n            </div>\n            <div class="pad">\n                <div>\n                    <button type="button" value="up" class="icon icon--arrow"></button>\n                    <button type="button" value="right" class="icon icon--arrow"></button>\n                </div>\n                <div>\n                    <button type="button" value="left" class="icon icon--arrow"></button>\n                    <button type="button" value="down" class="icon icon--arrow"></button>\n                </div>\n            </div>\n        ',this.onTouch=this.onTouch.bind(this)}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){this.available&&t.appendChild(this.element)}},{key:"start",value:function(){var t=this;this.available&&Array.from(this.element.querySelectorAll("button")).forEach((function(e){return e.addEventListener("touchstart",t.onTouch,!1)}))}},{key:"stop",value:function(){var t=this;this.available&&Array.from(this.element.querySelectorAll("button")).forEach((function(e){return e.removeEventListener("touchstart",t.onTouch,!1)}))}},{key:"onTouch",value:function(t){var e=t.currentTarget;this.onChange(e.value,!0)}}])&&Q(e.prototype,n),i&&Q(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.start=this.start.bind(this),this.update=this.update.bind(this),this.onInput=this.onInput.bind(this),this.stop=this.stop.bind(this),this.game=new G,this.keyboardControls=new J(this.onInput),this.touchControls=new V(this.onInput,this.game.snake),this.renderer=new z(this.game,this.stop,this.touchControls),this.gameLoop=new a(this.game.period,this.update),this.renderLoop=new l(this.renderer.update)}var e,n,i;return e=t,(n=[{key:"start",value:function(){this.game.reset(),this.renderer.attach(),this.renderLoop.start(),this.keyboardControls.start(),this.touchControls.start(),this.gameLoop.start()}},{key:"stop",value:function(){this.renderLoop.stop(),this.gameLoop.stop(),this.keyboardControls.stop(),this.touchControls.stop(),this.renderer.detach(),this.game.reset()}},{key:"onInput",value:function(t,e){e&&this.game.onInput(t)}},{key:"update",value:function(){this.game.update(),this.renderer.onGameFrame()}}])&&W(e.prototype,n),i&&W(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();window.dispatchEvent(new CustomEvent("snake-ready",{detail:{Engine:Y}}))}},t=>{t.O(0,[646,787],(()=>{return e=5508,t(t.s=e);var e}));t.O()}]);