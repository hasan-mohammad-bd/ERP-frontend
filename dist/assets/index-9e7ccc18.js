<<<<<<<< HEAD:dist/assets/index-9e7ccc18.js
import{r as j,dx as y,z as m,a as e,aA as o,aB as d,aC as h,W as l,dy as f,aE as u,aD as b,aF as C,aG as N,aw as P,ax as S,aI as p,dp as x,L as w,dz as D,av as T,aK as k,aL as I,aM as K,aN as A}from"./index-a17decc1.js";function L({rowData:a}){const[s,i]=j.useState(!1),[n,{isLoading:t}]=y(),c=m(),r=async v=>{try{await n(v).unwrap(),P.success("Item deleted successfully"),i(!1)}catch(g){S(g),console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/billing/purchase-return/add/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Return Purchase"})})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/billing/purchases/edit/${a.id}`),children:e.jsx(b,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Purchase"})})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Purchase"})})]})}),e.jsx(N,{title:"Are you sure?",description:"This action cannot be undone.",name:"This Purchase",isOpen:s,onClose:()=>i(!1),onConfirm:()=>r(a.id),loading:t})]})}const z=[{id:"select",header:({table:a})=>e.jsx(p,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(p,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"date",header:"Date",cell:({row:a})=>{var s;return x((s=a.original)==null?void 0:s.date)||""}},{accessorKey:"invoice_number",header:"Invoice Number",cell:({row:a})=>e.jsx(w,{to:`/billing/invoices/view/${a.original.id}`,className:"text-blue-600 hover:underline",children:a.original.invoice_number})},{accessorKey:"contact.name",header:"Supplier Name"},{accessorKey:"contact.phone",header:"Supplier Phone"},{accessorKey:"warehouse.name",header:"Warehouse"},{accessorKey:"delivery_date",header:"Delivery Date",cell:({row:a})=>{var s;return x(((s=a.original)==null?void 0:s.delivery_date)||"")}},{accessorKey:"due_date",header:"Due Date",cell:({row:a})=>{var s;return x(((s=a.original)==null?void 0:s.due_date)||"")}},{accessorKey:"total",header:"Total"},{accessorKey:"total_due",header:"Total Due"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(L,{rowData:a.original})}],M=()=>{const a=m(),[s,i]=j.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:t}=D(`per_page=${s.pageSize}&page=${s.pageIndex+1}`),c=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return t?e.jsx(T,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{title:"Purchase List",description:"Manage your sub accounts for you business"}),e.jsxs(l,{onClick:()=>a("/billing/purchases/add"),size:"sm",children:[e.jsx(I,{className:"mr-2 h-4 w-4"})," Add Purchase"]})]}),e.jsx(K,{}),n&&e.jsx("div",{children:e.jsx(A,{columns:z,data:c,paginationInfo:r,pagination:r&&s,setPagination:r&&i})})]})})})};export{M as default};
========
import{r as p,dv as y,z as m,a as e,aA as o,aB as d,aC as h,W as l,dw as f,aE as u,aD as b,aF as C,aG as N,aw as P,ax as S,aI as j,dm as x,L as w,dx as D,av as T,aK as k,aL as I,aM as K,aN as A}from"./index-df507673.js";function L({rowData:a}){const[s,i]=p.useState(!1),[n,{isLoading:t}]=y(),c=m(),r=async v=>{try{await n(v).unwrap(),P.success("Item deleted successfully"),i(!1)}catch(g){S(g),console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/billing/purchase-return/add/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Return Purchase"})})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/billing/purchases/edit/${a.id}`),children:e.jsx(b,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Purchase"})})]})}),e.jsx(o,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Purchase"})})]})}),e.jsx(N,{title:"Are you sure?",description:"This action cannot be undone.",name:"This Purchase",isOpen:s,onClose:()=>i(!1),onConfirm:()=>r(a.id),loading:t})]})}const _=[{id:"select",header:({table:a})=>e.jsx(j,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(j,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"date",header:"Date",cell:({row:a})=>{var s;return x((s=a.original)==null?void 0:s.date)||""}},{accessorKey:"invoice_number",header:"Invoice Number",cell:({row:a})=>e.jsx(w,{to:`/billing/invoices/view/${a.original.id}`,className:"text-blue-600 hover:underline",children:a.original.invoice_number})},{accessorKey:"contact.name",header:"Supplier Name"},{accessorKey:"contact.phone",header:"Supplier Phone"},{accessorKey:"warehouse.name",header:"Warehouse"},{accessorKey:"delivery_date",header:"Delivery Date",cell:({row:a})=>{var s;return x(((s=a.original)==null?void 0:s.delivery_date)||"")}},{accessorKey:"due_date",header:"Due Date",cell:({row:a})=>{var s;return x(((s=a.original)==null?void 0:s.due_date)||"")}},{accessorKey:"total",header:"Total"},{accessorKey:"total_due",header:"Total Due"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(L,{rowData:a.original})}],M=()=>{const a=m(),[s,i]=p.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:t}=D(`per_page=${s.pageSize}&page=${s.pageIndex+1}`),c=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return t?e.jsx(T,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{title:"Purchase List",description:"Manage your sub accounts for you business"}),e.jsxs(l,{onClick:()=>a("/billing/purchases/add"),size:"sm",children:[e.jsx(I,{className:"mr-2 h-4 w-4"})," Add Purchase"]})]}),e.jsx(K,{}),n&&e.jsx("div",{children:e.jsx(A,{columns:_,data:c,paginationInfo:r,pagination:r&&s,setPagination:r&&i})})]})})})};export{M as default};
>>>>>>>> main:dist/assets/index-a4c1e76c.js
