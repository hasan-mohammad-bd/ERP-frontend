<<<<<<<< HEAD:dist/assets/index-4ae5adea.js
import{r as y,y as j,de as f,a as e,av as o,aw as d,ax as u,ay as h,Q as i,az as v,aA as x,aB as C,aC as S,as as b,aE as g,df as A,dg as N,c8 as T,R as I,cI as J,ar as k,aG as P,aH as R,aI as E,aJ as z}from"./index-b155454b.js";function D({rowData:a}){const[s,n]=y.useState(!1),t=j(),[c,{isLoading:r}]=f(),l=async p=>{try{await c(p),b.success("Journal deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/journal-voucher/edit/${a.id}`),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Journal"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Journal"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>l(a.id),loading:r})]})}const L=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"JV No.",cell:({row:a})=>e.jsx(A,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s,n;return((s=a==null?void 0:a.user)==null?void 0:s.name)??((n=a==null?void 0:a.user)==null?void 0:n.username)}},{header:"Approval Status",cell:({row:a})=>{var s;return T((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(D,{rowData:a.original})}],V=()=>{const a=j(),[s,n]=I.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:c}=J(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=journal voucher`),r=(t==null?void 0:t.data)||[],l=t==null?void 0:t.meta;return c?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Journal Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/journal-voucher/add"),size:"sm",children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Add Journal Entry"]})})]}),e.jsx(E,{}),r&&e.jsx("div",{children:e.jsx(z,{columns:L,data:r,paginationInfo:l,pagination:l&&s,setPagination:l&&n})})]})})})};export{V as default};
========
import{r as y,y as j,de as f,a as e,av as o,aw as d,ax as u,ay as h,Q as i,az as v,aA as x,aB as C,aC as S,as as b,aE as g,df as A,dg as N,c8 as T,R as I,cI as J,ar as k,aG as P,aH as R,aI as E,aJ as z}from"./index-6616b137.js";function D({rowData:a}){const[s,n]=y.useState(!1),t=j(),[c,{isLoading:r}]=f(),l=async p=>{try{await c(p),b.success("Journal deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(o,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/accounts/journal-voucher/edit/${a.id}`),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Journal"})})]})})}),e.jsx(o,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Journal"})})]})})}),e.jsx(S,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:s,onClose:()=>n(!1),onConfirm:()=>l(a.id),loading:r})]})}const L=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"JV No.",cell:({row:a})=>e.jsx(A,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(N,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s,n;return((s=a==null?void 0:a.user)==null?void 0:s.name)??((n=a==null?void 0:a.user)==null?void 0:n.username)}},{header:"Approval Status",cell:({row:a})=>{var s;return T((s=a.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(D,{rowData:a.original})}],V=()=>{const a=j(),[s,n]=I.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:c}=J(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=journal voucher`),r=(t==null?void 0:t.data)||[],l=t==null?void 0:t.meta;return c?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Journal Voucher",description:"Manage your sub accounts for you business"}),e.jsx(o,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/journal-voucher/add"),size:"sm",children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Add Journal Entry"]})})]}),e.jsx(E,{}),r&&e.jsx("div",{children:e.jsx(z,{columns:L,data:r,paginationInfo:l,pagination:l&&s,setPagination:l&&n})})]})})})};export{V as default};
>>>>>>>> 0ca5b693254d98a076a1d94a539afc0a89e0bcc9:dist/assets/index-e16c4493.js
