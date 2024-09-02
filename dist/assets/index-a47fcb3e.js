import{a8 as I,a9 as k,a as e,$ as M,aa as O,ab as h,ac as j,ad as g,ae as u,I as f,af as S,B as d,aL as T,ah as x,r as m,ai as p,aj as y,ak as b,al as L,am as C,an as P,ao as R,ap as w,aq as N,R as z,ar as U,t as v,as as E,at as _}from"./index-22834323.js";import{a as $,b as B,c as H,u as q}from"./index-4073b15f.js";function F({modalClose:a,data:s}){const[t,{isLoading:o}]=$(),[n,{isLoading:i}]=B(),l=I({resolver:k(T),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function r(c){try{s?(await n({sectionId:s.id,updatedSection:c}),x.success("Section updated successfully"),a()):(await t(c),x.success("Section created successfully"),a())}catch(A){console.log(A)}}return e.jsx(e.Fragment,{children:o||i?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(O,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(h,{control:l.control,name:"name",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"Name"}),e.jsx(u,{children:e.jsx(f,{placeholder:"Enter section name",...c})}),e.jsx(S,{})]})}),e.jsx(h,{control:l.control,name:"sorting_index",render:({field:c})=>e.jsxs(j,{children:[e.jsx(g,{children:"Sorting"}),e.jsx(u,{children:e.jsx(f,{type:"number",placeholder:"Enter section sorting",...c})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function G({data:a}){const[s,t]=m.useState(!1),[o,n]=m.useState(!1),[i]=H(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(c){console.log(c)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(p,{children:e.jsxs(y,{children:[e.jsx(b,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(p,{children:e.jsxs(y,{children:[e.jsx(b,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(R,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>l(a.id),loading:!1}),e.jsx(w,{title:"Update Section",isOpen:o,toggleModal:()=>n(!1),children:e.jsx(F,{data:a,modalClose:()=>n(!1)})})]})}const J=[{id:"select",header:({table:a})=>e.jsx(N,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(N,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(G,{data:a.original})}],V=()=>{const[a,s]=m.useState(!1),[t,o]=z.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=q(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return i?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Sections",description:"Manage sections for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx(v,{className:"mr-2 h-4 w-4"})," Add Section"]})]}),e.jsx(E,{}),l&&e.jsx("div",{children:e.jsx(_,{columns:J,data:l,paginationInfo:r,pagination:t,setPagination:o})})]})}),e.jsx(w,{title:"Add Section",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(F,{modalClose:()=>s(!1)})})]})};export{V as default};
