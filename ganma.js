(()=>{"use strict";function t(t){return document.querySelector(`#downloader-setting .${t}`)}function n(t){return new Promise((n=>{const e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer",e.onload=()=>n(e.response),e.send()}))}function e(t=0){return new Promise((n=>setTimeout((()=>n()),t)))}let o=0,r=0;function a(){r=0}function i(){r=0,o++}function s(){o--,o<0&&(o=0),0===o&&a&&a()}const d=new WeakSet,l=[];!function(){const t=XMLHttpRequest.prototype.send,n=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,...o){return l.some((t=>e.startsWith(t)))&&d.add(this),n.call(this,t,e,...o)},XMLHttpRequest.prototype.send=function(...n){return d.has(this)||i(),this.addEventListener("readystatechange",(()=>{4===this.readyState&&(d.has(this)||s())})),t.call(this,...n)}}();const c=new Set;window.addEventListener("message",(t=>{const n=t.data;n&&("request-end"===n.type&&c.has(n.requestId)?(c.delete(n.requestId),s()):"request-start"===n.type&&(c.add(n.requestId),i()))}),!1);const u=window.fetch;window.fetch=async function(t,...n){const e="string"==typeof t?t:t instanceof Request?t.url:t.href,o=u.call(this,t,...n);l.some((t=>e.startsWith(t)))||(i(),o.finally((()=>s())));const r=await o;return["blob","arrayBuffer","text","json"].forEach((t=>{const n=Response.prototype[t];r[t]=function(){const t=n.call(this);return i(),t.finally((()=>s())),t}})),r};const p=[],h=CanvasRenderingContext2D.prototype.drawImage,f=new Set;function g(){return p}HTMLCanvasElement.prototype.toDataURL||window.bk_toDataURL;var v=Uint8Array,w=Uint16Array,y=Uint32Array,m=new v([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),b=new v([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),x=(new v([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),function(t,n){for(var e=new w(31),o=0;o<31;++o)e[o]=n+=1<<t[o-1];var r=new y(e[30]);for(o=1;o<30;++o)for(var a=e[o];a<e[o+1];++a)r[a]=a-e[o]<<5|o;return[e,r]}),E=x(m,2),L=E[0],k=E[1];L[28]=258,k[258]=28;for(var S=x(b,0),T=(S[0],S[1],new w(32768)),q=0;q<32768;++q){var R=(43690&q)>>>1|(21845&q)<<1;R=(61680&(R=(52428&R)>>>2|(13107&R)<<2))>>>4|(3855&R)<<4,T[q]=((65280&R)>>>8|(255&R)<<8)>>>1}var A=new v(288);for(q=0;q<144;++q)A[q]=8;for(q=144;q<256;++q)A[q]=9;for(q=256;q<280;++q)A[q]=7;for(q=280;q<288;++q)A[q]=8;var C=new v(32);for(q=0;q<32;++q)C[q]=5;var M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],D=function(t,n,e){var o=new Error(n||M[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,D),!e)throw o;return o},P=new v(0),U=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var e=n,o=9;--o;)e=(1&e&&-306674912)^e>>>1;t[n]=e}return t}(),z=function(t,n,e){for(;e;++n)t[n]=e,e>>>=8},H="undefined"!=typeof TextEncoder&&new TextEncoder,B="undefined"!=typeof TextDecoder&&new TextDecoder;try{B.decode(P,{stream:!0})}catch(t){}function I(t,n){if(n){for(var e=new v(t.length),o=0;o<t.length;++o)e[o]=t.charCodeAt(o);return e}if(H)return H.encode(t);var r=t.length,a=new v(t.length+(t.length>>1)),i=0,s=function(t){a[i++]=t};for(o=0;o<r;++o){if(i+5>a.length){var d=new v(i+8+(r-o<<1));d.set(a),a=d}var l=t.charCodeAt(o);l<128||n?s(l):l<2048?(s(192|l>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&t.charCodeAt(++o))>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|63&l)):(s(224|l>>12),s(128|l>>6&63),s(128|63&l))}return function(t,n,e){(null==n||n<0)&&(n=0),(null==e||e>t.length)&&(e=t.length);var o=new(2==t.BYTES_PER_ELEMENT?w:4==t.BYTES_PER_ELEMENT?y:v)(e-n);return o.set(t.subarray(n,e)),o}(a,0,i)}var X=function(t){var n=0;if(t)for(var e in t){var o=t[e].length;o>65535&&D(9),n+=o+4}return n},$=function(t,n,e,o,r,a,i,s){var d=o.length,l=e.extra,c=s&&s.length,u=X(l);z(t,n,null!=i?33639248:67324752),n+=4,null!=i&&(t[n++]=20,t[n++]=e.os),t[n]=20,n+=2,t[n++]=e.flag<<1|(null==a&&8),t[n++]=r&&8,t[n++]=255&e.compression,t[n++]=e.compression>>8;var p=new Date(null==e.mtime?Date.now():e.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&D(10),z(t,n,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),n+=4,null!=a&&(z(t,n,e.crc),z(t,n+4,a),z(t,n+8,e.size)),z(t,n+12,d),z(t,n+14,u),n+=16,null!=i&&(z(t,n,c),z(t,n+6,e.attrs),z(t,n+10,i),n+=14),t.set(o,n),n+=d,u)for(var f in l){var g=l[f],v=g.length;z(t,n,+f),z(t,n+2,v),t.set(g,n+4),n+=4+v}return c&&(t.set(s,n),n+=c),n},W=function(){function t(t){var n;this.filename=t,this.c=(n=-1,{p:function(t){for(var e=n,o=0;o<t.length;++o)e=U[255&e^t[o]]^e>>>8;n=e},d:function(){return~n}}),this.size=0,this.compression=0}return t.prototype.process=function(t,n){this.ondata(null,t,n)},t.prototype.push=function(t,n){this.ondata||D(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},t}(),Y=function(){function t(t){this.ondata=t,this.u=[],this.d=1}return t.prototype.add=function(t){var n=this;if(this.ondata||D(5),2&this.d)this.ondata(D(4+8*(1&this.d),0,1),null,!1);else{var e=I(t.filename),o=e.length,r=t.comment,a=r&&I(r),i=o!=t.filename.length||a&&r.length!=a.length,s=o+X(t.extra)+30;o>65535&&this.ondata(D(11,0,1),null,!1);var d=new v(s);$(d,0,t,e,i);var l=[d],c=function(){for(var t=0,e=l;t<e.length;t++){var o=e[t];n.ondata(null,o,!1)}l=[]},u=this.d;this.d=0;var p=this.u.length,h=function(t,n){var e={};for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}(t,{f:e,u:i,o:a,t:function(){t.terminate&&t.terminate()},r:function(){if(c(),u){var t=n.u[p+1];t?t.r():n.d=1}u=1}}),f=0;t.ondata=function(e,o,r){if(e)n.ondata(e,o,r),n.terminate();else if(f+=o.length,l.push(o),r){var a=new v(16);z(a,0,134695760),z(a,4,t.crc),z(a,8,f),z(a,12,t.size),l.push(a),h.c=f,h.b=s+f+16,h.crc=t.crc,h.size=t.size,u&&h.r(),u=1}else u&&c()},this.u.push(h)}},t.prototype.end=function(){var t=this;2&this.d?this.ondata(D(4+8*(1&this.d),0,1),null,!0):(this.d?this.e():this.u.push({r:function(){1&t.d&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3)},t.prototype.e=function(){for(var t=0,n=0,e=0,o=0,r=this.u;o<r.length;o++)e+=46+(d=r[o]).f.length+X(d.extra)+(d.o?d.o.length:0);for(var a=new v(e+22),i=0,s=this.u;i<s.length;i++){var d=s[i];$(a,t,d,d.f,d.u,d.c,n,d.o),t+=46+d.f.length+X(d.extra)+(d.o?d.o.length:0),n+=d.b}var l,c,u,p,h;l=a,c=t,u=this.u.length,p=e,h=n,z(l,c,101010256),z(l,c+8,u),z(l,c+10,u),z(l,c+12,p),z(l,c+16,h),this.ondata(null,a,!0),this.d=2},t.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++)n[t].t();this.d=2},t}();function _(t,n){t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("click",(e=>{e.stopPropagation(),t.classList.contains("disabled")||n()}))}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout,async function(a,i){await new Promise((t=>{"complete"===document.readyState||"interactive"===document.readyState?setTimeout((()=>t()),0):document.addEventListener("DOMContentLoaded",(()=>t()))}));const s=document.createElement("div");s.innerHTML='<div id="downloader-setting">\n  <style>\n    #downloader-setting {\n      position: fixed;\n      z-index: 99999;\n      top: 0;\n      right: 0;\n      padding: 16px;\n      margin: 12px;\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 0 5px lightgray;\n      color: black;\n    }\n    #downloader-setting img {\n      width: 220px !important;\n    }\n    #downloader-setting div {\n      padding: 6px 0;\n    }\n    #downloader-setting .button,\n    #downloader-setting .checkbox {\n      cursor: pointer;\n      padding: 10px 15px;\n      display: inline-block;\n    }\n    #downloader-setting .button {\n      border: 1px solid lightgray;\n    }\n    #downloader-setting .button.disabled {\n      cursor: default;\n      background-color: #E7E7E7;\n      color: #BBB;\n    }\n    #downloader-setting .checkbox > .box {\n      border: 1px solid grey;\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      margin-right: 8px;\n      vertical-align: middle;\n    }\n  </style>\n  <div>Captured images: <span class="captureNum"></span></div>\n  <div>Preview:<br /><img class="preview" /></div>\n  <div class="buttons">\n    <div class="save-container">\n      <div>\n        <div class="button auto">Auto Download All</div>\n      </div>\n      <div>\n        <div class="button auto-limit">Auto With Pages Limit</div>\n      </div>\n    </div>\n    <div class="l2r-container" style="display: none;">\n      <div class="checkbox l2r">\n        <div class="box"></div>\n        Left to Right\n      </div>\n    </div>\n    <div>\n      <div class="button download">Save</div>\n    </div>\n  </div>\n  <div class="auto-working" style="display: none">Automatically Downloading...</div>\n  <div class="progress" style="display:none">\n    Compress: <span class="current"></span> / <span class="total"></span>\n  </div>\n</div>\n',document.body.prepend(s);let d=null;const l=[0,0];async function c(n=1/0){t("buttons").style.display="none",t("auto-working").style.display="block",await async function(t,n){for(;;){if(r>=12||g().length>=n)return;if(await e(1e3),0===o)try{await t()&&(r=0),r++}catch(t){}}}(a,n),t("save-container").style.display="none",t("l2r-container").style.display="none",t("buttons").style.display="block",t("button.download").classList.remove("disabled"),t("auto-working").style.display="none",document.body.style.pointerEvents=""}document.getElementById("downloader-setting").addEventListener("mousedown",(t=>{d=[t.pageX,t.pageY]})),window.addEventListener("mouseup",(()=>{d=null})),window.addEventListener("mousemove",(t=>{if(d){const n=[t.pageX,t.pageY];l[0]+=n[0]-d[0],l[1]+=n[1]-d[1],document.getElementById("downloader-setting").style.transform=`translate(${l[0]}px, ${l[1]}px)`,d=n}})),_(t("auto"),(()=>c())),_(t("auto-limit"),(()=>{const t=window.prompt("How many pages?","10");null!==t&&c(parseInt(t,10))}));const u=t("l2r");_(u,(()=>{const t=u.querySelector(".box");t.style.background=t.style.background?"":"darkblue"})),_(t("download"),(async()=>{t("button.download").classList.add("disabled"),t("progress").style.display="inline-block",t("progress .total").textContent=g().length.toString(),t("progress .current").textContent="0";const e=await async function(e,o){return new Promise((o=>{const r=[],a=new Y(((t,n,e)=>{if(!t&&(r.push(n),e)){const t=window.URL.createObjectURL(new Blob(r));o(t)}})),i=`${e.length}`.length;(async()=>{for(let r=0;r<e.length;++r){const s=new W(`${(r+1).toString().padStart(i,"0")}.jpg`);a.add(s),s.push(new Uint8Array(await n(e[r])),!0),o=`${r+1}`,t("progress .current").textContent=o}var o;a.end()})()}))}(g()),o=document.createElement("a");o.href=e,o.download=document.title+".zip",o.click(),t("progress").style.display="none",i&&i(),t("button.download").classList.remove("disabled")}))}((async()=>{const n=Array.from(document.querySelectorAll("[magazine-viewer-inner]")).find((t=>"0px"===t.style.left));if(n){const e=n.querySelector("img");e&&async function(n){if(f.has(n))return;f.add(n);const e=await(await u(n)).blob(),o=await function(t){return new Promise((n=>{const e=new FileReader;e.onloadend=()=>n(e.result),e.readAsDataURL(t)}))}(e);!async function(n){if(n.startsWith("data:image/png")){const t=await new Promise((t=>{const e=new Image;e.onload=()=>t(e),e.src=n})),e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const o=e.getContext("2d");h.call(o,t,0,0),n=e.toDataURL("image/jpeg",1)}for(let t=0;t<3;++t)if(p[p.length-1-t]===n)return!1;a(),p.push(n),t("captureNum").textContent=`${p.length}`,t("preview").src=n}(o)}(e.src),n.querySelector(".manga-left-arrow")?.click()}}))})();