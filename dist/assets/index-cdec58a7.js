<<<<<<<< HEAD:dist/assets/index-d3799c53.js
import{V as M,W as P,a as e,Y as b,Z as k,_ as h,$ as x,a0 as m,a1 as j,I as L,a2 as N,B as g,a3 as f,a4 as A,r as v,a5 as p,a6 as y,a7 as T,a8 as F,a9 as u,aa as I,ab as O,ac as w,ad as C,R,ae as U,t as z,af as E,ag as K}from"./index-2c05d2d2.js";import{S}from"./switch-78ffba02.js";import{b as Y,c as $,d as B,e as H,u as V}from"./index-16d0d2f6.js";function _({modalClose:a,data:s}){const[t,{isLoading:d}]=Y(),[l,{isLoading:i}]=$(),c=M({resolver:P(B),defaultValues:{name:(s==null?void 0:s.name)||"",short_code:(s==null?void 0:s.short_code)||"",maternity_leave:(s==null?void 0:s.maternity_leave)||0,unpaid_leave:(s==null?void 0:s.unpaid_leave)||0}});async function o(n){try{s?(await l({leaveTypeId:s.id,updatedLeaveType:n}).unwrap(),f.success("Policy updated successfully"),a()):(await t(n).unwrap(),f.success("Policy created successfully"),a())}catch(r){console.log(r),A(r)}}return e.jsx(e.Fragment,{children:d||i?e.jsx("div",{children:e.jsx(b,{})}):e.jsx(k,{...c,children:e.jsxs("form",{onSubmit:c.handleSubmit(o),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1",children:[e.jsx(h,{control:c.control,name:"name",render:({field:n})=>e.jsxs(x,{children:[e.jsx(m,{children:"Leave Name"}),e.jsx(j,{children:e.jsx(L,{className:"",placeholder:"Enter Leave Name",...n})}),e.jsx(N,{})]})}),e.jsx(h,{control:c.control,name:"short_code",render:({field:n})=>e.jsxs(x,{children:[e.jsx(m,{children:"Short Code"}),e.jsx(j,{children:e.jsx(L,{className:"",placeholder:"Enter Short Code",...n})}),e.jsx(N,{})]})})]}),e.jsx(h,{control:c.control,name:"maternity_leave",render:({field:n})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(m,{children:"Maternity Leave"})}),e.jsx(j,{children:e.jsx(S,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:r=>n.onChange(r?1:0)})})]})}),e.jsx(h,{control:c.control,name:"unpaid_leave",render:({field:n})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(m,{children:"Unpaid Leave"})}),e.jsx(j,{children:e.jsx(S,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:r=>n.onChange(r?1:0)})})]})}),e.jsx("div",{className:"text-right",children:e.jsx(g,{variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function G({data:a}){const[s,t]=v.useState(!1),[d,l]=v.useState(!1),[i,{isLoading:c}]=H(),o=async n=>{try{await i(n),f.success("Leave Type deleted successfully"),t(!1)}catch(r){console.log(r)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(p,{children:e.jsxs(y,{children:[e.jsx(T,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(F,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Leave Type"})})]})}),e.jsx(p,{children:e.jsx(y,{children:e.jsx(u,{children:e.jsx("p",{children:"Delete Leave Type"})})})}),e.jsx(p,{children:e.jsxs(y,{children:[e.jsx(T,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(I,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Leave Type"})})]})}),e.jsx(O,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(a.id),loading:c}),d&&e.jsx(w,{title:"Update Leave Type",isOpen:d,toggleModal:()=>l(!1),children:e.jsx(_,{data:a,modalClose:()=>l(!1)})})]})}const J=[{id:"select",header:({table:a})=>e.jsx(C,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(C,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Leave name"},{accessorKey:"short_code",header:"Short code"},{accessorKey:"maternity_leave",header:"Maternity Leave",cell:({row:a})=>a.original.maternity_leave?"Yes":"No"},{accessorKey:"unpaid_leave",header:"Unpaid Leave",cell:({row:a})=>a.original.unpaid_leave?"Yes":"No"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],q=()=>{const[a,s]=v.useState(!1),[t,d]=R.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=V(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),c=(l==null?void 0:l.data)||[];console.log(c);const o=l==null?void 0:l.meta;return i?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Leave Type",description:"Manage job apply for you business"}),e.jsxs(g,{onClick:()=>s(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Leave Type"]})]}),e.jsx(E,{}),c&&e.jsx("div",{children:e.jsx(K,{columns:J,data:c,paginationInfo:o,pagination:o&&t,setPagination:o&&d})})]})}),a&&e.jsx(w,{title:"Add Leave Type",isOpen:a,toggleModal:()=>s(!1),className:"",children:e.jsx(_,{modalClose:()=>s(!1)})})]})};export{q as default};
========
import{V as M,W as P,a as e,Y as b,Z as k,_ as h,$ as x,a0 as m,a1 as j,I as L,a2 as N,B as g,a3 as f,a4 as A,r as v,a5 as p,a6 as y,a7 as T,a8 as F,a9 as u,aa as I,ab as O,ac as w,ad as C,R,ae as U,t as z,af as E,ag as K}from"./index-3e1b8bd0.js";import{S}from"./switch-104e17a8.js";import{b as Y,c as $,d as B,e as H,u as V}from"./index-b86dcec0.js";function _({modalClose:a,data:s}){const[t,{isLoading:d}]=Y(),[l,{isLoading:i}]=$(),c=M({resolver:P(B),defaultValues:{name:(s==null?void 0:s.name)||"",short_code:(s==null?void 0:s.short_code)||"",maternity_leave:(s==null?void 0:s.maternity_leave)||0,unpaid_leave:(s==null?void 0:s.unpaid_leave)||0}});async function o(n){try{s?(await l({leaveTypeId:s.id,updatedLeaveType:n}).unwrap(),f.success("Policy updated successfully"),a()):(await t(n).unwrap(),f.success("Policy created successfully"),a())}catch(r){console.log(r),A(r)}}return e.jsx(e.Fragment,{children:d||i?e.jsx("div",{children:e.jsx(b,{})}):e.jsx(k,{...c,children:e.jsxs("form",{onSubmit:c.handleSubmit(o),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1",children:[e.jsx(h,{control:c.control,name:"name",render:({field:n})=>e.jsxs(x,{children:[e.jsx(m,{children:"Leave Name"}),e.jsx(j,{children:e.jsx(L,{className:"",placeholder:"Enter Leave Name",...n})}),e.jsx(N,{})]})}),e.jsx(h,{control:c.control,name:"short_code",render:({field:n})=>e.jsxs(x,{children:[e.jsx(m,{children:"Short Code"}),e.jsx(j,{children:e.jsx(L,{className:"",placeholder:"Enter Short Code",...n})}),e.jsx(N,{})]})})]}),e.jsx(h,{control:c.control,name:"maternity_leave",render:({field:n})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(m,{children:"Maternity Leave"})}),e.jsx(j,{children:e.jsx(S,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:r=>n.onChange(r?1:0)})})]})}),e.jsx(h,{control:c.control,name:"unpaid_leave",render:({field:n})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(m,{children:"Unpaid Leave"})}),e.jsx(j,{children:e.jsx(S,{className:"!mt-0 ",checked:n.value===1,onCheckedChange:r=>n.onChange(r?1:0)})})]})}),e.jsx("div",{className:"text-right",children:e.jsx(g,{variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function G({data:a}){const[s,t]=v.useState(!1),[d,l]=v.useState(!1),[i,{isLoading:c}]=H(),o=async n=>{try{await i(n),f.success("Leave Type deleted successfully"),t(!1)}catch(r){console.log(r)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(p,{children:e.jsxs(y,{children:[e.jsx(T,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(F,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Leave Type"})})]})}),e.jsx(p,{children:e.jsx(y,{children:e.jsx(u,{children:e.jsx("p",{children:"Delete Leave Type"})})})}),e.jsx(p,{children:e.jsxs(y,{children:[e.jsx(T,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(I,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Leave Type"})})]})}),e.jsx(O,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(a.id),loading:c}),d&&e.jsx(w,{title:"Update Leave Type",isOpen:d,toggleModal:()=>l(!1),children:e.jsx(_,{data:a,modalClose:()=>l(!1)})})]})}const J=[{id:"select",header:({table:a})=>e.jsx(C,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(C,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Leave name"},{accessorKey:"short_code",header:"Short code"},{accessorKey:"maternity_leave",header:"Maternity Leave",cell:({row:a})=>a.original.maternity_leave?"Yes":"No"},{accessorKey:"unpaid_leave",header:"Unpaid Leave",cell:({row:a})=>a.original.unpaid_leave?"Yes":"No"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],q=()=>{const[a,s]=v.useState(!1),[t,d]=R.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=V(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),c=(l==null?void 0:l.data)||[];console.log(c);const o=l==null?void 0:l.meta;return i?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Leave Type",description:"Manage job apply for you business"}),e.jsxs(g,{onClick:()=>s(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Leave Type"]})]}),e.jsx(E,{}),c&&e.jsx("div",{children:e.jsx(K,{columns:J,data:c,paginationInfo:o,pagination:o&&t,setPagination:o&&d})})]})}),a&&e.jsx(w,{title:"Add Leave Type",isOpen:a,toggleModal:()=>s(!1),className:"",children:e.jsx(_,{modalClose:()=>s(!1)})})]})};export{q as default};
>>>>>>>> main:dist/assets/index-cdec58a7.js
