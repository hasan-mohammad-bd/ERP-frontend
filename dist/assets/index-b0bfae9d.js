import{a as e,r as y,y as A,aP as M,aw as C,ax as b,ay as E,Q as r,aA as P,az as k,aB as O,aC as F,aD as f,as as S,at as T,aE as _,B as $,D as R,ar as I,G as L,aQ as B,H as z,J as G,K as H,a6 as K,a7 as J,a8 as D,aR as Q,a9 as U,aa as V,aS as W,R as X,aT as q,aG as Y,aH as Z,aU as ee,aV as ae,aJ as se,aW as w,aX as le}from"./index-4e4d6e52.js";import{C as te}from"./circle-dollar-sign-58f880fa.js";import{E as ne}from"./employee-filters-6a6b06af.js";import{u as oe,e as ie}from"./attendance-policy-mapping-aede5366.js";import{u as ce}from"./index-18a5a4a9.js";import"./index-8f85c8f5.js";import"./index-4e011dc7.js";import"./index-cc14a477.js";const re=()=>e.jsx("div",{});function de({data:a}){console.log(a),console.log(a.id);const[n,l]=y.useState(!1),[d,m]=y.useState(!1),u=A(),[o,{isLoading:x}]=M(),s=async t=>{try{await o(t).unwrap(),S.success("Employee deleted successfully"),l(!1)}catch(p){console.log(p),T(p)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(C,{children:e.jsxs(b,{children:[e.jsx(E,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",onClick:()=>u(`/hrm/salary-setup/${a.id}`),className:"hover:bg-secondary",children:e.jsx(te,{className:"h-4 w-4 text-foreground"})})}),e.jsx(P,{children:e.jsx("p",{children:"Update Employee Salary Setup"})})]})}),e.jsx(C,{children:e.jsxs(b,{children:[e.jsx(E,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>u(`/hrm/employees-list/edit/${a.id}`),children:e.jsx(k,{className:"h-4 w-4 text-foreground"})})}),e.jsx(P,{children:e.jsx("p",{children:"Update Employee"})})]})}),e.jsx(C,{children:e.jsxs(b,{children:[e.jsx(E,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(P,{children:e.jsx("p",{children:"Delete employee"})})]})}),e.jsx(F,{title:"Are you sure?",description:"This action cannot be undone.",name:a.first_name,isOpen:n,onClose:()=>l(!1),onConfirm:()=>s(a.id),loading:x}),d&&e.jsx(f,{title:"Job Details",isOpen:d,toggleModal:()=>m(!1),className:"w-[90%] max-w-6xl",children:e.jsx(re,{})})]})}const me=[{id:"select",header:({table:a})=>e.jsx(_,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(_,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"image",header:" Image",cell:({row:a})=>{const n=a.getValue("image");return n?e.jsx("img",{src:n,alt:"image",className:"h-8 w-8 rounded-full"}):null}},{header:"Name",cell:({row:a})=>a.original.last_name?`${a.original.first_name} ${a.original.last_name}`:a.original.first_name},{accessorKey:"email",header:"Email"},{accessorKey:"phone",header:"Phone"},{accessorFn:({department:a})=>a==null?void 0:a.name,header:"Department"},{accessorFn:({designation:a})=>a==null?void 0:a.name,header:"Designation"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(de,{data:a.original})}];function pe({payload:a,modelClose:n}){const[l,d]=y.useState(!1),[m,{isLoading:u}]=oe(),[o,x]=y.useState(null),s=A(),{data:t,isLoading:p}=ce("per_page=1000&page=1"),v=(t==null?void 0:t.data)||[],h=$({resolver:R(ie),defaultValues:{employee_ids:a==null?void 0:a.map(c=>c.id),effective_date:new Date().toISOString().split("T")[0]}}),j=c=>{c&&(x(c),h.setValue("effective_date",`${D(c,"yyyy-MM-dd")}`),d(!1))};async function i(c){const N={...c,employee_ids:(a==null?void 0:a.map(g=>g.id))||[]};try{await m(N),S.success("Employee Attendance Policy created successfully"),n&&n(),s("/hrm/attendance-policy-mapping")}catch(g){console.log(g)}}return e.jsx(e.Fragment,{children:u?e.jsx("div",{className:"h-[535px]",children:e.jsx(I,{})}):e.jsx("div",{className:"flex gap-x-4",children:e.jsx("div",{className:" w-full ",children:e.jsx(L,{...h,children:e.jsxs("form",{onSubmit:h.handleSubmit(i),className:"",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{className:"w-full",children:e.jsx(B,{loading:p,data:v,displayField:"name",valueField:"id",form:h,name:"attendance_policy_id",title:"Attendance Policy",className:"w-[460px]"})}),e.jsx(z,{control:h.control,name:"effective_date",render:()=>e.jsxs(G,{children:[e.jsx(H,{children:"Effective Date"}),e.jsxs(K,{open:l,onOpenChange:d,children:[e.jsx(J,{asChild:!0,className:"",children:e.jsxs(r,{variant:"outline",className:`w-full justify-start text-left font-normal ${!o&&"text-muted-foreground"}`,children:[o?D(o,"PP"):"Pick a date",e.jsx(Q,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(U,{className:"w-auto p-0",align:"start",children:e.jsx(V,{mode:"single",selected:o??void 0,onSelect:j,initialFocus:!0})})]})]})})]}),e.jsx("div",{children:e.jsx(r,{variant:"default",type:"submit",className:"w-full mt-4",children:"Save"})})]})})})})})}const he=[{label:"Enable Roster",value:"enable-roster"},{label:"Attendance Policy Mapping",value:"attendance-policy-mapping"},{label:"Delete Selected",value:"delete-selected"},{label:"Salary Estimate/Generate",value:"salary-estimate-generate"},{label:"Salary Adjustment",value:"salary-adjustment"}],Ne=()=>{const a=A(),n=W(),[l,d]=y.useState(""),[m,u]=X.useState({pageIndex:0,pageSize:10}),{data:o,isLoading:x}=q(`per_page=${m.pageSize}&page=${m.pageIndex+1}&${l}`),[s,t]=y.useState({action:"",payload:[]}),p=(o==null?void 0:o.data)||[],v=o==null?void 0:o.meta,h=()=>{console.log("Handle Employee Roster Change"),console.log(s),S.success("Employee roster updated successfully"),t({action:"",payload:[]})},j=i=>{n(le(s)),S.success("Employee selected successfully"),t({action:"",payload:[]});const c=s.payload.map(g=>g.id).join(","),N=(l==null?void 0:l.split("=").includes("has_salary_month"))&&(l==null?void 0:l.split("=")[1]);s.action==="salary-adjustment"?a(`${i}?employee_ids=${c}&salary_month=${N}`):a(i)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Y,{title:"Employees",description:"Manage employees for you business"}),e.jsxs(r,{onClick:()=>a("/hrm/employees-list/add"),size:"sm",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"})," Add Employee"]})]}),e.jsx(ee,{}),e.jsx(ne,{setFilterParams:d}),x&&e.jsx(ae,{}),p&&!x&&e.jsx("div",{children:e.jsx(se,{columns:me,data:p,bulkActions:he,onBulkSelectChange:t,paginationInfo:v,pagination:m,setPagination:u})})]})}),s.action==="enable-roster"&&e.jsx(F,{title:"Enable Employee Roster?",description:"This action can be changed later",alertMessage:"Are you sure you want to update employee roster status?",type:"default",isOpen:s.action==="enable-roster",onClose:()=>t({action:"",payload:[]}),onConfirm:h}),s.action==="attendance-policy-mapping"&&e.jsx(f,{title:"Attendance Policy Mapping",toggleModal:()=>t({action:"",payload:[]}),isOpen:s.action==="attendance-policy-mapping",className:"!h-fit",children:e.jsx(pe,{payload:s.payload,modelClose:()=>t({action:"",payload:[]})})}),s.action==="salary-estimate-generate"&&e.jsxs(f,{title:"Salary Estimate/Generate",toggleModal:()=>t({action:"",payload:[]}),isOpen:s.action==="salary-estimate-generate",className:"!h-fit",children:[e.jsx("span",{children:l.includes("estimate_salary_for")?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please Select estimated salary for"})}),e.jsx("span",{children:s.payload.length>0?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please Select at least one employee"})}),e.jsx("span",{children:s.payload.map(i=>e.jsx(w,{className:"mr-1 mb-1",children:i.first_name},i.id))}),e.jsx(r,{onClick:()=>j("/hrm/estimate-salary"),children:"Select the Employees"})]}),s.action==="salary-adjustment"&&e.jsxs(f,{title:"Salary Adjustment",toggleModal:()=>t({action:"",payload:[]}),isOpen:s.action==="salary-adjustment",className:"!h-fit",children:[e.jsx("span",{children:l.includes("has_salary_month")?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please select a month for employees with generated salaries."})}),e.jsx("span",{children:s.payload.length>0?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please Select at least one employee"})}),e.jsx("span",{children:s.payload.map(i=>e.jsx(w,{className:"mr-1 mb-1",children:i.first_name},i.id))}),e.jsx(r,{onClick:()=>j("/hrm/salary-adjustment"),disabled:!l.includes("has_salary_month")||s.payload.length===0,children:"Select the Employees"})]})]})};export{Ne as default};
