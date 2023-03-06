(()=>{"use strict";function t(t){return document.querySelector(`#downloader-setting .${t}`)}function n(t){return new Promise((n=>{const e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer",e.onload=()=>n(e.response),e.send()}))}function e(t){return new Promise((n=>{const e=new FileReader;e.onloadend=()=>n(e.result),e.readAsDataURL(t)}))}function o(t=0){return new Promise((n=>setTimeout((()=>n()),t)))}let r=0,i=0;function a(){i=0}function s(){i=0,r++}function d(){r--,r<0&&(r=0),0===r&&a&&a()}const l=new WeakSet,c=[];function u(t){return c.some((n=>n instanceof RegExp?n.test(t):t.startsWith(n)))}!function(){const t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,...o){return u(e)&&l.add(this),n.call(this,t,e,...o)},XMLHttpRequest.prototype.send=function(...n){return l.has(this)||s(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(l.has(this)||d())})),t.call(this,...n)}}();const p=new Set;window.addEventListener("message",(t=>{const n=t.data;n&&("request-end"===n.type&&p.has(n.requestId)?(p.delete(n.requestId),d()):"request-start"===n.type&&(p.add(n.requestId),s()))}),!1);const h=window.fetch;window.fetch=async function(t,...n){const e="string"==typeof t?t:t instanceof Request?t.url:t.href,o=h.call(this,t,...n);u(e)||(s(),o.finally((()=>d())));const r=await o;return["blob","arrayBuffer","text","json"].forEach((t=>{const n=Response.prototype[t];r[t]=function(){const t=n.call(this);return s(),t.finally((()=>d())),t}})),r};const f=[],g=CanvasRenderingContext2D.prototype.drawImage;async function v(n){if(n.startsWith("data:image/png")){const t=await new Promise((t=>{const e=new Image;e.onload=()=>t(e),e.src=n})),e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const o=e.getContext("2d");g.call(o,t,0,0),n=e.toDataURL("image/jpeg",1)}for(let t=0;t<3;++t)if(f[f.length-1-t]===n)return!1;return a(),f.push(n),t("captureNum").textContent=`${f.length}`,t("preview").src=n,!0}function w(){return f}new Set,HTMLCanvasElement.prototype.toDataURL||window.bk_toDataURL;var y=Uint8Array,m=Uint16Array,b=Uint32Array,x=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),E=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),L=(new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(t,n){for(var e=new m(31),o=0;o<31;++o)e[o]=n+=1<<t[o-1];var r=new b(e[30]);for(o=1;o<30;++o)for(var i=e[o];i<e[o+1];++i)r[i]=i-e[o]<<5|o;return[e,r]}),k=L(x,2),R=k[0],T=k[1];R[28]=258,T[258]=28;for(var S=L(E,0),q=(S[0],S[1],new m(32768)),A=0;A<32768;++A){var C=(43690&A)>>>1|(21845&A)<<1;C=(61680&(C=(52428&C)>>>2|(13107&C)<<2))>>>4|(3855&C)<<4,q[A]=((65280&C)>>>8|(255&C)<<8)>>>1}var M=new y(288);for(A=0;A<144;++A)M[A]=8;for(A=144;A<256;++A)M[A]=9;for(A=256;A<280;++A)M[A]=7;for(A=280;A<288;++A)M[A]=8;var P=new y(32);for(A=0;A<32;++A)P[A]=5;var D=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U=function(t,n,e){var o=new Error(n||D[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,U),!e)throw o;return o},B=new y(0),H=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,o=9;--o;)e=(1&e&&-306674912)^e>>>1;t[n]=e}return t}(),I=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},z="undefined"!=typeof TextEncoder&&new TextEncoder,X="undefined"!=typeof TextDecoder&&new TextDecoder;try{X.decode(B,{stream:!0})}catch(t){}function $(t,n){if(n){for(var e=new y(t.length),o=0;o<t.length;++o)e[o]=t.charCodeAt(o);return e}if(z)return z.encode(t);var r=t.length,i=new y(t.length+(t.length>>1)),a=0,s=function(t){i[a++]=t};for(o=0;o<r;++o){if(a+5>i.length){var d=new y(a+8+(r-o<<1));d.set(i),i=d}var l=t.charCodeAt(o);l<128||n?s(l):l<2048?(s(192|l>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&t.charCodeAt(++o))>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|63&l)):(s(224|l>>12),s(128|l>>6&63),s(128|63&l))}return function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var o=new(2==t.BYTES_PER_ELEMENT?m:4==t.BYTES_PER_ELEMENT?b:y)(e-n);return o.set(t.subarray(n,e)),o}(i,0,a)}var W=function(t){var n=0;if(t)for(var e in t){var o=t[e].length;o>65535&&U(9),n+=o+4}return n},Y=function(t,n,e,o,r,i,a,s){var d=o.length,l=e.extra,c=s&&s.length,u=W(l);I(t,n,null!=a?33639248:67324752),n+=4,null!=a&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(i<0&&8),t[n++]=r&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var p=new Date(null==e.mtime?Date.now():e.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&U(10),I(t,n,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),n+=4,-1!=i&&(I(t,n,e.crc),I(t,n+4,i<0?-i-2:i),I(t,n+8,e.size)),I(t,n+12,d),I(t,n+14,u),n+=16,null!=a&&(I(t,n,c),I(t,n+6,e.attrs),I(t,n+10,a),n+=14),t.set(o,n),n+=d,u)for(var f in l){var g=l[f],v=g.length;I(t,n,+f),I(t,n+2,v),t.set(g,n+4),n+=4+v}return c&&(t.set(s,n),n+=c),n},j=function(){function t(t){var n;this.filename=t,this.c=(n=-1,{p:function(t){for(var e=n,o=0;o<t.length;++o)e=H[255&e^t[o]]^e>>>8;n=e},d:function(){return~n}}),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){this.ondata||U(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}(),_=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(this.ondata||U(5),2&this.d)this.ondata(U(4+8*(1&this.d),0,1),null,!1);else{var e=$(t.filename),o=e.length,r=t.comment,i=r&&$(r),a=o!=t.filename.length||i&&r.length!=i.length,s=o+W(t.extra)+30;o>65535&&this.ondata(U(11,0,1),null,!1);var d=new y(s);Y(d,0,t,e,a,-1);var l=[d],c=function(){for(var t=0,e=l;t<e.length;t++){var o=e[t];n.ondata(null,o,!1)}l=[]},u=this.d;this.d=0;var p=this.u.length,h=function(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}(t,{f:e,u:a,o:i,t:function(){t.terminate&&t.terminate()},r:function(){if(c(),u){var t=n.u[p+1];t?t.r():n.d=1}u=1}}),f=0;t.ondata=function(e,o,r){if(e)n.ondata(e,o,r),n.terminate();else if(f+=o.length,l.push(o),r){var i=new y(16);I(i,0,134695760),I(i,4,t.crc),I(i,8,f),I(i,12,t.size),l.push(i),h.c=f,h.b=s+f+16,h.crc=t.crc,h.size=t.size,u&&h.r(),u=1}else u&&c()},this.u.push(h)}},t.prototype.end=function(){var t=this;2&this.d?this.ondata(U(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3)},t.prototype.e=function(){for(var t=0,n=0,e=0,o=0,r=this.u;o<r.length;o++)e+=46+(d=r[o]).f.length+W(d.extra)+(d.o?d.o.length:0);for(var i=new y(e+22),a=0,s=this.u;a<s.length;a++){var d=s[a];Y(i,t,d,d.f,d.u,-d.c-2,n,d.o),t+=46+d.f.length+W(d.extra)+(d.o?d.o.length:0),n+=d.b}var l,c,u,p,h;l=i,c=t,u=this.u.length,p=e,h=n,I(l,c,101010256),I(l,c+8,u),I(l,c+10,u),I(l,c+12,p),I(l,c+16,h),this.ondata(null,i,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++)n[t].t();this.d=2},t}();function F(t,n){t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.contains("disabled")||n()}))}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout,URL.revokeObjectURL=()=>{},async function(e,a){await new Promise((t=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>t()),0):document.addEventListener("DOMContentLoaded",(()=>t()))}));const s=document.createElement("div");s.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .button,\n    #downloader-setting .checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .button.disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .checkbox > .box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="captureNum"></span></div>\n  <div>Preview:<br /><img class="preview" /></div>\n  <div class="buttons">\n    <div class="save-container">\n      <div>\n        <div class="button auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="button auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="l2r-container" style="display: none;">\n      <div class="checkbox l2r">\n        <div class="box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="button download">Save</div>\n    </div>\n  </div>\n  <div class="auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="progress" style="display:none">\n    Compress: <span class="current"></span> / <span class="total"></span>\n  </div>\n</div>\n',document.body.prepend(s);let d=null;const l=[0,0];async function c(n=1/0){t("buttons").style.display="none",t("auto-working").style.display="block",await async function(t,n){for(;;){if(i>=12||w().length>=n)return;if(await o(1e3),0===r)try{await t()&&(i=0),i++}catch(t){}}}(e,n),t("save-container").style.display="none",t("l2r-container").style.display="none",t("buttons").style.display="block",t("button.download").classList.remove("disabled"),t("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(t=>{d=[t.pageX,t.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(t=>{if(d){const n=[t.pageX,t.pageY];l[0]+=n[0]-d[0],l[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${l[0]}px, ${l[1]}px)`,d=n}})),F(t("auto"),(()=>c())),F(t("auto-limit"),(()=>{const t=window.prompt("How many pages?","10");null!==t&&c(parseInt(t,10))}));const u=t("l2r");F(u,(()=>{const t=u.querySelector(".box");t.style.background=t.style.background?"":"darkblue"})),F(t("download"),(async()=>{t("button.download").classList.add("disabled"),t("progress").style.display="inline-block",t("progress .total").textContent=w().length.toString(),t("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const r=[],i=new _(((t,n,e)=>{if(!t&&(r.push(n),e)){const t=window.URL.createObjectURL(new Blob(r));o(t)}})),a=`${e.length}`.length;(async()=>{for(let r=0;r<e.length;++r){const s=new j(`${(r+1).toString().padStart(a,"0")}.jpg`);i.add(s),s.push(new Uint8Array(await n(e[r])),!0),o=`${r+1}`,t("progress .current").textContent=o}var o;i.end()})()}))}(w()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),t("progress").style.display="none",a&&a(),t("button.download").classList.remove("disabled")}))}((async()=>{const t=Array.from(document.querySelectorAll("div")).filter((t=>t.style.transform&&t.style.transform.includes("translate(0px, 0px) scale(1)")&&0===t.getBoundingClientRect().x))[0];if(!t)return;const n=Array.from(t.querySelectorAll("img"));for(const t of n){const n=t.src;if(t.src.startsWith("http"))continue;const o=await(await h(n)).blob();v(await e(o))}const o={pointerId:1,bubbles:!0,pointerType:"mouse",clientX:75,clientY:480};t.dispatchEvent(new PointerEvent("pointerdown",o)),t.dispatchEvent(new PointerEvent("pointerup",o))}))})();