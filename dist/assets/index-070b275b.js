import{bV as T,bW as _,bU as P,V as R,W as U,bX as V,a as e,Y as L,Z as E,_ as j,$ as u,a0 as f,a1 as p,I as N,a2 as S,aj as K,ak as $,al as B,am as G,an as H,B as g,a3 as y,r as b,bY as Q,a5 as F,a6 as I,a7 as M,a8 as W,a9 as w,aa as Y,ab as J,ac as A,ad as O,R as X,ax as Z,ae as q,t as v,af as D,ag as ee}from"./index-af3a75c9.js";function k({modalClose:a,data:s}){var C;const[t,{isLoading:i}]=T(),[n,{isLoading:d}]=_(),{data:l,isLoading:r}=P("page=1&per_page=1000"),x=(l==null?void 0:l.data)||[],c=R({resolver:U(V),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,organization_id:((C=s==null?void 0:s.organization)==null?void 0:C.id)||1}});async function z(o){try{s?(await n({locationId:s.id,updatedLocation:o}),y.success("Location updated successfully"),a()):(await t(o),y.success("Location created successfully"),a())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:i||d?e.jsx("div",{className:"h-56",children:e.jsx(L,{})}):e.jsx(E,{...c,children:e.jsxs("form",{onSubmit:c.handleSubmit(z),className:"w-full space-y-3",children:[e.jsx(j,{control:c.control,name:"name",render:({field:o})=>e.jsxs(u,{children:[e.jsx(f,{children:"Name"}),e.jsx(p,{children:e.jsx(N,{placeholder:"Enter location name",...o})}),e.jsx(S,{})]})}),e.jsx(j,{control:c.control,name:"sorting_index",render:({field:o})=>e.jsxs(u,{children:[e.jsx(f,{children:"Sorting"}),e.jsx(p,{children:e.jsx(N,{type:"number",placeholder:"Enter location sorting",...o})}),e.jsx(S,{})]})}),e.jsx(j,{control:c.control,name:"organization_id",render:({field:o})=>{var h;return e.jsxs(u,{children:[e.jsx(f,{children:"Organization Name"}),e.jsxs(K,{onValueChange:o.onChange,defaultValue:String((h=s==null?void 0:s.organization)==null?void 0:h.id),children:[e.jsx(p,{children:e.jsx($,{children:e.jsx(B,{placeholder:"Select a verified email to display"})})}),e.jsx(G,{children:r?e.jsx(L,{}):x==null?void 0:x.map(m=>e.jsx(H,{value:String(m.id),children:m.name},m.id))})]}),e.jsx(S,{})]})}}),e.jsx("div",{children:e.jsx(g,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function se({data:a}){const[s,t]=b.useState(!1),[i,n]=b.useState(!1),[d,{isLoading:l}]=Q(),r=async x=>{try{await d(x),y.success("Location deleted successfully"),t(!1)}catch(c){console.log(c)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(I,{children:[e.jsx(M,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(W,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Update Location"})})]})}),e.jsx(F,{children:e.jsxs(I,{children:[e.jsx(M,{asChild:!0,children:e.jsx(g,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(Y,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Delete Organization"})})]})}),e.jsx(J,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>r(a.id),loading:l}),e.jsx(A,{title:"Update Location",isOpen:i,toggleModal:()=>n(!1),children:e.jsx(k,{data:a,modalClose:()=>n(!1)})})]})}const ae=[{id:"select",header:({table:a})=>e.jsx(O,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(O,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Location name"},{accessorKey:"sorting_index",header:"Sorting Index"},{accessorKey:"organization",accessorFn:({organization:a})=>a==null?void 0:a.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(se,{data:a.original})}],te=()=>{const[a,s]=b.useState(!1),[t,i]=X.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:d}=Z(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return d?e.jsx(L,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(q,{title:"Location",description:"Manage organization for you business"}),e.jsxs(g,{onClick:()=>s(!0),size:"sm",children:[e.jsx(v,{className:"mr-2 h-4 w-4"})," Add Location"]})]}),e.jsx(D,{}),l&&e.jsx("div",{children:e.jsx(ee,{columns:ae,data:l,paginationInfo:r,pagination:t,setPagination:i})})]})}),e.jsx(A,{title:"Add Location",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(k,{modalClose:()=>s(!1)})})]})};export{te as default};
