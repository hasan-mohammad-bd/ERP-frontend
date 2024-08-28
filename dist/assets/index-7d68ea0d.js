import{bn as T,bo as k,a7 as P,a8 as L,a as e,$ as M,a9 as O,aa as u,ab as j,ac as m,ad as g,I as b,ae as p,av as R,aw as z,ax as E,ay as U,az as i,B as x,bp as V,ag as f,r as S,bq as K,ah as y,ai as C,aj as A,ak as $,al as N,am as q,an as B,ao as I,ap as w,R as H,br as G,aq as J,t as Q,ar as Y,as as _}from"./index-6c9c37b6.js";function F({modalClose:n,rowData:s}){const[c,{isLoading:o}]=T(),[a,{isLoading:r}]=k(),t=P({resolver:L(V),defaultValues:{name:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||"",type:(s==null?void 0:s.type)||"None"}});async function d(l){try{s?(await a({subAccountId:s.id,updatedSubAccount:l}),f.success("Contact updated successfully"),n()):(await c(l),f.success("Contact created successfully"),n())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:o||r?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(O,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(u,{control:t.control,name:"name",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Name"}),e.jsx(g,{children:e.jsx(b,{placeholder:"Enter name",...l})}),e.jsx(p,{})]})}),e.jsx(u,{control:t.control,name:"phone",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Phone"}),e.jsx(g,{children:e.jsx(b,{type:"text",placeholder:"Enter phone number",...l})}),e.jsx(p,{})]})}),e.jsx(u,{control:t.control,name:"type",render:({field:l})=>e.jsxs(j,{children:[e.jsx(m,{children:"Sub Type"}),e.jsxs(R,{onValueChange:l.onChange,defaultValue:(s==null?void 0:s.type)||"None",children:[e.jsx(g,{children:e.jsx(z,{children:e.jsx(E,{placeholder:""})})}),e.jsxs(U,{children:[e.jsx(i,{value:"None",children:"None"}),e.jsx(i,{value:"Employee",children:"Employee"}),e.jsx(i,{value:"Customer",children:"Customer"}),e.jsx(i,{value:"Supplier",children:"Supplier"}),e.jsx(i,{value:"Agent",children:"Agent"})]})]}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(x,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function v({rowData:n}){const[s,c]=S.useState(!1),[o,a]=S.useState(!1),[r,{isLoading:t}]=K(),d=async l=>{try{await r(l),f.success("Contact deleted successfully"),c(!1)}catch(h){console.log(h)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(C,{children:[e.jsx(A,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx($,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Contact"})})]})}),e.jsx(y,{children:e.jsxs(C,{children:[e.jsx(A,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Contact"})})]})}),e.jsx(B,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>c(!1),onConfirm:()=>d(n.id),loading:t}),e.jsx(I,{title:"Update Contact",isOpen:o,toggleModal:()=>a(!1),children:e.jsx(F,{rowData:n,modalClose:()=>a(!1)})})]})}const W=[{id:"select",header:({table:n})=>e.jsx(w,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(w,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Contact Name"},{accessorKey:"phone",header:"Phone"},{accessorKey:"type",header:"Type"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(v,{rowData:n.original})}],Z=()=>{const[n,s]=S.useState(!1),[c,o]=H.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:r}=G(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),t=(a==null?void 0:a.data)||[],d=a==null?void 0:a.meta;return r?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Contact",description:"Manage your sub accounts for you business"}),e.jsxs(x,{onClick:()=>s(!0),size:"sm",children:[e.jsx(Q,{className:"mr-2 h-4 w-4"})," Add Contact"]})]}),e.jsx(Y,{}),t&&e.jsx("div",{children:e.jsx(_,{columns:W,data:t,paginationInfo:d,pagination:c,setPagination:o})})]})}),e.jsx(I,{title:"Add Contact",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{Z as default};
