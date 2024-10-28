import{bI as E,bJ as k,bE as z,$ as P,a0 as R,bK as K,a as e,a2 as b,a3 as U,a4 as m,a5 as j,a6 as g,a7 as u,I as f,a8 as S,aP as V,aQ as B,aR as H,aS as Q,aU as $,B as y,a9 as C,aa as G,r as N,bL as J,ac as F,ad as _,ae as I,af as q,ag as M,ah as W,ai as X,aj as O,ak as T,R as Y,aB as Z,am as v,t as D,an as ee,ao as se}from"./index-296059ef.js";function A({modalClose:n,data:s}){var w;const[c,{isLoading:r}]=E(),[l,{isLoading:i}]=k(),{data:t,isLoading:o}=z(),h=(t==null?void 0:t.data)||[],d=P({resolver:R(K),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,hour:(s==null?void 0:s.hour)||"0",start_time:(s==null?void 0:s.start_time)||"00:00:00",end_time:(s==null?void 0:s.end_time)||"00:00:00",organization_id:((w=s==null?void 0:s.organization)==null?void 0:w.id)||1}});async function L(a){try{s?(await l({scheduleId:s.id,updatedSchedule:a}).unwrap(),C.success("Schedule updated successfully"),n()):(await c(a).unwrap(),C.success("Schedule created successfully"),n())}catch(x){console.log(x),G(x)}}return e.jsx(e.Fragment,{children:r||i?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(U,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(L),className:"w-full space-y-3",children:[e.jsx(m,{control:d.control,name:"name",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Name"}),e.jsx(u,{children:e.jsx(f,{placeholder:"Enter schedule name",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"sorting_index",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Sorting"}),e.jsx(u,{children:e.jsx(f,{type:"number",placeholder:"Enter schedule sorting",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"start_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"Start Time"}),e.jsx(u,{children:e.jsx(f,{type:"time",placeholder:"Enter schedule start time",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"end_time",render:({field:a})=>e.jsxs(j,{children:[e.jsx(g,{children:"End Time"}),e.jsx(u,{children:e.jsx(f,{type:"time",placeholder:"Enter section end time",...a})}),e.jsx(S,{})]})}),e.jsx(m,{control:d.control,name:"organization_id",render:({field:a})=>{var x;return e.jsxs(j,{children:[e.jsx(g,{children:"Organization Name"}),e.jsxs(V,{onValueChange:a.onChange,defaultValue:(x=s==null?void 0:s.organization)!=null&&x.id?String(s.organization.id):void 0,children:[e.jsx(u,{children:e.jsx(B,{children:e.jsx(H,{placeholder:"Select Organization"})})}),e.jsx(Q,{children:o?e.jsx(b,{}):h==null?void 0:h.map(p=>e.jsx($,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(S,{})]})}}),e.jsx("div",{children:e.jsx(y,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function ne({data:n}){const[s,c]=N.useState(!1),[r,l]=N.useState(!1),[i,{isLoading:t}]=J(),o=async h=>{try{await i(h),C.success("Schedule deleted successfully"),c(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(_,{children:[e.jsx(I,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(F,{children:e.jsxs(_,{children:[e.jsx(I,{asChild:!0,children:e.jsx(y,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(W,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(X,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>c(!1),onConfirm:()=>o(n.id),loading:t}),r&&e.jsx(O,{title:"Update Schedule",isOpen:r,toggleModal:()=>l(!1),children:e.jsx(A,{data:n,modalClose:()=>l(!1)})})]})}const le=[{id:"select",header:({table:n})=>e.jsx(T,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(T,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"start_time",header:"Start Time"},{accessorKey:"end_time",header:"End Time"},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ne,{data:n.original})}],ce=()=>{const[n,s]=N.useState(!1),[c,r]=Y.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=Z(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),t=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return i?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(v,{title:"Schedule",description:"Manage schedule for you business"}),e.jsxs(y,{onClick:()=>s(!0),size:"sm",children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Schedule"]})]}),e.jsx(ee,{}),t&&e.jsx("div",{children:e.jsx(se,{columns:le,data:t,paginationInfo:o,pagination:c,setPagination:r})})]})}),n&&e.jsx(O,{title:"Add Schedule",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(A,{modalClose:()=>s(!1)})})]})};export{ce as default};
