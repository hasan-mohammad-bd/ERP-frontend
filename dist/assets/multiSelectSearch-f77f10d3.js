import{r as n,aN as ue,a as u,b as g,aO as I,aP as ne,aQ as re,aR as H,aS as fe,aT as ie,aU as ae}from"./index-7fe2e31f.js";function de(i,s){const[a,v]=n.useState(i);return n.useEffect(()=>{const o=setTimeout(()=>v(i),s||500);return()=>{clearTimeout(o)}},[i,s]),a}function T(i,s){if(i.length===0)return{};if(!s)return{"":i};const a={};return i.forEach(v=>{const o=v[s]||"";a[o]||(a[o]=[]),a[o].push(v)}),a}function ce(i,s){const a=JSON.parse(JSON.stringify(i));for(const[v,o]of Object.entries(a))a[v]=o.filter(J=>!s.find(d=>d.value===J.value));return a}function oe(i,s){for(const[,a]of Object.entries(i))if(a.some(v=>s.find(o=>o.value===v.value)))return!0;return!1}const Q=n.forwardRef(({className:i,...s},a)=>ue(o=>o.filtered.count===0)?u.jsx("div",{ref:a,className:g("py-6 text-center text-sm",i),"cmdk-empty":"",role:"presentation",...s}):null);Q.displayName="CommandEmpty";const q=n.forwardRef(({value:i,onChange:s,placeholder:a,defaultOptions:v=[],options:o,delay:J,onSearch:d,onSearchSync:y,loadingIndicator:C,emptyIndicator:V,maxSelected:A=Number.MAX_SAFE_INTEGER,onMaxSelected:E,hidePlaceholderWhenSelected:X,disabled:h,groupBy:j,className:Y,badgeClassName:Z,selectFirstItem:W=!0,creatable:O=!1,triggerSearchOnFocus:L=!1,commandProps:r,inputProps:f,hideClearAllButton:B=!1},S)=>{const x=n.useRef(null),[N,K]=n.useState(!1),[p,_]=n.useState(!1),[$,z]=n.useState(!1),G=n.useRef(null),[l,D]=n.useState(i||[]),[m,M]=n.useState(T(v,j)),[b,U]=n.useState(""),w=de(b,J||500);n.useImperativeHandle(S,()=>({selectedValue:[...l],input:x.current,focus:()=>{var e;return(e=x.current)==null?void 0:e.focus()}}),[l]);const k=e=>{G.current&&!G.current.contains(e.target)&&x.current&&!x.current.contains(e.target)&&K(!1)},F=n.useCallback(e=>{const t=l.filter(c=>c.value!==e.value);D(t),s==null||s(t)},[s,l]),P=n.useCallback(e=>{const t=x.current;t&&((e.key==="Delete"||e.key==="Backspace")&&t.value===""&&l.length>0&&(l[l.length-1].fixed||F(l[l.length-1])),e.key==="Escape"&&t.blur())},[F,l]);n.useEffect(()=>(N?(document.addEventListener("mousedown",k),document.addEventListener("touchend",k)):(document.removeEventListener("mousedown",k),document.removeEventListener("touchend",k)),()=>{document.removeEventListener("mousedown",k),document.removeEventListener("touchend",k)}),[N]),n.useEffect(()=>{i&&D(i)},[i]),n.useEffect(()=>{if(!o||d)return;const e=T(o||[],j);JSON.stringify(e)!==JSON.stringify(m)&&M(e)},[v,o,j,d,m]),n.useEffect(()=>{const e=()=>{const c=y==null?void 0:y(w);M(T(c||[],j))};(async()=>{!y||!N||(L&&e(),w&&e())})()},[w,j,N,L]),n.useEffect(()=>{const e=async()=>{z(!0);const c=await(d==null?void 0:d(w));M(T(c||[],j)),z(!1)};(async()=>{!d||!N||(L&&await e(),w&&await e())})()},[w,j,N,L]);const ee=()=>{if(!O||oe(m,[{value:b,label:b}])||l.find(t=>t.value===b))return;const e=u.jsx(I,{value:b,className:"cursor-pointer",onMouseDown:t=>{t.preventDefault(),t.stopPropagation()},onSelect:t=>{if(l.length>=A){E==null||E(l.length);return}U("");const c=[...l,{value:t,label:t}];D(c),s==null||s(c)},children:`Create "${b}"`});if(!d&&b.length>0||d&&w.length>0&&!$)return e},te=n.useCallback(()=>{if(V)return d&&!O&&Object.keys(m).length===0?u.jsx(I,{value:"-",disabled:!0,children:V}):u.jsx(Q,{children:V})},[O,V,d,m]),le=n.useMemo(()=>ce(m,l),[m,l]),se=n.useCallback(()=>{if(r!=null&&r.filter)return r.filter;if(O)return(e,t)=>e.toLowerCase().includes(t.toLowerCase())?1:-1},[O,r==null?void 0:r.filter]);return u.jsxs(ne,{ref:G,...r,onKeyDown:e=>{var t;P(e),(t=r==null?void 0:r.onKeyDown)==null||t.call(r,e)},className:g("h-auto overflow-visible bg-transparent",r==null?void 0:r.className),shouldFilter:(r==null?void 0:r.shouldFilter)!==void 0?r.shouldFilter:!d,filter:se(),children:[u.jsx("div",{className:g("min-h-10 rounded-md border border-input text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",{"px-3 py-2":l.length!==0,"cursor-text":!h&&l.length!==0},Y),onClick:()=>{var e;h||(e=x.current)==null||e.focus()},children:u.jsxs("div",{className:"relative flex flex-wrap gap-1",children:[l.map(e=>u.jsxs(re,{className:g("data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground","data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground",Z),"data-fixed":e.fixed,"data-disabled":h||void 0,children:[e.label,u.jsx("button",{className:g("ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2",(h||e.fixed)&&"hidden"),onKeyDown:t=>{t.key==="Enter"&&F(e)},onMouseDown:t=>{t.preventDefault(),t.stopPropagation()},onClick:()=>F(e),children:u.jsx(H,{className:"h-3 w-3 text-muted-foreground hover:text-foreground"})})]},e.value)),u.jsx(fe.Input,{...f,ref:x,value:b,disabled:h,onValueChange:e=>{var t;U(e),(t=f==null?void 0:f.onValueChange)==null||t.call(f,e)},onBlur:e=>{var t;p||K(!1),(t=f==null?void 0:f.onBlur)==null||t.call(f,e)},onFocus:e=>{var t;K(!0),L&&(d==null||d(w)),(t=f==null?void 0:f.onFocus)==null||t.call(f,e)},placeholder:X&&l.length!==0?"":a,className:g("flex-1 bg-transparent outline-none placeholder:text-muted-foreground",{"w-full":X,"px-3 py-2":l.length===0,"ml-1":l.length!==0},f==null?void 0:f.className)}),u.jsx("button",{type:"button",onClick:()=>{D(l.filter(e=>e.fixed)),s==null||s(l.filter(e=>e.fixed))},className:g("absolute right-0 h-6 w-6 p-0",(B||h||l.length<1||l.filter(e=>e.fixed).length===l.length)&&"hidden"),children:u.jsx(H,{})})]})}),u.jsx("div",{className:"relative",children:N&&u.jsx(ie,{className:"absolute top-1 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in",onMouseLeave:()=>{_(!1)},onMouseEnter:()=>{_(!0)},onMouseUp:()=>{var e;(e=x.current)==null||e.focus()},children:$?u.jsx(u.Fragment,{children:C}):u.jsxs(u.Fragment,{children:[te(),ee(),!W&&u.jsx(I,{value:"-",className:"hidden"}),Object.entries(le).map(([e,t])=>u.jsx(ae,{heading:e,className:"h-full overflow-auto",children:u.jsx(u.Fragment,{children:t.map(c=>u.jsx(I,{value:c.value,disabled:c.disable,onMouseDown:R=>{R.preventDefault(),R.stopPropagation()},onSelect:()=>{if(l.length>=A){E==null||E(l.length);return}U("");const R=[...l,c];D(R),s==null||s(R)},className:g("cursor-pointer",c.disable&&"cursor-default text-muted-foreground"),children:c.label},c.value))})},e))]})})})]})});q.displayName="MultipleSelector";const xe=q;export{xe as M};
