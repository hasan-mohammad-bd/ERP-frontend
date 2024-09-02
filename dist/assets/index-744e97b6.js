import{aM as k,ab as z,ac as E,a as e,a3 as C,ad as P,ae as x,af as m,ag as j,ah as g,I as f,ai as u,az as R,aA as K,aB as U,aC as V,aD as B,B as y,b0 as H,ak as b,r as N,al as F,am as M,an as _,ao as G,ap as T,aq as Q,ar as $,as as I,at as A,R as q,au as J,t as W,av as X,aw as Y}from"./index-cd9c5464.js";import{a as Z,b as v,c as D,u as ee}from"./index-aa917cc3.js";function O({modalClose:n,data:s}){var w;const[a,{isLoading:r}]=Z(),[l,{isLoading:i}]=v(),{data:t,isLoading:o}=k(),h=(t==null?void 0:t.data)||[],d=z({resolver:E(H),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,hour:(s==null?void 0:s.hour)||"0",start_time:(s==null?void 0:s.start_time)||"00:00:00",end_time:(s==null?void 0:s.end_time)||"00:00:00",organization_id:((w=s==null?void 0:s.organization)==null?void 0:w.id)||1}});async function L(c){try{s?(await l({scheduleId:s.id,updatedSchedule:c}),b.success("Schedule updated successfully"),n()):(await a(c),b.success("Schedule created successfully"),n())}catch(S){console.log(S)}}return e.jsx(e.Fragment,{children:r||i?e.jsx("div",{className:"h-56",children:e.jsx(C,{})}):e.jsx(P,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(L),className:"w-full space-y-3",children:[e.jsx(x,{control:d.control,name:"name",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"Name"}),e.jsx(g,{children:e.jsx(f,{placeholder:"Enter schedule name",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"sorting_index",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(g,{children:e.jsx(f,{type:"number",placeholder:"Enter schedule sorting",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"start_time",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"Start Time"}),e.jsx(g,{children:e.jsx(f,{type:"time",placeholder:"Enter schedule start time",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"end_time",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"End Time"}),e.jsx(g,{children:e.jsx(f,{type:"time",placeholder:"Enter section end time",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"organization_id",render:({field:c})=>{var S;return e.jsxs(m,{children:[e.jsx(j,{children:"Organization Name"}),e.jsxs(R,{onValueChange:c.onChange,defaultValue:(S=s==null?void 0:s.organization)!=null&&S.id?String(s.organization.id):void 0,children:[e.jsx(g,{children:e.jsx(K,{children:e.jsx(U,{placeholder:"Select Organization"})})}),e.jsx(V,{children:o?e.jsx(C,{}):h==null?void 0:h.map(p=>e.jsx(B,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(u,{})]})}}),e.jsx("div",{children:e.jsx(y,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function se({data:n}){const[s,a]=N.useState(!1),[r,l]=N.useState(!1),[i,{isLoading:t}]=D(),o=async h=>{try{await i(h),b.success("Schedule deleted successfully"),a(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(G,{className:"h-4 w-4 text-foreground"})})}),e.jsx(T,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(F,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(Q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(T,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx($,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>a(!1),onConfirm:()=>o(n.id),loading:t}),e.jsx(I,{title:"Update Schedule",isOpen:r,toggleModal:()=>l(!1),children:e.jsx(O,{data:n,modalClose:()=>l(!1)})})]})}const ne=[{id:"select",header:({table:n})=>e.jsx(A,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(A,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"start_time",header:"Start Time"},{accessorKey:"end_time",header:"End Time"},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(se,{data:n.original})}],ae=()=>{const[n,s]=N.useState(!1),[a,r]=q.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=ee(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),t=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return i?e.jsx(C,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(J,{title:"Schedule",description:"Manage schedule for you business"}),e.jsxs(y,{onClick:()=>s(!0),size:"sm",children:[e.jsx(W,{className:"mr-2 h-4 w-4"})," Add Schedule"]})]}),e.jsx(X,{}),t&&e.jsx("div",{children:e.jsx(Y,{columns:ne,data:t,paginationInfo:o,pagination:a,setPagination:r})})]})}),e.jsx(I,{title:"Add Schedule",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(O,{modalClose:()=>s(!1)})})]})};export{ae as default};
