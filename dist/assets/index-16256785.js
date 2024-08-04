import{T as A,U as F,k as e,V as M,W as _,X as i,Y as m,Z as x,a0 as h,I as j,a1 as g,B as y,ax as I,a3 as f,r as u,a4 as S,a5 as E,a6 as b,a7 as k,a8 as G,a9 as T,aa as L,ab as N,ac as C,R as O,ad as P,P as R,ae as U,af as z}from"./index-fcd704ec.js";import{a as $,b as K,c as B,u as H}from"./index-dba8eb94.js";function w({modalClose:a,data:s}){const[t,{isLoading:o}]=$(),[l,{isLoading:c}]=K(),r=A({resolver:F(I),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,max_salary:(s==null?void 0:s.max_salary)||0,min_salary:(s==null?void 0:s.min_salary)||0}});async function d(n){try{s?(await l({employeeGradeId:s.id,updatedEmployeeGrade:n}),f.success("Section updated successfully"),a()):(await t(n),f.success("Section created successfully"),a())}catch(p){console.log(p)}}return e.jsx(e.Fragment,{children:o||c?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(_,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(i,{control:r.control,name:"name",render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{children:"Name"}),e.jsx(h,{children:e.jsx(j,{placeholder:"Enter section name",...n})}),e.jsx(g,{})]})}),e.jsx(i,{control:r.control,name:"sorting_index",render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{children:"Sorting"}),e.jsx(h,{children:e.jsx(j,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(g,{})]})}),e.jsx(i,{control:r.control,name:"min_salary",render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{children:"Min Salary"}),e.jsx(h,{children:e.jsx(j,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(g,{})]})}),e.jsx(i,{control:r.control,name:"max_salary",render:({field:n})=>e.jsxs(m,{children:[e.jsx(x,{children:"Max Salary"}),e.jsx(h,{children:e.jsx(j,{type:"number",placeholder:"Enter section sorting",...n})}),e.jsx(g,{})]})}),e.jsx("div",{children:e.jsx(y,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function V({data:a}){const[s,t]=u.useState(!1),[o,l]=u.useState(!1),[c,{isLoading:r}]=B(),d=async n=>{try{await c(n),f.success("Employee Grade deleted successfully"),t(!1)}catch(p){console.log(p)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(S,{children:e.jsxs(E,{children:[e.jsx(b,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(k,{className:"h-4 w-4 text-foreground"})})}),e.jsx(G,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(S,{children:e.jsxs(E,{children:[e.jsx(b,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(G,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(L,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>d(a.id),loading:r}),e.jsx(N,{title:"Update Employee Grade",isOpen:o,toggleModal:()=>l(!1),children:e.jsx(w,{data:a,modalClose:()=>l(!1)})})]})}const Q=[{id:"select",header:({table:a})=>e.jsx(C,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(C,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee Grade Name"},{accessorKey:"min_salary",header:"Min Salary"},{accessorKey:"max_salary",header:"Max Salary"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(V,{data:a.original})}],Y=()=>{const[a,s]=u.useState(!1),[t,o]=O.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:c}=H(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),r=(l==null?void 0:l.data)||[],d=l==null?void 0:l.meta;return c?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Employee Grades",description:"Manage employee grades for you business"}),e.jsxs(y,{onClick:()=>s(!0),size:"sm",children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Add Employee Grade"]})]}),e.jsx(U,{}),r&&e.jsx("div",{children:e.jsx(z,{columns:Q,data:r,paginationInfo:d,pagination:t,setPagination:o})})]})}),e.jsx(N,{title:"Add Employee Grade",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(w,{modalClose:()=>s(!1)})})]})};export{Y as default};
