import{bg as b,a as s,U as N,aY as p,aZ as T,a_ as _,a$ as u,b0 as f,b1 as o,R as S,c_ as L,r as v,a2 as $,c$ as k,d0 as P}from"./index-296059ef.js";const y=b.injectEndpoints({endpoints:n=>({getLeaveSummary:n.query({query:r=>`leave-reports/summary?${r}`,providesTags:["leave-summary"]})}),overrideExisting:!1}),{useGetLeaveSummaryQuery:E}=y,C=({tableData:n,leaveTypeSummary:r})=>s.jsxs(N,{children:[" ",s.jsxs(p,{className:"",children:[s.jsx(T,{children:s.jsxs(_,{children:[s.jsx(u,{children:"Employee Id"}),s.jsx(u,{children:"Employee Name"}),r==null?void 0:r.map(a=>s.jsxs(u,{children:[a.leave_type_name," Taken"]},a==null?void 0:a.leave_type_id)),s.jsx(u,{children:"Total Leave Taken"})]})}),s.jsxs(f,{className:"",children:[n&&n.map(a=>{var h,l,x,d,c;return s.jsxs(_,{className:"",children:[s.jsx(o,{className:"",children:a==null?void 0:a.employee_unique_id}),s.jsxs(o,{className:"",children:[a==null?void 0:a.first_name," ",a==null?void 0:a.last_name]}),(h=a==null?void 0:a.leave_types)==null?void 0:h.map(e=>{var j,g,i,t;return s.jsx(S.Fragment,{children:s.jsxs(o,{className:"",children:[(j=e==null?void 0:e.used)==null?void 0:j.total_days," ",((g=e==null?void 0:e.used)==null?void 0:g.total_days)>1?"days":"day",((i=e==null?void 0:e.used)==null?void 0:i.total_hours)>0?` (${(t=e==null?void 0:e.used)==null?void 0:t.total_hours} hours)`:""]})},e==null?void 0:e.id)}),s.jsxs(o,{className:"",children:[(l=a==null?void 0:a.leave_taken)==null?void 0:l.total_days," ",((x=a==null?void 0:a.leave_taken)==null?void 0:x.total_days)>1?"days":"day",((d=a==null?void 0:a.leave_taken)==null?void 0:d.total_hours)>0?` (${(c=a==null?void 0:a.leave_taken)==null?void 0:c.total_hours} hours)`:""]})]},a.id)}),s.jsxs(_,{children:[s.jsx(o,{colSpan:2,children:"Total"}),r&&r.map(a=>s.jsxs(o,{className:"",children:[a.total_days," ",a.total_days>1?"days":"day",a.total_hours>0?` (${a.total_hours} hours)`:""]},a.leave_type_id))]})]}),s.jsx(L,{})]})]}),F=()=>{const[n,r]=v.useState(1),[a,h]=v.useState(10),{data:l,isLoading:x}=E(`per_page=${a}&page=${n}`),d=(l==null?void 0:l.data)||[],c=l==null?void 0:l.leaves_type_summary,e=l==null?void 0:l.meta;return x?s.jsx($,{}):s.jsx(s.Fragment,{children:s.jsxs(N,{children:[s.jsxs(k,{className:"space-y-4",fileName:"leave-summary-report",children:[s.jsx("div",{className:"flex-1 space-y-4 my-4",children:s.jsxs("div",{className:"text-center  ",children:[s.jsx("h2",{children:"Akaar IT"}),s.jsx("h3",{className:"text-xl",children:"Leave Summary"})]})}),d&&c?s.jsx(C,{tableData:d,leaveTypeSummary:c}):null]}),e&&s.jsx(P,{className:"print:hidden hide-in-pdf px-4 pb-4",meta:e,dataCount:d.length,onPageChange:r,onPageSizeChange:h})]})})};export{F as default};
