import{r as y,y as A,aS as $,a as e,az as f,aA as S,aB as v,V as r,aD as N,aC as T,aE as O,aF as F,aG as C,aT as I,av as b,aw as R,aH as P,B as L,D as z,au as B,G,aU as K,H,J as V,K as J,a9 as U,aa as Z,ab as w,aV as Q,ac as W,ad as X,aW as Y,R as q,aX as ee,aJ as ae,aK as se,aY as le,aZ as te,aM as ne,a_ as D,a$ as oe}from"./index-4b1ad796.js";import{C as ie}from"./circle-dollar-sign-3b91fdc2.js";import{Z as ce}from"./zoom-in-98cffc0e.js";import{E as re}from"./employee-filters-55507fd3.js";import{u as de,e as me}from"./attendance-policy-mapping-7cd74fd4.js";import{u as pe}from"./index-5597b79f.js";import"./index-74120ef8.js";import"./index-d55a476d.js";import"./index-f090cf26.js";import"./index-e0f9f056.js";import"./index-7ac52053.js";import"./index-ae87095b.js";function he({data:a}){const[t,l]=y.useState(!1),[h,x]=y.useState(!1),u=A(),[d,{isLoading:g}]=$(),n=async m=>{try{await d(m).unwrap(),b.success("Employee deleted successfully"),l(!1)}catch(s){console.log(s),R(s)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(f,{children:e.jsxs(S,{children:[e.jsx(v,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",onClick:()=>u(`/hrm/salary-setup/${a.id}`),className:"hover:bg-secondary",children:e.jsx(ie,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Employee Salary Setup"})})]})}),e.jsx(f,{children:e.jsxs(S,{children:[e.jsx(v,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>u(`/hrm/employees-list/edit/${a.id}`),children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Employee"})})]})}),e.jsx(f,{children:e.jsxs(S,{children:[e.jsx(v,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>u(`/hrm/employees-list/show/${a.id}`),children:e.jsx(ce,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Employee Details"})})]})}),e.jsx(f,{children:e.jsxs(S,{children:[e.jsx(v,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete employee"})})]})}),e.jsx(F,{title:"Are you sure?",description:"This action cannot be undone.",name:a.first_name,isOpen:t,onClose:()=>l(!1),onConfirm:()=>n(a.id),loading:g}),h&&e.jsx(C,{title:"Job Details",isOpen:h,toggleModal:()=>x(!1),className:"w-[90%] max-w-6xl",children:e.jsx(I,{})})]})}const xe=[{id:"select",header:({table:a})=>e.jsx(P,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:t=>a.toggleAllPageRowsSelected(!!t),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(P,{checked:a.getIsSelected(),onCheckedChange:t=>a.toggleSelected(!!t),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"image",header:" Image",cell:({row:a})=>{const t=a.getValue("image");return t?e.jsx("img",{src:t,alt:"image",className:"h-8 w-8 rounded-full"}):null}},{header:"Name",cell:({row:a})=>a.original.last_name?`${a.original.first_name} ${a.original.last_name}`:a.original.first_name},{accessorKey:"email",header:"Email"},{accessorKey:"phone",header:"Phone"},{accessorFn:({department:a})=>a==null?void 0:a.name,header:"Department"},{accessorFn:({designation:a})=>a==null?void 0:a.name,header:"Designation"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(he,{data:a.original})}];function ue({payload:a,modelClose:t}){const[l,h]=y.useState(!1),[x,{isLoading:u}]=de(),[d,g]=y.useState(null),n=A(),{data:m,isLoading:s}=pe("per_page=1000&page=1"),o=(m==null?void 0:m.data)||[],p=L({resolver:z(me),defaultValues:{employee_ids:a==null?void 0:a.map(i=>i.id),effective_date:new Date().toISOString().split("T")[0]}}),E=i=>{i&&(g(i),p.setValue("effective_date",`${w(i,"yyyy-MM-dd")}`),h(!1))};async function _(i){const c={...i,employee_ids:(a==null?void 0:a.map(j=>j.id))||[]};try{await x(c),b.success("Employee Attendance Policy created successfully"),t&&t(),n("/hrm/attendance-policy-mapping")}catch(j){console.log(j)}}return e.jsx(e.Fragment,{children:u?e.jsx("div",{className:"h-[535px]",children:e.jsx(B,{})}):e.jsx("div",{className:"flex gap-x-4",children:e.jsx("div",{className:" w-full ",children:e.jsx(G,{...p,children:e.jsxs("form",{onSubmit:p.handleSubmit(_),className:"",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{className:"w-full",children:e.jsx(K,{loading:s,data:o,displayField:"name",valueField:"id",form:p,name:"attendance_policy_id",title:"Attendance Policy",className:"w-[460px]"})}),e.jsx(H,{control:p.control,name:"effective_date",render:()=>e.jsxs(V,{children:[e.jsx(J,{children:"Effective Date"}),e.jsxs(U,{open:l,onOpenChange:h,children:[e.jsx(Z,{asChild:!0,className:"",children:e.jsxs(r,{variant:"outline",className:`w-full justify-start text-left font-normal ${!d&&"text-muted-foreground"}`,children:[d?w(d,"PP"):"Pick a date",e.jsx(Q,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(W,{className:"w-auto p-0",align:"start",children:e.jsx(X,{mode:"single",selected:d??void 0,onSelect:E,initialFocus:!0})})]})]})})]}),e.jsx("div",{children:e.jsx(r,{variant:"default",type:"submit",className:"w-full mt-4",children:"Save"})})]})})})})})}const ye=[{label:"Enable Roster",value:"enable-roster"},{label:"Attendance Policy Mapping",value:"attendance-policy-mapping"},{label:"Delete Selected",value:"delete-selected"},{label:"Salary Estimate/Generate",value:"salary-estimate-generate"},{label:"Salary Adjustment",value:"salary-adjustment"}],we=()=>{const a=A(),t=Y(),[l,h]=y.useState(""),[x,u]=q.useState({pageIndex:0,pageSize:10}),[d,g]=y.useState(""),{data:n,isLoading:m}=ee(`per_page=${x.pageSize}&page=${x.pageIndex+1}&text=${d}&${l}`),[s,o]=y.useState({action:"",payload:[]}),p=(n==null?void 0:n.data)||[],E=n==null?void 0:n.meta,_=()=>{console.log("Handle Employee Roster Change"),console.log(s),b.success("Employee roster updated successfully"),o({action:"",payload:[]})},i=c=>{t(oe(s)),b.success("Employee selected successfully"),o({action:"",payload:[]});const j=s.payload.map(k=>k.id).join(","),M=(l==null?void 0:l.split("=").includes("has_salary_month"))&&(l==null?void 0:l.split("=")[1]);s.action==="salary-adjustment"?a(`${c}?employee_ids=${j}&salary_month=${M}`):a(c)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ae,{title:"Employees",description:"Manage employees for you business"}),e.jsxs(r,{onClick:()=>a("/hrm/employees-list/add"),size:"sm",children:[e.jsx(se,{className:"mr-2 h-4 w-4"})," Add Employee"]})]}),e.jsx(le,{}),e.jsx(re,{setFilterParams:h}),m&&e.jsx(te,{}),p&&!m&&e.jsx("div",{children:e.jsx(ne,{columns:xe,data:p,bulkActions:ye,onBulkSelectChange:o,paginationInfo:E,pagination:x,setPagination:u,onChangeSearch:g})})]})}),s.action==="enable-roster"&&e.jsx(F,{title:"Enable Employee Roster?",description:"This action can be changed later",alertMessage:"Are you sure you want to update employee roster status?",type:"default",isOpen:s.action==="enable-roster",onClose:()=>o({action:"",payload:[]}),onConfirm:_}),s.action==="attendance-policy-mapping"&&e.jsx(C,{title:"Attendance Policy Mapping",toggleModal:()=>o({action:"",payload:[]}),isOpen:s.action==="attendance-policy-mapping",className:"!h-fit",children:e.jsx(ue,{payload:s.payload,modelClose:()=>o({action:"",payload:[]})})}),s.action==="salary-estimate-generate"&&e.jsxs(C,{title:"Salary Estimate/Generate",toggleModal:()=>o({action:"",payload:[]}),isOpen:s.action==="salary-estimate-generate",className:"!h-fit",children:[e.jsx("span",{children:l.includes("estimate_salary_for")?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please Select estimated salary for"})}),e.jsx("span",{children:s.payload.length>0?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please Select at least one employee"})}),e.jsx("span",{children:s.payload.map(c=>e.jsx(D,{className:"mr-1 mb-1",children:c.first_name},c.id))}),e.jsx(r,{onClick:()=>i("/hrm/estimate-salary"),children:"Select the Employees"})]}),s.action==="salary-adjustment"&&e.jsxs(C,{title:"Salary Adjustment",toggleModal:()=>o({action:"",payload:[]}),isOpen:s.action==="salary-adjustment",className:"!h-fit",children:[e.jsx("span",{children:l.includes("has_salary_month")?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please select a month for employees with generated salaries."})}),e.jsx("span",{children:s.payload.length>0?null:e.jsx("span",{className:"text-red-500 text-xs",children:"Please Select at least one employee"})}),e.jsx("span",{children:s.payload.map(c=>e.jsx(D,{className:"mr-1 mb-1",children:c.first_name},c.id))}),e.jsx(r,{onClick:()=>i("/hrm/salary-adjustment"),disabled:!l.includes("has_salary_month")||s.payload.length===0,children:"Select the Employees"})]})]})};export{we as default};
