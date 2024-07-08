import{X as A,Y as F,k as e,Z as N,a0 as I,a1 as h,a2 as j,a3 as u,a4 as f,I as p,a5 as z,K as d,bp as k,a7 as x,r as m,a8 as O,a9 as y,aa as S,ab as L,ac as b,ad as P,ae as T,af as C,R,ag as U,P as _,ah as $,ai as v}from"./index-Df36uixq.js";import{u as E,a as K,b as H,c as B}from"./index-yaHl52Q3.js";import{M}from"./modal-iNOZ8d19.js";import"./sheet-Bk0mowo8.js";function w({modalClose:s,data:a}){const[t,{isLoading:l}]=E(),[n,{isLoading:r}]=K(),i=A({resolver:F(k),defaultValues:{name:(a==null?void 0:a.name)||"",sorting_index:(a==null?void 0:a.sorting_index)||0}});async function c(o){try{a?(await n({organizationId:a.id,updatedOrganization:o}),x.success("Organization updated successfully"),s()):(await t(o),x.success("Organization created successfully"),s())}catch(g){console.log(g)}}return e.jsx(e.Fragment,{children:l||r?e.jsx("div",{className:"h-56",children:e.jsx(N,{})}):e.jsx(I,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(c),className:"w-full space-y-3",children:[e.jsx(h,{control:i.control,name:"name",render:({field:o})=>e.jsxs(j,{children:[e.jsx(u,{children:"Name"}),e.jsx(f,{children:e.jsx(p,{placeholder:"Enter organization name",...o})}),e.jsx(z,{})]})}),e.jsx(h,{control:i.control,name:"sorting_index",render:({field:o})=>e.jsxs(j,{children:[e.jsx(u,{children:"Sorting"}),e.jsx(f,{children:e.jsx(p,{type:"number",placeholder:"Enter organization sorting",...o})}),e.jsx(z,{})]})}),e.jsx("div",{children:e.jsx(d,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function G({data:s}){const[a,t]=m.useState(!1),[l,n]=m.useState(!1),[r,{isLoading:i}]=H(),c=async o=>{try{await r(o),x.success("Organization deleted successfully"),t(!1)}catch(g){console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(O,{children:e.jsxs(y,{children:[e.jsx(S,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Organization"})})]})}),e.jsx(O,{children:e.jsxs(y,{children:[e.jsx(S,{asChild:!0,children:e.jsx(d,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete Organization"})})]})}),e.jsx(T,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>c(s.id),loading:i}),e.jsx(M,{title:"Update Organization",isOpen:l,toggleModal:()=>n(!1),children:e.jsx(w,{data:s,modalClose:()=>n(!1)})})]})}const Q=[{id:"select",header:({table:s})=>e.jsx(C,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(C,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Location name"},{accessorKey:"sorting_index",header:"Sorting"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(G,{data:s.original})}],q=()=>{const[s,a]=m.useState(!1),[t,l]=R.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:r}=B(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),i=(n==null?void 0:n.data)||[],c=n==null?void 0:n.meta;return r?e.jsx(N,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Organization",description:"Manage organization for you business"}),e.jsxs(d,{onClick:()=>a(!0),size:"sm",children:[e.jsx(_,{className:"mr-2 h-4 w-4"})," Add Organization"]})]}),e.jsx($,{}),i&&e.jsx("div",{children:e.jsx(v,{columns:Q,data:i,paginationInfo:c,pagination:t,setPagination:l})})]})}),e.jsx(M,{title:"Add Organization",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(w,{modalClose:()=>a(!1)})})]})};export{q as default};
