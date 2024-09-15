import{c as Y,V as G,W as Q,a as e,X as y,Y as Z,Z as b,_ as C,$ as w,ai as I,a0 as A,aj as L,ak as M,al as O,am as T,a1 as J,I as X,B as N,aY as W,a3 as V,r as S,a4 as P,a5 as R,a6 as U,a7 as v,a8 as z,a9 as D,aa as ee,ab as E,ac as K,aq as se,aZ as le,R as ae,ad as te,t as ne,ae as ce,af as de}from"./index-7fe2e31f.js";import{b as ie,c as oe,d as $,u as re,a as xe}from"./index-08941e32.js";import{u as he}from"./index-5136e943.js";import{u as je}from"./index-4e4971ab.js";import{Z as me}from"./zoom-in-43524170.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=Y("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function H({modalClose:l,data:s}){var B,q;const[i,{isLoading:g}]=ie(),[n,{isLoading:u}]=oe(),{data:c,isLoading:r}=he("page=1&per_page=1000"),{data:x,isLoading:m}=je("page=1&per_page=1000"),{data:o,isLoading:_}=$(),F=(c==null?void 0:c.data)||[],a=(x==null?void 0:x.data)||[],d=(o==null?void 0:o.job_apply_status)||[],t=G({resolver:Q(W),defaultValues:{job_post_id:((B=s==null?void 0:s.job_post)==null?void 0:B.id)||1,job_candidate_id:((q=s==null?void 0:s.job_candidate)==null?void 0:q.id)||1,status:(s==null?void 0:s.status)||"Pending",expected_salary:(s==null?void 0:s.expected_salary)||0}});async function k(h){try{s?(await n({jobApplyId:s.id,updatedJobApply:h}),V.success("Job apply updated successfully"),l()):(await i(h),V.success("Job apply created successfully"),l())}catch(j){console.log(j)}}return e.jsx(e.Fragment,{children:g||u?e.jsx("div",{className:"",children:e.jsx(y,{})}):e.jsx(Z,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(k),className:" space-y-3 ",children:[e.jsx(b,{control:t.control,name:"job_post_id",render:({field:h})=>{var j,p;return e.jsxs(C,{children:[e.jsx(w,{children:"Job Post"}),e.jsxs(I,{onValueChange:h.onChange,defaultValue:(j=s==null?void 0:s.job_post)!=null&&j.id?String((p=s==null?void 0:s.job_post)==null?void 0:p.id):void 0,children:[e.jsx(A,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select Department"})})}),e.jsx(O,{children:r?e.jsx(y,{}):F==null?void 0:F.map(f=>e.jsx(T,{value:String(f.id),children:f.title},f.id))})]}),e.jsx(J,{})]})}}),e.jsx(b,{control:t.control,name:"job_candidate_id",render:({field:h})=>{var j,p;return e.jsxs(C,{children:[e.jsx(w,{children:"Job Candidate"}),e.jsxs(I,{onValueChange:h.onChange,defaultValue:(j=s==null?void 0:s.job_candidate)!=null&&j.id?String((p=s==null?void 0:s.job_candidate)==null?void 0:p.id):void 0,children:[e.jsx(A,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select Job Candidate"})})}),e.jsx(O,{children:m?e.jsx(y,{}):a==null?void 0:a.map(f=>e.jsx(T,{value:String(f.id),children:f.email},f.id))})]}),e.jsx(J,{})]})}}),e.jsx(b,{control:t.control,name:"status",render:({field:h})=>e.jsxs(C,{children:[e.jsx(w,{children:"Status"}),e.jsxs(I,{onValueChange:h.onChange,defaultValue:s!=null&&s.status?String(s==null?void 0:s.status):void 0,children:[e.jsx(A,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select Designation"})})}),e.jsx(O,{children:_?e.jsx(y,{}):d==null?void 0:d.map((j,p)=>e.jsx(T,{value:String(j),children:j},p))})]}),e.jsx(J,{})]})}),e.jsx(b,{control:t.control,name:"expected_salary",render:({field:h})=>e.jsxs(C,{children:[e.jsx(w,{children:"Expected Salary"}),e.jsx(A,{children:e.jsx(X,{type:"number",placeholder:"Enter Expected Salary",...h})}),e.jsx(J,{})]})}),e.jsx("div",{children:e.jsx(N,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}const ge=({data:l})=>e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("p",{className:"font-semibold",children:"Status:"}),e.jsx("div",{children:l.status})]})});function pe({data:l}){const[s,i]=S.useState(!1),[g,n]=S.useState(!1),[u,c]=S.useState(!1),[r,{isLoading:x}]=re(),m=async o=>{try{await r(o),V.success("Job deleted successfully"),i(!1)}catch(_){console.log(_)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(P,{children:e.jsxs(R,{children:[e.jsx(U,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>n(!0),children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})}),e.jsx(z,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(P,{children:e.jsxs(R,{children:[e.jsx(U,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(me,{className:"h-4 w-4 text-foreground"})})}),e.jsx(z,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(P,{children:e.jsxs(R,{children:[e.jsx(U,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(!0)},children:e.jsx(D,{className:"h-4 w-4 text-foreground"})})}),e.jsx(z,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(ee,{title:"Are you sure?",description:"This action cannot be undone.",name:l.status,isOpen:s,onClose:()=>i(!1),onConfirm:()=>m(l.id),loading:x}),e.jsx(E,{title:"Update Job",isOpen:g,toggleModal:()=>n(!1),className:"w-[90%] max-w-6xl",children:e.jsx(H,{data:l,modalClose:()=>n(!1)})}),e.jsx(E,{title:"Job Details",isOpen:u,toggleModal:()=>c(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ge,{data:l})})]})}const fe=[{id:"select",header:({table:l})=>e.jsx(K,{checked:l.getIsAllPageRowsSelected()||l.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>l.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:l})=>e.jsx(K,{checked:l.getIsSelected(),onCheckedChange:s=>l.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"status",header:"Status"},{accessorKey:"expected_salary",header:"Expected salary"},{accessorKey:"",accessorFn:({job_post:l})=>l==null?void 0:l.title,header:"Job post title"},{accessorKey:"",accessorFn:({job_candidate:l})=>l==null?void 0:l.first_name,header:"Job candidate name"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:l})=>e.jsx(pe,{data:l.original})}],ye=se.injectEndpoints({endpoints:l=>({changeStatus:l.mutation({query:s=>({url:"job-applies/change-status",method:"POST",body:s}),invalidatesTags:["change-status","job-applies"]})}),overrideExisting:!1}),{useChangeStatusMutation:Se}=ye;function be({modalClose:l,data:s}){const[i,{isLoading:g}]=Se(),[n,u]=S.useState([]);S.useEffect(()=>{u(s||[])},[s]);const c=a=>{u(d=>d.filter(t=>(t==null?void 0:t.id)!==a))},{data:r,isLoading:x}=$(),m=(r==null?void 0:r.job_apply_status)||[],o=G({resolver:Q(le),defaultValues:{status:"Call For Interview",ids:n.map(a=>a.id)}}),_=o.watch("status");async function F(a){var t;const d={...a,ids:n.map(k=>k.id),interview_date:(t=a==null?void 0:a.interview_date)==null?void 0:t.replace("T"," ").concat(":00")};try{await i(d),V.success("Job apply created successfully"),l()}catch(k){console.log(k)}}return e.jsx(e.Fragment,{children:g?e.jsx("div",{className:"",children:e.jsx(y,{})}):e.jsxs(Z,{...o,children:[e.jsx("div",{className:"flex gap-3 flex-wrap max-h-40 overflow-y-auto",children:n.map((a,d)=>{var t;return e.jsxs("div",{className:"flex items-center gap-1  bg-black text-white p-2 rounded-lg whitespace-nowrap",children:[e.jsxs("p",{className:"text-xs",children:[(t=a.job_candidate)==null?void 0:t.email," "]}),e.jsx("span",{className:"cursor-pointer ",onClick:()=>c(a.id),children:e.jsx(ue,{})})]},d)})}),e.jsxs("form",{onSubmit:o.handleSubmit(F),className:" space-y-3 ",children:[e.jsx(b,{control:o.control,name:"status",render:({field:a})=>e.jsxs(C,{children:[e.jsx(w,{children:"Status"}),e.jsxs(I,{onValueChange:a.onChange,defaultValue:"Call For Interview",children:[e.jsx(A,{children:e.jsx(L,{children:e.jsx(M,{placeholder:"Select status"})})}),e.jsx(O,{children:x?e.jsx(y,{}):m==null?void 0:m.map((d,t)=>e.jsx(T,{value:String(d),children:d},t))})]}),e.jsx(J,{})]})}),_==="Call For Interview"&&e.jsx(b,{control:o.control,name:"interview_date",render:({field:a})=>e.jsxs(C,{children:[e.jsx(w,{children:"Interview Date"}),e.jsx(A,{children:e.jsx(X,{type:"datetime-local",placeholder:"Enter interview date",...a,value:a.value??""})}),e.jsx(J,{})]})}),e.jsx("div",{children:e.jsx(N,{variant:"default",type:"submit",className:"w-full mt-4",children:"Change Status"})})]})]})})}const Ce=[{label:"Update Status",value:"update-status"},{label:"Delete Selected",value:"delete-selected"}],Fe=()=>{const[l,s]=S.useState(!1),[i,g]=ae.useState({pageIndex:0,pageSize:10}),{data:n,isLoading:u}=xe(`per_page=${i.pageSize}&page=${i.pageIndex+1}`),[c,r]=S.useState({action:"",payload:[]}),x=(n==null?void 0:n.data)||[],m=n==null?void 0:n.meta;return u?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(te,{title:"Job Apply",description:"Manage job apply for you business"}),e.jsxs(N,{onClick:()=>s(!0),size:"sm",children:[e.jsx(ne,{className:"mr-2 h-4 w-4"})," Add Job Apply"]})]}),e.jsx(ce,{}),x&&e.jsx("div",{children:e.jsx(de,{columns:fe,data:x,bulkActions:Ce,onBulkSelectChange:r,paginationInfo:m,pagination:i,setPagination:g})})]})}),e.jsx(E,{title:"Add Job Apply",isOpen:l,toggleModal:()=>s(!1),className:"",children:e.jsx(H,{modalClose:()=>s(!1)})}),c.action==="update-status"&&e.jsx(E,{title:"Job Status Bulk Update",isOpen:c.action==="update-status",toggleModal:()=>r({action:"",payload:[]}),className:"",children:e.jsx(be,{modalClose:()=>s(!1),data:c.payload})})]})};export{Fe as default};
