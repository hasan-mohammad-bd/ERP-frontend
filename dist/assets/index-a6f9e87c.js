import{a,N,b0 as f,b1 as p,b2 as t,b3 as _,b4 as m,b5 as n,R as v,cf as P,r as i,am as S,aB as T,ba as L,cg as k}from"./index-8528eb54.js";import{E}from"./employee-filters-771717b6.js";import{a as F}from"./leave-summay-c372813c.js";import"./index-ebe02b0f.js";import"./index-cc045189.js";import"./index-6313da58.js";const $=({tableData:c,leaveTypeSummary:r})=>a.jsxs(N,{children:[" ",a.jsxs(f,{className:"",children:[a.jsx(p,{children:a.jsxs(t,{children:[a.jsx(_,{children:"Employee Id"}),a.jsx(_,{children:"Employee Name"}),r==null?void 0:r.map(s=>a.jsxs(_,{children:[s.leave_type_name," Taken"]},s==null?void 0:s.leave_type_id)),a.jsx(_,{children:"Total Leave Taken"})]})}),a.jsxs(m,{className:"",children:[c&&c.map(s=>{var h,x,j,l,u;return a.jsxs(t,{className:"",children:[a.jsx(n,{className:"",children:s==null?void 0:s.employee_unique_id}),a.jsxs(n,{className:"",children:[s==null?void 0:s.first_name," ",s==null?void 0:s.last_name]}),(h=s==null?void 0:s.leave_types)==null?void 0:h.map(e=>{var o,d,g,b;return a.jsx(v.Fragment,{children:a.jsxs(n,{className:"",children:[(o=e==null?void 0:e.used)==null?void 0:o.total_days," ",((d=e==null?void 0:e.used)==null?void 0:d.total_days)>1?"days":"day",((g=e==null?void 0:e.used)==null?void 0:g.total_hours)>0?` (${(b=e==null?void 0:e.used)==null?void 0:b.total_hours} hours)`:""]})},e==null?void 0:e.id)}),a.jsxs(n,{className:"",children:[(x=s==null?void 0:s.leave_taken)==null?void 0:x.total_days," ",((j=s==null?void 0:s.leave_taken)==null?void 0:j.total_days)>1?"days":"day",((l=s==null?void 0:s.leave_taken)==null?void 0:l.total_hours)>0?` (${(u=s==null?void 0:s.leave_taken)==null?void 0:u.total_hours} hours)`:""]})]},s.id)}),a.jsxs(t,{children:[a.jsx(n,{colSpan:2,children:"Total"}),r&&r.map(s=>a.jsxs(n,{className:"",children:[s.total_days," ",s.total_days>1?"days":"day",s.total_hours>0?` (${s.total_hours} hours)`:""]},s.leave_type_id))]})]}),a.jsx(P,{})]})]}),B=()=>{const[c,r]=i.useState(1),[s,h]=i.useState(10),[x,j]=i.useState(""),{data:l,isLoading:u}=F(`per_page=${s}&page=${c}&${x}`),e=(l==null?void 0:l.data)||[],o=l==null?void 0:l.leaves_type_summary,d=l==null?void 0:l.meta;return u?a.jsx(S,{}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-5 space-y-5",children:[a.jsx(T,{title:"Leave Summary",description:"Manage employees for you business"}),a.jsx(E,{setFilterParams:j})]}),a.jsxs(N,{children:[a.jsxs(L,{className:"space-y-4",fileName:"leave-summary-report",children:[a.jsx("div",{className:"flex-1 space-y-4 my-4",children:a.jsxs("div",{className:"text-center  ",children:[a.jsx("h2",{children:"Akaar IT"}),a.jsx("h3",{className:"text-xl",children:"Leave Summary"})]})}),e&&o?a.jsx($,{tableData:e,leaveTypeSummary:o}):null]}),d&&a.jsx(k,{className:"print:hidden hide-in-pdf px-4 pb-4",meta:d,dataCount:e.length,onPageChange:r,onPageSizeChange:h})]})]})};export{B as default};
