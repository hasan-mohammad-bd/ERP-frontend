import{as as b,at as w,D,E as M,au as A,a as e,av as S,H as F,J as I,K as L,N as k,Q as O,I as R,V as T,W as m,aw as x,ax as P,r as p,ay as z,az as h,aA as g,aB as u,aC as j,aD as E,aE as f,aF as v,aG as U,aH as C,aI as y,R as H,aJ as J,aK as K,aL as _,aM as B,aN as G}from"./index-2817363c.js";function N({modalClose:a,data:s}){const[n,{isLoading:r}]=b(),[t,{isLoading:d}]=w(),l=D({resolver:M(A),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function o(c){try{s?(await t({departmentId:s.id,updatedDepartment:c}).unwrap(),x.success("Department updated successfully"),a()):(await n(c).unwrap(),x.success("Department created successfully"),a())}catch(i){console.log(i),P(i)}}return e.jsx(e.Fragment,{children:r||d?e.jsx("div",{className:"h-56",children:e.jsx(S,{})}):e.jsx(F,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(o),className:"w-full space-y-3",children:[e.jsx(I,{control:l.control,name:"name",render:({field:c})=>e.jsxs(L,{children:[e.jsx(k,{children:"Name"}),e.jsx(O,{children:e.jsx(R,{placeholder:"Enter department name",...c})}),e.jsx(T,{})]})}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function Q({data:a}){const[s,n]=p.useState(!1),[r,t]=p.useState(!1),[d,{isLoading:l}]=z(),o=async c=>{try{await d(c),x.success("Designation deleted successfully"),n(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(h,{roles:["departments.edit"],children:e.jsx(g,{children:e.jsxs(u,{children:[e.jsx(j,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(E,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Update Departments"})})]})})}),e.jsx(h,{roles:["departments.delete"],children:e.jsx(g,{children:e.jsxs(u,{children:[e.jsx(j,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(f,{children:e.jsx("p",{children:"Delete Departments"})})]})})}),e.jsx(U,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>n(!1),onConfirm:()=>o(a.id),loading:l}),r&&e.jsx(C,{title:"Update Department",isOpen:r,toggleModal:()=>t(!1),children:e.jsx(N,{data:a,modalClose:()=>t(!1)})})]})}const V=[{id:"select",header:({table:a})=>e.jsx(y,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(y,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Department Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(Q,{data:a.original})}],W=()=>{const[a,s]=p.useState(!1),[n,r]=H.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:d}=J(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),l=(t==null?void 0:t.data)||[],o=t==null?void 0:t.meta;return d?e.jsx(S,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(K,{title:"Departments",description:"Manage department for you business"}),e.jsx(h,{roles:["departments.delete"],children:e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(_,{className:"mr-2 h-4 w-4"})," Add Department"]})})]}),e.jsx(B,{}),l&&e.jsx("div",{children:e.jsx(G,{columns:V,data:l,paginationInfo:o,pagination:n,setPagination:r})})]})}),a&&e.jsx(C,{title:"Add Department",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(N,{modalClose:()=>s(!1)})})]})};export{W as default};
