<<<<<<<< HEAD:dist/assets/index-8360fe70.js
import{z as m,r as z,dP as f,a as e,az as l,aA as d,aB as g,aC as h,W as c,aD as y,aE as x,aF as v,aG as C,aw as S,aI as j,R as b,dQ as N,av as O,aK as w,aL as A,aM as P,aN as T}from"./index-e481e15b.js";function k({data:a}){const n=m(),[t,s]=z.useState(!1),[o,{isLoading:i}]=f(),r=async p=>{try{await o(p),S.success("Organization deleted successfully"),s(!1)}catch(u){console.log(u)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(l,{roles:["organizations.edit"],children:e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/web/organizations/edit/${a.id}`),children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Organization"})})]})})}),e.jsx(l,{roles:["organizations.delete"],children:e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{s(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Organization"})})]})})}),e.jsx(C,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:t,onClose:()=>s(!1),onConfirm:()=>r(a.id),loading:i})]})}const R=[{id:"select",header:({table:a})=>e.jsx(j,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(j,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Organization name"},{accessorKey:"title",header:"Organization Title"},{accessorKey:"phone",header:"Phone"},{accessorKey:"address",header:"Address"},{accessorKey:"website",header:"Website"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(k,{data:a.original})}],K=()=>{const a=m(),[n,t]=b.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:o}=N(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),i=(s==null?void 0:s.data)||[],r=s==null?void 0:s.meta;return o?e.jsx(O,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(w,{title:"Organization",description:"Manage organization for you business"}),e.jsx(l,{roles:["organizations.create"],children:e.jsxs(c,{onClick:()=>a("/web/organizations/add"),size:"sm",children:[e.jsx(A,{className:"mr-2 h-4 w-4"})," Add Organization"]})})]}),e.jsx(P,{}),i&&e.jsx("div",{children:e.jsx(T,{columns:R,data:i,paginationInfo:r,pagination:n,setPagination:t})})]})})})};export{K as default};
========
import{z as m,r as z,dP as f,a as e,az as l,aA as d,aB as g,aC as h,W as c,aD as y,aE as x,aF as v,aG as C,aw as S,aI as j,R as b,dQ as N,av as O,aK as w,aL as A,aM as P,aN as T}from"./index-49b05597.js";function k({data:a}){const n=m(),[t,s]=z.useState(!1),[o,{isLoading:i}]=f(),r=async p=>{try{await o(p),S.success("Organization deleted successfully"),s(!1)}catch(u){console.log(u)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(l,{roles:["organizations.edit"],children:e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/web/organizations/edit/${a.id}`),children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Organization"})})]})})}),e.jsx(l,{roles:["organizations.delete"],children:e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{s(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Organization"})})]})})}),e.jsx(C,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:t,onClose:()=>s(!1),onConfirm:()=>r(a.id),loading:i})]})}const R=[{id:"select",header:({table:a})=>e.jsx(j,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(j,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Organization name"},{accessorKey:"title",header:"Organization Title"},{accessorKey:"phone",header:"Phone"},{accessorKey:"address",header:"Address"},{accessorKey:"website",header:"Website"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(k,{data:a.original})}],K=()=>{const a=m(),[n,t]=b.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:o}=N(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),i=(s==null?void 0:s.data)||[],r=s==null?void 0:s.meta;return o?e.jsx(O,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(w,{title:"Organization",description:"Manage organization for you business"}),e.jsx(l,{roles:["organizations.create"],children:e.jsxs(c,{onClick:()=>a("/web/organizations/add"),size:"sm",children:[e.jsx(A,{className:"mr-2 h-4 w-4"})," Add Organization"]})})]}),e.jsx(P,{}),i&&e.jsx("div",{children:e.jsx(T,{columns:R,data:i,paginationInfo:r,pagination:n,setPagination:t})})]})})})};export{K as default};
>>>>>>>> main:dist/assets/index-72513ac5.js
