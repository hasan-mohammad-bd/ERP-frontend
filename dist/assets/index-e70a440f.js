import{ar as ge,aF as fe,V as D,W as ee,r as c,A as f,a as e,Y as O,Z as se,aC as B,_,$ as S,a0 as j,aj as te,a1 as v,ak as le,al as ae,am as ne,an as ce,a2 as N,y as K,z as G,B as p,aD as Q,D as J,E as W,I as T,c8 as Se,c9 as ye,a3 as R,a4 as ve,a5 as P,a6 as E,a7 as Y,a8 as pe,a9 as M,aa as Ne,ab as _e,ac as A,ad as Z,ca as X,R as Le,ae as we,t as Ce,af as Te,ag as Re}from"./index-ecc4f13a.js";import{u as qe,l as Fe,a as be}from"./index-6c5cb4b1.js";import{S as Pe}from"./switch-7dc16ec8.js";const Ee=ge.injectEndpoints({endpoints:t=>({getLeaveRequests:t.query({query:s=>`leaves?${s}`,providesTags:["leaves"]}),createLeaveRequest:t.mutation({query:s=>({url:"leaves",method:"POST",body:s}),invalidatesTags:["leaves"]}),changeLeaveStatus:t.mutation({query:s=>({url:"leaves/status-update",method:"POST",body:s}),invalidatesTags:["change-leave-status","leaves"]}),removeLeaveRequest:t.mutation({query:s=>({url:`leaves/${s}`,method:"DELETE"}),invalidatesTags:["leaves"]}),updateLeaveRequest:t.mutation({query:({leaveRequestId:s,updatedLeaveRequest:a})=>({url:`leaves/${s}`,method:"POST",body:a}),invalidatesTags:["leaves"]})}),overrideExisting:!1}),{useGetLeaveRequestsQuery:Me,useCreateLeaveRequestMutation:Ae,useChangeLeaveStatusMutation:Oe,useRemoveLeaveRequestMutation:ke,useUpdateLeaveRequestMutation:$e}=Ee;function ie({modalClose:t,data:s,refetch:a}){const[g,{isLoading:x}]=Ae(),[h,{isLoading:o}]=$e(),{data:d,isLoading:m}=fe("page=1&per_page=1000"),{data:r,isLoading:L}=qe("per_page=1000&page=1"),q=(r==null?void 0:r.data)||[],k=(d==null?void 0:d.data)||[];console.log(k);const n=D({resolver:ee(Fe),defaultValues:{employee_id:(s==null?void 0:s.employee_id.toString())||"",start_date_time:(s==null?void 0:s.start_date_time)||"",end_date_time:(s==null?void 0:s.end_date_time)||"",subject:(s==null?void 0:s.subject)||"",description:(s==null?void 0:s.description)||"",leave_type_id:(s==null?void 0:s.leave_type.id.toString())||"",status:(s==null?void 0:s.status)||"Pending",files:(s==null?void 0:s.files)||[]}}),[de,$]=c.useState(!1),[re,I]=c.useState(!1),[u,V]=c.useState(null),[y,U]=c.useState(null),[oe,me]=c.useState([]),[F,xe]=c.useState(!1),[w,z]=c.useState(""),[C,H]=c.useState(""),b=["Pending","Canceled","Approved","Rejected"];c.useEffect(()=>{s&&(z(f(new Date(s==null?void 0:s.start_date_time),"HH:mm")),H(f(new Date(s==null?void 0:s.end_date_time),"HH:mm")),V(new Date(s==null?void 0:s.start_date_time)),U(new Date(s==null?void 0:s.end_date_time)))},[s]),console.log(w);const he=l=>{if(!l)return;V(l);const i=w||"12:00";console.log(i,"validTimeStart"),n.setValue("start_date_time",`${f(l,"yyyy-MM-dd")} ${i}:00`),$(!1)},ue=l=>{if(!l)return;U(l);const i=C||"23:59";n.setValue("end_date_time",`${f(l,"yyyy-MM-dd")} ${i}:00`),I(!1)};c.useEffect(()=>{if(u){const l=w||"12:00";n.setValue("start_date_time",`${f(u,"yyyy-MM-dd")} ${l}:00`)}},[w,u,n]),c.useEffect(()=>{if(y){const l=C||"23:59";n.setValue("end_date_time",`${f(y,"yyyy-MM-dd")} ${l}:00`)}},[C,y,n]);async function je(l){console.log(l);try{const i=ye.serialize({...l,_method:s?"PUT":"POST",files:oe},{indices:!0});s?(await h({leaveRequestId:s.id,updatedLeaveRequest:i}).unwrap(),R.success("Leave Request updated successfully"),t()):(await g(i).unwrap(),R.success("Leave Request created successfully"),t())}catch(i){console.log(i),ve(i)}}return console.log(),e.jsx(e.Fragment,{children:x||o?e.jsx("div",{children:e.jsx(O,{})}):e.jsx(se,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(je),className:"space-y-3",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(B,{loading:m,data:k,displayField:"first_name",valueField:"id",form:n,name:"employee_id",title:"Employee",className:"w-[460px]"})}),e.jsx("div",{className:"w-full",children:e.jsx(B,{loading:L,data:q,displayField:"name",valueField:"id",form:n,name:"leave_type_id",title:"Leave Type",className:"w-[290px]"})}),s&&e.jsx("div",{className:"w-full",children:e.jsx(_,{control:n.control,name:"status",render:({field:l})=>e.jsxs(S,{children:[e.jsx(j,{children:"Status"}),e.jsxs(te,{onValueChange:l.onChange,defaultValue:s.status?String(s.status):void 0,children:[e.jsx(v,{children:e.jsx(le,{children:e.jsx(ae,{placeholder:"Select Status"})})}),e.jsx(ne,{children:b==null?void 0:b.map(i=>e.jsx(ce,{value:String(i),children:i},i))})]}),e.jsx(N,{})]})})})]}),e.jsxs("div",{className:"flex justify-between items-center gap-x-4",children:[e.jsxs("div",{className:"w-full flex items-center gap-x-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(_,{control:n.control,name:"start_date_time",render:()=>e.jsxs(S,{children:[e.jsx(j,{children:"Start Date"}),e.jsxs(K,{open:de,onOpenChange:$,children:[e.jsx(G,{asChild:!0,className:"",children:e.jsxs(p,{variant:"outline",className:`w-full justify-start text-left font-normal ${!u&&"text-muted-foreground"}`,children:[u?f(u,"PP"):"Pick a date",e.jsx(Q,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(J,{className:"w-auto p-0",align:"start",children:e.jsx(W,{mode:"single",selected:u??void 0,onSelect:he,initialFocus:!0})})]})]})})}),F&&e.jsx("div",{className:"w-full",children:e.jsxs(S,{children:[e.jsx(j,{children:"Time Start"}),e.jsx(v,{children:e.jsx(T,{type:"time",value:w,onChange:l=>z(l.target.value)})}),e.jsx(N,{})]})})]}),e.jsxs("div",{className:"w-full flex items-center gap-x-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(_,{control:n.control,name:"end_date_time",render:()=>e.jsxs(S,{children:[e.jsx(j,{children:"End Date"}),e.jsxs(K,{open:re,onOpenChange:I,children:[e.jsx(G,{asChild:!0,className:"",children:e.jsxs(p,{variant:"outline",className:`w-full justify-start text-left font-normal ${!y&&"text-muted-foreground"}`,children:[y?f(y,"PP"):"Pick a date",e.jsx(Q,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(J,{className:"w-auto p-0",align:"start",children:e.jsx(W,{mode:"single",disabled:l=>!!(u&&l<u),selected:y??void 0,onSelect:ue,initialFocus:!0})})]}),e.jsx(N,{})]})})}),F&&e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"w-full",children:e.jsxs(S,{children:[e.jsx(j,{children:"Time End"}),e.jsx(v,{children:e.jsx(T,{type:"time",value:C,onChange:l=>H(l.target.value)})}),e.jsx(N,{})]})})})]})]}),e.jsx("div",{}),e.jsxs("div",{className:"!mt-5 flex justify-start items-center",children:[e.jsx(v,{children:e.jsx(Pe,{className:" ",checked:F,onCheckedChange:l=>xe(!!l)})}),e.jsx("span",{className:"ml-2 text-sm",children:"Consider Hours"})]}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(_,{control:n.control,name:"subject",render:({field:l})=>e.jsxs(S,{children:[e.jsx(j,{children:"Subject"}),e.jsx(v,{children:e.jsx(T,{className:"",placeholder:"Enter Subject",...l,value:l.value||""})}),e.jsx(N,{})]})})}),e.jsx("div",{className:"w-full",children:e.jsx(_,{control:n.control,name:"description",render:({field:l})=>e.jsxs(S,{children:[e.jsx(j,{children:"Description"}),e.jsx(v,{children:e.jsx(T,{className:"",placeholder:"Enter Description",...l,value:l.value||""})}),e.jsx(N,{})]})})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{children:"Upload Files"}),e.jsx(Se,{setUploadedFiles:me,uploadedFiles:s==null?void 0:s.files,onDeleteSuccess:()=>a()})]})]}),e.jsx("div",{className:"text-right",children:e.jsx(p,{variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function Ie({data:t}){var m,r;const[s,a]=c.useState(!1),[g,x]=c.useState(!1),[h,{isLoading:o}]=ke(),d=async L=>{try{await h(L),R.success("Leave deleted successfully"),a(!1)}catch(q){console.log(q)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(Y,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>x(!0),children:e.jsx(pe,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Update Leave Request"})})]})}),e.jsx(P,{children:e.jsx(E,{children:e.jsx(M,{children:e.jsx("p",{children:"Delete Leave Request"})})})}),e.jsx(P,{children:e.jsxs(E,{children:[e.jsx(Y,{asChild:!0,children:e.jsx(p,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(Ne,{className:"h-4 w-4 text-foreground"})})}),e.jsx(M,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(_e,{title:"Are you sure?",description:"This action cannot be undone.",name:((m=t==null?void 0:t.employee)==null?void 0:m.first_name)+" "+((r=t==null?void 0:t.employee)==null?void 0:r.last_name),isOpen:s,onClose:()=>a(!1),onConfirm:()=>d(t.id),loading:o}),g&&e.jsx(A,{title:"Update Leave Request",isOpen:g,toggleModal:()=>x(!1),className:"w-3/5 max-w-3xl",children:e.jsx(ie,{data:t,modalClose:()=>x(!1)})})]})}const Ve=[{id:"select",header:({table:t})=>e.jsx(Z,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>t.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:t})=>e.jsx(Z,{checked:t.getIsSelected(),onCheckedChange:s=>t.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee name",cell:({row:t})=>t.original.employee.first_name+" "+t.original.employee.last_name},{accessorKey:"leave_type",header:"Leave type",cell:({row:t})=>t.original.leave_type.name},{accessorKey:"start_date_time",header:"Start Date",cell:({row:t})=>X(t.original.start_date_time)},{accessorKey:"end_date_time",header:"End Date",cell:({row:t})=>X(t.original.end_date_time)},{accessorKey:"status",header:"Status"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:t})=>e.jsx(Ie,{data:t.original})}];function Ue({payload:t,modelClose:s}){const a=["Pending","Canceled","Approved","Rejected"];console.log(t);const[g,{isLoading:x}]=Oe(),h=D({resolver:ee(be),defaultValues:{ids:t==null?void 0:t.map(d=>d.id),status:"Pending"}});async function o(d){const m={...d,ids:(t==null?void 0:t.map(r=>r.id))||[]};try{await g(m),R.success("Leave request updated successfully"),s&&s()}catch(r){console.log(r)}}return e.jsx(e.Fragment,{children:x?e.jsx("div",{className:"",children:e.jsx(O,{})}):e.jsx("div",{className:"flex gap-x-4",children:e.jsxs("div",{className:" w-full ",children:[(t==null?void 0:t.length)===0?e.jsx("span",{className:"text-red-500 text-sm",children:"Please select leave request to change status"}):null,e.jsx(se,{...h,children:e.jsxs("form",{onSubmit:h.handleSubmit(o),className:"",children:[e.jsx("div",{className:"grid grid-cols-1 gap-2",children:e.jsx("div",{className:"w-full",children:e.jsx(_,{control:h.control,name:"status",render:({field:d})=>e.jsxs(S,{children:[e.jsx(j,{children:"Status"}),e.jsxs(te,{onValueChange:d.onChange,children:[e.jsx(v,{children:e.jsx(le,{children:e.jsx(ae,{placeholder:"Select Status"})})}),e.jsx(ne,{children:a==null?void 0:a.map(m=>e.jsx(ce,{value:String(m),children:m},m))})]})]})})})}),e.jsx("div",{children:e.jsx(p,{variant:"default",type:"submit",className:"w-full mt-4",children:"Save"})})]})})]})})})}const ze=[{label:"Change Leave Status",value:"change-leave-status"}],Ge=()=>{const[t,s]=c.useState(!1),[a,g]=Le.useState({pageIndex:0,pageSize:10}),[x,h]=c.useState({action:"",payload:[]}),{data:o,isLoading:d,refetch:m}=Me(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),r=(o==null?void 0:o.data)||[],L=o==null?void 0:o.meta;return d?e.jsx(O,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(we,{title:"Leave Request",description:"Manage job apply for you business"}),e.jsxs(p,{onClick:()=>s(!0),size:"sm",children:[e.jsx(Ce,{className:"mr-2 h-4 w-4"})," Add Leave Request"]})]}),e.jsx(Te,{}),r&&e.jsx("div",{children:e.jsx(Re,{columns:Ve,data:r,paginationInfo:L,pagination:a,setPagination:g,bulkActions:ze,onBulkSelectChange:h})})]})}),t&&e.jsx(A,{title:"Add Leave Request",isOpen:t,toggleModal:()=>s(!1),className:"w-3/5 max-w-3xl",children:e.jsx(ie,{refetch:m,modalClose:()=>s(!1)})}),x.action==="change-leave-status"&&e.jsx(A,{title:"Change Leave Status",toggleModal:()=>h({action:"",payload:[]}),isOpen:x.action==="change-leave-status",className:"!h-fit",children:e.jsx(Ue,{payload:x.payload,modelClose:()=>h({action:"",payload:[]})})})]})};export{Ge as default};
