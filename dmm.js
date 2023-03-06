(()=>{"use strict";function t(t){return document.querySelector(`#downloader-setting .${t}`)}function n(t){return new Promise((n=>{const e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer",e.onload=()=>n(e.response),e.send()}))}function e(t=0){return new Promise((n=>setTimeout((()=>n()),t)))}let o=0,a=0;function r(){a=0}function i(){a=0,o++}function s(){o--,o<0&&(o=0),0===o&&r&&r()}const d=new WeakSet,c=[];function l(t){return c.some((n=>n instanceof RegExp?n.test(t):t.startsWith(n)))}!function(){const t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,...o){return l(e)&&d.add(this),n.call(this,t,e,...o)},XMLHttpRequest.prototype.send=function(...n){return d.has(this)||i(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(d.has(this)||s())})),t.call(this,...n)}}();const u=new Set;window.addEventListener("message",(t=>{const n=t.data;n&&("request-end"===n.type&&u.has(n.requestId)?(u.delete(n.requestId),s()):"request-start"===n.type&&(u.add(n.requestId),i()))}),!1);const p=window.fetch;window.fetch=async function(t,...n){const e="string"==typeof t?t:t instanceof Request?t.url:t.href,o=p.call(this,t,...n);l(e)||(i(),o.finally((()=>s())));const a=await o;return["blob","arrayBuffer","text","json"].forEach((t=>{const n=Response.prototype[t];a[t]=function(){const t=n.call(this);return i(),t.finally((()=>s())),t}})),a};const h=[],f=CanvasRenderingContext2D.prototype.drawImage;function g(){return h}new Set;const v=HTMLCanvasElement.prototype.toDataURL||window.bk_toDataURL;async function w(n){if(n.width<=300&&n.height<=150)return;const e=n&&v.call(n,"image/jpeg",1)||"";await async function(n){if(n.startsWith("data:image/png")){const t=await new Promise((t=>{const e=new Image;e.onload=()=>t(e),e.src=n})),e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const o=e.getContext("2d");f.call(o,t,0,0),n=e.toDataURL("image/jpeg",1)}for(let t=0;t<3;++t)if(h[h.length-1-t]===n)return!1;return r(),h.push(n),t("captureNum").textContent=`${h.length}`,t("preview").src=n,!0}(e)}var y=Uint8Array,m=Uint16Array,b=Uint32Array,E=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),x=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),L=(new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(t,n){for(var e=new m(31),o=0;o<31;++o)e[o]=n+=1<<t[o-1];var a=new b(e[30]);for(o=1;o<30;++o)for(var r=e[o];r<e[o+1];++r)a[r]=r-e[o]<<5|o;return[e,a]}),k=L(E,2),S=k[0],M=k[1];S[28]=258,M[258]=28;for(var R=L(x,0),T=(R[0],R[1],new m(32768)),q=0;q<32768;++q){var C=(43690&q)>>>1|(21845&q)<<1;C=(61680&(C=(52428&C)>>>2|(13107&C)<<2))>>>4|(3855&C)<<4,T[q]=((65280&C)>>>8|(255&C)<<8)>>>1}var D=new y(288);for(q=0;q<144;++q)D[q]=8;for(q=144;q<256;++q)D[q]=9;for(q=256;q<280;++q)D[q]=7;for(q=280;q<288;++q)D[q]=8;var A=new y(32);for(q=0;q<32;++q)A[q]=5;var I=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(t,n,e){var o=new Error(n||I[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,P),!e)throw o;return o},H=new y(0),U=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,o=9;--o;)e=(1&e&&-306674912)^e>>>1;t[n]=e}return t}(),z=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},B="undefined"!=typeof TextEncoder&&new TextEncoder,X="undefined"!=typeof TextDecoder&&new TextDecoder;try{X.decode(H,{stream:!0})}catch(t){}function $(t,n){if(n){for(var e=new y(t.length),o=0;o<t.length;++o)e[o]=t.charCodeAt(o);return e}if(B)return B.encode(t);var a=t.length,r=new y(t.length+(t.length>>1)),i=0,s=function(t){r[i++]=t};for(o=0;o<a;++o){if(i+5>r.length){var d=new y(i+8+(a-o<<1));d.set(r),r=d}var c=t.charCodeAt(o);c<128||n?s(c):c<2048?(s(192|c>>6),s(128|63&c)):c>55295&&c<57344?(s(240|(c=65536+(1047552&c)|1023&t.charCodeAt(++o))>>18),s(128|c>>12&63),s(128|c>>6&63),s(128|63&c)):(s(224|c>>12),s(128|c>>6&63),s(128|63&c))}return function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var o=new(2==t.BYTES_PER_ELEMENT?m:4==t.BYTES_PER_ELEMENT?b:y)(e-n);return o.set(t.subarray(n,e)),o}(r,0,i)}var Y,j=function(t){var n=0;if(t)for(var e in t){var o=t[e].length;o>65535&&P(9),n+=o+4}return n},W=function(t,n,e,o,a,r,i,s){var d=o.length,c=e.extra,l=s&&s.length,u=j(c);z(t,n,null!=i?33639248:67324752),n+=4,null!=i&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(r<0&&8),t[n++]=a&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var p=new Date(null==e.mtime?Date.now():e.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&P(10),z(t,n,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),n+=4,-1!=r&&(z(t,n,e.crc),z(t,n+4,r<0?-r-2:r),z(t,n+8,e.size)),z(t,n+12,d),z(t,n+14,u),n+=16,null!=i&&(z(t,n,l),z(t,n+6,e.attrs),z(t,n+10,i),n+=14),t.set(o,n),n+=d,u)for(var f in c){var g=c[f],v=g.length;z(t,n,+f),z(t,n+2,v),t.set(g,n+4),n+=4+v}return l&&(t.set(s,n),n+=l),n},_=function(){function t(t){var n;this.filename=t,this.c=(n=-1,{p:function(t){for(var e=n,o=0;o<t.length;++o)e=U[255&e^t[o]]^e>>>8;n=e},d:function(){return~n}}),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){this.ondata||P(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}(),N=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(this.ondata||P(5),2&this.d)this.ondata(P(4+8*(1&this.d),0,1),null,!1);else{var e=$(t.filename),o=e.length,a=t.comment,r=a&&$(a),i=o!=t.filename.length||r&&a.length!=r.length,s=o+j(t.extra)+30;o>65535&&this.ondata(P(11,0,1),null,!1);var d=new y(s);W(d,0,t,e,i,-1);var c=[d],l=function(){for(var t=0,e=c;t<e.length;t++){var o=e[t];n.ondata(null,o,!1)}c=[]},u=this.d;this.d=0;var p=this.u.length,h=function(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}(t,{f:e,u:i,o:r,t:function(){t.terminate&&t.terminate()},r:function(){if(l(),u){var t=n.u[p+1];t?t.r():n.d=1}u=1}}),f=0;t.ondata=function(e,o,a){if(e)n.ondata(e,o,a),n.terminate();else if(f+=o.length,c.push(o),a){var r=new y(16);z(r,0,134695760),z(r,4,t.crc),z(r,8,f),z(r,12,t.size),c.push(r),h.c=f,h.b=s+f+16,h.crc=t.crc,h.size=t.size,u&&h.r(),u=1}else u&&l()},this.u.push(h)}},t.prototype.end=function(){var t=this;2&this.d?this.ondata(P(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3)},t.prototype.e=function(){for(var t=0,n=0,e=0,o=0,a=this.u;o<a.length;o++)e+=46+(d=a[o]).f.length+j(d.extra)+(d.o?d.o.length:0);for(var r=new y(e+22),i=0,s=this.u;i<s.length;i++){var d=s[i];W(r,t,d,d.f,d.u,-d.c-2,n,d.o),t+=46+d.f.length+j(d.extra)+(d.o?d.o.length:0),n+=d.b}var c,l,u,p,h;c=r,l=t,u=this.u.length,p=e,h=n,z(c,l,101010256),z(c,l+8,u),z(c,l+10,u),z(c,l+12,p),z(c,l+16,h),this.ondata(null,r,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++)n[t].t();this.d=2},t}();function O(t,n){t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.contains("disabled")||n()}))}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout,window.Image=class extends window.Image{constructor(){super(),this.crossOrigin="use-credentials"}},CanvasRenderingContext2D.prototype.clearRect=()=>{},Y=[/nr-data\.net\//],c.push(...Y),async function(r,i){await new Promise((t=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>t()),0):document.addEventListener("DOMContentLoaded",(()=>t()))}));const s=document.createElement("div");s.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .button,\n    #downloader-setting .checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .button.disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .checkbox > .box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="captureNum"></span></div>\n  <div>Preview:<br /><img class="preview" /></div>\n  <div class="buttons">\n    <div class="save-container">\n      <div>\n        <div class="button auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="button auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="l2r-container" style="display: none;">\n      <div class="checkbox l2r">\n        <div class="box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="button download">Save</div>\n    </div>\n  </div>\n  <div class="auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="progress" style="display:none">\n    Compress: <span class="current"></span> / <span class="total"></span>\n  </div>\n</div>\n',document.body.prepend(s);let d=null;const c=[0,0];async function l(n=1/0){t("buttons").style.display="none",t("auto-working").style.display="block",await async function(t,n){for(;;){if(a>=12||g().length>=n)return;if(await e(1e3),0===o)try{await t()&&(a=0),a++}catch(t){}}}(r,n),t("save-container").style.display="none",t("l2r-container").style.display="none",t("buttons").style.display="block",t("button.download").classList.remove("disabled"),t("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(t=>{d=[t.pageX,t.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(t=>{if(d){const n=[t.pageX,t.pageY];c[0]+=n[0]-d[0],c[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${c[0]}px, ${c[1]}px)`,d=n}})),O(t("auto"),(()=>l())),O(t("auto-limit"),(()=>{const t=window.prompt("How many pages?","10");null!==t&&l(parseInt(t,10))}));const u=t("l2r");O(u,(()=>{const t=u.querySelector(".box");t.style.background=t.style.background?"":"darkblue"})),O(t("download"),(async()=>{t("button.download").classList.add("disabled"),t("progress").style.display="inline-block",t("progress .total").textContent=g().length.toString(),t("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const a=[],r=new N(((t,n,e)=>{if(!t&&(a.push(n),e)){const t=window.URL.createObjectURL(new Blob(a));o(t)}})),i=`${e.length}`.length;(async()=>{for(let a=0;a<e.length;++a){const s=new _(`${(a+1).toString().padStart(i,"0")}.jpg`);r.add(s),s.push(new Uint8Array(await n(e[a])),!0),o=`${a+1}`,t("progress .current").textContent=o}var o;r.end()})()}))}(g()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),t("progress").style.display="none",i&&i(),t("button.download").classList.remove("disabled")}))}((async()=>{w(document.querySelector("canvas.dummy"));const t=document.querySelector(".currentScreen canvas"),n={bubbles:!0,clientX:19,clientY:474};t.dispatchEvent(new MouseEvent("mousemove",n)),t.dispatchEvent(new MouseEvent("mousedown",n)),t.dispatchEvent(new MouseEvent("click",n)),t.dispatchEvent(new MouseEvent("mouseup",n)),t.dispatchEvent(new MouseEvent("mousemove",n))}))})();