import{j as e,A as C,r as b,R as P}from"./index-CwtkdAoF.js";import{u as k,t as z,L as N,F as E,a as m,b as x,c as j,d as g,e as u,S as R,f as $,g as K,h as U,i as H,M as I,H as V}from"./modal-DpBJVnX2.js";import{B as p}from"./index-Cxev_hGH.js";import{$ as B}from"./index-D-gdl2yy.js";import{P as G,T as Q,A as q,C as T,D as J}from"./alert-modal-BmFBKbfb.js";import{I as S}from"./input-BHxcSLDT.js";import{h as W}from"./validators-P_ADjOZ1.js";import{a as X,b as Y,c as Z,u as v}from"./index-DzKmGKfs.js";import{u as D}from"./index-B8o9Qtp5.js";import{T as A,a as M,b as _,c as w}from"./tooltip-BMgwtow4.js";import{P as ee}from"./sheet-CUiZ_cAH.js";import"./dropdown-menu-DfrG1frA.js";import"./chevron-right-DEhBy0bI.js";import"./card-Ba-Nv17p.js";function O({modalClose:n,data:s}){var F;const[t,{isLoading:a}]=X(),[l,{isLoading:i}]=Y(),{data:r,isLoading:o}=D(),h=(r==null?void 0:r.data)||[],d=k({resolver:z(W),defaultValues:{name:(s==null?void 0:s.name)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,hour:(s==null?void 0:s.hour)||"0",start_time:(s==null?void 0:s.start_time)||"00:00:00",end_time:(s==null?void 0:s.end_time)||"00:00:00",organization_id:((F=s==null?void 0:s.organization)==null?void 0:F.id)||1}});async function L(c){try{s?(await l({scheduleId:s.id,updatedSchedule:c}),C.success("Schedule updated successfully"),n()):(await t(c),C.success("Schedule created successfully"),n())}catch(f){console.log(f)}}return e.jsx(e.Fragment,{children:a||i?e.jsx("div",{className:"h-56",children:e.jsx(N,{})}):e.jsx(E,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(L),className:"w-full space-y-3",children:[e.jsx(m,{control:d.control,name:"name",render:({field:c})=>e.jsxs(x,{children:[e.jsx(j,{children:"Name"}),e.jsx(g,{children:e.jsx(S,{placeholder:"Enter schedule name",...c})}),e.jsx(u,{})]})}),e.jsx(m,{control:d.control,name:"sorting_index",render:({field:c})=>e.jsxs(x,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(g,{children:e.jsx(S,{type:"number",placeholder:"Enter schedule sorting",...c})}),e.jsx(u,{})]})}),e.jsx(m,{control:d.control,name:"start_time",render:({field:c})=>e.jsxs(x,{children:[e.jsx(j,{children:"Start Time"}),e.jsx(g,{children:e.jsx(S,{type:"time",placeholder:"Enter schedule start time",...c})}),e.jsx(u,{})]})}),e.jsx(m,{control:d.control,name:"end_time",render:({field:c})=>e.jsxs(x,{children:[e.jsx(j,{children:"End Time"}),e.jsx(g,{children:e.jsx(S,{type:"time",placeholder:"Enter section end time",...c})}),e.jsx(u,{})]})}),e.jsx(m,{control:d.control,name:"organization_id",render:({field:c})=>{var f;return e.jsxs(x,{children:[e.jsx(j,{children:"Organization Name"}),e.jsxs(R,{onValueChange:c.onChange,defaultValue:(f=s==null?void 0:s.organization)!=null&&f.id?String(s.organization.id):void 0,children:[e.jsx(g,{children:e.jsx($,{children:e.jsx(K,{placeholder:"Select Organization"})})}),e.jsx(U,{children:o?e.jsx(N,{}):h==null?void 0:h.map(y=>e.jsx(H,{value:String(y.id),children:y.name},y.id))})]}),e.jsx(u,{})]})}}),e.jsx("div",{children:e.jsx(p,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}function se({data:n}){const[s,t]=b.useState(!1),[a,l]=b.useState(!1),[i,{isLoading:r}]=Z(),o=async h=>{try{await i(h),C.success("Schedule deleted successfully"),t(!1)}catch(d){console.log(d)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(A,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(G,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(A,{children:e.jsxs(M,{children:[e.jsx(_,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(Q,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(q,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:s,onClose:()=>t(!1),onConfirm:()=>o(n.id),loading:r}),e.jsx(I,{title:"Update Schedule",isOpen:a,toggleModal:()=>l(!1),children:e.jsx(O,{data:n,modalClose:()=>l(!1)})})]})}const ne=[{id:"select",header:({table:n})=>e.jsx(T,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(T,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"start_time",header:"Start Time"},{accessorKey:"end_time",header:"End Time"},{accessorKey:"hour",header:"Hour"},{accessorKey:"",accessorFn:({organization:n})=>n==null?void 0:n.name,header:"Organization"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(se,{data:n.original})}],fe=()=>{const[n,s]=b.useState(!1),[t,a]=P.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=v(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),r=(l==null?void 0:l.data)||[],o=l==null?void 0:l.meta;return i?e.jsx(N,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(V,{title:"Schedule",description:"Manage schedule for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Schedule"]})]}),e.jsx(B,{}),r&&e.jsx("div",{children:e.jsx(J,{columns:ne,data:r,paginationInfo:o,pagination:t,setPagination:a})})]})}),e.jsx(I,{title:"Add Schedule",isOpen:n,toggleModal:()=>s(!1),children:e.jsx(O,{modalClose:()=>s(!1)})})]})};export{fe as default};
