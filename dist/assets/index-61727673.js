<<<<<<<< HEAD:dist/assets/index-61727673.js
import{V as A,W as I,X as k,a as e,Y as D,Z as L,_ as h,$ as g,a0 as j,a1 as u,I as f,a2 as S,B as m,a3 as x,a4 as O,r as p,a5 as y,a6 as b,a7 as C,a8 as T,a9 as N,aa as P,ab as R,ac as M,ad as w,R as z,ae as E,t as U,af as _,ag as v}from"./index-248274e5.js";import{u as $,a as B,b as H,c as V}from"./index-93482d9e.js";function F({modalClose:a,data:s}){const[n,{isLoading:c}]=$(),[t,{isLoading:o}]=B(),l=A({resolver:I(k),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function d(r){try{s?(await t({departmentId:s.id,updatedDepartment:r}).unwrap(),x.success("Department updated successfully"),a()):(await n(r).unwrap(),x.success("Department created successfully"),a())}catch(i){console.log(i),O(i)}}return e.jsx(e.Fragment,{children:c||o?e.jsx("div",{className:"h-56",children:e.jsx(D,{})}):e.jsx(L,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(h,{control:l.control,name:"name",render:({field:r})=>e.jsxs(g,{children:[e.jsx(j,{children:"Name"}),e.jsx(u,{children:e.jsx(f,{placeholder:"Enter department name",...r})}),e.jsx(S,{})]})}),e.jsx(h,{control:l.control,name:"sorting_index",render:({field:r})=>e.jsxs(g,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(u,{children:e.jsx(f,{type:"number",placeholder:"Enter department sorting",...r})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function G({data:a}){const[s,n]=p.useState(!1),[c,t]=p.useState(!1),[o,{isLoading:l}]=H(),d=async r=>{try{await o(r),x.success("Designation deleted successfully"),n(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Departments"})})]})}),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Departments"})})]})}),e.jsx(R,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>n(!1),onConfirm:()=>d(a.id),loading:l}),c&&e.jsx(M,{title:"Update Department",isOpen:c,toggleModal:()=>t(!1),children:e.jsx(F,{data:a,modalClose:()=>t(!1)})})]})}const J=[{id:"select",header:({table:a})=>e.jsx(w,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(w,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Department Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],W=()=>{const[a,s]=p.useState(!1),[n,c]=z.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=V(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),l=(t==null?void 0:t.data)||[],d=t==null?void 0:t.meta;return o?e.jsx(D,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"Departments",description:"Manage department for you business"}),e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(U,{className:"mr-2 h-4 w-4"})," Add Department"]})]}),e.jsx(_,{}),l&&e.jsx("div",{children:e.jsx(v,{columns:J,data:l,paginationInfo:d,pagination:n,setPagination:c})})]})}),a&&e.jsx(M,{title:"Add Department",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{W as default};
========
import{V as A,W as I,X as k,a as e,Y as D,Z as L,_ as h,$ as g,a0 as j,a1 as u,I as f,a2 as S,B as m,a3 as x,a4 as O,r as p,a5 as y,a6 as b,a7 as C,a8 as T,a9 as N,aa as P,ab as R,ac as M,ad as w,R as z,ae as E,t as U,af as _,ag as v}from"./index-af3a75c9.js";import{u as $,a as B,b as H,c as V}from"./index-c9d89151.js";function F({modalClose:a,data:s}){const[n,{isLoading:c}]=$(),[t,{isLoading:o}]=B(),l=A({resolver:I(k),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function d(r){try{s?(await t({departmentId:s.id,updatedDepartment:r}).unwrap(),x.success("Department updated successfully"),a()):(await n(r).unwrap(),x.success("Department created successfully"),a())}catch(i){console.log(i),O(i)}}return e.jsx(e.Fragment,{children:c||o?e.jsx("div",{className:"h-56",children:e.jsx(D,{})}):e.jsx(L,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(h,{control:l.control,name:"name",render:({field:r})=>e.jsxs(g,{children:[e.jsx(j,{children:"Name"}),e.jsx(u,{children:e.jsx(f,{placeholder:"Enter department name",...r})}),e.jsx(S,{})]})}),e.jsx(h,{control:l.control,name:"sorting_index",render:({field:r})=>e.jsxs(g,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(u,{children:e.jsx(f,{type:"number",placeholder:"Enter department sorting",...r})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function G({data:a}){const[s,n]=p.useState(!1),[c,t]=p.useState(!1),[o,{isLoading:l}]=H(),d=async r=>{try{await o(r),x.success("Designation deleted successfully"),n(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Departments"})})]})}),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Departments"})})]})}),e.jsx(R,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>n(!1),onConfirm:()=>d(a.id),loading:l}),c&&e.jsx(M,{title:"Update Department",isOpen:c,toggleModal:()=>t(!1),children:e.jsx(F,{data:a,modalClose:()=>t(!1)})})]})}const J=[{id:"select",header:({table:a})=>e.jsx(w,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(w,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Department Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],W=()=>{const[a,s]=p.useState(!1),[n,c]=z.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=V(`per_page=${n.pageSize}&page=${n.pageIndex+1}`),l=(t==null?void 0:t.data)||[],d=t==null?void 0:t.meta;return o?e.jsx(D,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"Departments",description:"Manage department for you business"}),e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(U,{className:"mr-2 h-4 w-4"})," Add Department"]})]}),e.jsx(_,{}),l&&e.jsx("div",{children:e.jsx(v,{columns:J,data:l,paginationInfo:d,pagination:n,setPagination:c})})]})}),a&&e.jsx(M,{title:"Add Department",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{W as default};
>>>>>>>> 0cd8807406513f3a966a08b7c886248844c517c5:dist/assets/index-49a2ec05.js
