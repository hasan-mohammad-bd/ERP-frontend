<<<<<<<< HEAD:dist/assets/index-8c403b55.js
import{c as W,aC as $,a6 as K,a7 as G,a as e,$ as b,a8 as Q,a9 as S,aa as C,ab as A,au as T,ac as J,av as k,aw as I,ax as M,ay as E,ad as w,I as H,B as N,aL as Y,af as O,r as f,ag as P,ah as V,ai as U,aj as D,ak as R,al as ee,am as se,an as q,ao as B,aM as ae,R as le,ap as te,t as ne,aq as ce,ar as de}from"./index-15b4a249.js";import{u as oe}from"./index-6bfdce0e.js";import{u as ie}from"./index-ec36bb73.js";import{Z as re}from"./zoom-in-a3b8ab45.js";/**
========
import{c as W,aD as $,a7 as K,a8 as G,a as e,$ as b,a9 as Q,aa as S,ab as C,ac as A,av as L,ad as J,aw as k,ax as I,ay as M,az as E,ae as w,I as H,B as N,aM as Y,ag as O,r as f,ah as P,ai as V,aj as U,ak as D,al as z,am as ee,an as se,ao as q,ap as B,aN as ae,R as le,aq as te,t as ne,ar as ce,as as de}from"./index-f6cd1370.js";import{u as oe}from"./index-cfd9a8e4.js";import{u as ie}from"./index-5da79aab.js";import{Z as re}from"./zoom-in-86549da3.js";/**
>>>>>>>> main:dist/assets/index-697f6e50.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=W("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),he=$.injectEndpoints({endpoints:a=>({getJobApplies:a.query({query:s=>`job-applies?${s}`,providesTags:["job-applies"]}),getJobApplyStatusData:a.query({query:()=>"job-applies/additional/list",providesTags:["job-applies-status"]}),createJobApply:a.mutation({query:s=>({url:"job-applies",method:"POST",body:s}),invalidatesTags:["job-applies"]}),removeJobApply:a.mutation({query:s=>({url:`job-applies/${s}`,method:"DELETE"}),invalidatesTags:["job-applies"]}),updateJobApply:a.mutation({query:({jobApplyId:s,updatedJobApply:c})=>({url:`job-applies/${s}`,method:"PUT",body:c}),invalidatesTags:["job-applies"]})}),overrideExisting:!1}),{useGetJobAppliesQuery:pe,useGetJobApplyStatusDataQuery:X,useCreateJobApplyMutation:je,useRemoveJobApplyMutation:ue,useUpdateJobApplyMutation:me}=he;function Z({modalClose:a,data:s}){var R,v;const[c,{isLoading:m}]=je(),[n,{isLoading:u}]=me(),{data:d,isLoading:r}=oe("page=1&per_page=1000"),{data:x,isLoading:j}=ie("page=1&per_page=1000"),{data:i,isLoading:_}=X(),F=(d==null?void 0:d.data)||[],l=(x==null?void 0:x.data)||[],o=(i==null?void 0:i.job_apply_status)||[],t=K({resolver:G(Y),defaultValues:{job_post_id:((R=s==null?void 0:s.job_post)==null?void 0:R.id)||1,job_candidate_id:((v=s==null?void 0:s.job_candidate)==null?void 0:v.id)||1,status:(s==null?void 0:s.status)||"Pending",expected_salary:(s==null?void 0:s.expected_salary)||0}});async function T(h){try{s?(await n({jobApplyId:s.id,updatedJobApply:h}),O.success("Job apply updated successfully"),a()):(await c(h),O.success("Job apply created successfully"),a())}catch(p){console.log(p)}}return e.jsx(e.Fragment,{children:m||u?e.jsx("div",{className:"",children:e.jsx(b,{})}):e.jsx(Q,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(T),className:" space-y-3 ",children:[e.jsx(S,{control:t.control,name:"job_post_id",render:({field:h})=>{var p,g;return e.jsxs(C,{children:[e.jsx(A,{children:"Job Post"}),e.jsxs(L,{onValueChange:h.onChange,defaultValue:(p=s==null?void 0:s.job_post)!=null&&p.id?String((g=s==null?void 0:s.job_post)==null?void 0:g.id):void 0,children:[e.jsx(J,{children:e.jsx(k,{children:e.jsx(I,{placeholder:"Select Department"})})}),e.jsx(M,{children:r?e.jsx(b,{}):F==null?void 0:F.map(y=>e.jsx(E,{value:String(y.id),children:y.title},y.id))})]}),e.jsx(w,{})]})}}),e.jsx(S,{control:t.control,name:"job_candidate_id",render:({field:h})=>{var p,g;return e.jsxs(C,{children:[e.jsx(A,{children:"Job Candidate"}),e.jsxs(L,{onValueChange:h.onChange,defaultValue:(p=s==null?void 0:s.job_candidate)!=null&&p.id?String((g=s==null?void 0:s.job_candidate)==null?void 0:g.id):void 0,children:[e.jsx(J,{children:e.jsx(k,{children:e.jsx(I,{placeholder:"Select Job Candidate"})})}),e.jsx(M,{children:j?e.jsx(b,{}):l==null?void 0:l.map(y=>e.jsx(E,{value:String(y.id),children:y.email},y.id))})]}),e.jsx(w,{})]})}}),e.jsx(S,{control:t.control,name:"status",render:({field:h})=>e.jsxs(C,{children:[e.jsx(A,{children:"Status"}),e.jsxs(L,{onValueChange:h.onChange,defaultValue:s!=null&&s.status?String(s==null?void 0:s.status):void 0,children:[e.jsx(J,{children:e.jsx(k,{children:e.jsx(I,{placeholder:"Select Designation"})})}),e.jsx(M,{children:_?e.jsx(b,{}):o==null?void 0:o.map((p,g)=>e.jsx(E,{value:String(p),children:p},g))})]}),e.jsx(w,{})]})}),e.jsx(S,{control:t.control,name:"expected_salary",render:({field:h})=>e.jsxs(C,{children:[e.jsx(A,{children:"Expected Salary"}),e.jsx(J,{children:e.jsx(H,{type:"number",placeholder:"Enter Expected Salary",...h})}),e.jsx(w,{})]})}),e.jsx("div",{children:e.jsx(N,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}const ge=({data:a})=>e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("p",{className:"font-semibold",children:"Status:"}),e.jsx("div",{children:a.status})]})});function ye({data:a}){const[s,c]=f.useState(!1),[m,n]=f.useState(!1),[u,d]=f.useState(!1),[r,{isLoading:x}]=ue(),j=async i=>{try{await r(i),O.success("Job deleted successfully"),c(!1)}catch(_){console.log(_)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(P,{children:e.jsxs(V,{children:[e.jsx(U,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(D,{className:"h-4 w-4 text-foreground"})})}),e.jsx(z,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(P,{children:e.jsxs(V,{children:[e.jsx(U,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(re,{className:"h-4 w-4 text-foreground"})})}),e.jsx(z,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(P,{children:e.jsxs(V,{children:[e.jsx(U,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(ee,{className:"h-4 w-4 text-foreground"})})}),e.jsx(z,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(se,{title:"Are you sure?",description:"This action cannot be undone.",name:a.status,isOpen:s,onClose:()=>c(!1),onConfirm:()=>j(a.id),loading:x}),e.jsx(q,{title:"Update Job",isOpen:m,toggleModal:()=>n(!1),className:"w-[90%] max-w-6xl",children:e.jsx(Z,{data:a,modalClose:()=>n(!1)})}),e.jsx(q,{title:"Job Details",isOpen:u,toggleModal:()=>d(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ge,{data:a})})]})}const be=[{id:"select",header:({table:a})=>e.jsx(B,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx(B,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"status",header:"Status"},{accessorKey:"expected_salary",header:"Expected salary"},{accessorKey:"",accessorFn:({job_post:a})=>a==null?void 0:a.title,header:"Job post title"},{accessorKey:"",accessorFn:({job_candidate:a})=>a==null?void 0:a.first_name,header:"Job candidate name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(ye,{data:a.original})}],fe=$.injectEndpoints({endpoints:a=>({changeStatus:a.mutation({query:s=>({url:"job-applies/change-status",method:"POST",body:s}),invalidatesTags:["change-status","job-applies"]})}),overrideExisting:!1}),{useChangeStatusMutation:Se}=fe;function Ce({modalClose:a,data:s}){const[c,{isLoading:m}]=Se(),[n,u]=f.useState([]);f.useEffect(()=>{u(s||[])},[s]);const d=l=>{u(o=>o.filter(t=>(t==null?void 0:t.id)!==l))},{data:r,isLoading:x}=X(),j=(r==null?void 0:r.job_apply_status)||[],i=K({resolver:G(ae),defaultValues:{status:"Call For Interview",ids:n.map(l=>l.id)}}),_=i.watch("status");async function F(l){var t;const o={...l,ids:n.map(T=>T.id),interview_date:(t=l==null?void 0:l.interview_date)==null?void 0:t.replace("T"," ").concat(":00")};try{await c(o),O.success("Job apply created successfully"),a()}catch(T){console.log(T)}}return e.jsx(e.Fragment,{children:m?e.jsx("div",{className:"",children:e.jsx(b,{})}):e.jsxs(Q,{...i,children:[e.jsx("div",{className:"flex gap-3 flex-wrap max-h-40 overflow-y-auto",children:n.map((l,o)=>{var t;return e.jsxs("div",{className:"flex items-center gap-1  bg-black text-white p-2 rounded-lg whitespace-nowrap",children:[e.jsxs("p",{className:"text-xs",children:[(t=l.job_candidate)==null?void 0:t.email," "]}),e.jsx("span",{className:"cursor-pointer ",onClick:()=>d(l.id),children:e.jsx(xe,{})})]},o)})}),e.jsxs("form",{onSubmit:i.handleSubmit(F),className:" space-y-3 ",children:[e.jsx(S,{control:i.control,name:"status",render:({field:l})=>e.jsxs(C,{children:[e.jsx(A,{children:"Status"}),e.jsxs(L,{onValueChange:l.onChange,defaultValue:"Call For Interview",children:[e.jsx(J,{children:e.jsx(k,{children:e.jsx(I,{placeholder:"Select status"})})}),e.jsx(M,{children:x?e.jsx(b,{}):j==null?void 0:j.map((o,t)=>e.jsx(E,{value:String(o),children:o},t))})]}),e.jsx(w,{})]})}),_==="Call For Interview"&&e.jsx(S,{control:i.control,name:"interview_date",render:({field:l})=>e.jsxs(C,{children:[e.jsx(A,{children:"Interview Date"}),e.jsx(J,{children:e.jsx(H,{type:"datetime-local",placeholder:"Enter interview date",...l,value:l.value??""})}),e.jsx(w,{})]})}),e.jsx("div",{children:e.jsx(N,{variant:"default",type:"submit",className:"w-full mt-4",children:"Change Status"})})]})]})})}const Ae=[{label:"Update Status",value:"update-status"},{label:"Delete Selected",value:"delete-selected"}],Fe=()=>{const[a,s]=f.useState(!1),[c,m]=le.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:u}=pe(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),[d,r]=f.useState({action:"",payload:[]}),x=(n==null?void 0:n.data)||[],j=n==null?void 0:n.meta;return u?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(te,{title:"Job Apply",description:"Manage job apply for you business"}),e.jsxs(N,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ne,{className:"mr-2 h-4 w-4"})," Add Job Apply"]})]}),e.jsx(ce,{}),x&&e.jsx("div",{children:e.jsx(de,{columns:be,data:x,bulkActions:Ae,selectedBulkAction:d,setSelectedBulkAction:r,paginationInfo:j,pagination:c,setPagination:m})})]})}),e.jsx(q,{title:"Add Job Apply",isOpen:a,toggleModal:()=>s(!1),className:"",children:e.jsx(Z,{modalClose:()=>s(!1)})}),d.action==="update-status"&&e.jsx(q,{title:"Job Status Bulk Update",isOpen:d.action==="update-status",toggleModal:()=>r({action:"",payload:[]}),className:"",children:e.jsx(Ce,{modalClose:()=>s(!1),data:d.payload})})]})};export{Fe as default};
