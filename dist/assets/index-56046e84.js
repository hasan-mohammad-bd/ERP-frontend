import{c9 as be,ca as we,x as ve,cb as Ne,a as e,V as ce,c8 as Se,r as m,Z as le,_ as v,$ as N,a0 as S,a1 as _,I as k,a2 as M,aj as P,ak as I,al as C,am as V,an as T,aa as oe,B as b,t as ie,a5 as $,a6 as J,a7 as z,a8 as _e,a9 as B,ab as Me,ac as U,a3 as Te,ad as W,b as A,y as Ae,z as ke,aD as De,A as de,D as Pe,cc as Y,cd as Ie,o as Z,ce as Ce,bx as Ve,aE as He,Y as Oe,aK as Le,aq as Re,ae as Ee,af as Ke,ag as $e,F as Je,G as ze,H as Q,J as X,M as ee,N as se,Q as te}from"./index-dac9cfc2.js";import{c as Be}from"./index-57862c7a.js";import{Z as Ue}from"./zoom-in-560caee4.js";import{C as Ye}from"./clock-5163f674.js";function Fe(s,t){const{years:n=0,months:c=0,weeks:r=0,days:d=0,hours:u=0,minutes:l=0,seconds:o=0}=t,i=be(s),f=c||n?we(i,c+n*12):i,a=d||r?ve(f,d+r*7):f,y=l+u*60,j=(o+y*60)*1e3;return Ne(s,a.getTime()+j)}const Ge=({data:s})=>e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("p",{className:"font-semibold",children:"Status:"}),e.jsx("div",{children:s.policy_name})]})});function qe({modalClose:s,data:t}){const n=ce({defaultValues:{policy_name:"",in_time:"",working_hours:"",delay_buffer:"",ex_delay_buffer:"",break_time:"",effect_from:""}});async function c(l){console.log("Form Submitted:",l),s()}const{fields:r,append:d,remove:u}=Se({control:n.control,name:"details_leave_type"});return m.useEffect(()=>{r.length===0&&d("")},[r,d]),e.jsx(e.Fragment,{children:e.jsx(le,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(c),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1",children:[e.jsx(v,{control:n.control,name:"leave_group_name",render:({field:l})=>e.jsxs(N,{children:[e.jsx(S,{children:"Leave Group Name"}),e.jsx(_,{children:e.jsx(k,{className:"",placeholder:"Enter Leave Group Name",...l})}),e.jsx(M,{})]})}),r.map((l,o)=>e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("div",{className:"mr-2 w-full",children:e.jsx(v,{control:n.control,name:`details_leave_type.${o}.leave_type`,render:({field:i})=>e.jsxs(N,{children:[o===0?e.jsx(S,{children:"Leave Type"}):null,e.jsxs(P,{onValueChange:i.onChange,children:[e.jsx(_,{children:e.jsx(I,{children:e.jsx(C,{placeholder:"Select Leave Type"})})}),e.jsxs(V,{children:[e.jsx(T,{value:"1",children:"Leave Type 1"}),e.jsx(T,{value:"2",children:"Leave Type 2"})]})]}),e.jsx(M,{})]})},l.id)}),e.jsx("div",{children:e.jsx(v,{control:n.control,name:`details_leave_type.${o}.leave_count`,render:({field:i})=>e.jsxs(N,{children:[o===0?e.jsx(S,{children:"Leave Count"}):null,e.jsx(_,{children:e.jsx(k,{type:"number",className:"",placeholder:"Enter Leave Count",...i})}),e.jsx(M,{})]})},l.id)}),e.jsx("span",{className:"mt-auto mb-3",onClick:()=>u(o),children:e.jsx(oe,{size:16,color:"red",className:"ml-2"})})]},o)),e.jsxs(b,{variant:"outline",className:"border border-dashed border-gray-700 w-full",type:"button",onClick:()=>d({leave_type:"",leave_count:0}),children:[e.jsx(ie,{size:16})," ",e.jsx("span",{className:"ml-2",children:"Add Line"})]}),e.jsx(v,{control:n.control,name:"employee_count",render:({field:l})=>e.jsxs(N,{children:[e.jsx(S,{children:"Employee Count"}),e.jsx(_,{children:e.jsx(k,{type:"number",className:"",placeholder:"Enter Employee Count",...l})}),e.jsx(M,{})]})})]}),e.jsx("div",{className:"text-right",children:e.jsx(b,{variant:"default",type:"submit",className:"w-fit mt-4",children:t?"Update":"Add"})})]})})})}function We({data:s}){const[t,n]=m.useState(!1),[c,r]=m.useState(!1),[d,u]=m.useState(!1),[l,{isLoading:o}]=Be(),i=async f=>{try{await l(f),Te.success("Job deleted successfully"),n(!1)}catch(a){console.log(a)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx($,{children:e.jsxs(J,{children:[e.jsx(z,{asChild:!0,children:e.jsx(b,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>r(!0),children:e.jsx(_e,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx($,{children:e.jsxs(J,{children:[e.jsx(z,{asChild:!0,children:e.jsx(b,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{u(!0)},children:e.jsx(Ue,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx($,{children:e.jsxs(J,{children:[e.jsx(z,{asChild:!0,children:e.jsx(b,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{n(!0)},children:e.jsx(oe,{className:"h-4 w-4 text-foreground"})})}),e.jsx(B,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(Me,{title:"Are you sure?",description:"This action cannot be undone.",name:s.policy_name,isOpen:t,onClose:()=>n(!1),onConfirm:()=>i(s.id),loading:o}),c&&e.jsx(U,{title:"Update Job",isOpen:c,toggleModal:()=>r(!1),className:"w-[90%] max-w-6xl",children:e.jsx(qe,{data:s,modalClose:()=>r(!1)})}),d&&e.jsx(U,{title:"Job Details",isOpen:d,toggleModal:()=>u(!1),className:"w-[90%] max-w-6xl",children:e.jsx(Ge,{data:s})})]})}const Ze=[{id:"select",header:({table:s})=>e.jsx(W,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:t=>s.toggleAllPageRowsSelected(!!t),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(W,{checked:s.getIsSelected(),onCheckedChange:t=>s.toggleSelected(!!t),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"employee_id",header:"Employee ID"},{accessorKey:"employee_name",header:"Employee Name"},{accessorKey:"department",header:"Department"},{accessorKey:"branch",header:"Branch"},{accessorKey:"date",header:"Date"},{accessorKey:"day",header:"Day"},{accessorKey:"out_time",header:"Out Time"},{accessorKey:"status",header:"Status"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(We,{data:s.original})}];function Qe(s){return/^(0[0-9]|1[0-9]|2[0-3])$/.test(s)}function Xe(s){return/^(0[1-9]|1[0-2])$/.test(s)}function es(s){return/^[0-5][0-9]$/.test(s)}function O(s,{max:t,min:n=0,loop:c=!1}){let r=parseInt(s,10);return isNaN(r)?"00":(c?(r>t&&(r=n),r<n&&(r=t)):(r>t&&(r=t),r<n&&(r=n)),r.toString().padStart(2,"0"))}function ue(s){return Qe(s)?s:O(s,{max:23})}function me(s){return Xe(s)?s:O(s,{min:1,max:12})}function H(s){return es(s)?s:O(s,{max:59})}function G(s,{min:t,max:n,step:c}){let r=parseInt(s,10);return isNaN(r)?"00":(r+=c,O(String(r),{min:t,max:n,loop:!0}))}function ss(s,t){return G(s,{min:0,max:23,step:t})}function ts(s,t){return G(s,{min:1,max:12,step:t})}function ne(s,t){return G(s,{min:0,max:59,step:t})}function ns(s,t){const n=H(t);return s.setMinutes(parseInt(n,10)),s}function rs(s,t){const n=H(t);return s.setSeconds(parseInt(n,10)),s}function as(s,t){const n=ue(t);return s.setHours(parseInt(n,10)),s}function cs(s,t,n){const c=parseInt(me(t),10),r=is(c,n);return s.setHours(r),s}function F(s,t,n,c){switch(n){case"minutes":return ns(s,t);case"seconds":return rs(s,t);case"hours":return as(s,t);case"12hours":return c?cs(s,t,c):s;default:return s}}function ls(s,t){if(!s)return"00";switch(t){case"minutes":return H(String(s.getMinutes()));case"seconds":return H(String(s.getSeconds()));case"hours":return ue(String(s.getHours()));case"12hours":const n=fe(s.getHours());return me(String(n));default:return"00"}}function os(s,t,n){switch(n){case"minutes":return ne(s,t);case"seconds":return ne(s,t);case"hours":return ss(s,t);case"12hours":return ts(s,t);default:return"00"}}function is(s,t){return t==="PM"?s<=11?s+12:s:t==="AM"&&s===12?0:s}function fe(s){return s===0||s===12?"12":s>=22?`${s-12}`:s%12>9?`${s}`:`0${s%12}`}function ds(s){return Array.from({length:12},(t,n)=>({value:n,label:de(new Date(2021,n),"MMMM",{locale:s})}))}function us(s,t=50){const n=new Date;return Array.from({length:t*2+1},(c,r)=>({value:n.getFullYear()-t+r,label:(n.getFullYear()-t+r).toString()}))}function he({className:s,classNames:t,showOutsideDays:n=!0,yearRange:c=50,...r}){const d=m.useMemo(()=>ds(r.locale||Y),[]),u=m.useMemo(()=>us(r.locale||Y,c),[]);return e.jsx(Ie,{showOutsideDays:n,className:A("p-3",s),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 justify-center",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:A(Z({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:A(Z({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...t},components:{IconLeft:({...l})=>e.jsx(Ce,{...l,className:"h-4 w-4"}),IconRight:({...l})=>e.jsx(Ve,{...l,className:"h-4 w-4"}),CaptionLabel:({displayMonth:l})=>e.jsxs("div",{className:"inline-flex gap-2",children:[e.jsxs(P,{defaultValue:l.getMonth().toString(),onValueChange:o=>{var f;const i=new Date(l);i.setMonth(parseInt(o,10)),(f=r.onMonthChange)==null||f.call(r,i)},children:[e.jsx(I,{className:"w-fit border-none p-0 focus:bg-accent focus:text-accent-foreground",children:e.jsx(C,{})}),e.jsx(V,{children:d.map(o=>e.jsx(T,{value:o.value.toString(),children:o.label},o.value))})]}),e.jsxs(P,{defaultValue:l.getFullYear().toString(),onValueChange:o=>{var f;const i=new Date(l);i.setFullYear(parseInt(o,10)),(f=r.onMonthChange)==null||f.call(r,i)},children:[e.jsx(I,{className:"w-fit border-none p-0 focus:bg-accent focus:text-accent-foreground",children:e.jsx(C,{})}),e.jsx(V,{children:u.map(o=>e.jsx(T,{value:o.value.toString(),children:o.label},o.value))})]})]})},...r})}he.displayName="Calendar";const xe=m.forwardRef(({period:s,setPeriod:t,date:n,onDateChange:c,onLeftFocus:r,onRightFocus:d},u)=>{const l=i=>{i.key==="ArrowRight"&&(d==null||d()),i.key==="ArrowLeft"&&(r==null||r())},o=i=>{if(t==null||t(i),n){const f=new Date(n),a=fe(n.getHours());c==null||c(F(f,a.toString(),"12hours",s==="AM"?"PM":"AM"))}};return e.jsx("div",{className:"flex h-10 items-center",children:e.jsxs(P,{defaultValue:s,onValueChange:i=>o(i),children:[e.jsx(I,{ref:u,className:"w-[65px] focus:bg-accent focus:text-accent-foreground",onKeyDown:l,children:e.jsx(C,{})}),e.jsxs(V,{children:[e.jsx(T,{value:"AM",children:"AM"}),e.jsx(T,{value:"PM",children:"PM"})]})]})})});xe.displayName="TimePeriodSelect";const D=m.forwardRef(({className:s,type:t="tel",value:n,id:c,name:r,date:d=new Date(new Date().setHours(0,0,0,0)),onDateChange:u,onChange:l,onKeyDown:o,picker:i,period:f,onLeftFocus:a,onRightFocus:y,...x},j)=>{const[p,g]=m.useState(!1),[q,L]=m.useState("0");m.useEffect(()=>{if(p){const h=setTimeout(()=>{g(!1)},2e3);return()=>clearTimeout(h)}},[p]);const w=m.useMemo(()=>ls(d,i),[d,i]),ge=h=>i==="12hours"&&p&&w.slice(1,2)==="1"&&q==="0"?"0"+h:p?w.slice(1,2)+h:"0"+h,ye=h=>{if(h.key!=="Tab"){if(h.preventDefault(),h.key==="ArrowRight"&&(y==null||y()),h.key==="ArrowLeft"&&(a==null||a()),["ArrowUp","ArrowDown"].includes(h.key)){const R=h.key==="ArrowUp"?1:-1,E=os(w,R,i);p&&g(!1);const K=d?new Date(d):new Date;u==null||u(F(K,E,i,f))}if(h.key>="0"&&h.key<="9"){i==="12hours"&&L(h.key);const R=ge(h.key);p&&(y==null||y()),g(K=>!K);const E=d?new Date(d):new Date;u==null||u(F(E,R,i,f))}}};return e.jsx(k,{ref:j,id:c||i,name:r||i,className:A("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",s),value:n||w,onChange:h=>{h.preventDefault(),l==null||l(h)},type:t,inputMode:"decimal",onKeyDown:h=>{o==null||o(h),ye(h)},...x})});D.displayName="TimePickerInput";const je=m.forwardRef(({date:s,onChange:t,hourCycle:n=24,granularity:c="second"},r)=>{const d=m.useRef(null),u=m.useRef(null),l=m.useRef(null),o=m.useRef(null),[i,f]=m.useState(s&&s.getHours()>=12?"PM":"AM");return m.useImperativeHandle(r,()=>({minuteRef:d.current,hourRef:u.current,secondRef:l.current,periodRef:o.current}),[d,u,l]),e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"datetime-picker-hour-input",className:"cursor-pointer",children:e.jsx(Ye,{className:"mr-2 h-4 w-4"})}),e.jsx(D,{picker:n===24?"hours":"12hours",date:s,id:"datetime-picker-hour-input",onDateChange:t,ref:u,period:i,onRightFocus:()=>{var a;return(a=d.current)==null?void 0:a.focus()}}),(c==="minute"||c==="second")&&e.jsxs(e.Fragment,{children:[":",e.jsx(D,{picker:"minutes",date:s,onDateChange:t,ref:d,onLeftFocus:()=>{var a;return(a=u.current)==null?void 0:a.focus()},onRightFocus:()=>{var a;return(a=l.current)==null?void 0:a.focus()}})]}),c==="second"&&e.jsxs(e.Fragment,{children:[":",e.jsx(D,{picker:"seconds",date:s,onDateChange:t,ref:l,onLeftFocus:()=>{var a;return(a=d.current)==null?void 0:a.focus()},onRightFocus:()=>{var a;return(a=o.current)==null?void 0:a.focus()}})]}),n===12&&e.jsx("div",{className:"grid gap-1 text-center",children:e.jsx(xe,{period:i,setPeriod:f,date:s,onDateChange:a=>{t==null||t(a),a&&(a==null?void 0:a.getHours())>=12?f("PM"):f("AM")},ref:o,onLeftFocus:()=>{var a;return(a=l.current)==null?void 0:a.focus()}})})]})});je.displayName="TimePicker";const pe=m.forwardRef(({locale:s=Y,value:t,onChange:n,hourCycle:c=24,yearRange:r=50,disabled:d=!1,displayFormat:u,granularity:l="second",placeholder:o="Pick a date",...i},f)=>{const[a,y]=m.useState(t??new Date),x=m.useRef(null),j=g=>{if(!g)return;if(!t){n==null||n(g),y(g);return}const L=(g.getTime()-t.getTime())/(1e3*60*60*24),w=Fe(t,{days:Math.ceil(L)});n==null||n(w),y(w)};m.useImperativeHandle(f,()=>({...x.current,value:t}),[t]);const p={hour24:(u==null?void 0:u.hour24)??"PPP HH:mm:ss",hour12:(u==null?void 0:u.hour12)??"PP hh:mm:ss b"};return e.jsxs(Ae,{children:[e.jsx(ke,{asChild:!0,disabled:d,children:e.jsxs(b,{variant:"outline",className:A("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),ref:x,children:[e.jsx(De,{className:"mr-2 h-4 w-4"}),t?de(t,c===24?p.hour24:p.hour12,{locale:s}):e.jsx("span",{children:o})]})}),e.jsxs(Pe,{className:"w-auto p-0",children:[e.jsx(he,{mode:"single",selected:t,month:a,onSelect:g=>j(g),onMonthChange:j,initialFocus:!0,yearRange:r,locale:s,...i}),l!=="day"&&e.jsx("div",{className:"border-t border-border p-3",children:e.jsx(je,{onChange:n,date:t,hourCycle:c,granularity:l})})]})]})});pe.displayName="DateTimePicker";function re({tab:s,modalClose:t}){const[n,c]=m.useState([]),[r,d]=m.useState(""),[u,l]=m.useState(),{data:o,isLoading:i}=He(`per_page=15&page=1&search=${r}`),f=async x=>{var p;return d(x),((p=o==null?void 0:o.data)==null?void 0:p.map(g=>({value:String(g.id),label:g.first_name+" "+g.last_name+"("+g.id+")"})))||[]},a=ce({defaultValues:{}});async function y(x){const j={...x,attendance_type:s};t(),console.log("🚀 ~ onSubmit ~ data:",j)}return e.jsx(e.Fragment,{children:i?e.jsx("div",{className:"h-56",children:e.jsx(Oe,{})}):e.jsx(le,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(y),className:"w-full space-y-3",children:[e.jsx(v,{control:a.control,name:"employee_ids",render:({field:x})=>e.jsxs(N,{children:[e.jsx(S,{children:"Employee Name"}),e.jsx(_,{children:e.jsx(Le,{...x,value:n,onSearch:f,onChange:j=>{c(j),x.onChange(j.map(p=>parseInt(p.value)))},hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})}),e.jsx(M,{})]})}),e.jsx(v,{control:a.control,name:"date_time",render:({field:x})=>e.jsxs(N,{children:[e.jsx(S,{children:"Punch Time"}),e.jsx(_,{children:e.jsx(pe,{...x,value:u,onChange:j=>{x.onChange(j),l(j)},granularity:"minute",hourCycle:12})}),e.jsx(M,{})]})}),e.jsx(v,{control:a.control,name:"note",render:()=>e.jsxs(N,{children:[e.jsx(S,{children:"Note"}),e.jsx(_,{children:e.jsx(Re,{...a.register("note")})}),e.jsx(M,{})]})}),e.jsx("div",{children:e.jsx(b,{variant:s==="check-in"?"default":"destructive",type:"submit",className:"w-full mt-4",children:s==="check-in"?"Check In":"Check Out"})})]})})})}const ae=[{employee_id:1,employee_name:"John Doe",department:"IT",branch:"Main Branch",date:"2022-01-01",day:"Monday",out_time:"10:00 AM",status:"Present"},{employee_id:2,employee_name:" Harry Potter",department:"IT",branch:"Main Branch",date:"2022-01-01",day:"Monday",out_time:"10:00 AM",status:"Present"}],js=()=>{const[s,t]=m.useState("check-in"),[n,c]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Ee,{title:"Attendance List",description:"Manage job apply for you business"}),e.jsxs(b,{onClick:()=>c(!0),size:"sm",children:[e.jsx(ie,{className:"mr-2 h-4 w-4"})," Add Attendance"]})]}),e.jsx(Ke,{}),ae&&e.jsx("div",{children:e.jsx($e,{columns:Ze,data:ae})})]})}),n&&e.jsx(U,{title:"Add Attendance List",isOpen:n,toggleModal:()=>c(!1),className:"w-fit",children:e.jsxs(Je,{defaultValue:s,onValueChange:r=>t(r),className:"w-[400px] mx-auto",children:[e.jsxs(ze,{className:"grid w-full grid-cols-2 my-2",children:[e.jsx(Q,{value:"check-in",children:"Check In"}),e.jsx(Q,{value:"check-out",children:"Check Out"})]}),e.jsxs(X,{value:"check-in",children:[e.jsx(ee,{children:e.jsx(se,{children:"Check In"})}),e.jsx(te,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx(re,{modalClose:()=>c(!1),tab:s})})})]}),e.jsxs(X,{value:"check-out",children:[e.jsx(ee,{children:e.jsx(se,{children:"Check Out"})}),e.jsx(te,{className:"space-y-2",children:e.jsx("div",{className:"space-y-1",children:e.jsx(re,{modalClose:()=>c(!1),tab:s})})})]})]})})]})};export{js as default};
