import{r as s,a as l,P as v,b as m}from"./index-3f8f5d35.js";var f="Separator",n="horizontal",N=["horizontal","vertical"],p=s.forwardRef((r,a)=>{const{decorative:t,orientation:o=n,...i}=r,e=u(o)?o:n,d=t?{role:"none"}:{"aria-orientation":e==="vertical"?e:void 0,role:"separator"};return l.jsx(v.div,{"data-orientation":e,...d,...i,ref:a})});p.displayName=f;function u(r){return N.includes(r)}var c=p;const x=s.forwardRef(({className:r,orientation:a="horizontal",decorative:t=!0,...o},i)=>l.jsx(c,{ref:i,decorative:t,orientation:a,className:m("shrink-0 bg-border",a==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r),...o}));x.displayName=c.displayName;export{x as S};
