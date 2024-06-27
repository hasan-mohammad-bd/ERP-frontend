import{j as e,A as u,r as g,R as T}from"./index-CwtkdAoF.js";import{u as R,t as O,L as F,F as L,a as y,b as d,c as m,d as x,e as f,M as w,H as P}from"./modal-DpBJVnX2.js";import{B as p}from"./index-Cxev_hGH.js";import{$ as k}from"./index-D-gdl2yy.js";import{P as z,T as $,A as U,C as H,D as E}from"./alert-modal-BmFBKbfb.js";import{I as N}from"./input-BHxcSLDT.js";import{H as G}from"./validators-P_ADjOZ1.js";import{u as K,a as V,b as v,c as B}from"./index-DxOvx-Jd.js";import{R as Q,a as C}from"./radio-group-C5-JkWzV.js";import{T as S,a as b,b as M,c as A}from"./tooltip-BMgwtow4.js";import{P as _}from"./sheet-CUiZ_cAH.js";import"./dropdown-menu-DfrG1frA.js";import"./chevron-right-DEhBy0bI.js";import"./card-Ba-Nv17p.js";function I({modalClose:s,data:a}){var h;const[t,{isLoading:r}]=K(),[l,{isLoading:c}]=V(),o=R({resolver:O(G),defaultValues:{name:(a==null?void 0:a.name)||"",date:((h=a==null?void 0:a.date)==null?void 0:h.date)||"",type:(a==null?void 0:a.type)||"Mandatory"}});async function i(n){try{a?(await l({holidayId:a.id,updatedHoliday:n}),u.success("Holiday updated successfully"),s()):(await t(n),u.success("Holiday created successfully"),s())}catch(j){console.log(j)}}return e.jsx(e.Fragment,{children:r||c?e.jsx("div",{className:"h-56",children:e.jsx(F,{})}):e.jsx(L,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(i),className:"w-full space-y-3",children:[e.jsx(y,{control:o.control,name:"name",render:({field:n})=>e.jsxs(d,{children:[e.jsx(m,{children:"Holiday Name"}),e.jsx(x,{children:e.jsx(N,{type:"text",placeholder:"Enter holiday name ",...n})}),e.jsx(f,{})]})}),e.jsx(y,{control:o.control,name:"type",render:({field:n})=>{var j;return e.jsxs(d,{className:"space-y-3",children:[e.jsx(m,{children:"Type"}),e.jsx(x,{children:e.jsxs(Q,{onValueChange:n.onChange,defaultValue:(j=n.value)==null?void 0:j.toString(),className:"flex items-center space-y-1",children:[e.jsxs(d,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(x,{children:e.jsx(C,{value:"Mandatory"})}),e.jsx(m,{className:"font-normal",children:"Mandatory"})]}),e.jsxs(d,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(x,{children:e.jsx(C,{value:"Optional"})}),e.jsx(m,{className:"font-normal",children:"Optional"})]})]})}),e.jsx(f,{})]})}}),e.jsx(y,{control:o.control,name:"date",render:({field:n})=>e.jsxs(d,{children:[e.jsx(m,{children:"Date"}),e.jsx(x,{children:e.jsx(N,{type:"date",placeholder:"Enter date ",...n})}),e.jsx(f,{})]})}),e.jsx("div",{children:e.jsx(p,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function q({data:s}){const[a,t]=g.useState(!1),[r,l]=g.useState(!1),[c,{isLoading:o}]=v(),i=async h=>{try{await c(h),u.success("Holiday deleted successfully"),t(!1)}catch(n){console.log(n)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(S,{children:e.jsxs(b,{children:[e.jsx(M,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Update Holiday"})})]})}),e.jsx(S,{children:e.jsxs(b,{children:[e.jsx(M,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx($,{className:"h-4 w-4 text-foreground"})})}),e.jsx(A,{children:e.jsx("p",{children:"Delete Holiday"})})]})}),e.jsx(U,{title:"Are you sure?",description:"This action cannot be undone.",name:s==null?void 0:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>i(s.id),loading:o}),e.jsx(w,{title:"Update Holiday",isOpen:r,toggleModal:()=>l(!1),children:e.jsx(I,{data:s,modalClose:()=>l(!1)})})]})}const J=[{id:"select",header:({table:s})=>e.jsx(H,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(H,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Name"},{accessorKey:"type",header:"Type"},{accessorKey:"",accessorFn:({date:s})=>s==null?void 0:s.date,header:"Date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(q,{data:s.original})}],ie=()=>{const[s,a]=g.useState(!1),[t,r]=T.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:c}=B(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),o=(l==null?void 0:l.data)||[],i=l==null?void 0:l.meta;return c?e.jsx(F,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Holiday",description:"Manage your holidays for you organization"}),e.jsxs(p,{onClick:()=>a(!0),size:"sm",children:[e.jsx(_,{className:"mr-2 h-4 w-4"})," Add Holiday"]})]}),e.jsx(k,{}),o&&e.jsx("div",{children:e.jsx(E,{columns:J,data:o,paginationInfo:i,pagination:t,setPagination:r})})]})}),e.jsx(w,{title:"Add Holiday",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(I,{modalClose:()=>a(!1)})})]})};export{ie as default};
