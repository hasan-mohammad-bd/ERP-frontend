import{U as A,V as I,j as e,W as M,X as k,Y as h,Z as j,_ as u,$ as p,I as f,a0 as S,B as d,af as L,a2 as x,r as m,a3 as y,a4 as b,a5 as C,a6 as O,a7 as N,a8 as T,a9 as P,aa as w,ab as D,R,ac as U,s as z,ad as _,ae as v}from"./index-6fa63041.js";import{u as E,a as $,b as B,c as H}from"./index-e8b9d7e2.js";function F({modalClose:n,data:s}){const[t,{isLoading:o}]=E(),[a,{isLoading:c}]=$(),i=A({resolver:I(L),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function r(l){try{s?(await a({designationId:s.id,updatedDesignation:l}),x.success("Designation updated successfully"),n()):(await t(l),x.success("Designation created successfully"),n())}catch(g){console.log(g)}}return e.jsx(e.Fragment,{children:o||c?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(k,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(h,{control:i.control,name:"name",render:({field:l})=>e.jsxs(j,{children:[e.jsx(u,{children:"Name"}),e.jsx(p,{children:e.jsx(f,{placeholder:"Enter department name",...l})}),e.jsx(S,{})]})}),e.jsx(h,{control:i.control,name:"sorting_index",render:({field:l})=>e.jsxs(j,{children:[e.jsx(u,{children:"Sorting"}),e.jsx(p,{children:e.jsx(f,{type:"number",placeholder:"Enter department sorting",...l})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function V({data:n}){const[s,t]=m.useState(!1),[o,a]=m.useState(!1),[c,{isLoading:i}]=B(),r=async l=>{try{await c(l),x.success("Designation deleted successfully"),t(!1)}catch(g){console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Designation"})})]})}),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(P,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>r(n.id),loading:i}),e.jsx(w,{title:"Update Designation",isOpen:o,toggleModal:()=>a(!1),children:e.jsx(F,{data:n,modalClose:()=>a(!1)})})]})}const G=[{id:"select",header:({table:n})=>e.jsx(D,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(D,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Designation Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(V,{data:n.original})}],Q=()=>{const[n,s]=m.useState(!1),[t,o]=R.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:c}=H(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),i=(a==null?void 0:a.data)||[],r=a==null?void 0:a.meta;return c?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Designation",description:"Manage departments for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Designation"]})]}),e.jsx(_,{}),i&&e.jsx("div",{children:e.jsx(v,{columns:G,data:i,paginationInfo:r,pagination:t,setPagination:o})})]})}),e.jsx(w,{title:"Add Designation",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{Q as default};
