import{aE as b,aF as w,z as D,B as F,aG as M,a as e,am as S,F as A,E as I,G as k,H as L,J as O,I as R,K as T,M as g,an as x,ao as z,r as h,aH as P,aq as m,ar as u,as as j,at as p,au as E,av as f,aw as v,ax as U,ay as C,az as y,R as H,aI as B,aB as G,t as _,aC as J,aD as K}from"./index-d888fdd5.js";function N({modalClose:a,data:s}){const[t,{isLoading:l}]=b(),[n,{isLoading:c}]=w(),i=D({resolver:F(M),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function d(o){try{s?(await n({designationId:s.id,updatedDesignation:o}).unwrap(),x.success("Designation updated successfully"),a()):(await t(o).unwrap(),x.success("Designation created successfully"),a())}catch(r){console.log(r),z(r)}}return e.jsx(e.Fragment,{children:l||c?e.jsx("div",{className:"h-56",children:e.jsx(S,{})}):e.jsx(A,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(I,{control:i.control,name:"name",render:({field:o})=>e.jsxs(k,{children:[e.jsx(L,{children:"Name"}),e.jsx(O,{children:e.jsx(R,{placeholder:"Enter department name",...o})}),e.jsx(T,{})]})}),e.jsx("div",{children:e.jsx(g,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function $({data:a}){const[s,t]=h.useState(!1),[l,n]=h.useState(!1),[c,{isLoading:i}]=P(),d=async o=>{try{await c(o),x.success("Designation deleted successfully"),t(!1)}catch(r){console.log(r)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(m,{roles:["designations.edit"],children:e.jsx(u,{children:e.jsxs(j,{children:[e.jsx(p,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(E,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Update Designation"})})]})})}),e.jsx(m,{roles:["designations.delete"],children:e.jsx(u,{children:e.jsxs(j,{children:[e.jsx(p,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Delete Designation"})})]})})}),e.jsx(U,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>d(a.id),loading:i}),l&&e.jsx(C,{title:"Update Designation",isOpen:l,toggleModal:()=>n(!1),children:e.jsx(N,{data:a,modalClose:()=>n(!1)})})]})}const q=[{id:"select",header:({table:a})=>e.jsx(y,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(y,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Designation Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx($,{data:a.original})}],V=()=>{const[a,s]=h.useState(!1),[t,l]=H.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:c}=B(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),i=(n==null?void 0:n.data)||[],d=n==null?void 0:n.meta;return c?e.jsx(S,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(G,{title:"Designation",description:"Manage departments for you business"}),e.jsx(m,{roles:["designations.create"],children:e.jsxs(g,{onClick:()=>s(!0),size:"sm",children:[e.jsx(_,{className:"mr-2 h-4 w-4"})," Add Designation"]})})]}),e.jsx(J,{}),i&&e.jsx("div",{children:e.jsx(K,{columns:q,data:i,paginationInfo:d,pagination:t,setPagination:l})})]})}),a&&e.jsx(C,{title:"Add Designation",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(N,{modalClose:()=>s(!1)})})]})};export{V as default};
