import{r as j,aM as g,bt as y,j as e,a3 as l,a4 as d,a5 as h,B as r,a6 as f,a7 as u,a8 as v,a9 as b,a2 as C,ab as x,R as S,bu as N,W as R,ac as A,s as T,ad as k,ae as w}from"./index-e9177e9c.js";import{C as P}from"./cell-action-voucher-details-aa6a9a00.js";import"./typeof-7fd5df1e.js";function V({rowData:a}){const[s,n]=j.useState(!1),t=g(),[o,{isLoading:i}]=y(),c=async p=>{try{await o(p),C.success("Receipt deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/receipt-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>c(a.id),loading:i})]})}const D=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"RV No.",cell:({row:a})=>e.jsx(P,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:a=>a.location.name},{header:"User",accessorFn:a=>a.user.name},{header:"Financial Year",accessorFn:a=>a.financial_year.name},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(V,{rowData:a.original})}],z=()=>{const a=g(),[s,n]=S.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:o}=N(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=receipt voucher`),i=(t==null?void 0:t.data)||[],c=t==null?void 0:t.meta;return o?e.jsx(R,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(A,{title:"Receipt Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(r,{onClick:()=>a("/accounts/receipt-voucher/add"),size:"sm",children:[e.jsx(T,{className:"mr-2 h-4 w-4"})," Add Receipt Entry"]})]}),e.jsx(k,{}),i&&e.jsx("div",{children:e.jsx(w,{columns:D,data:i,paginationInfo:c,pagination:c&&s,setPagination:c&&n})})]})})})};export{z as default};
