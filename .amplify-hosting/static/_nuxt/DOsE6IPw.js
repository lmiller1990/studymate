import{r as h,N as y,E as S,aa as j,a8 as w,i as T}from"./Bt_NbFr3.js";function p(e){return j()?(w(e),!0):!1}function f(e){return typeof e=="function"?e():T(e)}const m=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const O=Object.prototype.toString,x=e=>O.call(e)==="[object Object]",d=()=>{};function W(e,n){function o(...t){return new Promise((s,i)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(s).catch(i)})}return o}function g(e,n={}){let o,t,s=d;const i=r=>{clearTimeout(r),s(),s=d};return r=>{const l=f(e),a=f(n.maxWait);return o&&i(o),l<=0||a!==void 0&&a<=0?(t&&(i(t),t=null),Promise.resolve(r())):new Promise((u,b)=>{s=n.rejectOnCancel?b:u,a&&!t&&(t=setTimeout(()=>{o&&i(o),t=null,u(r())},a)),o=setTimeout(()=>{t&&i(t),t=null,u(r())},l)})}}function C(e,n=200,o={}){return W(g(n,o),e)}function D(e,n=1e3,o={}){const{immediate:t=!0,immediateCallback:s=!1}=o;let i=null;const c=h(!1);function r(){i&&(clearInterval(i),i=null)}function l(){c.value=!1,r()}function a(){const u=f(n);u<=0||(c.value=!0,s&&e(),r(),i=setInterval(e,u))}if(t&&m&&a(),y(n)||typeof n=="function"){const u=S(n,()=>{c.value&&m&&a()});p(u)}return p(l),{isActive:c,pause:l,resume:a}}export{p as a,m as b,D as c,x as i,d as n,f as t,C as u};
