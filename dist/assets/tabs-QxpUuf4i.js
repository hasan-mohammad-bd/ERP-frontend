import{$ as w,aI as T,r as a,aJ as M,_ as l,d as p,aK as R,e as v,f as A,j as V,a as F,b as P,k as m,l as g}from"./index-Bfkd3eDF.js";const _="Tabs",[j,U]=w(_,[T]),y=T(),[k,x]=j(_),S=a.forwardRef((e,t)=>{const{__scopeTabs:o,value:n,onValueChange:r,defaultValue:b,orientation:s="horizontal",dir:d,activationMode:$="automatic",...u}=e,i=V(d),[c,f]=F({prop:n,onChange:r,defaultProp:b});return a.createElement(k,{scope:o,baseId:P(),value:c,onValueChange:f,orientation:s,dir:i,activationMode:$},a.createElement(p.div,l({dir:i,"data-orientation":s},u,{ref:t})))}),D="TabsList",G=a.forwardRef((e,t)=>{const{__scopeTabs:o,loop:n=!0,...r}=e,b=x(D,o),s=y(o);return a.createElement(M,l({asChild:!0},s,{orientation:b.orientation,dir:b.dir,loop:n}),a.createElement(p.div,l({role:"tablist","aria-orientation":b.orientation},r,{ref:t})))}),K="TabsTrigger",L=a.forwardRef((e,t)=>{const{__scopeTabs:o,value:n,disabled:r=!1,...b}=e,s=x(K,o),d=y(o),$=E(s.baseId,n),u=h(s.baseId,n),i=n===s.value;return a.createElement(R,l({asChild:!0},d,{focusable:!r,active:i}),a.createElement(p.button,l({type:"button",role:"tab","aria-selected":i,"aria-controls":u,"data-state":i?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:$},b,{ref:t,onMouseDown:v(e.onMouseDown,c=>{!r&&c.button===0&&c.ctrlKey===!1?s.onValueChange(n):c.preventDefault()}),onKeyDown:v(e.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&s.onValueChange(n)}),onFocus:v(e.onFocus,()=>{const c=s.activationMode!=="manual";!i&&!r&&c&&s.onValueChange(n)})})))}),B="TabsContent",q=a.forwardRef((e,t)=>{const{__scopeTabs:o,value:n,forceMount:r,children:b,...s}=e,d=x(B,o),$=E(d.baseId,n),u=h(d.baseId,n),i=n===d.value,c=a.useRef(i);return a.useEffect(()=>{const f=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(f)},[]),a.createElement(A,{present:r||i},({present:f})=>a.createElement(p.div,l({"data-state":i?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":$,hidden:!f,id:u,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:c.current?"0s":void 0}}),f&&b))});function E(e,t){return`${e}-trigger-${t}`}function h(e,t){return`${e}-content-${t}`}const z=S,C=G,I=L,N=q,W=z,J=a.forwardRef(({className:e,...t},o)=>m.jsx(C,{ref:o,className:g("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));J.displayName=C.displayName;const O=a.forwardRef(({className:e,...t},o)=>m.jsx(I,{ref:o,className:g("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));O.displayName=I.displayName;const H=a.forwardRef(({className:e,...t},o)=>m.jsx(N,{ref:o,className:g("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));H.displayName=N.displayName;export{W as T,J as a,O as b,H as c};
