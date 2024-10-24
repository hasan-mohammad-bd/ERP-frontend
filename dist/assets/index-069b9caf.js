import{a as e,M as b,N as g,Q as w,U as C,a1 as o,a2 as i,a4 as u,ah as h,a3 as _,a5 as y,I as p,aL as N,aM as f,aN as S,aO as D,aQ as m,bc as O,bd as a,r as P,Y as F,Z as U,aj as V,B as M,aE as T,$,a0 as q,a6 as I,a7 as z}from"./index-08ea88e0.js";import{S as B}from"./save-all-1d1bb617.js";const Q=[{id:"absent_consider",label:"Consider absent policy"},{id:"absent_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"absent_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function H({form:n}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Absent Policy"})}),e.jsxs(C,{className:"space-y-4",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[Q.map(s=>e.jsx(o,{control:n.control,name:"items",render:({field:r})=>{var l;return e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(h,{checked:(l=r.value)==null?void 0:l.includes(s.id),onCheckedChange:d=>{var c;return d?r.onChange([...r.value,s.id]):r.onChange((c=r.value)==null?void 0:c.filter(j=>j!==s.id))}})}),e.jsx(_,{className:"font-normal",children:s.label})]})}},s.id)),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"absent_adjust_days",render:({field:s})=>e.jsxs(i,{children:[e.jsx(_,{children:"Number of days Adjust for each absent"}),e.jsx(u,{children:e.jsx(p,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const l=r.target.value;s.onChange(l?Number(l):void 0)}})}),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"absent_leave_type_id",render:({field:s})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(_,{children:"Leave type"}),e.jsxs(N,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(S,{placeholder:"Select leave type"})})}),e.jsxs(D,{children:[e.jsx(m,{value:"1",children:"Annual Leave"}),e.jsx(m,{value:"2",children:"Sick Leave"}),e.jsx(m,{value:"3",children:"Casual Leave"})]})]}),e.jsx(y,{})]})})]})]})}const G=O.injectEndpoints({endpoints:n=>({getDeductionPolicies:n.query({query:()=>"deduction-policies",providesTags:["deduction-policies"]}),updateDeductionPolicy:n.mutation({query:({updateDeductionPolicyFormData:s})=>({url:"deduction-policies",method:"POST",body:s}),invalidatesTags:["deduction-policies"]})}),overrideExisting:!1}),{useGetDeductionPoliciesQuery:J,useUpdateDeductionPolicyMutation:R}=G,Y=[{id:"delay_consider",label:"Consider delay duration"},{id:"delay_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"delay_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function Z({form:n}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Delay Policy"})}),e.jsxs(C,{className:"space-y-6",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[Y.map(s=>e.jsx(o,{control:n.control,name:"items",render:({field:r})=>{var l;return e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(h,{checked:(l=r.value)==null?void 0:l.includes(s.id),onCheckedChange:d=>{var c;return d?r.onChange([...r.value,s.id]):r.onChange((c=r.value)==null?void 0:c.filter(j=>j!==s.id))}})}),e.jsx(_,{className:"font-normal",children:s.label})]},s.id)}},s.id)),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"delay_leave_type_id",render:({field:s})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(_,{children:"Leave type"}),e.jsxs(N,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(S,{placeholder:"Select leave type"})})}),e.jsxs(D,{children:[e.jsx(m,{value:"1",children:"Annual Leave"}),e.jsx(m,{value:"2",children:"Sick Leave"}),e.jsx(m,{value:"3",children:"Casual Leave"})]})]}),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"delay_consecutive",render:({field:s})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(h,{checked:s.value===1,onCheckedChange:r=>s.onChange(r?1:0)})}),e.jsx(_,{children:"Consider consecutive delay?"}),e.jsx(y,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(o,{control:n.control,name:"delay_consider_days",render:({field:s})=>e.jsxs(i,{children:[e.jsx(_,{children:"Number delay to consider"}),e.jsx(u,{children:e.jsx(p,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const l=r.target.value;s.onChange(l?Number(l):void 0)}})}),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"delay_adjust_days",render:({field:s})=>e.jsxs(i,{children:[e.jsx(_,{children:"Days(s) adjust for delay"}),e.jsx(u,{children:e.jsx(p,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const l=r.target.value;s.onChange(l?Number(l):void 0)}})}),e.jsx(y,{})]})})]})]})]})}const K=[{id:"extreme_delay_consider",label:"Consider extreme delay duration"},{id:"extreme_delay_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"extreme_delay_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function W({form:n}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Extreme Delay Policy"})}),e.jsxs(C,{className:"space-y-6",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[K.map(s=>e.jsx(o,{control:n.control,name:"items",render:({field:r})=>{var l;return e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(h,{checked:(l=r.value)==null?void 0:l.includes(s.id),onCheckedChange:d=>{var c;return d?r.onChange([...r.value,s.id]):r.onChange((c=r.value)==null?void 0:c.filter(j=>j!==s.id))}})}),e.jsx(_,{className:"font-normal",children:s.label})]},s.id)}},s.id)),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"extreme_delay_leave_type_id",render:({field:s})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(_,{children:"Leave type"}),e.jsxs(N,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(S,{placeholder:"Select leave type"})})}),e.jsxs(D,{children:[e.jsx(m,{value:"1",children:"Annual Leave"}),e.jsx(m,{value:"2",children:"Sick Leave"}),e.jsx(m,{value:"3",children:"Casual Leave"})]})]}),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"extreme_delay_consecutive",render:({field:s})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(h,{checked:s.value===1,onCheckedChange:r=>s.onChange(r?1:0)})}),e.jsx(_,{children:"Consider consecutive delay?"}),e.jsx(y,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(o,{control:n.control,name:"extreme_delay_consider_days",render:({field:s})=>e.jsxs(i,{children:[e.jsx(_,{children:"Number delay to consider"}),e.jsx(u,{children:e.jsx(p,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const l=r.target.value;s.onChange(l?Number(l):void 0)}})}),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"extreme_delay_adjust_days",render:({field:s})=>e.jsxs(i,{children:[e.jsx(_,{children:"Days(s) adjust for delay"}),e.jsx(u,{children:e.jsx(p,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const l=r.target.value;s.onChange(l?Number(l):void 0)}})}),e.jsx(y,{})]})})]})]})]})}const X=[{id:"underwork_consider",label:"Consider underwork policy"},{id:"underwork_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"underwork_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function ee({form:n}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Underwork Policy"})}),e.jsxs(C,{className:"space-y-4",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[X.map(s=>e.jsx(o,{control:n.control,name:"items",render:({field:r})=>{var l;return e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(h,{checked:(l=r.value)==null?void 0:l.includes(s.id),onCheckedChange:d=>{var c;return d?r.onChange([...r.value,s.id]):r.onChange((c=r.value)==null?void 0:c.filter(j=>j!==s.id))}})}),e.jsx(_,{className:"font-normal",children:s.label})]},s.id)}},s.id)),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"underwork_leave_type_id",render:({field:s})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(_,{children:"Leave type"}),e.jsxs(N,{onValueChange:r=>s.onChange(Number(r)),value:s.value&&String(s.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(S,{placeholder:"Select leave type"})})}),e.jsxs(D,{children:[e.jsx(m,{value:"1",children:"Annual Leave"}),e.jsx(m,{value:"2",children:"Sick Leave"}),e.jsx(m,{value:"3",children:"Casual Leave"})]})]}),e.jsx(y,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(o,{control:n.control,name:"underwork_consider_hours",render:({field:s})=>e.jsxs(i,{children:[e.jsx(_,{children:"Number delay to consider"}),e.jsx(u,{children:e.jsx(p,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const l=r.target.value;s.onChange(l?Number(l):void 0)}})}),e.jsx(y,{})]})}),e.jsx(o,{control:n.control,name:"underwork_adjust_days",render:({field:s})=>e.jsxs(i,{children:[e.jsx(_,{children:"Days(s) adjust for delay"}),e.jsx(u,{children:e.jsx(p,{type:"number",className:"w-32",placeholder:"Enter days",...s,onChange:r=>{const l=r.target.value;s.onChange(l?Number(l):void 0)}})}),e.jsx(y,{})]})})]})]})]})}const se=[{id:"unpaid_consider",label:"Consider unpaid policy"},{id:"unpaid_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function ae({form:n}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Unpaid Policy"})}),e.jsx(C,{className:"space-y-4",children:e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[se.map(s=>e.jsx(o,{control:n.control,name:"items",render:({field:r})=>{var l;return e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(h,{checked:(l=r.value)==null?void 0:l.includes(s.id),onCheckedChange:d=>{var c;return d?r.onChange([...r.value,s.id]):r.onChange((c=r.value)==null?void 0:c.filter(j=>j!==s.id))}})}),e.jsx(_,{className:"font-normal",children:s.label})]},s.id)}},s.id)),e.jsx(y,{})]})})})]})}a.object({absent_consider:a.union([a.literal(0),a.literal(1)]),absent_deduct_salary:a.union([a.literal(0),a.literal(1)]),absent_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),absent_adjust_days:a.number().int().positive(),absent_leave_type_id:a.number(),delay_consider:a.union([a.literal(0),a.literal(1)]),delay_deduct_salary:a.union([a.literal(0),a.literal(1)]),delay_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),delay_consecutive:a.union([a.literal(0),a.literal(1)]),delay_consider_days:a.number().int().positive(),delay_adjust_days:a.number().int().positive(),delay_leave_type_id:a.number(),extreme_delay_consider:a.union([a.literal(0),a.literal(1)]),extreme_delay_deduct_salary:a.union([a.literal(0),a.literal(1)]),extreme_delay_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),extreme_delay_consecutive:a.union([a.literal(0),a.literal(1)]),extreme_delay_consider_days:a.number().int().positive(),extreme_delay_adjust_days:a.number().int().positive(),extreme_delay_leave_type_id:a.number(),underwork_consider:a.union([a.literal(0),a.literal(1)]),underwork_deduct_salary:a.union([a.literal(0),a.literal(1)]),underwork_deduct_gross_salary:a.union([a.literal(0),a.literal(1)]),underwork_consider_hours:a.number().int().positive(),underwork_adjust_days:a.number().int().positive(),underwork_leave_type_id:a.number(),unpaid_consider:a.union([a.literal(0),a.literal(1)]),unpaid_deduct_gross_salary:a.union([a.literal(0),a.literal(1)])});const L=a.object({absent_adjust_days:a.number().int().positive(),absent_leave_type_id:a.number(),delay_adjust_days:a.number().int().positive(),delay_consecutive:a.number(),delay_consider_days:a.number().int().positive(),delay_leave_type_id:a.number(),extreme_delay_adjust_days:a.number().int().positive(),extreme_delay_consecutive:a.number(),extreme_delay_consider_days:a.number().int().positive(),extreme_delay_leave_type_id:a.number(),items:a.array(a.string()).optional(),underwork_adjust_days:a.number().int().positive(),underwork_consider_hours:a.number().int().positive(),underwork_leave_type_id:a.number()}),le=()=>{const{data:n,isLoading:s}=J(),[r,{isLoading:l}]=R(),d=P.useMemo(()=>(n==null?void 0:n.data)||{},[n]),c=F({resolver:U(L),defaultValues:{}});P.useEffect(()=>{if(n&&n.data){const t=[];["absent_consider","absent_deduct_salary","absent_deduct_gross_salary","delay_consider","delay_deduct_salary","delay_deduct_gross_salary","extreme_delay_consider","extreme_delay_deduct_salary","extreme_delay_deduct_gross_salary","underwork_consider","underwork_deduct_salary","underwork_deduct_gross_salary","unpaid_consider","unpaid_deduct_gross_salary"].forEach(v=>{d[v]===1&&t.push(v)}),c.reset({items:t||[],absent_adjust_days:d.absent_adjust_days||0,absent_leave_type_id:(d==null?void 0:d.absent_leave_type_id)||0,delay_leave_type_id:d==null?void 0:d.delay_leave_type_id,delay_consider_days:d.delay_consider_days||0,delay_adjust_days:d.delay_adjust_days||0,delay_consecutive:d.delay_consecutive||0,extreme_delay_leave_type_id:(d==null?void 0:d.extreme_delay_leave_type_id)||0,extreme_delay_consider_days:d.extreme_delay_consider_days||0,extreme_delay_adjust_days:d.extreme_delay_adjust_days||0,extreme_delay_consecutive:d.extreme_delay_consecutive||0,underwork_leave_type_id:(d==null?void 0:d.underwork_leave_type_id)||0,underwork_consider_hours:d.underwork_consider_hours||0,underwork_adjust_days:d.underwork_adjust_days||0})}},[n,d,c]);const j=async t=>{var E;const x=k=>k?1:0,v={absent_consider:x(t.items.includes("absent_consider")),absent_deduct_salary:x(t.items.includes("absent_deduct_salary")),absent_deduct_gross_salary:x(t.items.includes("absent_deduct_gross_salary")),absent_adjust_days:parseInt(t.absent_adjust_days),absent_leave_type_id:parseInt(t.absent_leave_type_id),delay_consider:x(t.items.includes("delay_consider")),delay_deduct_salary:x(t.items.includes("delay_deduct_salary")),delay_deduct_gross_salary:x(t.items.includes("delay_deduct_gross_salary")),delay_consecutive:x(t.delay_consecutive>0),delay_consider_days:parseInt(t.delay_consider_days),delay_adjust_days:parseInt(t.delay_adjust_days),delay_leave_type_id:parseInt(t.delay_leave_type_id),extreme_delay_consider:x(t.items.includes("extreme_delay_consider")),extreme_delay_deduct_salary:x(t.items.includes("extreme_delay_deduct_salary")),extreme_delay_deduct_gross_salary:x(t.items.includes("extreme_delay_deduct_gross_salary")),extreme_delay_consecutive:x(t.extreme_delay_consecutive>0),extreme_delay_consider_days:parseInt(t.extreme_delay_consider_days),extreme_delay_adjust_days:parseInt(t.extreme_delay_adjust_days),extreme_delay_leave_type_id:parseInt(t.extreme_delay_leave_type_id),underwork_consider:x(t.items.includes("underwork_consider")),underwork_deduct_salary:x(t.items.includes("underwork_deduct_salary")),underwork_deduct_gross_salary:x(t.items.includes("underwork_deduct_gross_salary")),underwork_consider_hours:parseInt(t.underwork_consider_hours),underwork_adjust_days:parseInt(t.underwork_adjust_days),underwork_leave_type_id:parseInt(t.underwork_leave_type_id),unpaid_consider:x(t.items.includes("unpaid_consider")),unpaid_deduct_gross_salary:x(t.items.includes("unpaid_deduct_gross_salary"))};try{L.parse(v),await r({updateDeductionPolicyFormData:v}).unwrap(),I.success("Policy updated successfully!")}catch(k){I.error("Validation failed: "+((E=k.errors)==null?void 0:E.map(A=>A.message).join(", "))||"Unknown error"),z(k)}};return e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(V,{title:"Deduction Policy",description:"Manage your holidays for your organization"}),e.jsxs(M,{size:"sm",onClick:c.handleSubmit(j),children:[e.jsx(B,{className:"mr-2 h-4 w-4"})," ",l?"Updating...":"Save Policy"]})]}),e.jsx(T,{}),s?e.jsx($,{}):e.jsx(q,{...c,children:e.jsxs("form",{onSubmit:c.handleSubmit(j),className:"grid grid-cols-2 gap-6 items-start max-w-7xl mx-auto",children:[e.jsx(H,{form:c}),e.jsx(Z,{form:c}),e.jsx(W,{form:c}),e.jsx(ee,{form:c}),e.jsx(ae,{form:c})]})})]})})};export{le as default};
