(()=>{"use strict";var e={733:(e,t,r)=>{r.d(t,{I:()=>c,e:()=>l});var n=r(618);function o(e,t){let r=[[e+2,t-1],[e+2,t+1],[e-2,t-1],[e-2,t+1],[e+1,t-2],[e-1,t-2],[e+1,t+2],[e-1,t+2]],n=[];for(let e of r)if(!(e[0]<0||e[0]>7||e[1]<0||e[1]>7)){let t=10*e[0]+e[1];n.push(t)}return n}const c=(()=>{let e=document.createElement("div");e.setAttribute("class","board");let t=(0,n.k)();for(let r=0;r<8;r++)for(let n=0;n<8;n++){let o=document.createElement("div");0==r?o.setAttribute("id",`${n}`):o.setAttribute("id",`${r}${n}`),t.addVertex(10*r+n),r%2!=0&&n%2!=0||r%2==0&&n%2==0?o.setAttribute("class","black"):o.setAttribute("class","white"),e.append(o)}document.body.appendChild(e);for(let e=0;e<8;e++)for(let r=0;r<8;r++){let n=o(e,r);for(let o of n)t.addBiEdge(10*e+r,o)}return t})(),l=(e=0,t=0)=>{document.getElementById(`${e}`).innerHTML="",document.getElementById(`${t}`).appendChild(function(){let e=document.createElement("div");return e.setAttribute("class","knight"),e.innerHTML='<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 211.35 211.35" xml:space="preserve" stroke="#000000" stroke-width="0.00211346"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="9.721916"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M189.229,119.315c-22.893,12.354-25.097-10.119-25.097-10.119c-18.938-2.199-33.018-23.345-33.018-23.345 c-25.559,13.225-11.325,50.463-0.302,64.767c1.059,1.359,1.921,2.784,2.713,4.244h24.128v25.215h24.051v31.269H16.269v-31.269 h24.048v-25.215h5.58c-20.227-27.023-14.732-52.422-8.588-69.333c7.578-20.851,17.83-32.285,32.781-44.449 c22.195-18.099,63.218-20.38,63.218-20.38c0.272-1.537,1.413-3.322,3.032-5.175c-4.917,0.163-10.905,0.564-17.738,1.439 c-4.687,0.886-9.862,1.407-15.119,2.967c-5.358,1.144-10.805,3.002-16.373,5.157c-5.574,2.057-11.035,5-16.441,8.086 c-5.125,3.546-10.571,6.877-14.877,11.562c-4.95,4.043-8.55,9.276-12.256,14.301c-3.854,4.915-5.754,10.914-8.63,16.113 c-2.154,5.521-3.36,11.209-4.977,16.408c-1.457,5.249-1.434,10.521-2.161,15.214c-0.618,4.74-1.102,9.091-0.756,12.992 c0.121,3.877,0.225,7.258,0.304,10.036c0.157,5.58,0.254,8.76,0.254,8.76l-0.757,0.083c0,0-0.674-3.121-1.551-8.736 c-0.411-2.837-0.908-6.254-1.487-10.179c-0.83-3.948-0.866-8.452-0.502-13.382c0.399-4.924,0.024-10.37,1.15-16.006 c1.282-5.58,2.092-11.73,4.356-17.65c2.899-5.677,4.85-12.141,8.86-17.582c3.857-5.568,7.669-11.372,12.942-15.876 c4.85-4.986,10.799-8.45,16.414-12.129c5.866-3.154,11.78-6.121,17.711-8.166c5.902-2.214,11.801-3.65,17.449-4.472 c5.574-1.218,10.961-1.386,15.85-1.962c8.311-0.388,15.268,0,20.664,0.582C145.466,6.585,156.2,0,156.2,0 c-2.205,2.185-3.085,14.092-3.085,14.092c2.198-3.96,9.244-7.936,9.244-7.936c-3.96,9.224,0,29.046,0,29.046 c11.455,11.47,24.21,51.083,24.21,51.083l4.848,7.045C197.6,102.174,195.329,116.028,189.229,119.315z"></path> </g> </g></svg>',e}())}},180:(e,t,r)=>{var n=r(733);function o(e){return new Promise((t=>setTimeout(t,e)))}const c=e=>{let t=document.createElement("div");t.innerHTML='<svg height="100" width="100"><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="black"/></svg>',document.getElementById(`${e}`).appendChild(t)};(async(e,t)=>{(0,n.e)(0,0);let r=n.I.bfs(0,77),l="",s=r.size,i=0;for(let e=0;e<s;e++){let t=r.pop();(0,n.e)(i,t),c(i),i=t,l+=e+1<s?t+" -> ":t,await o(100)}console.log(l)})()},618:(e,t,r)=>{r.d(t,{k:()=>c});var n=r(661),o=r(968);const c=()=>{let e=0,t=new Map,r=new Map;return{get numOfVert(){return e},addVertex:n=>{t.set(n,[]),r.set(n,!1),e++},addBiEdge:(e,r)=>{t.get(e).push(r)},printGraph:()=>{let e=t.keys();for(let r of e){let e=t.get(r),n="";for(let t of e)n+=t+", ";n+="null",console.log(r+" -> "+n)}},bfs:(e,c)=>{r.set(e,!0);let l=(0,n.c)();l.enqueue(e);let s=(0,o.K)();for(;1!=l.isEmpty();){let e=l.peek();l.dequeue(),s.push(e);for(let n of t.get(e)){if(n==c){let e=(0,o.K)();e.push(c);let r=c;for(;1!=s.isEmpty();){let n=t.get(r);for(let t of n)t==s.peek()&&(r=s.peek(),e.push(r));s.pop()}return e}1!=r.get(n)&&(l.enqueue(n),r.set(n,!0))}}alert("Vertex Not Found!")}}}},661:(e,t,r)=>{r.d(t,{c:()=>n});const n=()=>{let e=[],t=0;return{enqueue:r=>{e.push(r),t++},dequeue:()=>{if(t>0){t--;let r=e[0];return e.shift(),r}},peek:()=>e[0],isEmpty:()=>t<=0,get length(){return t},get queue(){return e}}}},968:(e,t,r)=>{r.d(t,{K:()=>n});const n=()=>{let e=[],t=0;return{push:r=>{e.push(r),t++},pop:()=>{if(t>0)return t--,e.pop()},peek:()=>e[t-1],isEmpty:()=>t<=0,get size(){return t},get stack(){return e}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(733),r(618),r(180),r(661),r(968)})();