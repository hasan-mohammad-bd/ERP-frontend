import{ab as A,ac as I,a as e,a3 as w,ad as k,ae as h,af as g,ag as j,ah as u,I as y,ai as f,B as d,aO as O,ak as x,r as p,al as C,am as S,an as E,ao as L,ap as b,aq as T,ar as P,as as M,at as N,R,au as v,t as z,av as U,aw as _}from"./index-47685b51.js";import{a as B,b as H,c as $,u as q}from"./index-23999208.js";function F({modalClose:a,data:s}){const[n,{isLoading:c}]=B(),[l,{isLoading:i}]=H(),t=A({resolver:I(O),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function r(o){try{s?(await l({employeeClassId:s.id,updatedEmployeeClass:o}),x.success("Employee class updated successfully"),a()):(await n(o),x.success("Employee class created successfully"),a())}catch(m){console.log(m)}}return e.jsx(e.Fragment,{children:c||i?e.jsx("div",{className:"h-56",children:e.jsx(w,{})}):e.jsx(k,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(h,{control:t.control,name:"name",render:({field:o})=>e.jsxs(g,{children:[e.jsx(j,{children:"Name"}),e.jsx(u,{children:e.jsx(y,{placeholder:"Enter employee class name",...o})}),e.jsx(f,{})]})}),e.jsx(h,{control:t.control,name:"sorting_index",render:({field:o})=>e.jsxs(g,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(u,{children:e.jsx(y,{type:"number",placeholder:"Enter employee class sorting",...o})}),e.jsx(f,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function G({data:a}){const[s,n]=p.useState(!1),[c,l]=p.useState(!1),[i,{isLoading:t}]=$(),r=async o=>{try{await i(o),x.success("Section deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(C,{children:e.jsxs(S,{children:[e.jsx(E,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Employee Class"})})]})}),e.jsx(C,{children:e.jsxs(S,{children:[e.jsx(E,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete Employee Class"})})]})}),e.jsx(P,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>n(!1),onConfirm:()=>r(a.id),loading:t}),e.jsx(M,{title:"Update Employee Class",isOpen:c,toggleModal:()=>l(!1),children:e.jsx(F,{data:a,modalClose:()=>l(!1)})})]})}const J=[{id:"select",header:({table:a})=>e.jsx(N,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(N,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee Class Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],V=()=>{const[a,s]=p.useState(!1),[n,c]=R.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=q(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),t=(l==null?void 0:l.data)||[],r=l==null?void 0:l.meta;return i?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(v,{title:"Employee Class",description:"Manage employee classes for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Employee Class"]})]}),e.jsx(U,{}),t&&e.jsx("div",{children:e.jsx(_,{columns:J,data:t,paginationInfo:r,pagination:n,setPagination:c})})]})}),e.jsx(M,{title:"Add Employee Class",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{V as default};
