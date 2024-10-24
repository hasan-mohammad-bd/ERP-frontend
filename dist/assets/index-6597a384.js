import{bI as A,bJ as k,Y as O,Z as T,b0 as P,a as e,$ as M,a0 as R,a1 as j,a2 as g,a3 as u,a4 as f,I as S,a5 as p,B as d,a6 as x,a7 as L,r as h,bK as v,a9 as b,aa as y,ab as C,ac as z,ad as N,ae as E,af as U,ag as F,ah as w,R as _,av as $,aj as B,t as H,ak as J,al as K}from"./index-08ea88e0.js";function I({modalClose:a,data:s}){const[t,{isLoading:o}]=A(),[n,{isLoading:i}]=k(),l=O({resolver:T(P),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function r(c){try{s?(await n({sectionId:s.id,updatedSection:c}).unwrap(),x.success("Section updated successfully"),a()):(await t(c).unwrap(),x.success("Section created successfully"),a())}catch(m){console.log(m),L(m)}}return e.jsx(e.Fragment,{children:o||i?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(R,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(j,{control:l.control,name:"name",render:({field:c})=>e.jsxs(g,{children:[e.jsx(u,{children:"Name"}),e.jsx(f,{children:e.jsx(S,{placeholder:"Enter section name",...c})}),e.jsx(p,{})]})}),e.jsx(j,{control:l.control,name:"sorting_index",render:({field:c})=>e.jsxs(g,{children:[e.jsx(u,{children:"Sorting"}),e.jsx(f,{children:e.jsx(S,{type:"number",placeholder:"Enter section sorting",...c})}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function G({data:a}){const[s,t]=h.useState(!1),[o,n]=h.useState(!1),[i]=v(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(c){console.log(c)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(b,{children:e.jsxs(y,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(E,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(U,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>l(a.id),loading:!1}),o&&e.jsx(F,{title:"Update Section",isOpen:o,toggleModal:()=>n(!1),children:e.jsx(I,{data:a,modalClose:()=>n(!1)})})]})}const Q=[{id:"select",header:({table:a})=>e.jsx(w,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(w,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],Y=()=>{const[a,s]=h.useState(!1),[t,o]=_.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=$(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return i?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(B,{title:"Sections",description:"Manage sections for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx(H,{className:"mr-2 h-4 w-4"})," Add Section"]})]}),e.jsx(J,{}),l&&e.jsx("div",{children:e.jsx(K,{columns:Q,data:l,paginationInfo:r,pagination:t,setPagination:o})})]})}),a&&e.jsx(F,{title:"Add Section",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(I,{modalClose:()=>s(!1)})})]})};export{Y as default};
