import{r as d,db as V,B as m,d8 as O,a as e,aA as g,aB as h,aC as u,aD as x,X as l,aV as k,aF as p,aE as I,aG as T,aH as M,aI as P,aw as y,ax as E,aJ as j,d9 as F,da as D,c6 as z,R as L,cB as B,aL as K,aM as $,aN as G,aO as H}from"./index-554facb6.js";import{V as U}from"./voucher-details-for-received-payment-6c294b2b.js";function _({rowData:s}){const[a,i]=d.useState(!1),[t,r]=d.useState(!1),{data:n,isFetching:c}=V(`${s==null?void 0:s.id}`,{skip:!t}),f=()=>{r(!0),i(!0)},[v,o]=d.useState(!1),C=m(),[N,{isLoading:R}]=O(),S=async b=>{try{await N(b),E.success("Receipt deleted successfully"),o(!1)}catch(A){console.log(A)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsxs(g,{roles:["entries.edit"],children:[e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(x,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:f,children:e.jsx(k,{className:"h-4 w-4 text-foreground"})})}),e.jsx(p,{children:e.jsx("p",{children:"Update Received Voucher"})})]})}),e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(x,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>C(`/accounts/receipt-voucher/edit/${s.id}`),children:e.jsx(I,{className:"h-4 w-4 text-foreground"})})}),e.jsx(p,{children:e.jsx("p",{children:"Update Received Voucher"})})]})})]}),e.jsx(g,{roles:["entries.delete"],children:e.jsx(h,{children:e.jsxs(u,{children:[e.jsx(x,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{o(!0)},children:e.jsx(T,{className:"h-4 w-4 text-foreground"})})}),e.jsx(p,{children:e.jsx("p",{children:"Delete Received Voucher"})})]})})}),e.jsx(M,{title:"Are you sure?",description:"This action cannot be undone.",name:s.entry_number,isOpen:v,onClose:()=>o(!1),onConfirm:()=>S(s.id),loading:R}),a&&n&&e.jsx(P,{isOpen:a,toggleModal:()=>i(!1),className:"max-w-5xl h-fit",children:c?e.jsx("div",{className:"w-full h-full flex justify-center items-center",children:e.jsx(y,{})}):e.jsx(U,{data:n==null?void 0:n.data})})]})}const J=[{id:"select",header:({table:s})=>e.jsx(j,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(j,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:s})=>e.jsx(F,{rowData:s.original})},{accessorKey:"type",header:"Type",cell:({row:s})=>s.original.type==="Receipt Voucher"?"Received Voucher":s.original.type},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:s})=>e.jsx(D,{amount:s.original.total})},{header:"Location",accessorFn:s=>{var a;return(a=s==null?void 0:s.location)==null?void 0:a.name}},{header:"User",accessorFn:s=>{var a;return(a=s==null?void 0:s.user)==null?void 0:a.name}},{header:"Approval Status",cell:({row:s})=>{var a;return z((a=s.original.approval)==null?void 0:a.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(_,{rowData:s.original})}],Z=()=>{const s=m(),[a,i]=L.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:r}=B(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=receipt voucher`),n=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return r?e.jsx(y,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(K,{title:"Received Voucher",description:"Manage your sub accounts for you business"}),e.jsx(g,{roles:["entries.create"],children:e.jsxs(l,{onClick:()=>s("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx($,{className:"mr-2 h-4 w-4"})," Add Received Entry"]})})]}),e.jsx(G,{}),n&&e.jsx("div",{children:e.jsx(H,{columns:J,data:n,paginationInfo:c,pagination:c&&a,setPagination:c&&i})})]})})})};export{Z as default};
