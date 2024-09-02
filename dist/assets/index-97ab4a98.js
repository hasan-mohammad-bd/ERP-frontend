import{a8 as A,a9 as I,a as e,$ as M,aa as k,ab as h,ac as g,ad as j,ae as u,I as f,af as S,B as d,ag as L,ah as x,r as p,ai as y,aj as b,ak as C,al as O,am as N,an as T,ao as P,ap as w,aq as D,R,ar as z,t as U,as as v,at as E}from"./index-22834323.js";import{u as _,a as $,b as B,c as H}from"./index-18790cef.js";function F({modalClose:a,data:s}){const[n,{isLoading:c}]=_(),[t,{isLoading:o}]=$(),l=A({resolver:I(L),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function i(r){try{s?(await t({departmentId:s.id,updatedDepartment:r}),x.success("Department updated successfully"),a()):(await n(r),x.success("Department created successfully"),a())}catch(m){console.log(m)}}return e.jsx(e.Fragment,{children:c||o?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(k,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(i),className:"w-full space-y-3",children:[e.jsx(h,{control:l.control,name:"name",render:({field:r})=>e.jsxs(g,{children:[e.jsx(j,{children:"Name"}),e.jsx(u,{children:e.jsx(f,{placeholder:"Enter department name",...r})}),e.jsx(S,{})]})}),e.jsx(h,{control:l.control,name:"sorting_index",render:({field:r})=>e.jsxs(g,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(u,{children:e.jsx(f,{type:"number",placeholder:"Enter department sorting",...r})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function q({data:a}){const[s,n]=p.useState(!1),[c,t]=p.useState(!1),[o,{isLoading:l}]=B(),i=async r=>{try{await o(r),x.success("Designation deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Departments"})})]})}),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Departments"})})]})}),e.jsx(P,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>n(!1),onConfirm:()=>i(a.id),loading:l}),e.jsx(w,{title:"Update Department",isOpen:c,toggleModal:()=>t(!1),children:e.jsx(F,{data:a,modalClose:()=>t(!1)})})]})}const G=[{id:"select",header:({table:a})=>e.jsx(D,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(D,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Department Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(q,{data:a.original})}],Q=()=>{const[a,s]=p.useState(!1),[n,c]=R.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=H(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),l=(t==null?void 0:t.data)||[],i=t==null?void 0:t.meta;return o?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Departments",description:"Manage department for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx(U,{className:"mr-2 h-4 w-4"})," Add Department"]})]}),e.jsx(v,{}),l&&e.jsx("div",{children:e.jsx(E,{columns:G,data:l,paginationInfo:i,pagination:n,setPagination:c})})]})}),e.jsx(w,{title:"Add Department",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{Q as default};
