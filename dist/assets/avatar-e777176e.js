<<<<<<<< HEAD:dist/assets/avatar-e777176e.js
import{d as h,r as s,a as d,P as c,bk as I,i as g,b as f}from"./index-76f7bfce.js";var m="Avatar",[b,P]=h(m),[C,p]=b(m),A=s.forwardRef((a,t)=>{const{__scopeAvatar:e,...r}=a,[o,n]=s.useState("idle");return d.jsx(C,{scope:e,imageLoadingStatus:o,onImageLoadingStatusChange:n,children:d.jsx(c.span,{...r,ref:t})})});A.displayName=m;var x="AvatarImage",w=s.forwardRef((a,t)=>{const{__scopeAvatar:e,src:r,onLoadingStatusChange:o=()=>{},...n}=a,i=p(x,e),l=j(r),u=I(v=>{o(v),i.onImageLoadingStatusChange(v)});return g(()=>{l!=="idle"&&u(l)},[l,u]),l==="loaded"?d.jsx(c.img,{...n,ref:t,src:r}):null});w.displayName=x;var S="AvatarFallback",N=s.forwardRef((a,t)=>{const{__scopeAvatar:e,delayMs:r,...o}=a,n=p(S,e),[i,l]=s.useState(r===void 0);return s.useEffect(()=>{if(r!==void 0){const u=window.setTimeout(()=>l(!0),r);return()=>window.clearTimeout(u)}},[r]),i&&n.imageLoadingStatus!=="loaded"?d.jsx(c.span,{...o,ref:t}):null});N.displayName=S;function j(a){const[t,e]=s.useState("idle");return g(()=>{if(!a){e("error");return}let r=!0;const o=new window.Image,n=i=>()=>{r&&e(i)};return e("loading"),o.onload=n("loaded"),o.onerror=n("error"),o.src=a,()=>{r=!1}},[a]),t}var L=A,y=w,R=N;const _=s.forwardRef(({className:a,...t},e)=>d.jsx(L,{ref:e,className:f("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...t}));_.displayName=L.displayName;const k=s.forwardRef(({className:a,...t},e)=>d.jsx(y,{ref:e,className:f("aspect-square h-full w-full",a),...t}));k.displayName=y.displayName;const E=s.forwardRef(({className:a,...t},e)=>d.jsx(R,{ref:e,className:f("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...t}));E.displayName=R.displayName;export{_ as A,k as a,E as b};
========
import{d as h,r as s,a as d,P as c,bk as I,i as g,b as f}from"./index-3f8f5d35.js";var m="Avatar",[b,P]=h(m),[C,p]=b(m),A=s.forwardRef((a,t)=>{const{__scopeAvatar:e,...r}=a,[o,n]=s.useState("idle");return d.jsx(C,{scope:e,imageLoadingStatus:o,onImageLoadingStatusChange:n,children:d.jsx(c.span,{...r,ref:t})})});A.displayName=m;var x="AvatarImage",w=s.forwardRef((a,t)=>{const{__scopeAvatar:e,src:r,onLoadingStatusChange:o=()=>{},...n}=a,i=p(x,e),l=j(r),u=I(v=>{o(v),i.onImageLoadingStatusChange(v)});return g(()=>{l!=="idle"&&u(l)},[l,u]),l==="loaded"?d.jsx(c.img,{...n,ref:t,src:r}):null});w.displayName=x;var S="AvatarFallback",N=s.forwardRef((a,t)=>{const{__scopeAvatar:e,delayMs:r,...o}=a,n=p(S,e),[i,l]=s.useState(r===void 0);return s.useEffect(()=>{if(r!==void 0){const u=window.setTimeout(()=>l(!0),r);return()=>window.clearTimeout(u)}},[r]),i&&n.imageLoadingStatus!=="loaded"?d.jsx(c.span,{...o,ref:t}):null});N.displayName=S;function j(a){const[t,e]=s.useState("idle");return g(()=>{if(!a){e("error");return}let r=!0;const o=new window.Image,n=i=>()=>{r&&e(i)};return e("loading"),o.onload=n("loaded"),o.onerror=n("error"),o.src=a,()=>{r=!1}},[a]),t}var L=A,y=w,R=N;const _=s.forwardRef(({className:a,...t},e)=>d.jsx(L,{ref:e,className:f("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...t}));_.displayName=L.displayName;const k=s.forwardRef(({className:a,...t},e)=>d.jsx(y,{ref:e,className:f("aspect-square h-full w-full",a),...t}));k.displayName=y.displayName;const E=s.forwardRef(({className:a,...t},e)=>d.jsx(R,{ref:e,className:f("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...t}));E.displayName=R.displayName;export{_ as A,k as a,E as b};
>>>>>>>> main:dist/assets/avatar-d775c095.js
