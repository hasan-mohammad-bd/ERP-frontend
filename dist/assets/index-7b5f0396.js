import{Z as g,r as m,bw as y,j as e,ae as l,af as d,ag as h,B as i,ah as f,ai as u,aj as C,ak as v,ad as b,am as x,R as S,_ as N,$ as A,an as R,s as T,ao as k,ap as w}from"./index-1a9d0d2b.js";import{C as P}from"./cell-action-voucher-details-b5566f55.js";import"./typeof-7fd5df1e.js";function V({rowData:a}){const n=g(),[o,s]=m.useState(!1),[r,{isLoading:c}]=y(),t=async p=>{try{await r(p),b.success("Receipt deleted successfully"),s(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{s(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(v,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:o,onClose:()=>s(!1),onConfirm:()=>t(a.id),loading:c})]})}const D=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>a.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:n=>a.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV No.",cell:({row:a})=>e.jsx(P,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:a=>a.location.name},{header:"User",accessorFn:a=>a.user.name},{header:"Financial Year",accessorFn:a=>a.financial_year.name},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(V,{rowData:a.original})}],L=()=>{const a=g(),[n,o]=S.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:r}=N(`per_page=${n.pageSize}&page=${n.pageIndex+1}&type=contra voucher`),c=(s==null?void 0:s.data)||[],t=s==null?void 0:s.meta;return r?e.jsx(A,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(R,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(i,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(T,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})]}),e.jsx(k,{}),c&&e.jsx("div",{children:e.jsx(w,{columns:D,data:c,paginationInfo:t,pagination:t&&n,setPagination:t&&o})})]})})})};export{L as default};
