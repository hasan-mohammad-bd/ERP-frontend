<<<<<<<< HEAD:dist/assets/index-a9bc3c53.js
import{ba as m,a as e,N as c,a$ as g,b0 as f,b1 as o,b2 as a,b3 as N,b4 as r,ce as v,r as h,b7 as T,M as x,bO as _,a8 as j,am as D,b9 as S}from"./index-4b237266.js";const A=m.injectEndpoints({endpoints:n=>({getAttendanceSummary:n.query({query:s=>`attendance-summary-report?${s}`,providesTags:["attendance-summary-report"]})}),overrideExisting:!1}),{useGetAttendanceSummaryQuery:M}=A,F=({tableData:n})=>e.jsxs(c,{children:[" ",e.jsxs(g,{className:"",children:[e.jsx(f,{children:e.jsxs(o,{children:[e.jsx(a,{children:"Employee Id"}),e.jsx(a,{children:"Employee Name"}),e.jsx(a,{children:"Late"}),e.jsx(a,{children:"Extreme Late"}),e.jsx(a,{children:"On Time"}),e.jsx(a,{children:"Working Days"}),e.jsx(a,{children:"Present Days"}),e.jsx(a,{children:"Absent Days"}),e.jsx(a,{children:"Total Days"}),e.jsx(a,{children:"Total Hours"})]})}),e.jsx(N,{className:"",children:n&&n.map(s=>{var l,d;return e.jsxs(o,{className:"",children:[e.jsx(r,{className:"",children:s==null?void 0:s.employee_id}),e.jsx(r,{className:"",children:s==null?void 0:s.employee_name}),e.jsx(r,{children:s.late}),e.jsx(r,{children:s==null?void 0:s.extreme_late}),e.jsx(r,{children:s==null?void 0:s.on_time}),e.jsx(r,{children:s==null?void 0:s.working_days}),e.jsx(r,{children:s==null?void 0:s.present_days}),e.jsx(r,{children:s==null?void 0:s.absent_days}),e.jsx(r,{children:(l=s==null?void 0:s.leaves)==null?void 0:l.total_days}),e.jsx(r,{children:(d=s==null?void 0:s.leaves)==null?void 0:d.total_hours})]},s==null?void 0:s.employee_id)})}),e.jsx(v,{})]})]});function k({setFilterParams:n}){const[s,l]=h.useState(new Date),d="desc",y=25,i=t=>{l(t)},p=()=>{if(s){const b=`date=${j(s,"yyyy-MM")}&sort_by=${d}&per_page=${y}`;n(b)}},u=()=>{n("")};return e.jsxs(c,{children:[e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-5 p-5",children:e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(T,{selected:s,onChange:i,dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"})]})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-4",children:[e.jsx(x,{variant:"outline",size:"sm",onClick:u,children:"Reset Filters"}),e.jsxs(x,{variant:"default",size:"sm",onClick:p,children:[e.jsx(_,{className:"mr-2 h-4 w-4"}),"Apply Filters"]})]})]})}const E=()=>{const[n,s]=h.useState(`date=${j(new Date,"yyyy-MM")}`),{data:l,isLoading:d}=M(n);return d?e.jsx(D,{}):e.jsxs("div",{children:[e.jsx("div",{className:"py-3",children:e.jsx(c,{children:e.jsx(k,{setFilterParams:s})})}),e.jsx("div",{children:e.jsx(c,{children:e.jsxs(S,{className:"space-y-4",fileName:"attendance-summary-report",children:[e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{children:"Akaar IT"}),e.jsx("h3",{className:"text-xl",children:"Attendance Summary"})]})}),l?e.jsx(F,{tableData:l}):null]})})})]})};export{E as default};
========
import{ba as m,a as e,N as c,a$ as g,b0 as f,b1 as o,b2 as a,b3 as N,b4 as r,ce as v,r as h,b7 as T,M as x,bO as _,a8 as j,am as D,b9 as S}from"./index-945ff9a6.js";const A=m.injectEndpoints({endpoints:n=>({getAttendanceSummary:n.query({query:s=>`attendance-summary-report?${s}`,providesTags:["attendance-summary-report"]})}),overrideExisting:!1}),{useGetAttendanceSummaryQuery:M}=A,F=({tableData:n})=>e.jsxs(c,{children:[" ",e.jsxs(g,{className:"",children:[e.jsx(f,{children:e.jsxs(o,{children:[e.jsx(a,{children:"Employee Id"}),e.jsx(a,{children:"Employee Name"}),e.jsx(a,{children:"Late"}),e.jsx(a,{children:"Extreme Late"}),e.jsx(a,{children:"On Time"}),e.jsx(a,{children:"Working Days"}),e.jsx(a,{children:"Present Days"}),e.jsx(a,{children:"Absent Days"}),e.jsx(a,{children:"Total Days"}),e.jsx(a,{children:"Total Hours"})]})}),e.jsx(N,{className:"",children:n&&n.map(s=>{var l,d;return e.jsxs(o,{className:"",children:[e.jsx(r,{className:"",children:s==null?void 0:s.employee_id}),e.jsx(r,{className:"",children:s==null?void 0:s.employee_name}),e.jsx(r,{children:s.late}),e.jsx(r,{children:s==null?void 0:s.extreme_late}),e.jsx(r,{children:s==null?void 0:s.on_time}),e.jsx(r,{children:s==null?void 0:s.working_days}),e.jsx(r,{children:s==null?void 0:s.present_days}),e.jsx(r,{children:s==null?void 0:s.absent_days}),e.jsx(r,{children:(l=s==null?void 0:s.leaves)==null?void 0:l.total_days}),e.jsx(r,{children:(d=s==null?void 0:s.leaves)==null?void 0:d.total_hours})]},s==null?void 0:s.employee_id)})}),e.jsx(v,{})]})]});function k({setFilterParams:n}){const[s,l]=h.useState(new Date),d="desc",y=25,i=t=>{l(t)},p=()=>{if(s){const b=`date=${j(s,"yyyy-MM")}&sort_by=${d}&per_page=${y}`;n(b)}},u=()=>{n("")};return e.jsxs(c,{children:[e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-5 p-5",children:e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(T,{selected:s,onChange:i,dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"})]})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-4",children:[e.jsx(x,{variant:"outline",size:"sm",onClick:u,children:"Reset Filters"}),e.jsxs(x,{variant:"default",size:"sm",onClick:p,children:[e.jsx(_,{className:"mr-2 h-4 w-4"}),"Apply Filters"]})]})]})}const E=()=>{const[n,s]=h.useState(`date=${j(new Date,"yyyy-MM")}`),{data:l,isLoading:d}=M(n);return d?e.jsx(D,{}):e.jsxs("div",{children:[e.jsx("div",{className:"py-3",children:e.jsx(c,{children:e.jsx(k,{setFilterParams:s})})}),e.jsx("div",{children:e.jsx(c,{children:e.jsxs(S,{className:"space-y-4",fileName:"attendance-summary-report",children:[e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{children:"Akaar IT"}),e.jsx("h3",{className:"text-xl",children:"Attendance Summary"})]})}),l?e.jsx(F,{tableData:l}):null]})})})]})};export{E as default};
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/index-354b9483.js
