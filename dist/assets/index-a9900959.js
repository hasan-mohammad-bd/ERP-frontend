<<<<<<<< HEAD:dist/assets/index-01f5c92b.js
import{r as y,db as v,z as p,a as e,az as o,aA as d,aB as h,aC as u,W as i,aD as f,aE as x,aF as C,aG as S,aw as b,aI as g,dc as N,dd as A,c5 as P,R as T,cF as R,av as k,aK as I,aL as z,aM as D,aN as E}from"./index-a17decc1.js";function F({rowData:a}){const[s,n]=y.useState(!1),[l,{isLoading:r}]=v(),c=p(),t=async m=>{try{await l(m),b.success("Payment voucher deleted successfully"),n(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/accounts/payment-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Payment Voucher"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete payment voucher"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>t(a.id),loading:r})]})}const L=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"PV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{header:"Approval Status",cell:({row:a})=>{var s;return P((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(F,{rowData:a.original})}],V=()=>{const[a,s]=T.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:l}=R(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=payment voucher`),r=p(),c=(n==null?void 0:n.data)||[],t=n==null?void 0:n.meta;return l?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(I,{title:"Received Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>r("/accounts/payment-voucher/add"),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Payment Entry"]})})]}),e.jsx(D,{}),c&&e.jsx("div",{children:e.jsx(E,{columns:L,data:c,paginationInfo:t,pagination:t&&a,setPagination:t&&s})})]})})})};export{V as default};
========
import{r as y,d9 as v,z as p,a as e,az as o,aA as d,aB as h,aC as u,W as i,aD as f,aE as x,aF as C,aG as S,aw as b,aI as g,da as N,db as A,c3 as P,R as T,cD as R,av as k,aK as D,aL as I,aM as z,aN as E}from"./index-df507673.js";function L({rowData:a}){const[s,n]=y.useState(!1),[l,{isLoading:r}]=v(),c=p(),t=async m=>{try{await l(m),b.success("Payment voucher deleted successfully"),n(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/accounts/payment-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Payment Voucher"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete payment voucher"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>t(a.id),loading:r})]})}const M=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"PV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{header:"Approval Status",cell:({row:a})=>{var s;return P((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(L,{rowData:a.original})}],F=()=>{const[a,s]=T.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:l}=R(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=payment voucher`),r=p(),c=(n==null?void 0:n.data)||[],t=n==null?void 0:n.meta;return l?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(D,{title:"Received Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>r("/accounts/payment-voucher/add"),size:"sm",children:[e.jsx(I,{className:"mr-2 h-4 w-4"})," Add Payment Entry"]})})]}),e.jsx(z,{}),c&&e.jsx("div",{children:e.jsx(E,{columns:M,data:c,paginationInfo:t,pagination:t&&a,setPagination:t&&s})})]})})})};export{F as default};
>>>>>>>> main:dist/assets/index-a9900959.js
