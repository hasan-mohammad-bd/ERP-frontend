<<<<<<<< HEAD:dist/assets/index-dd78bd8b.js
import{bv as Z,aF as W,aO as X,B as Y,D as v,bK as D,a as e,ar as b,G as ee,H as g,J as u,K as y,M as f,I as K,N as S,aZ as w,a_ as L,a$ as M,b0 as _,b2 as A,Q as q,as as I,at as ne,r as O,av as p,aw as P,ax as E,ay as G,az as se,aA as Q,aB as ce,aC as ae,aD as H,aE as U,R as le,aG as ie,aH as de,aI as te,aJ as re}from"./index-8b9ca140.js";import{a as oe,b as xe,c as he,u as je}from"./index-aab4aa18.js";function B({modalClose:s,data:n}){var T,k,z;const[d,{isLoading:x}]=oe(),[c,{isLoading:h}]=xe(),{data:t,isLoading:j}=Z(),{data:m,isLoading:C}=W("page=1&per_page=1000"),{data:R,isLoading:J}=X("page=1&per_page=1000"),V=(m==null?void 0:m.data)||[],N=(t==null?void 0:t.data)||[],F=(R==null?void 0:R.data)||[],o=Y({resolver:v(D),defaultValues:{name:(n==null?void 0:n.name)||"",vacancy_number:(n==null?void 0:n.vacancy_number)||0,organization_id:((T=n==null?void 0:n.organization)==null?void 0:T.id)||1,department_id:((k=n==null?void 0:n.department)==null?void 0:k.id)||1,designation_id:((z=n==null?void 0:n.designation)==null?void 0:z.id)||1}});async function $(a){try{n?(await c({vacancyRequisitionId:n.id,updatedVacancyRequisition:a}).unwrap(),I.success("requisition updated successfully"),s()):(await d(a).unwrap(),I.success("requisition created successfully"),s())}catch(l){console.log(l),ne(l)}}return e.jsx(e.Fragment,{children:x||h?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(ee,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit($),className:"w-full space-y-3",children:[e.jsx(g,{control:o.control,name:"name",render:({field:a})=>e.jsxs(u,{children:[e.jsx(y,{children:"Name"}),e.jsx(f,{children:e.jsx(K,{placeholder:"Enter requisition name",...a})}),e.jsx(S,{})]})}),e.jsx(g,{control:o.control,name:"vacancy_number",render:({field:a})=>e.jsxs(u,{children:[e.jsx(y,{children:"Vacancy Number"}),e.jsx(f,{children:e.jsx(K,{type:"number",placeholder:"Enter requisition hour",...a})}),e.jsx(S,{})]})}),e.jsx(g,{control:o.control,name:"department_id",render:({field:a})=>{var l,r;return e.jsxs(u,{children:[e.jsx(y,{children:"Department name"}),e.jsxs(w,{onValueChange:a.onChange,defaultValue:(l=n==null?void 0:n.department)!=null&&l.id?String((r=n==null?void 0:n.department)==null?void 0:r.id):void 0,children:[e.jsx(f,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select department"})})}),e.jsx(_,{children:C?e.jsx(b,{}):V==null?void 0:V.map(i=>e.jsx(A,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(S,{})]})}}),e.jsx(g,{control:o.control,name:"organization_id",render:({field:a})=>{var l,r;return e.jsxs(u,{children:[e.jsx(y,{children:"Organization name"}),e.jsxs(w,{onValueChange:a.onChange,defaultValue:(l=n==null?void 0:n.organization)!=null&&l.id?String((r=n==null?void 0:n.organization)==null?void 0:r.id):void 0,children:[e.jsx(f,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select Organization"})})}),e.jsx(_,{children:j?e.jsx(b,{}):N==null?void 0:N.map(i=>e.jsx(A,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(S,{})]})}}),e.jsx(g,{control:o.control,name:"designation_id",render:({field:a})=>{var l,r;return e.jsxs(u,{children:[e.jsx(y,{children:"Designation Name"}),e.jsxs(w,{onValueChange:a.onChange,defaultValue:(l=n==null?void 0:n.designation)!=null&&l.id?String((r=n==null?void 0:n.designation)==null?void 0:r.id):void 0,children:[e.jsx(f,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select Designation"})})}),e.jsx(_,{children:J?e.jsx(b,{}):F==null?void 0:F.map(i=>e.jsx(A,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(S,{})]})}}),e.jsx("div",{children:e.jsx(q,{variant:"default",type:"submit",className:"w-full mt-4",children:n?"Update":"Add"})})]})})})}function me({data:s}){const[n,d]=O.useState(!1),[x,c]=O.useState(!1),[h,{isLoading:t}]=he(),j=async m=>{try{await h(m),I.success("Requisition deleted successfully"),d(!1)}catch(C){console.log(C)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(p,{roles:["vacancy-requisitions.edit"],children:e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(q,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(p,{roles:["vacancy-requisitions.delete"],children:e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(q,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(ce,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Delete Requisition"})})]})})}),e.jsx(ae,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:n,onClose:()=>d(!1),onConfirm:()=>j(s.id),loading:t}),x&&e.jsx(H,{title:"Update Requisition",isOpen:x,toggleModal:()=>c(!1),children:e.jsx(B,{data:s,modalClose:()=>c(!1)})})]})}const ge=[{id:"select",header:({table:s})=>e.jsx(U,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(U,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"vacancy_number",header:"Vacancy Number"},{accessorKey:"",accessorFn:({organization:s})=>s==null?void 0:s.name,header:"Organization"},{accessorKey:"",accessorFn:({department:s})=>s==null?void 0:s.name,header:"Department"},{accessorKey:"",accessorFn:({designation:s})=>s==null?void 0:s.name,header:"Designation"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(me,{data:s.original})}],fe=()=>{const[s,n]=O.useState(!1),[d,x]=le.useState({pageIndex:0,pageSize:10}),{data:c,isLoading:h}=je(`per_page=${d.pageSize}&page=${d.pageIndex+1}`),t=(c==null?void 0:c.data)||[],j=c==null?void 0:c.meta;return h?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ie,{title:"Vacancy Requisitions",description:"Manage requisitions for you business"}),e.jsx(p,{roles:["vacancy-requisitions.create"],children:e.jsxs(q,{onClick:()=>n(!0),size:"sm",children:[e.jsx(de,{className:"mr-2 h-4 w-4"})," Add vacancy"]})})]}),e.jsx(te,{}),t&&e.jsx("div",{children:e.jsx(re,{columns:ge,data:t,paginationInfo:j,pagination:d,setPagination:x})})]})}),s&&e.jsx(H,{title:"Add Vacancy ",isOpen:s,toggleModal:()=>n(!1),children:e.jsx(B,{modalClose:()=>n(!1)})})]})};export{fe as default};
========
import{bv as Z,aF as W,aO as X,B as Y,D as v,bK as D,a as e,ar as b,G as ee,H as g,J as u,K as y,M as f,I as K,N as S,aZ as w,a_ as L,a$ as M,b0 as _,b2 as A,Q as q,as as I,at as ne,r as O,av as p,aw as P,ax as E,ay as G,az as se,aA as Q,aB as ce,aC as ae,aD as H,aE as U,R as le,aG as ie,aH as de,aI as te,aJ as re}from"./index-d9fd53dc.js";import{a as oe,b as xe,c as he,u as je}from"./index-6268ed04.js";function B({modalClose:s,data:n}){var T,k,z;const[d,{isLoading:x}]=oe(),[c,{isLoading:h}]=xe(),{data:t,isLoading:j}=Z(),{data:m,isLoading:C}=W("page=1&per_page=1000"),{data:R,isLoading:J}=X("page=1&per_page=1000"),V=(m==null?void 0:m.data)||[],N=(t==null?void 0:t.data)||[],F=(R==null?void 0:R.data)||[],o=Y({resolver:v(D),defaultValues:{name:(n==null?void 0:n.name)||"",vacancy_number:(n==null?void 0:n.vacancy_number)||0,organization_id:((T=n==null?void 0:n.organization)==null?void 0:T.id)||1,department_id:((k=n==null?void 0:n.department)==null?void 0:k.id)||1,designation_id:((z=n==null?void 0:n.designation)==null?void 0:z.id)||1}});async function $(a){try{n?(await c({vacancyRequisitionId:n.id,updatedVacancyRequisition:a}).unwrap(),I.success("requisition updated successfully"),s()):(await d(a).unwrap(),I.success("requisition created successfully"),s())}catch(l){console.log(l),ne(l)}}return e.jsx(e.Fragment,{children:x||h?e.jsx("div",{className:"h-56",children:e.jsx(b,{})}):e.jsx(ee,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit($),className:"w-full space-y-3",children:[e.jsx(g,{control:o.control,name:"name",render:({field:a})=>e.jsxs(u,{children:[e.jsx(y,{children:"Name"}),e.jsx(f,{children:e.jsx(K,{placeholder:"Enter requisition name",...a})}),e.jsx(S,{})]})}),e.jsx(g,{control:o.control,name:"vacancy_number",render:({field:a})=>e.jsxs(u,{children:[e.jsx(y,{children:"Vacancy Number"}),e.jsx(f,{children:e.jsx(K,{type:"number",placeholder:"Enter requisition hour",...a})}),e.jsx(S,{})]})}),e.jsx(g,{control:o.control,name:"department_id",render:({field:a})=>{var l,r;return e.jsxs(u,{children:[e.jsx(y,{children:"Department name"}),e.jsxs(w,{onValueChange:a.onChange,defaultValue:(l=n==null?void 0:n.department)!=null&&l.id?String((r=n==null?void 0:n.department)==null?void 0:r.id):void 0,children:[e.jsx(f,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select department"})})}),e.jsx(_,{children:C?e.jsx(b,{}):V==null?void 0:V.map(i=>e.jsx(A,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(S,{})]})}}),e.jsx(g,{control:o.control,name:"organization_id",render:({field:a})=>{var l,r;return e.jsxs(u,{children:[e.jsx(y,{children:"Organization name"}),e.jsxs(w,{onValueChange:a.onChange,defaultValue:(l=n==null?void 0:n.organization)!=null&&l.id?String((r=n==null?void 0:n.organization)==null?void 0:r.id):void 0,children:[e.jsx(f,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select Organization"})})}),e.jsx(_,{children:j?e.jsx(b,{}):N==null?void 0:N.map(i=>e.jsx(A,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(S,{})]})}}),e.jsx(g,{control:o.control,name:"designation_id",render:({field:a})=>{var l,r;return e.jsxs(u,{children:[e.jsx(y,{children:"Designation Name"}),e.jsxs(w,{onValueChange:a.onChange,defaultValue:(l=n==null?void 0:n.designation)!=null&&l.id?String((r=n==null?void 0:n.designation)==null?void 0:r.id):void 0,children:[e.jsx(f,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select Designation"})})}),e.jsx(_,{children:J?e.jsx(b,{}):F==null?void 0:F.map(i=>e.jsx(A,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(S,{})]})}}),e.jsx("div",{children:e.jsx(q,{variant:"default",type:"submit",className:"w-full mt-4",children:n?"Update":"Add"})})]})})})}function me({data:s}){const[n,d]=O.useState(!1),[x,c]=O.useState(!1),[h,{isLoading:t}]=he(),j=async m=>{try{await h(m),I.success("Requisition deleted successfully"),d(!1)}catch(C){console.log(C)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(p,{roles:["vacancy-requisitions.edit"],children:e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(q,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>c(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Update Section"})})]})})}),e.jsx(p,{roles:["vacancy-requisitions.delete"],children:e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(G,{asChild:!0,children:e.jsx(q,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(ce,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Delete Requisition"})})]})})}),e.jsx(ae,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:n,onClose:()=>d(!1),onConfirm:()=>j(s.id),loading:t}),x&&e.jsx(H,{title:"Update Requisition",isOpen:x,toggleModal:()=>c(!1),children:e.jsx(B,{data:s,modalClose:()=>c(!1)})})]})}const ge=[{id:"select",header:({table:s})=>e.jsx(U,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(U,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Schedule Name"},{accessorKey:"vacancy_number",header:"Vacancy Number"},{accessorKey:"",accessorFn:({organization:s})=>s==null?void 0:s.name,header:"Organization"},{accessorKey:"",accessorFn:({department:s})=>s==null?void 0:s.name,header:"Department"},{accessorKey:"",accessorFn:({designation:s})=>s==null?void 0:s.name,header:"Designation"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(me,{data:s.original})}],fe=()=>{const[s,n]=O.useState(!1),[d,x]=le.useState({pageIndex:0,pageSize:10}),{data:c,isLoading:h}=je(`per_page=${d.pageSize}&page=${d.pageIndex+1}`),t=(c==null?void 0:c.data)||[],j=c==null?void 0:c.meta;return h?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ie,{title:"Vacancy Requisitions",description:"Manage requisitions for you business"}),e.jsx(p,{roles:["vacancy-requisitions.create"],children:e.jsxs(q,{onClick:()=>n(!0),size:"sm",children:[e.jsx(de,{className:"mr-2 h-4 w-4"})," Add vacancy"]})})]}),e.jsx(te,{}),t&&e.jsx("div",{children:e.jsx(re,{columns:ge,data:t,paginationInfo:j,pagination:d,setPagination:x})})]})}),s&&e.jsx(H,{title:"Add Vacancy ",isOpen:s,toggleModal:()=>n(!1),children:e.jsx(B,{modalClose:()=>n(!1)})})]})};export{fe as default};
>>>>>>>> main:dist/assets/index-38b08769.js
