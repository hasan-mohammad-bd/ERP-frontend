import{a as e,V as k,Y as F,Z as o,_ as r,$ as c,ai as _,a0 as i,aj as C,ak as N,al as A,am as j,a1 as d,I as g,B as x,r as m,a4 as y,a5 as f,a6 as v,a7 as I,a8 as S,a9 as O,aa as E,ab as b,a3 as T,ac as P,R as J,X as q,ad as z,t as K,ae as V,af as U}from"./index-4339fb38.js";import{u as Z,a as $}from"./index-bcd323d5.js";import{Z as B}from"./zoom-in-56ab2ece.js";const H=({data:a})=>e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("p",{className:"font-semibold",children:"Status:"}),e.jsx("div",{children:a.policy_name})]})});function w({modalClose:a,data:t}){const l=k({defaultValues:{policy_name:"",in_time:"",working_hours:"",delay_buffer:"",ex_delay_buffer:"",break_time:"",effect_from:""}});async function n(s){console.log("Form Submitted:",s),a()}return e.jsx(e.Fragment,{children:e.jsx(F,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(n),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1",children:[e.jsx(o,{control:l.control,name:"employee_id",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"Attendance Policy"}),e.jsxs(_,{onValueChange:s.onChange,children:[e.jsx(i,{children:e.jsx(C,{children:e.jsx(N,{placeholder:"Select Attendance Policy"})})}),e.jsxs(A,{children:[e.jsx(j,{value:"1",children:"Employee_1"}),e.jsx(j,{value:"2",children:"Employee_2"})]})]}),e.jsx(d,{})]})}),e.jsx(o,{control:l.control,name:"employee_id",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"Leave Type"}),e.jsxs(_,{onValueChange:s.onChange,children:[e.jsx(i,{children:e.jsx(C,{children:e.jsx(N,{placeholder:"Select Attendance Policy"})})}),e.jsxs(A,{children:[e.jsx(j,{value:"1",children:"Leave type_1"}),e.jsx(j,{value:"2",children:"Leave type_2"})]})]}),e.jsx(d,{})]})}),e.jsx(o,{control:l.control,name:"start_date",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(i,{children:e.jsx(g,{type:"date",className:"",...s})}),e.jsx(d,{})]})}),e.jsx(o,{control:l.control,name:"end_date",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"End Date"}),e.jsx(i,{children:e.jsx(g,{type:"date",className:"",...s})}),e.jsx(d,{})]})}),e.jsx(o,{control:l.control,name:"purpose",render:({field:s})=>e.jsxs(r,{children:[e.jsx(c,{children:"Purpose"}),e.jsx(i,{children:e.jsx(g,{className:"",placeholder:"Enter purpose",...s})}),e.jsx(d,{})]})})]}),e.jsx("div",{className:"text-right",children:e.jsx(x,{variant:"default",type:"submit",className:"w-fit mt-4",children:t?"Update":"Add"})})]})})})}function G({data:a}){const[t,l]=m.useState(!1),[n,s]=m.useState(!1),[p,h]=m.useState(!1),[u,{isLoading:L}]=Z(),D=async M=>{try{await u(M),T.success("Job deleted successfully"),l(!1)}catch(R){console.log(R)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(f,{children:[e.jsx(v,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(!0),children:e.jsx(I,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(y,{children:e.jsxs(f,{children:[e.jsx(v,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{h(!0)},children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(y,{children:e.jsxs(f,{children:[e.jsx(v,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(S,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(E,{title:"Are you sure?",description:"This action cannot be undone.",name:a.policy_name,isOpen:t,onClose:()=>l(!1),onConfirm:()=>D(a.id),loading:L}),e.jsx(b,{title:"Update Job",isOpen:n,toggleModal:()=>s(!1),className:"w-[90%] max-w-6xl",children:e.jsx(w,{data:a,modalClose:()=>s(!1)})}),e.jsx(b,{title:"Job Details",isOpen:p,toggleModal:()=>h(!1),className:"w-[90%] max-w-6xl",children:e.jsx(H,{data:a})})]})}const Q=[{id:"select",header:({table:a})=>e.jsx(P,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:t=>a.toggleAllPageRowsSelected(!!t),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(P,{checked:a.getIsSelected(),onCheckedChange:t=>a.toggleSelected(!!t),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"date",header:"Date"},{accessorKey:"name",header:"Employee name"},{accessorKey:"leave_type",header:"Leave type"},{accessorKey:"start_date",header:"Start Date"},{accessorKey:"end_date",header:"End Date"},{accessorKey:"status",header:"Status"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],X=[{date:"2022-01-01",id:1,employee_id:1,name:"Employee 1",leave_type:"CL",start_date:"2022-01-01",end_date:"2022-01-01",status:"Pending"},{date:"2022-01-01",id:2,employee_id:1,name:"Employee 1",leave_type:"CL",start_date:"2022-01-01",end_date:"2022-01-01",status:"Pending"}],se=()=>{const[a,t]=m.useState(!1),[l,n]=J.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:p}=$(`per_page=${l.pageSize}&page=${l.pageIndex+1}`),h=(s==null?void 0:s.data)||[],u=s==null?void 0:s.meta;return p?e.jsx(q,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Leave Request",description:"Manage job apply for you business"}),e.jsxs(x,{onClick:()=>t(!0),size:"sm",children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," Add Leave Request"]})]}),e.jsx(V,{}),h&&e.jsx("div",{children:e.jsx(U,{columns:Q,data:X,paginationInfo:u,pagination:l,setPagination:n})})]})}),e.jsx(b,{title:"Add Leave Request",isOpen:a,toggleModal:()=>t(!1),className:"",children:e.jsx(w,{modalClose:()=>t(!1)})})]})};export{se as default};
