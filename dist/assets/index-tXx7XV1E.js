import{b6 as F,b7 as P,N as k,Q as L,k as e,S as w,T as O,U as u,V as j,W as m,X as g,I as b,Y as p,ae as R,af as E,ag as U,ah as z,ai as i,B as x,b8 as V,a0 as f,r as S,b9 as $,a1 as y,a2 as C,a3 as A,a4 as K,a5 as N,a6 as B,a7 as H,a8 as M,R as Q,ba as Y,a9 as G,P as W,aa as X,ab as _}from"./index-Dd8XAAu7.js";import{M as I}from"./modal-Co1IIh7u.js";import"./sheet-DFIQMRKP.js";function T({modalClose:n,rowData:s}){const[c,{isLoading:o}]=F(),[a,{isLoading:r}]=P(),t=k({resolver:L(V),defaultValues:{name:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||"",type:(s==null?void 0:s.type)||"None"}});async function d(l){try{s?(await a({subAccountId:s.id,updatedSubAccount:l}),f.success("Contact updated successfully"),n()):(await c(l),f.success("Contact created successfully"),n())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:o||r?e.jsx("div",{className:"h-56",children:e.jsx(w,{})}):e.jsx(O,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(u,{control:t.control,name:"name",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Name"}),e.jsx(g,{children:e.jsx(b,{placeholder:"Enter name",...l})}),e.jsx(p,{})]})}),e.jsx(u,{control:t.control,name:"phone",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Phone"}),e.jsx(g,{children:e.jsx(b,{type:"text",placeholder:"Enter phone number",...l})}),e.jsx(p,{})]})}),e.jsx(u,{control:t.control,name:"type",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Sub Type"}),e.jsxs(R,{onValueChange:l.onChange,defaultValue:(s==null?void 0:s.type)||"None",children:[e.jsx(g,{children:e.jsx(E,{children:e.jsx(U,{placeholder:""})})}),e.jsxs(z,{children:[e.jsx(i,{value:"None",children:"None"}),e.jsx(i,{value:"Employee",children:"Employee"}),e.jsx(i,{value:"Customer",children:"Customer"}),e.jsx(i,{value:"Supplier",children:"Supplier"}),e.jsx(i,{value:"Agent",children:"Agent"})]})]}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(x,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function q({rowData:n}){const[s,c]=S.useState(!1),[o,a]=S.useState(!1),[r,{isLoading:t}]=$(),d=async l=>{try{await r(l),f.success("Contact deleted successfully"),c(!1)}catch(h){console.log(h)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(C,{children:[e.jsx(A,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(K,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Contact"})})]})}),e.jsx(y,{children:e.jsxs(C,{children:[e.jsx(A,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Contact"})})]})}),e.jsx(H,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>c(!1),onConfirm:()=>d(n.id),loading:t}),e.jsx(I,{title:"Update Contact",isOpen:o,toggleModal:()=>a(!1),children:e.jsx(T,{rowData:n,modalClose:()=>a(!1)})})]})}const J=[{id:"select",header:({table:n})=>e.jsx(M,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(M,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Contact Name"},{accessorKey:"phone",header:"Phone"},{accessorKey:"type",header:"Type"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(q,{rowData:n.original})}],ee=()=>{const[n,s]=S.useState(!1),[c,o]=Q.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:r}=Y(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),t=(a==null?void 0:a.data)||[],d=a==null?void 0:a.meta;return r?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(G,{title:"Contact",description:"Manage your sub accounts for you business"}),e.jsxs(x,{onClick:()=>s(!0),size:"sm",children:[e.jsx(W,{className:"mr-2 h-4 w-4"})," Add Contact"]})]}),e.jsx(X,{}),t&&e.jsx("div",{children:e.jsx(_,{columns:J,data:t,paginationInfo:d,pagination:c,setPagination:o})})]})}),e.jsx(I,{title:"Add Contact",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(T,{modalClose:()=>s(!1)})})]})};export{ee as default};
