import{r as p,aM as g,bt as y,j as e,a3 as i,a4 as d,a5 as u,B as l,a6 as f,a7 as h,a8 as v,a9 as b,a2 as C,ab as x,R as S,bu as N,W as A,ac as T,s as k,ad as w,ae as J}from"./index-c7e7546b.js";import{C as P}from"./cell-action-voucher-details-d66cdd04.js";import"./typeof-7fd5df1e.js";function R({rowData:a}){const[s,t]=p.useState(!1),n=g(),[c,{isLoading:r}]=y(),o=async j=>{try{await c(j),C.success("Journal deleted successfully"),t(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(`/accounts/journal-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Update Journal"})})]})}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(h,{children:e.jsx("p",{children:"Delete Journal"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(a.id),loading:r})]})}const D=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"JV No.",cell:({row:a})=>e.jsx(P,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:a=>a.location.name},{header:"User",accessorFn:a=>a.user.name},{header:"Financial Year",accessorFn:a=>a.financial_year.name},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(R,{rowData:a.original})}],z=()=>{const a=g(),[s,t]=S.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:c}=N(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=journal voucher`),r=(n==null?void 0:n.data)||[],o=n==null?void 0:n.meta;return c?e.jsx(A,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{title:"Journal Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(l,{onClick:()=>a("/accounts/journal-voucher/add"),size:"sm",children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Add Journal Entry"]})]}),e.jsx(w,{}),r&&e.jsx("div",{children:e.jsx(J,{columns:D,data:r,paginationInfo:o,pagination:o&&s,setPagination:o&&t})})]})})})};export{z as default};
