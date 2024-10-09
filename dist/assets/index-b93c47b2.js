import{ay as k,V as E,W as z,b6 as P,a as e,Y as C,Z as R,_ as m,$ as j,a0 as g,a1 as u,I as f,a2 as S,aj as K,ak as U,al as V,am as H,an as $,B as y,a3 as b,a4 as B,r as N,a5 as _,a6 as F,a7 as M,a8 as G,a9 as T,aa as Q,ab as J,ac as O,ad as I,R as W,ae as Y,t as Z,af as q,ag as X}from"./index-96b0e7a7.js";import{a as v,b as D,c as ee,u as se}from"./index-bfeb93fd.js";function A({modalClose:n,data:s}){var w;const[a,{isLoading:r}]=v(),[l,{isLoading:i}]=D(),{data:t,isLoading:o}=k(),h=(t==null?void 0:t.data)||[],d=E({resolver:z(P),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,hour:(s==null?void 0:s.hour)||"0",start_time:(s==null?void 0:s.start_time)||"00:00:00",end_time:(s==null?void 0:s.end_time)||"00:00:00",organization_id:((w=s==null?void 0:s.organization)==null?void 0:w.id)||1}});async function L(c){try{s?(await l({scheduleId:s.id,updatedSchedule:c}).unwrap(),b.success("Schedule updated successfully"),n()):(await a(c).unwrap(),b.success("Schedule created successfully"),n())}catch(x){console.log(x),B(x)}}return e.jsx(e.Fragment,{children:r||i?e.jsx("div",{className:"h-56",children:e.jsx(C,{})}):e.jsx(R,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(L),className:"w-full space-y-3",children:[e.jsx(m,{control:d.control,name:"name",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"Name"}),e.jsx(u,{children:e.jsx(f,{placeholder:"Enter schedule name",...c})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"sorting_index",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"Sorting"}),e.jsx(u,{children:e.jsx(f,{type:"number",placeholder:"Enter schedule sorting",...c})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"start_time",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"Start Time"}),e.jsx(u,{children:e.jsx(f,{type:"time",placeholder:"Enter schedule start time",...c})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"end_time",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"End Time"}),e.jsx(u,{children:e.jsx(f,{type:"time",placeholder:"Enter section end time",...c})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"organization_id",render:({field:c})=>{var x;return e.jsxs(j,{children:[e.jsx(g,{children:"Organization Name"}),e.jsxs(K,{onValueChange:c.onChange,defaultValue:(x=s==null?void 0:s.organization)!=null&&x.id?String(s.organization.id):void 0,children:[e.jsx(u,{children:e.jsx(U,{children:e.jsx(V,{placeholder:"Select Organization"})})}),e.jsx(H,{children:o?e.jsx(C,{}):h==null?void 0:h.map(p=>e.jsx($,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(S,{})]})}}),e.jsx("div",{children:e.jsx(y,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function ne({data:n}){const[s,a]=N.useState(!1),[r,l]=N.useState(!1),[i,{isLoading:t}]=ee(),o=async h=>{try{await i(h),b.success("Schedule deleted successfully"),a(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(_,{children:e.jsxs(F,{children:[e.jsx(M,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(G,{className:"h-4 w-4 text-foreground"})})}),e.jsx(T,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(_,{children:e.jsxs(F,{children:[e.jsx(M,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(Q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(T,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(J,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>a(!1),onConfirm:()=>o(n.id),loading:t}),r&&e.jsx(O,{title:"Update Schedule",isOpen:r,toggleModal:()=>l(!1),children:e.jsx(A,{data:n,modalClose:()=>l(!1)})})]})}const le=[{id:"select",header:({table:n})=>e.jsx(I,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(I,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"start_time",header:"Start Time"},{accessorKey:"end_time",header:"End Time"},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ne,{data:n.original})}],de=()=>{const[n,s]=N.useState(!1),[a,r]=W.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=se(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),t=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return i?e.jsx(C,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Y,{title:"Schedule",description:"Manage schedule for you business"}),e.jsxs(y,{onClick:()=>s(!0),size:"sm",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"})," Add Schedule"]})]}),e.jsx(q,{}),t&&e.jsx("div",{children:e.jsx(X,{columns:le,data:t,paginationInfo:o,pagination:a,setPagination:r})})]})}),n&&e.jsx(O,{title:"Add Schedule",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(A,{modalClose:()=>s(!1)})})]})};export{de as default};
