<<<<<<<< HEAD:dist/assets/index-5af4a6b9.js
import{r as u,z as j,a as e,aA as d,aB as x,aC as g,W as c,aD as f,aE as h,aF as y,aG as C,aw as S,ax as v,aI as p,R as N,aK as E,aL as b,a_ as A,a$ as T,aN as k}from"./index-a17decc1.js";import{u as w,a as D}from"./index-638c18e1.js";function I({data:s}){const[a,l]=u.useState(!1),n=j(),[t,{isLoading:i}]=w(),o=async m=>{try{await t(m),l(!1),S.success("Item deleted successfully")}catch(r){console.log(r),v(r)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(d,{children:e.jsxs(x,{children:[e.jsx(g,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/billing/expenses/edit/${s.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Update Employee"})})]})}),e.jsx(d,{children:e.jsxs(x,{children:[e.jsx(g,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Delete employee"})})]})}),e.jsx(C,{title:"Are you sure?",description:"This action cannot be undone.",name:"This Expense",isOpen:a,onClose:()=>l(!1),onConfirm:()=>o(s.id),loading:i})]})}const P=[{id:"select",header:({table:s})=>e.jsx(p,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(p,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"date",header:"Expenses Date",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.date})},{accessorKey:"total",header:"Total",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.total})},{accessorKey:"note",header:"Note",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.note})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(I,{data:s.original})}],F=()=>{const s=j(),[a,l]=N.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:t}=D(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),i=(n==null?void 0:n.data)||[],o=n==null?void 0:n.meta;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"All Expenses",description:"Manage all items for you business"}),e.jsxs(c,{onClick:()=>s("/billing/expenses/add"),size:"sm",children:[e.jsx(b,{className:"mr-2 h-4 w-4"})," Add Expenses"]})]}),e.jsx(A,{}),t&&e.jsx(T,{}),i&&!t&&e.jsx("div",{children:e.jsx(k,{columns:P,data:i,paginationInfo:o,pagination:a,setPagination:l})})]})})})};export{F as default};
========
import{r as u,z as j,a as e,aA as d,aB as x,aC as g,W as c,aD as f,aE as h,aF as y,aG as C,aw as S,ax as v,aI as p,R as N,aK as E,aL as b,a_ as A,a$ as T,aN as k}from"./index-df507673.js";import{u as w,a as D}from"./index-9dcf5818.js";function I({data:s}){const[a,l]=u.useState(!1),n=j(),[t,{isLoading:i}]=w(),o=async m=>{try{await t(m),l(!1),S.success("Item deleted successfully")}catch(r){console.log(r),v(r)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(d,{children:e.jsxs(x,{children:[e.jsx(g,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/billing/expenses/edit/${s.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Update Employee"})})]})}),e.jsx(d,{children:e.jsxs(x,{children:[e.jsx(g,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Delete employee"})})]})}),e.jsx(C,{title:"Are you sure?",description:"This action cannot be undone.",name:"This Expense",isOpen:a,onClose:()=>l(!1),onConfirm:()=>o(s.id),loading:i})]})}const P=[{id:"select",header:({table:s})=>e.jsx(p,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(p,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"date",header:"Expenses Date",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.date})},{accessorKey:"total",header:"Total",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.total})},{accessorKey:"note",header:"Note",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.note})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(I,{data:s.original})}],F=()=>{const s=j(),[a,l]=N.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:t}=D(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),i=(n==null?void 0:n.data)||[],o=n==null?void 0:n.meta;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"All Expenses",description:"Manage all items for you business"}),e.jsxs(c,{onClick:()=>s("/billing/expenses/add"),size:"sm",children:[e.jsx(b,{className:"mr-2 h-4 w-4"})," Add Expenses"]})]}),e.jsx(A,{}),t&&e.jsx(T,{}),i&&!t&&e.jsx("div",{children:e.jsx(k,{columns:P,data:i,paginationInfo:o,pagination:a,setPagination:l})})]})})})};export{F as default};
>>>>>>>> main:dist/assets/index-69a9655f.js
