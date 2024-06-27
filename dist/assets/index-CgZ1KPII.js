import{j as e,A as S,r as y,R as P}from"./index-CwtkdAoF.js";import{u as k,t as _,L as C,F as R,a as j,b as f,c as u,d as p,e as L,S as $,f as U,g as E,h as V,i as H,M as O,H as K}from"./modal-DpBJVnX2.js";import{B as h}from"./index-Cxev_hGH.js";import{$ as B}from"./index-D-gdl2yy.js";import{P as G,T as Q,A as q,C as N,D as J}from"./alert-modal-BmFBKbfb.js";import{T as A,a as F,b as M,c as I}from"./tooltip-BMgwtow4.js";import{I as w}from"./input-BHxcSLDT.js";import{L as W}from"./validators-P_ADjOZ1.js";import{a as X,b as Y,c as Z,u as v}from"./index-BUkrtc3t.js";import{c as D}from"./index-Bu1cXUfq.js";import{P as ee}from"./sheet-CUiZ_cAH.js";import"./dropdown-menu-DfrG1frA.js";import"./chevron-right-DEhBy0bI.js";import"./card-Ba-Nv17p.js";function T({modalClose:n,data:s}){var b;const[o,{isLoading:c}]=X(),[a,{isLoading:r}]=Y(),{data:t,isLoading:d}=D("page=1&per_page=1000"),m=(t==null?void 0:t.data)||[],i=k({resolver:_(W),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,organization_id:((b=s==null?void 0:s.organization)==null?void 0:b.id)||1}});async function z(l){try{s?(await a({locationId:s.id,updatedLocation:l}),S.success("Location updated successfully"),n()):(await o(l),S.success("Location created successfully"),n())}catch(x){console.log(x)}}return e.jsx(e.Fragment,{children:c||r?e.jsx("div",{className:"h-56",children:e.jsx(C,{})}):e.jsx(R,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(z),className:"w-full space-y-3",children:[e.jsx(j,{control:i.control,name:"name",render:({field:l})=>e.jsxs(f,{children:[e.jsx(u,{children:"Name"}),e.jsx(p,{children:e.jsx(w,{placeholder:"Enter location name",...l})}),e.jsx(L,{})]})}),e.jsx(j,{control:i.control,name:"sorting_index",render:({field:l})=>e.jsxs(f,{children:[e.jsx(u,{children:"Sorting"}),e.jsx(p,{children:e.jsx(w,{type:"number",placeholder:"Enter location sorting",...l})}),e.jsx(L,{})]})}),e.jsx(j,{control:i.control,name:"organization_id",render:({field:l})=>{var x;return e.jsxs(f,{children:[e.jsx(u,{children:"Organization Name"}),e.jsxs($,{onValueChange:l.onChange,defaultValue:String((x=s==null?void 0:s.organization)==null?void 0:x.id),children:[e.jsx(p,{children:e.jsx(U,{children:e.jsx(E,{placeholder:"Select a verified email to display"})})}),e.jsx(V,{children:d?e.jsx(C,{}):m==null?void 0:m.map(g=>e.jsx(H,{value:String(g.id),children:g.name},g.id))})]}),e.jsx(L,{})]})}}),e.jsx("div",{children:e.jsx(h,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function se({data:n}){const[s,o]=y.useState(!1),[c,a]=y.useState(!1),[r,{isLoading:t}]=Z(),d=async m=>{try{await r(m),S.success("Location deleted successfully"),o(!1)}catch(i){console.log(i)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(A,{children:e.jsxs(F,{children:[e.jsx(M,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(G,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Update Location"})})]})}),e.jsx(A,{children:e.jsxs(F,{children:[e.jsx(M,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{o(!0)},children:e.jsx(Q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Delete Organization"})})]})}),e.jsx(q,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>o(!1),onConfirm:()=>d(n.id),loading:t}),e.jsx(O,{title:"Update Location",isOpen:c,toggleModal:()=>a(!1),children:e.jsx(T,{data:n,modalClose:()=>a(!1)})})]})}const ne=[{id:"select",header:({table:n})=>e.jsx(N,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(N,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Location name"},{accessorKey:"sorting_index",header:"Sorting Index"},{accessorKey:"organization",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(se,{data:n.original})}],ue=()=>{const[n,s]=y.useState(!1),[o,c]=P.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:r}=v(`per_page=${o.pageSize}&page=${o.pageIndex+1}`),t=(a==null?void 0:a.data)||[],d=a==null?void 0:a.meta;return r?e.jsx(C,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(K,{title:"Location",description:"Manage organization for you business"}),e.jsxs(h,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Location"]})]}),e.jsx(B,{}),t&&e.jsx("div",{children:e.jsx(J,{columns:ne,data:t,paginationInfo:d,pagination:o,setPagination:c})})]})}),e.jsx(O,{title:"Add Location",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(T,{modalClose:()=>s(!1)})})]})};export{ue as default};
