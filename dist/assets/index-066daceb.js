import{r as j,bA as y,Z as g,a as e,ah as r,ai as d,aj as h,B as i,ak as f,al as u,am as v,an as b,ag as C,ap as x,bB as S,R as N,_ as P,$ as A,aq as T,t as k,ar as R,as as D}from"./index-6c9c37b6.js";function E({rowData:a}){const[s,n]=j.useState(!1),[l,{isLoading:o}]=y(),c=g(),t=async m=>{try{await l(m),C.success("Payment voucher deleted successfully"),n(!1)}catch(p){console.log(p)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/accounts/payment-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Payment Voucher"})})]})}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete payment voucher"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>t(a.id),loading:o})]})}const I=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"PV No.",cell:({row:a})=>e.jsx(S,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(E,{rowData:a.original})}],z=()=>{const[a,s]=N.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:l}=P(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=payment voucher`),o=g(),c=(n==null?void 0:n.data)||[],t=n==null?void 0:n.meta;return l?e.jsx(A,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(i,{onClick:()=>o("/accounts/payment-voucher/add"),size:"sm",children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Add Payment Entry"]})]}),e.jsx(R,{}),c&&e.jsx("div",{children:e.jsx(D,{columns:I,data:c,paginationInfo:t,pagination:t&&a,setPagination:t&&s})})]})})})};export{z as default};
