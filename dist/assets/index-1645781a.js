<<<<<<<< HEAD:dist/assets/index-3becd000.js
import{r as c,a as e,K as H,Q as I,_ as o,$ as t,a1 as g,ad as b,a0 as h,a2 as x,y as C,z as w,B as y,A as N,aD as F,D,E as M,aK as W,V as $,ae as z,Z as B,a3 as J}from"./index-76f7bfce.js";import{S as K}from"./separator-a74bb518.js";import{S as R}from"./save-all-e357a98a.js";const Q=[{id:"is-foreign-leave-allowed",label:"Is Foreign Leave Allowed"},{id:"allow-muliple-application",label:"Allow Muliple Application?"},{id:"allow-responsibility-reliever-on-leave",label:"Allow Responsibility reliever on leave?"},{id:"is-exist-multiple-approver-hierarchy",label:"Is exist Multiple Approver Hierarchy"},{id:"enable-extra-day-compention",label:"Enable Extra day compention"},{id:"allow-half-day-leave",label:"Allow Half day leave?"},{id:"allow-multiple-visit-in-same-date",label:"Allow Multiple visit in same date?"},{id:"can-change-approver",label:"Can change approver"},{id:"will-other-approvers-notify-on-fully-approval-or-rejection-of-an-application",label:"Will other approvers notify on fully approval or rejection of an application?"},{id:"other-than-leave-compensate-extra-days-with-salary",label:"Other than leave, compensate extra days with salary"}],v=[{id:1,value:"V",label:"Visit(V)"},{id:2,value:"L",label:"Leave(V)"},{id:3,value:"H",label:"Holiday(H)"},{id:4,value:"W",label:"Weekend(W)"}];function Z({form:s}){const[p,m]=c.useState([]),[k,A]=c.useState(""),[P,f]=c.useState(!1),[T,S]=c.useState(!1),[r,O]=c.useState(null),[i,E]=c.useState(null);console.log("Form state:",s.getValues()),console.log("From Date:",r),console.log("To Date:",i);const L=a=>{a&&(O(a),console.log("Selected From Date:",a),f(!1))},V=a=>{a&&(E(a),console.log("Selected To Date:",a),S(!1))};console.log(r,i);const _=async a=>(A(a),(v==null?void 0:v.map(n=>({value:String(n.id),label:n.label})))||[]);return console.log(k),e.jsx(H,{className:"max-w-4xl",children:e.jsxs(I,{className:"flex flex-col gap-6 pt-6",children:[e.jsx(o,{control:s.control,name:"items",render:()=>e.jsxs(t,{className:"grid grid-cols-2 gap-x-6 gap-y-4 items-start space-y-0",children:[Q.map(a=>e.jsx(o,{control:s.control,name:"items",render:({field:l})=>{var n;return e.jsxs(t,{className:"flex items-start gap-x-3 !space-y-0",children:[e.jsx(g,{children:e.jsx(b,{checked:(n=l.value)==null?void 0:n.includes(a.id),onCheckedChange:u=>{var d;return u?l.onChange([...l.value,a.id]):l.onChange((d=l.value)==null?void 0:d.filter(j=>j!==a.id))}})}),e.jsx(h,{className:"font-normal",children:a.label})]},a.id)}},a.id)),e.jsx(x,{})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsx(o,{control:s.control,name:"start_month",render:({field:a})=>e.jsxs(t,{children:[e.jsx(h,{children:"Select Start Month"}),e.jsxs(C,{open:P,onOpenChange:f,children:[e.jsx(w,{asChild:!0,children:e.jsxs(y,{variant:"outline",className:`w-full justify-start text-left font-normal ${r?"":"text-muted-foreground"}`,children:[r?N(r,"MMMM yyyy"):"Pick a date",e.jsx(F,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(D,{className:"w-auto p-0",align:"start",children:e.jsx(M,{mode:"single",selected:r??void 0,onSelect:l=>{L(l),a.onChange(l)},initialFocus:!0})})]}),e.jsx(x,{})]})}),e.jsx(o,{control:s.control,name:"end_month",render:({field:a})=>e.jsxs(t,{children:[e.jsx(h,{children:"Select End Month"}),e.jsxs(C,{open:T,onOpenChange:S,children:[e.jsx(w,{asChild:!0,children:e.jsxs(y,{variant:"outline",className:`w-full justify-start text-left font-normal ${i?"":"text-muted-foreground"}`,children:[i?N(i,"MMMM yyyy"):"Pick a date",e.jsx(F,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(D,{className:"w-auto p-0",align:"start",children:e.jsx(M,{mode:"single",selected:i??void 0,onSelect:l=>{V(l),a.onChange(l)},initialFocus:!0})})]}),e.jsx(x,{})]})}),e.jsxs("div",{className:"space-y-2 col-span-2",children:[e.jsx(o,{control:s.control,name:"attendance_flags",render:({field:a})=>e.jsxs(t,{children:[e.jsx(h,{children:"Attendance flags that will be counted for extra work"}),e.jsx(g,{children:e.jsx(W,{...a,value:p,onSearch:_,onChange:l=>{m(l),a.onChange(l.map(n=>parseInt(n.value)))},hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})}),e.jsx(x,{})]})}),e.jsx(o,{control:s.control,name:"items",render:()=>e.jsxs(t,{children:[[{id:"consider-attendance-for-visit",label:"Consider attendance for visit"}].map(a=>e.jsx(o,{control:s.control,name:"items",render:({field:l})=>{var n;return e.jsxs(t,{className:"flex items-start gap-x-3 !space-y-0",children:[e.jsx(g,{children:e.jsx(b,{checked:(n=l.value)==null?void 0:n.includes(a.id),onCheckedChange:u=>{var d;return u?l.onChange([...l.value,a.id]):l.onChange((d=l.value)==null?void 0:d.filter(j=>j!==a.id))}})}),e.jsx(h,{className:"font-normal",children:a.label})]},a.id)}},a.id)),e.jsx(x,{})]})})]})]})]})})}const X=()=>{const s=$({defaultValues:{items:[],attendance_flags:[],start_month:"",end_month:""}});function p(m){console.log(m),J.success(JSON.stringify(m))}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Leave Policy",description:"Manage your holidays for you organization"}),e.jsxs(y,{size:"sm",onClick:s.handleSubmit(p),children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Save Policy"]})]}),e.jsx(K,{}),e.jsx(B,{...s,children:e.jsx("form",{onSubmit:s.handleSubmit(p),className:"flex flex-col gap-6 items-center",children:e.jsx(Z,{form:s})})})]})})})};export{X as default};
========
import{r as c,a as e,K as H,Q as I,_ as o,$ as t,a1 as g,ad as b,a0 as h,a2 as x,y as C,z as w,B as y,A as N,aD as F,D,E as M,aK as W,V as $,ae as z,Z as B,a3 as J}from"./index-3f8f5d35.js";import{S as K}from"./separator-f417fa00.js";import{S as R}from"./save-all-3a0b8c4d.js";const Q=[{id:"is-foreign-leave-allowed",label:"Is Foreign Leave Allowed"},{id:"allow-muliple-application",label:"Allow Muliple Application?"},{id:"allow-responsibility-reliever-on-leave",label:"Allow Responsibility reliever on leave?"},{id:"is-exist-multiple-approver-hierarchy",label:"Is exist Multiple Approver Hierarchy"},{id:"enable-extra-day-compention",label:"Enable Extra day compention"},{id:"allow-half-day-leave",label:"Allow Half day leave?"},{id:"allow-multiple-visit-in-same-date",label:"Allow Multiple visit in same date?"},{id:"can-change-approver",label:"Can change approver"},{id:"will-other-approvers-notify-on-fully-approval-or-rejection-of-an-application",label:"Will other approvers notify on fully approval or rejection of an application?"},{id:"other-than-leave-compensate-extra-days-with-salary",label:"Other than leave, compensate extra days with salary"}],v=[{id:1,value:"V",label:"Visit(V)"},{id:2,value:"L",label:"Leave(V)"},{id:3,value:"H",label:"Holiday(H)"},{id:4,value:"W",label:"Weekend(W)"}];function Z({form:s}){const[p,m]=c.useState([]),[k,A]=c.useState(""),[P,f]=c.useState(!1),[T,S]=c.useState(!1),[r,O]=c.useState(null),[i,E]=c.useState(null);console.log("Form state:",s.getValues()),console.log("From Date:",r),console.log("To Date:",i);const L=a=>{a&&(O(a),console.log("Selected From Date:",a),f(!1))},V=a=>{a&&(E(a),console.log("Selected To Date:",a),S(!1))};console.log(r,i);const _=async a=>(A(a),(v==null?void 0:v.map(n=>({value:String(n.id),label:n.label})))||[]);return console.log(k),e.jsx(H,{className:"max-w-4xl",children:e.jsxs(I,{className:"flex flex-col gap-6 pt-6",children:[e.jsx(o,{control:s.control,name:"items",render:()=>e.jsxs(t,{className:"grid grid-cols-2 gap-x-6 gap-y-4 items-start space-y-0",children:[Q.map(a=>e.jsx(o,{control:s.control,name:"items",render:({field:l})=>{var n;return e.jsxs(t,{className:"flex items-start gap-x-3 !space-y-0",children:[e.jsx(g,{children:e.jsx(b,{checked:(n=l.value)==null?void 0:n.includes(a.id),onCheckedChange:u=>{var d;return u?l.onChange([...l.value,a.id]):l.onChange((d=l.value)==null?void 0:d.filter(j=>j!==a.id))}})}),e.jsx(h,{className:"font-normal",children:a.label})]},a.id)}},a.id)),e.jsx(x,{})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsx(o,{control:s.control,name:"start_month",render:({field:a})=>e.jsxs(t,{children:[e.jsx(h,{children:"Select Start Month"}),e.jsxs(C,{open:P,onOpenChange:f,children:[e.jsx(w,{asChild:!0,children:e.jsxs(y,{variant:"outline",className:`w-full justify-start text-left font-normal ${r?"":"text-muted-foreground"}`,children:[r?N(r,"MMMM yyyy"):"Pick a date",e.jsx(F,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(D,{className:"w-auto p-0",align:"start",children:e.jsx(M,{mode:"single",selected:r??void 0,onSelect:l=>{L(l),a.onChange(l)},initialFocus:!0})})]}),e.jsx(x,{})]})}),e.jsx(o,{control:s.control,name:"end_month",render:({field:a})=>e.jsxs(t,{children:[e.jsx(h,{children:"Select End Month"}),e.jsxs(C,{open:T,onOpenChange:S,children:[e.jsx(w,{asChild:!0,children:e.jsxs(y,{variant:"outline",className:`w-full justify-start text-left font-normal ${i?"":"text-muted-foreground"}`,children:[i?N(i,"MMMM yyyy"):"Pick a date",e.jsx(F,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(D,{className:"w-auto p-0",align:"start",children:e.jsx(M,{mode:"single",selected:i??void 0,onSelect:l=>{V(l),a.onChange(l)},initialFocus:!0})})]}),e.jsx(x,{})]})}),e.jsxs("div",{className:"space-y-2 col-span-2",children:[e.jsx(o,{control:s.control,name:"attendance_flags",render:({field:a})=>e.jsxs(t,{children:[e.jsx(h,{children:"Attendance flags that will be counted for extra work"}),e.jsx(g,{children:e.jsx(W,{...a,value:p,onSearch:_,onChange:l=>{m(l),a.onChange(l.map(n=>parseInt(n.value)))},hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})}),e.jsx(x,{})]})}),e.jsx(o,{control:s.control,name:"items",render:()=>e.jsxs(t,{children:[[{id:"consider-attendance-for-visit",label:"Consider attendance for visit"}].map(a=>e.jsx(o,{control:s.control,name:"items",render:({field:l})=>{var n;return e.jsxs(t,{className:"flex items-start gap-x-3 !space-y-0",children:[e.jsx(g,{children:e.jsx(b,{checked:(n=l.value)==null?void 0:n.includes(a.id),onCheckedChange:u=>{var d;return u?l.onChange([...l.value,a.id]):l.onChange((d=l.value)==null?void 0:d.filter(j=>j!==a.id))}})}),e.jsx(h,{className:"font-normal",children:a.label})]},a.id)}},a.id)),e.jsx(x,{})]})})]})]})]})})}const X=()=>{const s=$({defaultValues:{items:[],attendance_flags:[],start_month:"",end_month:""}});function p(m){console.log(m),J.success(JSON.stringify(m))}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Leave Policy",description:"Manage your holidays for you organization"}),e.jsxs(y,{size:"sm",onClick:s.handleSubmit(p),children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Save Policy"]})]}),e.jsx(K,{}),e.jsx(B,{...s,children:e.jsx("form",{onSubmit:s.handleSubmit(p),className:"flex flex-col gap-6 items-center",children:e.jsx(Z,{form:s})})})]})})})};export{X as default};
>>>>>>>> main:dist/assets/index-1645781a.js
