import{r as j,dH as v,y as p,a as e,az as d,aA as h,aB as u,V as r,aC as f,aD as g,aE as y,aF as b,av as P,aw as C,aH as x,L as N,dI as S,au as D,aJ as w,aK as I,aL as T,aM as k}from"./index-c8a5d6c4.js";function A({rowData:s}){const[a,i]=j.useState(!1),[n,{isLoading:c}]=v(),l=p(),t=async m=>{try{await n(m).unwrap(),P.success("Item deleted successfully"),i(!1)}catch(o){C(o),console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(`/billing/purchases/edit/${s.id}`),children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(g,{children:e.jsx("p",{children:"Update Purchase"})})]})}),e.jsx(d,{children:e.jsxs(h,{children:[e.jsx(u,{asChild:!0,children:e.jsx(r,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(!0)},children:e.jsx(y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(g,{children:e.jsx("p",{children:"Delete Purchase"})})]})}),e.jsx(b,{title:"Are you sure?",description:"This action cannot be undone.",name:"This Purchase",isOpen:a,onClose:()=>i(!1),onConfirm:()=>t(s.id),loading:c})]})}const L=[{id:"select",header:({table:s})=>e.jsx(x,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(x,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"invoice_number",header:"Invoice Number",cell:({row:s})=>e.jsx(N,{to:`/billing/invoices/view/${s.original.id}`,className:"text-blue-600 hover:underline",children:s.original.invoice_number})},{accessorKey:"date",header:"Date"},{accessorKey:"delivery_date",header:"Delivery Date"},{accessorKey:"due_date",header:"Due Date"},{accessorKey:"discount",header:"Discount"},{accessorKey:"total",header:"Total"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(A,{rowData:s.original})}],z=()=>{const s=p(),[a,i]=j.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:c}=S(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),l=(n==null?void 0:n.data)||[],t=n==null?void 0:n.meta;return c?e.jsx(D,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(w,{title:"Purchase List",description:"Manage your sub accounts for you business"}),e.jsxs(r,{onClick:()=>s("/billing/purchases/add"),size:"sm",children:[e.jsx(I,{className:"mr-2 h-4 w-4"})," Add Purchase"]})]}),e.jsx(T,{}),n&&e.jsx("div",{children:e.jsx(k,{columns:L,data:l,paginationInfo:t,pagination:t&&a,setPagination:t&&i})})]})})})};export{z as default};
