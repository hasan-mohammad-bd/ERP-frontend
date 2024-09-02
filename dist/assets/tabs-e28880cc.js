import{d as F,aT as y,r as l,l as V,u as $,a as c,e as D,P as g,aU as k,aV as G,f as m,g as L,b as p}from"./index-22834323.js";var T="Tabs",[K,J]=F(T,[y]),h=y(),[B,x]=K(T),N=l.forwardRef((e,a)=>{const{__scopeTabs:t,value:o,onValueChange:i,defaultValue:d,orientation:s="horizontal",dir:u,activationMode:b="automatic",...v}=e,r=V(u),[n,f]=$({prop:o,onChange:i,defaultProp:d});return c.jsx(B,{scope:t,baseId:D(),value:n,onValueChange:f,orientation:s,dir:r,activationMode:b,children:c.jsx(g.div,{dir:r,"data-orientation":s,...v,ref:a})})});N.displayName=T;var C="TabsList",I=l.forwardRef((e,a)=>{const{__scopeTabs:t,loop:o=!0,...i}=e,d=x(C,t),s=h(t);return c.jsx(k,{asChild:!0,...s,orientation:d.orientation,dir:d.dir,loop:o,children:c.jsx(g.div,{role:"tablist","aria-orientation":d.orientation,...i,ref:a})})});I.displayName=C;var R="TabsTrigger",j=l.forwardRef((e,a)=>{const{__scopeTabs:t,value:o,disabled:i=!1,...d}=e,s=x(R,t),u=h(t),b=A(s.baseId,o),v=E(s.baseId,o),r=o===s.value;return c.jsx(G,{asChild:!0,...u,focusable:!i,active:r,children:c.jsx(g.button,{type:"button",role:"tab","aria-selected":r,"aria-controls":v,"data-state":r?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:b,...d,ref:a,onMouseDown:m(e.onMouseDown,n=>{!i&&n.button===0&&n.ctrlKey===!1?s.onValueChange(o):n.preventDefault()}),onKeyDown:m(e.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&s.onValueChange(o)}),onFocus:m(e.onFocus,()=>{const n=s.activationMode!=="manual";!r&&!i&&n&&s.onValueChange(o)})})})});j.displayName=R;var w="TabsContent",_=l.forwardRef((e,a)=>{const{__scopeTabs:t,value:o,forceMount:i,children:d,...s}=e,u=x(w,t),b=A(u.baseId,o),v=E(u.baseId,o),r=o===u.value,n=l.useRef(r);return l.useEffect(()=>{const f=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(f)},[]),c.jsx(L,{present:i||r,children:({present:f})=>c.jsx(g.div,{"data-state":r?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":b,hidden:!f,id:v,tabIndex:0,...s,ref:a,style:{...e.style,animationDuration:n.current?"0s":void 0},children:f&&d})})});_.displayName=w;function A(e,a){return`${e}-trigger-${a}`}function E(e,a){return`${e}-content-${a}`}var q=N,P=I,S=j,M=_;const Q=q,z=l.forwardRef(({className:e,...a},t)=>c.jsx(P,{ref:t,className:p("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...a}));z.displayName=P.displayName;const H=l.forwardRef(({className:e,...a},t)=>c.jsx(S,{ref:t,className:p("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...a}));H.displayName=S.displayName;const O=l.forwardRef(({className:e,...a},t)=>c.jsx(M,{ref:t,className:p("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...a}));O.displayName=M.displayName;export{Q as T,z as a,H as b,O as c};
