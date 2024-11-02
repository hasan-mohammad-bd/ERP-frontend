import{au as j,r as y,cG as f,a as e,ch as l,ac as d,ad as h,ae as u,B as i,af as C,ag as x,ah as v,ai as b,a9 as S,ak as g,cH as N,cI as A,R,cb as T,a2 as k,am as I,t as P,an as V,ao as D}from"./index-086c5f78.js";function E({rowData:a}){const s=j(),[o,n]=y.useState(!1),[r,{isLoading:c}]=f(),t=async p=>{try{await r(p),S.success("Receipt deleted successfully"),n(!1)}catch(m){console.log(m)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(l,{roles:["entries.edit"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})})}),e.jsx(l,{roles:["entries.delete"],children:e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:o,onClose:()=>n(!1),onConfirm:()=>t(a.id),loading:c})]})}const L=[{id:"select",header:({table:a})=>e.jsx(g,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(g,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV No.",cell:({row:a})=>e.jsx(N,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total",cell:({row:a})=>e.jsx(A,{amount:a.original.total})},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(E,{rowData:a.original})}],z=()=>{const a=j(),[s,o]=R.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:r}=T(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=contra voucher`),c=(n==null?void 0:n.data)||[],t=n==null?void 0:n.meta;return r?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(I,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsx(l,{roles:["entries.create"],children:e.jsxs(i,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(P,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})})]}),e.jsx(V,{}),c&&e.jsx("div",{children:e.jsx(D,{columns:L,data:c,paginationInfo:t,pagination:t&&s,setPagination:t&&o})})]})})})};export{z as default};
