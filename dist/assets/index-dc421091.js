import{a,W as p,bb as N,bc as m,bd as t,be as _,bf as f,bg as n,R as v,cl as P,r as i,au as S,aJ as T,bl as L,cm as k}from"./index-f6b2a986.js";import{E}from"./employee-filters-ad105a2b.js";import{a as F}from"./leave-summay-b8843fec.js";import"./index-02949c67.js";import"./index-b4c06ad3.js";import"./index-9d54d7c6.js";import"./index-d00282fc.js";import"./index-2f751d7b.js";import"./index-37342d41.js";const $=({tableData:c,leaveTypeSummary:r})=>a.jsxs(p,{children:[" ",a.jsxs(N,{className:"",children:[a.jsx(m,{children:a.jsxs(t,{children:[a.jsx(_,{children:"Employee Id"}),a.jsx(_,{children:"Employee Name"}),r==null?void 0:r.map(s=>a.jsxs(_,{children:[s.leave_type_name," Taken"]},s==null?void 0:s.leave_type_id)),a.jsx(_,{children:"Total Leave Taken"})]})}),a.jsxs(f,{className:"",children:[c&&c.map(s=>{var h,x,u,l,j;return a.jsxs(t,{className:"",children:[a.jsx(n,{className:"",children:s==null?void 0:s.employee_unique_id}),a.jsxs(n,{className:"",children:[s==null?void 0:s.first_name," ",s==null?void 0:s.last_name]}),(h=s==null?void 0:s.leave_types)==null?void 0:h.map(e=>{var o,d,g,b;return a.jsx(v.Fragment,{children:a.jsxs(n,{className:"",children:[(o=e==null?void 0:e.used)==null?void 0:o.total_days," ",((d=e==null?void 0:e.used)==null?void 0:d.total_days)>1?"days":"day",((g=e==null?void 0:e.used)==null?void 0:g.total_hours)>0?` (${(b=e==null?void 0:e.used)==null?void 0:b.total_hours} hours)`:""]})},e==null?void 0:e.id)}),a.jsxs(n,{className:"",children:[(x=s==null?void 0:s.leave_taken)==null?void 0:x.total_days," ",((u=s==null?void 0:s.leave_taken)==null?void 0:u.total_days)>1?"days":"day",((l=s==null?void 0:s.leave_taken)==null?void 0:l.total_hours)>0?` (${(j=s==null?void 0:s.leave_taken)==null?void 0:j.total_hours} hours)`:""]})]},s.id)}),a.jsxs(t,{children:[a.jsx(n,{colSpan:2,children:"Total"}),r&&r.map(s=>a.jsxs(n,{className:"",children:[s.total_days," ",s.total_days>1?"days":"day",s.total_hours>0?` (${s.total_hours} hours)`:""]},s.leave_type_id))]})]}),a.jsx(P,{})]})]}),A=()=>{const[c,r]=i.useState(1),[s,h]=i.useState(10),[x,u]=i.useState(""),{data:l,isLoading:j}=F(`per_page=${s}&page=${c}&${x}`),e=(l==null?void 0:l.data)||[],o=l==null?void 0:l.leaves_type_summary,d=l==null?void 0:l.meta;return j?a.jsx(S,{}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-5 space-y-5",children:[a.jsx(T,{title:"Leave Summary",description:"Manage employees for you business"}),a.jsx(E,{setFilterParams:u})]}),a.jsxs(p,{children:[a.jsxs(L,{className:"space-y-4",fileName:"leave-summary-report",children:[a.jsx("div",{className:"flex-1 space-y-4 my-4",children:a.jsxs("div",{className:"text-center  ",children:[a.jsx("h2",{children:"Akaar IT"}),a.jsx("h3",{className:"text-xl",children:"Leave Summary"})]})}),e&&o?a.jsx($,{tableData:e,leaveTypeSummary:o}):null]}),d&&a.jsx(k,{className:"print:hidden hide-in-pdf px-4 pb-4",meta:d,dataCount:e.length,onPageChange:r,onPageSizeChange:h})]})]})};export{A as default};
