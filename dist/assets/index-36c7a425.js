<<<<<<<< HEAD:dist/assets/index-36c7a425.js
import{z as Q,B as X,a as e,am as Y,F as Z,E as d,G as t,H as y,J as i,I as h,K as x,M as p,N as v,a$ as D,b0 as ee,b1 as V,b4 as m,b3 as se,aS as ne,aT as le,aU as ce,aV as ae,aX as re,an as E,ao as de,r as M,ar as C,as as T,at as U,au as te,av as S,aw as ie,ax as oe,ay as q,az as W,R as xe,aB as me,t as he,aC as je,aD as ye}from"./index-4b237266.js";import{S as P}from"./switch-00842eec.js";import{a as fe,b as ge,c as J,d as _e,u as ue}from"./index-213dcafd.js";const A=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],I=[{label:"Full Day",value:"full_day",id:1},{label:"Half Day",value:"half_day",id:2},{label:"Weekend",value:"weekend",id:3}];function G({modalClose:a,data:s}){const[f,{isLoading:N}]=fe(),[o,{isLoading:k}]=ge(),l=Q({resolver:X(J),defaultValues:{name:(s==null?void 0:s.name)||"",in_time:(s==null?void 0:s.in_time)||"",delay_buffer_time:(s==null?void 0:s.delay_buffer_time)||"",ex_delay_buffer_time:(s==null?void 0:s.ex_delay_buffer_time)||"",break_time:(s==null?void 0:s.break_time)||0,working_hour:(s==null?void 0:s.working_hour)||0,out_time:(s==null?void 0:s.out_time)||"",ignore_overtime:(s==null?void 0:s.ignore_overtime)||0,exclude_attendance_report:(s==null?void 0:s.exclude_attendance_report)||0,discard_weekend_attendance:(s==null?void 0:s.discard_weekend_attendance)||0,days:A.map(n=>{var c,r,u,g,b,B,F,O,$,H,K,L,R,z;return{day:n,in_time:((r=(c=s==null?void 0:s.days)==null?void 0:c.find(j=>j.day===n))==null?void 0:r.in_time)||"",delay_buffer_time:((g=(u=s==null?void 0:s.days)==null?void 0:u.find(j=>j.day===n))==null?void 0:g.delay_buffer_time)||"",ex_delay_buffer_time:((B=(b=s==null?void 0:s.days)==null?void 0:b.find(j=>j.day===n))==null?void 0:B.ex_delay_buffer_time)||"",break_time:((O=(F=s==null?void 0:s.days)==null?void 0:F.find(j=>j.day===n))==null?void 0:O.break_time)||0,working_hour:((H=($=s==null?void 0:s.days)==null?void 0:$.find(j=>j.day===n))==null?void 0:H.working_hour)||0,out_time:((L=(K=s==null?void 0:s.days)==null?void 0:K.find(j=>j.day===n))==null?void 0:L.out_time)||"",working_type:((z=(R=s==null?void 0:s.days)==null?void 0:R.find(j=>j.day===n))==null?void 0:z.working_type)||"full_day"}})}}),w=()=>{const n=l.getValues(),c=Object.keys(J.shape);A.forEach((r,u)=>{c.forEach(g=>{l.setValue(`days.${u}.${g}`,n[g])})})};async function _(n){try{s?(await o({attendancePolicyId:s.id,updatedAttendancePolicy:n}).unwrap(),E.success("Policy updated successfully"),a()):(await f(n).unwrap(),E.success("Policy created successfully"),a())}catch(c){console.log(c),de(c)}}return e.jsx(e.Fragment,{children:N||k?e.jsx("div",{children:e.jsx(Y,{})}):e.jsx(Z,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(_),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-4",children:[e.jsx(d,{control:l.control,name:"name",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Policy Name"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",placeholder:"Enter Policy Name",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"in_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"In Time"}),e.jsx(i,{children:e.jsx(h,{type:"time",className:"h-7",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"delay_buffer_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Delay Buffer Time"}),e.jsx(i,{children:e.jsx(h,{type:"time",className:"h-7",...n,placeholder:"Enter Delay Buffer"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"ex_delay_buffer_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Extra Delay Buffer"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"time",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"break_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Break Time (in minutes)"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"number",...n,placeholder:"Enter Break Time"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"working_hour",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Working Hours"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"text",...n,placeholder:"Enter Working Hours"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"out_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Out Time"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"time",...n,placeholder:"Enter Out Time"})}),e.jsx(x,{})]})})]}),e.jsx("div",{}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[e.jsx(d,{control:l.control,name:"ignore_overtime",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Ignore Overtime"})}),e.jsx(i,{children:e.jsx(P,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})}),e.jsx(d,{control:l.control,name:"discard_weekend_attendance",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Discard attendance on weekend"})}),e.jsx(i,{children:e.jsx(P,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})}),e.jsx(d,{control:l.control,name:"exclude_attendance_report",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Exclude from attendance report"})}),e.jsx(i,{children:e.jsx(P,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})})]}),e.jsx(p,{variant:"default",type:"button",onClick:w,children:"Copy to 7 days"}),e.jsx(v,{children:e.jsxs(D,{children:[e.jsx(ee,{children:e.jsxs(V,{className:"text-left text-xs",children:[e.jsx(m,{className:"p-1 text-xs",children:"Day"}),e.jsx(m,{className:"p-1 text-xs",children:"In Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Delay Buffer Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Extra Delay Buffer"}),e.jsx(m,{className:"p-1 text-xs",children:"Break Time (In Min)"}),e.jsx(m,{className:"p-1 text-xs",children:"Working Hours (In Hours)"}),e.jsx(m,{className:"p-1 text-xs",children:"Out Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Working Type"})]})}),e.jsx(se,{className:"divide-y",children:A.map((n,c)=>e.jsxs(V,{children:[e.jsx(m,{className:"p-1 text-xs",children:e.jsx(d,{control:l.control,name:`days.${c}.day`,render:()=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",value:n,readOnly:!0})}),e.jsx(x,{})]})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.in_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.delay_buffer_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"",children:e.jsx(d,{control:l.control,name:`days.${c}.ex_delay_buffer_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"",children:e.jsx(d,{control:l.control,name:`days.${c}.break_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{type:"number",className:"p-1 text-xs h-7",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.working_hour`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{type:"number",className:"p-1 text-xs h-7",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{children:e.jsx(d,{control:l.control,name:`days.${c}.out_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",...r,value:r.value||""})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"mr-1",children:e.jsx(d,{control:l.control,name:`days.${c}.working_type`,render:({field:r})=>{var u,g;return e.jsxs(t,{className:"p-1 text-xs h-7 w-[100px]",children:[e.jsxs(ne,{onValueChange:r.onChange,defaultValue:(g=(u=s==null?void 0:s.days)==null?void 0:u[c])!=null&&g.working_type?String(s.days[c].working_type):"full_day",children:[e.jsx(i,{className:"p-1 text-xs h-7 mt-[6px]",children:e.jsx(le,{children:e.jsx(ce,{placeholder:"Full Time"})})}),e.jsx(ae,{children:I==null?void 0:I.map(b=>e.jsx(re,{value:String(b.value),children:b.label},b.value))})]}),e.jsx(x,{})]})}})})]},c))})]})}),e.jsx("div",{className:"text-right",children:e.jsx(p,{variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function Ne({data:a}){const[s,f]=M.useState(!1),[N,o]=M.useState(!1),[k,{isLoading:l}]=_e(),w=async _=>{try{await k(_),E.success("Policy deleted successfully"),f(!1)}catch(n){console.log(n)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(C,{children:e.jsxs(T,{children:[e.jsx(U,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>o(!0),children:e.jsx(te,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(C,{children:e.jsx(T,{children:e.jsx(S,{children:e.jsx("p",{children:"Delete Requisition"})})})}),e.jsx(C,{children:e.jsxs(T,{children:[e.jsx(U,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{f(!0)},children:e.jsx(ie,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Delete Policy"})})]})}),e.jsx(oe,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>f(!1),onConfirm:()=>w(a.id),loading:l}),N&&e.jsx(q,{title:"Update Policy",isOpen:N,toggleModal:()=>o(!1),className:"w-[90%] max-w-6xl",children:e.jsx(G,{data:a,modalClose:()=>o(!1)})})]})}const be=[{id:"select",header:({table:a})=>e.jsx(W,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(W,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Policy Name"},{accessorKey:"in_time",header:"In Time"},{accessorKey:"delay_buffer_time",header:"Delay Buffer"},{accessorKey:"ex_delay_buffer_time",header:"Ex Delay Buffer"},{accessorKey:"break_time",header:"Break Time"},{accessorKey:"working_hour",header:"Working Hours"},{accessorKey:"out_time",header:"Out Time"},{accessorKey:"ignore_overtime",header:"Ignore Overtime",cell:({row:a})=>a.original.ignore_overtime===1?"Yes":"No"},{accessorKey:"exclude_attendance_report",header:"Ignore from att report",cell:({row:a})=>a.original.exclude_attendance_report===1?"Yes":"No"},{accessorKey:"discard_weekend_attendance",header:"Discard attendance on weekend",cell:({row:a})=>a.original.discard_weekend_attendance===1?"Yes":"No"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(Ne,{data:a.original})}],Ce=()=>{const[a,s]=M.useState(!1),[f,N]=xe.useState({pageIndex:0,pageSize:10}),{data:o,isLoading:k}=ue(`per_page=${f.pageSize}&page=${f.pageIndex+1}`),l=(o==null?void 0:o.data)||[];console.log(o,"hello");const w=(o==null?void 0:o.data)||[],_=o==null?void 0:o.meta;return k?e.jsx(Y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(me,{title:"Attendance Policy",description:"Manage job apply for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(he,{className:"mr-2 h-4 w-4"})," Add Attendance Policy"]})]}),e.jsx(je,{}),w&&e.jsx("div",{children:e.jsx(ye,{columns:be,data:l,paginationInfo:_,pagination:_&&f,setPagination:_&&N})})]})}),a&&e.jsx(q,{title:"Add Attendance Policy",isOpen:a,toggleModal:()=>s(!1),className:"w-2/3 max-w-5xl",children:e.jsx(G,{modalClose:()=>s(!1)})})]})};export{Ce as default};
========
import{z as Q,B as X,a as e,am as Y,F as Z,E as d,G as t,H as y,J as i,I as h,K as x,M as p,N as v,a$ as D,b0 as ee,b1 as V,b4 as m,b3 as se,aS as ne,aT as le,aU as ce,aV as ae,aX as re,an as E,ao as de,r as M,ar as C,as as T,at as U,au as te,av as S,aw as ie,ax as oe,ay as q,az as W,R as xe,aB as me,t as he,aC as je,aD as ye}from"./index-945ff9a6.js";import{S as P}from"./switch-068af577.js";import{a as fe,b as ge,c as J,d as _e,u as ue}from"./index-20490505.js";const A=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],I=[{label:"Full Day",value:"full_day",id:1},{label:"Half Day",value:"half_day",id:2},{label:"Weekend",value:"weekend",id:3}];function G({modalClose:a,data:s}){const[f,{isLoading:N}]=fe(),[o,{isLoading:k}]=ge(),l=Q({resolver:X(J),defaultValues:{name:(s==null?void 0:s.name)||"",in_time:(s==null?void 0:s.in_time)||"",delay_buffer_time:(s==null?void 0:s.delay_buffer_time)||"",ex_delay_buffer_time:(s==null?void 0:s.ex_delay_buffer_time)||"",break_time:(s==null?void 0:s.break_time)||0,working_hour:(s==null?void 0:s.working_hour)||0,out_time:(s==null?void 0:s.out_time)||"",ignore_overtime:(s==null?void 0:s.ignore_overtime)||0,exclude_attendance_report:(s==null?void 0:s.exclude_attendance_report)||0,discard_weekend_attendance:(s==null?void 0:s.discard_weekend_attendance)||0,days:A.map(n=>{var c,r,u,g,b,B,F,O,$,H,K,L,R,z;return{day:n,in_time:((r=(c=s==null?void 0:s.days)==null?void 0:c.find(j=>j.day===n))==null?void 0:r.in_time)||"",delay_buffer_time:((g=(u=s==null?void 0:s.days)==null?void 0:u.find(j=>j.day===n))==null?void 0:g.delay_buffer_time)||"",ex_delay_buffer_time:((B=(b=s==null?void 0:s.days)==null?void 0:b.find(j=>j.day===n))==null?void 0:B.ex_delay_buffer_time)||"",break_time:((O=(F=s==null?void 0:s.days)==null?void 0:F.find(j=>j.day===n))==null?void 0:O.break_time)||0,working_hour:((H=($=s==null?void 0:s.days)==null?void 0:$.find(j=>j.day===n))==null?void 0:H.working_hour)||0,out_time:((L=(K=s==null?void 0:s.days)==null?void 0:K.find(j=>j.day===n))==null?void 0:L.out_time)||"",working_type:((z=(R=s==null?void 0:s.days)==null?void 0:R.find(j=>j.day===n))==null?void 0:z.working_type)||"full_day"}})}}),w=()=>{const n=l.getValues(),c=Object.keys(J.shape);A.forEach((r,u)=>{c.forEach(g=>{l.setValue(`days.${u}.${g}`,n[g])})})};async function _(n){try{s?(await o({attendancePolicyId:s.id,updatedAttendancePolicy:n}).unwrap(),E.success("Policy updated successfully"),a()):(await f(n).unwrap(),E.success("Policy created successfully"),a())}catch(c){console.log(c),de(c)}}return e.jsx(e.Fragment,{children:N||k?e.jsx("div",{children:e.jsx(Y,{})}):e.jsx(Z,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(_),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-4",children:[e.jsx(d,{control:l.control,name:"name",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Policy Name"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",placeholder:"Enter Policy Name",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"in_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"In Time"}),e.jsx(i,{children:e.jsx(h,{type:"time",className:"h-7",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"delay_buffer_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Delay Buffer Time"}),e.jsx(i,{children:e.jsx(h,{type:"time",className:"h-7",...n,placeholder:"Enter Delay Buffer"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"ex_delay_buffer_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Extra Delay Buffer"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"time",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"break_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Break Time (in minutes)"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"number",...n,placeholder:"Enter Break Time"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"working_hour",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Working Hours"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"text",...n,placeholder:"Enter Working Hours"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"out_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Out Time"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"time",...n,placeholder:"Enter Out Time"})}),e.jsx(x,{})]})})]}),e.jsx("div",{}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[e.jsx(d,{control:l.control,name:"ignore_overtime",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Ignore Overtime"})}),e.jsx(i,{children:e.jsx(P,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})}),e.jsx(d,{control:l.control,name:"discard_weekend_attendance",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Discard attendance on weekend"})}),e.jsx(i,{children:e.jsx(P,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})}),e.jsx(d,{control:l.control,name:"exclude_attendance_report",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Exclude from attendance report"})}),e.jsx(i,{children:e.jsx(P,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})})]}),e.jsx(p,{variant:"default",type:"button",onClick:w,children:"Copy to 7 days"}),e.jsx(v,{children:e.jsxs(D,{children:[e.jsx(ee,{children:e.jsxs(V,{className:"text-left text-xs",children:[e.jsx(m,{className:"p-1 text-xs",children:"Day"}),e.jsx(m,{className:"p-1 text-xs",children:"In Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Delay Buffer Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Extra Delay Buffer"}),e.jsx(m,{className:"p-1 text-xs",children:"Break Time (In Min)"}),e.jsx(m,{className:"p-1 text-xs",children:"Working Hours (In Hours)"}),e.jsx(m,{className:"p-1 text-xs",children:"Out Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Working Type"})]})}),e.jsx(se,{className:"divide-y",children:A.map((n,c)=>e.jsxs(V,{children:[e.jsx(m,{className:"p-1 text-xs",children:e.jsx(d,{control:l.control,name:`days.${c}.day`,render:()=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",value:n,readOnly:!0})}),e.jsx(x,{})]})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.in_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.delay_buffer_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"",children:e.jsx(d,{control:l.control,name:`days.${c}.ex_delay_buffer_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"",children:e.jsx(d,{control:l.control,name:`days.${c}.break_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{type:"number",className:"p-1 text-xs h-7",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.working_hour`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{type:"number",className:"p-1 text-xs h-7",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{children:e.jsx(d,{control:l.control,name:`days.${c}.out_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",...r,value:r.value||""})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"mr-1",children:e.jsx(d,{control:l.control,name:`days.${c}.working_type`,render:({field:r})=>{var u,g;return e.jsxs(t,{className:"p-1 text-xs h-7 w-[100px]",children:[e.jsxs(ne,{onValueChange:r.onChange,defaultValue:(g=(u=s==null?void 0:s.days)==null?void 0:u[c])!=null&&g.working_type?String(s.days[c].working_type):"full_day",children:[e.jsx(i,{className:"p-1 text-xs h-7 mt-[6px]",children:e.jsx(le,{children:e.jsx(ce,{placeholder:"Full Time"})})}),e.jsx(ae,{children:I==null?void 0:I.map(b=>e.jsx(re,{value:String(b.value),children:b.label},b.value))})]}),e.jsx(x,{})]})}})})]},c))})]})}),e.jsx("div",{className:"text-right",children:e.jsx(p,{variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function Ne({data:a}){const[s,f]=M.useState(!1),[N,o]=M.useState(!1),[k,{isLoading:l}]=_e(),w=async _=>{try{await k(_),E.success("Policy deleted successfully"),f(!1)}catch(n){console.log(n)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(C,{children:e.jsxs(T,{children:[e.jsx(U,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>o(!0),children:e.jsx(te,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(C,{children:e.jsx(T,{children:e.jsx(S,{children:e.jsx("p",{children:"Delete Requisition"})})})}),e.jsx(C,{children:e.jsxs(T,{children:[e.jsx(U,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{f(!0)},children:e.jsx(ie,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Delete Policy"})})]})}),e.jsx(oe,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>f(!1),onConfirm:()=>w(a.id),loading:l}),N&&e.jsx(q,{title:"Update Policy",isOpen:N,toggleModal:()=>o(!1),className:"w-[90%] max-w-6xl",children:e.jsx(G,{data:a,modalClose:()=>o(!1)})})]})}const be=[{id:"select",header:({table:a})=>e.jsx(W,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(W,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Policy Name"},{accessorKey:"in_time",header:"In Time"},{accessorKey:"delay_buffer_time",header:"Delay Buffer"},{accessorKey:"ex_delay_buffer_time",header:"Ex Delay Buffer"},{accessorKey:"break_time",header:"Break Time"},{accessorKey:"working_hour",header:"Working Hours"},{accessorKey:"out_time",header:"Out Time"},{accessorKey:"ignore_overtime",header:"Ignore Overtime",cell:({row:a})=>a.original.ignore_overtime===1?"Yes":"No"},{accessorKey:"exclude_attendance_report",header:"Ignore from att report",cell:({row:a})=>a.original.exclude_attendance_report===1?"Yes":"No"},{accessorKey:"discard_weekend_attendance",header:"Discard attendance on weekend",cell:({row:a})=>a.original.discard_weekend_attendance===1?"Yes":"No"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(Ne,{data:a.original})}],Ce=()=>{const[a,s]=M.useState(!1),[f,N]=xe.useState({pageIndex:0,pageSize:10}),{data:o,isLoading:k}=ue(`per_page=${f.pageSize}&page=${f.pageIndex+1}`),l=(o==null?void 0:o.data)||[];console.log(o,"hello");const w=(o==null?void 0:o.data)||[],_=o==null?void 0:o.meta;return k?e.jsx(Y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(me,{title:"Attendance Policy",description:"Manage job apply for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(he,{className:"mr-2 h-4 w-4"})," Add Attendance Policy"]})]}),e.jsx(je,{}),w&&e.jsx("div",{children:e.jsx(ye,{columns:be,data:l,paginationInfo:_,pagination:_&&f,setPagination:_&&N})})]})}),a&&e.jsx(q,{title:"Add Attendance Policy",isOpen:a,toggleModal:()=>s(!1),className:"w-2/3 max-w-5xl",children:e.jsx(G,{modalClose:()=>s(!1)})})]})};export{Ce as default};
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/index-2ce6a776.js
