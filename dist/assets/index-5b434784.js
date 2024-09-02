import{ab as A,ac as I,a as e,a3 as D,ad as k,ae as h,af as j,ag as u,ah as p,I as f,ai as S,B as d,ax as L,ak as x,r as m,al as y,am as b,an as C,ao as O,ap as N,aq as T,ar as P,as as M,at as w,R,au as v,t as z,av as U,aw as E}from"./index-47685b51.js";import{u as _,a as B,b as H,c as $}from"./index-f5bd11e5.js";function F({modalClose:a,data:s}){const[t,{isLoading:o}]=_(),[n,{isLoading:c}]=B(),i=A({resolver:I(L),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function r(l){try{s?(await n({designationId:s.id,updatedDesignation:l}),x.success("Designation updated successfully"),a()):(await t(l),x.success("Designation created successfully"),a())}catch(g){console.log(g)}}return e.jsx(e.Fragment,{children:o||c?e.jsx("div",{className:"h-56",children:e.jsx(D,{})}):e.jsx(k,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(h,{control:i.control,name:"name",render:({field:l})=>e.jsxs(j,{children:[e.jsx(u,{children:"Name"}),e.jsx(p,{children:e.jsx(f,{placeholder:"Enter department name",...l})}),e.jsx(S,{})]})}),e.jsx(h,{control:i.control,name:"sorting_index",render:({field:l})=>e.jsxs(j,{children:[e.jsx(u,{children:"Sorting"}),e.jsx(p,{children:e.jsx(f,{type:"number",placeholder:"Enter department sorting",...l})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function q({data:a}){const[s,t]=m.useState(!1),[o,n]=m.useState(!1),[c,{isLoading:i}]=H(),r=async l=>{try{await c(l),x.success("Designation deleted successfully"),t(!1)}catch(g){console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Designation"})})]})}),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(P,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>r(a.id),loading:i}),e.jsx(M,{title:"Update Designation",isOpen:o,toggleModal:()=>n(!1),children:e.jsx(F,{data:a,modalClose:()=>n(!1)})})]})}const G=[{id:"select",header:({table:a})=>e.jsx(w,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(w,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Designation Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(q,{data:a.original})}],Q=()=>{const[a,s]=m.useState(!1),[t,o]=R.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:c}=$(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),i=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return c?e.jsx(D,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(v,{title:"Designation",description:"Manage departments for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Designation"]})]}),e.jsx(U,{}),i&&e.jsx("div",{children:e.jsx(E,{columns:G,data:i,paginationInfo:r,pagination:t,setPagination:o})})]})}),e.jsx(M,{title:"Add Designation",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{Q as default};
