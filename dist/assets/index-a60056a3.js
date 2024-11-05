import{y as _,z as k,a as e,aj as b,F as P,D as h,E as x,G as m,H as j,I as L,J as N,K as p,ak as f,al as A,r as v,ao as g,ap as y,aq as T,ar as F,as as u,at as I,au as O,av as w,aw as C,R as z,ay as R,az as U,aA as E,aB as K}from"./index-96aa6580.js";import{S}from"./switch-29481775.js";import{b as H}from"./leave-0aef664a.js";import{a as B,b as G,c as J,u as Y}from"./index-eb0b2921.js";function M({modalClose:a,data:s}){const[t,{isLoading:d}]=B(),[l,{isLoading:i}]=G(),c=_({resolver:k(H),defaultValues:{name:(s==null?void 0:s.name)||"",short_code:(s==null?void 0:s.short_code)||"",maternity_leave:(s==null?void 0:s.maternity_leave)||0,unpaid_leave:(s==null?void 0:s.unpaid_leave)||0}});async function o(n){try{s?(await l({leaveTypeId:s.id,updatedLeaveType:n}).unwrap(),f.success("Policy updated successfully"),a()):(await t(n).unwrap(),f.success("Policy created successfully"),a())}catch(r){console.log(r),A(r)}}return e.jsx(e.Fragment,{children:d||i?e.jsx("div",{children:e.jsx(b,{})}):e.jsx(P,{...c,children:e.jsxs("form",{onSubmit:c.handleSubmit(o),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1",children:[e.jsx(h,{control:c.control,name:"name",render:({field:n})=>e.jsxs(x,{children:[e.jsx(m,{children:"Leave Name"}),e.jsx(j,{children:e.jsx(L,{className:"",placeholder:"Enter Leave Name",...n})}),e.jsx(N,{})]})}),e.jsx(h,{control:c.control,name:"short_code",render:({field:n})=>e.jsxs(x,{children:[e.jsx(m,{children:"Short Code"}),e.jsx(j,{children:e.jsx(L,{className:"",placeholder:"Enter Short Code",...n})}),e.jsx(N,{})]})})]}),e.jsx(h,{control:c.control,name:"maternity_leave",render:({field:n})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(m,{children:"Maternity Leave"})}),e.jsx(j,{children:e.jsx(S,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:r=>n.onChange(r?1:0)})})]})}),e.jsx(h,{control:c.control,name:"unpaid_leave",render:({field:n})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(m,{children:"Unpaid Leave"})}),e.jsx(j,{children:e.jsx(S,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:r=>n.onChange(r?1:0)})})]})}),e.jsx("div",{className:"text-right",children:e.jsx(p,{variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function $({data:a}){const[s,t]=v.useState(!1),[d,l]=v.useState(!1),[i,{isLoading:c}]=J(),o=async n=>{try{await i(n),f.success("Leave Type deleted successfully"),t(!1)}catch(r){console.log(r)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(g,{children:e.jsxs(y,{children:[e.jsx(T,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(F,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Leave Type"})})]})}),e.jsx(g,{children:e.jsx(y,{children:e.jsx(u,{children:e.jsx("p",{children:"Delete Leave Type"})})})}),e.jsx(g,{children:e.jsxs(y,{children:[e.jsx(T,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(I,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Leave Type"})})]})}),e.jsx(O,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(a.id),loading:c}),d&&e.jsx(w,{title:"Update Leave Type",isOpen:d,toggleModal:()=>l(!1),children:e.jsx(M,{data:a,modalClose:()=>l(!1)})})]})}const q=[{id:"select",header:({table:a})=>e.jsx(C,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(C,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Leave name"},{accessorKey:"short_code",header:"Short code"},{accessorKey:"maternity_leave",header:"Maternity Leave",cell:({row:a})=>a.original.maternity_leave?"Yes":"No"},{accessorKey:"unpaid_leave",header:"Unpaid Leave",cell:({row:a})=>a.original.unpaid_leave?"Yes":"No"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx($,{data:a.original})}],Z=()=>{const[a,s]=v.useState(!1),[t,d]=z.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=Y(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),c=(l==null?void 0:l.data)||[];console.log(c);const o=l==null?void 0:l.meta;return i?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(R,{title:"Leave Type",description:"Manage job apply for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(U,{className:"mr-2 h-4 w-4"})," Add Leave Type"]})]}),e.jsx(E,{}),c&&e.jsx("div",{children:e.jsx(K,{columns:q,data:c,paginationInfo:o,pagination:o&&t,setPagination:o&&d})})]})}),a&&e.jsx(w,{title:"Add Leave Type",isOpen:a,toggleModal:()=>s(!1),className:"",children:e.jsx(M,{modalClose:()=>s(!1)})})]})};export{Z as default};
