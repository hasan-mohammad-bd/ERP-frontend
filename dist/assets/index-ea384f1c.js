<<<<<<<< HEAD:dist/assets/index-ea384f1c.js
import{bi as i,a,U as u,b7 as b,b8 as v,b9 as g,ba as l,bb as f,bc as n,cg as t,cB as N,r as h,ar as T,aG as _,bh as L,aI as P,cC as E}from"./index-8b9ca140.js";import{E as U}from"./employee-filters-187c82f6.js";import"./index-2d96ae4f.js";import"./index-05cdc30a.js";import"./index-38eaebc3.js";const S=i.injectEndpoints({endpoints:e=>({getLeaveUsage:e.query({query:s=>`leave-reports/usages?${s}`,providesTags:["leave-usage"]})}),overrideExisting:!1}),{useGetLeaveUsageQuery:C}=S,F=({tableData:e})=>a.jsxs(u,{children:[" ",a.jsxs(b,{className:"",children:[a.jsx(v,{children:a.jsxs(g,{children:[a.jsx(l,{children:"Employee Id"}),a.jsx(l,{children:"Employee Name"}),a.jsx(l,{children:"Leave Type"}),a.jsx(l,{children:"Leave Date"}),a.jsx(l,{children:"Total Days Taken"})]})}),a.jsx(f,{className:"",children:e&&e.map(s=>{var o,c,d,x;return a.jsxs(g,{className:"",children:[a.jsx(n,{className:"",children:(o=s==null?void 0:s.employee)==null?void 0:o.employee_unique_id}),a.jsxs(n,{className:"",children:[(c=s==null?void 0:s.employee)==null?void 0:c.first_name," ",(d=s==null?void 0:s.employee)==null?void 0:d.last_name]}),a.jsx(n,{children:(x=s==null?void 0:s.leave_type)==null?void 0:x.name}),a.jsxs(n,{children:[t(s==null?void 0:s.start_date_time)," - ",t(s==null?void 0:s.end_date_time)]}),a.jsxs(n,{children:[s==null?void 0:s.duration_day," ",(s==null?void 0:s.duration_day)>1?"days":"day",(s==null?void 0:s.duration_hour)>0?` (${s==null?void 0:s.duration_hour} hours)`:""]})]},s==null?void 0:s.id)})}),a.jsx(N,{})]})]}),A=()=>{const[e,s]=h.useState(1),[o,c]=h.useState(10),[d,x]=h.useState(""),{data:r,isLoading:y}=C(`per_page=${o}&page=${e}&${d}`),p=(r==null?void 0:r.data)||[],j=r==null?void 0:r.meta;return y?a.jsx(T,{}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-5 space-y-5",children:[a.jsx(_,{title:"Leave Usages",description:"Manage employees for you business"}),a.jsx(U,{setFilterParams:x})]}),a.jsxs(u,{children:[a.jsxs(L,{className:"space-y-4",fileName:"leave-usages-report",children:[a.jsx("div",{className:"flex-1 space-y-4 my-4",children:a.jsxs("div",{className:"text-center  ",children:[a.jsx("h2",{children:"Akaar IT"}),a.jsx("h3",{className:"text-xl",children:"Leave Usages"})]})}),a.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[a.jsx(P,{}),p?a.jsx(F,{tableData:p}):null]})]}),j&&a.jsx(E,{className:"px-4 pb-4",meta:j,dataCount:p.length,onPageChange:s,onPageSizeChange:c})]})]})};export{A as default};
========
import{bi as i,a,U as u,b7 as b,b8 as v,b9 as g,ba as l,bb as f,bc as n,c7 as t,cs as N,r as h,ar as T,aG as _,bh as L,aI as P,ct as E}from"./index-d9fd53dc.js";import{E as U}from"./employee-filters-1bba55d4.js";import"./index-bdaa45bf.js";import"./index-704f86e2.js";import"./index-216de21c.js";const S=i.injectEndpoints({endpoints:e=>({getLeaveUsage:e.query({query:s=>`leave-reports/usages?${s}`,providesTags:["leave-usage"]})}),overrideExisting:!1}),{useGetLeaveUsageQuery:F}=S,C=({tableData:e})=>a.jsxs(u,{children:[" ",a.jsxs(b,{className:"",children:[a.jsx(v,{children:a.jsxs(g,{children:[a.jsx(l,{children:"Employee Id"}),a.jsx(l,{children:"Employee Name"}),a.jsx(l,{children:"Leave Type"}),a.jsx(l,{children:"Leave Date"}),a.jsx(l,{children:"Total Days Taken"})]})}),a.jsx(f,{className:"",children:e&&e.map(s=>{var o,c,d,x;return a.jsxs(g,{className:"",children:[a.jsx(n,{className:"",children:(o=s==null?void 0:s.employee)==null?void 0:o.employee_unique_id}),a.jsxs(n,{className:"",children:[(c=s==null?void 0:s.employee)==null?void 0:c.first_name," ",(d=s==null?void 0:s.employee)==null?void 0:d.last_name]}),a.jsx(n,{children:(x=s==null?void 0:s.leave_type)==null?void 0:x.name}),a.jsxs(n,{children:[t(s==null?void 0:s.start_date_time)," - ",t(s==null?void 0:s.end_date_time)]}),a.jsxs(n,{children:[s==null?void 0:s.duration_day," ",(s==null?void 0:s.duration_day)>1?"days":"day",(s==null?void 0:s.duration_hour)>0?` (${s==null?void 0:s.duration_hour} hours)`:""]})]},s==null?void 0:s.id)})}),a.jsx(N,{})]})]}),A=()=>{const[e,s]=h.useState(1),[o,c]=h.useState(10),[d,x]=h.useState(""),{data:r,isLoading:y}=F(`per_page=${o}&page=${e}&${d}`),p=(r==null?void 0:r.data)||[],j=r==null?void 0:r.meta;return y?a.jsx(T,{}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-5 space-y-5",children:[a.jsx(_,{title:"Leave Usages",description:"Manage employees for you business"}),a.jsx(U,{setFilterParams:x})]}),a.jsxs(u,{children:[a.jsxs(L,{className:"space-y-4",fileName:"leave-usages-report",children:[a.jsx("div",{className:"flex-1 space-y-4 my-4",children:a.jsxs("div",{className:"text-center  ",children:[a.jsx("h2",{children:"Akaar IT"}),a.jsx("h3",{className:"text-xl",children:"Leave Usages"})]})}),a.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[a.jsx(P,{}),p?a.jsx(C,{tableData:p}):null]})]}),j&&a.jsx(E,{className:"px-4 pb-4",meta:j,dataCount:p.length,onPageChange:s,onPageSizeChange:c})]})]})};export{A as default};
>>>>>>>> main:dist/assets/index-45e1497a.js
