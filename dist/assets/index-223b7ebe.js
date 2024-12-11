import{bS as te,c9 as Pe,bm as Te,B as he,D as xe,r as o,ab as _,a as e,au as U,G as je,K as g,I as R,H as b,J as S,N as y,bR as pe,aU as $e,b1 as ue,b2 as ge,b3 as fe,b4 as Se,b6 as _e,Q as q,a9 as le,aa as ae,V as C,aV as ne,ac as ce,ad as ie,ca as Ae,cb as Oe,av as P,aw as Ie,az as O,aA as I,aB as de,aC as ke,aD as k,aE as Ee,aF as Ue,aG as E,aH as re,cc as oe,cd as Ve,R as He,aJ as ze,aK as Ke,aL as Be,aM as Ge}from"./index-5bd6595c.js";import{l as Je,a as Qe}from"./leave-fb14d20a.js";import{S as Ye}from"./switch-8d376033.js";import{u as We}from"./leave-summay-5c519671.js";function Xe(t,s){const i=te(t),m=te(s),r=me(i,m),h=Math.abs(Pe(i,m));i.setDate(i.getDate()-r*h);const x=+(me(i,m)===-r),j=r*(h-x);return j===0?0:j}function me(t,s){const i=t.getFullYear()-s.getFullYear()||t.getMonth()-s.getMonth()||t.getDate()-s.getDate()||t.getHours()-s.getHours()||t.getMinutes()-s.getMinutes()||t.getSeconds()-s.getSeconds()||t.getMilliseconds()-s.getMilliseconds();return i<0?-1:i>0?1:i}const Ze=Te.injectEndpoints({endpoints:t=>({getLeaveRequests:t.query({query:s=>`leaves?${s}`,providesTags:["leaves"]}),createLeaveRequest:t.mutation({query:s=>({url:"leaves",method:"POST",body:s}),invalidatesTags:["leaves"]}),changeLeaveStatus:t.mutation({query:s=>({url:"leaves/status-update",method:"POST",body:s}),invalidatesTags:["change-leave-status","leaves"]}),removeLeaveRequest:t.mutation({query:s=>({url:`leaves/${s}`,method:"DELETE"}),invalidatesTags:["leaves"]}),updateLeaveRequest:t.mutation({query:({leaveRequestId:s,updatedLeaveRequest:i})=>({url:`leaves/${s}`,method:"POST",body:i}),invalidatesTags:["leaves"]})}),overrideExisting:!1}),{useGetLeaveRequestsQuery:De,useCreateLeaveRequestMutation:es,useChangeLeaveStatusMutation:ss,useRemoveLeaveRequestMutation:ts,useUpdateLeaveRequestMutation:ls}=Ze;function ye({modalClose:t,data:s,refetch:i}){var Y,W,X,Z,D,ee,se;const[m,{data:r}]=We(),[h,{isLoading:x}]=es(),[j,{isLoading:u}]=ls(),a=he({resolver:xe(Je),defaultValues:{employee_id:s==null?void 0:s.employee_id,start_date_time:(s==null?void 0:s.start_date_time)||"",end_date_time:(s==null?void 0:s.end_date_time)||"",subject:(s==null?void 0:s.subject)||"",description:(s==null?void 0:s.description)||"",leave_type_id:(s==null?void 0:s.leave_type.id.toString())||"",status:(s==null?void 0:s.status)||"Pending",files:(s==null?void 0:s.files)||[]}}),[F,M]=o.useState(!1),[Ne,V]=o.useState(!1),[f,H]=o.useState(null),[N,z]=o.useState(null),[K,be]=o.useState([]),[T,Ce]=o.useState(!1),[v,B]=o.useState(""),[w,G]=o.useState(""),p=["Pending","Canceled","Approved","Rejected"];o.useEffect(()=>{s&&(B(_(new Date(s==null?void 0:s.start_date_time),"HH:mm")),G(_(new Date(s==null?void 0:s.end_date_time),"HH:mm")),H(new Date(s==null?void 0:s.start_date_time)),z(new Date(s==null?void 0:s.end_date_time)))},[s]);const $=(r==null?void 0:r.data)||[],ve=a.watch("employee_id"),d=$.find(l=>l.id===Number(ve)),we=a.watch("leave_type_id"),c=d==null?void 0:d.leave_types.find(l=>l.id===Number(we)),qe=l=>{var L;if(!l)return;H(l);const n=v&&`${v}:00`||((L=d==null?void 0:d.schedule)==null?void 0:L.start_time);console.log(n,"validTimeStart"),a.setValue("start_date_time",`${_(l,"yyyy-MM-dd")} ${n}`),M(!1)},Fe=l=>{var L;if(!l)return;z(l);const n=w&&`${w}:00`||((L=d==null?void 0:d.schedule)==null?void 0:L.end_time);a.setValue("end_date_time",`${_(l,"yyyy-MM-dd")} ${n}`),V(!1)};o.useEffect(()=>{var l;if(f){const n=v&&`${v}:00`||((l=d==null?void 0:d.schedule)==null?void 0:l.start_time);a.setValue("start_date_time",`${_(f,"yyyy-MM-dd")} ${n}`)}},[v,f,a,(Y=d==null?void 0:d.schedule)==null?void 0:Y.start_time]),o.useEffect(()=>{var l;if(N){const n=w&&`${w}:00`||((l=d==null?void 0:d.schedule)==null?void 0:l.end_time);a.setValue("end_date_time",`${_(N,"yyyy-MM-dd")} ${n}`)}},[w,N,a,(W=d==null?void 0:d.schedule)==null?void 0:W.end_time]);const A=a.watch("start_date_time"),J=a.watch("end_date_time");console.log(A);const Q=(A&&J?Xe(J.slice(0,10),A.slice(0,10)):0)+1;async function Le(l){console.log(l);try{const n=Oe.serialize({...l,_method:s?"PUT":"POST",files:K},{indices:!0});s?(await j({leaveRequestId:s.id,updatedLeaveRequest:n}).unwrap(),P.success("Leave Request updated successfully"),t()):(await h(n).unwrap(),P.success("Leave Request created successfully"),t())}catch(n){console.log(n),Ie(n)}}const[Re,Me]=o.useState();return o.useEffect(()=>{s!=null&&s.employee_id&&m(`employee_id=${s==null?void 0:s.employee_id}`)},[s==null?void 0:s.employee_id,m]),e.jsx(e.Fragment,{children:x||u?e.jsx("div",{children:e.jsx(U,{})}):e.jsx(je,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(Le),className:"space-y-3",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-end space-x-4",children:[e.jsx("div",{className:"w-full",children:s!=null&&s.employee_id?e.jsxs(e.Fragment,{children:[e.jsx(g,{className:"",children:"Employee Name"}),e.jsx(R,{className:"mt-2",disabled:!0,value:(X=s==null?void 0:s.employee)==null?void 0:X.first_name})]}):e.jsx(b,{control:a.control,name:"employee_id",render:({field:l})=>e.jsxs(S,{className:"w-full",children:[e.jsx(g,{children:e.jsx("p",{className:"mt-2 mb-1",children:"Employee Name *"})}),e.jsx(y,{children:e.jsx(pe,{items:$,labelKey:"first_name",valueKey:"id",value:$.find(n=>n.id===l.value)||Re,placeholder:"Select Employee",onSelect:n=>{Me(n),l.onChange(n==null?void 0:n.id)},onChangeSearch:n=>m(`text=${n}`),size:"default",className:"w-[350px]"})})]})})}),e.jsx("div",{className:"w-full flex items-center",children:e.jsx($e,{data:(d==null?void 0:d.leave_types)||[],displayField:"name",valueField:"id",form:a,name:"leave_type_id",title:`Leave Type ${(Z=c==null?void 0:c.available)!=null&&Z.total_days?`(Leave Left: ${(D=c==null?void 0:c.available)==null?void 0:D.total_days} days)`:""} ${(ee=c==null?void 0:c.available)!=null&&ee.total_hours?`, ( ${(se=c==null?void 0:c.available)==null?void 0:se.total_hours} hours)`:""}`,className:"w-[290px]"})}),s&&e.jsx("div",{className:"w-full",children:e.jsx(b,{control:a.control,name:"status",render:({field:l})=>e.jsxs(S,{children:[e.jsx(g,{children:"Status"}),e.jsxs(ue,{onValueChange:l.onChange,defaultValue:s.status?String(s.status):void 0,children:[e.jsx(y,{children:e.jsx(ge,{children:e.jsx(fe,{placeholder:"Select Status"})})}),e.jsx(Se,{children:p==null?void 0:p.map(n=>e.jsx(_e,{value:String(n),children:n},n))})]}),e.jsx(q,{})]})})})]}),e.jsxs("div",{className:"flex justify-between items-center gap-x-4",children:[e.jsxs("div",{className:"w-full flex items-center gap-x-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(b,{control:a.control,name:"start_date_time",render:()=>e.jsxs(S,{children:[e.jsx(g,{children:"Start Date"}),e.jsxs(le,{open:F,onOpenChange:M,children:[e.jsx(ae,{asChild:!0,className:"",children:e.jsxs(C,{variant:"outline",className:`w-full justify-start text-left font-normal ${!f&&"text-muted-foreground"}`,children:[f?_(f,"PP"):"Pick a date",e.jsx(ne,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(ce,{className:"w-auto p-0",align:"start",children:e.jsx(ie,{mode:"single",selected:f??void 0,onSelect:qe,initialFocus:!0})})]})]})})}),T&&e.jsx("div",{className:"w-full",children:e.jsxs(S,{children:[e.jsx(g,{children:"Time Start"}),e.jsx(y,{children:e.jsx(R,{type:"time",value:v,onChange:l=>B(l.target.value)})}),e.jsx(q,{})]})})]}),e.jsxs("div",{className:"w-full flex items-center gap-x-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(b,{control:a.control,name:"end_date_time",render:()=>e.jsxs(S,{children:[e.jsx(g,{children:"End Date"}),e.jsxs(le,{open:Ne,onOpenChange:V,children:[e.jsx(ae,{asChild:!0,className:"",children:e.jsxs(C,{variant:"outline",className:`w-full justify-start text-left font-normal ${!N&&"text-muted-foreground"}`,children:[N?_(N,"PP"):"Pick a date",e.jsx(ne,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(ce,{className:"w-auto p-0",align:"start",children:e.jsx(ie,{mode:"single",disabled:l=>!!(f&&l<f),selected:N??void 0,onSelect:Fe,initialFocus:!0})})]}),e.jsx(q,{children:(c==null?void 0:c.available)&&Q>c.available.total_days&&e.jsx("span",{className:"text-red-500",children:"Total Leave Days Exceed"})})]})})}),T&&e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"w-full",children:e.jsxs(S,{children:[e.jsx(g,{children:"Time End"}),e.jsx(y,{children:e.jsx(R,{type:"time",value:w,onChange:l=>G(l.target.value)})}),e.jsx(q,{})]})})})]})]}),e.jsx("div",{}),e.jsxs("div",{className:"!mt-5 flex justify-start items-center",children:[e.jsx(y,{children:e.jsx(Ye,{className:" ",checked:T,onCheckedChange:l=>Ce(!!l)})}),e.jsx("span",{className:"ml-2 text-sm",children:"Consider Hours"})]}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx("div",{className:"w-full",children:e.jsx(b,{control:a.control,name:"subject",render:({field:l})=>e.jsxs(S,{children:[e.jsx(g,{children:"Subject"}),e.jsx(y,{children:e.jsx(R,{className:"",placeholder:"Enter Subject",...l,value:l.value||""})}),e.jsx(q,{})]})})}),e.jsx("div",{className:"w-full",children:e.jsx(b,{control:a.control,name:"description",render:({field:l})=>e.jsxs(S,{children:[e.jsx(g,{children:"Description"}),e.jsx(y,{children:e.jsx(R,{className:"",placeholder:"Enter Description",...l,value:l.value||""})}),e.jsx(q,{})]})})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(g,{children:"Upload Files"}),e.jsx(Ae,{setFilesToUpload:be,filesToUpload:K,uploadedFiles:s==null?void 0:s.files,onDeleteSuccess:()=>i()})]})]}),e.jsx("div",{className:"text-right flex items-center justify-end gap-x-3",children:e.jsx(C,{disabled:!!(c!=null&&c.available.total_days&&(c==null?void 0:c.available.total_days)<=0)||!!(c!=null&&c.available&&Q>c.available.total_days),variant:"default",type:"submit",className:"w-fit mt-4",children:s?"Update":"Add"})})]})})})}function as({data:t}){var u,a;const[s,i]=o.useState(!1),[m,r]=o.useState(!1),[h,{isLoading:x}]=ts(),j=async F=>{try{await h(F),P.success("Leave deleted successfully"),i(!1)}catch(M){console.log(M)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(O,{children:e.jsxs(I,{children:[e.jsx(de,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>r(!0),children:e.jsx(ke,{className:"h-4 w-4 text-foreground"})})}),e.jsx(k,{children:e.jsx("p",{children:"Update Leave Request"})})]})}),e.jsx(O,{children:e.jsx(I,{children:e.jsx(k,{children:e.jsx("p",{children:"Delete Leave Request"})})})}),e.jsx(O,{children:e.jsxs(I,{children:[e.jsx(de,{asChild:!0,children:e.jsx(C,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(!0)},children:e.jsx(Ee,{className:"h-4 w-4 text-foreground"})})}),e.jsx(k,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(Ue,{title:"Are you sure?",description:"This action cannot be undone.",name:((u=t==null?void 0:t.employee)==null?void 0:u.first_name)+" "+((a=t==null?void 0:t.employee)==null?void 0:a.last_name),isOpen:s,onClose:()=>i(!1),onConfirm:()=>j(t.id),loading:x}),m&&e.jsx(E,{title:"Update Leave Request",isOpen:m,toggleModal:()=>r(!1),className:"w-3/5 max-w-3xl",children:e.jsx(ye,{data:t,modalClose:()=>r(!1)})})]})}const ns=[{id:"select",header:({table:t})=>e.jsx(re,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>t.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:t})=>e.jsx(re,{checked:t.getIsSelected(),onCheckedChange:s=>t.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Employee name",cell:({row:t})=>t.original.employee.first_name+" "+t.original.employee.last_name},{accessorKey:"leave_type",header:"Leave type",cell:({row:t})=>{var s;return(s=t.original.leave_type)==null?void 0:s.name}},{accessorKey:"start_date_time",header:"Start Date",cell:({row:t})=>oe(t.original.start_date_time)},{accessorKey:"end_date_time",header:"End Date",cell:({row:t})=>oe(t.original.end_date_time)},{header:"Approval Status",cell:({row:t})=>{var s;return Ve((s=t.original.approval)==null?void 0:s.status)}},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:t})=>e.jsx(as,{data:t.original})}];function cs({payload:t,modelClose:s}){const i=["Pending","Canceled","Approved","Rejected"];console.log(t);const[m,{isLoading:r}]=ss(),h=he({resolver:xe(Qe),defaultValues:{ids:t==null?void 0:t.map(j=>j.id),status:"Pending"}});async function x(j){const u={...j,ids:(t==null?void 0:t.map(a=>a.id))||[]};try{await m(u),P.success("Leave request updated successfully"),s&&s()}catch(a){console.log(a)}}return e.jsx(e.Fragment,{children:r?e.jsx("div",{className:"",children:e.jsx(U,{})}):e.jsx("div",{className:"flex gap-x-4",children:e.jsxs("div",{className:" w-full ",children:[(t==null?void 0:t.length)===0?e.jsx("span",{className:"text-red-500 text-sm",children:"Please select leave request to change status"}):null,e.jsx(je,{...h,children:e.jsxs("form",{onSubmit:h.handleSubmit(x),className:"",children:[e.jsx("div",{className:"grid grid-cols-1 gap-2",children:e.jsx("div",{className:"w-full",children:e.jsx(b,{control:h.control,name:"status",render:({field:j})=>e.jsxs(S,{children:[e.jsx(g,{children:"Status"}),e.jsxs(ue,{onValueChange:j.onChange,children:[e.jsx(y,{children:e.jsx(ge,{children:e.jsx(fe,{placeholder:"Select Status"})})}),e.jsx(Se,{children:i==null?void 0:i.map(u=>e.jsx(_e,{value:String(u),children:u},u))})]})]})})})}),e.jsx("div",{children:e.jsx(C,{variant:"default",type:"submit",className:"w-full mt-4",children:"Save"})})]})})]})})})}const is=[{label:"Change Leave Status",value:"change-leave-status"}],xs=()=>{const[t,s]=o.useState(!1),[i,m]=He.useState({pageIndex:0,pageSize:10}),[r,h]=o.useState({action:"",payload:[]}),{data:x,isLoading:j,refetch:u}=De(`per_page=${i.pageSize}&page=${i.pageIndex+1}`),a=(x==null?void 0:x.data)||[],F=x==null?void 0:x.meta;return j?e.jsx(U,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ze,{title:"Leave Request",description:"Manage job apply for you business"}),e.jsxs(C,{onClick:()=>s(!0),size:"sm",children:[e.jsx(Ke,{className:"mr-2 h-4 w-4"})," Add Leave Request"]})]}),e.jsx(Be,{}),a&&e.jsx("div",{children:e.jsx(Ge,{columns:ns,data:a,paginationInfo:F,pagination:i,setPagination:m,bulkActions:is,onBulkSelectChange:h})})]})}),t&&e.jsx(E,{title:"Add Leave Request",isOpen:t,toggleModal:()=>s(!1),className:"w-3/5 max-w-3xl",children:e.jsx(ye,{refetch:u,modalClose:()=>s(!1)})}),r.action==="change-leave-status"&&e.jsx(E,{title:"Change Leave Status",toggleModal:()=>h({action:"",payload:[]}),isOpen:r.action==="change-leave-status",className:"!h-fit",children:e.jsx(cs,{payload:r.payload,modelClose:()=>h({action:"",payload:[]})})})]})};export{xs as default};
