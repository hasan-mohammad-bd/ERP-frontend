import{a as e,bL as w,ch as I,bq as B,r as m,b_ as R,G as V,ax as D,K as H,N as b,Q as N,V as F,W as L,bc as J,X as A,cm as W,by as X,Y as C,ay as k,az as U,c1 as Y,c4 as Z,c5 as ee,c3 as ae,Z as te,bn as se,bX as v,c6 as ne,ae as ce,aM as re,aN as le,aO as ie,aP as oe,aJ as de,am as he,an as ue,ao as K,ap as O,aq as M,ar as E,as as P}from"./index-5bbba7cd.js";const me=[{accessorKey:"employee.name",header:"Employee Name"},{accessorKey:"employee.location.name",header:"Location"},{header:"Shift",cell:({row:a})=>{var t,d,h,r,p,l;return e.jsxs("span",{children:[w((h=(d=(t=a.original)==null?void 0:t.employee)==null?void 0:d.schedule)==null?void 0:h.start_time)," "," - ",w((l=(p=(r=a.original)==null?void 0:r.employee)==null?void 0:p.schedule)==null?void 0:l.end_time)]})}},{accessorKey:"employee.department.name",header:"Department"},{accessorKey:"employee.section.name",header:"Section"},{accessorKey:"employee.designation.name",header:"Designation"},{accessorKey:"check_in",header:"Check In",cell:({row:a})=>{var t;return a.original.check_in&&I((t=a.original)==null?void 0:t.check_in)}},{accessorKey:"check_out",header:"Check out",cell:({row:a})=>{var t;return a.original.check_out&&I((t=a.original)==null?void 0:t.check_out)}},{accessorKey:"note",header:"Note"}],pe=B.injectEndpoints({endpoints:a=>({getAttendanceList:a.query({query:t=>`attendances?${t}`,providesTags:["attendance-list"]}),createAttendanceCheckIn:a.mutation({query:t=>({url:"attendance-check-in",method:"POST",body:t}),invalidatesTags:["attendance-list"]}),createAttendanceCheckOut:a.mutation({query:t=>({url:"attendance-check-out",method:"POST",body:t}),invalidatesTags:["attendance-list"]})}),overrideExisting:!1}),{useGetAttendanceListQuery:xe,useCreateAttendanceCheckInMutation:ye,useCreateAttendanceCheckOutMutation:ge}=pe;function $({tab:a,modalClose:t}){const[d,h]=m.useState([]),[r]=R(),[p,{isLoading:l}]=ye(),[S,{isLoading:x}]=ge(),i=V({defaultValues:{date_time:new Date}}),u=async s=>{const n=s.trim()||"";try{const{data:c}=await r(`per_page=15&page=1&text=${n}`).unwrap();return(c==null?void 0:c.map(y=>({value:String(y.id),label:`${y.first_name} ${y.last_name} (${y.id})`})))||[]}catch(c){return console.error("Error fetching employees:",c),[]}},g=async s=>{try{a==="check-in"?(await p(s).unwrap(),k.success("CheckIn created successfully!")):(await S(s).unwrap(),k.success("CheckOut created successfully!")),t()}catch(n){console.error("Error recording attendance:",n),U(n)}};return e.jsx(e.Fragment,{children:l||x?e.jsx("div",{className:"h-56",children:e.jsx(D,{})}):e.jsx(H,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(g),className:"w-full space-y-3",children:[e.jsx(b,{control:i.control,name:"employee_ids",render:({field:s})=>e.jsxs(N,{children:[e.jsx(F,{children:"Employee Name"}),e.jsx(L,{children:e.jsx(J,{...s,value:d,onSearch:n=>u(n||""),onChange:n=>{h(n),s.onChange(n.map(c=>parseInt(c.value)))},triggerSearchOnFocus:!0,hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:e.jsx("p",{className:"py-2 text-center leading-10 text-muted-foreground",children:"loading..."}),emptyIndicator:e.jsx("p",{className:"w-full text-center leading-10 text-muted-foreground",children:"no results found."})})}),e.jsx(A,{})]})}),e.jsx(b,{control:i.control,name:"date_time",render:({field:s})=>e.jsxs(N,{children:[e.jsx(F,{children:"Punch Time"}),e.jsx(L,{className:"",children:e.jsx(W,{...s,displayFormat:{hour12:"yyyy/MM/dd h:mm a"},value:s.value,onChange:s.onChange,granularity:"minute",hourCycle:12})}),e.jsx(A,{})]})}),e.jsx(b,{control:i.control,name:"note",render:()=>e.jsxs(N,{children:[e.jsx(F,{children:"Note"}),e.jsx(L,{children:e.jsx(X,{...i.register("note")})}),e.jsx(A,{})]})}),e.jsx("div",{children:e.jsx(C,{variant:a==="check-in"?"default":"destructive",type:"submit",className:"w-full mt-4",disabled:l||x,children:l||x?"Submitting...":a==="check-in"?"Check In":"Check Out"})})]})})})}function je({setFilterParams:a}){const[t,{data:d}]=Y(),[h,{data:r}]=Z(),[p,{data:l}]=ee(),[S,{data:x}]=ae(),[i,u]=m.useState(void 0),[g,s]=m.useState(void 0),[n,c]=m.useState(void 0),[y,T]=m.useState(void 0),[f,_]=m.useState(void 0),G=()=>{const o=f?ce(f,"yyyy-MM-dd"):"",j=new URLSearchParams;i&&j.append("department_id",i.id.toString()),g&&j.append("location_id",g.id.toString()),n&&j.append("schedule_id",n.id.toString()),y&&j.append("section_id",y.id.toString()),f&&j.append("date",o.toString());const q=j.toString();a(q),k.success("Filters applied successfully")},Q=()=>{u(void 0),s(void 0),c(void 0),T(void 0),_(void 0),a(""),k.success("Filters reset successfully")};return e.jsx(te,{className:"w-full p-5",children:e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx("div",{className:"space-y-2 flex flex-col py-0",children:e.jsx(se,{selected:f,onChange:o=>{_(o??void 0)},dateFormat:"dd/MM/yyyy",placeholderText:"Select date",className:"border rounded p-[6px] w-full bg-none bg_remove"})}),e.jsx(v,{items:(d==null?void 0:d.data)||[],labelKey:"name",valueKey:"id",value:i,placeholder:"Select Department",onSelect:u,onChangeSearch:o=>t(`text=${o}`)}),e.jsx(v,{items:(r==null?void 0:r.data)||[],labelKey:"name",valueKey:"id",value:g,placeholder:"Select Location",onSelect:s,onChangeSearch:o=>h(`text=${o}`)}),e.jsx(v,{items:(l==null?void 0:l.data)||[],labelKey:"name",valueKey:"id",value:n,placeholder:"Select Shift",onSelect:c,onChangeSearch:o=>p(`text=${o}`)}),e.jsx(v,{items:(x==null?void 0:x.data)||[],labelKey:"name",valueKey:"id",value:y,placeholder:"Select Section",onSelect:T,onChangeSearch:o=>S(`text=${o}`)}),e.jsx(C,{variant:"outline",size:"sm",onClick:Q,children:"Reset Filters"}),e.jsxs(C,{variant:"default",size:"sm",onClick:G,children:[e.jsx(ne,{className:"mr-2 h-4 w-4"}),"Apply Filters"]})]})})}const z={pageIndex:0,pageSize:10},fe=()=>{const[a,t]=m.useState("check-in"),[d,h]=m.useState(!1),[r,p]=m.useState(z),[l,S]=m.useState(""),[x,i]=m.useState(""),{data:u,isLoading:g}=xe(`per_page=${r.pageSize}&page=${r.pageIndex+1}&text=${x}&${l}`),s=(u==null?void 0:u.data)||[],n=u==null?void 0:u.meta;return g?e.jsx(D,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(re,{title:"Attendance List",description:"Manage job apply for your business"}),e.jsxs(C,{onClick:()=>h(!0),size:"sm",children:[e.jsx(le,{className:"mr-2 h-4 w-4"})," Add Attendance"]})]}),e.jsx(je,{setFilterParams:S}),e.jsx(ie,{}),e.jsx(oe,{columns:me,data:s,paginationInfo:n,pagination:r,setPagination:p,className:"py-2 px-4",onChangeSearch:c=>{p(z),i(c)}})]})}),d&&e.jsx(de,{title:"Add Attendance List",isOpen:d,toggleModal:()=>h(!1),className:"w-fit",children:e.jsxs(he,{defaultValue:a,onValueChange:c=>t(c),className:"w-[400px] mx-auto",children:[e.jsxs(ue,{className:"grid w-full grid-cols-2 my-2",children:[e.jsx(K,{value:"check-in",children:"Check In"}),e.jsx(K,{value:"check-out",children:"Check Out"})]}),e.jsxs(O,{value:"check-in",children:[e.jsx(M,{children:e.jsx(E,{children:"Check In"})}),e.jsx(P,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx($,{modalClose:()=>h(!1),tab:a})})})]}),e.jsxs(O,{value:"check-out",children:[e.jsx(M,{children:e.jsx(E,{children:"Check Out"})}),e.jsx(P,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx($,{modalClose:()=>h(!1),tab:a})})})]})]})})]})};export{fe as default};
