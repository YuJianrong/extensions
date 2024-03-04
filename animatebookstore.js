(()=>{"use strict";function e(e){return document.querySelector(`#downloader-setting .downloader-helper-${e.replace(/\./g,".downloader-helper-")}`)}function n(e){return new Promise((n=>{const t=new XMLHttpRequest;t.open("GET",e),t.responseType="arraybuffer",t.onload=()=>n(t.response),t.send()}))}function t(e=0){return new Promise((n=>setTimeout((()=>n()),e)))}let o=0,r=0;function a(){r=0}function i(){r=0,o++}function s(){o--,o<0&&(o=0),0===o&&a&&a()}const d=new WeakSet,l=[];function c(e){return l.some((n=>n instanceof RegExp?n.test(e):e.startsWith(n)))}!function(){const e=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,t,...o){return c(t)&&d.add(this),n.call(this,e,t,...o)},XMLHttpRequest.prototype.send=function(...n){return d.has(this)||i(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(d.has(this)||s())})),e.call(this,...n)}}();const u=new Set;window.addEventListener("message",(e=>{const n=e.data;n&&("request-end"===n.type&&u.has(n.requestId)?(u.delete(n.requestId),s()):"request-start"===n.type&&(u.add(n.requestId),i()))}),!1);const p=window.fetch;window.fetch=async function(e,...n){const t="string"==typeof e?e:e instanceof Request?e.url:e.href,o=p.call(this,e,...n);c(t)||(i(),o.finally((()=>s())));const r=await o;return["blob","arrayBuffer","text","json"].forEach((e=>{const n=Response.prototype[e];r[e]=function(){const e=n.call(this);return i(),e.finally((()=>s())),e}})),r};const h=[],w=CanvasRenderingContext2D.prototype.drawImage;async function g(n){if(n.startsWith("data:image/png")){const e=await new Promise((e=>{const t=new Image;t.onload=()=>e(t),t.src=n})),t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const o=t.getContext("2d");w.call(o,e,0,0),n=t.toDataURL("image/jpeg",1)}for(let e=0;e<3;++e)if(h[h.length-1-e]===n)return!1;return a(),h.push(n),e("captureNum").textContent=`${h.length}`,e("preview").src=n,!0}function f(){return h}new Set,HTMLCanvasElement.prototype.toDataURL||window.bk_toDataURL;var v=Uint8Array,y=Uint16Array,m=Int32Array,b=new v([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),x=new v([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),E=(new v([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(e,n){for(var t=new y(31),o=0;o<31;++o)t[o]=n+=1<<e[o-1];var r=new m(t[30]);for(o=1;o<30;++o)for(var a=t[o];a<t[o+1];++a)r[a]=a-t[o]<<5|o;return{b:t,r}}),L=E(b,2),k=L.b,C=L.r;k[28]=258,C[258]=28;for(var R=E(x,0),q=(R.b,R.r,new y(32768)),S=0;S<32768;++S){var A=(43690&S)>>1|(21845&S)<<1;A=(61680&(A=(52428&A)>>2|(13107&A)<<2))>>4|(3855&A)<<4,q[S]=((65280&A)>>8|(255&A)<<8)>>1}var D=new v(288);for(S=0;S<144;++S)D[S]=8;for(S=144;S<256;++S)D[S]=9;for(S=256;S<280;++S)D[S]=7;for(S=280;S<288;++S)D[S]=8;var I=new v(32);for(S=0;S<32;++S)I[S]=5;var T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],M=function(e,n,t){var o=new Error(n||T[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,M),!t)throw o;return o},H=new v(0),U=function(){for(var e=new Int32Array(256),n=0;n<256;++n){for(var t=n,o=9;--o;)t=(1&t&&-306674912)^t>>>1;e[n]=t}return e}(),z=function(e,n,t){for(;t;++n)e[n]=t,t>>>=8},B="undefined"!=typeof TextEncoder&&new TextEncoder,P="undefined"!=typeof TextDecoder&&new TextDecoder;try{P.decode(H,{stream:!0})}catch(e){}function X(e,n){if(n){for(var t=new v(e.length),o=0;o<e.length;++o)t[o]=e.charCodeAt(o);return t}if(B)return B.encode(e);var r,a,i,s=e.length,d=new v(e.length+(e.length>>1)),l=0,c=function(e){d[l++]=e};for(o=0;o<s;++o){if(l+5>d.length){var u=new v(l+8+(s-o<<1));u.set(d),d=u}var p=e.charCodeAt(o);p<128||n?c(p):p<2048?(c(192|p>>6),c(128|63&p)):p>55295&&p<57344?(c(240|(p=65536+(1047552&p)|1023&e.charCodeAt(++o))>>18),c(128|p>>12&63),c(128|p>>6&63),c(128|63&p)):(c(224|p>>12),c(128|p>>6&63),c(128|63&p))}return r=d,(null==(a=0)||a<0)&&(a=0),(null==(i=l)||i>r.length)&&(i=r.length),new v(r.subarray(a,i))}var $=function(e){var n=0;if(e)for(var t in e){var o=e[t].length;o>65535&&M(9),n+=o+4}return n},W=function(e,n,t,o,r,a,i,s){var d=o.length,l=t.extra,c=s&&s.length,u=$(l);z(e,n,null!=i?33639248:67324752),n+=4,null!=i&&(e[n++]=20,e[n++]=t.os),e[n]=20,n+=2,e[n++]=t.flag<<1|(a<0&&8),e[n++]=r&&8,e[n++]=255&t.compression,e[n++]=t.compression>>8;var p=new Date(null==t.mtime?Date.now():t.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&M(10),z(e,n,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>1),n+=4,-1!=a&&(z(e,n,t.crc),z(e,n+4,a<0?-a-2:a),z(e,n+8,t.size)),z(e,n+12,d),z(e,n+14,u),n+=16,null!=i&&(z(e,n,c),z(e,n+6,t.attrs),z(e,n+10,i),n+=14),e.set(o,n),n+=d,u)for(var w in l){var g=l[w],f=g.length;z(e,n,+w),z(e,n+2,f),e.set(g,n+4),n+=4+f}return c&&(e.set(s,n),n+=c),n},j=function(){function e(e){var n;this.filename=e,this.c=(n=-1,{p:function(e){for(var t=n,o=0;o<e.length;++o)t=U[255&t^e[o]]^t>>>8;n=t},d:function(){return~n}}),this.size=0,this.compression=0}return e.prototype.process=function(e,n){this.ondata(null,e,n)},e.prototype.push=function(e,n){this.ondata||M(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},e}(),O=function(){function e(e){this.ondata=e,this.u=[],this.d=1}return e.prototype.add=function(e){var n=this;if(this.ondata||M(5),2&this.d)this.ondata(M(4+8*(1&this.d),0,1),null,!1);else{var t=X(e.filename),o=t.length,r=e.comment,a=r&&X(r),i=o!=e.filename.length||a&&r.length!=a.length,s=o+$(e.extra)+30;o>65535&&this.ondata(M(11,0,1),null,!1);var d=new v(s);W(d,0,e,t,i,-1);var l=[d],c=function(){for(var e=0,t=l;e<t.length;e++){var o=t[e];n.ondata(null,o,!1)}l=[]},u=this.d;this.d=0;var p=this.u.length,h=function(e,n){var t={};for(var o in e)t[o]=e[o];for(var o in n)t[o]=n[o];return t}(e,{f:t,u:i,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(c(),u){var e=n.u[p+1];e?e.r():n.d=1}u=1}}),w=0;e.ondata=function(t,o,r){if(t)n.ondata(t,o,r),n.terminate();else if(w+=o.length,l.push(o),r){var a=new v(16);z(a,0,134695760),z(a,4,e.crc),z(a,8,w),z(a,12,e.size),l.push(a),h.c=w,h.b=s+w+16,h.crc=e.crc,h.size=e.size,u&&h.r(),u=1}else u&&c()},this.u.push(h)}},e.prototype.end=function(){var e=this;2&this.d?this.ondata(M(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&e.d&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3)},e.prototype.e=function(){for(var e=0,n=0,t=0,o=0,r=this.u;o<r.length;o++)t+=46+(d=r[o]).f.length+$(d.extra)+(d.o?d.o.length:0);for(var a=new v(t+22),i=0,s=this.u;i<s.length;i++){var d=s[i];W(a,e,d,d.f,d.u,-d.c-2,n,d.o),e+=46+d.f.length+$(d.extra)+(d.o?d.o.length:0),n+=d.b}var l,c,u,p,h;l=a,c=e,u=this.u.length,p=t,h=n,z(l,c,101010256),z(l,c+8,u),z(l,c+10,u),z(l,c+12,p),z(l,c+16,h),this.ondata(null,a,!0),this.d=2},e.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++)n[e].t();this.d=2},e}();function Y(e,n){e.addEventListener("mousedown",(e=>e.stopPropagation())),e.addEventListener("click",(t=>{t.stopPropagation(),e.classList.contains("downloader-helper-disabled")||n()}))}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout,window.Image=class extends window.Image{constructor(){super(),this.crossOrigin="Anonymous"}},window.onbeforeunload=function(){return"stop the page from reloading!"},async function(a,i){!function(){if(location.hash.includes("debugCanvas")){const e=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(n,...t){return console.log("drawImage",this,n,t),e.call(this,n,...t)}}}(),await new Promise((e=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>e()),0):document.addEventListener("DOMContentLoaded",(()=>e()))}));const s=document.createElement("div");s.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .downloader-helper-button,\n    #downloader-setting .downloader-helper-checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .downloader-helper-button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .downloader-helper-button.downloader-helper-disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .downloader-helper-checkbox > .downloader-helper-box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="downloader-helper-captureNum"></span></div>\n  <div>Preview:<br /><img class="downloader-helper-preview" /></div>\n  <div class="downloader-helper-buttons">\n    <div class="downloader-helper-save-container">\n      <div>\n        <div class="downloader-helper-button downloader-helper-auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="downloader-helper-button downloader-helper-auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="downloader-helper-l2r-container" style="display: none;">\n      <div class="downloader-helper-checkbox downloader-helper-l2r">\n        <div class="downloader-helper-box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="downloader-helper-button downloader-helper-download">Save</div>\n    </div>\n  </div>\n  <div class="downloader-helper-auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="downloader-helper-progress" style="display:none">\n    Compress: <span class="downloader-helper-current"></span> / <span class="downloader-helper-total"></span>\n  </div>\n</div>\n',document.body.prepend(s);let d=null;const l=[0,0];async function c(n=1/0){e("buttons").style.display="none",e("auto-working").style.display="block",await async function(e,n){for(;;){if(r>=12||f().length>=n)return;if(await t(1e3),0===o)try{await e()&&(r=0),r++}catch(e){}}}(a,n),e("save-container").style.display="none",e("l2r-container").style.display="none",e("buttons").style.display="block",e("button.download").classList.remove("downloader-helper-disabled"),e("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(e=>{d=[e.pageX,e.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(e=>{if(d){const n=[e.pageX,e.pageY];l[0]+=n[0]-d[0],l[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${l[0]}px, ${l[1]}px)`,d=n}})),Y(e("auto"),(()=>c())),Y(e("auto-limit"),(()=>{const e=window.prompt("How many pages?","10");null!==e&&c(parseInt(e,10))}));const u=e("l2r");Y(u,(()=>{const e=u.querySelector(".box");e.style.background=e.style.background?"":"darkblue"})),Y(e("download"),(async()=>{e("button.download").classList.add("downloader-helper-disabled"),e("progress").style.display="inline-block",e("progress .total").textContent=f().length.toString(),e("progress .current").textContent="0";const t=await async function(t,o){return new Promise((o=>{const r=[],a=new O(((e,n,t)=>{if(!e&&(r.push(n),t)){const e=window.URL.createObjectURL(new Blob(r));o(e)}})),i=`${t.length}`.length;(async()=>{for(let r=0;r<t.length;++r){const s=new j(`${(r+1).toString().padStart(i,"0")}.jpg`);a.add(s),s.push(new Uint8Array(await n(t[r])),!0),o=`${r+1}`,e("progress .current").textContent=o}var o;a.end()})()}))}(f()),o=document.createElement("a");o.href=t,o.download=document.title+".zip",o.click(),e("progress").style.display="none",i&&i(),e("button.download").classList.remove("downloader-helper-disabled")}))}((async()=>{const e=Array.from(document.querySelectorAll("canvas")).filter((e=>e.getBoundingClientRect().left>=0&&e.getBoundingClientRect().right<=window.innerWidth));if(!e.length)return;let n=!1;for(const t of e.slice().reverse())n||=await g(t.toDataURL("image/jpeg",1));if(!n)return;const t={bubbles:!0,clientX:19,clientY:474};e[0].dispatchEvent(new MouseEvent("mousedown",t)),e[0].dispatchEvent(new MouseEvent("mouseup",t))}))})();