<<<<<<<< HEAD:dist/assets/index-af25e499.js
import{r as m,aA as g,b_ as y,a as e,a5 as r,a6 as d,a7 as h,B as l,a8 as f,a9 as u,aa as v,ab as b,a3 as C,ad as x,b$ as S,c0 as N,R,by as A,Y as T,ae as k,t as P,af as I,ag as V}from"./index-2c05d2d2.js";function D({rowData:a}){const[s,n]=m.useState(!1),t=g(),[o,{isLoading:i}]=y(),c=async p=>{try{await o(p),C.success("Receipt deleted successfully"),n(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>c(a.id),loading:i})]})}const E=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:a})=>e.jsx(S,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(D,{rowData:a.original})}],L=()=>{const a=g(),[s,n]=R.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=A(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return o?e.jsx(T,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(l,{onClick:()=>a("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(P,{className:"mr-2 h-4 w-4"})," Add Receipt Entry"]})]}),e.jsx(I,{}),i&&e.jsx("div",{children:e.jsx(V,{columns:E,data:i,paginationInfo:c,pagination:c&&s,setPagination:c&&n})})]})})})};export{L as default};
========
import{r as m,aA as g,b_ as y,a as e,a5 as r,a6 as d,a7 as h,B as l,a8 as f,a9 as u,aa as v,ab as b,a3 as C,ad as x,b$ as S,c0 as N,R,by as A,Y as T,ae as k,t as P,af as I,ag as V}from"./index-3e1b8bd0.js";function D({rowData:a}){const[s,n]=m.useState(!1),t=g(),[o,{isLoading:i}]=y(),c=async p=>{try{await o(p),C.success("Receipt deleted successfully"),n(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>c(a.id),loading:i})]})}const E=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:a})=>e.jsx(S,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(D,{rowData:a.original})}],L=()=>{const a=g(),[s,n]=R.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=A(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return o?e.jsx(T,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(l,{onClick:()=>a("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(P,{className:"mr-2 h-4 w-4"})," Add Receipt Entry"]})]}),e.jsx(I,{}),i&&e.jsx("div",{children:e.jsx(V,{columns:E,data:i,paginationInfo:c,pagination:c&&s,setPagination:c&&n})})]})})})};export{L as default};
>>>>>>>> main:dist/assets/index-9f1f9488.js
