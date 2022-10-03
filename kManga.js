(()=>{"use strict";function t(t){return document.querySelector(`#downloader-setting .${t}`)}function n(t){return new Promise((n=>{const e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer",e.onload=()=>n(e.response),e.send()}))}function e(t=0){return new Promise((n=>setTimeout((()=>n()),t)))}let o=0,i=0;function r(){i=0}function a(){i=0,o++}function s(){o--,o<0&&(o=0),0===o&&r&&r()}const d=new WeakSet,l=[];!function(){const t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,...o){return l.some((t=>e.startsWith(t)))&&d.add(this),n.call(this,t,e,...o)},XMLHttpRequest.prototype.send=function(...n){return d.has(this)||a(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(d.has(this)||s())})),t.call(this,...n)}}();const c=new Set;window.addEventListener("message",(t=>{const n=t.data;n&&("request-end"===n.type&&c.has(n.requestId)?(c.delete(n.requestId),s()):"request-start"===n.type&&(c.add(n.requestId),a()))}),!1);const u=window.fetch;window.fetch=async function(t,...n){const e="string"==typeof t?t:t instanceof Request?t.url:t.href,o=u.call(this,t,...n);l.some((t=>e.startsWith(t)))||(a(),o.finally((()=>s())));const i=await o;return["blob","arrayBuffer","text","json"].forEach((t=>{const n=Response.prototype[t];i[t]=function(){const t=n.call(this);return a(),t.finally((()=>s())),t}})),i};const p=[],h=CanvasRenderingContext2D.prototype.drawImage;function f(){return p}new Set;const v=HTMLCanvasElement.prototype.toDataURL||window.bk_toDataURL;async function g(n){if(n.width<=300&&n.height<=150)return;const e=n&&v.call(n,"image/jpeg",1)||"";await async function(n){if(n.startsWith("data:image/png")){const t=await new Promise((t=>{const e=new Image;e.onload=()=>t(e),e.src=n})),e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const o=e.getContext("2d");h.call(o,t,0,0),n=e.toDataURL("image/jpeg",1)}for(let t=0;t<3;++t)if(p[p.length-1-t]===n)return!1;return r(),p.push(n),t("captureNum").textContent=`${p.length}`,t("preview").src=n,!0}(e)}var w=Uint8Array,y=Uint16Array,m=Uint32Array,b=new w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),E=new w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),x=(new w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(t,n){for(var e=new y(31),o=0;o<31;++o)e[o]=n+=1<<t[o-1];var i=new m(e[30]);for(o=1;o<30;++o)for(var r=e[o];r<e[o+1];++r)i[r]=r-e[o]<<5|o;return[e,i]}),k=x(b,2),L=k[0],S=k[1];L[28]=258,S[258]=28;for(var M=x(E,0),T=(M[0],M[1],new y(32768)),q=0;q<32768;++q){var R=(43690&q)>>>1|(21845&q)<<1;R=(61680&(R=(52428&R)>>>2|(13107&R)<<2))>>>4|(3855&R)<<4,T[q]=((65280&R)>>>8|(255&R)<<8)>>>1}var C=new w(288);for(q=0;q<144;++q)C[q]=8;for(q=144;q<256;++q)C[q]=9;for(q=256;q<280;++q)C[q]=7;for(q=280;q<288;++q)C[q]=8;var A=new w(32);for(q=0;q<32;++q)A[q]=5;var D=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(t,n,e){var o=new Error(n||D[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,I),!e)throw o;return o},P=new w(0),B=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,o=9;--o;)e=(1&e&&-306674912)^e>>>1;t[n]=e}return t}(),H=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},U="undefined"!=typeof TextEncoder&&new TextEncoder,z="undefined"!=typeof TextDecoder&&new TextDecoder;try{z.decode(P,{stream:!0})}catch(t){}function W(t,n){if(n){for(var e=new w(t.length),o=0;o<t.length;++o)e[o]=t.charCodeAt(o);return e}if(U)return U.encode(t);var i=t.length,r=new w(t.length+(t.length>>1)),a=0,s=function(t){r[a++]=t};for(o=0;o<i;++o){if(a+5>r.length){var d=new w(a+8+(i-o<<1));d.set(r),r=d}var l=t.charCodeAt(o);l<128||n?s(l):l<2048?(s(192|l>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&t.charCodeAt(++o))>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|63&l)):(s(224|l>>12),s(128|l>>6&63),s(128|63&l))}return function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var o=new(2==t.BYTES_PER_ELEMENT?y:4==t.BYTES_PER_ELEMENT?m:w)(e-n);return o.set(t.subarray(n,e)),o}(r,0,a)}var X=function(t){var n=0;if(t)for(var e in t){var o=t[e].length;o>65535&&I(9),n+=o+4}return n},$=function(t,n,e,o,i,r,a,s){var d=o.length,l=e.extra,c=s&&s.length,u=X(l);H(t,n,null!=a?33639248:67324752),n+=4,null!=a&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(r<0&&8),t[n++]=i&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var p=new Date(null==e.mtime?Date.now():e.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&I(10),H(t,n,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),n+=4,-1!=r&&(H(t,n,e.crc),H(t,n+4,r<0?-r-2:r),H(t,n+8,e.size)),H(t,n+12,d),H(t,n+14,u),n+=16,null!=a&&(H(t,n,c),H(t,n+6,e.attrs),H(t,n+10,a),n+=14),t.set(o,n),n+=d,u)for(var f in l){var v=l[f],g=v.length;H(t,n,+f),H(t,n+2,g),t.set(v,n+4),n+=4+g}return c&&(t.set(s,n),n+=c),n},Y=function(){function t(t){var n;this.filename=t,this.c=(n=-1,{p:function(t){for(var e=n,o=0;o<t.length;++o)e=B[255&e^t[o]]^e>>>8;n=e},d:function(){return~n}}),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){this.ondata||I(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}(),j=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(this.ondata||I(5),2&this.d)this.ondata(I(4+8*(1&this.d),0,1),null,!1);else{var e=W(t.filename),o=e.length,i=t.comment,r=i&&W(i),a=o!=t.filename.length||r&&i.length!=r.length,s=o+X(t.extra)+30;o>65535&&this.ondata(I(11,0,1),null,!1);var d=new w(s);$(d,0,t,e,a,-1);var l=[d],c=function(){for(var t=0,e=l;t<e.length;t++){var o=e[t];n.ondata(null,o,!1)}l=[]},u=this.d;this.d=0;var p=this.u.length,h=function(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}(t,{f:e,u:a,o:r,t:function(){t.terminate&&t.terminate()},r:function(){if(c(),u){var t=n.u[p+1];t?t.r():n.d=1}u=1}}),f=0;t.ondata=function(e,o,i){if(e)n.ondata(e,o,i),n.terminate();else if(f+=o.length,l.push(o),i){var r=new w(16);H(r,0,134695760),H(r,4,t.crc),H(r,8,f),H(r,12,t.size),l.push(r),h.c=f,h.b=s+f+16,h.crc=t.crc,h.size=t.size,u&&h.r(),u=1}else u&&c()},this.u.push(h)}},t.prototype.end=function(){var t=this;2&this.d?this.ondata(I(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3)},t.prototype.e=function(){for(var t=0,n=0,e=0,o=0,i=this.u;o<i.length;o++)e+=46+(d=i[o]).f.length+X(d.extra)+(d.o?d.o.length:0);for(var r=new w(e+22),a=0,s=this.u;a<s.length;a++){var d=s[a];$(r,t,d,d.f,d.u,-d.c-2,n,d.o),t+=46+d.f.length+X(d.extra)+(d.o?d.o.length:0),n+=d.b}var l,c,u,p,h;l=r,c=t,u=this.u.length,p=e,h=n,H(l,c,101010256),H(l,c+8,u),H(l,c+10,u),H(l,c+12,p),H(l,c+16,h),this.ondata(null,r,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++)n[t].t();this.d=2},t}();function _(t,n){t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.contains("disabled")||n()}))}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout,window.WebSocket=class extends window.WebSocket{constructor(t,n){super(t,n),this.addEventListener("message",(()=>s()))}send(t){return a(),super.send(t)}},async function(r,a){await new Promise((t=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>t()),0):document.addEventListener("DOMContentLoaded",(()=>t()))}));const s=document.createElement("div");s.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .button,\n    #downloader-setting .checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .button.disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .checkbox > .box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="captureNum"></span></div>\n  <div>Preview:<br /><img class="preview" /></div>\n  <div class="buttons">\n    <div class="save-container">\n      <div>\n        <div class="button auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="button auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="l2r-container" style="display: none;">\n      <div class="checkbox l2r">\n        <div class="box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="button download">Save</div>\n    </div>\n  </div>\n  <div class="auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="progress" style="display:none">\n    Compress: <span class="current"></span> / <span class="total"></span>\n  </div>\n</div>\n',document.body.prepend(s);let d=null;const l=[0,0];async function c(n=1/0){t("buttons").style.display="none",t("auto-working").style.display="block",await async function(t,n){for(;;){if(i>=12||f().length>=n)return;if(await e(1e3),0===o)try{await t()&&(i=0),i++}catch(t){}}}(r,n),t("save-container").style.display="none",t("l2r-container").style.display="none",t("buttons").style.display="block",t("button.download").classList.remove("disabled"),t("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(t=>{d=[t.pageX,t.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(t=>{if(d){const n=[t.pageX,t.pageY];l[0]+=n[0]-d[0],l[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${l[0]}px, ${l[1]}px)`,d=n}})),_(t("auto"),(()=>c())),_(t("auto-limit"),(()=>{const t=window.prompt("How many pages?","10");null!==t&&c(parseInt(t,10))}));const u=t("l2r");_(u,(()=>{const t=u.querySelector(".box");t.style.background=t.style.background?"":"darkblue"})),_(t("download"),(async()=>{t("button.download").classList.add("disabled"),t("progress").style.display="inline-block",t("progress .total").textContent=f().length.toString(),t("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const i=[],r=new j(((t,n,e)=>{if(!t&&(i.push(n),e)){const t=window.URL.createObjectURL(new Blob(i));o(t)}})),a=`${e.length}`.length;(async()=>{for(let i=0;i<e.length;++i){const s=new Y(`${(i+1).toString().padStart(a,"0")}.jpg`);r.add(s),s.push(new Uint8Array(await n(e[i])),!0),o=`${i+1}`,t("progress .current").textContent=o}var o;r.end()})()}))}(f()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),t("progress").style.display="none",a&&a(),t("button.download").classList.remove("disabled")}))}((async()=>{if(Array.from(document.querySelectorAll("#viewport .nv-pvImageCanvas")).filter((t=>"0"!==t.style.opacity)).map((t=>t.querySelector("canvas"))).forEach((t=>g(t))),"visible"===document.getElementById("dialog-area")?.style.visibility)return;const t=document.querySelector("#gesture"),n={bubbles:!0,clientX:19,clientY:474};t?.dispatchEvent(new MouseEvent("mousemove",n)),t?.dispatchEvent(new MouseEvent("mousedown",n)),t?.dispatchEvent(new MouseEvent("click",n)),t?.dispatchEvent(new MouseEvent("mouseup",n)),t?.dispatchEvent(new MouseEvent("mousemove",n))}))})();