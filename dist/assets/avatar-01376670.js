import{a as h,r as s,j as l,P as c,aZ as I,g,k as f}from"./index-6fa63041.js";var m="Avatar",[j,P]=h(m),[C,p]=j(m),A=s.forwardRef((a,t)=>{const{__scopeAvatar:e,...r}=a,[o,n]=s.useState("idle");return l.jsx(C,{scope:e,imageLoadingStatus:o,onImageLoadingStatusChange:n,children:l.jsx(c.span,{...r,ref:t})})});A.displayName=m;var x="AvatarImage",w=s.forwardRef((a,t)=>{const{__scopeAvatar:e,src:r,onLoadingStatusChange:o=()=>{},...n}=a,i=p(x,e),d=_(r),u=I(v=>{o(v),i.onImageLoadingStatusChange(v)});return g(()=>{d!=="idle"&&u(d)},[d,u]),d==="loaded"?l.jsx(c.img,{...n,ref:t,src:r}):null});w.displayName=x;var S="AvatarFallback",N=s.forwardRef((a,t)=>{const{__scopeAvatar:e,delayMs:r,...o}=a,n=p(S,e),[i,d]=s.useState(r===void 0);return s.useEffect(()=>{if(r!==void 0){const u=window.setTimeout(()=>d(!0),r);return()=>window.clearTimeout(u)}},[r]),i&&n.imageLoadingStatus!=="loaded"?l.jsx(c.span,{...o,ref:t}):null});N.displayName=S;function _(a){const[t,e]=s.useState("idle");return g(()=>{if(!a){e("error");return}let r=!0;const o=new window.Image,n=i=>()=>{r&&e(i)};return e("loading"),o.onload=n("loaded"),o.onerror=n("error"),o.src=a,()=>{r=!1}},[a]),t}var L=A,y=w,R=N;const b=s.forwardRef(({className:a,...t},e)=>l.jsx(L,{ref:e,className:f("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...t}));b.displayName=L.displayName;const k=s.forwardRef(({className:a,...t},e)=>l.jsx(y,{ref:e,className:f("aspect-square h-full w-full",a),...t}));k.displayName=y.displayName;const E=s.forwardRef(({className:a,...t},e)=>l.jsx(R,{ref:e,className:f("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...t}));E.displayName=R.displayName;export{b as A,k as a,E as b};
