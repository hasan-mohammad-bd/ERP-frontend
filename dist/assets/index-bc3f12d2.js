import{bp as b,a,Y as i,bd as f,be as N,bf as j,bg as n,bh as _,bi as l,cf as u,cu as T,t as L,r as h,aw as P,aL as E,bo as S,aN as U,cv as F}from"./index-fe9eec72.js";import{E as C}from"./employee-filters-853fffb9.js";import"./index-1504e677.js";import"./index-feb786ff.js";import"./index-e791ecd2.js";import"./index-49124ef9.js";const D=b.injectEndpoints({endpoints:e=>({getLeaveUsage:e.query({query:s=>`leave-reports/usages?${s}`,providesTags:["leave-usage"]})}),overrideExisting:!1}),{useGetLeaveUsageQuery:$}=D,z=({tableData:e})=>a.jsxs(i,{children:[" ",a.jsxs(f,{className:"",children:[a.jsx(N,{children:a.jsxs(j,{children:[a.jsx(n,{children:"Employee Id"}),a.jsx(n,{children:"Employee Name"}),a.jsx(n,{children:"Leave Type"}),a.jsx(n,{children:"Leave Date"}),a.jsx(n,{children:"Total Days Taken"})]})}),a.jsx(_,{className:"",children:e&&e.map(s=>{var o,c,d,p;return a.jsxs(j,{className:"",children:[a.jsx(l,{className:"",children:(o=s==null?void 0:s.employee)==null?void 0:o.employee_unique_id}),a.jsxs(l,{className:"",children:[(c=s==null?void 0:s.employee)==null?void 0:c.first_name," ",(d=s==null?void 0:s.employee)==null?void 0:d.last_name]}),a.jsx(l,{children:(p=s==null?void 0:s.leave_type)==null?void 0:p.name}),a.jsxs(l,{children:[u(s==null?void 0:s.start_date_time)," - ",u(s==null?void 0:s.end_date_time)]}),a.jsxs(l,{children:[s==null?void 0:s.duration_day," ",(s==null?void 0:s.duration_day)>1?"days":"day",(s==null?void 0:s.duration_hour)>0?` (${s==null?void 0:s.duration_hour} hours)`:""]})]},s==null?void 0:s.id)})}),a.jsx(T,{})]})]}),k=()=>{var g;const{user:e}=L(),[s,o]=h.useState(1),[c,d]=h.useState(10),[p,y]=h.useState(""),{data:r,isLoading:v}=$(`per_page=${c}&page=${s}&${p}`),x=(r==null?void 0:r.data)||[],t=r==null?void 0:r.meta;return v?a.jsx(P,{}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-5 space-y-5",children:[a.jsx(E,{title:"Leave Usages",description:"Manage employees for you business"}),a.jsx(C,{setFilterParams:y})]}),a.jsxs(i,{children:[a.jsxs(S,{className:"space-y-4",fileName:"leave-usages-report",children:[a.jsx("div",{className:"flex-1 space-y-4 my-4",children:a.jsxs("div",{className:"text-center  ",children:[a.jsx("h2",{children:(g=e==null?void 0:e.organization)==null?void 0:g.name}),a.jsx("h3",{className:"text-xl",children:"Leave Usages"})]})}),a.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[a.jsx(U,{}),x?a.jsx(z,{tableData:x}):null]})]}),t&&a.jsx(F,{className:"px-4 pb-4",meta:t,dataCount:x.length,onPageChange:o,onPageSizeChange:d})]})]})};export{k as default};
