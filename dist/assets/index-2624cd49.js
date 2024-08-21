import{a7 as R,a8 as O,a as e,$ as w,a9 as T,aa as g,ab as r,ac as x,ad as h,I as N,ae as u,B as y,aL as k,ag as p,r as f,ah as H,ai as S,aj as C,ak as L,al as b,am as P,an as z,ao as I,ap as M,R as U,aq as E,t as G,ar as K,as as V}from"./index-4c394285.js";import{u as $,a as v,b as B,c as q}from"./index-1863ca3b.js";import{R as J,a as F}from"./radio-group-7a24da52.js";function A({modalClose:s,data:a}){var m;const[o,{isLoading:c}]=$(),[l,{isLoading:d}]=v(),t=R({resolver:O(k),defaultValues:{name:(a==null?void 0:a.name)||"",date:((m=a==null?void 0:a.date)==null?void 0:m.date)||"",type:(a==null?void 0:a.type)||"Mandatory"}});async function i(n){try{a?(await l({holidayId:a.id,updatedHoliday:n}),p.success("Holiday updated successfully"),s()):(await o(n),p.success("Holiday created successfully"),s())}catch(j){console.log(j)}}return e.jsx(e.Fragment,{children:c||d?e.jsx("div",{className:"h-56",children:e.jsx(w,{})}):e.jsx(T,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(i),className:"w-full space-y-3",children:[e.jsx(g,{control:t.control,name:"name",render:({field:n})=>e.jsxs(r,{children:[e.jsx(x,{children:"Holiday Name"}),e.jsx(h,{children:e.jsx(N,{type:"text",placeholder:"Enter holiday name ",...n})}),e.jsx(u,{})]})}),e.jsx(g,{control:t.control,name:"type",render:({field:n})=>{var j;return e.jsxs(r,{className:"space-y-3",children:[e.jsx(x,{children:"Type"}),e.jsx(h,{children:e.jsxs(J,{onValueChange:n.onChange,defaultValue:(j=n.value)==null?void 0:j.toString(),className:"flex items-center space-y-1",children:[e.jsxs(r,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(h,{children:e.jsx(F,{value:"Mandatory"})}),e.jsx(x,{className:"font-normal",children:"Mandatory"})]}),e.jsxs(r,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(h,{children:e.jsx(F,{value:"Optional"})}),e.jsx(x,{className:"font-normal",children:"Optional"})]})]})}),e.jsx(u,{})]})}}),e.jsx(g,{control:t.control,name:"date",render:({field:n})=>e.jsxs(r,{children:[e.jsx(x,{children:"Date"}),e.jsx(h,{children:e.jsx(N,{type:"date",placeholder:"Enter date ",...n})}),e.jsx(u,{})]})}),e.jsx("div",{children:e.jsx(y,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function Q({data:s}){const[a,o]=f.useState(!1),[c,l]=f.useState(!1),[d,{isLoading:t}]=B(),i=async m=>{try{await d(m),p.success("Holiday deleted successfully"),o(!1)}catch(n){console.log(n)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(H,{children:e.jsxs(S,{children:[e.jsx(C,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Holiday"})})]})}),e.jsx(H,{children:e.jsxs(S,{children:[e.jsx(C,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{o(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete Holiday"})})]})}),e.jsx(z,{title:"Are you sure?",description:"This action cannot be undone.",name:s==null?void 0:s.name,isOpen:a,onClose:()=>o(!1),onConfirm:()=>i(s.id),loading:t}),e.jsx(I,{title:"Update Holiday",isOpen:c,toggleModal:()=>l(!1),children:e.jsx(A,{data:s,modalClose:()=>l(!1)})})]})}const _=[{id:"select",header:({table:s})=>e.jsx(M,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(M,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Name"},{accessorKey:"type",header:"Type"},{accessorKey:"",accessorFn:({date:s})=>s==null?void 0:s.date,header:"Date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Q,{data:s.original})}],Z=()=>{const[s,a]=f.useState(!1),[o,c]=U.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:d}=q(`per_page=${o.pageSize}&page=${o.pageIndex+1}`),t=(l==null?void 0:l.data)||[],i=l==null?void 0:l.meta;return d?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"Holiday",description:"Manage your holidays for you organization"}),e.jsxs(y,{onClick:()=>a(!0),size:"sm",children:[e.jsx(G,{className:"mr-2 h-4 w-4"})," Add Holiday"]})]}),e.jsx(K,{}),t&&e.jsx("div",{children:e.jsx(V,{columns:_,data:t,paginationInfo:i,pagination:o,setPagination:c})})]})}),e.jsx(I,{title:"Add Holiday",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(A,{modalClose:()=>a(!1)})})]})};export{Z as default};
