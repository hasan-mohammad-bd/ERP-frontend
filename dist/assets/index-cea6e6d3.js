import{r as p,aA as g,b_ as y,a as e,a5 as i,a6 as d,a7 as u,B as r,a8 as f,a9 as h,aa as v,ab as b,a3 as C,ad as x,b$ as S,c0 as N,R as A,by as T,Y as k,ae as J,t as P,af as I,ag as R}from"./index-96b0e7a7.js";function D({rowData:a}){const[s,t]=p.useState(!1),n=g(),[c,{isLoading:o}]=y(),l=async j=>{try{await c(j),C.success("Journal deleted successfully"),t(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/accounts/journal-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Update Journal"})})]})}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Delete Journal"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>t(!1),onConfirm:()=>l(a.id),loading:o})]})}const E=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"JV No.",cell:({row:a})=>e.jsx(S,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(D,{rowData:a.original})}],L=()=>{const a=g(),[s,t]=A.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:c}=T(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=journal voucher`),o=(n==null?void 0:n.data)||[],l=n==null?void 0:n.meta;return c?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Journal Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(r,{onClick:()=>a("/accounts/journal-voucher/add"),size:"sm",children:[e.jsx(P,{className:"mr-2 h-4 w-4"})," Add Journal Entry"]})]}),e.jsx(I,{}),o&&e.jsx("div",{children:e.jsx(R,{columns:E,data:o,paginationInfo:l,pagination:l&&s,setPagination:l&&t})})]})})})};export{L as default};
