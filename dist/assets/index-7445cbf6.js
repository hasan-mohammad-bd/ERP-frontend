<<<<<<<< HEAD:dist/assets/index-7445cbf6.js
import{r as y,x as p,cK as f,a as e,aq as r,ar as d,as as h,at as x,M as o,au as v,av as u,aw as C,ax as R,an as S,az as g,cL as b,cM as N,R as A,cp as T,am as k,aB as P,t as D,aC as I,aD as M}from"./index-4b237266.js";function V({rowData:s}){const[a,n]=y.useState(!1),t=p(),[l,{isLoading:i}]=f(),c=async j=>{try{await l(j),S.success("Receipt deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(r,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${s.id}`),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})})}),e.jsx(r,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})})}),e.jsx(R,{title:"Are you sure?",description:"This action cannot be undone.",name:s.entry_number,isOpen:a,onClose:()=>n(!1),onConfirm:()=>c(s.id),loading:i})]})}const z=[{id:"select",header:({table:s})=>e.jsx(g,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(g,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:s})=>e.jsx(b,{rowData:s.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:s})=>e.jsx(N,{amount:s.original.total})},{header:"Location",accessorFn:s=>{var a;return(a=s==null?void 0:s.location)==null?void 0:a.name}},{header:"User",accessorFn:s=>{var a;return(a=s==null?void 0:s.user)==null?void 0:a.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(V,{rowData:s.original})}],L=()=>{const s=p(),[a,n]=A.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:l}=T(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return l?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsx(r,{roles:["entries.create"],children:e.jsxs(o,{onClick:()=>s("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Receipt Entry"]})})]}),e.jsx(I,{}),i&&e.jsx("div",{children:e.jsx(M,{columns:z,data:i,paginationInfo:c,pagination:c&&a,setPagination:c&&n})})]})})})};export{L as default};
========
import{r as y,x as p,cK as f,a as e,aq as r,ar as d,as as h,at as x,M as o,au as v,av as u,aw as C,ax as R,an as S,az as g,cL as b,cM as N,R as A,cp as T,am as k,aB as P,t as D,aC as I,aD as M}from"./index-945ff9a6.js";function V({rowData:s}){const[a,n]=y.useState(!1),t=p(),[l,{isLoading:i}]=f(),c=async j=>{try{await l(j),S.success("Receipt deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(r,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${s.id}`),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})})}),e.jsx(r,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(x,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})})}),e.jsx(R,{title:"Are you sure?",description:"This action cannot be undone.",name:s.entry_number,isOpen:a,onClose:()=>n(!1),onConfirm:()=>c(s.id),loading:i})]})}const z=[{id:"select",header:({table:s})=>e.jsx(g,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(g,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:s})=>e.jsx(b,{rowData:s.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:s})=>e.jsx(N,{amount:s.original.total})},{header:"Location",accessorFn:s=>{var a;return(a=s==null?void 0:s.location)==null?void 0:a.name}},{header:"User",accessorFn:s=>{var a;return(a=s==null?void 0:s.user)==null?void 0:a.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(V,{rowData:s.original})}],L=()=>{const s=p(),[a,n]=A.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:l}=T(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return l?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsx(r,{roles:["entries.create"],children:e.jsxs(o,{onClick:()=>s("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Receipt Entry"]})})]}),e.jsx(I,{}),i&&e.jsx("div",{children:e.jsx(M,{columns:z,data:i,paginationInfo:c,pagination:c&&a,setPagination:c&&n})})]})})})};export{L as default};
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/index-a46da087.js
