import{bT as F,bU as k,Z as P,_ as L,bV as O,a as e,a0 as w,a1 as R,a2 as u,a3 as j,a4 as m,a5 as g,I as b,a6 as p,an as E,ao as U,ap as z,aq as V,ar as i,B as h,a7 as f,r as S,bW as K,a9 as y,aa as C,ab as A,ac as B,ad as N,ae as H,af as _,ag as I,ah as M,R as $,bX as q,ai as G,t as J,aj as Q,ak as W}from"./index-736d57d7.js";function T({modalClose:n,rowData:s}){const[c,{isLoading:o}]=F(),[a,{isLoading:r}]=k(),t=P({resolver:L(O),defaultValues:{name:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||"",type:(s==null?void 0:s.type)||"None"}});async function d(l){try{s?(await a({subAccountId:s.id,updatedSubAccount:l}),f.success("Contact updated successfully"),n()):(await c(l),f.success("Contact created successfully"),n())}catch(x){console.log(x)}}return e.jsx(e.Fragment,{children:o||r?e.jsx("div",{className:"h-56",children:e.jsx(w,{})}):e.jsx(R,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(u,{control:t.control,name:"name",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Name"}),e.jsx(g,{children:e.jsx(b,{placeholder:"Enter name",...l})}),e.jsx(p,{})]})}),e.jsx(u,{control:t.control,name:"phone",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Phone"}),e.jsx(g,{children:e.jsx(b,{type:"text",placeholder:"Enter phone number",...l})}),e.jsx(p,{})]})}),e.jsx(u,{control:t.control,name:"type",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Sub Type"}),e.jsxs(E,{onValueChange:l.onChange,defaultValue:(s==null?void 0:s.type)||"None",children:[e.jsx(g,{children:e.jsx(U,{children:e.jsx(z,{placeholder:""})})}),e.jsxs(V,{children:[e.jsx(i,{value:"None",children:"None"}),e.jsx(i,{value:"Employee",children:"Employee"}),e.jsx(i,{value:"Customer",children:"Customer"}),e.jsx(i,{value:"Supplier",children:"Supplier"}),e.jsx(i,{value:"Agent",children:"Agent"})]})]}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(h,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function X({rowData:n}){const[s,c]=S.useState(!1),[o,a]=S.useState(!1),[r,{isLoading:t}]=K(),d=async l=>{try{await r(l),f.success("Contact deleted successfully"),c(!1)}catch(x){console.log(x)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(C,{children:[e.jsx(A,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Contact"})})]})}),e.jsx(y,{children:e.jsxs(C,{children:[e.jsx(A,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(H,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Contact"})})]})}),e.jsx(_,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>c(!1),onConfirm:()=>d(n.id),loading:t}),e.jsx(I,{title:"Update Contact",isOpen:o,toggleModal:()=>a(!1),children:e.jsx(T,{rowData:n,modalClose:()=>a(!1)})})]})}const Y=[{id:"select",header:({table:n})=>e.jsx(M,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(M,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Contact Name"},{accessorKey:"phone",header:"Phone"},{accessorKey:"type",header:"Type"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(X,{rowData:n.original})}],v=()=>{const[n,s]=S.useState(!1),[c,o]=$.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:r}=q(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),t=(a==null?void 0:a.data)||[],d=a==null?void 0:a.meta;return r?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(G,{title:"Contact",description:"Manage your sub accounts for you business"}),e.jsxs(h,{onClick:()=>s(!0),size:"sm",children:[e.jsx(J,{className:"mr-2 h-4 w-4"})," Add Contact"]})]}),e.jsx(Q,{}),t&&e.jsx("div",{children:e.jsx(W,{columns:Y,data:t,paginationInfo:d,pagination:c,setPagination:o})})]})}),e.jsx(I,{title:"Add Contact",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(T,{modalClose:()=>s(!1)})})]})};export{v as default};
