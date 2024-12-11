import{cc as N,bm as _,r as u,bU as M,B as E,a as e,au as O,G as K,H as y,J as f,K as C,N as k,b9 as D,Q as S,bt as $,V as v,av as b,aw as G,aI as Q,W as V,ch as q,aa as z,ab as P,aV as H,ac as J,ad as R,bR as B,aJ as U,aK as W,aL as X,aM as Y,aG as Z,aj as ee,ak as ae,al as A,am as w,an as F,ao as I,ap as T}from"./index-5bd6595c.js";import{D as se}from"./dayTimePicker-7ab5187c.js";import"./clock-8a2b31e8.js";const te=[{accessorKey:"employee.name",header:"Employee Name"},{accessorKey:"employee.department.name",header:"Department"},{accessorKey:"employee.designation.name",header:"Designation"},{accessorKey:"check_in",header:"Check In",cell:({row:a})=>{var s;return a.original.check_in&&N((s=a.original)==null?void 0:s.check_in)}},{accessorKey:"check_out",header:"Check out",cell:({row:a})=>{var s;return a.original.check_out&&N((s=a.original)==null?void 0:s.check_out)}},{accessorKey:"note",header:"Note"}],ne=_.injectEndpoints({endpoints:a=>({getAttendanceList:a.query({query:s=>`attendances?${s}`,providesTags:["attendance-list"]}),createAttendanceCheckIn:a.mutation({query:s=>({url:"attendance-check-in",method:"POST",body:s}),invalidatesTags:["attendance-list"]}),createAttendanceCheckOut:a.mutation({query:s=>({url:"attendance-check-out",method:"POST",body:s}),invalidatesTags:["attendance-list"]})}),overrideExisting:!1}),{useGetAttendanceListQuery:ce,useCreateAttendanceCheckInMutation:re,useCreateAttendanceCheckOutMutation:le}=ne;function L({tab:a,modalClose:s}){const[m,l]=u.useState([]),[c]=M(),[p,{isLoading:d}]=re(),[g,{isLoading:h}]=le(),i=E({defaultValues:{date_time:new Date}}),j=async t=>{const n=t.trim()||"";try{const{data:r}=await c(`per_page=15&page=1&text=${n}`).unwrap();return(r==null?void 0:r.map(x=>({value:String(x.id),label:`${x.first_name} ${x.last_name} (${x.id})`})))||[]}catch(r){return console.error("Error fetching employees:",r),[]}},o=async t=>{try{a==="check-in"?(await p(t).unwrap(),b.success("CheckIn created successfully!")):(await g(t).unwrap(),b.success("CheckOut created successfully!")),s()}catch(n){console.error("Error recording attendance:",n),G(n)}};return e.jsx(e.Fragment,{children:d||h?e.jsx("div",{className:"h-56",children:e.jsx(O,{})}):e.jsx(K,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(o),className:"w-full space-y-3",children:[e.jsx(y,{control:i.control,name:"employee_ids",render:({field:t})=>e.jsxs(f,{children:[e.jsx(C,{children:"Employee Name"}),e.jsx(k,{children:e.jsx(D,{...t,value:m,onSearch:n=>j(n||""),onChange:n=>{l(n),t.onChange(n.map(r=>parseInt(r.value)))},triggerSearchOnFocus:!0,hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:e.jsx("p",{className:"py-2 text-center leading-10 text-muted-foreground",children:"loading..."}),emptyIndicator:e.jsx("p",{className:"w-full text-center leading-10 text-muted-foreground",children:"no results found."})})}),e.jsx(S,{})]})}),e.jsx(y,{control:i.control,name:"date_time",render:({field:t})=>e.jsxs(f,{children:[e.jsx(C,{children:"Punch Time"}),e.jsx(k,{className:"",children:e.jsx(se,{...t,displayFormat:{hour12:"yyyy/MM/dd h:mm a"},value:t.value,onChange:t.onChange,granularity:"minute",hourCycle:12})}),e.jsx(S,{})]})}),e.jsx(y,{control:i.control,name:"note",render:()=>e.jsxs(f,{children:[e.jsx(C,{children:"Note"}),e.jsx(k,{children:e.jsx($,{...i.register("note")})}),e.jsx(S,{})]})}),e.jsx("div",{children:e.jsx(v,{variant:a==="check-in"?"default":"destructive",type:"submit",className:"w-full mt-4",disabled:d||h,children:d||h?"Submitting...":a==="check-in"?"Check In":"Check Out"})})]})})})}function ie({selectedDate:a,setSelectedDate:s,selectedDepartment:m,setSelectedDepartment:l}){const{data:c}=Q(""),[p,d]=u.useState(!1);return e.jsx(V,{className:"w-full p-5",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"w-[280px]",children:e.jsxs(q,{open:p,onOpenChange:d,children:[e.jsx(z,{asChild:!0,className:"h-9",children:e.jsxs(v,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a&&"text-muted-foreground"}`,children:[a?P(a,"PP"):"Pick a date",e.jsx(H,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(J,{className:"w-auto p-0",align:"start",children:e.jsx(R,{mode:"single",selected:a,onSelect:s,initialFocus:!0})})]})}),e.jsx(B,{items:(c==null?void 0:c.data)||[],labelKey:"name",valueKey:"id",value:m,placeholder:"Select Department",onSelect:l})]})})}const ue=()=>{const[a,s]=u.useState("check-in"),[m,l]=u.useState(!1),[c,p]=u.useState(),[d,g]=u.useState(void 0),[h,i]=u.useState({pageIndex:0,pageSize:10}),j=new URLSearchParams({date:c&&P(c,"yyyy-MM-dd")||"",per_page:h.pageSize.toString(),page:h.pageIndex.toString()}),{data:o,isLoading:t}=ce(j.toString()),n=(o==null?void 0:o.data)||[],r=o==null?void 0:o.meta;return t?e.jsx(O,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Attendance List",description:"Manage job apply for your business"}),e.jsxs(v,{onClick:()=>l(!0),size:"sm",children:[e.jsx(W,{className:"mr-2 h-4 w-4"})," Add Attendance"]})]}),e.jsx(ie,{selectedDate:c,setSelectedDate:p,selectedDepartment:d,setSelectedDepartment:g}),e.jsx(X,{}),n.length>0?e.jsx(Y,{columns:te,data:n,paginationInfo:r,pagination:h,setPagination:i,className:"py-2 px-4"}):e.jsx("div",{className:"grid place-items-center min-h-[60vh]",children:e.jsx("p",{className:"text-xl",children:"No attendance records found for the selected date or department."})})]})}),m&&e.jsx(Z,{title:"Add Attendance List",isOpen:m,toggleModal:()=>l(!1),className:"w-fit",children:e.jsxs(ee,{defaultValue:a,onValueChange:x=>s(x),className:"w-[400px] mx-auto",children:[e.jsxs(ae,{className:"grid w-full grid-cols-2 my-2",children:[e.jsx(A,{value:"check-in",children:"Check In"}),e.jsx(A,{value:"check-out",children:"Check Out"})]}),e.jsxs(w,{value:"check-in",children:[e.jsx(F,{children:e.jsx(I,{children:"Check In"})}),e.jsx(T,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx(L,{modalClose:()=>l(!1),tab:a})})})]}),e.jsxs(w,{value:"check-out",children:[e.jsx(F,{children:e.jsx(I,{children:"Check Out"})}),e.jsx(T,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx(L,{modalClose:()=>l(!1),tab:a})})})]})]})})]})};export{ue as default};
