<<<<<<<< HEAD:dist/assets/index-237f7c23.js
import{D as F,E as I,bj as _,a as e,av as M,H as L,J as x,K as h,N as j,Q as g,I as y,V as p,W as m,aw as u,ax as k,r as f,az as S,aA as E,aB as G,aC as b,aD as O,aE as C,aF as R,aG as T,aH as w,aI as N,R as P,aK as z,aL as K,aM as U,aN as H}from"./index-a17decc1.js";import{u as B,a as J,b as Q,c as V}from"./index-1f193f3d.js";function A({modalClose:a,data:s}){const[o,{isLoading:t}]=B(),[l,{isLoading:d}]=J(),n=F({resolver:I(_),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,max_salary:(s==null?void 0:s.max_salary)||0,min_salary:(s==null?void 0:s.min_salary)||0}});async function c(r){try{s?(await l({employeeGradeId:s.id,updatedEmployeeGrade:r}).unwrap(),u.success("Section updated successfully"),a()):(await o(r).unwrap(),u.success("Section created successfully"),a())}catch(i){console.log(i),k(i)}}return e.jsx(e.Fragment,{children:t||d?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(L,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(c),className:"w-full space-y-3",children:[e.jsx(x,{control:n.control,name:"name",render:({field:r})=>e.jsxs(h,{children:[e.jsx(j,{children:"Name"}),e.jsx(g,{children:e.jsx(y,{placeholder:"Enter section name",...r})}),e.jsx(p,{})]})}),e.jsx(x,{control:n.control,name:"min_salary",render:({field:r})=>e.jsxs(h,{children:[e.jsx(j,{children:"Min Salary"}),e.jsx(g,{children:e.jsx(y,{type:"number",placeholder:"Enter section sorting",...r})}),e.jsx(p,{})]})}),e.jsx(x,{control:n.control,name:"max_salary",render:({field:r})=>e.jsxs(h,{children:[e.jsx(j,{children:"Max Salary"}),e.jsx(g,{children:e.jsx(y,{type:"number",placeholder:"Enter section sorting",...r})}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function $({data:a}){const[s,o]=f.useState(!1),[t,l]=f.useState(!1),[d,{isLoading:n}]=Q(),c=async r=>{try{await d(r),u.success("Employee Grade deleted successfully"),o(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(S,{roles:["employee-grades.edit"],children:e.jsx(E,{children:e.jsxs(G,{children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(S,{roles:["employee-grades.delete"],children:e.jsx(E,{children:e.jsxs(G,{children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{o(!0)},children:e.jsx(R,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Delete Designation"})})]})})}),e.jsx(T,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>o(!1),onConfirm:()=>c(a.id),loading:n}),t&&e.jsx(w,{title:"Update Employee Grade",isOpen:t,toggleModal:()=>l(!1),children:e.jsx(A,{data:a,modalClose:()=>l(!1)})})]})}const W=[{id:"select",header:({table:a})=>e.jsx(N,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(N,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee Grade Name"},{accessorKey:"min_salary",header:"Min Salary"},{accessorKey:"max_salary",header:"Max Salary"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx($,{data:a.original})}],Y=()=>{const[a,s]=f.useState(!1),[o,t]=P.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:d}=V(`per_page=${o.pageSize}&page=${o.pageIndex+1}`),n=(l==null?void 0:l.data)||[],c=l==null?void 0:l.meta;return d?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Employee Grades",description:"Manage employee grades for you business"}),e.jsx(S,{roles:["employee-grades.create"],children:e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," Add Employee Grade"]})})]}),e.jsx(U,{}),n&&e.jsx("div",{children:e.jsx(H,{columns:W,data:n,paginationInfo:c,pagination:o,setPagination:t})})]})}),a&&e.jsx(w,{title:"Add Employee Grade",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(A,{modalClose:()=>s(!1)})})]})};export{Y as default};
========
import{D as F,E as I,bj as _,a as e,av as M,H as L,J as x,K as h,N as j,Q as g,I as y,V as p,W as m,aw as u,ax as k,r as f,az as S,aA as E,aB as G,aC as b,aD as O,aE as C,aF as R,aG as T,aH as w,aI as N,R as P,aK as z,aL as K,aM as U,aN as H}from"./index-df507673.js";import{u as B,a as J,b as Q,c as V}from"./index-3f2f338a.js";function A({modalClose:a,data:s}){const[o,{isLoading:t}]=B(),[l,{isLoading:d}]=J(),n=F({resolver:I(_),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,max_salary:(s==null?void 0:s.max_salary)||0,min_salary:(s==null?void 0:s.min_salary)||0}});async function c(r){try{s?(await l({employeeGradeId:s.id,updatedEmployeeGrade:r}).unwrap(),u.success("Section updated successfully"),a()):(await o(r).unwrap(),u.success("Section created successfully"),a())}catch(i){console.log(i),k(i)}}return e.jsx(e.Fragment,{children:t||d?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(L,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(c),className:"w-full space-y-3",children:[e.jsx(x,{control:n.control,name:"name",render:({field:r})=>e.jsxs(h,{children:[e.jsx(j,{children:"Name"}),e.jsx(g,{children:e.jsx(y,{placeholder:"Enter section name",...r})}),e.jsx(p,{})]})}),e.jsx(x,{control:n.control,name:"min_salary",render:({field:r})=>e.jsxs(h,{children:[e.jsx(j,{children:"Min Salary"}),e.jsx(g,{children:e.jsx(y,{type:"number",placeholder:"Enter section sorting",...r})}),e.jsx(p,{})]})}),e.jsx(x,{control:n.control,name:"max_salary",render:({field:r})=>e.jsxs(h,{children:[e.jsx(j,{children:"Max Salary"}),e.jsx(g,{children:e.jsx(y,{type:"number",placeholder:"Enter section sorting",...r})}),e.jsx(p,{})]})}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function $({data:a}){const[s,o]=f.useState(!1),[t,l]=f.useState(!1),[d,{isLoading:n}]=Q(),c=async r=>{try{await d(r),u.success("Employee Grade deleted successfully"),o(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(S,{roles:["employee-grades.edit"],children:e.jsx(E,{children:e.jsxs(G,{children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(S,{roles:["employee-grades.delete"],children:e.jsx(E,{children:e.jsxs(G,{children:[e.jsx(b,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{o(!0)},children:e.jsx(R,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Delete Designation"})})]})})}),e.jsx(T,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>o(!1),onConfirm:()=>c(a.id),loading:n}),t&&e.jsx(w,{title:"Update Employee Grade",isOpen:t,toggleModal:()=>l(!1),children:e.jsx(A,{data:a,modalClose:()=>l(!1)})})]})}const W=[{id:"select",header:({table:a})=>e.jsx(N,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(N,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee Grade Name"},{accessorKey:"min_salary",header:"Min Salary"},{accessorKey:"max_salary",header:"Max Salary"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx($,{data:a.original})}],Y=()=>{const[a,s]=f.useState(!1),[o,t]=P.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:d}=V(`per_page=${o.pageSize}&page=${o.pageIndex+1}`),n=(l==null?void 0:l.data)||[],c=l==null?void 0:l.meta;return d?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Employee Grades",description:"Manage employee grades for you business"}),e.jsx(S,{roles:["employee-grades.create"],children:e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," Add Employee Grade"]})})]}),e.jsx(U,{}),n&&e.jsx("div",{children:e.jsx(H,{columns:W,data:n,paginationInfo:c,pagination:o,setPagination:t})})]})}),a&&e.jsx(w,{title:"Add Employee Grade",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(A,{modalClose:()=>s(!1)})})]})};export{Y as default};
>>>>>>>> main:dist/assets/index-2896b482.js
