import{r as y,z as p,db as v,a as e,az as r,aA as d,aB as h,aC as u,W as o,aD as f,aE as x,aF as C,aG as R,aw as S,aI as g,dc as b,dd as N,c5 as A,R as T,cF as V,av as k,aK as I,aL as P,aM as z,aN as D}from"./index-ffb24eb6.js";function E({rowData:a}){const[s,n]=y.useState(!1),t=p(),[l,{isLoading:i}]=v(),c=async j=>{try{await l(j),S.success("Receipt deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(r,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Received Voucher"})})]})})}),e.jsx(r,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Received Voucher"})})]})})}),e.jsx(R,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>c(a.id),loading:i})]})}const F=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:a})=>e.jsx(b,{rowData:a.original})},{accessorKey:"type",header:"Type",cell:({row:a})=>a.original.type==="Receipt Voucher"?"Received Voucher":a.original.type},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{header:"Approval Status",cell:({row:a})=>{var s;return A((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(E,{rowData:a.original})}],M=()=>{const a=p(),[s,n]=T.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:l}=V(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return l?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(I,{title:"Received Voucher",description:"Manage your sub accounts for you business"}),e.jsx(r,{roles:["entries.create"],children:e.jsxs(o,{onClick:()=>a("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(P,{className:"mr-2 h-4 w-4"})," Add Received Entry"]})})]}),e.jsx(z,{}),i&&e.jsx("div",{children:e.jsx(D,{columns:F,data:i,paginationInfo:c,pagination:c&&s,setPagination:c&&n})})]})})})};export{M as default};
