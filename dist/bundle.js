!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e){let t=[];return e.items.forEach(function(e){t.push(e.id.videoId)}),fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAhTmzZT1zjtJXZwinp5uXych0c_3U1Q8Y&id="+t.join(",")+"&part=snippet,statistics").then(function(e){return e.json()}).then(function(t){return t.items.push({nextToken:e.nextPageToken}),t.items})}function i(e){let t=document.createElement("div");t.id="wrapper";let n=document.createElement("div");n.id="play-video-container";const o=e.id;let i=document.createElement("iframe");i.id="iFrame",i.src="https://www.youtube.com/embed/"+o,i.frameborder="0",i.allow="autoplay; encrypted-media",i.allowfullscreen=!0;let d=document.createElement("i");d.className="fas fa-times",d.addEventListener("click",function(){document.body.removeChild(document.body.lastChild)});let c=document.createElement("i");c.className="far fa-eye",c.innerText=+e.statistics.viewCount;let a=document.createElement("div");if(a.className="other-info-container",a.appendChild(c),void 0===e.statistics.likeCount);else{let t=document.createElement("i");t.className="fas fa-thumbs-up",t.innerText=e.statistics.likeCount,a.appendChild(t)}if(void 0===e.statistics.dislikeCount);else{let t=document.createElement("i");t.className="fas fa-thumbs-down",t.innerText=e.statistics.dislikeCount,a.appendChild(t)}let l=document.createElement("p");l.className="video-title",l.innerText=e.snippet.title;let u=document.createElement("div");u.className="info-container";let r=document.createElement("div");r.className="info-container-wrapper",u.appendChild(l),u.appendChild(a),r.appendChild(u),n.appendChild(i),n.appendChild(d),n.appendChild(r),t.appendChild(n),document.body.appendChild(t),function(e){let t=!1,n=0,o=0,i=0,d=0,c=0,a=0,l=document.getElementById(e);l.addEventListener("mousedown",function(e){t=!0,n=e.pageX,o=e.pageY}),l.addEventListener("mouseup",function(e){t=!1,c=e.pageX,a=e.pageY,l.onmousemove=null,n-c>=100&&document.body.removeChild(document.body.lastChild)}),l.onmousemove=function(e){console.log(i),console.log(d),i=e.pageX,d=e.pageY}}("play-video-container"),function(e){let t=0,n=0,o=0,i=0,d=0,c=document.getElementById(e);c.addEventListener("touchstart",function(e){d=e.touches[0],t=d.pageX,n=d.pageY}),c.addEventListener("touchend",function(e){d=e.changedTouches[0],o=d.pageX,i=d.pageY,t-o>=100&&document.body.removeChild(document.body.lastChild)})}("play-video-container")}function d(e){e.pop();let t=document.getElementById("main-video-container"),n=[];e.forEach(function(e){let t=document.createElement("div");t.className="video-container",t.addEventListener("click",function(){i(e)});let o=document.createElement("img");o.src=e.snippet.thumbnails.medium.url,o.alt="Logo",o.className="video-img";let d=document.createElement("p");d.innerText=e.snippet.title,d.className="video-title",t.appendChild(o),t.appendChild(d),n.push(t)}),document.getElementById("loader-container").remove(),n.forEach(e=>t.appendChild(e))}function c(){let e=document.createElement("div");e.id="loader-container";let t=document.createElement("div");t.id="loader",e.appendChild(t),document.body.appendChild(e);const n=document.getElementsByClassName("input-text-for-search")[0].value;(function(e){return fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAhTmzZT1zjtJXZwinp5uXych0c_3U1Q8Y&type=video&part=snippet&maxResults=20&q="+e).then(function(e){return e.json()})})(n).then(o).then(function(e){let t=e.pop();window.scrollTo(0,0),function(){let e=document.getElementById("main-video-container");for(;e.firstChild;)e.removeChild(e.firstChild)}(),d(e),window.onscroll=function(){!function e(t,n,i){let c=document.documentElement,a=c.scrollTop+window.innerHeight,l=c.offsetHeight;if(Math.round(a)===l&&null===document.getElementById("loader-container")){let t=document.createElement("div");t.id="loader-container";let c=document.createElement("div");c.id="loader",t.appendChild(c),document.body.appendChild(t),fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAhTmzZT1zjtJXZwinp5uXych0c_3U1Q8Y&pageToken="+i+"&part=snippet&maxResults=20&q="+n).then(function(e){return e.json()}).then(o).then(function(t){let o=t.pop();d(t),window.onscroll=function(){e(t,n,o.nextToken)}})}}(0,n,t.nextToken)}})}function a(){let e=document.createElement("div");return e.id="main-video-container",e}n.r(t),function(){let e=function(){let e=document.createElement("div");return e.className="search-container",e.appendChild(function(){let e=document.createElement("div");e.className="search-form";let t=document.createElement("input");t.className="input-text-for-search",t.type="text",t.placeholder="Input text",t.addEventListener("keyup",function(e){e.preventDefault(),13===e.keyCode&&document.getElementById("button-search").click()});let n=document.createElement("i");n.className="fas fa-times",n.id="clear-input",n.addEventListener("click",function(){let e=document.getElementsByClassName("input-text-for-search")[0];e.value=""});let o=document.createElement("button");return o.id="button-search",o.type="submit",o.innerHTML='<i class="fas fa-search"></i>',o.addEventListener("click",function(){c()}),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}()),e}();a(),document.body=document.createElement("body"),document.body.appendChild(e),document.body.appendChild(a())}()}]);