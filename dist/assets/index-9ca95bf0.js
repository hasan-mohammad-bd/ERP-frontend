import{bE as z,bF as P,E as R,G as H,bG as K,bH as w,a as e,aw as b,J as G,K as x,N as j,Q as g,V as u,I as y,W as f,b3 as U,b4 as V,b5 as J,b6 as Q,b8 as B,X as S,ax as C,ay as $,r as N,bI as W,aB as T,aC as I,aD as M,aE as X,aF as O,aG as q,aH as Y,aI as E,aJ as _,bJ as A,R as Z,bC as v,aL as D,aM as ee,aN as se,aO as ne}from"./index-fe9eec72.js";import{u as le}from"./index-f76af4c5.js";function L({modalClose:n,data:s}){var F;const[t,{isLoading:i}]=z(),[l,{isLoading:r}]=P(),{data:c,isLoading:o}=le(),h=(c==null?void 0:c.data)||[],d=R({resolver:H(K),defaultValues:{name:(s==null?void 0:s.name)||"",hour:(s==null?void 0:s.hour)||"0",start_time:w(s==null?void 0:s.start_time)||"00:00",end_time:w(s==null?void 0:s.end_time)||"00:00",organization_id:((F=s==null?void 0:s.organization)==null?void 0:F.id)||1}});async function k(a){try{s?(await l({scheduleId:s.id,updatedSchedule:a}).unwrap(),C.success("Shift updated successfully"),n()):(await t(a).unwrap(),C.success("Shift created successfully"),n())}catch(m){console.log(m),$(m)}}return e.jsx(e.Fragment,{children:i||r?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(G,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(k),className:"w-full space-y-3",children:[e.jsx(x,{control:d.control,name:"name",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Name"}),e.jsx(u,{children:e.jsx(y,{placeholder:"Enter Shift name",...a})}),e.jsx(f,{})]})}),e.jsx(x,{control:d.control,name:"start_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Start Time"}),e.jsx(u,{children:e.jsx(y,{type:"time",placeholder:"Enter shift start time",...a})}),e.jsx(f,{})]})}),e.jsx(x,{control:d.control,name:"end_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"End Time"}),e.jsx(u,{children:e.jsx(y,{type:"time",placeholder:"Enter section end time",...a})}),e.jsx(f,{})]})}),e.jsx(x,{control:d.control,name:"organization_id",render:({field:a})=>{var m;return e.jsxs(j,{children:[e.jsx(g,{children:"Organization Name"}),e.jsxs(U,{onValueChange:a.onChange,defaultValue:(m=s==null?void 0:s.organization)!=null&&m.id?String(s.organization.id):void 0,children:[e.jsx(u,{children:e.jsx(V,{children:e.jsx(J,{placeholder:"Select Organization"})})}),e.jsx(Q,{children:o?e.jsx(b,{}):h==null?void 0:h.map(p=>e.jsx(B,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(f,{})]})}}),e.jsx("div",{children:e.jsx(S,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function ae({data:n}){const[s,t]=N.useState(!1),[i,l]=N.useState(!1),[r,{isLoading:c}]=W(),o=async h=>{try{await r(h),C.success("Schedule deleted successfully"),t(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(T,{children:e.jsxs(I,{children:[e.jsx(M,{asChild:!0,children:e.jsx(S,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(X,{className:"h-4 w-4 text-foreground"})})}),e.jsx(O,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(T,{children:e.jsxs(I,{children:[e.jsx(M,{asChild:!0,children:e.jsx(S,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(O,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(Y,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(n.id),loading:c}),i&&e.jsx(E,{title:"Update Shift",isOpen:i,toggleModal:()=>l(!1),children:e.jsx(L,{data:n,modalClose:()=>l(!1)})})]})}const te=[{id:"select",header:({table:n})=>e.jsx(_,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(_,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Shift Name"},{accessorKey:"start_time",header:"Start Time",cell:({row:n})=>e.jsx("span",{children:A(n.original.start_time)})},{accessorKey:"end_time",header:"End Time",cell:({row:n})=>e.jsx("span",{children:A(n.original.end_time)})},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ae,{data:n.original})}],ie=()=>{const[n,s]=N.useState(!1),[t,i]=Z.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:r}=v(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),c=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return r?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(D,{title:"Shifts",description:"Manage shifts for you business"}),e.jsxs(S,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Shift"]})]}),e.jsx(se,{}),c&&e.jsx("div",{children:e.jsx(ne,{columns:te,data:c,paginationInfo:o,pagination:t,setPagination:i})})]})}),n&&e.jsx(E,{title:"Add Shift",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(L,{modalClose:()=>s(!1)})})]})};export{ie as default};
