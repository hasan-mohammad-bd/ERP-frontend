import{cZ as L,c_ as O,E as P,G as k,c$ as E,a as e,aw as I,J as R,K as h,N as j,Q as m,V as g,I as C,W as p,b3 as z,b4 as U,b5 as V,b6 as K,b8 as i,X as u,ax as f,r as b,d0 as G,aA as S,aB as y,aC as A,aD as N,aE as H,aF as M,aG as J,aH as $,aI as F,aJ as w,R as B,d1 as Q,aL as _,aM as W,aN as X,aO as Y}from"./index-e27e2e71.js";function T({modalClose:n,rowData:s}){const[t,{isLoading:o}]=L(),[a,{isLoading:r}]=O(),c=P({resolver:k(E),defaultValues:{name:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||"",type:(s==null?void 0:s.type)||"None"}});async function d(l){try{s?(await a({subAccountId:s.id,updatedSubAccount:l}),f.success("Contact updated successfully"),n()):(await t(l),f.success("Contact created successfully"),n())}catch(x){console.log(x)}}return e.jsx(e.Fragment,{children:o||r?e.jsx("div",{className:"h-56",children:e.jsx(I,{})}):e.jsx(R,{...c,children:e.jsxs("form",{onSubmit:c.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(h,{control:c.control,name:"name",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Name"}),e.jsx(g,{children:e.jsx(C,{placeholder:"Enter name",...l})}),e.jsx(p,{})]})}),e.jsx(h,{control:c.control,name:"phone",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Phone"}),e.jsx(g,{children:e.jsx(C,{type:"text",placeholder:"Enter phone number",...l})}),e.jsx(p,{})]})}),e.jsx(h,{control:c.control,name:"type",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Sub Type"}),e.jsxs(z,{onValueChange:l.onChange,defaultValue:(s==null?void 0:s.type)||"None",children:[e.jsx(g,{children:e.jsx(U,{children:e.jsx(V,{placeholder:""})})}),e.jsxs(K,{children:[e.jsx(i,{value:"None",children:"None"}),e.jsx(i,{value:"Employee",children:"Employee"}),e.jsx(i,{value:"Customer",children:"Customer"}),e.jsx(i,{value:"Supplier",children:"Supplier"}),e.jsx(i,{value:"Agent",children:"Agent"})]})]}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(u,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function Z({rowData:n}){const[s,t]=b.useState(!1),[o,a]=b.useState(!1),[r,{isLoading:c}]=G(),d=async l=>{try{await r(l),f.success("Contact deleted successfully"),t(!1)}catch(x){console.log(x)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(S,{roles:["sub-accounts.edit"],children:e.jsx(y,{children:e.jsxs(A,{children:[e.jsx(N,{asChild:!0,children:e.jsx(u,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(H,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Update Contact"})})]})})}),e.jsx(S,{roles:["sub-accounts.delete"],children:e.jsx(y,{children:e.jsxs(A,{children:[e.jsx(N,{asChild:!0,children:e.jsx(u,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(J,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Delete Contact"})})]})})}),e.jsx($,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>d(n.id),loading:c}),e.jsx(F,{title:"Update Contact",isOpen:o,toggleModal:()=>a(!1),children:e.jsx(T,{rowData:n,modalClose:()=>a(!1)})})]})}const q=[{id:"select",header:({table:n})=>e.jsx(w,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(w,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Contact Name"},{accessorKey:"phone",header:"Phone"},{accessorKey:"type",header:"Type"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(Z,{rowData:n.original})}],D=()=>{const[n,s]=b.useState(!1),[t,o]=B.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:r}=Q(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),c=(a==null?void 0:a.data)||[],d=a==null?void 0:a.meta;return r?e.jsx(I,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(_,{title:"Contact",description:"Manage your sub accounts for you business"}),e.jsx(S,{roles:["sub-accounts.create"],children:e.jsxs(u,{onClick:()=>s(!0),size:"sm",children:[e.jsx(W,{className:"mr-2 h-4 w-4"})," Add Contact"]})})]}),e.jsx(X,{}),c&&e.jsx("div",{children:e.jsx(Y,{columns:q,data:c,paginationInfo:d,pagination:t,setPagination:o})})]})}),e.jsx(F,{title:"Add Contact",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(T,{modalClose:()=>s(!1)})})]})};export{D as default};
