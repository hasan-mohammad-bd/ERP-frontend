<<<<<<<< HEAD:dist/assets/index-b2f1e995.js
import{bv as N,bw as w,z as M,B as F,b5 as A,a as e,am as y,F as v,E as I,G as k,H as O,J as R,I as T,K as z,M as d,an as x,ao as P,r as h,bx as L,aq as m,ar as j,as as g,at as p,au as E,av as f,aw as U,ax as B,ay as b,az as S,R as H,by as G,aB as J,t as K,aC as $,aD as q}from"./index-4b237266.js";function C({modalClose:s,data:a}){const[t,{isLoading:c}]=N(),[n,{isLoading:i}]=w(),l=M({resolver:F(A),defaultValues:{name:(a==null?void 0:a.name)||""}});async function r(o){try{a?(await n({sectionId:a.id,updatedSection:o}).unwrap(),x.success("Section updated successfully"),s()):(await t(o).unwrap(),x.success("Section created successfully"),s())}catch(u){console.log(u),P(u)}}return e.jsx(e.Fragment,{children:c||i?e.jsx("div",{className:"h-56",children:e.jsx(y,{})}):e.jsx(v,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(I,{control:l.control,name:"name",render:({field:o})=>e.jsxs(k,{children:[e.jsx(O,{children:"Name"}),e.jsx(R,{children:e.jsx(T,{placeholder:"Enter section name",...o})}),e.jsx(z,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function Q({data:s}){const[a,t]=h.useState(!1),[c,n]=h.useState(!1),[i]=L(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(o){console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(m,{roles:["sections.edit"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(E,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(m,{roles:["sections.delete"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(U,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Delete Designation"})})]})})}),e.jsx(B,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>l(s.id),loading:!1}),c&&e.jsx(b,{title:"Update Section",isOpen:c,toggleModal:()=>n(!1),children:e.jsx(C,{data:s,modalClose:()=>n(!1)})})]})}const V=[{id:"select",header:({table:s})=>e.jsx(S,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(S,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Q,{data:s.original})}],W=()=>{const[s,a]=h.useState(!1),[t,c]=H.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=G(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return i?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Sections",description:"Manage sections for you business"}),e.jsx(m,{roles:["sections.create"],children:e.jsxs(d,{onClick:()=>a(!0),size:"sm",children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," Add Section"]})})]}),e.jsx($,{}),l&&e.jsx("div",{children:e.jsx(q,{columns:V,data:l,paginationInfo:r,pagination:t,setPagination:c})})]})}),s&&e.jsx(b,{title:"Add Section",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(C,{modalClose:()=>a(!1)})})]})};export{W as default};
========
import{bv as N,bw as w,z as M,B as F,b5 as A,a as e,am as y,F as v,E as I,G as k,H as O,J as R,I as T,K as z,M as d,an as x,ao as P,r as h,bx as L,aq as m,ar as j,as as g,at as p,au as E,av as f,aw as U,ax as B,ay as b,az as S,R as H,by as G,aB as J,t as K,aC as $,aD as q}from"./index-945ff9a6.js";function C({modalClose:s,data:a}){const[t,{isLoading:c}]=N(),[n,{isLoading:i}]=w(),l=M({resolver:F(A),defaultValues:{name:(a==null?void 0:a.name)||""}});async function r(o){try{a?(await n({sectionId:a.id,updatedSection:o}).unwrap(),x.success("Section updated successfully"),s()):(await t(o).unwrap(),x.success("Section created successfully"),s())}catch(u){console.log(u),P(u)}}return e.jsx(e.Fragment,{children:c||i?e.jsx("div",{className:"h-56",children:e.jsx(y,{})}):e.jsx(v,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(I,{control:l.control,name:"name",render:({field:o})=>e.jsxs(k,{children:[e.jsx(O,{children:"Name"}),e.jsx(R,{children:e.jsx(T,{placeholder:"Enter section name",...o})}),e.jsx(z,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function Q({data:s}){const[a,t]=h.useState(!1),[c,n]=h.useState(!1),[i]=L(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(o){console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(m,{roles:["sections.edit"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(E,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(m,{roles:["sections.delete"],children:e.jsx(j,{children:e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(U,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Delete Designation"})})]})})}),e.jsx(B,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>l(s.id),loading:!1}),c&&e.jsx(b,{title:"Update Section",isOpen:c,toggleModal:()=>n(!1),children:e.jsx(C,{data:s,modalClose:()=>n(!1)})})]})}const V=[{id:"select",header:({table:s})=>e.jsx(S,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(S,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Q,{data:s.original})}],W=()=>{const[s,a]=h.useState(!1),[t,c]=H.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=G(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return i?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Sections",description:"Manage sections for you business"}),e.jsx(m,{roles:["sections.create"],children:e.jsxs(d,{onClick:()=>a(!0),size:"sm",children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," Add Section"]})})]}),e.jsx($,{}),l&&e.jsx("div",{children:e.jsx(q,{columns:V,data:l,paginationInfo:r,pagination:t,setPagination:c})})]})}),s&&e.jsx(b,{title:"Add Section",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(C,{modalClose:()=>a(!1)})})]})};export{W as default};
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/index-f8afa2d1.js
