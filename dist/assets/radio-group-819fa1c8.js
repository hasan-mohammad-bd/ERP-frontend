<<<<<<<< HEAD:dist/assets/radio-group-819fa1c8.js
import{d as w,r as i,h as k,a as t,P as x,f as h,g as K,aJ as V,aK as T,aL as C,l as B,u as U,aM as z,aN as H,b as E,aO as $}from"./index-a2059318.js";var y="Radio",[J,N]=w(y),[W,X]=J(y),P=i.forwardRef((o,s)=>{const{__scopeRadio:e,name:d,checked:r=!1,required:a,disabled:c,value:l="on",onCheck:u,...R}=o,[v,p]=i.useState(null),f=k(s,b=>p(b)),n=i.useRef(!1),m=v?!!v.closest("form"):!0;return t.jsxs(W,{scope:e,checked:r,disabled:c,children:[t.jsx(x.button,{type:"button",role:"radio","aria-checked":r,"data-state":j(r),"data-disabled":c?"":void 0,disabled:c,value:l,...R,ref:f,onClick:h(o.onClick,b=>{r||u==null||u(),m&&(n.current=b.isPropagationStopped(),n.current||b.stopPropagation())})}),m&&t.jsx(Y,{control:v,bubbles:!n.current,name:d,value:l,checked:r,required:a,disabled:c,style:{transform:"translateX(-100%)"}})]})});P.displayName=y;var G="RadioIndicator",I=i.forwardRef((o,s)=>{const{__scopeRadio:e,forceMount:d,...r}=o,a=X(G,e);return t.jsx(K,{present:d||a.checked,children:t.jsx(x.span,{"data-state":j(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:s})})});I.displayName=G;var Y=o=>{const{control:s,checked:e,bubbles:d=!0,...r}=o,a=i.useRef(null),c=V(e),l=T(s);return i.useEffect(()=>{const u=a.current,R=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(R,"checked").set;if(c!==e&&p){const f=new Event("click",{bubbles:d});p.call(u,e),u.dispatchEvent(f)}},[c,e,d]),t.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:e,...r,tabIndex:-1,ref:a,style:{...o.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(o){return o?"checked":"unchecked"}var Q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],g="RadioGroup",[Z,ie]=w(g,[C,N]),S=C(),_=N(),[ee,oe]=Z(g),A=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,name:d,defaultValue:r,value:a,required:c=!1,disabled:l=!1,orientation:u,dir:R,loop:v=!0,onValueChange:p,...f}=o,n=S(e),m=B(R),[b,q]=U({prop:a,defaultProp:r,onChange:p});return t.jsx(ee,{scope:e,name:d,required:c,disabled:l,value:b,onValueChange:q,children:t.jsx(z,{asChild:!0,...n,orientation:u,dir:m,loop:v,children:t.jsx(x.div,{role:"radiogroup","aria-required":c,"aria-orientation":u,"data-disabled":l?"":void 0,dir:m,...f,ref:s})})})});A.displayName=g;var D="RadioGroupItem",M=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,disabled:d,...r}=o,a=oe(D,e),c=a.disabled||d,l=S(e),u=_(e),R=i.useRef(null),v=k(s,R),p=a.value===r.value,f=i.useRef(!1);return i.useEffect(()=>{const n=b=>{Q.includes(b.key)&&(f.current=!0)},m=()=>f.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",m),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",m)}},[]),t.jsx(H,{asChild:!0,...l,focusable:!c,active:p,children:t.jsx(P,{disabled:c,required:a.required,checked:p,...u,...r,name:a.name,ref:v,onCheck:()=>a.onValueChange(r.value),onKeyDown:h(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:h(r.onFocus,()=>{var n;f.current&&((n=R.current)==null||n.click())})})})});M.displayName=D;var re="RadioGroupIndicator",O=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,...d}=o,r=_(e);return t.jsx(I,{...r,...d,ref:s})});O.displayName=re;var F=A,L=M,ae=O;const te=i.forwardRef(({className:o,...s},e)=>t.jsx(F,{className:E("grid gap-2",o),...s,ref:e}));te.displayName=F.displayName;const se=i.forwardRef(({className:o,...s},e)=>t.jsx(L,{ref:e,className:E("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",o),...s,children:t.jsx(ae,{className:"flex items-center justify-center",children:t.jsx($,{className:"h-2.5 w-2.5 fill-current text-current"})})}));se.displayName=L.displayName;export{te as R,se as a};
========
import{d as w,r as i,h as k,a as t,P as x,f as h,g as K,aJ as V,aK as T,aL as C,l as B,u as U,aM as z,aN as H,b as E,aO as $}from"./index-492716bc.js";var y="Radio",[J,N]=w(y),[W,X]=J(y),P=i.forwardRef((o,s)=>{const{__scopeRadio:e,name:d,checked:r=!1,required:a,disabled:c,value:l="on",onCheck:u,...R}=o,[v,p]=i.useState(null),f=k(s,b=>p(b)),n=i.useRef(!1),m=v?!!v.closest("form"):!0;return t.jsxs(W,{scope:e,checked:r,disabled:c,children:[t.jsx(x.button,{type:"button",role:"radio","aria-checked":r,"data-state":j(r),"data-disabled":c?"":void 0,disabled:c,value:l,...R,ref:f,onClick:h(o.onClick,b=>{r||u==null||u(),m&&(n.current=b.isPropagationStopped(),n.current||b.stopPropagation())})}),m&&t.jsx(Y,{control:v,bubbles:!n.current,name:d,value:l,checked:r,required:a,disabled:c,style:{transform:"translateX(-100%)"}})]})});P.displayName=y;var G="RadioIndicator",I=i.forwardRef((o,s)=>{const{__scopeRadio:e,forceMount:d,...r}=o,a=X(G,e);return t.jsx(K,{present:d||a.checked,children:t.jsx(x.span,{"data-state":j(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:s})})});I.displayName=G;var Y=o=>{const{control:s,checked:e,bubbles:d=!0,...r}=o,a=i.useRef(null),c=V(e),l=T(s);return i.useEffect(()=>{const u=a.current,R=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(R,"checked").set;if(c!==e&&p){const f=new Event("click",{bubbles:d});p.call(u,e),u.dispatchEvent(f)}},[c,e,d]),t.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:e,...r,tabIndex:-1,ref:a,style:{...o.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(o){return o?"checked":"unchecked"}var Q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],g="RadioGroup",[Z,ie]=w(g,[C,N]),S=C(),_=N(),[ee,oe]=Z(g),A=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,name:d,defaultValue:r,value:a,required:c=!1,disabled:l=!1,orientation:u,dir:R,loop:v=!0,onValueChange:p,...f}=o,n=S(e),m=B(R),[b,q]=U({prop:a,defaultProp:r,onChange:p});return t.jsx(ee,{scope:e,name:d,required:c,disabled:l,value:b,onValueChange:q,children:t.jsx(z,{asChild:!0,...n,orientation:u,dir:m,loop:v,children:t.jsx(x.div,{role:"radiogroup","aria-required":c,"aria-orientation":u,"data-disabled":l?"":void 0,dir:m,...f,ref:s})})})});A.displayName=g;var D="RadioGroupItem",M=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,disabled:d,...r}=o,a=oe(D,e),c=a.disabled||d,l=S(e),u=_(e),R=i.useRef(null),v=k(s,R),p=a.value===r.value,f=i.useRef(!1);return i.useEffect(()=>{const n=b=>{Q.includes(b.key)&&(f.current=!0)},m=()=>f.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",m),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",m)}},[]),t.jsx(H,{asChild:!0,...l,focusable:!c,active:p,children:t.jsx(P,{disabled:c,required:a.required,checked:p,...u,...r,name:a.name,ref:v,onCheck:()=>a.onValueChange(r.value),onKeyDown:h(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:h(r.onFocus,()=>{var n;f.current&&((n=R.current)==null||n.click())})})})});M.displayName=D;var re="RadioGroupIndicator",O=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,...d}=o,r=_(e);return t.jsx(I,{...r,...d,ref:s})});O.displayName=re;var F=A,L=M,ae=O;const te=i.forwardRef(({className:o,...s},e)=>t.jsx(F,{className:E("grid gap-2",o),...s,ref:e}));te.displayName=F.displayName;const se=i.forwardRef(({className:o,...s},e)=>t.jsx(L,{ref:e,className:E("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",o),...s,children:t.jsx(ae,{className:"flex items-center justify-center",children:t.jsx($,{className:"h-2.5 w-2.5 fill-current text-current"})})}));se.displayName=L.displayName;export{te as R,se as a};
>>>>>>>> main:dist/assets/radio-group-23180882.js
