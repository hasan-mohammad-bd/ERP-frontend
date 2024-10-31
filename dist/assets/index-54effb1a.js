import{c as W,bc as v,$ as K,a0 as Q,bf as Y,a as e,a2 as b,a3 as G,a4 as S,a5 as C,a6 as A,aP as k,a7 as J,aQ as L,aR as I,aS as M,aU as E,a8 as w,I as H,B as N,a9 as O,r as f,ac as q,ad as U,ae as V,af as D,ag as R,ah as ee,ai as se,aj as P,ak as $,bg as ae,R as le,am as te,t as ne,an as ce,ao as de}from"./index-911882cf.js";import{u as oe}from"./index-14b1948a.js";import{u as ie}from"./index-7fcd66e1.js";import{Z as re}from"./zoom-in-162180e1.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=W("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),he=v.injectEndpoints({endpoints:a=>({getJobApplies:a.query({query:s=>`job-applies?${s}`,providesTags:["job-applies"]}),getJobApplyStatusData:a.query({query:()=>"job-applies/additional/list",providesTags:["job-applies-status"]}),createJobApply:a.mutation({query:s=>({url:"job-applies",method:"POST",body:s}),invalidatesTags:["job-applies"]}),removeJobApply:a.mutation({query:s=>({url:`job-applies/${s}`,method:"DELETE"}),invalidatesTags:["job-applies"]}),updateJobApply:a.mutation({query:({jobApplyId:s,updatedJobApply:c})=>({url:`job-applies/${s}`,method:"PUT",body:c}),invalidatesTags:["job-applies"]})}),overrideExisting:!1}),{useGetJobAppliesQuery:pe,useGetJobApplyStatusDataQuery:X,useCreateJobApplyMutation:je,useRemoveJobApplyMutation:ue,useUpdateJobApplyMutation:me}=he;function Z({modalClose:a,data:s}){var z,B;const[c,{isLoading:m}]=je(),[n,{isLoading:j}]=me(),{data:d,isLoading:r}=oe("page=1&per_page=1000"),{data:x,isLoading:u}=ie("page=1&per_page=1000"),{data:i,isLoading:_}=X(),F=(d==null?void 0:d.data)||[],l=(x==null?void 0:x.data)||[],o=(i==null?void 0:i.job_apply_status)||[],t=K({resolver:Q(Y),defaultValues:{job_post_id:((z=s==null?void 0:s.job_post)==null?void 0:z.id)||1,job_candidate_id:((B=s==null?void 0:s.job_candidate)==null?void 0:B.id)||1,status:(s==null?void 0:s.status)||"Pending",expected_salary:(s==null?void 0:s.expected_salary)||0}});async function T(h){try{s?(await n({jobApplyId:s.id,updatedJobApply:h}),O.success("Job apply updated successfully"),a()):(await c(h),O.success("Job apply created successfully"),a())}catch(p){console.log(p)}}return e.jsx(e.Fragment,{children:m||j?e.jsx("div",{className:"",children:e.jsx(b,{})}):e.jsx(G,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(T),className:" space-y-3 ",children:[e.jsx(S,{control:t.control,name:"job_post_id",render:({field:h})=>{var p,g;return e.jsxs(C,{children:[e.jsx(A,{children:"Job Post"}),e.jsxs(k,{onValueChange:h.onChange,defaultValue:(p=s==null?void 0:s.job_post)!=null&&p.id?String((g=s==null?void 0:s.job_post)==null?void 0:g.id):void 0,children:[e.jsx(J,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select Department"})})}),e.jsx(M,{children:r?e.jsx(b,{}):F==null?void 0:F.map(y=>e.jsx(E,{value:String(y.id),children:y.title},y.id))})]}),e.jsx(w,{})]})}}),e.jsx(S,{control:t.control,name:"job_candidate_id",render:({field:h})=>{var p,g;return e.jsxs(C,{children:[e.jsx(A,{children:"Job Candidate"}),e.jsxs(k,{onValueChange:h.onChange,defaultValue:(p=s==null?void 0:s.job_candidate)!=null&&p.id?String((g=s==null?void 0:s.job_candidate)==null?void 0:g.id):void 0,children:[e.jsx(J,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select Job Candidate"})})}),e.jsx(M,{children:u?e.jsx(b,{}):l==null?void 0:l.map(y=>e.jsx(E,{value:String(y.id),children:y.email},y.id))})]}),e.jsx(w,{})]})}}),e.jsx(S,{control:t.control,name:"status",render:({field:h})=>e.jsxs(C,{children:[e.jsx(A,{children:"Status"}),e.jsxs(k,{onValueChange:h.onChange,defaultValue:s!=null&&s.status?String(s==null?void 0:s.status):void 0,children:[e.jsx(J,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select Designation"})})}),e.jsx(M,{children:_?e.jsx(b,{}):o==null?void 0:o.map((p,g)=>e.jsx(E,{value:String(p),children:p},g))})]}),e.jsx(w,{})]})}),e.jsx(S,{control:t.control,name:"expected_salary",render:({field:h})=>e.jsxs(C,{children:[e.jsx(A,{children:"Expected Salary"}),e.jsx(J,{children:e.jsx(H,{type:"number",placeholder:"Enter Expected Salary",...h})}),e.jsx(w,{})]})}),e.jsx("div",{children:e.jsx(N,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}const ge=({data:a})=>e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("p",{className:"font-semibold",children:"Status:"}),e.jsx("div",{children:a.status})]})});function ye({data:a}){const[s,c]=f.useState(!1),[m,n]=f.useState(!1),[j,d]=f.useState(!1),[r,{isLoading:x}]=ue(),u=async i=>{try{await r(i),O.success("Job deleted successfully"),c(!1)}catch(_){console.log(_)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(q,{children:e.jsxs(U,{children:[e.jsx(V,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(D,{className:"h-4 w-4 text-foreground"})})}),e.jsx(R,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(q,{children:e.jsxs(U,{children:[e.jsx(V,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(re,{className:"h-4 w-4 text-foreground"})})}),e.jsx(R,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(q,{children:e.jsxs(U,{children:[e.jsx(V,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(ee,{className:"h-4 w-4 text-foreground"})})}),e.jsx(R,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(se,{title:"Are you sure?",description:"This action cannot be undone.",name:a.status,isOpen:s,onClose:()=>c(!1),onConfirm:()=>u(a.id),loading:x}),m&&e.jsx(P,{title:"Update Job",isOpen:m,toggleModal:()=>n(!1),className:"w-[90%] max-w-6xl",children:e.jsx(Z,{data:a,modalClose:()=>n(!1)})}),j&&e.jsx(P,{title:"Job Details",isOpen:j,toggleModal:()=>d(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ge,{data:a})})]})}const be=[{id:"select",header:({table:a})=>e.jsx($,{checked:a.getIsAllPageRowsSelected()||a.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>a.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:a})=>e.jsx($,{checked:a.getIsSelected(),onCheckedChange:s=>a.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"status",header:"Status"},{accessorKey:"expected_salary",header:"Expected salary"},{accessorKey:"",accessorFn:({job_post:a})=>a==null?void 0:a.title,header:"Job post title"},{accessorKey:"",accessorFn:({job_candidate:a})=>a==null?void 0:a.first_name,header:"Job candidate name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:a})=>e.jsx(ye,{data:a.original})}],fe=v.injectEndpoints({endpoints:a=>({changeStatus:a.mutation({query:s=>({url:"job-applies/change-status",method:"POST",body:s}),invalidatesTags:["change-status","job-applies"]})}),overrideExisting:!1}),{useChangeStatusMutation:Se}=fe;function Ce({modalClose:a,data:s}){const[c,{isLoading:m}]=Se(),[n,j]=f.useState([]);f.useEffect(()=>{j(s||[])},[s]);const d=l=>{j(o=>o.filter(t=>(t==null?void 0:t.id)!==l))},{data:r,isLoading:x}=X(),u=(r==null?void 0:r.job_apply_status)||[],i=K({resolver:Q(ae),defaultValues:{status:"Call For Interview",ids:n.map(l=>l.id)}}),_=i.watch("status");async function F(l){var t;const o={...l,ids:n.map(T=>T.id),interview_date:(t=l==null?void 0:l.interview_date)==null?void 0:t.replace("T"," ").concat(":00")};try{await c(o),O.success("Job apply created successfully"),a()}catch(T){console.log(T)}}return e.jsx(e.Fragment,{children:m?e.jsx("div",{className:"",children:e.jsx(b,{})}):e.jsxs(G,{...i,children:[e.jsx("div",{className:"flex gap-3 flex-wrap max-h-40 overflow-y-auto",children:n.map((l,o)=>{var t;return e.jsxs("div",{className:"flex items-center gap-1  bg-black text-white p-2 rounded-lg whitespace-nowrap",children:[e.jsxs("p",{className:"text-xs",children:[(t=l.job_candidate)==null?void 0:t.email," "]}),e.jsx("span",{className:"cursor-pointer ",onClick:()=>d(l.id),children:e.jsx(xe,{})})]},o)})}),e.jsxs("form",{onSubmit:i.handleSubmit(F),className:" space-y-3 ",children:[e.jsx(S,{control:i.control,name:"status",render:({field:l})=>e.jsxs(C,{children:[e.jsx(A,{children:"Status"}),e.jsxs(k,{onValueChange:l.onChange,defaultValue:"Call For Interview",children:[e.jsx(J,{children:e.jsx(L,{children:e.jsx(I,{placeholder:"Select status"})})}),e.jsx(M,{children:x?e.jsx(b,{}):u==null?void 0:u.map((o,t)=>e.jsx(E,{value:String(o),children:o},t))})]}),e.jsx(w,{})]})}),_==="Call For Interview"&&e.jsx(S,{control:i.control,name:"interview_date",render:({field:l})=>e.jsxs(C,{children:[e.jsx(A,{children:"Interview Date"}),e.jsx(J,{children:e.jsx(H,{type:"datetime-local",placeholder:"Enter interview date",...l,value:l.value??""})}),e.jsx(w,{})]})}),e.jsx("div",{children:e.jsx(N,{variant:"default",type:"submit",className:"w-full mt-4",children:"Change Status"})})]})]})})}const Ae=[{label:"Update Status",value:"update-status"},{label:"Delete Selected",value:"delete-selected"}],Fe=()=>{const[a,s]=f.useState(!1),[c,m]=le.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:j}=pe(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),[d,r]=f.useState({action:"",payload:[]}),x=(n==null?void 0:n.data)||[],u=n==null?void 0:n.meta;return j?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(te,{title:"Job Apply",description:"Manage job apply for you business"}),e.jsxs(N,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ne,{className:"mr-2 h-4 w-4"})," Add Job Apply"]})]}),e.jsx(ce,{}),x&&e.jsx("div",{children:e.jsx(de,{columns:be,data:x,bulkActions:Ae,onBulkSelectChange:r,paginationInfo:u,pagination:c,setPagination:m})})]})}),e.jsx(P,{title:"Add Job Apply",isOpen:a,toggleModal:()=>s(!1),className:"",children:e.jsx(Z,{modalClose:()=>s(!1)})}),d.action==="update-status"&&e.jsx(P,{title:"Job Status Bulk Update",isOpen:d.action==="update-status",toggleModal:()=>r({action:"",payload:[]}),className:"",children:e.jsx(Ce,{modalClose:()=>s(!1),data:d.payload})})]})};export{Fe as default};
