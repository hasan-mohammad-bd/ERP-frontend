import{dU as k,dV as R,dT as P,B as U,D as V,dW as E,a as e,au as j,G,H as S,J as y,K as C,N as b,I as H,Q as N,b1 as K,b2 as _,b3 as B,b4 as J,b6 as Q,V as m,av as u,aw as v,r as f,dX as $,ay as p,az as w,aA as F,aB as M,aC as W,aD as A,aE as X,aF as q,aG as O,aH as I,R as Y,b8 as Z,aJ as D,aK as ee,aL as se,aM as ae}from"./index-c6af63dc.js";function z({modalClose:a,data:s}){var L;const[l,{isLoading:i}]=k(),[n,{isLoading:d}]=R(),{data:t,isLoading:r}=P("page=1&per_page=1000"),x=(t==null?void 0:t.data)||[],o=U({resolver:V(E),defaultValues:{name:(s==null?void 0:s.name)||"",organization_id:((L=s==null?void 0:s.organization)==null?void 0:L.id)||1}});async function T(c){try{s?(await n({locationId:s.id,updatedLocation:c}).unwrap(),u.success("Location updated successfully"),a()):(await l(c).unwrap(),u.success("Location created successfully"),a())}catch(h){v(h),console.log(h)}}return e.jsx(e.Fragment,{children:i||d?e.jsx("div",{className:"h-56",children:e.jsx(j,{})}):e.jsx(G,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(T),className:"w-full space-y-3",children:[e.jsx(S,{control:o.control,name:"name",render:({field:c})=>e.jsxs(y,{children:[e.jsx(C,{children:"Name"}),e.jsx(b,{children:e.jsx(H,{placeholder:"Enter location name",...c})}),e.jsx(N,{})]})}),e.jsx(S,{control:o.control,name:"organization_id",render:({field:c})=>{var h;return e.jsxs(y,{children:[e.jsx(C,{children:"Organization Name"}),e.jsxs(K,{onValueChange:c.onChange,defaultValue:String((h=s==null?void 0:s.organization)==null?void 0:h.id),children:[e.jsx(b,{children:e.jsx(_,{children:e.jsx(B,{placeholder:"Select a verified email to display"})})}),e.jsx(J,{children:r?e.jsx(j,{}):x==null?void 0:x.map(g=>e.jsx(Q,{value:String(g.id),children:g.name},g.id))})]}),e.jsx(N,{})]})}}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function ne({data:a}){const[s,l]=f.useState(!1),[i,n]=f.useState(!1),[d,{isLoading:t}]=$(),r=async x=>{try{await d(x),u.success("Location deleted successfully"),l(!1)}catch(o){console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(p,{roles:["locations.edit"],children:e.jsx(w,{children:e.jsxs(F,{children:[e.jsx(M,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(W,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Update Location"})})]})})}),e.jsx(p,{roles:["locations.delete"],children:e.jsx(w,{children:e.jsxs(F,{children:[e.jsx(M,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(X,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Delete Organization"})})]})})}),e.jsx(q,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>l(!1),onConfirm:()=>r(a.id),loading:t}),e.jsx(O,{title:"Update Location",isOpen:i,toggleModal:()=>n(!1),children:e.jsx(z,{data:a,modalClose:()=>n(!1)})})]})}const le=[{id:"select",header:({table:a})=>e.jsx(I,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(I,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Location name"},{accessorKey:"organization",accessorFn:({organization:a})=>a==null?void 0:a.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(ne,{data:a.original})}],oe=()=>{const[a,s]=f.useState(!1),[l,i]=Y.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:d}=Z(`per_page=${l.pageSize}&page=${l.pageIndex+1}`),t=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return d?e.jsx(j,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(D,{title:"Location",description:"Manage organization for you business"}),e.jsx(p,{roles:["locations.create"],children:e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Location"]})})]}),e.jsx(se,{}),t&&e.jsx("div",{children:e.jsx(ae,{columns:le,data:t,paginationInfo:r,pagination:l,setPagination:i})})]})}),e.jsx(O,{title:"Add Location",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(z,{modalClose:()=>s(!1)})})]})};export{oe as default};
