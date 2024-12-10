import{bm as E,X as o,cL as H,r as A,cM as M,B,D as L,a as e,au as J,aJ as P,aY as Q,W as q,G,V as v,bb as K,bc as O,bd as C,be as R,bf as V,bg as l,H as i,J as u,N as j,I as x,Q as p,ab as z,b0 as U,av as W,aw as X}from"./index-9ef70cee.js";import{S as Y}from"./save-6ea9ef39.js";const Z=E.injectEndpoints({endpoints:d=>({createSalaryAdjustment:d.mutation({query:m=>({url:"salary-adjustment",method:"POST",body:m}),invalidatesTags:["salaries"]})}),overrideExisting:!1}),{useCreateSalaryAdjustmentMutation:ee}=Z,se=o.object({adjustments:o.array(o.object({employee_id:o.number().optional(),allowance_adjustment:o.number().optional(),allowance_adjustment_note:o.string().optional(),deduction_adjustment:o.number().optional(),deduction_adjustment_note:o.string().optional()}))}),re=()=>{const[d]=H(),m=d.get("employee_ids"),b=d.get("salary_month"),_=m?m.split(",").map(s=>Number(s)):[],[g,F]=A.useState("");A.useEffect(()=>{if(_.length>0){const s=_.map(a=>`employee_ids[]=${a}&salary_month=${b}`).join("&");F(`${s}`)}},[]);const[T,{isLoading:k}]=ee(),{data:h,isLoading:$}=M(g,{skip:g.length===0}),y=(h==null?void 0:h.data)||[],N=B({resolver:L(se),defaultValues:{adjustments:y.map(s=>({employee_id:s==null?void 0:s.employee.id,allowance_adjustment:0,allowance_adjustment_note:"",deduction_adjustment:0,deduction_adjustment_note:""}))}}),{control:c,handleSubmit:I}=N,D=async s=>{const a={salary_month:b?z(U(b),"yyyy-MM"):null,adjustments:y.map((t,n)=>{var r,S,w,f;return{employee_id:t.employee.id,allowance_adjustment:Number((r=s.adjustments[n])==null?void 0:r.allowance_adjustment)||0,allowance_adjustment_note:((S=s.adjustments[n])==null?void 0:S.allowance_adjustment_note)||"",deduction_adjustment:Number((w=s.adjustments[n])==null?void 0:w.deduction_adjustment)||0,deduction_adjustment_note:((f=s.adjustments[n])==null?void 0:f.deduction_adjustment_note)||""}})};try{await T(a).unwrap(),W.success("Salary Adjustment Updated successfully")}catch(t){X(t),console.log(t)}};return $?e.jsx(J,{}):e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(P,{title:"Salary Adjustment",description:""})}),e.jsx(Q,{}),e.jsx(q,{className:"px-4 py-6",children:e.jsx(G,{...N,children:e.jsxs("form",{onSubmit:I(D),children:[e.jsxs("div",{className:"flex justify-end mb-4 gap-4",children:[e.jsx(v,{type:"button",variant:"outline",onClick:()=>window.history.back(),children:"Back"}),e.jsxs(v,{type:"submit",className:"bg-sky-500 hover:bg-sky-600",children:[e.jsx(Y,{className:"mr-2 h-4 w-4"})," ",k?"Saving...":"Save All"]})]}),e.jsxs(K,{className:"border",children:[e.jsx(O,{className:"border",children:e.jsx(C,{className:"border h-0",children:te.map((s,a)=>e.jsx(R,{className:"border py-2 h-0 text-center text-black bg-gray-100 dark:bg-gray-900 dark:text-white",children:s},a))})}),e.jsx(V,{className:"border",children:y.map((s,a)=>e.jsxs(C,{className:"border",children:[e.jsx(l,{className:"border py-[5px]",children:`${s.employee.first_name} ${s.employee.last_name}`}),e.jsxs(l,{className:"border py-[5px]",children:["TK. ",Number(s.allowance_total).toFixed(2)]}),e.jsxs(l,{className:"border py-[5px]",children:["TK. ",Number(s.deduction_total).toFixed(2)]}),e.jsx(l,{className:"border py-[5px]",children:e.jsx(i,{control:c,name:`adjustments.${a}.allowance_adjustment`,render:({field:t})=>e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(x,{type:"number",...t,className:"text-right",onChange:n=>{const r=n.target.value;t.onChange(r?Number(r):0)}})}),e.jsx(p,{})]})})}),e.jsx(l,{className:"border py-[5px]",children:e.jsx(i,{control:c,name:`adjustments.${a}.allowance_adjustment_note`,render:({field:t})=>e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(x,{type:"text",...t,className:"text-right"})}),e.jsx(p,{})]})})}),e.jsx(l,{className:"border py-[5px]",children:e.jsx(i,{control:c,name:`adjustments.${a}.deduction_adjustment`,render:({field:t})=>e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(x,{type:"number",...t,className:"text-right",onChange:n=>{const r=n.target.value;t.onChange(r?Number(r):0)}})}),e.jsx(p,{})]})})}),e.jsx(l,{className:"border py-[5px]",children:e.jsx(i,{control:c,name:`adjustments.${a}.deduction_adjustment_note`,render:({field:t})=>e.jsxs(u,{children:[e.jsx(j,{children:e.jsx(x,{type:"text",...t,className:"text-right"})}),e.jsx(p,{})]})})})]},a))})]})]})})})]})},te=["Employee Name","Allowance","Deduction","Allowance Adjust","Allowance Adjust Note","Deduction Adjust","Deduction Adjust Note"];export{re as default};
