import{db as k,dc as R,da as P,B as E,D as U,dd as _,a as e,ar as j,G,H as S,J as y,K as C,M as b,I as H,N,aZ as V,a_ as B,a$ as J,b0 as K,b2 as Q,Q as m,as as u,at as $,r as f,de as v,av as p,aw as w,ax as M,ay as A,az as Z,aA as F,aB as q,aC as W,aD as O,aE as I,R as X,b4 as Y,aG as D,aH as ee,aI as se,aJ as ae}from"./index-38f5ea54.js";function z({modalClose:a,data:s}){var L;const[l,{isLoading:i}]=k(),[n,{isLoading:d}]=R(),{data:t,isLoading:r}=P("page=1&per_page=1000"),x=(t==null?void 0:t.data)||[],o=E({resolver:U(_),defaultValues:{name:(s==null?void 0:s.name)||"",organization_id:((L=s==null?void 0:s.organization)==null?void 0:L.id)||1}});async function T(c){try{s?(await n({locationId:s.id,updatedLocation:c}).unwrap(),u.success("Location updated successfully"),a()):(await l(c).unwrap(),u.success("Location created successfully"),a())}catch(h){$(h),console.log(h)}}return e.jsx(e.Fragment,{children:i||d?e.jsx("div",{className:"h-56",children:e.jsx(j,{})}):e.jsx(G,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(T),className:"w-full space-y-3",children:[e.jsx(S,{control:o.control,name:"name",render:({field:c})=>e.jsxs(y,{children:[e.jsx(C,{children:"Name"}),e.jsx(b,{children:e.jsx(H,{placeholder:"Enter location name",...c})}),e.jsx(N,{})]})}),e.jsx(S,{control:o.control,name:"organization_id",render:({field:c})=>{var h;return e.jsxs(y,{children:[e.jsx(C,{children:"Organization Name"}),e.jsxs(V,{onValueChange:c.onChange,defaultValue:String((h=s==null?void 0:s.organization)==null?void 0:h.id),children:[e.jsx(b,{children:e.jsx(B,{children:e.jsx(J,{placeholder:"Select a verified email to display"})})}),e.jsx(K,{children:r?e.jsx(j,{}):x==null?void 0:x.map(g=>e.jsx(Q,{value:String(g.id),children:g.name},g.id))})]}),e.jsx(N,{})]})}}),e.jsx("div",{children:e.jsx(m,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function ne({data:a}){const[s,l]=f.useState(!1),[i,n]=f.useState(!1),[d,{isLoading:t}]=v(),r=async x=>{try{await d(x),u.success("Location deleted successfully"),l(!1)}catch(o){console.log(o)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(p,{roles:["locations.edit"],children:e.jsx(w,{children:e.jsxs(M,{children:[e.jsx(A,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(Z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(F,{children:e.jsx("p",{children:"Update Location"})})]})})}),e.jsx(p,{roles:["locations.delete"],children:e.jsx(w,{children:e.jsxs(M,{children:[e.jsx(A,{asChild:!0,children:e.jsx(m,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(F,{children:e.jsx("p",{children:"Delete Organization"})})]})})}),e.jsx(W,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>l(!1),onConfirm:()=>r(a.id),loading:t}),e.jsx(O,{title:"Update Location",isOpen:i,toggleModal:()=>n(!1),children:e.jsx(z,{data:a,modalClose:()=>n(!1)})})]})}const le=[{id:"select",header:({table:a})=>e.jsx(I,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(I,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Location name"},{accessorKey:"organization",accessorFn:({organization:a})=>a==null?void 0:a.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(ne,{data:a.original})}],oe=()=>{const[a,s]=f.useState(!1),[l,i]=X.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:d}=Y(`per_page=${l.pageSize}&page=${l.pageIndex+1}`),t=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return d?e.jsx(j,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(D,{title:"Location",description:"Manage organization for you business"}),e.jsx(p,{roles:["locations.create"],children:e.jsxs(m,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Location"]})})]}),e.jsx(se,{}),t&&e.jsx("div",{children:e.jsx(ae,{columns:le,data:t,paginationInfo:r,pagination:l,setPagination:i})})]})}),e.jsx(O,{title:"Add Location",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(z,{modalClose:()=>s(!1)})})]})};export{oe as default};
