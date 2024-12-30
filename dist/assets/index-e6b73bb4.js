import{c5 as L,bp as $,r as h,bQ as z,E as D,a as e,aw as E,J as Q,K as C,N as k,Q as b,V as N,bb as G,W as A,ca as q,bx as V,X as S,ax as v,ay as B,bT as R,bV as W,Y as H,bm as J,bN as F,bW as U,ad as X,aL as Y,aM as Z,aN as ee,aO as ae,aI as te,al as se,am as ne,an as w,ao as T,ap as I,aq as _,ar as O}from"./index-8b1aa056.js";import{d as ce}from"./index-387a9894.js";const re=[{accessorKey:"employee.name",header:"Employee Name"},{accessorKey:"employee.location.name",header:"Location"},{accessorKey:"employee.department.name",header:"Department"},{accessorKey:"employee.designation.name",header:"Designation"},{accessorKey:"check_in",header:"Check In",cell:({row:a})=>{var t;return a.original.check_in&&L((t=a.original)==null?void 0:t.check_in)}},{accessorKey:"check_out",header:"Check out",cell:({row:a})=>{var t;return a.original.check_out&&L((t=a.original)==null?void 0:t.check_out)}},{accessorKey:"note",header:"Note"}],le=$.injectEndpoints({endpoints:a=>({getAttendanceList:a.query({query:t=>`attendances?${t}`,providesTags:["attendance-list"]}),createAttendanceCheckIn:a.mutation({query:t=>({url:"attendance-check-in",method:"POST",body:t}),invalidatesTags:["attendance-list"]}),createAttendanceCheckOut:a.mutation({query:t=>({url:"attendance-check-out",method:"POST",body:t}),invalidatesTags:["attendance-list"]})}),overrideExisting:!1}),{useGetAttendanceListQuery:ie,useCreateAttendanceCheckInMutation:oe,useCreateAttendanceCheckOutMutation:de}=le;function M({tab:a,modalClose:t}){const[u,m]=h.useState([]),[o]=z(),[j,{isLoading:d}]=oe(),[p,{isLoading:c}]=de(),r=D({defaultValues:{date_time:new Date}}),x=async s=>{const n=s.trim()||"";try{const{data:l}=await o(`per_page=15&page=1&text=${n}`).unwrap();return(l==null?void 0:l.map(g=>({value:String(g.id),label:`${g.first_name} ${g.last_name} (${g.id})`})))||[]}catch(l){return console.error("Error fetching employees:",l),[]}},y=async s=>{try{a==="check-in"?(await j(s).unwrap(),v.success("CheckIn created successfully!")):(await p(s).unwrap(),v.success("CheckOut created successfully!")),t()}catch(n){console.error("Error recording attendance:",n),B(n)}};return e.jsx(e.Fragment,{children:d||c?e.jsx("div",{className:"h-56",children:e.jsx(E,{})}):e.jsx(Q,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(y),className:"w-full space-y-3",children:[e.jsx(C,{control:r.control,name:"employee_ids",render:({field:s})=>e.jsxs(k,{children:[e.jsx(b,{children:"Employee Name"}),e.jsx(N,{children:e.jsx(G,{...s,value:u,onSearch:n=>x(n||""),onChange:n=>{m(n),s.onChange(n.map(l=>parseInt(l.value)))},triggerSearchOnFocus:!0,hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:e.jsx("p",{className:"py-2 text-center leading-10 text-muted-foreground",children:"loading..."}),emptyIndicator:e.jsx("p",{className:"w-full text-center leading-10 text-muted-foreground",children:"no results found."})})}),e.jsx(A,{})]})}),e.jsx(C,{control:r.control,name:"date_time",render:({field:s})=>e.jsxs(k,{children:[e.jsx(b,{children:"Punch Time"}),e.jsx(N,{className:"",children:e.jsx(q,{...s,displayFormat:{hour12:"yyyy/MM/dd h:mm a"},value:s.value,onChange:s.onChange,granularity:"minute",hourCycle:12})}),e.jsx(A,{})]})}),e.jsx(C,{control:r.control,name:"note",render:()=>e.jsxs(k,{children:[e.jsx(b,{children:"Note"}),e.jsx(N,{children:e.jsx(V,{...r.register("note")})}),e.jsx(A,{})]})}),e.jsx("div",{children:e.jsx(S,{variant:a==="check-in"?"default":"destructive",type:"submit",className:"w-full mt-4",disabled:d||c,children:d||c?"Submitting...":a==="check-in"?"Check In":"Check Out"})})]})})})}function he({setFilterParams:a}){const[t,{data:u}]=R(),[m,{data:o}]=W(),[j,{data:d}]=ce(),[p,c]=h.useState(void 0),[r,x]=h.useState(void 0),[y,s]=h.useState(void 0),[n,l]=h.useState(void 0),g=()=>{const i=n?X(n,"yyyy-MM-dd"):"",f=new URLSearchParams;p&&f.append("department_id",p.id.toString()),r&&f.append("location_id",r.id.toString()),y&&f.append("schedule_id",y.id.toString()),n&&f.append("date",i.toString());const P=f.toString();a(P),v.success("Filters applied successfully")},K=()=>{c(void 0),x(void 0),s(void 0),l(void 0),a(""),v.success("Filters reset successfully")};return e.jsx(H,{className:"w-full p-5",children:e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx("div",{className:"space-y-2 flex flex-col py-0",children:e.jsx(J,{selected:n,onChange:i=>{l(i??void 0)},dateFormat:"dd/MM/yyyy",placeholderText:"Select date",className:"border rounded p-[6px] w-full bg-none bg_remove "})}),e.jsx(F,{items:(u==null?void 0:u.data)||[],labelKey:"name",valueKey:"id",value:p,placeholder:"Select Department",onSelect:c,onChangeSearch:i=>t(`text=${i}`)}),e.jsx(F,{items:(o==null?void 0:o.data)||[],labelKey:"name",valueKey:"id",value:r,placeholder:"Select Location",onSelect:x,onChangeSearch:i=>m(`text=${i}`)}),e.jsx(F,{items:(d==null?void 0:d.data)||[],labelKey:"name",valueKey:"id",value:y,placeholder:"Select Shift",onSelect:s,onChangeSearch:i=>j(`text=${i}`)}),e.jsx(S,{variant:"outline",size:"sm",onClick:K,children:"Reset Filters"}),e.jsxs(S,{variant:"default",size:"sm",onClick:g,children:[e.jsx(U,{className:"mr-2 h-4 w-4"}),"Apply Filters"]})]})})}const pe=()=>{const[a,t]=h.useState("check-in"),[u,m]=h.useState(!1),[o,j]=h.useState({pageIndex:0,pageSize:10}),[d,p]=h.useState(""),{data:c,isLoading:r}=ie(`per_page=${o.pageSize}&page=${o.pageIndex+1}&${d}`),x=(c==null?void 0:c.data)||[],y=c==null?void 0:c.meta;return r?e.jsx(E,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Y,{title:"Attendance List",description:"Manage job apply for your business"}),e.jsxs(S,{onClick:()=>m(!0),size:"sm",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"})," Add Attendance"]})]}),e.jsx(he,{setFilterParams:p}),e.jsx(ee,{}),x.length>0?e.jsx(ae,{columns:re,data:x,paginationInfo:y,pagination:o,setPagination:j,className:"py-2 px-4"}):e.jsx("div",{className:"grid place-items-center min-h-[60vh]",children:e.jsx("p",{className:"text-xl",children:"No attendance records found for the selected date or department."})})]})}),u&&e.jsx(te,{title:"Add Attendance List",isOpen:u,toggleModal:()=>m(!1),className:"w-fit",children:e.jsxs(se,{defaultValue:a,onValueChange:s=>t(s),className:"w-[400px] mx-auto",children:[e.jsxs(ne,{className:"grid w-full grid-cols-2 my-2",children:[e.jsx(w,{value:"check-in",children:"Check In"}),e.jsx(w,{value:"check-out",children:"Check Out"})]}),e.jsxs(T,{value:"check-in",children:[e.jsx(I,{children:e.jsx(_,{children:"Check In"})}),e.jsx(O,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx(M,{modalClose:()=>m(!1),tab:a})})})]}),e.jsxs(T,{value:"check-out",children:[e.jsx(I,{children:e.jsx(_,{children:"Check Out"})}),e.jsx(O,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx(M,{modalClose:()=>m(!1),tab:a})})})]})]})})]})};export{pe as default};
