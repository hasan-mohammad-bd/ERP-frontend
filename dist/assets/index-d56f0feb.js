import{a as e,X as A,ao as F,ap as M,aq as k,J as p,K as _,Q as h,aI as b,N as v,V as y,b2 as g,b3 as j,b4 as w,b5 as f,b7 as S,ba as E,bo as I,Y as a,r as C,D as V,aK as H,W as J,a_ as T,av as W,H as q,aw as L,ax as z}from"./index-ffb24eb6.js";import{S as U}from"./save-all-939c8400.js";const D=[{id:"foreign_leave_allowed",label:"Is Foreign Leave Allowed"},{id:"multiple_application",label:"Allow Multiple Application?"},{id:"responsibility_reliever",label:"Allow Responsibility reliever on leave?"},{id:"multiple_approver_hierarchy",label:"Is exist Multiple Approver Hierarchy"},{id:"extra_day_compensation_eligible",label:"Enable Extra day compensation"},{id:"allows_half_day_leave",label:"Allow Half day leave?"},{id:"allows_multiple_visits_same_date",label:"Allow Multiple visit on same date?"},{id:"can_approver_change",label:"Can change approver"},{id:"notify_approver",label:"Will other approvers be notified on full approval or rejection of an application?"},{id:"extra_day_salary",label:"Other than leave, compensate extra days with salary"}],O=[{id:1,value:"Visit",label:"Visit"},{id:2,value:"Leave",label:"Leave"},{id:3,value:"Holiday",label:"Holiday"},{id:4,value:"Weekend",label:"Weekend"}],N=[{value:"1",label:"January"},{value:"2",label:"February"},{value:"3",label:"March"},{value:"4",label:"April"},{value:"5",label:"May"},{value:"6",label:"June"},{value:"7",label:"July"},{value:"8",label:"August"},{value:"9",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}];function B({form:i}){const m=async t=>O.filter(l=>l.label.toLowerCase().includes(t.toLowerCase())).map(l=>({value:String(l.value),label:l.label}));return e.jsxs(A,{className:"w-full h-full ",children:[e.jsx(F,{children:e.jsx(M,{children:"Leave Policy"})}),e.jsxs(k,{className:"space-y-4",children:[e.jsx(p,{control:i.control,name:"items",render:()=>e.jsxs(_,{children:[D.map(t=>e.jsx(p,{control:i.control,name:"items",render:({field:l})=>{var r;return e.jsxs(_,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(h,{children:e.jsx(b,{checked:(r=l.value)==null?void 0:r.includes(t.id),onCheckedChange:o=>{var d;return o?l.onChange([...l.value,t.id]):l.onChange((d=l.value)==null?void 0:d.filter(n=>n!==t.id))}})}),e.jsx(v,{className:"font-normal",children:t.label})]},t.id)}},t.id)),e.jsx(y,{})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-7",children:[e.jsx(p,{control:i.control,name:"start_month",render:({field:t})=>e.jsxs(_,{className:"w-[300px]",children:[e.jsx(v,{children:"Select Start Month"}),e.jsxs(g,{onValueChange:l=>t.onChange(Number(l)),value:String(t.value),children:[e.jsx(h,{children:e.jsx(j,{children:e.jsx(w,{placeholder:"Select Start Month"})})}),e.jsx(f,{children:N.map(l=>e.jsx(S,{value:l.value,children:l.label},l.value))})]}),e.jsx(y,{})]})}),e.jsx(p,{control:i.control,name:"end_month",render:({field:t})=>e.jsxs(_,{className:"w-[300px]",children:[e.jsx(v,{children:"Select End Month"}),e.jsxs(g,{onValueChange:l=>t.onChange(Number(l)),value:String(t.value),children:[e.jsx(h,{children:e.jsx(j,{children:e.jsx(w,{placeholder:"Select End Month"})})}),e.jsx(f,{children:N.map(l=>e.jsx(S,{value:l.value,children:l.label},l.value))})]}),e.jsx(y,{})]})})]}),e.jsx(p,{control:i.control,name:"attendance_flag",render:({field:t})=>e.jsxs(_,{children:[e.jsx(v,{children:"Attendance flags that will be counted for extra work"}),e.jsx(h,{children:e.jsx(E,{...t,value:t.value,onSearch:m,onChange:l=>{t.onChange(l)},hidePlaceholderWhenSelected:!0,placeholder:"Search and select options",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})}),e.jsx(y,{})]})}),e.jsx(p,{control:i.control,name:"items",render:({field:t})=>{var l;return e.jsxs(_,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(h,{children:e.jsx(b,{checked:(l=t.value)==null?void 0:l.includes("allow_attendance_visit"),onCheckedChange:r=>{var o;return r?t.onChange([...t.value,"allow_attendance_visit"]):t.onChange((o=t.value)==null?void 0:o.filter(d=>d!=="allow_attendance_visit"))}})}),e.jsx(v,{className:"font-normal",children:"Allow Attendance Visit"})]})}})]})]})}const K=I.injectEndpoints({endpoints:i=>({getLeavePolicies:i.query({query:()=>"leave-policies",providesTags:["leave-policies"]}),updateLeavePolicy:i.mutation({query:({updateLeavePolicyFormData:m})=>({url:"leave-policies",method:"POST",body:m}),invalidatesTags:["leave-policies"]})}),overrideExisting:!1}),{useGetLeavePoliciesQuery:Q,useUpdateLeavePolicyMutation:R}=K,G=a.object({foreign_leave_allowed:a.union([a.literal(0),a.literal(1)]),multiple_application:a.union([a.literal(0),a.literal(1)]),responsibility_reliever:a.union([a.literal(0),a.literal(1)]),multiple_approver_hierarchy:a.union([a.literal(0),a.literal(1)]),extra_day_compensation_eligible:a.union([a.literal(0),a.literal(1)]),allows_half_day_leave:a.union([a.literal(0),a.literal(1)]),allows_multiple_visits_same_date:a.union([a.literal(0),a.literal(1)]),can_approver_change:a.union([a.literal(0),a.literal(1)]),notify_approver:a.union([a.literal(0),a.literal(1)]),extra_day_salary:a.union([a.literal(0),a.literal(1)]),attendance_flag:a.array(a.string()).optional(),allow_attendance_visit:a.union([a.literal(0),a.literal(1)]),start_month:a.number().int().min(1,"Start month must be at least 1").max(12,"Start month must be at most 12"),end_month:a.number().int().min(1,"Start month must be at least 1").max(12,"Start month must be at most 12")}),Z=()=>{const{data:i,isLoading:m}=Q(),[t,{isLoading:l}]=R(),r=C.useMemo(()=>(i==null?void 0:i.data)||{},[i]),o=V({defaultValues:{}});C.useEffect(()=>{var s;const n=[];i&&i.data&&(["foreign_leave_allowed","multiple_application","responsibility_reliever","multiple_approver_hierarchy","extra_day_compensation_eligible","allows_half_day_leave","allows_multiple_visits_same_date","can_approver_change","notify_approver","extra_day_salary","attendance_flag","allow_attendance_visit","start_month","end_month","user_id","organization_id"].forEach(c=>{r[c]&&n.push(c)}),o.reset({items:n,start_month:r.start_month||0,end_month:r.end_month||0,attendance_flag:((s=r.attendance_flag)==null?void 0:s.map(c=>({label:c,value:c})))||[]}))},[i,r,o]),console.log(r);const d=async n=>{var c;const s=u=>u?1:0,x={foreign_leave_allowed:s(n.items.includes("foreign_leave_allowed")),multiple_application:s(n.items.includes("multiple_application")),responsibility_reliever:s(n.items.includes("responsibility_reliever")),multiple_approver_hierarchy:s(n.items.includes("multiple_approver_hierarchy")),extra_day_compensation_eligible:s(n.items.includes("extra_day_compensation_eligible")),allows_half_day_leave:s(n.items.includes("allows_half_day_leave")),allows_multiple_visits_same_date:s(n.items.includes("allows_multiple_visits_same_date")),can_approver_change:s(n.items.includes("can_approver_change")),notify_approver:s(n.items.includes("notify_approver")),extra_day_salary:s(n.items.includes("extra_day_salary")),attendance_flag:n.attendance_flag.map(u=>u.value),allow_attendance_visit:s(n.items.includes("allow_attendance_visit")),start_month:parseInt(n.start_month),end_month:parseInt(n.end_month)};console.log(x);try{G.parse(x),await t({updateLeavePolicyFormData:x}).unwrap(),L.success("Policy updated successfully!")}catch(u){L.error("Validation failed: "+((c=u.errors)==null?void 0:c.map(P=>P.message).join(", "))||"Unknown error"),z(u)}};return e.jsx("div",{className:"flex flex-col justify-center",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(H,{title:"Leave Policy",description:"Manage your holidays for your organization"}),e.jsxs(J,{size:"sm",onClick:o.handleSubmit(d),children:[e.jsx(U,{className:"mr-2 h-4 w-4"})," ",l?"Updating...":"Save Policy"]})]}),e.jsx(T,{}),m?e.jsx(W,{}):e.jsx(q,{...o,children:e.jsx("form",{onSubmit:o.handleSubmit(d),className:"grid place-items-center  gap-6 items-start max-w-3xl mx-auto mt-10",children:e.jsx(B,{form:o})})})]})})};export{Z as default};
