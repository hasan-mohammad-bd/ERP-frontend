<<<<<<<< HEAD:dist/assets/index-cc1f93c8.js
import{z as p,r as y,db as v,a as e,az as o,aA as d,aB as h,aC as u,W as i,aD as f,aE as x,aF as C,aG as S,aw as b,aI as g,dc as N,dd as A,c5 as R,R as T,cF as k,av as I,aK as P,aL as D,aM as E,aN as V}from"./index-e481e15b.js";function z({rowData:a}){const s=p(),[r,t]=y.useState(!1),[l,{isLoading:c}]=v(),n=async j=>{try{await l(j),b.success("Receipt deleted successfully"),t(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Received Voucher"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Received Voucher"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:r,onClose:()=>t(!1),onConfirm:()=>n(a.id),loading:c})]})}const F=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{header:"Approval Status",cell:({row:a})=>{var s;return R((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(z,{rowData:a.original})}],M=()=>{const a=p(),[s,r]=T.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:l}=k(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=contra voucher`),c=(t==null?void 0:t.data)||[],n=t==null?void 0:t.meta;return l?e.jsx(I,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})})]}),e.jsx(E,{}),c&&e.jsx("div",{children:e.jsx(V,{columns:F,data:c,paginationInfo:n,pagination:n&&s,setPagination:n&&r})})]})})})};export{M as default};
========
import{z as p,r as y,db as v,a as e,az as o,aA as d,aB as h,aC as u,W as i,aD as f,aE as x,aF as C,aG as S,aw as b,aI as g,dc as N,dd as A,c5 as R,R as T,cF as k,av as I,aK as P,aL as D,aM as E,aN as V}from"./index-49b05597.js";function z({rowData:a}){const s=p(),[r,t]=y.useState(!1),[l,{isLoading:c}]=v(),n=async j=>{try{await l(j),b.success("Receipt deleted successfully"),t(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Received Voucher"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Received Voucher"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:r,onClose:()=>t(!1),onConfirm:()=>n(a.id),loading:c})]})}const F=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{header:"Approval Status",cell:({row:a})=>{var s;return R((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(z,{rowData:a.original})}],M=()=>{const a=p(),[s,r]=T.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:l}=k(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=contra voucher`),c=(t==null?void 0:t.data)||[],n=t==null?void 0:t.meta;return l?e.jsx(I,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})})]}),e.jsx(E,{}),c&&e.jsx("div",{children:e.jsx(V,{columns:F,data:c,paginationInfo:n,pagination:n&&s,setPagination:n&&r})})]})})})};export{M as default};
>>>>>>>> main:dist/assets/index-ce5b71b7.js
