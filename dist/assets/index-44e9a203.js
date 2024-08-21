import{a7 as J,a8 as Y,a as e,$ as b,a9 as W,aa as x,ab as h,ac as j,ad as m,I as F,ae as g,av as w,aw as L,ax as I,ay as M,az as O,B as q,aY as X,ag as p,r as A,ah as P,ai as K,aj as E,ak as Z,al as U,am as v,an as D,ao as Q,ap as G,R as ee,aq as ne,t as se,ar as ce,as as ae}from"./index-4c394285.js";import{a as ie,b as le,c as de,u as te}from"./index-ae4a3bb0.js";import{c as re}from"./index-9d79363c.js";import{c as oe}from"./index-4e11867f.js";import{u as xe}from"./index-cc2cbf32.js";function $({modalClose:s,data:n}){var k,T,z;const[d,{isLoading:u}]=ie(),[a,{isLoading:y}]=le(),{data:t,isLoading:f}=xe(),{data:S,isLoading:C}=re("page=1&per_page=1000"),{data:R,isLoading:B}=oe("page=1&per_page=1000"),V=(S==null?void 0:S.data)||[],N=(t==null?void 0:t.data)||[],_=(R==null?void 0:R.data)||[],r=J({resolver:Y(X),defaultValues:{name:(n==null?void 0:n.name)||"",sorting_index:(n==null?void 0:n.sorting_index)||0,vacancy_number:(n==null?void 0:n.vacancy_number)||0,organization_id:((k=n==null?void 0:n.organization)==null?void 0:k.id)||1,department_id:((T=n==null?void 0:n.department)==null?void 0:T.id)||1,designation_id:((z=n==null?void 0:n.designation)==null?void 0:z.id)||1}});async function H(c){try{n?(await a({vacancyRequisitionId:n.id,updatedVacancyRequisition:c}),p.success("requisition updated successfully"),s()):(await d(c),p.success("requisition created successfully"),s())}catch(l){console.log(l)}}return e.jsx(e.Fragment,{children:u||y?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(W,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(H),className:"w-full space-y-3",children:[e.jsx(x,{control:r.control,name:"name",render:({field:c})=>e.jsxs(h,{children:[e.jsx(j,{children:"Name"}),e.jsx(m,{children:e.jsx(F,{placeholder:"Enter requisition name",...c})}),e.jsx(g,{})]})}),e.jsx(x,{control:r.control,name:"sorting_index",render:({field:c})=>e.jsxs(h,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(m,{children:e.jsx(F,{type:"number",placeholder:"Enter requisition sorting",...c})}),e.jsx(g,{})]})}),e.jsx(x,{control:r.control,name:"vacancy_number",render:({field:c})=>e.jsxs(h,{children:[e.jsx(j,{children:"Vacancy Number"}),e.jsx(m,{children:e.jsx(F,{type:"number",placeholder:"Enter requisition hour",...c})}),e.jsx(g,{})]})}),e.jsx(x,{control:r.control,name:"department_id",render:({field:c})=>{var l,o;return e.jsxs(h,{children:[e.jsx(j,{children:"Department name"}),e.jsxs(w,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.department)!=null&&l.id?String((o=n==null?void 0:n.department)==null?void 0:o.id):void 0,children:[e.jsx(m,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select department"})})}),e.jsx(M,{children:C?e.jsx(b,{}):V==null?void 0:V.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(g,{})]})}}),e.jsx(x,{control:r.control,name:"organization_id",render:({field:c})=>{var l,o;return e.jsxs(h,{children:[e.jsx(j,{children:"Organization name"}),e.jsxs(w,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.organization)!=null&&l.id?String((o=n==null?void 0:n.organization)==null?void 0:o.id):void 0,children:[e.jsx(m,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select Organization"})})}),e.jsx(M,{children:f?e.jsx(b,{}):N==null?void 0:N.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(g,{})]})}}),e.jsx(x,{control:r.control,name:"designation_id",render:({field:c})=>{var l,o;return e.jsxs(h,{children:[e.jsx(j,{children:"Designation Name"}),e.jsxs(w,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.designation)!=null&&l.id?String((o=n==null?void 0:n.designation)==null?void 0:o.id):void 0,children:[e.jsx(m,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select Designation"})})}),e.jsx(M,{children:B?e.jsx(b,{}):_==null?void 0:_.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(g,{})]})}}),e.jsx("div",{children:e.jsx(q,{variant:"default",type:"submit",className:"w-full mt-4",children:n?"Update":"Add"})})]})})})}function he({data:s}){const[n,d]=A.useState(!1),[u,a]=A.useState(!1),[y,{isLoading:t}]=de(),f=async S=>{try{await y(S),p.success("Requisition deleted successfully"),d(!1)}catch(C){console.log(C)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(P,{children:e.jsxs(K,{children:[e.jsx(E,{asChild:!0,children:e.jsx(q,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(Z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(U,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(P,{children:e.jsxs(K,{children:[e.jsx(E,{asChild:!0,children:e.jsx(q,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(U,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(D,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:n,onClose:()=>d(!1),onConfirm:()=>f(s.id),loading:t}),e.jsx(Q,{title:"Update Requisition",isOpen:u,toggleModal:()=>a(!1),children:e.jsx($,{data:s,modalClose:()=>a(!1)})})]})}const je=[{id:"select",header:({table:s})=>e.jsx(G,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(G,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"sorting_index",header:"Sorting Index"},{accessorKey:"vacancy_number",header:"Vacancy Number"},{accessorKey:"",accessorFn:({organization:s})=>s==null?void 0:s.name,header:"Organization"},{accessorKey:"",accessorFn:({department:s})=>s==null?void 0:s.name,header:"Department"},{accessorKey:"",accessorFn:({designation:s})=>s==null?void 0:s.name,header:"Designation"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(he,{data:s.original})}],Se=()=>{const[s,n]=A.useState(!1),[d,u]=ee.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:y}=te(`per_page=${d.pageSize}&page=${d.pageIndex+1}`),t=(a==null?void 0:a.data)||[],f=a==null?void 0:a.meta;return y?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ne,{title:"Vacancy Requisitions",description:"Manage requisitions for you business"}),e.jsxs(q,{onClick:()=>n(!0),size:"sm",children:[e.jsx(se,{className:"mr-2 h-4 w-4"})," Add vacancy"]})]}),e.jsx(ce,{}),t&&e.jsx("div",{children:e.jsx(ae,{columns:je,data:t,paginationInfo:f,pagination:d,setPagination:u})})]})}),e.jsx(Q,{title:"Add Vacancy ",isOpen:s,toggleModal:()=>n(!1),children:e.jsx($,{modalClose:()=>n(!1)})})]})};export{Se as default};
