import{Z as g,r as m,by as y,a as e,ag as i,ah as d,ai as h,B as r,aj as f,ak as u,al as C,am as v,af as b,ao as x,bz as S,R as N,_ as A,$ as R,ap as T,t as k,aq as P,ar as V}from"./index-69ae6d80.js";function D({rowData:a}){const s=g(),[o,t]=m.useState(!1),[l,{isLoading:c}]=y(),n=async p=>{try{await l(p),b.success("Receipt deleted successfully"),t(!1)}catch(j){console.log(j)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(`/accounts/contra-voucher/edit/${a.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Update Receipt Voucher"})})]})}),e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(C,{className:"h-4 w-4 text-foreground"})})}),e.jsx(u,{children:e.jsx("p",{children:"Delete Receipt Voucher"})})]})}),e.jsx(v,{title:"Are you sure?",description:"This action cannot be undone.",name:a.entry_number,isOpen:o,onClose:()=>t(!1),onConfirm:()=>n(a.id),loading:c})]})}const E=[{id:"select",header:({table:a})=>e.jsx(x,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(x,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"entry_number",header:"CV No.",cell:({row:a})=>e.jsx(S,{rowData:a.original})},{accessorKey:"type",header:"Type"},{accessorKey:"date",header:"Date"},{accessorKey:"total",header:"Total"},{header:"Location",accessorFn:a=>{var s;return(s=a==null?void 0:a.location)==null?void 0:s.name}},{header:"User",accessorFn:a=>{var s;return(s=a==null?void 0:a.user)==null?void 0:s.name}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(D,{rowData:a.original})}],z=()=>{const a=g(),[s,o]=N.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:l}=A(`per_page=${s.pageSize}&page=${s.pageIndex+1}&type=contra voucher`),c=(t==null?void 0:t.data)||[],n=t==null?void 0:t.meta;return l?e.jsx(R,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{title:"Contra Voucher",description:"Manage your sub accounts for you business"}),e.jsxs(r,{onClick:()=>a("/accounts/contra-voucher/add"),children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Add Contra Entry"]})]}),e.jsx(P,{}),c&&e.jsx("div",{children:e.jsx(V,{columns:E,data:c,paginationInfo:n,pagination:n&&s,setPagination:n&&o})})]})})})};export{z as default};
