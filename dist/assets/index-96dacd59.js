<<<<<<<< HEAD:dist/assets/index-96dacd59.js
import{bz as k,bA as P,bv as R,B as H,D as K,bB as U,bC as T,a as e,ar as b,G as B,H as m,J as j,K as g,M as u,I as p,N as S,aZ as G,a_ as V,a$ as J,b0 as Q,b2 as $,Q as f,as as C,at as Z,r as N,bD as q,aw as F,ax as M,ay as _,az as W,aA as A,aB as X,aC as Y,aD as z,aE as I,bE as O,R as v,bx as D,aG as ee,aH as se,aI as ne,aJ as le}from"./index-b155454b.js";function E({modalClose:n,data:s}){var w;const[t,{isLoading:i}]=k(),[l,{isLoading:r}]=P(),{data:c,isLoading:o}=R(),h=(c==null?void 0:c.data)||[],d=H({resolver:K(U),defaultValues:{name:(s==null?void 0:s.name)||"",hour:(s==null?void 0:s.hour)||"0",start_time:T(s==null?void 0:s.start_time)||"00:00",end_time:T(s==null?void 0:s.end_time)||"00:00",organization_id:((w=s==null?void 0:s.organization)==null?void 0:w.id)||1}});async function L(a){try{s?(await l({scheduleId:s.id,updatedSchedule:a}).unwrap(),C.success("Shift updated successfully"),n()):(await t(a).unwrap(),C.success("Shift created successfully"),n())}catch(x){console.log(x),Z(x)}}return e.jsx(e.Fragment,{children:i||r?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(B,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(L),className:"w-full space-y-3",children:[e.jsx(m,{control:d.control,name:"name",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Name"}),e.jsx(u,{children:e.jsx(p,{placeholder:"Enter Shift name",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"start_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Start Time"}),e.jsx(u,{children:e.jsx(p,{type:"time",placeholder:"Enter shift start time",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"end_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"End Time"}),e.jsx(u,{children:e.jsx(p,{type:"time",placeholder:"Enter section end time",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"organization_id",render:({field:a})=>{var x;return e.jsxs(j,{children:[e.jsx(g,{children:"Organization Name"}),e.jsxs(G,{onValueChange:a.onChange,defaultValue:(x=s==null?void 0:s.organization)!=null&&x.id?String(s.organization.id):void 0,children:[e.jsx(u,{children:e.jsx(V,{children:e.jsx(J,{placeholder:"Select Organization"})})}),e.jsx(Q,{children:o?e.jsx(b,{}):h==null?void 0:h.map(y=>e.jsx($,{value:String(y.id),children:y.name},y.id))})]}),e.jsx(S,{})]})}}),e.jsx("div",{children:e.jsx(f,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function ae({data:n}){const[s,t]=N.useState(!1),[i,l]=N.useState(!1),[r,{isLoading:c}]=q(),o=async h=>{try{await r(h),C.success("Schedule deleted successfully"),t(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(f,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(W,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(F,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(f,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(X,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(Y,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(n.id),loading:c}),i&&e.jsx(z,{title:"Update Shift",isOpen:i,toggleModal:()=>l(!1),children:e.jsx(E,{data:n,modalClose:()=>l(!1)})})]})}const te=[{id:"select",header:({table:n})=>e.jsx(I,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(I,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Shift Name"},{accessorKey:"start_time",header:"Start Time",cell:({row:n})=>e.jsx("span",{children:O(n.original.start_time)})},{accessorKey:"end_time",header:"End Time",cell:({row:n})=>e.jsx("span",{children:O(n.original.end_time)})},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ae,{data:n.original})}],de=()=>{const[n,s]=N.useState(!1),[t,i]=v.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:r}=D(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),c=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return r?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ee,{title:"Shifts",description:"Manage shifts for you business"}),e.jsxs(f,{onClick:()=>s(!0),size:"sm",children:[e.jsx(se,{className:"mr-2 h-4 w-4"})," Add Shift"]})]}),e.jsx(ne,{}),c&&e.jsx("div",{children:e.jsx(le,{columns:te,data:c,paginationInfo:o,pagination:t,setPagination:i})})]})}),n&&e.jsx(z,{title:"Add Shift",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(E,{modalClose:()=>s(!1)})})]})};export{de as default};
========
import{bz as k,bA as P,bv as R,B as H,D as K,bB as U,bC as T,a as e,ar as b,G as B,H as m,J as j,K as g,M as u,I as p,N as S,aZ as G,a_ as V,a$ as J,b0 as Q,b2 as $,Q as f,as as C,at as Z,r as N,bD as q,aw as F,ax as M,ay as _,az as W,aA as A,aB as X,aC as Y,aD as z,aE as I,bE as O,R as v,bx as D,aG as ee,aH as se,aI as ne,aJ as le}from"./index-6616b137.js";function E({modalClose:n,data:s}){var w;const[t,{isLoading:i}]=k(),[l,{isLoading:r}]=P(),{data:c,isLoading:o}=R(),h=(c==null?void 0:c.data)||[],d=H({resolver:K(U),defaultValues:{name:(s==null?void 0:s.name)||"",hour:(s==null?void 0:s.hour)||"0",start_time:T(s==null?void 0:s.start_time)||"00:00",end_time:T(s==null?void 0:s.end_time)||"00:00",organization_id:((w=s==null?void 0:s.organization)==null?void 0:w.id)||1}});async function L(a){try{s?(await l({scheduleId:s.id,updatedSchedule:a}).unwrap(),C.success("Shift updated successfully"),n()):(await t(a).unwrap(),C.success("Shift created successfully"),n())}catch(x){console.log(x),Z(x)}}return e.jsx(e.Fragment,{children:i||r?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(B,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(L),className:"w-full space-y-3",children:[e.jsx(m,{control:d.control,name:"name",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Name"}),e.jsx(u,{children:e.jsx(p,{placeholder:"Enter Shift name",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"start_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Start Time"}),e.jsx(u,{children:e.jsx(p,{type:"time",placeholder:"Enter shift start time",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"end_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"End Time"}),e.jsx(u,{children:e.jsx(p,{type:"time",placeholder:"Enter section end time",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"organization_id",render:({field:a})=>{var x;return e.jsxs(j,{children:[e.jsx(g,{children:"Organization Name"}),e.jsxs(G,{onValueChange:a.onChange,defaultValue:(x=s==null?void 0:s.organization)!=null&&x.id?String(s.organization.id):void 0,children:[e.jsx(u,{children:e.jsx(V,{children:e.jsx(J,{placeholder:"Select Organization"})})}),e.jsx(Q,{children:o?e.jsx(b,{}):h==null?void 0:h.map(y=>e.jsx($,{value:String(y.id),children:y.name},y.id))})]}),e.jsx(S,{})]})}}),e.jsx("div",{children:e.jsx(f,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function ae({data:n}){const[s,t]=N.useState(!1),[i,l]=N.useState(!1),[r,{isLoading:c}]=q(),o=async h=>{try{await r(h),C.success("Schedule deleted successfully"),t(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(f,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(W,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(F,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(f,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(X,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(Y,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(n.id),loading:c}),i&&e.jsx(z,{title:"Update Shift",isOpen:i,toggleModal:()=>l(!1),children:e.jsx(E,{data:n,modalClose:()=>l(!1)})})]})}const te=[{id:"select",header:({table:n})=>e.jsx(I,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(I,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Shift Name"},{accessorKey:"start_time",header:"Start Time",cell:({row:n})=>e.jsx("span",{children:O(n.original.start_time)})},{accessorKey:"end_time",header:"End Time",cell:({row:n})=>e.jsx("span",{children:O(n.original.end_time)})},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ae,{data:n.original})}],de=()=>{const[n,s]=N.useState(!1),[t,i]=v.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:r}=D(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),c=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return r?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ee,{title:"Shifts",description:"Manage shifts for you business"}),e.jsxs(f,{onClick:()=>s(!0),size:"sm",children:[e.jsx(se,{className:"mr-2 h-4 w-4"})," Add Shift"]})]}),e.jsx(ne,{}),c&&e.jsx("div",{children:e.jsx(le,{columns:te,data:c,paginationInfo:o,pagination:t,setPagination:i})})]})}),n&&e.jsx(z,{title:"Add Shift",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(E,{modalClose:()=>s(!1)})})]})};export{de as default};
>>>>>>>> 0ca5b693254d98a076a1d94a539afc0a89e0bcc9:dist/assets/index-17a94fbe.js
