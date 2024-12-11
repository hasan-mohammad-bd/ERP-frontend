import{r as y,y as j,dj as f,a as e,ay as o,az as d,aA as u,aB as h,V as i,aC as v,aD as x,aE as C,aF as S,av as N,aH as g,dk as b,dl as A,cd as T,R as k,cN as J,au as P,aJ as R,aK as D,aL as E,aM as I}from"./index-5e0f2197.js";function z({rowData:a}){const[s,n]=y.useState(!1),t=j(),[c,{isLoading:r}]=f(),l=async p=>{try{await c(p),N.success("Journal deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/journal-voucher/edit/${a.id}`),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Journal"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Journal"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>l(a.id),loading:r})]})}const L=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"JV No.",cell:({row:a})=>e.jsx(b,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s,n;return((s=a==null?void 0:a.user)==null?void 0:s.name)??((n=a==null?void 0:a.user)==null?void 0:n.username)}},{header:"Approval Status",cell:({row:a})=>{var s;return T((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(z,{rowData:a.original})}],V=()=>{const a=j(),[s,n]=k.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:c}=J(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=journal voucher`),r=(t==null?void 0:t.data)||[],l=t==null?void 0:t.meta;return c?e.jsx(P,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(R,{title:"Journal Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/journal-voucher/add"),size:"sm",children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Journal Entry"]})})]}),e.jsx(E,{}),r&&e.jsx("div",{children:e.jsx(I,{columns:L,data:r,paginationInfo:l,pagination:l&&s,setPagination:l&&n})})]})})})};export{V as default};
