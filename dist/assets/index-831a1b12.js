import{bo as N,a as s,X as f,bc as T,bd as E,be as _,bf as o,bg as L,bh as c,cp as P,r as y,av as k,aK as B,bn as S,aM as w,cq as $}from"./index-1d5a1686.js";import{E as t}from"./employee-filters-f6acb172.js";import"./index-60520695.js";import"./index-de0a6b69.js";import"./index-55778390.js";import"./index-6b5f775d.js";import"./index-4e0711e5.js";import"./index-4389fa1e.js";const C=N.injectEndpoints({endpoints:e=>({getLeaveBalance:e.query({query:a=>`leave-reports/balance?${a}`,providesTags:["leave-balance"]})}),overrideExisting:!1}),{useGetLeaveBalanceQuery:D}=C,F=({tableData:e})=>s.jsxs(f,{children:[" ",s.jsxs(T,{className:"",children:[s.jsx(E,{children:s.jsxs(_,{children:[s.jsx(o,{children:"Employee Id"}),s.jsx(o,{children:"Employee Name"}),s.jsx(o,{children:"Total Entitlement (Days)"}),s.jsx(o,{children:"Leave Taken (Days)"}),s.jsx(o,{children:"Remaining Balance (Days)"})]})}),s.jsx(L,{className:"",children:e&&e.map(a=>{var d,x,p,h,l,j,n,r,u,b,g,v;return s.jsxs(_,{className:"",children:[s.jsx(c,{className:"",children:a==null?void 0:a.employee_unique_id}),s.jsxs(c,{className:"",children:[a==null?void 0:a.first_name," ",a==null?void 0:a.last_name]}),s.jsxs(c,{children:[a!=null&&a.allowed?a==null?void 0:a.allowed:""," "," ",(a==null?void 0:a.allowed)>1?"days":(a==null?void 0:a.allowed)<1?"":"day"]}),s.jsxs(c,{children:[(d=a==null?void 0:a.taken)!=null&&d.total_days?(x=a==null?void 0:a.taken)==null?void 0:x.total_days:""," ",((p=a==null?void 0:a.taken)==null?void 0:p.total_days)>1?"days":((h=a==null?void 0:a.taken)==null?void 0:h.total_days)<1?"":"day",((l=a==null?void 0:a.taken)==null?void 0:l.total_hours)>0?` (${(j=a==null?void 0:a.taken)==null?void 0:j.total_hours} hours)`:""]}),s.jsxs(c,{children:[(n=a==null?void 0:a.available)!=null&&n.total_days?(r=a==null?void 0:a.available)==null?void 0:r.total_days:""," ",((u=a==null?void 0:a.available)==null?void 0:u.total_days)>1?"days":((b=a==null?void 0:a.available)==null?void 0:b.total_days)<1?"":"day",((g=a==null?void 0:a.available)==null?void 0:g.total_hours)>0?` (${(v=a==null?void 0:a.available)==null?void 0:v.total_hours} hours)`:""]})]},a==null?void 0:a.id)})}),s.jsx(P,{})]})]}),K=()=>{const[e,a]=y.useState(1),[d,x]=y.useState(10),[p,h]=y.useState(""),{data:l,isLoading:j}=D(`per_page=${d}&page=${e}&${p}`),n=(l==null?void 0:l.data)||[],r=l==null?void 0:l.meta;return j?s.jsx(k,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mb-5 space-y-5",children:[s.jsx(B,{title:"Leave Balance",description:"Manage employees for you business"}),s.jsx(t,{setFilterParams:h})]}),s.jsxs(f,{children:[s.jsxs(S,{className:"space-y-4",fileName:"leave-usages-report",children:[s.jsx("div",{className:"flex-1 space-y-4 my-4",children:s.jsxs("div",{className:"text-center  ",children:[s.jsx("h2",{children:"Akaar IT"}),s.jsx("h3",{className:"text-xl",children:"Leave Balance Report"})]})}),s.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[s.jsx(w,{}),n?s.jsx(F,{tableData:n}):null]})]}),r&&s.jsx($,{className:"px-4 pb-4",meta:r,dataCount:n.length,onPageChange:a,onPageSizeChange:x})]})]})};export{K as default};
