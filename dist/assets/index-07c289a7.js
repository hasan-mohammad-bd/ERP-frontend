<<<<<<<< HEAD:dist/assets/index-51bdc775.js
import{ay as je,az as he,V as te,W as ae,b3 as me,a as e,Y as S,Z as ge,_ as r,$ as x,a0 as o,a1 as j,I as y,a2 as h,aj as N,ak as C,al as P,am as w,an as f,aq as M,B as E,a3 as H,r as J,a5 as U,a6 as Z,a7 as $,a8 as be,a9 as B,aa as ye,ab as fe,ac as Y,ad as le,R as Se,ae as _e,t as Ne,af as Ce,ag as Pe}from"./index-2c05d2d2.js";import{u as we}from"./index-ad4a8ac3.js";import{c as Le}from"./index-f2b77ccd.js";import{c as Ve}from"./index-cd72d85f.js";import{u as ke}from"./index-476da081.js";import{u as Ee}from"./index-5ea2c9ab.js";import{S as Me}from"./switch-78ffba02.js";import{a as Je,b as Fe,c as Ae,u as Ie}from"./index-4b8aafe2.js";import{Z as Oe}from"./zoom-in-51fb75aa.js";function ce({modalClose:s,data:n}){var X,p,v,D,ee,ne,se;const[a,{isLoading:g}]=Je(),[t,{isLoading:b}]=Fe(),{data:m,isLoading:_}=je(),{data:V,isLoading:F}=Le("page=1&per_page=1000"),{data:k,isLoading:A}=Ve("page=1&per_page=1000"),{data:I,isLoading:de}=he("page=1&per_page=1000"),{data:O,isLoading:ie}=we("page=1&per_page=1000"),{data:R,isLoading:re}=ke(),{data:T,isLoading:xe}=Ee(),z=(V==null?void 0:V.data)||[],q=(m==null?void 0:m.data)||[],K=(k==null?void 0:k.data)||[],G=(I==null?void 0:I.data)||[],Q=(O==null?void 0:O.data)||[],W=(R==null?void 0:R.data)||[],u=(T==null?void 0:T.data)||[],d=te({resolver:ae(me),defaultValues:{title:(n==null?void 0:n.title)||"",sorting_index:(n==null?void 0:n.sorting_index)||0,date:(n==null?void 0:n.date)||"",deadline:(n==null?void 0:n.deadline)||"",vacancy_number:(n==null?void 0:n.vacancy_number)||0,organization_id:((X=n==null?void 0:n.organization)==null?void 0:X.id)||1,department_id:((p=n==null?void 0:n.department)==null?void 0:p.id)||1,designation_id:((v=n==null?void 0:n.designation)==null?void 0:v.id)||1,location_id:((D=n==null?void 0:n.location)==null?void 0:D.id)||1,vacancy_requisition_id:((ee=n==null?void 0:n.vacancy_requisition)==null?void 0:ee.id)||1,employment_status_id:((ne=n==null?void 0:n.employment_status)==null?void 0:ne.id)||1,work_place_id:((se=n==null?void 0:n.work_place)==null?void 0:se.id)||1,min_age:(n==null?void 0:n.min_age)||18,max_age:(n==null?void 0:n.max_age)||60,responsibilities:(n==null?void 0:n.responsibilities)||"",education:(n==null?void 0:n.education)||"",experience:(n==null?void 0:n.experience)||"",skills:(n==null?void 0:n.skills)||"",show_salary:(n==null?void 0:n.show_salary)||0,min_salary:(n==null?void 0:n.min_salary)||0,max_salary:(n==null?void 0:n.max_salary)||0,status:(n==null?void 0:n.status)||"active"}});async function oe(l){try{n?(await t({jobPostId:n.id,updatedJobPost:l}),H.success("Job Post updated successfully"),s()):(await a(l),H.success("Job Post created successfully"),s())}catch(i){console.log(i)}}return e.jsx(e.Fragment,{children:g||b?e.jsx("div",{className:"h-56",children:e.jsx(S,{})}):e.jsx(ge,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(oe),className:" space-y-3 ",children:[e.jsx(r,{control:d.control,name:"title",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Title"}),e.jsx(j,{children:e.jsx(y,{placeholder:"Enter Title ",...l})}),e.jsx(h,{})]})}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[e.jsx(r,{control:d.control,name:"date",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Date"}),e.jsx(j,{children:e.jsx(y,{type:"date",placeholder:"Enter Date",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"deadline",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Deadline"}),e.jsx(j,{children:e.jsx(y,{type:"date",placeholder:"Enter Deadline",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"department_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Department name"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.department)!=null&&i.id?String(n.department.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Department"})})}),e.jsx(w,{children:F?e.jsx(S,{}):z==null?void 0:z.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"organization_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Organization name"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.organization)!=null&&i.id?String(n.organization.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Organization"})})}),e.jsx(w,{children:_?e.jsx(S,{}):q==null?void 0:q.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"designation_id",render:({field:l})=>{var i,c;return e.jsxs(x,{children:[e.jsx(o,{children:"Designation Name"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.designation)!=null&&i.id?String((c=n==null?void 0:n.designation)==null?void 0:c.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Designation"})})}),e.jsx(w,{children:A?e.jsx(S,{}):K==null?void 0:K.map(L=>e.jsx(f,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"location_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Location"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.location)!=null&&i.id?String(n==null?void 0:n.location.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Location"})})}),e.jsx(w,{children:de?e.jsx(S,{}):G==null?void 0:G.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"vacancy_requisition_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Vacancy Requisition"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.vacancy_requisition)!=null&&i.id?String(n==null?void 0:n.vacancy_requisition.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Vacancy Requisition"})})}),e.jsx(w,{children:ie?e.jsx(S,{}):Q==null?void 0:Q.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"vacancy_number",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Vacancy Number"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter requisition hour",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"employment_status_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Employment Status"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.employment_status)!=null&&i.id?String(n.employment_status.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Employment Status"})})}),e.jsx(w,{children:re?e.jsx(S,{}):W==null?void 0:W.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"work_place_id",render:({field:l})=>{var i,c;return e.jsxs(x,{children:[e.jsx(o,{children:"Work Place"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.work_place)!=null&&i.id?String((c=n==null?void 0:n.work_place)==null?void 0:c.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Work Place"})})}),e.jsx(w,{children:xe?e.jsx(S,{}):u==null?void 0:u.map(L=>e.jsx(f,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"sorting_index",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Sorting"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter job sorting",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"status",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Status"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(n==null?void 0:n.status)||"Active",children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:""})})}),e.jsxs(w,{children:[e.jsx(f,{value:"Active",children:"Active"}),e.jsx(f,{value:"Inactive",children:"Inactive"})]})]}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"responsibilities",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Responsibilities"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter responsibilities name",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"education",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Education"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter education",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"experience",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Experience"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter experience",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"skills",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Skills"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter skills",...l})}),e.jsx(h,{})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(r,{control:d.control,name:"min_age",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Minimum Age"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter minimum age limit",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"max_age",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Maximum Age"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter maximum age limit",...l})}),e.jsx(h,{})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(r,{control:d.control,name:"min_salary",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Minimum Salary"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter minimum salary limit",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"max_salary",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Maximum Salary"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter maximum salary limit",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"show_salary",render:({field:l})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(o,{children:"Show Salary"})}),e.jsx(j,{children:e.jsx(Me,{checked:l.value===1,onCheckedChange:i=>l.onChange(i?1:0)})})]})})]}),e.jsx("div",{children:e.jsx(E,{variant:"default",type:"submit",className:"w-full mt-4",children:n?"Update":"Add"})})]})})})}const Re=({data:s})=>{var n,a,g,t,b,m,_;return e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Title:"}),e.jsx("div",{children:s.title})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Date:"}),e.jsx("div",{children:s.date})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Deadline:"}),e.jsx("div",{children:s.deadline})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Department:"}),e.jsx("div",{children:(n=s.department)==null?void 0:n.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Organization:"}),e.jsx("div",{children:(a=s.organization)==null?void 0:a.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Designation:"}),e.jsx("div",{children:(g=s.designation)==null?void 0:g.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Location:"}),e.jsx("div",{children:(t=s.location)==null?void 0:t.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Vacancy Requisition:"}),e.jsx("div",{children:(b=s.vacancy_requisition)==null?void 0:b.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Vacancy Number:"}),e.jsx("div",{children:s.vacancy_number})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Employment Status:"}),e.jsx("div",{children:(m=s.employment_status)==null?void 0:m.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Work Place:"}),e.jsx("div",{children:(_=s.work_place)==null?void 0:_.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Sorting Index:"}),e.jsx("div",{children:s.sorting_index})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Status:"}),e.jsx("div",{children:s.status})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Responsibilities:"}),e.jsx("div",{children:s.responsibilities})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Education:"}),e.jsx("div",{children:s.education})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Experience:"}),e.jsx("div",{children:s.experience})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Skills:"}),e.jsx("div",{children:s.skills})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Minimum Age:"}),e.jsx("div",{children:s.min_age})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Maximum Age:"}),e.jsx("div",{children:s.max_age})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Minimum Salary:"}),e.jsx("div",{children:s.min_salary})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Maximum Salary:"}),e.jsx("div",{children:s.max_salary})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Show Salary:"}),e.jsx("div",{children:s.show_salary===1?"Yes":"No"})]})]})})};function Te({data:s}){const[n,a]=J.useState(!1),[g,t]=J.useState(!1),[b,m]=J.useState(!1),[_,{isLoading:V}]=Ae(),F=async k=>{try{await _(k),H.success("Job deleted successfully"),a(!1)}catch(A){console.log(A)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(U,{children:e.jsxs(Z,{children:[e.jsx($,{asChild:!0,children:e.jsx(E,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(be,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(U,{children:e.jsxs(Z,{children:[e.jsx($,{asChild:!0,children:e.jsx(E,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{m(!0)},children:e.jsx(Oe,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(U,{children:e.jsxs(Z,{children:[e.jsx($,{asChild:!0,children:e.jsx(E,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(ye,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(fe,{title:"Are you sure?",description:"This action cannot be undone.",name:s.title,isOpen:n,onClose:()=>a(!1),onConfirm:()=>F(s.id),loading:V}),g&&e.jsx(Y,{title:"Update Job",isOpen:g,toggleModal:()=>t(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ce,{data:s,modalClose:()=>t(!1)})}),b&&e.jsx(Y,{title:"Job Details",isOpen:b,toggleModal:()=>m(!1),className:"w-[90%] max-w-6xl",children:e.jsx(Re,{data:s})})]})}const ze=[{id:"select",header:({table:s})=>e.jsx(le,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(le,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"title",header:"Job title"},{accessorKey:"",accessorFn:({department:s})=>s==null?void 0:s.name,header:"Department"},{accessorKey:"",accessorFn:({organization:s})=>s==null?void 0:s.name,header:"Organization"},{accessorKey:"",accessorFn:({designation:s})=>s==null?void 0:s.name,header:"Designation"},{accessorKey:"location",accessorFn:({location:s})=>s==null?void 0:s.name,header:"Location"},{accessorKey:"vacancy_requisition",accessorFn:({vacancy_requisition:s})=>s==null?void 0:s.name,header:"Vacancy requisition"},{accessorKey:"vacancy_number",header:"Vacancy number"},{accessorKey:"employment_status",accessorFn:({employment_status:s})=>s==null?void 0:s.name,header:"Employment status"},{accessorKey:"work_place",accessorFn:({work_place:s})=>s==null?void 0:s.name,header:"Work place"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Te,{data:s.original})}],Be=()=>{const[s,n]=J.useState(!1),[a,g]=Se.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:b}=Ie(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),m=(t==null?void 0:t.data)||[],_=t==null?void 0:t.meta;return b?e.jsx(S,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(_e,{title:"Job Post",description:"Manage job post for you business"}),e.jsxs(E,{onClick:()=>n(!0),size:"sm",children:[e.jsx(Ne,{className:"mr-2 h-4 w-4"})," Add Job Post"]})]}),e.jsx(Ce,{}),m&&e.jsx("div",{children:e.jsx(Pe,{columns:ze,data:m,paginationInfo:_,pagination:a,setPagination:g})})]})}),s&&e.jsx(Y,{title:"Add Job Post",isOpen:s,toggleModal:()=>n(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ce,{modalClose:()=>n(!1)})})]})};export{Be as default};
========
import{ay as je,az as he,V as te,W as ae,b4 as me,a as e,Y as S,Z as ge,_ as r,$ as x,a0 as o,a1 as j,I as y,a2 as h,aj as N,ak as C,al as P,am as w,an as f,aq as M,B as E,a3 as H,r as J,a5 as U,a6 as Z,a7 as $,a8 as be,a9 as B,aa as ye,ab as fe,ac as Y,ad as le,R as Se,ae as _e,t as Ne,af as Ce,ag as Pe}from"./index-3e1b8bd0.js";import{u as we}from"./index-65ee7b5e.js";import{c as Le}from"./index-4a46d62a.js";import{c as Ve}from"./index-636a4203.js";import{u as ke}from"./index-19002b2f.js";import{u as Ee}from"./index-3536c76f.js";import{S as Me}from"./switch-104e17a8.js";import{a as Je,b as Fe,c as Ae,u as Ie}from"./index-f1df9ddc.js";import{Z as Oe}from"./zoom-in-4a111a6f.js";function ce({modalClose:s,data:n}){var X,p,v,D,ee,ne,se;const[a,{isLoading:g}]=Je(),[t,{isLoading:b}]=Fe(),{data:m,isLoading:_}=je(),{data:V,isLoading:F}=Le("page=1&per_page=1000"),{data:k,isLoading:A}=Ve("page=1&per_page=1000"),{data:I,isLoading:de}=he("page=1&per_page=1000"),{data:O,isLoading:ie}=we("page=1&per_page=1000"),{data:R,isLoading:re}=ke(),{data:T,isLoading:xe}=Ee(),z=(V==null?void 0:V.data)||[],q=(m==null?void 0:m.data)||[],K=(k==null?void 0:k.data)||[],G=(I==null?void 0:I.data)||[],Q=(O==null?void 0:O.data)||[],W=(R==null?void 0:R.data)||[],u=(T==null?void 0:T.data)||[],d=te({resolver:ae(me),defaultValues:{title:(n==null?void 0:n.title)||"",sorting_index:(n==null?void 0:n.sorting_index)||0,date:(n==null?void 0:n.date)||"",deadline:(n==null?void 0:n.deadline)||"",vacancy_number:(n==null?void 0:n.vacancy_number)||0,organization_id:((X=n==null?void 0:n.organization)==null?void 0:X.id)||1,department_id:((p=n==null?void 0:n.department)==null?void 0:p.id)||1,designation_id:((v=n==null?void 0:n.designation)==null?void 0:v.id)||1,location_id:((D=n==null?void 0:n.location)==null?void 0:D.id)||1,vacancy_requisition_id:((ee=n==null?void 0:n.vacancy_requisition)==null?void 0:ee.id)||1,employment_status_id:((ne=n==null?void 0:n.employment_status)==null?void 0:ne.id)||1,work_place_id:((se=n==null?void 0:n.work_place)==null?void 0:se.id)||1,min_age:(n==null?void 0:n.min_age)||18,max_age:(n==null?void 0:n.max_age)||60,responsibilities:(n==null?void 0:n.responsibilities)||"",education:(n==null?void 0:n.education)||"",experience:(n==null?void 0:n.experience)||"",skills:(n==null?void 0:n.skills)||"",show_salary:(n==null?void 0:n.show_salary)||0,min_salary:(n==null?void 0:n.min_salary)||0,max_salary:(n==null?void 0:n.max_salary)||0,status:(n==null?void 0:n.status)||"active"}});async function oe(l){try{n?(await t({jobPostId:n.id,updatedJobPost:l}),H.success("Job Post updated successfully"),s()):(await a(l),H.success("Job Post created successfully"),s())}catch(i){console.log(i)}}return e.jsx(e.Fragment,{children:g||b?e.jsx("div",{className:"h-56",children:e.jsx(S,{})}):e.jsx(ge,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(oe),className:" space-y-3 ",children:[e.jsx(r,{control:d.control,name:"title",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Title"}),e.jsx(j,{children:e.jsx(y,{placeholder:"Enter Title ",...l})}),e.jsx(h,{})]})}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[e.jsx(r,{control:d.control,name:"date",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Date"}),e.jsx(j,{children:e.jsx(y,{type:"date",placeholder:"Enter Date",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"deadline",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Deadline"}),e.jsx(j,{children:e.jsx(y,{type:"date",placeholder:"Enter Deadline",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"department_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Department name"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.department)!=null&&i.id?String(n.department.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Department"})})}),e.jsx(w,{children:F?e.jsx(S,{}):z==null?void 0:z.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"organization_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Organization name"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.organization)!=null&&i.id?String(n.organization.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Organization"})})}),e.jsx(w,{children:_?e.jsx(S,{}):q==null?void 0:q.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"designation_id",render:({field:l})=>{var i,c;return e.jsxs(x,{children:[e.jsx(o,{children:"Designation Name"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.designation)!=null&&i.id?String((c=n==null?void 0:n.designation)==null?void 0:c.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Designation"})})}),e.jsx(w,{children:A?e.jsx(S,{}):K==null?void 0:K.map(L=>e.jsx(f,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"location_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Location"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.location)!=null&&i.id?String(n==null?void 0:n.location.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Location"})})}),e.jsx(w,{children:de?e.jsx(S,{}):G==null?void 0:G.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"vacancy_requisition_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Vacancy Requisition"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.vacancy_requisition)!=null&&i.id?String(n==null?void 0:n.vacancy_requisition.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Vacancy Requisition"})})}),e.jsx(w,{children:ie?e.jsx(S,{}):Q==null?void 0:Q.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"vacancy_number",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Vacancy Number"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter requisition hour",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"employment_status_id",render:({field:l})=>{var i;return e.jsxs(x,{children:[e.jsx(o,{children:"Employment Status"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.employment_status)!=null&&i.id?String(n.employment_status.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Employment Status"})})}),e.jsx(w,{children:re?e.jsx(S,{}):W==null?void 0:W.map(c=>e.jsx(f,{value:String(c.id),children:c.name},c.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"work_place_id",render:({field:l})=>{var i,c;return e.jsxs(x,{children:[e.jsx(o,{children:"Work Place"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(i=n==null?void 0:n.work_place)!=null&&i.id?String((c=n==null?void 0:n.work_place)==null?void 0:c.id):void 0,children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:"Select Work Place"})})}),e.jsx(w,{children:xe?e.jsx(S,{}):u==null?void 0:u.map(L=>e.jsx(f,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(h,{})]})}}),e.jsx(r,{control:d.control,name:"sorting_index",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Sorting"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter job sorting",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"status",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Status"}),e.jsxs(N,{onValueChange:l.onChange,defaultValue:(n==null?void 0:n.status)||"Active",children:[e.jsx(j,{children:e.jsx(C,{children:e.jsx(P,{placeholder:""})})}),e.jsxs(w,{children:[e.jsx(f,{value:"Active",children:"Active"}),e.jsx(f,{value:"Inactive",children:"Inactive"})]})]}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"responsibilities",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Responsibilities"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter responsibilities name",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"education",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Education"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter education",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"experience",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Experience"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter experience",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"skills",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Skills"}),e.jsx(j,{children:e.jsx(M,{placeholder:"Enter skills",...l})}),e.jsx(h,{})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(r,{control:d.control,name:"min_age",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Minimum Age"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter minimum age limit",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"max_age",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Maximum Age"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter maximum age limit",...l})}),e.jsx(h,{})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(r,{control:d.control,name:"min_salary",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Minimum Salary"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter minimum salary limit",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"max_salary",render:({field:l})=>e.jsxs(x,{children:[e.jsx(o,{children:"Maximum Salary"}),e.jsx(j,{children:e.jsx(y,{type:"number",placeholder:"Enter maximum salary limit",...l})}),e.jsx(h,{})]})}),e.jsx(r,{control:d.control,name:"show_salary",render:({field:l})=>e.jsxs(x,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(o,{children:"Show Salary"})}),e.jsx(j,{children:e.jsx(Me,{checked:l.value===1,onCheckedChange:i=>l.onChange(i?1:0)})})]})})]}),e.jsx("div",{children:e.jsx(E,{variant:"default",type:"submit",className:"w-full mt-4",children:n?"Update":"Add"})})]})})})}const Re=({data:s})=>{var n,a,g,t,b,m,_;return e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Title:"}),e.jsx("div",{children:s.title})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Date:"}),e.jsx("div",{children:s.date})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Deadline:"}),e.jsx("div",{children:s.deadline})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Department:"}),e.jsx("div",{children:(n=s.department)==null?void 0:n.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Organization:"}),e.jsx("div",{children:(a=s.organization)==null?void 0:a.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Designation:"}),e.jsx("div",{children:(g=s.designation)==null?void 0:g.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Location:"}),e.jsx("div",{children:(t=s.location)==null?void 0:t.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Vacancy Requisition:"}),e.jsx("div",{children:(b=s.vacancy_requisition)==null?void 0:b.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Vacancy Number:"}),e.jsx("div",{children:s.vacancy_number})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Employment Status:"}),e.jsx("div",{children:(m=s.employment_status)==null?void 0:m.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Work Place:"}),e.jsx("div",{children:(_=s.work_place)==null?void 0:_.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Sorting Index:"}),e.jsx("div",{children:s.sorting_index})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Status:"}),e.jsx("div",{children:s.status})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Responsibilities:"}),e.jsx("div",{children:s.responsibilities})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Education:"}),e.jsx("div",{children:s.education})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Experience:"}),e.jsx("div",{children:s.experience})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Skills:"}),e.jsx("div",{children:s.skills})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Minimum Age:"}),e.jsx("div",{children:s.min_age})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Maximum Age:"}),e.jsx("div",{children:s.max_age})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Minimum Salary:"}),e.jsx("div",{children:s.min_salary})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Maximum Salary:"}),e.jsx("div",{children:s.max_salary})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Show Salary:"}),e.jsx("div",{children:s.show_salary===1?"Yes":"No"})]})]})})};function Te({data:s}){const[n,a]=J.useState(!1),[g,t]=J.useState(!1),[b,m]=J.useState(!1),[_,{isLoading:V}]=Ae(),F=async k=>{try{await _(k),H.success("Job deleted successfully"),a(!1)}catch(A){console.log(A)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(U,{children:e.jsxs(Z,{children:[e.jsx($,{asChild:!0,children:e.jsx(E,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(be,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(U,{children:e.jsxs(Z,{children:[e.jsx($,{asChild:!0,children:e.jsx(E,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{m(!0)},children:e.jsx(Oe,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(U,{children:e.jsxs(Z,{children:[e.jsx($,{asChild:!0,children:e.jsx(E,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(ye,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(fe,{title:"Are you sure?",description:"This action cannot be undone.",name:s.title,isOpen:n,onClose:()=>a(!1),onConfirm:()=>F(s.id),loading:V}),g&&e.jsx(Y,{title:"Update Job",isOpen:g,toggleModal:()=>t(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ce,{data:s,modalClose:()=>t(!1)})}),b&&e.jsx(Y,{title:"Job Details",isOpen:b,toggleModal:()=>m(!1),className:"w-[90%] max-w-6xl",children:e.jsx(Re,{data:s})})]})}const ze=[{id:"select",header:({table:s})=>e.jsx(le,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(le,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"title",header:"Job title"},{accessorKey:"",accessorFn:({department:s})=>s==null?void 0:s.name,header:"Department"},{accessorKey:"",accessorFn:({organization:s})=>s==null?void 0:s.name,header:"Organization"},{accessorKey:"",accessorFn:({designation:s})=>s==null?void 0:s.name,header:"Designation"},{accessorKey:"location",accessorFn:({location:s})=>s==null?void 0:s.name,header:"Location"},{accessorKey:"vacancy_requisition",accessorFn:({vacancy_requisition:s})=>s==null?void 0:s.name,header:"Vacancy requisition"},{accessorKey:"vacancy_number",header:"Vacancy number"},{accessorKey:"employment_status",accessorFn:({employment_status:s})=>s==null?void 0:s.name,header:"Employment status"},{accessorKey:"work_place",accessorFn:({work_place:s})=>s==null?void 0:s.name,header:"Work place"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Te,{data:s.original})}],Be=()=>{const[s,n]=J.useState(!1),[a,g]=Se.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:b}=Ie(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),m=(t==null?void 0:t.data)||[],_=t==null?void 0:t.meta;return b?e.jsx(S,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(_e,{title:"Job Post",description:"Manage job post for you business"}),e.jsxs(E,{onClick:()=>n(!0),size:"sm",children:[e.jsx(Ne,{className:"mr-2 h-4 w-4"})," Add Job Post"]})]}),e.jsx(Ce,{}),m&&e.jsx("div",{children:e.jsx(Pe,{columns:ze,data:m,paginationInfo:_,pagination:a,setPagination:g})})]})}),s&&e.jsx(Y,{title:"Add Job Post",isOpen:s,toggleModal:()=>n(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ce,{modalClose:()=>n(!1)})})]})};export{Be as default};
>>>>>>>> main:dist/assets/index-07c289a7.js
