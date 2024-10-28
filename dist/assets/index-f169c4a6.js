import{r as p,au as g,cB as y,a as e,ac as i,ad as d,ae as u,B as r,af as f,ag as h,ah as v,ai as C,a9 as S,ak as x,cC as b,cD as N,R as A,c7 as T,a2 as k,am as J,t as P,an as D,ao as I}from"./index-296059ef.js";function R({rowData:a}){const[s,t]=p.useState(!1),n=g(),[o,{isLoading:l}]=y(),c=async j=>{try{await o(j),S.success("Journal deleted successfully"),t(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/accounts/journal-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Update Journal"})})]})}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Delete Journal"})})]})}),e.jsx(C,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>t(!1),onConfirm:()=>c(a.id),loading:l})]})}const E=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"JV No.",cell:({row:a})=>e.jsx(b,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(R,{rowData:a.original})}],L=()=>{const a=g(),[s,t]=A.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:o}=T(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=journal voucher`),l=(n==null?void 0:n.data)||[],c=n==null?void 0:n.meta;return o?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Journal Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(r,{onClick:()=>a("/accounts/journal-voucher/add"),size:"sm",children:[e.jsx(P,{className:"mr-2 h-4 w-4"})," Add Journal Entry"]})]}),e.jsx(D,{}),l&&e.jsx("div",{children:e.jsx(I,{columns:E,data:l,paginationInfo:c,pagination:c&&s,setPagination:c&&t})})]})})})};export{L as default};
