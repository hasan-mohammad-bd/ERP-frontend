import{aN as g,r as j,by as f,k as e,a4 as l,a5 as d,a6 as h,B as i,a7 as y,a8 as u,a9 as C,aa as v,a3 as b,ac as x,R as N,bz as S,V as A,ad as R,P as T,ae as k,af as P}from"./index-fcd704ec.js";import{C as w}from"./cell-action-voucher-details-314e88f1.js";function V({rowData:a}){const n=g(),[o,s]=j.useState(!1),[r,{isLoading:c}]=f(),t=async p=>{try{await r(p),b.success("Receipt deleted successfully"),s(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{s(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(v,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:o,onClose:()=>s(!1),onConfirm:()=>t(a.id),loading:c})]})}const E=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV Number",cell:({row:a})=>e.jsx(w,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:a=>a.location.name},{header:"User",accessorFn:a=>a.user.name},{header:"financial-year",accessorFn:a=>a.financial_year.name},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(V,{rowData:a.original})}],z=()=>{const a=g(),[n,o]=N.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:r}=S(`per_page=${n.pageSize}&page=${n.pageIndex+1}&type=contra voucher`),c=(s==null?void 0:s.data)||[],t=s==null?void 0:s.meta;return r?e.jsx(A,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(R,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(i,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(T,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})]}),e.jsx(k,{}),c&&e.jsx("div",{children:e.jsx(P,{columns:E,data:c,paginationInfo:t,pagination:t&&n,setPagination:t&&o})})]})})})};export{z as default};
