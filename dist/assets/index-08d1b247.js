import{ay as J,W,X,a as e,Y as b,Z as Y,_ as x,$ as h,a0 as j,a1 as m,I as F,a2 as g,aj as L,ak as w,al as I,am as M,an as O,B as C,aT as Z,a4 as A,r as T,a5 as P,a6 as K,a7 as E,a8 as v,a9 as U,aa as D,ab as ee,ac as Q,ad as G,R as ne,ae as se,v as ce,af as ae,ag as ie}from"./index-a2059318.js";import{a as le,b as de,c as te,u as re}from"./index-96bbe119.js";import{c as oe}from"./index-58253c63.js";import{c as xe}from"./index-d86c4de6.js";function $({modalClose:s,data:n}){var k,p,z;const[d,{isLoading:u}]=le(),[a,{isLoading:y}]=de(),{data:t,isLoading:f}=J(),{data:S,isLoading:R}=oe("page=1&per_page=1000"),{data:q,isLoading:B}=xe("page=1&per_page=1000"),V=(S==null?void 0:S.data)||[],N=(t==null?void 0:t.data)||[],_=(q==null?void 0:q.data)||[],r=W({resolver:X(Z),defaultValues:{name:(n==null?void 0:n.name)||"",sorting_index:(n==null?void 0:n.sorting_index)||0,vacancy_number:(n==null?void 0:n.vacancy_number)||0,organization_id:((k=n==null?void 0:n.organization)==null?void 0:k.id)||1,department_id:((p=n==null?void 0:n.department)==null?void 0:p.id)||1,designation_id:((z=n==null?void 0:n.designation)==null?void 0:z.id)||1}});async function H(c){try{n?(await a({vacancyRequisitionId:n.id,updatedVacancyRequisition:c}),A.success("requisition updated successfully"),s()):(await d(c),A.success("requisition created successfully"),s())}catch(l){console.log(l)}}return e.jsx(e.Fragment,{children:u||y?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(Y,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(H),className:"w-full space-y-3",children:[e.jsx(x,{control:r.control,name:"name",render:({field:c})=>e.jsxs(h,{children:[e.jsx(j,{children:"Name"}),e.jsx(m,{children:e.jsx(F,{placeholder:"Enter requisition name",...c})}),e.jsx(g,{})]})}),e.jsx(x,{control:r.control,name:"sorting_index",render:({field:c})=>e.jsxs(h,{children:[e.jsx(j,{children:"Sorting"}),e.jsx(m,{children:e.jsx(F,{type:"number",placeholder:"Enter requisition sorting",...c})}),e.jsx(g,{})]})}),e.jsx(x,{control:r.control,name:"vacancy_number",render:({field:c})=>e.jsxs(h,{children:[e.jsx(j,{children:"Vacancy Number"}),e.jsx(m,{children:e.jsx(F,{type:"number",placeholder:"Enter requisition hour",...c})}),e.jsx(g,{})]})}),e.jsx(x,{control:r.control,name:"department_id",render:({field:c})=>{var l,o;return e.jsxs(h,{children:[e.jsx(j,{children:"Department name"}),e.jsxs(L,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.department)!=null&&l.id?String((o=n==null?void 0:n.department)==null?void 0:o.id):void 0,children:[e.jsx(m,{children:e.jsx(w,{children:e.jsx(I,{placeholder:"Select department"})})}),e.jsx(M,{children:R?e.jsx(b,{}):V==null?void 0:V.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(g,{})]})}}),e.jsx(x,{control:r.control,name:"organization_id",render:({field:c})=>{var l,o;return e.jsxs(h,{children:[e.jsx(j,{children:"Organization name"}),e.jsxs(L,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.organization)!=null&&l.id?String((o=n==null?void 0:n.organization)==null?void 0:o.id):void 0,children:[e.jsx(m,{children:e.jsx(w,{children:e.jsx(I,{placeholder:"Select Organization"})})}),e.jsx(M,{children:f?e.jsx(b,{}):N==null?void 0:N.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(g,{})]})}}),e.jsx(x,{control:r.control,name:"designation_id",render:({field:c})=>{var l,o;return e.jsxs(h,{children:[e.jsx(j,{children:"Designation Name"}),e.jsxs(L,{onValueChange:c.onChange,defaultValue:(l=n==null?void 0:n.designation)!=null&&l.id?String((o=n==null?void 0:n.designation)==null?void 0:o.id):void 0,children:[e.jsx(m,{children:e.jsx(w,{children:e.jsx(I,{placeholder:"Select Designation"})})}),e.jsx(M,{children:B?e.jsx(b,{}):_==null?void 0:_.map(i=>e.jsx(O,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(g,{})]})}}),e.jsx("div",{children:e.jsx(C,{variant:"default",type:"submit",className:"w-full mt-4",children:n?"Update":"Add"})})]})})})}function he({data:s}){const[n,d]=T.useState(!1),[u,a]=T.useState(!1),[y,{isLoading:t}]=te(),f=async S=>{try{await y(S),A.success("Requisition deleted successfully"),d(!1)}catch(R){console.log(R)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(P,{children:e.jsxs(K,{children:[e.jsx(E,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(U,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(P,{children:e.jsxs(K,{children:[e.jsx(E,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(D,{className:"h-4 w-4 text-foreground"})})}),e.jsx(U,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(ee,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:n,onClose:()=>d(!1),onConfirm:()=>f(s.id),loading:t}),e.jsx(Q,{title:"Update Requisition",isOpen:u,toggleModal:()=>a(!1),children:e.jsx($,{data:s,modalClose:()=>a(!1)})})]})}const je=[{id:"select",header:({table:s})=>e.jsx(G,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(G,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"sorting_index",header:"Sorting Index"},{accessorKey:"vacancy_number",header:"Vacancy Number"},{accessorKey:"",accessorFn:({organization:s})=>s==null?void 0:s.name,header:"Organization"},{accessorKey:"",accessorFn:({department:s})=>s==null?void 0:s.name,header:"Department"},{accessorKey:"",accessorFn:({designation:s})=>s==null?void 0:s.name,header:"Designation"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(he,{data:s.original})}],fe=()=>{const[s,n]=T.useState(!1),[d,u]=ne.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:y}=re(`per_page=${d.pageSize}&page=${d.pageIndex+1}`),t=(a==null?void 0:a.data)||[],f=a==null?void 0:a.meta;return y?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(se,{title:"Vacancy Requisitions",description:"Manage requisitions for you business"}),e.jsxs(C,{onClick:()=>n(!0),size:"sm",children:[e.jsx(ce,{className:"mr-2 h-4 w-4"})," Add vacancy"]})]}),e.jsx(ae,{}),t&&e.jsx("div",{children:e.jsx(ie,{columns:je,data:t,paginationInfo:f,pagination:d,setPagination:u})})]})}),e.jsx(Q,{title:"Add Vacancy ",isOpen:s,toggleModal:()=>n(!1),children:e.jsx($,{modalClose:()=>n(!1)})})]})};export{fe as default};
