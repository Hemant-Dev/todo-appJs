(()=>{"use strict";var e={899:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(354),o=t.n(r),a=t(314),c=t.n(a)()(o());c.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\nh1 {\n  color: firebrick;\n}\n\n.container {\n  background-color: lightblue;\n  height: 100vh;\n}\n","",{version:3,sources:["webpack://./src/styles/website.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;AACf",sourcesContent:["* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nh1 {\r\n  color: firebrick;\r\n}\r\n\r\n.container {\r\n  background-color: lightblue;\r\n  height: 100vh;\r\n}\r\n"],sourceRoot:""}]);const i=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{let e=[];function n(){e.push(function(e,n){const t=document.createElement("div"),r=document.createElement("h3"),o=document.createElement("p");return t.classList.add("todo-item"),t.style.backgroundColor="lime",r.textContent="Buy Monitor",o.textContent="Get a good 27' from Amazon",t.appendChild(r),t.appendChild(o),t}()),function(){const n=document.querySelector(".todo-container");n.textContent="";for(let t of e)n.appendChild(t)}()}var r=t(72),o=t.n(r),a=t(825),c=t.n(a),i=t(659),s=t.n(i),u=t(56),d=t.n(u),l=t(540),p=t.n(l),f=t(113),m=t.n(f),v=t(899),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),o()(v.A,h),v.A&&v.A.locals&&v.A.locals,function(){const e=document.createElement("div"),t=document.querySelector("body");e.classList.add("container"),t.appendChild(e),e.appendChild(function(e){const n=document.createElement("h1");return n.textContent="Todo App",n}()),e.appendChild(function(){const e=document.createElement("nav");return e.classList.add("nav-container"),e.appendChild(function(e){const t=document.createElement("button");return t.textContent="Add Todo",t.classList.add("nav-item"),t.addEventListener("click",n),t}()),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("todo-container"),e}())}()})()})();
//# sourceMappingURL=bundlec9f8ccc709e8854f57bc.js.map