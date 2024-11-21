import{a as e,U as b,ak as g,al as w,am as C,H as o,J as i,M as u,aE as p,K as y,N as x,I as v,aZ as N,a_ as f,a$ as D,b0 as S,ar as E,b2 as P,bi as $,V as s,r as U,B as G,D as q,aG as z,Q as B,aU as H,G as Q,as as V,at as T}from"./index-4e4d6e52.js";import{u as J}from"./index-231afe3d.js";import{S as K}from"./save-all-14df32b2.js";const R=[{id:"absent_consider",label:"Consider absent policy"},{id:"absent_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"absent_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function W({form:n,leaveTypeList:t,leaveTypeLoading:_}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Absent Policy"})}),e.jsxs(C,{className:"space-y-4",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[R.map(r=>e.jsx(o,{control:n.control,name:"items",render:({field:a})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(p,{checked:a.value?a.value.includes(r.id):!1,onCheckedChange:l=>l?a.onChange([...a.value||[],r.id]):a.onChange((a.value||[]).filter(j=>j!==r.id))})}),e.jsx(y,{className:"font-normal",children:r.label})]})},r.id)),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"absent_adjust_days",render:({field:r})=>e.jsxs(i,{children:[e.jsx(y,{children:"Number of days Adjust for each absent"}),e.jsx(u,{children:e.jsx(v,{type:"number",className:"w-32",placeholder:"Enter days",...r,onChange:a=>{const l=a.target.value;r.onChange(l?Number(l):void 0)}})}),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"absent_leave_type_id",render:({field:r})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(y,{children:"Leave type"}),e.jsxs(N,{onValueChange:a=>r.onChange(Number(a)),value:r.value&&String(r.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(D,{placeholder:"Select leave type"})})}),e.jsx(S,{children:_?e.jsx(E,{}):t==null?void 0:t.map(a=>e.jsx(P,{value:String(a.id),children:a.name},a.id))})]}),e.jsx(x,{})]})})]})]})}const Z=$.injectEndpoints({endpoints:n=>({getDeductionPolicies:n.query({query:()=>"deduction-policies",providesTags:["deduction-policies"]}),updateDeductionPolicy:n.mutation({query:({updateDeductionPolicyFormData:t})=>({url:"deduction-policies",method:"POST",body:t}),invalidatesTags:["deduction-policies"]})}),overrideExisting:!1}),{useGetDeductionPoliciesQuery:X,useUpdateDeductionPolicyMutation:Y}=Z,L=[{id:"delay_consider",label:"Consider delay duration"},{id:"delay_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"delay_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function ee({form:n,leaveTypeList:t,leaveTypeLoading:_}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Delay Policy"})}),e.jsxs(C,{className:"space-y-6",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[L.map(r=>e.jsx(o,{control:n.control,name:"items",render:({field:a})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(p,{checked:a.value?a.value.includes(r.id):!1,onCheckedChange:l=>l?a.onChange([...a.value||[],r.id]):a.onChange((a.value||[]).filter(j=>j!==r.id))})}),e.jsx(y,{className:"font-normal",children:r.label})]},r.id)},r.id)),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"delay_leave_type_id",render:({field:r})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(y,{children:"Leave type"}),e.jsxs(N,{onValueChange:a=>r.onChange(Number(a)),value:r.value&&String(r.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(D,{placeholder:"Select leave type"})})}),e.jsx(S,{children:_?e.jsx(E,{}):t==null?void 0:t.map(a=>e.jsx(P,{value:String(a.id),children:a.name},a.id))})]}),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"delay_consecutive",render:({field:r})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(p,{checked:r.value===1,onCheckedChange:a=>r.onChange(a?1:0)})}),e.jsx(y,{children:"Consider consecutive delay?"}),e.jsx(x,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(o,{control:n.control,name:"delay_consider_days",render:({field:r})=>e.jsxs(i,{children:[e.jsx(y,{children:"Number delay to consider"}),e.jsx(u,{children:e.jsx(v,{type:"number",className:"w-32",placeholder:"Enter days",...r,onChange:a=>{const l=a.target.value;r.onChange(l?Number(l):void 0)}})}),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"delay_adjust_days",render:({field:r})=>e.jsxs(i,{children:[e.jsx(y,{children:"Days(s) adjust for delay"}),e.jsx(u,{children:e.jsx(v,{type:"number",className:"w-32",placeholder:"Enter days",...r,onChange:a=>{const l=a.target.value;r.onChange(l?Number(l):void 0)}})}),e.jsx(x,{})]})})]})]})]})}const se=[{id:"extreme_delay_consider",label:"Consider extreme delay duration"},{id:"extreme_delay_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"extreme_delay_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function ae({form:n,leaveTypeList:t,leaveTypeLoading:_}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Extreme Delay Policy"})}),e.jsxs(C,{className:"space-y-6",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[se.map(r=>e.jsx(o,{control:n.control,name:"items",render:({field:a})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(p,{checked:a.value?a.value.includes(r.id):!1,onCheckedChange:l=>l?a.onChange([...a.value||[],r.id]):a.onChange((a.value||[]).filter(j=>j!==r.id))})}),e.jsx(y,{className:"font-normal",children:r.label})]},r.id)},r.id)),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"extreme_delay_leave_type_id",render:({field:r})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(y,{children:"Leave type"}),e.jsxs(N,{onValueChange:a=>r.onChange(Number(a)),value:r.value&&String(r.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(D,{placeholder:"Select leave type"})})}),e.jsx(S,{children:_?e.jsx(E,{}):t==null?void 0:t.map(a=>e.jsx(P,{value:String(a.id),children:a.name},a.id))})]}),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"extreme_delay_consecutive",render:({field:r})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(p,{checked:r.value===1,onCheckedChange:a=>r.onChange(a?1:0)})}),e.jsx(y,{children:"Consider consecutive delay?"}),e.jsx(x,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(o,{control:n.control,name:"extreme_delay_consider_days",render:({field:r})=>e.jsxs(i,{children:[e.jsx(y,{children:"Number delay to consider"}),e.jsx(u,{children:e.jsx(v,{type:"number",className:"w-32",placeholder:"Enter days",...r,onChange:a=>{const l=a.target.value;r.onChange(l?Number(l):void 0)}})}),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"extreme_delay_adjust_days",render:({field:r})=>e.jsxs(i,{children:[e.jsx(y,{children:"Days(s) adjust for delay"}),e.jsx(u,{children:e.jsx(v,{type:"number",className:"w-32",placeholder:"Enter days",...r,onChange:a=>{const l=a.target.value;r.onChange(l?Number(l):void 0)}})}),e.jsx(x,{})]})})]})]})]})}const re=[{id:"underwork_consider",label:"Consider underwork policy"},{id:"underwork_deduct_salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"underwork_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function ne({form:n,leaveTypeList:t,leaveTypeLoading:_}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Underwork Policy"})}),e.jsxs(C,{className:"space-y-4",children:[e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[re.map(r=>e.jsx(o,{control:n.control,name:"items",render:({field:a})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(p,{checked:a.value?a.value.includes(r.id):!1,onCheckedChange:l=>l?a.onChange([...a.value||[],r.id]):a.onChange((a.value||[]).filter(j=>j!==r.id))})}),e.jsx(y,{className:"font-normal",children:r.label})]},r.id)},r.id)),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"underwork_leave_type_id",render:({field:r})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(y,{children:"Leave type"}),e.jsxs(N,{onValueChange:a=>r.onChange(Number(a)),value:r.value&&String(r.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(D,{placeholder:"Select leave type"})})}),e.jsx(S,{children:_?e.jsx(E,{}):t==null?void 0:t.map(a=>e.jsx(P,{value:String(a.id),children:a.name},a.id))})]}),e.jsx(x,{})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(o,{control:n.control,name:"underwork_consider_days",render:({field:r})=>e.jsxs(i,{children:[e.jsx(y,{children:"Number delay to consider"}),e.jsx(u,{children:e.jsx(v,{type:"number",className:"w-32",placeholder:"Enter days",...r,onChange:a=>{const l=a.target.value;r.onChange(l?Number(l):void 0)}})}),e.jsx(x,{})]})}),e.jsx(o,{control:n.control,name:"underwork_adjust_days",render:({field:r})=>e.jsxs(i,{children:[e.jsx(y,{children:"Days(s) adjust for delay"}),e.jsx(u,{children:e.jsx(v,{type:"number",className:"w-32",placeholder:"Enter days",...r,onChange:a=>{const l=a.target.value;r.onChange(l?Number(l):void 0)}})}),e.jsx(x,{})]})})]})]})]})}const le=[{id:"unpaid_consider",label:"Consider unpaid policy"},{id:"unpaid_deduct_gross_salary",label:"Deduct from gross salary? (Otherwise from basic)"}];function de({form:n}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Unpaid Policy"})}),e.jsx(C,{className:"space-y-4",children:e.jsx(o,{control:n.control,name:"items",render:()=>e.jsxs(i,{children:[le.map(t=>e.jsx(o,{control:n.control,name:"items",render:({field:_})=>e.jsxs(i,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(u,{children:e.jsx(p,{checked:_.value?_.value.includes(t.id):!1,onCheckedChange:r=>r?_.onChange([..._.value||[],t.id]):_.onChange((_.value||[]).filter(a=>a!==t.id))})}),e.jsx(y,{className:"font-normal",children:t.label})]},t.id)},t.id)),e.jsx(x,{})]})})})]})}s.object({absent_consider:s.union([s.literal(0),s.literal(1)]),absent_deduct_salary:s.union([s.literal(0),s.literal(1)]),absent_deduct_gross_salary:s.union([s.literal(0),s.literal(1)]),absent_adjust_days:s.number().int().positive(),absent_leave_type_id:s.number(),delay_consider:s.union([s.literal(0),s.literal(1)]),delay_deduct_salary:s.union([s.literal(0),s.literal(1)]),delay_deduct_gross_salary:s.union([s.literal(0),s.literal(1)]),delay_consecutive:s.union([s.literal(0),s.literal(1)]),delay_consider_days:s.number().int().positive(),delay_adjust_days:s.number().int().positive(),delay_leave_type_id:s.number(),extreme_delay_consider:s.union([s.literal(0),s.literal(1)]),extreme_delay_deduct_salary:s.union([s.literal(0),s.literal(1)]),extreme_delay_deduct_gross_salary:s.union([s.literal(0),s.literal(1)]),extreme_delay_consecutive:s.union([s.literal(0),s.literal(1)]),extreme_delay_consider_days:s.number().int().positive(),extreme_delay_adjust_days:s.number().int().positive(),extreme_delay_leave_type_id:s.number(),underwork_consider:s.union([s.literal(0),s.literal(1)]),underwork_deduct_salary:s.union([s.literal(0),s.literal(1)]),underwork_deduct_gross_salary:s.union([s.literal(0),s.literal(1)]),underwork_consider_days:s.number().int().positive(),underwork_adjust_days:s.number().int().positive(),underwork_leave_type_id:s.number(),unpaid_consider:s.union([s.literal(0),s.literal(1)]),unpaid_deduct_gross_salary:s.union([s.literal(0),s.literal(1)]),deduction_type:s.string().nullable()});const A=s.object({absent_adjust_days:s.number().int().positive(),absent_leave_type_id:s.number(),delay_adjust_days:s.number().int().positive(),delay_consecutive:s.number().optional(),delay_consider_days:s.number().int().positive(),delay_leave_type_id:s.number(),extreme_delay_adjust_days:s.number().int().positive(),extreme_delay_consecutive:s.number().optional(),extreme_delay_consider_days:s.number().int().positive(),extreme_delay_leave_type_id:s.number(),items:s.array(s.string()).optional(),underwork_adjust_days:s.number().int().positive(),underwork_consider_days:s.number().int().positive(),underwork_leave_type_id:s.number(),deduction_type:s.string().nullable()}),te=[{label:"thirty_days",name:"Thirty Days"},{label:"days_of_month",name:"Days of Month"},{label:"working_days",name:"Working Days"}];function ce({form:n}){return e.jsxs(b,{className:"w-full h-full",children:[e.jsx(g,{children:e.jsx(w,{children:"Deduction Type"})}),e.jsx(C,{className:"space-y-4",children:e.jsx(o,{control:n.control,name:"deduction_type",render:({field:t})=>e.jsxs(i,{className:"w-[300px]",children:[e.jsx(y,{children:"Deduction type"}),e.jsxs(N,{onValueChange:_=>t.onChange(_),value:t.value&&String(t.value),children:[e.jsx(u,{children:e.jsx(f,{children:e.jsx(D,{placeholder:"Select deduction type"})})}),e.jsx(S,{children:te.map(_=>e.jsx(P,{value:_.label,children:_.name},_.label))})]}),e.jsx(x,{})]})})})]})}const ue=()=>{const{data:n,isLoading:t}=X(),[_,{isLoading:r}]=Y(),{data:a,isLoading:l}=J("per_page=1000&page=1"),j=(a==null?void 0:a.data)||[],c=U.useMemo(()=>(n==null?void 0:n.data)||{},[n]),h=G({resolver:q(A),defaultValues:{}});U.useEffect(()=>{if(n&&n.data){const d=[];["absent_consider","absent_deduct_salary","absent_deduct_gross_salary","delay_consider","delay_deduct_salary","delay_deduct_gross_salary","extreme_delay_consider","extreme_delay_deduct_salary","extreme_delay_deduct_gross_salary","underwork_consider","underwork_deduct_salary","underwork_deduct_gross_salary","unpaid_consider","unpaid_deduct_gross_salary","deduction_type"].forEach(k=>{c[k]===1&&d.push(k)}),h.reset({items:d||[],absent_adjust_days:c.absent_adjust_days||0,absent_leave_type_id:(c==null?void 0:c.absent_leave_type_id)||0,delay_leave_type_id:c==null?void 0:c.delay_leave_type_id,delay_consider_days:c.delay_consider_days||0,delay_adjust_days:c.delay_adjust_days||0,delay_consecutive:c.delay_consecutive||0,extreme_delay_leave_type_id:(c==null?void 0:c.extreme_delay_leave_type_id)||0,extreme_delay_consider_days:c.extreme_delay_consider_days||0,extreme_delay_adjust_days:c.extreme_delay_adjust_days||0,extreme_delay_consecutive:c.extreme_delay_consecutive||0,underwork_leave_type_id:(c==null?void 0:c.underwork_leave_type_id)||0,underwork_consider_days:c.underwork_consider_days||0,underwork_adjust_days:c.underwork_adjust_days||0,deduction_type:c.deduction_type||"days_of_month"})}},[n,c,h]);const F=async d=>{var O;const m=I=>I?1:0,k={absent_consider:m(d.items.includes("absent_consider")),absent_deduct_salary:m(d.items.includes("absent_deduct_salary")),absent_deduct_gross_salary:m(d.items.includes("absent_deduct_gross_salary")),absent_adjust_days:parseInt(d.absent_adjust_days),absent_leave_type_id:parseInt(d.absent_leave_type_id),delay_consider:m(d.items.includes("delay_consider")),delay_deduct_salary:m(d.items.includes("delay_deduct_salary")),delay_deduct_gross_salary:m(d.items.includes("delay_deduct_gross_salary")),delay_consecutive:m(d.delay_consecutive>0),delay_consider_days:parseInt(d.delay_consider_days),delay_adjust_days:parseInt(d.delay_adjust_days),delay_leave_type_id:parseInt(d.delay_leave_type_id),extreme_delay_consider:m(d.items.includes("extreme_delay_consider")),extreme_delay_deduct_salary:m(d.items.includes("extreme_delay_deduct_salary")),extreme_delay_deduct_gross_salary:m(d.items.includes("extreme_delay_deduct_gross_salary")),extreme_delay_consecutive:m(d.extreme_delay_consecutive>0),extreme_delay_consider_days:parseInt(d.extreme_delay_consider_days),extreme_delay_adjust_days:parseInt(d.extreme_delay_adjust_days),extreme_delay_leave_type_id:parseInt(d.extreme_delay_leave_type_id),underwork_consider:m(d.items.includes("underwork_consider")),underwork_deduct_salary:m(d.items.includes("underwork_deduct_salary")),underwork_deduct_gross_salary:m(d.items.includes("underwork_deduct_gross_salary")),underwork_consider_days:parseInt(d.underwork_consider_days),underwork_adjust_days:parseInt(d.underwork_adjust_days),underwork_leave_type_id:parseInt(d.underwork_leave_type_id),unpaid_consider:m(d.items.includes("unpaid_consider")),unpaid_deduct_gross_salary:m(d.items.includes("unpaid_deduct_gross_salary")),deduction_type:(d==null?void 0:d.deduction_type)??null};try{A.parse(k),await _({updateDeductionPolicyFormData:k}).unwrap(),V.success("Policy updated successfully!")}catch(I){V.error("Validation failed: "+((O=I.errors)==null?void 0:O.map(M=>M.message).join(", "))||"Unknown error"),T(I)}};return e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:"Deduction Policy",description:"Manage your holidays for your organization"}),e.jsxs(B,{size:"sm",onClick:h.handleSubmit(F),children:[e.jsx(K,{className:"mr-2 h-4 w-4"})," ",r?"Updating...":"Save Policy"]})]}),e.jsx(H,{}),t?e.jsx(E,{}):e.jsx(Q,{...h,children:e.jsxs("form",{onSubmit:h.handleSubmit(F),className:"grid grid-cols-2 gap-6 items-start max-w-7xl mx-auto",children:[e.jsx(W,{leaveTypeList:j,leaveTypeLoading:l,form:h}),e.jsx(ee,{leaveTypeList:j,leaveTypeLoading:l,form:h}),e.jsx(ae,{leaveTypeList:j,leaveTypeLoading:l,form:h}),e.jsx(ne,{leaveTypeList:j,leaveTypeLoading:l,form:h}),e.jsx(de,{form:h}),e.jsx(ce,{form:h})]})})]})})};export{ue as default};
