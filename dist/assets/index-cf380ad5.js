import{ay as J,V as W,W as Y,b8 as Z,a as e,Y as b,Z as X,_ as h,$ as j,a0 as m,a1 as g,I as F,a2 as u,aj as w,ak as L,al as I,am as M,an as O,B as C,a3 as p,a4 as v,r as A,a5 as P,a6 as E,a7 as K,a8 as D,a9 as U,aa as ee,ab as ne,ac as Q,ad as G,R as se,ae as ce,t as ae,af as le,ag as ie}from"./index-96b0e7a7.js";import{a as de,b as te,c as re,u as oe}from"./index-66f8388d.js";import{c as xe}from"./index-8af6e286.js";import{c as he}from"./index-b5c9dcb1.js";function $({modalClose:s,data:n}){var k,T,z;const[d,{isLoading:x}]=de(),[a,{isLoading:y}]=te(),{data:t,isLoading:f}=J(),{data:S,isLoading:R}=xe("page=1&per_page=1000"),{data:q,isLoading:B}=he("page=1&per_page=1000"),V=(S==null?void 0:S.data)||[],N=(t==null?void 0:t.data)||[],_=(q==null?void 0:q.data)||[],r=W({resolver:Y(Z),defaultValues:{name:(n==null?void 0:n.name)||"",sorting_index:(n==null?void 0:n.sorting_index)||0,vacancy_number:(n==null?void 0:n.vacancy_number)||0,organization_id:((k=n==null?void 0:n.organization)==null?void 0:k.id)||1,department_id:((T=n==null?void 0:n.department)==null?void 0:T.id)||1,designation_id:((z=n==null?void 0:n.designation)==null?void 0:z.id)||1}});async function H(c){try{n?(await a({vacancyRequisitionId:n.id,updatedVacancyRequisition:c}).unwrap(),p.success("requisition updated successfully"),s()):(await d(c).unwrap(),p.success("requisition created successfully"),s())}catch(l){console.log(l),v(l)}}return e.jsx(e.Fragment,{children:x||y?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(X,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(H),className:"w-full space-y-3",children:[e.jsx(h,{control:r.control,name:"name",render:({field:c})=>e.jsxs(j,{children:[e.jsx(m,{children:"Name"}),e.jsx(g,{children:e.jsx(F,{placeholder:"Enter requisition name",...c})}),e.jsx(u,{})]})}),e.jsx(h,{control:r.control,name:"sorting_index",render:({field:c})=>e.jsxs(j,{children:[e.jsx(m,{children:"Sorting"}),e.jsx(g,{children:e.jsx(F,{type:"number",placeholder:"Enter requisition sorting",...c})}),e.jsx(u,{})]})}),e.jsx(h,{control:r.control,name:"vacancy_number",render:({field:c})=>e.jsxs(j,{children:[e.jsx(m,{children:"Vacancy Number"}),e.jsx(g,{children:e.jsx(F,{type:"number",placeholder:"Enter requisition hour",...c})}),e.jsx(u,{})]})}),e.jsx(h,{control:r.control,name:"department_id",render:({field:c})=>{var l,o;return e.jsxs(j,{children:[e.jsx(m,{children:"Department name"}),e.jsxs(w,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.department)!=null&&l.id?String((o=n==null?void 0:n.department)==null?void 0:o.id):void 0,children:[e.jsx(g,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select department"})})}),e.jsx(M,{children:R?e.jsx(b,{}):V==null?void 0:V.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(u,{})]})}}),e.jsx(h,{control:r.control,name:"organization_id",render:({field:c})=>{var l,o;return e.jsxs(j,{children:[e.jsx(m,{children:"Organization name"}),e.jsxs(w,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.organization)!=null&&l.id?String((o=n==null?void 0:n.organization)==null?void 0:o.id):void 0,children:[e.jsx(g,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select Organization"})})}),e.jsx(M,{children:f?e.jsx(b,{}):N==null?void 0:N.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(u,{})]})}}),e.jsx(h,{control:r.control,name:"designation_id",render:({field:c})=>{var l,o;return e.jsxs(j,{children:[e.jsx(m,{children:"Designation Name"}),e.jsxs(w,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.designation)!=null&&l.id?String((o=n==null?void 0:n.designation)==null?void 0:o.id):void 0,children:[e.jsx(g,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select Designation"})})}),e.jsx(M,{children:B?e.jsx(b,{}):_==null?void 0:_.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(u,{})]})}}),e.jsx("div",{children:e.jsx(C,{variant:"default",type:"submit",className:"w-full mt-4",children:n?"Update":"Add"})})]})})})}function je({data:s}){const[n,d]=A.useState(!1),[x,a]=A.useState(!1),[y,{isLoading:t}]=re(),f=async S=>{try{await y(S),p.success("Requisition deleted successfully"),d(!1)}catch(R){console.log(R)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(K,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(D,{className:"h-4 w-4 text-foreground"})})}),e.jsx(U,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(K,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(ee,{className:"h-4 w-4 text-foreground"})})}),e.jsx(U,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(ne,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:n,onClose:()=>d(!1),onConfirm:()=>f(s.id),loading:t}),x&&e.jsx(Q,{title:"Update Requisition",isOpen:x,toggleModal:()=>a(!1),children:e.jsx($,{data:s,modalClose:()=>a(!1)})})]})}const me=[{id:"select",header:({table:s})=>e.jsx(G,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(G,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"sorting_index",header:"Sorting Index"},{accessorKey:"vacancy_number",header:"Vacancy Number"},{accessorKey:"",accessorFn:({organization:s})=>s==null?void 0:s.name,header:"Organization"},{accessorKey:"",accessorFn:({department:s})=>s==null?void 0:s.name,header:"Department"},{accessorKey:"",accessorFn:({designation:s})=>s==null?void 0:s.name,header:"Designation"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(je,{data:s.original})}],Se=()=>{const[s,n]=A.useState(!1),[d,x]=se.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:y}=oe(`per_page=${d.pageSize}&page=${d.pageIndex+1}`),t=(a==null?void 0:a.data)||[],f=a==null?void 0:a.meta;return y?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ce,{title:"Vacancy Requisitions",description:"Manage requisitions for you business"}),e.jsxs(C,{onClick:()=>n(!0),size:"sm",children:[e.jsx(ae,{className:"mr-2 h-4 w-4"})," Add vacancy"]})]}),e.jsx(le,{}),t&&e.jsx("div",{children:e.jsx(ie,{columns:me,data:t,paginationInfo:f,pagination:d,setPagination:x})})]})}),s&&e.jsx(Q,{title:"Add Vacancy ",isOpen:s,toggleModal:()=>n(!1),children:e.jsx($,{modalClose:()=>n(!1)})})]})};export{Se as default};
