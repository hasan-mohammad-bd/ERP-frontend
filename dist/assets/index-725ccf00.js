<<<<<<<< HEAD:dist/assets/index-725ccf00.js
import{bF as N,bG as w,B as M,D as A,bd as F,a as e,ar as y,G as I,H as v,J as k,K as O,M as R,I as T,N as P,Q as d,as as x,at as z,r as h,bH as L,av as m,aw as j,ax as g,ay as p,az as E,aA as f,aB as H,aC as U,aD as b,aE as S,R as G,bI as B,aG as J,aH as K,aI as Q,aJ as $}from"./index-8b9ca140.js";function C({modalClose:s,data:a}){const[t,{isLoading:c}]=N(),[n,{isLoading:i}]=w(),l=M({resolver:A(F),defaultValues:{name:(a==null?void 0:a.name)||""}});async function r(o){try{a?(await n({sectionId:a.id,updatedSection:o}).unwrap(),x.success("Section updated successfully"),s()):(await t(o).unwrap(),x.success("Section created successfully"),s())}catch(u){console.log(u),z(u)}}return e.jsx(e.Fragment,{children:c||i?e.jsx("div",{className:"h-56",children:e.jsx(y,{})}):e.jsx(I,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(v,{control:l.control,name:"name",render:({field:o})=>e.jsxs(k,{children:[e.jsx(O,{children:"Name"}),e.jsx(R,{children:e.jsx(T,{placeholder:"Enter section name",...o})}),e.jsx(P,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function V({data:s}){const[a,t]=h.useState(!1),[c,n]=h.useState(!1),[i]=L(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(o){console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(m,{roles:["sections.edit"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(E,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(m,{roles:["sections.delete"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(H,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Delete Designation"})})]})})}),e.jsx(U,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>l(s.id),loading:!1}),c&&e.jsx(b,{title:"Update Section",isOpen:c,toggleModal:()=>n(!1),children:e.jsx(C,{data:s,modalClose:()=>n(!1)})})]})}const _=[{id:"select",header:({table:s})=>e.jsx(S,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(S,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(V,{data:s.original})}],D=()=>{const[s,a]=h.useState(!1),[t,c]=G.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=B(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return i?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Sections",description:"Manage sections for you business"}),e.jsx(m,{roles:["sections.create"],children:e.jsxs(d,{onClick:()=>a(!0),size:"sm",children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," Add Section"]})})]}),e.jsx(Q,{}),l&&e.jsx("div",{children:e.jsx($,{columns:_,data:l,paginationInfo:r,pagination:t,setPagination:c})})]})}),s&&e.jsx(b,{title:"Add Section",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(C,{modalClose:()=>a(!1)})})]})};export{D as default};
========
import{bF as N,bG as w,B as M,D as A,bd as F,a as e,ar as y,G as I,H as v,J as k,K as O,M as R,I as T,N as P,Q as d,as as x,at as z,r as h,bH as L,av as m,aw as j,ax as g,ay as p,az as E,aA as f,aB as H,aC as U,aD as b,aE as S,R as G,bI as B,aG as J,aH as K,aI as Q,aJ as $}from"./index-d9fd53dc.js";function C({modalClose:s,data:a}){const[t,{isLoading:c}]=N(),[n,{isLoading:i}]=w(),l=M({resolver:A(F),defaultValues:{name:(a==null?void 0:a.name)||""}});async function r(o){try{a?(await n({sectionId:a.id,updatedSection:o}).unwrap(),x.success("Section updated successfully"),s()):(await t(o).unwrap(),x.success("Section created successfully"),s())}catch(u){console.log(u),z(u)}}return e.jsx(e.Fragment,{children:c||i?e.jsx("div",{className:"h-56",children:e.jsx(y,{})}):e.jsx(I,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(v,{control:l.control,name:"name",render:({field:o})=>e.jsxs(k,{children:[e.jsx(O,{children:"Name"}),e.jsx(R,{children:e.jsx(T,{placeholder:"Enter section name",...o})}),e.jsx(P,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function V({data:s}){const[a,t]=h.useState(!1),[c,n]=h.useState(!1),[i]=L(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(o){console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(m,{roles:["sections.edit"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(E,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(m,{roles:["sections.delete"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(H,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Delete Designation"})})]})})}),e.jsx(U,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>l(s.id),loading:!1}),c&&e.jsx(b,{title:"Update Section",isOpen:c,toggleModal:()=>n(!1),children:e.jsx(C,{data:s,modalClose:()=>n(!1)})})]})}const _=[{id:"select",header:({table:s})=>e.jsx(S,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(S,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(V,{data:s.original})}],D=()=>{const[s,a]=h.useState(!1),[t,c]=G.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=B(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return i?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Sections",description:"Manage sections for you business"}),e.jsx(m,{roles:["sections.create"],children:e.jsxs(d,{onClick:()=>a(!0),size:"sm",children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," Add Section"]})})]}),e.jsx(Q,{}),l&&e.jsx("div",{children:e.jsx($,{columns:_,data:l,paginationInfo:r,pagination:t,setPagination:c})})]})}),s&&e.jsx(b,{title:"Add Section",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(C,{modalClose:()=>a(!1)})})]})};export{D as default};
>>>>>>>> main:dist/assets/index-d3f82f06.js
