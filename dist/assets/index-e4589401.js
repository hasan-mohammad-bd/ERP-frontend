<<<<<<<< HEAD:dist/assets/index-e4589401.js
import{x as j,r as y,cK as f,a as e,aq as l,ar as d,as as h,at as x,M as i,au as C,av as u,aw as v,ax as S,an as b,az as g,cL as N,cM as A,R,cp as T,am as k,aB as P,t as D,aC as I,aD as M}from"./index-4b237266.js";function V({rowData:a}){const s=j(),[r,t]=y.useState(!1),[o,{isLoading:c}]=f(),n=async p=>{try{await o(p),b.success("Receipt deleted successfully"),t(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(l,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})})}),e.jsx(l,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:r,onClose:()=>t(!1),onConfirm:()=>n(a.id),loading:c})]})}const E=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(V,{rowData:a.original})}],z=()=>{const a=j(),[s,r]=R.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=T(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=contra voucher`),c=(t==null?void 0:t.data)||[],n=t==null?void 0:t.meta;return o?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsx(l,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})})]}),e.jsx(I,{}),c&&e.jsx("div",{children:e.jsx(M,{columns:E,data:c,paginationInfo:n,pagination:n&&s,setPagination:n&&r})})]})})})};export{z as default};
========
import{x as j,r as y,cK as f,a as e,aq as l,ar as d,as as h,at as x,M as i,au as C,av as u,aw as v,ax as S,an as b,az as g,cL as N,cM as A,R,cp as T,am as k,aB as P,t as D,aC as I,aD as M}from"./index-945ff9a6.js";function V({rowData:a}){const s=j(),[r,t]=y.useState(!1),[o,{isLoading:c}]=f(),n=async p=>{try{await o(p),b.success("Receipt deleted successfully"),t(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(l,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})})}),e.jsx(l,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:r,onClose:()=>t(!1),onConfirm:()=>n(a.id),loading:c})]})}const E=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(V,{rowData:a.original})}],z=()=>{const a=j(),[s,r]=R.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=T(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=contra voucher`),c=(t==null?void 0:t.data)||[],n=t==null?void 0:t.meta;return o?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsx(l,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})})]}),e.jsx(I,{}),c&&e.jsx("div",{children:e.jsx(M,{columns:E,data:c,paginationInfo:n,pagination:n&&s,setPagination:n&&r})})]})})})};export{z as default};
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/index-9d250980.js
