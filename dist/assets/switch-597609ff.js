import{a as T,r as o,f as _,u as B,j as r,P as g,d as H,aC as I,aD as M,k as S}from"./index-6fa63041.js";var m="Switch",[q,U]=T(m),[z,A]=q(m),x=o.forwardRef((e,s)=>{const{__scopeSwitch:t,name:a,checked:n,defaultChecked:l,required:d,disabled:c,value:u="on",onCheckedChange:f,...v}=e,[i,b]=o.useState(null),E=_(s,h=>b(h)),k=o.useRef(!1),w=i?!!i.closest("form"):!0,[p=!1,R]=B({prop:n,defaultProp:l,onChange:f});return r.jsxs(z,{scope:t,checked:p,disabled:c,children:[r.jsx(g.button,{type:"button",role:"switch","aria-checked":p,"aria-required":d,"data-state":P(p),"data-disabled":c?"":void 0,disabled:c,value:u,...v,ref:E,onClick:H(e.onClick,h=>{R(N=>!N),w&&(k.current=h.isPropagationStopped(),k.current||h.stopPropagation())})}),w&&r.jsx(D,{control:i,bubbles:!k.current,name:a,value:u,checked:p,required:d,disabled:c,style:{transform:"translateX(-100%)"}})]})});x.displayName=m;var C="SwitchThumb",y=o.forwardRef((e,s)=>{const{__scopeSwitch:t,...a}=e,n=A(C,t);return r.jsx(g.span,{"data-state":P(n.checked),"data-disabled":n.disabled?"":void 0,...a,ref:s})});y.displayName=C;var D=e=>{const{control:s,checked:t,bubbles:a=!0,...n}=e,l=o.useRef(null),d=I(t),c=M(s);return o.useEffect(()=>{const u=l.current,f=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(f,"checked").set;if(d!==t&&i){const b=new Event("click",{bubbles:a});i.call(u,t),u.dispatchEvent(b)}},[d,t,a]),r.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...n,tabIndex:-1,ref:l,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function P(e){return e?"checked":"unchecked"}var j=x,O=y;const F=o.forwardRef(({className:e,...s},t)=>r.jsx(j,{className:S("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...s,ref:t,children:r.jsx(O,{className:S("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));F.displayName=j.displayName;export{F as S};
