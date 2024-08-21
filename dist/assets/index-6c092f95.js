import{a7 as k,a8 as z,a as e,$ as C,a9 as E,aa as x,ab as m,ac as j,ad as g,I as f,ae as u,av as P,aw as R,ax as K,ay as U,az as V,B as y,aX as H,ag as b,r as N,ah as F,ai as _,aj as M,ak as $,al as T,am as B,an as G,ao as O,ap as I,R as Q,aq as q,t as J,ar as X,as as W}from"./index-4c394285.js";import{a as Y,b as Z,c as v,u as D}from"./index-79717aea.js";import{u as ee}from"./index-cc2cbf32.js";function A({modalClose:n,data:s}){var w;const[a,{isLoading:r}]=Y(),[l,{isLoading:i}]=Z(),{data:t,isLoading:o}=ee(),h=(t==null?void 0:t.data)||[],d=k({resolver:z(H),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,hour:(s==null?void 0:s.hour)||"0",start_time:(s==null?void 0:s.start_time)||"00:00:00",end_time:(s==null?void 0:s.end_time)||"00:00:00",organization_id:((w=s==null?void 0:s.organization)==null?void 0:w.id)||1}});async function L(c){try{s?(await l({scheduleId:s.id,updatedSchedule:c}),b.success("Schedule updated successfully"),n()):(await a(c),b.success("Schedule created successfully"),n())}catch(S){console.log(S)}}return e.jsx(e.Fragment,{children:r||i?e.jsx("div",{className:"h-56",children:e.jsx(C,{})}):e.jsx(E,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(L),className:"w-full space-y-3",children:[e.jsx(x,{control:d.control,name:"name",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"Name"}),e.jsx(g,{children:e.jsx(f,{placeholder:"Enter schedule name",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"sorting_index",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(g,{children:e.jsx(f,{type:"number",placeholder:"Enter schedule sorting",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"start_time",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"Start Time"}),e.jsx(g,{children:e.jsx(f,{type:"time",placeholder:"Enter schedule start time",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"end_time",render:({field:c})=>e.jsxs(m,{children:[e.jsx(j,{children:"End Time"}),e.jsx(g,{children:e.jsx(f,{type:"time",placeholder:"Enter section end time",...c})}),e.jsx(u,{})]})}),e.jsx(x,{control:d.control,name:"organization_id",render:({field:c})=>{var S;return e.jsxs(m,{children:[e.jsx(j,{children:"Organization Name"}),e.jsxs(P,{onValueChange:c.onChange,defaultValue:(S=s==null?void 0:s.organization)!=null&&S.id?String(s.organization.id):void 0,children:[e.jsx(g,{children:e.jsx(R,{children:e.jsx(K,{placeholder:"Select Organization"})})}),e.jsx(U,{children:o?e.jsx(C,{}):h==null?void 0:h.map(p=>e.jsx(V,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(u,{})]})}}),e.jsx("div",{children:e.jsx(y,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function se({data:n}){const[s,a]=N.useState(!1),[r,l]=N.useState(!1),[i,{isLoading:t}]=v(),o=async h=>{try{await i(h),b.success("Schedule deleted successfully"),a(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(_,{children:[e.jsx(M,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx($,{className:"h-4 w-4 text-foreground"})})}),e.jsx(T,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(F,{children:e.jsxs(_,{children:[e.jsx(M,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(T,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(G,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>a(!1),onConfirm:()=>o(n.id),loading:t}),e.jsx(O,{title:"Update Schedule",isOpen:r,toggleModal:()=>l(!1),children:e.jsx(A,{data:n,modalClose:()=>l(!1)})})]})}const ne=[{id:"select",header:({table:n})=>e.jsx(I,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(I,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"start_time",header:"Start Time"},{accessorKey:"end_time",header:"End Time"},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(se,{data:n.original})}],de=()=>{const[n,s]=N.useState(!1),[a,r]=Q.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=D(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),t=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return i?e.jsx(C,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(q,{title:"Schedule",description:"Manage schedule for you business"}),e.jsxs(y,{onClick:()=>s(!0),size:"sm",children:[e.jsx(J,{className:"mr-2 h-4 w-4"})," Add Schedule"]})]}),e.jsx(X,{}),t&&e.jsx("div",{children:e.jsx(W,{columns:ne,data:t,paginationInfo:o,pagination:a,setPagination:r})})]})}),e.jsx(O,{title:"Add Schedule",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(A,{modalClose:()=>s(!1)})})]})};export{de as default};
