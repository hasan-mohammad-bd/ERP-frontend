import{a as e,U as p,V as b,W as g,X as w,a4 as c,a5 as o,a7 as i,ak as m,a6 as u,a8 as _,I as h,aP as k,aQ as N,aR as f,aS as S,aU as x,bg as F,bh as a,r as E,$ as O,a0 as U,am as V,B as T,aI as $,a2 as M,a3 as q,a9 as I,aa as z}from"./index-eb834c1a.js";import{S as B}from"./save-all-35cea2ce.js";const H=[{id:"absent_consider",label:"Consider absent policy"},{id:"absent_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"absent_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function Q({form:n}){return e.jsxs(p,{className:"w-full h-full",children:[e.jsx(b,{children:e.jsx(g,{children:"Absent Policy"})}),e.jsxs(w,{className:"space-y-4",children:[e.jsx(c,{control:n.control,name:"items",render:()=>e.jsxs(o,{children:[H.map(s=>e.jsx(c,{control:n.control,name:"items",render:({field:r})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(i,{children:e.jsx(m,{checked:r.value?r.value.includes(s.id):!1,onCheckedChange:d=>d?r.onChange([...r.value||[],s.id]):r.onChange((r.value||[]).filter(l=>l!==s.id))})}),e.jsx(u,{className:"font-normal",children:s.label})]})},s.id)),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"absent_adjust_days",render:({field:s})=>e.jsxs(o,{children:[e.jsx(u,{children:"Number of days Adjust for each absent"}),e.jsx(i,{children:e.jsx(h,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const d=r.target.value;s.onChange(d?Number(d):void 0)}})}),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"absent_leave_type_id",render:({field:s})=>e.jsxs(o,{className:"w-[300px]",children:[e.jsx(u,{children:"Leave type"}),e.jsxs(k,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(i,{children:e.jsx(N,{children:e.jsx(f,{placeholder:"Select leave type"})})}),e.jsxs(S,{children:[e.jsx(x,{value:"1",children:"Annual Leave"}),e.jsx(x,{value:"2",children:"Sick Leave"}),e.jsx(x,{value:"3",children:"Casual Leave"})]})]}),e.jsx(_,{})]})})]})]})}const R=F.injectEndpoints({endpoints:n=>({getDeductionPolicies:n.query({query:()=>"deduction-policies",providesTags:["deduction-policies"]}),updateDeductionPolicy:n.mutation({query:({updateDeductionPolicyFormData:s})=>({url:"deduction-policies",method:"POST",body:s}),invalidatesTags:["deduction-policies"]})}),overrideExisting:!1}),{useGetDeductionPoliciesQuery:G,useUpdateDeductionPolicyMutation:J}=R,W=[{id:"delay_consider",label:"Consider delay duration"},{id:"delay_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"delay_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function X({form:n}){return e.jsxs(p,{className:"w-full h-full",children:[e.jsx(b,{children:e.jsx(g,{children:"Delay Policy"})}),e.jsxs(w,{className:"space-y-6",children:[e.jsx(c,{control:n.control,name:"items",render:()=>e.jsxs(o,{children:[W.map(s=>e.jsx(c,{control:n.control,name:"items",render:({field:r})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(i,{children:e.jsx(m,{checked:r.value?r.value.includes(s.id):!1,onCheckedChange:d=>d?r.onChange([...r.value||[],s.id]):r.onChange((r.value||[]).filter(l=>l!==s.id))})}),e.jsx(u,{className:"font-normal",children:s.label})]},s.id)},s.id)),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"delay_leave_type_id",render:({field:s})=>e.jsxs(o,{className:"w-[300px]",children:[e.jsx(u,{children:"Leave type"}),e.jsxs(k,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(i,{children:e.jsx(N,{children:e.jsx(f,{placeholder:"Select leave type"})})}),e.jsxs(S,{children:[e.jsx(x,{value:"1",children:"Annual Leave"}),e.jsx(x,{value:"2",children:"Sick Leave"}),e.jsx(x,{value:"3",children:"Casual Leave"})]})]}),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"delay_consecutive",render:({field:s})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(i,{children:e.jsx(m,{checked:s.value===1,onCheckedChange:r=>s.onChange(r?1:0)})}),e.jsx(u,{children:"Consider consecutive delay?"}),e.jsx(_,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(c,{control:n.control,name:"delay_consider_days",render:({field:s})=>e.jsxs(o,{children:[e.jsx(u,{children:"Number delay to consider"}),e.jsx(i,{children:e.jsx(h,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const d=r.target.value;s.onChange(d?Number(d):void 0)}})}),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"delay_adjust_days",render:({field:s})=>e.jsxs(o,{children:[e.jsx(u,{children:"Days(s) adjust for delay"}),e.jsx(i,{children:e.jsx(h,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const d=r.target.value;s.onChange(d?Number(d):void 0)}})}),e.jsx(_,{})]})})]})]})]})}const K=[{id:"extreme_delay_consider",label:"Consider extreme delay duration"},{id:"extreme_delay_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"extreme_delay_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function Y({form:n}){return e.jsxs(p,{className:"w-full h-full",children:[e.jsx(b,{children:e.jsx(g,{children:"Extreme Delay Policy"})}),e.jsxs(w,{className:"space-y-6",children:[e.jsx(c,{control:n.control,name:"items",render:()=>e.jsxs(o,{children:[K.map(s=>e.jsx(c,{control:n.control,name:"items",render:({field:r})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(i,{children:e.jsx(m,{checked:r.value?r.value.includes(s.id):!1,onCheckedChange:d=>d?r.onChange([...r.value||[],s.id]):r.onChange((r.value||[]).filter(l=>l!==s.id))})}),e.jsx(u,{className:"font-normal",children:s.label})]},s.id)},s.id)),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"extreme_delay_leave_type_id",render:({field:s})=>e.jsxs(o,{className:"w-[300px]",children:[e.jsx(u,{children:"Leave type"}),e.jsxs(k,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(i,{children:e.jsx(N,{children:e.jsx(f,{placeholder:"Select leave type"})})}),e.jsxs(S,{children:[e.jsx(x,{value:"1",children:"Annual Leave"}),e.jsx(x,{value:"2",children:"Sick Leave"}),e.jsx(x,{value:"3",children:"Casual Leave"})]})]}),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"extreme_delay_consecutive",render:({field:s})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(i,{children:e.jsx(m,{checked:s.value===1,onCheckedChange:r=>s.onChange(r?1:0)})}),e.jsx(u,{children:"Consider consecutive delay?"}),e.jsx(_,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(c,{control:n.control,name:"extreme_delay_consider_days",render:({field:s})=>e.jsxs(o,{children:[e.jsx(u,{children:"Number delay to consider"}),e.jsx(i,{children:e.jsx(h,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const d=r.target.value;s.onChange(d?Number(d):void 0)}})}),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"extreme_delay_adjust_days",render:({field:s})=>e.jsxs(o,{children:[e.jsx(u,{children:"Days(s) adjust for delay"}),e.jsx(i,{children:e.jsx(h,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const d=r.target.value;s.onChange(d?Number(d):void 0)}})}),e.jsx(_,{})]})})]})]})]})}const Z=[{id:"underwork_consider",label:"Consider underwork policy"},{id:"underwork_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"underwork_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function ee({form:n}){return e.jsxs(p,{className:"w-full h-full",children:[e.jsx(b,{children:e.jsx(g,{children:"Underwork Policy"})}),e.jsxs(w,{className:"space-y-4",children:[e.jsx(c,{control:n.control,name:"items",render:()=>e.jsxs(o,{children:[Z.map(s=>e.jsx(c,{control:n.control,name:"items",render:({field:r})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(i,{children:e.jsx(m,{checked:r.value?r.value.includes(s.id):!1,onCheckedChange:d=>d?r.onChange([...r.value||[],s.id]):r.onChange((r.value||[]).filter(l=>l!==s.id))})}),e.jsx(u,{className:"font-normal",children:s.label})]},s.id)},s.id)),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"underwork_leave_type_id",render:({field:s})=>e.jsxs(o,{className:"w-[300px]",children:[e.jsx(u,{children:"Leave type"}),e.jsxs(k,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(i,{children:e.jsx(N,{children:e.jsx(f,{placeholder:"Select leave type"})})}),e.jsxs(S,{children:[e.jsx(x,{value:"1",children:"Annual Leave"}),e.jsx(x,{value:"2",children:"Sick Leave"}),e.jsx(x,{value:"3",children:"Casual Leave"})]})]}),e.jsx(_,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(c,{control:n.control,name:"underwork_consider_hours",render:({field:s})=>e.jsxs(o,{children:[e.jsx(u,{children:"Number delay to consider"}),e.jsx(i,{children:e.jsx(h,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const d=r.target.value;s.onChange(d?Number(d):void 0)}})}),e.jsx(_,{})]})}),e.jsx(c,{control:n.control,name:"underwork_adjust_days",render:({field:s})=>e.jsxs(o,{children:[e.jsx(u,{children:"Days(s) adjust for delay"}),e.jsx(i,{children:e.jsx(h,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const d=r.target.value;s.onChange(d?Number(d):void 0)}})}),e.jsx(_,{})]})})]})]})]})}const se=[{id:"unpaid_consider",label:"Consider unpaid policy"},{id:"unpaid_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function ae({form:n}){return e.jsxs(p,{className:"w-full h-full",children:[e.jsx(b,{children:e.jsx(g,{children:"Unpaid Policy"})}),e.jsx(w,{className:"space-y-4",children:e.jsx(c,{control:n.control,name:"items",render:()=>e.jsxs(o,{children:[se.map(s=>e.jsx(c,{control:n.control,name:"items",render:({field:r})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(i,{children:e.jsx(m,{checked:r.value?r.value.includes(s.id):!1,onCheckedChange:d=>d?r.onChange([...r.value||[],s.id]):r.onChange((r.value||[]).filter(l=>l!==s.id))})}),e.jsx(u,{className:"font-normal",children:s.label})]},s.id)},s.id)),e.jsx(_,{})]})})})]})}a.object({absent_consider:a.union([a.literal(0),a.literal(1)]),absent_deduct_salary:a.union([a.literal(0),a.literal(1)]),absent_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),absent_adjust_days:a.number().int().positive(),absent_leave_type_id:a.number(),delay_consider:a.union([a.literal(0),a.literal(1)]),delay_deduct_salary:a.union([a.literal(0),a.literal(1)]),delay_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),delay_consecutive:a.union([a.literal(0),a.literal(1)]),delay_consider_days:a.number().int().positive(),delay_adjust_days:a.number().int().positive(),delay_leave_type_id:a.number(),extreme_delay_consider:a.union([a.literal(0),a.literal(1)]),extreme_delay_deduct_salary:a.union([a.literal(0),a.literal(1)]),extreme_delay_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),extreme_delay_consecutive:a.union([a.literal(0),a.literal(1)]),extreme_delay_consider_days:a.number().int().positive(),extreme_delay_adjust_days:a.number().int().positive(),extreme_delay_leave_type_id:a.number(),underwork_consider:a.union([a.literal(0),a.literal(1)]),underwork_deduct_salary:a.union([a.literal(0),a.literal(1)]),underwork_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),underwork_consider_hours:a.number().int().positive(),underwork_adjust_days:a.number().int().positive(),underwork_leave_type_id:a.number(),unpaid_consider:a.union([a.literal(0),a.literal(1)]),unpaid_deduct_gross_salary:a.union([a.literal(0),a.literal(1)])});const L=a.object({absent_adjust_days:a.number().int().positive(),absent_leave_type_id:a.number(),delay_adjust_days:a.number().int().positive(),delay_consecutive:a.number().optional(),delay_consider_days:a.number().int().positive(),delay_leave_type_id:a.number(),extreme_delay_adjust_days:a.number().int().positive(),extreme_delay_consecutive:a.number().optional(),extreme_delay_consider_days:a.number().int().positive(),extreme_delay_leave_type_id:a.number(),items:a.array(a.string()).optional(),underwork_adjust_days:a.number().int().positive(),underwork_consider_hours:a.number().int().positive(),underwork_leave_type_id:a.number()}),le=()=>{const{data:n,isLoading:s}=G(),[r,{isLoading:d}]=J(),l=E.useMemo(()=>(n==null?void 0:n.data)||{},[n]),j=O({resolver:U(L),defaultValues:{}});E.useEffect(()=>{if(n&&n.data){const t=[];["absent_consider","absent_deduct_salary","absent_deduct_gross_salary","delay_consider","delay_deduct_salary","delay_deduct_gross_salary","extreme_delay_consider","extreme_delay_deduct_salary","extreme_delay_deduct_gross_salary","underwork_consider","underwork_deduct_salary","underwork_deduct_gross_salary","unpaid_consider","unpaid_deduct_gross_salary"].forEach(v=>{l[v]===1&&t.push(v)}),j.reset({items:t||[],absent_adjust_days:l.absent_adjust_days||0,absent_leave_type_id:(l==null?void 0:l.absent_leave_type_id)||0,delay_leave_type_id:l==null?void 0:l.delay_leave_type_id,delay_consider_days:l.delay_consider_days||0,delay_adjust_days:l.delay_adjust_days||0,delay_consecutive:l.delay_consecutive||0,extreme_delay_leave_type_id:(l==null?void 0:l.extreme_delay_leave_type_id)||0,extreme_delay_consider_days:l.extreme_delay_consider_days||0,extreme_delay_adjust_days:l.extreme_delay_adjust_days||0,extreme_delay_consecutive:l.extreme_delay_consecutive||0,underwork_leave_type_id:(l==null?void 0:l.underwork_leave_type_id)||0,underwork_consider_hours:l.underwork_consider_hours||0,underwork_adjust_days:l.underwork_adjust_days||0})}},[n,l,j]);const D=async t=>{var P;const y=C=>C?1:0,v={absent_consider:y(t.items.includes("absent_consider")),absent_deduct_salary:y(t.items.includes("absent_deduct_salary")),absent_deduct_gross_salary:y(t.items.includes("absent_deduct_gross_salary")),absent_adjust_days:parseInt(t.absent_adjust_days),absent_leave_type_id:parseInt(t.absent_leave_type_id),delay_consider:y(t.items.includes("delay_consider")),delay_deduct_salary:y(t.items.includes("delay_deduct_salary")),delay_deduct_gross_salary:y(t.items.includes("delay_deduct_gross_salary")),delay_consecutive:y(t.delay_consecutive>0),delay_consider_days:parseInt(t.delay_consider_days),delay_adjust_days:parseInt(t.delay_adjust_days),delay_leave_type_id:parseInt(t.delay_leave_type_id),extreme_delay_consider:y(t.items.includes("extreme_delay_consider")),extreme_delay_deduct_salary:y(t.items.includes("extreme_delay_deduct_salary")),extreme_delay_deduct_gross_salary:y(t.items.includes("extreme_delay_deduct_gross_salary")),extreme_delay_consecutive:y(t.extreme_delay_consecutive>0),extreme_delay_consider_days:parseInt(t.extreme_delay_consider_days),extreme_delay_adjust_days:parseInt(t.extreme_delay_adjust_days),extreme_delay_leave_type_id:parseInt(t.extreme_delay_leave_type_id),underwork_consider:y(t.items.includes("underwork_consider")),underwork_deduct_salary:y(t.items.includes("underwork_deduct_salary")),underwork_deduct_gross_salary:y(t.items.includes("underwork_deduct_gross_salary")),underwork_consider_hours:parseInt(t.underwork_consider_hours),underwork_adjust_days:parseInt(t.underwork_adjust_days),underwork_leave_type_id:parseInt(t.underwork_leave_type_id),unpaid_consider:y(t.items.includes("unpaid_consider")),unpaid_deduct_gross_salary:y(t.items.includes("unpaid_deduct_gross_salary"))};try{L.parse(v),await r({updateDeductionPolicyFormData:v}).unwrap(),I.success("Policy updated successfully!")}catch(C){I.error("Validation failed: "+((P=C.errors)==null?void 0:P.map(A=>A.message).join(", "))||"Unknown error"),z(C)}};return e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(V,{title:"Deduction Policy",description:"Manage your holidays for your organization"}),e.jsxs(T,{size:"sm",onClick:j.handleSubmit(D),children:[e.jsx(B,{className:"mr-2 h-4 w-4"})," ",d?"Updating...":"Save Policy"]})]}),e.jsx($,{}),s?e.jsx(M,{}):e.jsx(q,{...j,children:e.jsxs("form",{onSubmit:j.handleSubmit(D),className:"grid grid-cols-2 gap-6 items-start max-w-7xl mx-auto",children:[e.jsx(Q,{form:j}),e.jsx(X,{form:j}),e.jsx(Y,{form:j}),e.jsx(ee,{form:j}),e.jsx(ae,{form:j})]})})]})})};export{le as default};
