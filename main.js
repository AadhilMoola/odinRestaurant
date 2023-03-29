(()=>{"use strict";var e,n,t,o,r,a,i,c,s,l,d,u,p,f,m={28:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,'* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n.header{\n    background-color: black;\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    \n    \n}\n\n.name{\n    color: aliceblue;\n    align-self: center;\n    font-size: 3rem;\n}\n\n.btnBG{\n    background-color: rgb(216, 19, 19);\n    height: 10vh;\n    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5vw;\n    \n}\n\n/* CSS */\n.button-40 {\n  background-color: #000000;\n  border: 1px solid transparent;\n  border-radius: .75rem;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  flex: 0 0 auto;\n  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n  font-size: 1.125rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n  padding: .75rem 1.2rem;\n  text-align: center;\n  text-decoration: none #6B7280 solid;\n  text-decoration-thickness: auto;\n  transition-duration: .2s;\n  transition-property: background-color,border-color,color,fill,stroke;\n  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: auto;\n}\n\n.button-40:hover {\n  background-color: #ffffff;\n  color: black;\n}\n\n.button-40:focus {\n  box-shadow: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n@media (min-width: 768px) {\n  .button-40 {\n    padding: .75rem 1.5rem;\n  }\n}\n\n\n.footer{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 2vh;\n    text-align: center;\n    color: #FFFFFF;\n    background-color: #000000;\n    box-shadow: 2px -3px 2px 3px rgba(0, 0, 0, 0.4);\n    \n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(379),n=v.n(e),t=v(795),o=v.n(t),r=v(569),a=v.n(r),i=v(565),c=v.n(i),s=v(216),l=v.n(s),d=v(589),u=v.n(d),p=v(28),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector("content"),function(e){let n=document.createElement("div");n.classList.add("header"),e.appendChild(n);let t=document.createElement("div");t.classList.add("name"),t.textContent="The Pizza Place",n.appendChild(t);let o=document.createElement("div");o.classList.add("btnBG");let r=document.createElement("button"),a=document.createElement("button"),i=document.createElement("button");r.textContent="Home",a.textContent="Menu",i.textContent="Contact",[r,a,i].forEach((e=>{e.classList.add("button-40"),o.appendChild(e)})),e.appendChild(o);let c=document.createElement("div");c.classList.add("page"),e.appendChild(c);let s=document.createElement("div");s.classList.add("footer"),s.textContent=" Created by Aadhil Moola for The Odin Project",e.appendChild(s)}(content)})();