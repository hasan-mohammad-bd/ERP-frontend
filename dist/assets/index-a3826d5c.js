import{r as m,a1 as g,bF as y,a as e,al as r,am as d,an as h,B as l,ao as f,ap as u,aq as v,ar as b,ak as C,at as x,bG as S,R as N,a2 as R,a3 as A,au as T,t as k,av as P,aw as V}from"./index-47685b51.js";function D({rowData:a}){const[s,n]=m.useState(!1),t=g(),[o,{isLoading:i}]=y(),c=async p=>{try{await o(p),C.success("Receipt deleted successfully"),n(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>c(a.id),loading:i})]})}const E=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:a})=>e.jsx(S,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(D,{rowData:a.original})}],z=()=>{const a=g(),[s,n]=N.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=R(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return o?e.jsx(A,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(l,{onClick:()=>a("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Add Receipt Entry"]})]}),e.jsx(P,{}),i&&e.jsx("div",{children:e.jsx(V,{columns:E,data:i,paginationInfo:c,pagination:c&&s,setPagination:c&&n})})]})})})};export{z as default};
