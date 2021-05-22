(()=>{"use strict";function t(t){return document.querySelector(`#downloader-setting .${t}`)}function n(t){return new Promise((n=>{const e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer",e.onload=()=>n(e.response),e.send()}))}function e(t=0){return new Promise((n=>setTimeout((()=>n()),t)))}let o=0,r=0;function i(){r=0}function s(){r=0,o++}function a(){o--,o<0&&(o=0),0===o&&i&&i()}const d=new WeakSet,c=[];!function(){const t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,...o){return c.some((t=>e.startsWith(t)))&&d.add(this),n.call(this,t,e,...o)},XMLHttpRequest.prototype.send=function(...n){return d.has(this)||s(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(d.has(this)||a())})),t.call(this,...n)}}();const l=new Set;window.addEventListener("message",(t=>{const n=t.data;n&&("request-end"===n.type&&l.has(n.requestId)?(l.delete(n.requestId),a()):"request-start"===n.type&&(l.add(n.requestId),s()))}),!1);const u=window.fetch;window.fetch=async function(t,...n){const e="string"==typeof t?t:t.url,o=u.call(this,t,...n);c.some((t=>e.startsWith(t)))||(s(),o.finally((()=>a())));const r=await o;return["blob","arrayBuffer","text","json"].forEach((t=>{const n=Response.prototype[t];r[t]=function(){const t=n.call(this);return s(),t.finally((()=>a())),t}})),r};const h=[],p=CanvasRenderingContext2D.prototype.drawImage;function f(){return h}const g=HTMLCanvasElement.prototype.toDataURL;var v=Uint8Array,w=Uint16Array,m=Uint32Array,y=new v([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),b=new v([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),x=(new v([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(t,n){for(var e=new w(31),o=0;o<31;++o)e[o]=n+=1<<t[o-1];var r=new m(e[30]);for(o=1;o<30;++o)for(var i=e[o];i<e[o+1];++i)r[i]=i-e[o]<<5|o;return[e,r]}),E=x(y,2),L=E[0],k=E[1];L[28]=258,k[258]=28;for(var C=x(b,0),M=(C[0],C[1],new w(32768)),S=0;S<32768;++S){var q=(43690&S)>>>1|(21845&S)<<1;q=(61680&(q=(52428&q)>>>2|(13107&q)<<2))>>>4|(3855&q)<<4,M[S]=((65280&q)>>>8|(255&q)<<8)>>>1}var R=new v(288);for(S=0;S<144;++S)R[S]=8;for(S=144;S<256;++S)R[S]=9;for(S=256;S<280;++S)R[S]=7;for(S=280;S<288;++S)R[S]=8;var A=new v(32);for(S=0;S<32;++S)A[S]=5;var D=new v(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,o=9;--o;)e=(1&e&&-306674912)^e>>>1;t[n]=e}return t}(),H=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},P="undefined"!=typeof TextEncoder&&new TextEncoder,T="undefined"!=typeof TextDecoder&&new TextDecoder;try{T.decode(D,{stream:!0})}catch(t){}function z(t,n){if(n){for(var e=new v(t.length),o=0;o<t.length;++o)e[o]=t.charCodeAt(o);return e}if(P)return P.encode(t);var r=t.length,i=new v(t.length+(t.length>>1)),s=0,a=function(t){i[s++]=t};for(o=0;o<r;++o){if(s+5>i.length){var d=new v(s+8+(r-o<<1));d.set(i),i=d}var c=t.charCodeAt(o);c<128||n?a(c):c<2048?(a(192|c>>6),a(128|63&c)):c>55295&&c<57344?(a(240|(c=65536+(1047552&c)|1023&t.charCodeAt(++o))>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|63&c)):(a(224|c>>12),a(128|c>>6&63),a(128|63&c))}return function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var o=new(t instanceof w?w:t instanceof m?m:v)(e-n);return o.set(t.subarray(n,e)),o}(i,0,s)}var U=function(t){var n=0;if(t)for(var e in t){var o=t[e].length;if(o>65535)throw"extra field too long";n+=o+4}return n},X=function(t,n,e,o,r,i,s,a){var d=o.length,c=e.extra,l=a&&a.length,u=U(c);H(t,n,null!=s?33639248:67324752),n+=4,null!=s&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(null==i&&8),t[n++]=r&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var h=new Date(null==e.mtime?Date.now():e.mtime),p=h.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(H(t,n,p<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),n+=4,null!=i&&(H(t,n,e.crc),H(t,n+4,i),H(t,n+8,e.size)),H(t,n+12,d),H(t,n+14,u),n+=16,null!=s&&(H(t,n,l),H(t,n+6,e.attrs),H(t,n+10,s),n+=14),t.set(o,n),n+=d,u)for(var f in c){var g=c[f],v=g.length;H(t,n,+f),H(t,n+2,v),t.set(g,n+4),n+=4+v}return l&&(t.set(a,n),n+=l),n},B=function(){function t(t){var n;this.filename=t,this.c=(n=-1,{p:function(t){for(var e=n,o=0;o<t.length;++o)e=I[255&e^t[o]]^e>>>8;n=e},d:function(){return~n}}),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}(),$=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(2&this.d)throw"stream finished";var e=z(t.filename),o=e.length,r=t.comment,i=r&&z(r),s=o!=t.filename.length||i&&r.length!=i.length,a=o+U(t.extra)+30;if(o>65535)throw"filename too long";var d=new v(a);X(d,0,t,e,s);var c=[d],l=function(){for(var t=0,e=c;t<e.length;t++){var o=e[t];n.ondata(null,o,!1)}c=[]},u=this.d;this.d=0;var h=this.u.length,p=function(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}(t,{f:e,u:s,o:i,t:function(){t.terminate&&t.terminate()},r:function(){if(l(),u){var t=n.u[h+1];t?t.r():n.d=1}u=1}}),f=0;t.ondata=function(e,o,r){if(e)n.ondata(e,o,r),n.terminate();else if(f+=o.length,c.push(o),r){var i=new v(16);H(i,0,134695760),H(i,4,t.crc),H(i,8,f),H(i,12,t.size),c.push(i),p.c=f,p.b=a+f+16,p.crc=t.crc,p.size=t.size,u&&p.r(),u=1}else u&&l()},this.u.push(p)},t.prototype.end=function(){var t=this;if(2&this.d){if(1&this.d)throw"stream finishing";throw"stream finished"}this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var t=0,n=0,e=0,o=0,r=this.u;o<r.length;o++)e+=46+(d=r[o]).f.length+U(d.extra)+(d.o?d.o.length:0);for(var i=new v(e+22),s=0,a=this.u;s<a.length;s++){var d=a[s];X(i,t,d,d.f,d.u,d.c,n,d.o),t+=46+d.f.length+U(d.extra)+(d.o?d.o.length:0),n+=d.b}var c,l,u,h,p;c=i,l=t,u=this.u.length,h=e,p=n,H(c,l,101010256),H(c,l+8,u),H(c,l+10,u),H(c,l+12,h),H(c,l+16,p),this.ondata(null,i,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++)n[t].t();this.d=2},t}();function W(t,n){t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.contains("disabled")||n()}))}window.Image=class extends window.Image{constructor(){super(),this.crossOrigin="use-credentials"}},CanvasRenderingContext2D.prototype.clearRect=()=>{},async function(i,s){await new Promise((t=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>t()),0):document.addEventListener("DOMContentLoaded",(()=>t()))}));const a=document.createElement("div");a.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .button,\n    #downloader-setting .checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .button.disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .checkbox > .box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="captureNum"></span></div>\n  <div>Preview:<br /><img class="preview" /></div>\n  <div class="buttons">\n    <div class="save-container">\n      <div>\n        <div class="button auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="button auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="l2r-container" style="display: none;">\n      <div class="checkbox l2r">\n        <div class="box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="button download">Save</div>\n    </div>\n  </div>\n  <div class="auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="progress" style="display:none">\n    Compress: <span class="current"></span> / <span class="total"></span>\n  </div>\n</div>\n',document.body.prepend(a);let d=null;const c=[0,0];async function l(n=1/0){t("buttons").style.display="none",t("auto-working").style.display="block",await async function(t,n){for(;;){if(r>=12||f().length>=n)return;if(await e(1e3),0===o)try{await t()&&(r=0),r++}catch(t){}}}(i,n),t("save-container").style.display="none",t("l2r-container").style.display="none",t("buttons").style.display="block",t("button.download").classList.remove("disabled"),t("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(t=>{d=[t.pageX,t.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(t=>{if(d){const n=[t.pageX,t.pageY];c[0]+=n[0]-d[0],c[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${c[0]}px, ${c[1]}px)`,d=n}})),W(t("auto"),(()=>l())),W(t("auto-limit"),(()=>{const t=window.prompt("How many pages?","10");null!==t&&l(parseInt(t,10))}));const u=t("l2r");W(u,(()=>{const t=u.querySelector(".box");t.style.background=t.style.background?"":"darkblue"})),W(t("download"),(async()=>{t("button.download").classList.add("disabled"),t("progress").style.display="inline-block",t("progress .total").textContent=f().length.toString(),t("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const r=[],i=new $(((t,n,e)=>{if(!t&&(r.push(n),e)){const t=window.URL.createObjectURL(new Blob(r));o(t)}})),s=`${e.length}`.length;(async()=>{for(let r=0;r<e.length;++r){const a=new B(`${(r+1).toString().padStart(s,"0")}.jpg`);i.add(a),a.push(new Uint8Array(await n(e[r])),!0),o=`${r+1}`,t("progress .current").textContent=o}var o;i.end()})()}))}(f()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),t("progress").style.display="none",s&&s(),t("button.download").classList.remove("disabled")}))}((async()=>{!async function(n){if(n.width<=300&&n.height<=150)return;const e=n&&g.call(n,"image/jpeg",1)||"";await async function(n){if(n.startsWith("data:image/png")){const t=await new Promise((t=>{const e=new Image;e.onload=()=>t(e),e.src=n})),e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const o=e.getContext("2d");p.call(o,t,0,0),n=e.toDataURL("image/jpeg",1)}for(let t=0;t<3;++t)if(h[h.length-1-t]===n)return!1;return i(),h.push(n),t("captureNum").textContent=`${h.length}`,t("preview").src=n,!0}(e)}(document.querySelector("canvas.dummy"));const n=document.querySelector(".currentScreen canvas"),e={bubbles:!0,clientX:19,clientY:474};n.dispatchEvent(new MouseEvent("mousemove",e)),n.dispatchEvent(new MouseEvent("mousedown",e)),n.dispatchEvent(new MouseEvent("click",e)),n.dispatchEvent(new MouseEvent("mouseup",e)),n.dispatchEvent(new MouseEvent("mousemove",e))}))})();