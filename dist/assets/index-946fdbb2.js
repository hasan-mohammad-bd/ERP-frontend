import{V as I,W as k,aU as O,a as e,Y as M,Z as T,_ as g,$ as j,a0 as u,a1 as f,I as p,a2 as S,B as d,a3 as x,a4 as P,r as h,a5 as y,a6 as b,a7 as C,a8 as R,a9 as N,aa as L,ab as U,ac as F,ad as w,R as z,ae as E,t as _,af as v,ag as $}from"./index-96b0e7a7.js";import{a as B,b as H,c as V,u as G}from"./index-fe4513db.js";function A({modalClose:a,data:s}){const[t,{isLoading:o}]=B(),[n,{isLoading:i}]=H(),l=I({resolver:k(O),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function r(c){try{s?(await n({sectionId:s.id,updatedSection:c}).unwrap(),x.success("Section updated successfully"),a()):(await t(c).unwrap(),x.success("Section created successfully"),a())}catch(m){console.log(m),P(m)}}return e.jsx(e.Fragment,{children:o||i?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx(T,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(r),className:"w-full space-y-3",children:[e.jsx(g,{control:l.control,name:"name",render:({field:c})=>e.jsxs(j,{children:[e.jsx(u,{children:"Name"}),e.jsx(f,{children:e.jsx(p,{placeholder:"Enter section name",...c})}),e.jsx(S,{})]})}),e.jsx(g,{control:l.control,name:"sorting_index",render:({field:c})=>e.jsxs(j,{children:[e.jsx(u,{children:"Sorting"}),e.jsx(f,{children:e.jsx(p,{type:"number",placeholder:"Enter section sorting",...c})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function J({data:a}){const[s,t]=h.useState(!1),[o,n]=h.useState(!1),[i]=V(),l=async r=>{try{await i(r),x.success("Section deleted successfully"),t(!1)}catch(c){console.log(c)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(R,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(C,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(N,{children:e.jsx("p",{children:"Delete Designation"})})]})}),e.jsx(U,{title:"Are you sure?",description:"This action cannot be undone.",name:a.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>l(a.id),loading:!1}),o&&e.jsx(F,{title:"Update Section",isOpen:o,toggleModal:()=>n(!1),children:e.jsx(A,{data:a,modalClose:()=>n(!1)})})]})}const K=[{id:"select",header:({table:a})=>e.jsx(w,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(w,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Section Name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(J,{data:a.original})}],Y=()=>{const[a,s]=h.useState(!1),[t,o]=z.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:i}=G(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),l=(n==null?void 0:n.data)||[],r=n==null?void 0:n.meta;return i?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"Sections",description:"Manage sections for you business"}),e.jsxs(d,{onClick:()=>s(!0),size:"sm",children:[e.jsx(_,{className:"mr-2 h-4 w-4"})," Add Section"]})]}),e.jsx(v,{}),l&&e.jsx("div",{children:e.jsx($,{columns:K,data:l,paginationInfo:r,pagination:t,setPagination:o})})]})}),a&&e.jsx(F,{title:"Add Section",isOpen:a,toggleModal:()=>s(!1),children:e.jsx(A,{modalClose:()=>s(!1)})})]})};export{Y as default};
