import{$ as Z,a0 as G,a as e,a2 as J,a3 as X,a4 as d,a5 as t,a6 as y,a7 as i,I as h,a8 as x,be as C,B as p,U as v,aY as D,aZ as ee,a_ as V,b1 as m,b0 as se,aP as ne,aQ as le,aR as ce,aS as ae,aU as re,a9 as E,aa as de,r as M,ac as P,ad as T,ae as W,af as te,ag as S,ah as ie,ai as oe,aj as Q,ak as z,R as xe,am as me,t as he,an as je,ao as ye}from"./index-086c5f78.js";import{a as ge,b as fe,c as Y,d as _e,u as ue}from"./index-ce51f5ae.js";const A=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],I=[{label:"Full Day",value:"full_day",id:1},{label:"Half Day",value:"half_day",id:2},{label:"Weekend",value:"weekend",id:3}];function q({modalClose:a,data:s}){const[g,{isLoading:N}]=ge(),[o,{isLoading:k}]=fe(),l=Z({resolver:G(Y),defaultValues:{name:(s==null?void 0:s.name)||"",in_time:(s==null?void 0:s.in_time)||"",delay_buffer_time:(s==null?void 0:s.delay_buffer_time)||"",ex_delay_buffer_time:(s==null?void 0:s.ex_delay_buffer_time)||"",break_time:(s==null?void 0:s.break_time)||0,working_hour:(s==null?void 0:s.working_hour)||0,out_time:(s==null?void 0:s.out_time)||"",ignore_overtime:(s==null?void 0:s.ignore_overtime)||0,exclude_attendance_report:(s==null?void 0:s.exclude_attendance_report)||0,discard_weekend_attendance:(s==null?void 0:s.discard_weekend_attendance)||0,days:A.map(n=>{var c,r,u,f,b,O,B,F,$,H,K,R,L,U;return{day:n,in_time:((r=(c=s==null?void 0:s.days)==null?void 0:c.find(j=>j.day===n))==null?void 0:r.in_time)||"",delay_buffer_time:((f=(u=s==null?void 0:s.days)==null?void 0:u.find(j=>j.day===n))==null?void 0:f.delay_buffer_time)||"",ex_delay_buffer_time:((O=(b=s==null?void 0:s.days)==null?void 0:b.find(j=>j.day===n))==null?void 0:O.ex_delay_buffer_time)||"",break_time:((F=(B=s==null?void 0:s.days)==null?void 0:B.find(j=>j.day===n))==null?void 0:F.break_time)||0,working_hour:((H=($=s==null?void 0:s.days)==null?void 0:$.find(j=>j.day===n))==null?void 0:H.working_hour)||0,out_time:((R=(K=s==null?void 0:s.days)==null?void 0:K.find(j=>j.day===n))==null?void 0:R.out_time)||"",working_type:((U=(L=s==null?void 0:s.days)==null?void 0:L.find(j=>j.day===n))==null?void 0:U.working_type)||"full_day"}})}}),w=()=>{const n=l.getValues(),c=Object.keys(Y.shape);A.forEach((r,u)=>{c.forEach(f=>{l.setValue(`days.${u}.${f}`,n[f])})})};async function _(n){try{s?(await o({attendancePolicyId:s.id,updatedAttendancePolicy:n}).unwrap(),E.success("Policy updated successfully"),a()):(await g(n).unwrap(),E.success("Policy created successfully"),a())}catch(c){console.log(c),de(c)}}return e.jsx(e.Fragment,{children:N||k?e.jsx("div",{children:e.jsx(J,{})}):e.jsx(X,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(_),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-4",children:[e.jsx(d,{control:l.control,name:"name",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Policy Name"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",placeholder:"Enter Policy Name",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"in_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"In Time"}),e.jsx(i,{children:e.jsx(h,{type:"time",className:"h-7",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"delay_buffer_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Delay Buffer Time"}),e.jsx(i,{children:e.jsx(h,{type:"time",className:"h-7",...n,placeholder:"Enter Delay Buffer"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"ex_delay_buffer_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Extra Delay Buffer"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"time",...n})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"break_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Break Time (in minutes)"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"number",...n,placeholder:"Enter Break Time"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"working_hour",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Working Hours"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"text",...n,placeholder:"Enter Working Hours"})}),e.jsx(x,{})]})}),e.jsx(d,{control:l.control,name:"out_time",render:({field:n})=>e.jsxs(t,{children:[e.jsx(y,{children:"Out Time"}),e.jsx(i,{children:e.jsx(h,{className:"h-7",type:"time",...n,placeholder:"Enter Out Time"})}),e.jsx(x,{})]})})]}),e.jsx("div",{}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[e.jsx(d,{control:l.control,name:"ignore_overtime",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Ignore Overtime"})}),e.jsx(i,{children:e.jsx(C,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})}),e.jsx(d,{control:l.control,name:"discard_weekend_attendance",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Discard attendance on weekend"})}),e.jsx(i,{children:e.jsx(C,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})}),e.jsx(d,{control:l.control,name:"exclude_attendance_report",render:({field:n})=>e.jsxs(t,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Exclude from attendance report"})}),e.jsx(i,{children:e.jsx(C,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:c=>n.onChange(c?1:0)})})]})})]}),e.jsx(p,{variant:"default",type:"button",onClick:w,children:"Copy to 7 days"}),e.jsx(v,{children:e.jsxs(D,{children:[e.jsx(ee,{children:e.jsxs(V,{className:"text-left text-xs",children:[e.jsx(m,{className:"p-1 text-xs",children:"Day"}),e.jsx(m,{className:"p-1 text-xs",children:"In Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Delay Buffer Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Extra Delay Buffer"}),e.jsx(m,{className:"p-1 text-xs",children:"Break Time (In Min)"}),e.jsx(m,{className:"p-1 text-xs",children:"Working Hours (In Hours)"}),e.jsx(m,{className:"p-1 text-xs",children:"Out Time"}),e.jsx(m,{className:"p-1 text-xs",children:"Working Type"})]})}),e.jsx(se,{className:"divide-y",children:A.map((n,c)=>e.jsxs(V,{children:[e.jsx(m,{className:"p-1 text-xs",children:e.jsx(d,{control:l.control,name:`days.${c}.day`,render:()=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",value:n,readOnly:!0})}),e.jsx(x,{})]})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.in_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.delay_buffer_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"",children:e.jsx(d,{control:l.control,name:`days.${c}.ex_delay_buffer_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",placeholder:"Enter In Time",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"",children:e.jsx(d,{control:l.control,name:`days.${c}.break_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{type:"number",className:"p-1 text-xs h-7",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{className:"p-1",children:e.jsx("div",{className:"flex-1",children:e.jsx(d,{control:l.control,name:`days.${c}.working_hour`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{type:"number",className:"p-1 text-xs h-7",...r,value:r.value||""})}),e.jsx(x,{})]})})})}),e.jsx(m,{children:e.jsx(d,{control:l.control,name:`days.${c}.out_time`,render:({field:r})=>e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(h,{className:"p-1 text-xs h-7",type:"time",...r,value:r.value||""})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"mr-1",children:e.jsx(d,{control:l.control,name:`days.${c}.working_type`,render:({field:r})=>{var u,f;return e.jsxs(t,{className:"p-1 text-xs h-7 w-[100px]",children:[e.jsxs(ne,{onValueChange:r.onChange,defaultValue:(f=(u=s==null?void 0:s.days)==null?void 0:u[c])!=null&&f.working_type?String(s.days[c].working_type):"full_day",children:[e.jsx(i,{className:"p-1 text-xs h-7 mt-[6px]",children:e.jsx(le,{children:e.jsx(ce,{placeholder:"Full Time"})})}),e.jsx(ae,{children:I==null?void 0:I.map(b=>e.jsx(re,{value:String(b.value),children:b.label},b.value))})]}),e.jsx(x,{})]})}})})]},c))})]})}),e.jsx("div",{className:"text-right",children:e.jsx(p,{variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function Ne({data:a}){const[s,g]=M.useState(!1),[N,o]=M.useState(!1),[k,{isLoading:l}]=_e(),w=async _=>{try{await k(_),E.success("Policy deleted successfully"),g(!1)}catch(n){console.log(n)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(P,{children:e.jsxs(T,{children:[e.jsx(W,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>o(!0),children:e.jsx(te,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(P,{children:e.jsx(T,{children:e.jsx(S,{children:e.jsx("p",{children:"Delete Requisition"})})})}),e.jsx(P,{children:e.jsxs(T,{children:[e.jsx(W,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{g(!0)},children:e.jsx(ie,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Delete Policy"})})]})}),e.jsx(oe,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>g(!1),onConfirm:()=>w(a.id),loading:l}),N&&e.jsx(Q,{title:"Update Policy",isOpen:N,toggleModal:()=>o(!1),className:"w-[90%] max-w-6xl",children:e.jsx(q,{data:a,modalClose:()=>o(!1)})})]})}const be=[{id:"select",header:({table:a})=>e.jsx(z,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(z,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Policy Name"},{accessorKey:"in_time",header:"In Time"},{accessorKey:"delay_buffer_time",header:"Delay Buffer"},{accessorKey:"ex_delay_buffer_time",header:"Ex Delay Buffer"},{accessorKey:"break_time",header:"Break Time"},{accessorKey:"working_hour",header:"Working Hours"},{accessorKey:"out_time",header:"Out Time"},{accessorKey:"ignore_overtime",header:"Ignore Overtime",cell:({row:a})=>a.original.ignore_overtime===1?"Yes":"No"},{accessorKey:"exclude_attendance_report",header:"Ignore from att report",cell:({row:a})=>a.original.exclude_attendance_report===1?"Yes":"No"},{accessorKey:"discard_weekend_attendance",header:"Discard attendance on weekend",cell:({row:a})=>a.original.discard_weekend_attendance===1?"Yes":"No"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(Ne,{data:a.original})}],pe=()=>{const[a,s]=M.useState(!1),[g,N]=xe.useState({pageIndex:0,pageSize:10}),{data:o,isLoading:k}=ue(`per_page=${g.pageSize}&page=${g.pageIndex+1}`),l=(o==null?void 0:o.data)||[];console.log(o,"hello");const w=(o==null?void 0:o.data)||[],_=o==null?void 0:o.meta;return k?e.jsx(J,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(me,{title:"Attendance Policy",description:"Manage job apply for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(he,{className:"mr-2 h-4 w-4"})," Add Attendance Policy"]})]}),e.jsx(je,{}),w&&e.jsx("div",{children:e.jsx(ye,{columns:be,data:l,paginationInfo:_,pagination:_&&g,setPagination:_&&N})})]})}),a&&e.jsx(Q,{title:"Add Attendance Policy",isOpen:a,toggleModal:()=>s(!1),className:"w-2/3 max-w-5xl",children:e.jsx(q,{modalClose:()=>s(!1)})})]})};export{pe as default};
