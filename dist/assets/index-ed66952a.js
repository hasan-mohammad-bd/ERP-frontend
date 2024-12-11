import{bm as i,a,W as t,bb as b,bc as v,bd as g,be as l,bf as f,bg as n,cc as u,cx as N,r as h,au as T,aJ as _,bl as L,aL as P,cy as E}from"./index-5e0f2197.js";import{E as S}from"./employee-filters-34d44db9.js";import"./index-96eec5cd.js";import"./index-e795360c.js";import"./index-3df121f9.js";const U=i.injectEndpoints({endpoints:e=>({getLeaveUsage:e.query({query:s=>`leave-reports/usages?${s}`,providesTags:["leave-usage"]})}),overrideExisting:!1}),{useGetLeaveUsageQuery:F}=U,C=({tableData:e})=>a.jsxs(t,{children:[" ",a.jsxs(b,{className:"",children:[a.jsx(v,{children:a.jsxs(g,{children:[a.jsx(l,{children:"Employee Id"}),a.jsx(l,{children:"Employee Name"}),a.jsx(l,{children:"Leave Type"}),a.jsx(l,{children:"Leave Date"}),a.jsx(l,{children:"Total Days Taken"})]})}),a.jsx(f,{className:"",children:e&&e.map(s=>{var c,o,d,x;return a.jsxs(g,{className:"",children:[a.jsx(n,{className:"",children:(c=s==null?void 0:s.employee)==null?void 0:c.employee_unique_id}),a.jsxs(n,{className:"",children:[(o=s==null?void 0:s.employee)==null?void 0:o.first_name," ",(d=s==null?void 0:s.employee)==null?void 0:d.last_name]}),a.jsx(n,{children:(x=s==null?void 0:s.leave_type)==null?void 0:x.name}),a.jsxs(n,{children:[u(s==null?void 0:s.start_date_time)," - ",u(s==null?void 0:s.end_date_time)]}),a.jsxs(n,{children:[s==null?void 0:s.duration_day," ",(s==null?void 0:s.duration_day)>1?"days":"day",(s==null?void 0:s.duration_hour)>0?` (${s==null?void 0:s.duration_hour} hours)`:""]})]},s==null?void 0:s.id)})}),a.jsx(N,{})]})]}),H=()=>{const[e,s]=h.useState(1),[c,o]=h.useState(10),[d,x]=h.useState(""),{data:r,isLoading:y}=F(`per_page=${c}&page=${e}&${d}`),p=(r==null?void 0:r.data)||[],j=r==null?void 0:r.meta;return y?a.jsx(T,{}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"mb-5 space-y-5",children:[a.jsx(_,{title:"Leave Usages",description:"Manage employees for you business"}),a.jsx(S,{setFilterParams:x})]}),a.jsxs(t,{children:[a.jsxs(L,{className:"space-y-4",fileName:"leave-usages-report",children:[a.jsx("div",{className:"flex-1 space-y-4 my-4",children:a.jsxs("div",{className:"text-center  ",children:[a.jsx("h2",{children:"Akaar IT"}),a.jsx("h3",{className:"text-xl",children:"Leave Usages"})]})}),a.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[a.jsx(P,{}),p?a.jsx(C,{tableData:p}):null]})]}),j&&a.jsx(E,{className:"px-4 pb-4",meta:j,dataCount:p.length,onPageChange:s,onPageSizeChange:o})]})]})};export{H as default};
