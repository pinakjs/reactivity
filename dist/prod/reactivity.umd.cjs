(function(r,s){typeof exports=="object"&&typeof module<"u"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(r=typeof globalThis<"u"?globalThis:r||self,s(r.reactivity={}))})(this,function(r){"use strict";const s=(e,t,n,c=!1)=>Object.defineProperty(e,t,{value:n,enumerable:!1,writable:c}),p=e=>typeof e=="function",g=e=>typeof e=="boolean",y=()=>!1,N=(e,t)=>e===t;/**
 * @repup/reactivity - A lightweight, smaller javascript reactivity system.
 * 
 * @author Anuj Kumar <thestackmastery@gmail.com>
 * @link https://github.com/thestackmastery/reactivity
 * @license MIT https://github.com/thestackmastery/reactivity/LICENSE
 * @version 1.0.0
 */let k=0,o=null;const E=(e,t=N)=>{const n=s(s({},1,2,!0),0,k++),c=g(t)?y:t;return[()=>(o&&(o[n[0]]=n),e),h=>{const f=p(h)?h(e):h;c(e,f)||(e=f,d(n))}]},F=(e,t)=>{const n=[];o={};const c=(t||e)();let S,l;for(S in o)l=o[S],l[l[1]]=e,n.push([l,l[1]++]);return o=null,n.length?[c,()=>{let f;for(f of n)delete f[0][f[1]]}]:[c,y]},M=e=>{if(!o)return e();const t=o;o=null;const n=e();return o=t,n},O=p(queueMicrotask)?queueMicrotask:Promise.resolve().then;let u={},i={},a=!1,R=3,_={},d;const T=d=e=>{u[e[0]]||(u[e[0]]=!0,_[e[0]]=e,a||(a=!0,O(m)))},U=e=>{u[e[0]]||(u[e[0]]=!0,b(e))},m=()=>{let e,t=R;for(;t-- >0;)for(e in _)b(_[e]),delete _[e];u={},i={},a=!1},b=e=>{let t;for(t in e)i[t]||(i[t]=!0,e[t]())},v=e=>{d=U,e(),d=T,a||(i={},u={})};r.createSignal=E,r.observeSignal=F,r.untrackSignal=M,r.withoutBatch=v,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
