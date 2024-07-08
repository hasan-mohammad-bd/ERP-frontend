import{Q as I,S as k,k as e,T as M,U as T,V as h,W as j,X as g,Y as u,I as f,Z as p,B as d,at as O,a1 as x,r as m,a2 as S,a3 as y,a4 as b,a5 as P,a6 as C,a7 as R,a8 as L,a9 as N,R as U,aa as z,P as $,ab as v,ac as E}from"./index-D1Przbk3.js";import{a as _,b as B,c as H,u as Q}from"./index-CauKO7rF.js";import{M as w}from"./modal-B74TOCyi.js";import"./sheet-BVwG7AbT.js";function A({modalClose:n,data:s}){const[t,{isLoading:o}]=_(),[a,{isLoading:i}]=B(),l=I({resolver:k(O),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function r(c){try{s?(await a({sectionId:s.id,updatedSection:c}),x.success("Section updated successfully"),n()):(await t(c),x.success("Section created successfully"),n())}catch(F){console.log(F)}}return e.jsx(e.Fragment,{children:o||i?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(T,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(h,{control:l.control,name:"name",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"Name"}),e.jsx(u,{children:e.jsx(f,{placeholder:"Enter section name",...c})}),e.jsx(p,{})]})}),e.jsx(h,{control:l.control,name:"sorting_index",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"Sorting"}),e.jsx(u,{children:e.jsx(f,{type:"number",placeholder:"Enter section sorting",...c})}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function V({data:n}){const[s,t]=m.useState(!1),[o,a]=m.useState(!1),[i]=H(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(c){console.log(c)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(S,{children:e.jsxs(y,{children:[e.jsx(b,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(S,{children:e.jsxs(y,{children:[e.jsx(b,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(R,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(L,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>l(n.id),loading:!1}),e.jsx(w,{title:"Update Section",isOpen:o,toggleModal:()=>a(!1),children:e.jsx(A,{data:n,modalClose:()=>a(!1)})})]})}const G=[{id:"select",header:({table:n})=>e.jsx(N,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(N,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(V,{data:n.original})}],Z=()=>{const[n,s]=m.useState(!1),[t,o]=U.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:i}=Q(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(a==null?void 0:a.data)||[],r=a==null?void 0:a.meta;return i?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Sections",description:"Manage sections for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx($,{className:"mr-2 h-4 w-4"})," Add Section"]})]}),e.jsx(v,{}),l&&e.jsx("div",{children:e.jsx(E,{columns:G,data:l,paginationInfo:r,pagination:t,setPagination:o})})]})}),e.jsx(w,{title:"Add Section",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(A,{modalClose:()=>s(!1)})})]})};export{Z as default};
