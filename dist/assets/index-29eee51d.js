<<<<<<<< HEAD:dist/assets/index-81c18dfd.js
import{V as _,W as F,aV as A,a as e,Y as M,Z as I,_ as m,$ as x,a0 as h,a1 as j,I as g,a2 as y,B as p,a3 as u,a4 as k,r as f,a5 as S,a6 as E,a7 as G,a8 as L,a9 as b,aa as O,ab as T,ac as N,ad as C,R as P,ae as R,t as z,af as U,ag as K}from"./index-2c05d2d2.js";import{a as V,b as $,c as B,u as H}from"./index-8b27a6a1.js";function w({modalClose:a,data:s}){const[t,{isLoading:o}]=V(),[l,{isLoading:c}]=$(),r=_({resolver:F(A),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,max_salary:(s==null?void 0:s.max_salary)||0,min_salary:(s==null?void 0:s.min_salary)||0}});async function d(n){try{s?(await l({employeeGradeId:s.id,updatedEmployeeGrade:n}).unwrap(),u.success("Section updated successfully"),a()):(await t(n).unwrap(),u.success("Section created successfully"),a())}catch(i){console.log(i),k(i)}}return e.jsx(e.Fragment,{children:o||c?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(I,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(m,{control:r.control,name:"name",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Name"}),e.jsx(j,{children:e.jsx(g,{placeholder:"Enter section name",...n})}),e.jsx(y,{})]})}),e.jsx(m,{control:r.control,name:"sorting_index",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Sorting"}),e.jsx(j,{children:e.jsx(g,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(y,{})]})}),e.jsx(m,{control:r.control,name:"min_salary",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Min Salary"}),e.jsx(j,{children:e.jsx(g,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(y,{})]})}),e.jsx(m,{control:r.control,name:"max_salary",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Max Salary"}),e.jsx(j,{children:e.jsx(g,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(y,{})]})}),e.jsx("div",{children:e.jsx(p,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function J({data:a}){const[s,t]=f.useState(!1),[o,l]=f.useState(!1),[c,{isLoading:r}]=B(),d=async n=>{try{await c(n),u.success("Employee Grade deleted successfully"),t(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(S,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(S,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(T,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>d(a.id),loading:r}),o&&e.jsx(N,{title:"Update Employee Grade",isOpen:o,toggleModal:()=>l(!1),children:e.jsx(w,{data:a,modalClose:()=>l(!1)})})]})}const Q=[{id:"select",header:({table:a})=>e.jsx(C,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(C,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee Grade Name"},{accessorKey:"min_salary",header:"Min Salary"},{accessorKey:"max_salary",header:"Max Salary"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(J,{data:a.original})}],Z=()=>{const[a,s]=f.useState(!1),[t,o]=P.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:c}=H(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),r=(l==null?void 0:l.data)||[],d=l==null?void 0:l.meta;return c?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(R,{title:"Employee Grades",description:"Manage employee grades for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Employee Grade"]})]}),e.jsx(U,{}),r&&e.jsx("div",{children:e.jsx(K,{columns:Q,data:r,paginationInfo:d,pagination:t,setPagination:o})})]})}),a&&e.jsx(N,{title:"Add Employee Grade",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(w,{modalClose:()=>s(!1)})})]})};export{Z as default};
========
import{V as _,W as F,aV as A,a as e,Y as M,Z as I,_ as m,$ as x,a0 as h,a1 as j,I as g,a2 as y,B as p,a3 as u,a4 as k,r as f,a5 as S,a6 as E,a7 as G,a8 as L,a9 as b,aa as O,ab as T,ac as N,ad as C,R as P,ae as R,t as z,af as U,ag as K}from"./index-3e1b8bd0.js";import{a as V,b as $,c as B,u as H}from"./index-97b98176.js";function w({modalClose:a,data:s}){const[t,{isLoading:o}]=V(),[l,{isLoading:c}]=$(),r=_({resolver:F(A),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,max_salary:(s==null?void 0:s.max_salary)||0,min_salary:(s==null?void 0:s.min_salary)||0}});async function d(n){try{s?(await l({employeeGradeId:s.id,updatedEmployeeGrade:n}).unwrap(),u.success("Section updated successfully"),a()):(await t(n).unwrap(),u.success("Section created successfully"),a())}catch(i){console.log(i),k(i)}}return e.jsx(e.Fragment,{children:o||c?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(I,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(m,{control:r.control,name:"name",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Name"}),e.jsx(j,{children:e.jsx(g,{placeholder:"Enter section name",...n})}),e.jsx(y,{})]})}),e.jsx(m,{control:r.control,name:"sorting_index",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Sorting"}),e.jsx(j,{children:e.jsx(g,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(y,{})]})}),e.jsx(m,{control:r.control,name:"min_salary",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Min Salary"}),e.jsx(j,{children:e.jsx(g,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(y,{})]})}),e.jsx(m,{control:r.control,name:"max_salary",render:({field:n})=>e.jsxs(x,{children:[e.jsx(h,{children:"Max Salary"}),e.jsx(j,{children:e.jsx(g,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(y,{})]})}),e.jsx("div",{children:e.jsx(p,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function J({data:a}){const[s,t]=f.useState(!1),[o,l]=f.useState(!1),[c,{isLoading:r}]=B(),d=async n=>{try{await c(n),u.success("Employee Grade deleted successfully"),t(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(S,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(S,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(T,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>d(a.id),loading:r}),o&&e.jsx(N,{title:"Update Employee Grade",isOpen:o,toggleModal:()=>l(!1),children:e.jsx(w,{data:a,modalClose:()=>l(!1)})})]})}const Q=[{id:"select",header:({table:a})=>e.jsx(C,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(C,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee Grade Name"},{accessorKey:"min_salary",header:"Min Salary"},{accessorKey:"max_salary",header:"Max Salary"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(J,{data:a.original})}],Z=()=>{const[a,s]=f.useState(!1),[t,o]=P.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:c}=H(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),r=(l==null?void 0:l.data)||[],d=l==null?void 0:l.meta;return c?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(R,{title:"Employee Grades",description:"Manage employee grades for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Employee Grade"]})]}),e.jsx(U,{}),r&&e.jsx("div",{children:e.jsx(K,{columns:Q,data:r,paginationInfo:d,pagination:t,setPagination:o})})]})}),a&&e.jsx(N,{title:"Add Employee Grade",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(w,{modalClose:()=>s(!1)})})]})};export{Z as default};
>>>>>>>> main:dist/assets/index-29eee51d.js
