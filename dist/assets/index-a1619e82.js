import{r as y,b_ as j,aA as g,a as e,a5 as r,a6 as d,a7 as h,B as i,a8 as f,a9 as u,aa as v,ab as b,a3 as C,ad as x,b$ as S,c0 as N,R as P,by as A,Y as T,ae as k,t as R,af as I,ag as D}from"./index-96b0e7a7.js";function E({rowData:a}){const[s,n]=y.useState(!1),[o,{isLoading:l}]=j(),c=g(),t=async m=>{try{await o(m),C.success("Payment voucher deleted successfully"),n(!1)}catch(p){console.log(p)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/accounts/payment-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Payment Voucher"})})]})}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete payment voucher"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>t(a.id),loading:l})]})}const V=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"PV No.",cell:({row:a})=>e.jsx(S,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(E,{rowData:a.original})}],L=()=>{const[a,s]=P.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:o}=A(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=payment voucher`),l=g(),c=(n==null?void 0:n.data)||[],t=n==null?void 0:n.meta;return o?e.jsx(T,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(i,{onClick:()=>l("/accounts/payment-voucher/add"),size:"sm",children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Add Payment Entry"]})]}),e.jsx(I,{}),c&&e.jsx("div",{children:e.jsx(D,{columns:V,data:c,paginationInfo:t,pagination:t&&a,setPagination:t&&s})})]})})})};export{L as default};
