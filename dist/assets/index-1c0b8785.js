<<<<<<<< HEAD:dist/assets/index-b3d9b11d.js
import{aA as j,r as m,c1 as f,a as e,a5 as c,a6 as d,a7 as g,B as l,a8 as z,a9 as h,aa as y,ab as b,a3 as v,ad as x,R as C,c2 as S,Y as O,ae as N,t as w,af as A,ag as T}from"./index-2c05d2d2.js";function k({data:a}){const n=j(),[t,s]=m.useState(!1),[o,{isLoading:i}]=f(),r=async p=>{try{await o(p),v.success("Organization deleted successfully"),s(!1)}catch(u){console.log(u)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(g,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/web/organizations/edit/${a.id}`),children:e.jsx(z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Update Organization"})})]})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(g,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{s(!0)},children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Delete Organization"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:t,onClose:()=>s(!1),onConfirm:()=>r(a.id),loading:i})]})}const P=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Organization name"},{accessorKey:"title",header:"Organization Title"},{accessorKey:"phone",header:"Phone"},{accessorKey:"address",header:"Address"},{accessorKey:"website",header:"Website"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(k,{data:a.original})}],I=()=>{const a=j(),[n,t]=C.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:o}=S(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),i=(s==null?void 0:s.data)||[],r=s==null?void 0:s.meta;return o?e.jsx(O,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(N,{title:"Organization",description:"Manage organization for you business"}),e.jsxs(l,{onClick:()=>a("/web/organizations/add"),size:"sm",children:[e.jsx(w,{className:"mr-2 h-4 w-4"})," Add Organization"]})]}),e.jsx(A,{}),i&&e.jsx("div",{children:e.jsx(T,{columns:P,data:i,paginationInfo:r,pagination:n,setPagination:t})})]})})})};export{I as default};
========
import{aA as j,r as m,c1 as f,a as e,a5 as c,a6 as d,a7 as g,B as l,a8 as z,a9 as h,aa as y,ab as b,a3 as v,ad as x,R as C,c2 as S,Y as O,ae as N,t as w,af as A,ag as T}from"./index-3e1b8bd0.js";function k({data:a}){const n=j(),[t,s]=m.useState(!1),[o,{isLoading:i}]=f(),r=async p=>{try{await o(p),v.success("Organization deleted successfully"),s(!1)}catch(u){console.log(u)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(g,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/web/organizations/edit/${a.id}`),children:e.jsx(z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Update Organization"})})]})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(g,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{s(!0)},children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Delete Organization"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:t,onClose:()=>s(!1),onConfirm:()=>r(a.id),loading:i})]})}const P=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Organization name"},{accessorKey:"title",header:"Organization Title"},{accessorKey:"phone",header:"Phone"},{accessorKey:"address",header:"Address"},{accessorKey:"website",header:"Website"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(k,{data:a.original})}],I=()=>{const a=j(),[n,t]=C.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:o}=S(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),i=(s==null?void 0:s.data)||[],r=s==null?void 0:s.meta;return o?e.jsx(O,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(N,{title:"Organization",description:"Manage organization for you business"}),e.jsxs(l,{onClick:()=>a("/web/organizations/add"),size:"sm",children:[e.jsx(w,{className:"mr-2 h-4 w-4"})," Add Organization"]})]}),e.jsx(A,{}),i&&e.jsx("div",{children:e.jsx(T,{columns:P,data:i,paginationInfo:r,pagination:n,setPagination:t})})]})})})};export{I as default};
>>>>>>>> main:dist/assets/index-1c0b8785.js
