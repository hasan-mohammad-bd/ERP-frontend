import{a as e,r as x,x as P,aJ as M,ar as v,as as C,at as N,M as p,av as b,au as k,aw as O,ax as w,ay as E,an as g,ao as _,az as A,z as L,B as T,am as R,F as I,aK as z,E as K,G as $,H as B,a6 as G,a7 as H,a8 as F,aL as J,a9 as Q,aa as U,aM as V,R as q,aN as W,aB as X,t as Y,aO as Z,aP as ee,aD as ae,aQ as se}from"./index-8a1ea0cd.js";import{C as te}from"./circle-dollar-sign-eaf3f0e4.js";import{E as le}from"./employee-filters-1a720d6e.js";import{u as ne,e as oe}from"./attendance-policy-mapping-a6237699.js";import{u as ie}from"./index-eaa3b897.js";import"./index-d80264b3.js";import"./index-e946a131.js";import"./index-e7f0078b.js";const ce=()=>e.jsx("div",{});function re({data:a}){console.log(a),console.log(a.id);const[n,o]=x.useState(!1),[i,c]=x.useState(!1),h=P(),[t,{isLoading:u}]=M(),s=async l=>{try{await t(l).unwrap(),g.success("Job Candidate deleted successfully"),o(!1)}catch(r){console.log(r),_(r)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(v,{children:e.jsxs(C,{children:[e.jsx(N,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",onClick:()=>h(`/hrm/salary-setup/${a.id}`),className:"hover:bg-secondary",children:e.jsx(te,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Employee Salary Setup"})})]})}),e.jsx(v,{children:e.jsxs(C,{children:[e.jsx(N,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>h(`/hrm/employees-list/edit/${a.id}`),children:e.jsx(k,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Employee"})})]})}),e.jsx(v,{children:e.jsxs(C,{children:[e.jsx(N,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{o(!0)},children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete employee"})})]})}),e.jsx(w,{title:"Are you sure?",description:"This action cannot be undone.",name:a.first_name,isOpen:n,onClose:()=>o(!1),onConfirm:()=>s(a.id),loading:u}),i&&e.jsx(E,{title:"Job Details",isOpen:i,toggleModal:()=>c(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ce,{})})]})}const de=[{id:"select",header:({table:a})=>e.jsx(A,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(A,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"First name"},{accessorKey:"last_name",header:"Last name"},{accessorKey:"email",header:"Email"},{accessorKey:"phone",header:"Phone"},{accessorKey:"",accessorFn:({department:a})=>a==null?void 0:a.name,header:"Department"},{accessorKey:"location",accessorFn:({location:a})=>a==null?void 0:a.name,header:"Location"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(re,{data:a.original})}];function me({payload:a,modelClose:n}){const[o,i]=x.useState(!1),[c,{isLoading:h}]=ne(),[t,u]=x.useState(null),s=P(),{data:l,isLoading:r}=ie("per_page=1000&page=1"),y=(l==null?void 0:l.data)||[],d=L({resolver:T(oe),defaultValues:{employee_ids:a==null?void 0:a.map(m=>m.id),effective_date:new Date().toISOString().split("T")[0]}}),j=m=>{m&&(u(m),d.setValue("effective_date",`${F(m,"yyyy-MM-dd")}`),i(!1))};async function f(m){const D={...m,employee_ids:(a==null?void 0:a.map(S=>S.id))||[]};try{await c(D),g.success("Employee Attendance Policy created successfully"),n&&n(),s("/hrm/attendance-policy-mapping")}catch(S){console.log(S)}}return e.jsx(e.Fragment,{children:h?e.jsx("div",{className:"h-[535px]",children:e.jsx(R,{})}):e.jsx("div",{className:"flex gap-x-4",children:e.jsx("div",{className:" w-full ",children:e.jsx(I,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(f),className:"",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{className:"w-full",children:e.jsx(z,{loading:r,data:y,displayField:"name",valueField:"id",form:d,name:"attendance_policy_id",title:"Attendance Policy",className:"w-[460px]"})}),e.jsx(K,{control:d.control,name:"effective_date",render:()=>e.jsxs($,{children:[e.jsx(B,{children:"Effective Date"}),e.jsxs(G,{open:o,onOpenChange:i,children:[e.jsx(H,{asChild:!0,className:"",children:e.jsxs(p,{variant:"outline",className:`w-full justify-start text-left font-normal ${!t&&"text-muted-foreground"}`,children:[t?F(t,"PP"):"Pick a date",e.jsx(J,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(Q,{className:"w-auto p-0",align:"start",children:e.jsx(U,{mode:"single",selected:t??void 0,onSelect:j,initialFocus:!0})})]})]})})]}),e.jsx("div",{children:e.jsx(p,{variant:"default",type:"submit",className:"w-full mt-4",children:"Save"})})]})})})})})}const pe=[{label:"Enable Roster",value:"enable-roster"},{label:"Attendance Policy Mapping",value:"attendance-policy-mapping"},{label:"Delete Selected",value:"delete-selected"},{label:"Salary Estimate/Generate",value:"salary-estimate-generate"}],ve=()=>{const a=P(),n=V(),[o,i]=x.useState(""),[c,h]=q.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:u}=W(`per_page=${c.pageSize}&page=${c.pageIndex+1}&${o}`),[s,l]=x.useState({action:"",payload:[]}),r=(t==null?void 0:t.data)||[],y=t==null?void 0:t.meta,d=()=>{console.log("Handle Employee Roster Change"),console.log(s),g.success("Employee roster updated successfully"),l({action:"",payload:[]})},j=()=>{console.log(s),n(se(s)),g.success("Employee selected successfully"),l({action:"",payload:[]}),a("/hrm/estimate-salary")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(X,{title:"Employees",description:"Manage employees for you business"}),e.jsxs(p,{onClick:()=>a("/hrm/employees-list/add"),size:"sm",children:[e.jsx(Y,{className:"mr-2 h-4 w-4"})," Add Employee"]})]}),e.jsx(Z,{}),e.jsx(le,{setFilterParams:i}),u&&e.jsx(ee,{}),r&&!u&&e.jsx("div",{children:e.jsx(ae,{columns:de,data:r,bulkActions:pe,onBulkSelectChange:l,paginationInfo:y,pagination:c,setPagination:h})})]})}),s.action==="enable-roster"&&e.jsx(w,{title:"Enable Employee Roster?",description:"This action can be changed later",alertMessage:"Are you sure you want to update employee roster status?",type:"default",isOpen:s.action==="enable-roster",onClose:()=>l({action:"",payload:[]}),onConfirm:d}),s.action==="attendance-policy-mapping"&&e.jsx(E,{title:"Attendance Policy Mapping",toggleModal:()=>l({action:"",payload:[]}),isOpen:s.action==="attendance-policy-mapping",className:"!h-fit",children:e.jsx(me,{payload:s.payload,modelClose:()=>l({action:"",payload:[]})})}),s.action==="salary-estimate-generate"&&e.jsxs(E,{title:"Salary Estimate/Generate",toggleModal:()=>l({action:"",payload:[]}),isOpen:s.action==="salary-estimate-generate",className:"!h-fit",children:[e.jsxs("span",{children:[s.payload.map(f=>f.first_name).join(", ")," "]}),e.jsx(p,{onClick:j,children:"Select the Employees"})]})]})};export{ve as default};
