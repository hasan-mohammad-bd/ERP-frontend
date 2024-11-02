import{cP as he,c$ as xe,x as pe,d0 as ge,cU as z,r as m,a as t,aP as E,aQ as R,aR as $,aS as K,aU as v,I as je,b as N,y as ye,z as te,B as M,ax as se,D as T,E as ne,d1 as F,d2 as Se,o as B,d3 as we,cc as be,bc as Ne,aH as ke,$ as ve,a2 as re,a3 as Ae,a4 as H,a5 as C,a6 as D,a7 as O,aW as Me,a8 as L,bs as Te,a9 as Q,aa as Ie,al as Pe,U as _e,d4 as Ve,F as He,aF as Ce,am as De,t as Oe,an as Le,ao as Ee,aj as Re,K as $e,M as Ke,N as W,Q as q,V as G,W as J,X}from"./index-086c5f78.js";import{C as Fe}from"./clock-3bc21588.js";function Ue(e,s){const{years:n=0,months:c=0,weeks:r=0,days:u=0,hours:o=0,minutes:d=0,seconds:l=0}=s,i=he(e),h=c||n?xe(i,c+n*12):i,a=u||r?pe(h,u+r*7):h,p=d+o*60,y=(l+p*60)*1e3;return ge(e,a.getTime()+y)}const Ye=[{accessorKey:"employee.name",header:"Employee Name"},{accessorKey:"employee.department.name",header:"Department"},{accessorKey:"employee.designation.name",header:"Designation"},{accessorKey:"check_in",header:"Check In",cell:({row:e})=>{var s;return e.original.check_in&&z((s=e.original)==null?void 0:s.check_in)}},{accessorKey:"check_out",header:"Check out",cell:({row:e})=>{var s;return e.original.check_out&&z((s=e.original)==null?void 0:s.check_out)}},{accessorKey:"note",header:"Note"}];function ze(e){return/^(0[0-9]|1[0-9]|2[0-3])$/.test(e)}function Be(e){return/^(0[1-9]|1[0-2])$/.test(e)}function Qe(e){return/^[0-5][0-9]$/.test(e)}function I(e,{max:s,min:n=0,loop:c=!1}){let r=parseInt(e,10);return isNaN(r)?"00":(c?(r>s&&(r=n),r<n&&(r=s)):(r>s&&(r=s),r<n&&(r=n)),r.toString().padStart(2,"0"))}function ae(e){return ze(e)?e:I(e,{max:23})}function ce(e){return Be(e)?e:I(e,{min:1,max:12})}function A(e){return Qe(e)?e:I(e,{max:59})}function Y(e,{min:s,max:n,step:c}){let r=parseInt(e,10);return isNaN(r)?"00":(r+=c,I(String(r),{min:s,max:n,loop:!0}))}function We(e,s){return Y(e,{min:0,max:23,step:s})}function qe(e,s){return Y(e,{min:1,max:12,step:s})}function Z(e,s){return Y(e,{min:0,max:59,step:s})}function Ge(e,s){const n=A(s);return e.setMinutes(parseInt(n,10)),e}function Je(e,s){const n=A(s);return e.setSeconds(parseInt(n,10)),e}function Xe(e,s){const n=ae(s);return e.setHours(parseInt(n,10)),e}function Ze(e,s,n){const c=parseInt(ce(s),10),r=st(c,n);return e.setHours(r),e}function U(e,s,n,c){switch(n){case"minutes":return Ge(e,s);case"seconds":return Je(e,s);case"hours":return Xe(e,s);case"12hours":return c?Ze(e,s,c):e;default:return e}}function et(e,s){if(!e)return"00";switch(s){case"minutes":return A(String(e.getMinutes()));case"seconds":return A(String(e.getSeconds()));case"hours":return ae(String(e.getHours()));case"12hours":const n=ie(e.getHours());return ce(String(n));default:return"00"}}function tt(e,s,n){switch(n){case"minutes":return Z(e,s);case"seconds":return Z(e,s);case"hours":return We(e,s);case"12hours":return qe(e,s);default:return"00"}}function st(e,s){return s==="PM"?e<=11?e+12:e:s==="AM"&&e===12?0:e}function ie(e){return e===0||e===12?"12":e>=22?`${e-12}`:e%12>9?`${e}`:`0${e%12}`}function nt(e){return Array.from({length:12},(s,n)=>({value:n,label:T(new Date(2021,n),"MMMM",{locale:e})}))}function rt(e,s=50){const n=new Date;return Array.from({length:s*2+1},(c,r)=>({value:n.getFullYear()-s+r,label:(n.getFullYear()-s+r).toString()}))}function oe({className:e,classNames:s,showOutsideDays:n=!0,yearRange:c=50,...r}){const u=m.useMemo(()=>nt(r.locale||F),[]),o=m.useMemo(()=>rt(r.locale||F,c),[]);return t.jsx(Se,{showOutsideDays:n,className:N("p-3",e),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 justify-center",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:N(B({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:N(B({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...s},components:{IconLeft:({...d})=>t.jsx(we,{...d,className:"h-4 w-4"}),IconRight:({...d})=>t.jsx(be,{...d,className:"h-4 w-4"}),CaptionLabel:({displayMonth:d})=>t.jsxs("div",{className:"inline-flex gap-2",children:[t.jsxs(E,{defaultValue:d.getMonth().toString(),onValueChange:l=>{var h;const i=new Date(d);i.setMonth(parseInt(l,10)),(h=r.onMonthChange)==null||h.call(r,i)},children:[t.jsx(R,{className:"w-fit border-none p-0 focus:bg-accent focus:text-accent-foreground",children:t.jsx($,{})}),t.jsx(K,{children:u.map(l=>t.jsx(v,{value:l.value.toString(),children:l.label},l.value))})]}),t.jsxs(E,{defaultValue:d.getFullYear().toString(),onValueChange:l=>{var h;const i=new Date(d);i.setFullYear(parseInt(l,10)),(h=r.onMonthChange)==null||h.call(r,i)},children:[t.jsx(R,{className:"w-fit border-none p-0 focus:bg-accent focus:text-accent-foreground",children:t.jsx($,{})}),t.jsx(K,{children:o.map(l=>t.jsx(v,{value:l.value.toString(),children:l.label},l.value))})]})]})},...r})}oe.displayName="Calendar";const le=m.forwardRef(({period:e,setPeriod:s,date:n,onDateChange:c,onLeftFocus:r,onRightFocus:u},o)=>{const d=i=>{i.key==="ArrowRight"&&(u==null||u()),i.key==="ArrowLeft"&&(r==null||r())},l=i=>{if(s==null||s(i),n){const h=new Date(n),a=ie(n.getHours());c==null||c(U(h,a.toString(),"12hours",e==="AM"?"PM":"AM"))}};return t.jsx("div",{className:"flex h-10 items-center",children:t.jsxs(E,{defaultValue:e,onValueChange:i=>l(i),children:[t.jsx(R,{ref:o,className:"w-[65px] focus:bg-accent focus:text-accent-foreground",onKeyDown:d,children:t.jsx($,{})}),t.jsxs(K,{children:[t.jsx(v,{value:"AM",children:"AM"}),t.jsx(v,{value:"PM",children:"PM"})]})]})})});le.displayName="TimePeriodSelect";const k=m.forwardRef(({className:e,type:s="tel",value:n,id:c,name:r,date:u=new Date(new Date().setHours(0,0,0,0)),onDateChange:o,onChange:d,onKeyDown:l,picker:i,period:h,onLeftFocus:a,onRightFocus:p,...j},y)=>{const[f,g]=m.useState(!1),[w,S]=m.useState("0");m.useEffect(()=>{if(f){const x=setTimeout(()=>{g(!1)},2e3);return()=>clearTimeout(x)}},[f]);const b=m.useMemo(()=>et(u,i),[u,i]),me=x=>i==="12hours"&&f&&b.slice(1,2)==="1"&&w==="0"?"0"+x:f?b.slice(1,2)+x:"0"+x,fe=x=>{if(x.key!=="Tab"){if(x.preventDefault(),x.key==="ArrowRight"&&(p==null||p()),x.key==="ArrowLeft"&&(a==null||a()),["ArrowUp","ArrowDown"].includes(x.key)){const P=x.key==="ArrowUp"?1:-1,_=tt(b,P,i);f&&g(!1);const V=u?new Date(u):new Date;o==null||o(U(V,_,i,h))}if(x.key>="0"&&x.key<="9"){i==="12hours"&&S(x.key);const P=me(x.key);f&&(p==null||p()),g(V=>!V);const _=u?new Date(u):new Date;o==null||o(U(_,P,i,h))}}};return t.jsx(je,{ref:y,id:c||i,name:r||i,className:N("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",e),value:n||b,onChange:x=>{x.preventDefault(),d==null||d(x)},type:s,inputMode:"decimal",onKeyDown:x=>{l==null||l(x),fe(x)},...j})});k.displayName="TimePickerInput";const ue=m.forwardRef(({date:e,onChange:s,hourCycle:n=24,granularity:c="second"},r)=>{const u=m.useRef(null),o=m.useRef(null),d=m.useRef(null),l=m.useRef(null),[i,h]=m.useState(e&&e.getHours()>=12?"PM":"AM");return m.useImperativeHandle(r,()=>({minuteRef:u.current,hourRef:o.current,secondRef:d.current,periodRef:l.current}),[u,o,d]),t.jsxs("div",{className:"flex items-center justify-center gap-2",children:[t.jsx("label",{htmlFor:"datetime-picker-hour-input",className:"cursor-pointer",children:t.jsx(Fe,{className:"mr-2 h-4 w-4"})}),t.jsx(k,{picker:n===24?"hours":"12hours",date:e,id:"datetime-picker-hour-input",onDateChange:s,ref:o,period:i,onRightFocus:()=>{var a;return(a=u.current)==null?void 0:a.focus()}}),(c==="minute"||c==="second")&&t.jsxs(t.Fragment,{children:[":",t.jsx(k,{picker:"minutes",date:e,onDateChange:s,ref:u,onLeftFocus:()=>{var a;return(a=o.current)==null?void 0:a.focus()},onRightFocus:()=>{var a;return(a=d.current)==null?void 0:a.focus()}})]}),c==="second"&&t.jsxs(t.Fragment,{children:[":",t.jsx(k,{picker:"seconds",date:e,onDateChange:s,ref:d,onLeftFocus:()=>{var a;return(a=u.current)==null?void 0:a.focus()},onRightFocus:()=>{var a;return(a=l.current)==null?void 0:a.focus()}})]}),n===12&&t.jsx("div",{className:"grid gap-1 text-center",children:t.jsx(le,{period:i,setPeriod:h,date:e,onDateChange:a=>{s==null||s(a),a&&(a==null?void 0:a.getHours())>=12?h("PM"):h("AM")},ref:l,onLeftFocus:()=>{var a;return(a=d.current)==null?void 0:a.focus()}})})]})});ue.displayName="TimePicker";const de=m.forwardRef(({locale:e=F,value:s,onChange:n,hourCycle:c=24,yearRange:r=50,disabled:u=!1,displayFormat:o,granularity:d="second",placeholder:l="Pick a date",...i},h)=>{const[a,p]=m.useState(s??new Date),j=m.useRef(null),y=g=>{if(!g)return;if(!s){n==null||n(g),p(g);return}const S=(g.getTime()-s.getTime())/(1e3*60*60*24),b=Ue(s,{days:Math.ceil(S)});n==null||n(b),p(b)};m.useImperativeHandle(h,()=>({...j.current,value:s}),[s]);const f={hour24:(o==null?void 0:o.hour24)??"PPP HH:mm:ss",hour12:(o==null?void 0:o.hour12)??"PP hh:mm:ss b"};return t.jsxs(ye,{children:[t.jsx(te,{asChild:!0,disabled:u,children:t.jsxs(M,{variant:"outline",className:N("w-[280px] justify-start text-left font-normal",!s&&"text-muted-foreground"),ref:j,children:[t.jsx(se,{className:"mr-2 h-4 w-4"}),s?T(s,c===24?f.hour24:f.hour12,{locale:e}):t.jsx("span",{children:l})]})}),t.jsxs(ne,{className:"w-auto p-0",children:[t.jsx(oe,{mode:"single",selected:s,month:a,onSelect:g=>y(g),onMonthChange:y,initialFocus:!0,yearRange:r,locale:e,...i}),d!=="day"&&t.jsx("div",{className:"border-t border-border p-3",children:t.jsx(ue,{onChange:n,date:s,hourCycle:c,granularity:d})})]})]})});de.displayName="DateTimePicker";const at=Ne.injectEndpoints({endpoints:e=>({getAttendanceList:e.query({query:s=>`attendances?${s}`,providesTags:["attendance-list"]}),createAttendanceCheckIn:e.mutation({query:s=>({url:"attendance-check-in",method:"POST",body:s}),invalidatesTags:["attendance-list"]}),createAttendanceCheckOut:e.mutation({query:s=>({url:"attendance-check-out",method:"POST",body:s}),invalidatesTags:["attendance-list"]})}),overrideExisting:!1}),{useGetAttendanceListQuery:ct,useCreateAttendanceCheckInMutation:it,useCreateAttendanceCheckOutMutation:ot}=at;function ee({tab:e,modalClose:s}){const[n,c]=m.useState([]),[r,u]=m.useState(""),{data:o,isLoading:d}=ke(`per_page=15&page=1&search=${r}`),[l,{isLoading:i}]=it(),[h,{isLoading:a}]=ot(),p=ve({defaultValues:{}}),j=async f=>{var w;return u(f),((w=o==null?void 0:o.data)==null?void 0:w.map(S=>({value:String(S.id),label:S.first_name+" "+S.last_name+" ("+S.id+")"})))||[]},y=async f=>{try{e==="check-in"?(await l(f).unwrap(),Q.success("CheckIn created successfully!")):(await h(f).unwrap(),Q.success("CheckOut created successfully!")),s()}catch(g){console.error("Error recording attendance:",g),Ie(g)}};return t.jsx(t.Fragment,{children:d?t.jsx("div",{className:"h-56",children:t.jsx(re,{})}):t.jsx(Ae,{...p,children:t.jsxs("form",{onSubmit:p.handleSubmit(y),className:"w-full space-y-3",children:[t.jsx(H,{control:p.control,name:"employee_ids",render:({field:f})=>t.jsxs(C,{children:[t.jsx(D,{children:"Employee Name"}),t.jsx(O,{children:t.jsx(Me,{...f,value:n,onSearch:j,onChange:g=>{c(g),f.onChange(g.map(w=>parseInt(w.value)))},hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:t.jsx("span",{children:"Loading..."}),emptyIndicator:t.jsx("span",{children:"No options found"})})}),t.jsx(L,{})]})}),t.jsx(H,{control:p.control,name:"date_time",render:({field:f})=>t.jsxs(C,{children:[t.jsx(D,{children:"Punch Time"}),t.jsx(O,{className:"",children:t.jsx(de,{...f,displayFormat:{hour12:"yyyy/MM/dd h:mm a"},value:f.value,onChange:f.onChange,granularity:"minute",hourCycle:12})}),t.jsx(L,{})]})}),t.jsx(H,{control:p.control,name:"note",render:()=>t.jsxs(C,{children:[t.jsx(D,{children:"Note"}),t.jsx(O,{children:t.jsx(Te,{...p.register("note")})}),t.jsx(L,{})]})}),t.jsx("div",{children:t.jsx(M,{variant:e==="check-in"?"default":"destructive",type:"submit",className:"w-full mt-4",disabled:i||a,children:i||a?"Submitting...":e==="check-in"?"Check In":"Check Out"})})]})})})}function lt({selectedDate:e,setSelectedDate:s,selectedDepartment:n,setSelectedDepartment:c}){const{data:r}=Pe(""),[u,o]=m.useState(!1);return t.jsx(_e,{className:"w-full p-5",children:t.jsxs("div",{className:"flex gap-4",children:[t.jsx("div",{className:"w-[280px]",children:t.jsxs(Ve,{open:u,onOpenChange:o,children:[t.jsx(te,{asChild:!0,className:"h-9",children:t.jsxs(M,{variant:"outline",className:`w-full justify-start text-left font-normal ${!e&&"text-muted-foreground"}`,children:[e?T(e,"PP"):"Pick a date",t.jsx(se,{className:"ml-auto h-4 w-4 opacity-50"})]})}),t.jsx(ne,{className:"w-auto p-0",align:"start",children:t.jsx(He,{mode:"single",selected:e,onSelect:s,initialFocus:!0})})]})}),t.jsx(Ce,{items:(r==null?void 0:r.data)||[],labelKey:"name",valueKey:"id",value:n,placeholder:"Select Department",onSelect:c})]})})}const mt=()=>{const[e,s]=m.useState("check-in"),[n,c]=m.useState(!1),[r,u]=m.useState(),[o,d]=m.useState(void 0),[l,i]=m.useState({pageIndex:0,pageSize:10}),h=new URLSearchParams({date:r&&T(r,"yyyy-MM-dd")||"",per_page:l.pageSize.toString(),page:l.pageIndex.toString()}),{data:a,isLoading:p}=ct(h.toString()),j=(a==null?void 0:a.data)||[],y=a==null?void 0:a.meta;return p?t.jsx(re,{}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex flex-col",children:t.jsxs("div",{className:"flex-1 space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx(De,{title:"Attendance List",description:"Manage job apply for your business"}),t.jsxs(M,{onClick:()=>c(!0),size:"sm",children:[t.jsx(Oe,{className:"mr-2 h-4 w-4"})," Add Attendance"]})]}),t.jsx(lt,{selectedDate:r,setSelectedDate:u,selectedDepartment:o,setSelectedDepartment:d}),t.jsx(Le,{}),j.length>0?t.jsx(Ee,{columns:Ye,data:j,paginationInfo:y,pagination:l,setPagination:i,className:"py-2 px-4"}):t.jsx("div",{className:"grid place-items-center min-h-[60vh]",children:t.jsx("p",{className:"text-xl",children:"No attendance records found for the selected date or department."})})]})}),n&&t.jsx(Re,{title:"Add Attendance List",isOpen:n,toggleModal:()=>c(!1),className:"w-fit",children:t.jsxs($e,{defaultValue:e,onValueChange:f=>s(f),className:"w-[400px] mx-auto",children:[t.jsxs(Ke,{className:"grid w-full grid-cols-2 my-2",children:[t.jsx(W,{value:"check-in",children:"Check In"}),t.jsx(W,{value:"check-out",children:"Check Out"})]}),t.jsxs(q,{value:"check-in",children:[t.jsx(G,{children:t.jsx(J,{children:"Check In"})}),t.jsx(X,{className:"space-y-2",children:t.jsx("div",{className:"space-y-1",children:t.jsx(ee,{modalClose:()=>c(!1),tab:e})})})]}),t.jsxs(q,{value:"check-out",children:[t.jsx(G,{children:t.jsx(J,{children:"Check Out"})}),t.jsx(X,{className:"space-y-2",children:t.jsx("div",{className:"space-y-1",children:t.jsx(ee,{modalClose:()=>c(!1),tab:e})})})]})]})})]})};export{mt as default};
