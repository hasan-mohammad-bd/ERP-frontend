import{bf as I,bg as T,Z as P,a0 as L,k as e,a1 as F,a2 as O,a3 as j,a4 as m,a5 as g,a6 as p,I as S,a7 as f,ao as R,ap as v,aq as E,ar as V,as as u,M as x,bh as z,a9 as b,r as y,bi as K,aa as C,ab as A,ac as N,ad as U,ae as M,af as _,ag as $,ah as k,ai as o,R as H,bj as Y,aj as q,P as B,ak as G,al as Q}from"./index-B5CpFNOn.js";function w({modalClose:a,rowData:s}){const[c,{isLoading:r}]=I(),[n,{isLoading:d}]=T(),l=P({resolver:L(z),defaultValues:{name:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||"",type:(s==null?void 0:s.type)||"None"}});async function i(t){try{s?(await n({subAccountId:s.id,updatedSubAccount:t}),b.success("Contact updated successfully"),a()):(await c(t),b.success("Contact created successfully"),a())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:r||d?e.jsx("div",{className:"h-56",children:e.jsx(F,{})}):e.jsx(O,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(i),className:"w-full space-y-3",children:[e.jsx(j,{control:l.control,name:"name",render:({field:t})=>e.jsxs(m,{children:[e.jsx(g,{children:"Name"}),e.jsx(p,{children:e.jsx(S,{placeholder:"Enter name",...t})}),e.jsx(f,{})]})}),e.jsx(j,{control:l.control,name:"phone",render:({field:t})=>e.jsxs(m,{children:[e.jsx(g,{children:"Phone"}),e.jsx(p,{children:e.jsx(S,{type:"text",placeholder:"Enter Financial Start Date",...t})}),e.jsx(f,{})]})}),e.jsx(j,{control:l.control,name:"type",render:({field:t})=>e.jsxs(m,{children:[e.jsx(g,{children:"Sub Type"}),e.jsxs(R,{onValueChange:t.onChange,defaultValue:(s==null?void 0:s.type)||"None",children:[e.jsx(p,{children:e.jsx(v,{children:e.jsx(E,{placeholder:""})})}),e.jsxs(V,{children:[e.jsx(u,{value:"None",children:"None"}),e.jsx(u,{value:"Employee",children:"Employee"}),e.jsx(u,{value:"Customer",children:"Customer"}),e.jsx(u,{value:"Supplier",children:"Supplier"}),e.jsx(u,{value:"Agent",children:"Agent"})]})]}),e.jsx(f,{})]})}),e.jsx("div",{children:e.jsx(x,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function Z({rowData:a}){const[s,c]=y.useState(!1),[r,n]=y.useState(!1),[d,{isLoading:l}]=K(),i=async t=>{try{await d(t),b.success("Contact deleted successfully"),c(!1)}catch(h){console.log(h)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(C,{children:e.jsxs(A,{children:[e.jsx(N,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(U,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Update Contact"})})]})}),e.jsx(C,{children:e.jsxs(A,{children:[e.jsx(N,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(_,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Delete Contact"})})]})}),e.jsx($,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>c(!1),onConfirm:()=>i(a.id),loading:l}),e.jsx(k,{title:"Update Contact",isOpen:r,toggleModal:()=>n(!1),children:e.jsx(w,{rowData:a,modalClose:()=>n(!1)})})]})}const J=[{id:"select",header:({table:a})=>e.jsx(o,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(o,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Financial Year Name"},{accessorKey:"phone",header:"Phone"},{accessorKey:"type",header:"Type"},{accessorKey:"is_active",header:"Active",cell:({row:a})=>a.getValue("is_active")===1?e.jsx(o,{"aria-readonly":!0,checked:!0,"aria-label":"Active",className:"translate-y-[2px]"}):e.jsx(o,{disabled:!0,"aria-label":"Active",className:"translate-y-[2px]"})},{accessorKey:"is_closed",header:"Closed",cell:({row:a})=>a.getValue("is_closed")===1?e.jsx(o,{"aria-readonly":!0,checked:!0,"aria-label":"Closed",className:"translate-y-[2px]"}):e.jsx(o,{disabled:!0,"aria-label":"Closed",className:"translate-y-[2px]"})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(Z,{rowData:a.original})}],X=()=>{const[a,s]=y.useState(!1),[c,r]=H.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:d}=Y(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),l=(n==null?void 0:n.data)||[],i=n==null?void 0:n.meta;return d?e.jsx(F,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(q,{title:"Contact",description:"Manage your sub accounts for you business"}),e.jsxs(x,{onClick:()=>s(!0),size:"sm",children:[e.jsx(B,{className:"mr-2 h-4 w-4"})," Add Contact"]})]}),e.jsx(G,{}),l&&e.jsx("div",{children:e.jsx(Q,{columns:J,data:l,paginationInfo:i,pagination:c,setPagination:r})})]})}),e.jsx(k,{title:"Add Contact",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(w,{modalClose:()=>s(!1)})})]})};export{X as default};
