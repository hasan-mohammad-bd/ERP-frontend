import{r as p,dI as y,y as j,a as e,aw as d,ax as g,ay as h,Q as c,az as S,aA as x,aB as f,aC as v,as as C,at as b,aE as u,dJ as O,ar as N,aG as w,aH as D,aI as I,aJ as T}from"./index-7f835caf.js";function A({rowData:a}){const[s,r]=p.useState(!1),[n,{isLoading:i}]=y(),t=j(),l=async m=>{try{await n(m).unwrap(),C.success("Item deleted successfully"),r(!1)}catch(o){b(o),console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(`/billing/sales-orders/edit/${a.id}`),children:e.jsx(S,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Update Opening Balance"})})]})}),e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(h,{asChild:!0,children:e.jsx(c,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{r(!0)},children:e.jsx(f,{className:"h-4 w-4 text-foreground"})})}),e.jsx(x,{children:e.jsx("p",{children:"Delete Opening Balance"})})]})}),e.jsx(v,{title:"Are you sure?",description:"This action cannot be undone.",name:"This Sales Order",isOpen:s,onClose:()=>r(!1),onConfirm:()=>l(a.id),loading:i})]})}const k=[{id:"select",header:({table:a})=>e.jsx(u,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(u,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"date",header:"Date",cell:({row:a})=>e.jsx(e.Fragment,{children:a.original.date})},{accessorKey:"invoice_number",header:"Invoice Number",cell:({row:a})=>e.jsx(e.Fragment,{children:a.original.invoice_number})},{accessorKey:"delivery_date",header:"Delivery Date"},{accessorKey:"due_date",header:"Due Date"},{accessorKey:"discount",header:"Discount"},{accessorKey:"shipping_charges",header:"Shipping Charges"},{accessorKey:"total",header:"Total"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(A,{rowData:a.original})}],K=()=>{const a=j(),[s,r]=p.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=O(`per_page=${s.pageSize}&page=${s.pageIndex+1}`),t=(n==null?void 0:n.data)||[],l=n==null?void 0:n.meta;return i?e.jsx(N,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(w,{title:"Sales Orders",description:"Manage your sub accounts for you business"}),e.jsxs(c,{onClick:()=>a("/billing/sales-orders/add"),size:"sm",children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Sales Order"]})]}),e.jsx(I,{}),n&&e.jsx("div",{children:e.jsx(T,{columns:k,data:t,paginationInfo:l,pagination:l&&s,setPagination:l&&r})})]})})})};export{K as default};
