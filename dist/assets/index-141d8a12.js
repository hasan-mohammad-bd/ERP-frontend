import{y as b,z as N,b4 as w,a as e,aj as C,F as A,D as F,E as M,G as I,H as k,I as L,J as O,K as m,ak as x,al as R,r as p,an as h,ao as u,ap as j,aq as g,ar as T,as as y,at as z,au as P,av as E,aw as f,R as v,ay as U,az as H,aA as _,aB as B}from"./index-96aa6580.js";import{u as G,a as J,b as K,c as $}from"./index-8aadd93a.js";function S({modalClose:a,data:s}){const[n,{isLoading:t}]=G(),[l,{isLoading:r}]=J(),o=b({resolver:N(w),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function i(c){try{s?(await l({employeeClassId:s.id,updatedEmployeeClass:c}).unwrap(),x.success("Employee class updated successfully"),a()):(await n(c).unwrap(),x.success("Employee class created successfully"),a())}catch(d){console.log(d),R(d)}}return e.jsx(e.Fragment,{children:t||r?e.jsx("div",{className:"h-56",children:e.jsx(C,{})}):e.jsx(A,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(i),className:"w-full space-y-3",children:[e.jsx(F,{control:o.control,name:"name",render:({field:c})=>e.jsxs(M,{children:[e.jsx(I,{children:"Name"}),e.jsx(k,{children:e.jsx(L,{placeholder:"Enter employee class name",...c})}),e.jsx(O,{})]})}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function q({data:a}){const[s,n]=p.useState(!1),[t,l]=p.useState(!1),[r,{isLoading:o}]=K(),i=async c=>{try{await r(c),x.success("Section deleted successfully"),n(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(h,{roles:["employee-classes.edit"],children:e.jsx(u,{children:e.jsxs(j,{children:[e.jsx(g,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(y,{children:e.jsx("p",{children:"Update Employee Class"})})]})})}),e.jsx(h,{roles:["employee-classes.delete"],children:e.jsx(u,{children:e.jsxs(j,{children:[e.jsx(g,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(y,{children:e.jsx("p",{children:"Delete Employee Class"})})]})})}),e.jsx(P,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>n(!1),onConfirm:()=>i(a.id),loading:o}),t&&e.jsx(E,{title:"Update Employee Class",isOpen:t,toggleModal:()=>l(!1),children:e.jsx(S,{data:a,modalClose:()=>l(!1)})})]})}const Q=[{id:"select",header:({table:a})=>e.jsx(f,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(f,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee Class Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(q,{data:a.original})}],X=()=>{const[a,s]=p.useState(!1),[n,t]=v.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:r}=$(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),o=(l==null?void 0:l.data)||[],i=l==null?void 0:l.meta;return r?e.jsx(C,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Employee Class",description:"Manage employee classes for you business"}),e.jsx(h,{roles:["employee-classes.create"],children:e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(H,{className:"mr-2 h-4 w-4"})," Add Employee Class"]})})]}),e.jsx(_,{}),o&&e.jsx("div",{children:e.jsx(B,{columns:Q,data:o,paginationInfo:i,pagination:n,setPagination:t})})]})}),a&&e.jsx(E,{title:"Add Employee Class",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(S,{modalClose:()=>s(!1)})})]})};export{X as default};
