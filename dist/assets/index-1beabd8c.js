import{r as m,aU as g,bK as y,a as e,a5 as r,a6 as d,a7 as h,B as l,a8 as f,a9 as u,aa as v,ab as b,a4 as C,ad as x,bL as S,R as N,bd as R,Y as A,ae as T,v as k,af as P,ag as V}from"./index-492716bc.js";function D({rowData:s}){const[a,n]=m.useState(!1),t=g(),[o,{isLoading:i}]=y(),c=async p=>{try{await o(p),C.success("Receipt deleted successfully"),n(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${s.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:s.entry_number,isOpen:a,onClose:()=>n(!1),onConfirm:()=>c(s.id),loading:i})]})}const E=[{id:"select",header:({table:s})=>e.jsx(x,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(x,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:s})=>e.jsx(S,{rowData:s.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:s=>{var a;return(a=s==null?void 0:s.location)==null?void 0:a.name}},{header:"User",accessorFn:s=>{var a;return(a=s==null?void 0:s.user)==null?void 0:a.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(D,{rowData:s.original})}],L=()=>{const s=g(),[a,n]=N.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=R(`per_page=${a.pageSize}&page=${a.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return o?e.jsx(A,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(l,{onClick:()=>s("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Add Receipt Entry"]})]}),e.jsx(P,{}),i&&e.jsx("div",{children:e.jsx(V,{columns:E,data:i,paginationInfo:c,pagination:c&&a,setPagination:c&&n})})]})})})};export{L as default};
