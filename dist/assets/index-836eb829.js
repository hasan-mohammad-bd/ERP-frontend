import{ba as m,a as e,N as h,a$ as b,b0 as f,b1 as p,b2 as n,b3 as N,b4 as r,ce as S,r as x,b7 as _,M as u,bO as v,a8 as g,am as T,b9 as A,cf as D}from"./index-6c7a6430.js";const P=m.injectEndpoints({endpoints:a=>({getAttendanceSummary:a.query({query:s=>`attendance-summary-report?${s}`,providesTags:["attendance-summary-report"]})}),overrideExisting:!1}),{useGetAttendanceSummaryQuery:C}=P,M=({tableData:a})=>(console.log(a),e.jsxs(h,{children:[" ",e.jsxs(b,{className:"",children:[e.jsx(f,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Employee Id"}),e.jsx(n,{children:"Employee Name"}),e.jsx(n,{children:"Late"}),e.jsx(n,{children:"Extreme Late"}),e.jsx(n,{children:"On Time"}),e.jsx(n,{children:"Working Days"}),e.jsx(n,{children:"Present Days"}),e.jsx(n,{children:"Absent Days"}),e.jsx(n,{children:"Total Days"}),e.jsx(n,{children:"Total Hours"})]})}),e.jsx(N,{className:"",children:a&&a.map(s=>{var c,d;return e.jsxs(p,{className:"",children:[e.jsx(r,{className:"",children:s==null?void 0:s.employee_id}),e.jsx(r,{className:"",children:s==null?void 0:s.employee_name}),e.jsx(r,{children:s.late}),e.jsx(r,{children:s==null?void 0:s.extreme_late}),e.jsx(r,{children:s==null?void 0:s.on_time}),e.jsx(r,{children:s==null?void 0:s.working_days}),e.jsx(r,{children:s==null?void 0:s.present_days}),e.jsx(r,{children:s==null?void 0:s.absent_days}),e.jsx(r,{children:(c=s==null?void 0:s.leaves)==null?void 0:c.total_days}),e.jsx(r,{children:(d=s==null?void 0:s.leaves)==null?void 0:d.total_hours})]},s==null?void 0:s.employee_id)})}),e.jsx(S,{})]})]}));function $({setFilterParams:a}){const[s,c]=x.useState(new Date),d="desc",i=25,j=t=>{c(t)},l=()=>{if(s){const o=`date=${g(s,"yyyy-MM")}&sort_by=${d}&per_page=${i}`;a(o)}},y=()=>{a("")};return e.jsxs(h,{className:"p-5",children:[e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-5",children:e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(_,{selected:s,onChange:j,dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"})]})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-4",children:[e.jsx(u,{variant:"outline",size:"sm",onClick:y,children:"Reset Filters"}),e.jsxs(u,{variant:"default",size:"sm",onClick:l,children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),"Apply Filters"]})]})]})}const k=()=>{const[a,s]=x.useState(1),[c,d]=x.useState(10),[i,j]=x.useState(`date=${g(new Date,"yyyy-MM")}`),{data:l,isLoading:y}=C(`per_page=${c}&page=${a}&${i}`),t=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return y?e.jsx(T,{}):e.jsxs("div",{children:[e.jsx("div",{className:"py-3",children:e.jsx(h,{children:e.jsx($,{setFilterParams:j})})}),e.jsx("div",{children:e.jsxs(h,{children:[e.jsxs(A,{className:"space-y-4",fileName:"attendance-summary-report",children:[e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{children:"Akaar IT"}),e.jsx("h3",{className:"text-xl",children:"Attendance Summary"})]})}),t?e.jsx(M,{tableData:t}):null]}),o&&e.jsx(D,{className:"px-4 pb-4",meta:o,dataCount:t.length,onPageChange:s,onPageSizeChange:d})]})})]})};export{k as default};
