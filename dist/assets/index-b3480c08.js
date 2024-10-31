import{r as y,cG as f,au as m,a as e,ch as o,ac as d,ad as h,ae as u,B as r,af as v,ag as x,ah as C,ai as b,a9 as S,ak as g,cH as N,cI as P,R as A,cb as T,a2 as k,am as R,t as I,an as D,ao as E}from"./index-911882cf.js";function V({rowData:a}){const[s,n]=y.useState(!1),[l,{isLoading:i}]=f(),c=m(),t=async p=>{try{await l(p),S.success("Payment voucher deleted successfully"),n(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(`/accounts/payment-voucher/edit/${a.id}`),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Payment Voucher"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete payment voucher"})})]})})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>t(a.id),loading:i})]})}const z=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"PV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(P,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(V,{rowData:a.original})}],M=()=>{const[a,s]=A.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:l}=T(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=payment voucher`),i=m(),c=(n==null?void 0:n.data)||[],t=n==null?void 0:n.meta;return l?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(R,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(r,{onClick:()=>i("/accounts/payment-voucher/add"),size:"sm",children:[e.jsx(I,{className:"mr-2 h-4 w-4"})," Add Payment Entry"]})})]}),e.jsx(D,{}),c&&e.jsx("div",{children:e.jsx(E,{columns:z,data:c,paginationInfo:t,pagination:t&&a,setPagination:t&&s})})]})})})};export{M as default};
