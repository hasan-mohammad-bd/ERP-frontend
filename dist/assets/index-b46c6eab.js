import{r as m,aH as T,$ as k,a0 as O,a as e,a2 as N,a3 as I,aw as u,a4 as R,a5 as z,a6 as $,y as U,z as G,B as g,D as P,ax as H,E as Q,F as B,a9 as _,aa as K,ac as y,ad as h,ae as A,af as V,ag as f,ah as J,ai as q,aj as C,ak as S,R as W,au as X,am as Y,t as Z,an as D,ao as ee}from"./index-086c5f78.js";import{a as ae,e as se,b as te,c as le}from"./attendance-policy-mapping-1d755974.js";import{u as ne}from"./index-ce51f5ae.js";function F({modalClose:s,data:a}){const[t,c]=m.useState(null),[i,l]=m.useState(!1),{data:o,isLoading:d}=ne("per_page=1000&page=1"),{data:n,isLoading:p}=T("per_page=1000&page=1"),w=(o==null?void 0:o.data)||[],E=(n==null?void 0:n.data)||[],[v,{isLoading:b}]=ae(),r=k({resolver:O(se),defaultValues:{employee_id:a==null?void 0:a.employee_id.toString(),attendance_policy_id:a==null?void 0:a.attendance_policy_id.toString(),effective_date:a==null?void 0:a.effective_date}}),M=x=>{x&&(c(x),r.setValue("effective_date",`${P(x,"yyyy-MM-dd")}`),l(!1))};m.useEffect(()=>{a&&c(new Date(a.effective_date))},[a]);async function L(x){try{a&&(await v({attendancePolicyId:a.id,updatedAttendancePolicy:x}).unwrap(),_.success("Policy updated successfully")),s()}catch(j){console.log(j),K(j)}}return e.jsx(e.Fragment,{children:b?e.jsx("div",{children:e.jsx(N,{})}):e.jsx(I,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(L),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{className:"w-full",children:e.jsx(u,{loading:d,data:w,displayField:"name",valueField:"id",form:r,name:"attendance_policy_id",title:"Attendance Policy",className:"w-[460px]"})}),e.jsx("div",{className:"w-full",children:e.jsx(u,{loading:p,data:E,displayField:"first_name",valueField:"id",form:r,name:"employee_id",title:"Employee",className:"w-[460px]"})}),e.jsx(R,{control:r.control,name:"effective_date",render:()=>e.jsxs(z,{children:[e.jsx($,{children:"Effective Date"}),e.jsxs(U,{open:i,onOpenChange:l,children:[e.jsx(G,{asChild:!0,className:"",children:e.jsxs(g,{variant:"outline",className:`w-full justify-start text-left font-normal ${!t&&"text-muted-foreground"}`,children:[t?P(t,"PP"):"Pick a date",e.jsx(H,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(Q,{className:"w-auto p-0",align:"start",children:e.jsx(B,{mode:"single",selected:t??void 0,onSelect:M,initialFocus:!0})})]})]})})]}),e.jsx("div",{className:"text-right",children:e.jsx(g,{variant:"default",type:"submit",className:"w-fit mt-4",children:a?"Update":"Add"})})]})})})}function ce({data:s}){const[a,t]=m.useState(!1),[c,i]=m.useState(!1),[l,{isLoading:o}]=te(),d=async n=>{try{await l(n),_.success("Employee Attendance Policy deleted successfully"),t(!1)}catch(p){console.log(p)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(A,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>i(!0),children:e.jsx(V,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Update Attendance Policy"})})]})}),e.jsx(y,{children:e.jsx(h,{children:e.jsx(f,{children:e.jsx("p",{children:"Delete Attendance Policy"})})})}),e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(A,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(J,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Delete Attendance Policy"})})]})}),e.jsx(q,{title:"Are you sure?",description:"This action cannot be undone.",name:s.attendance_policy.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>d(s.id),loading:o}),c&&e.jsx(C,{title:"Update Employee Attendance Policy",isOpen:c,toggleModal:()=>i(!1),children:e.jsx(F,{data:s,modalClose:()=>i(!1)})})]})}const ie=[{id:"select",header:({table:s})=>e.jsx(S,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(S,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"effective_date",header:"Effective Date"},{header:"Policy Name",cell:({row:s})=>s.original.attendance_policy.name},{accessorKey:"",header:"Employee Name",cell:({row:s})=>s.original.employee.first_name+" "+s.original.employee.last_name},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(ce,{data:s.original})}],me=()=>{const[s,a]=m.useState(!1),[t,c]=W.useState({pageIndex:0,pageSize:10}),i=X(),{data:l,isLoading:o}=le(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),d=(l==null?void 0:l.data)||[];console.log(d);const n=l==null?void 0:l.meta;return o?e.jsx(N,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Y,{title:"Manage Employee Attendance Policy",description:"Manage job apply for you business"}),e.jsxs(g,{onClick:()=>i("/hrm/employees-list"),size:"sm",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"})," Add Employee Attendance Policy"]})]}),e.jsx(D,{}),d&&e.jsx("div",{children:e.jsx(ee,{columns:ie,data:d,paginationInfo:n,pagination:n&&t,setPagination:n&&c})})]})}),s&&e.jsx(C,{title:"Add Leave Type",isOpen:s,toggleModal:()=>a(!1),className:"",children:e.jsx(F,{modalClose:()=>a(!1)})})]})};export{me as default};
