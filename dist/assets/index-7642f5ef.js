import{bi as w,r as c,y as B,cu as D,aT as Q,B as H,a as e,G as R,U as M,b5 as J,bf as O,Q as b,H as g,J as v,K as S,M as E,I as _,N as f,a6 as V,a7 as Y,a8 as h,aR as K,a9 as L,aa as U,at as T,as as W,b7 as z,b8 as X,b9 as k,ba as u,bb as Z,bc as y}from"./index-4e4d6e52.js";const ee=w.injectEndpoints({endpoints:r=>({getEmployeesEstimateSalary:r.query({query:()=>"salary-estimate",providesTags:["salary-estimate"]}),estimateSalary:r.mutation({query:({employee_ids:n,salary_month:t})=>({url:"salary-estimate",method:"POST",body:{employee_ids:n,salary_month:t}}),invalidatesTags:["salary-estimate"]})}),overrideExisting:!1}),{useGetEmployeesEstimateSalaryQuery:oe,useEstimateSalaryMutation:ae}=ee,se=w.injectEndpoints({endpoints:r=>({getSalaryGenerate:r.query({query:()=>"salary-generate",providesTags:["salary-generate"]}),salaryGenerate:r.mutation({query:({bank_advice_no:n,bank_date:t,comment:l,employee_ids:x,salary_month:m})=>({url:"salary-generate",method:"POST",body:{bank_advice_no:n,bank_date:t,comment:l,employee_ids:x,salary_month:m}}),invalidatesTags:["salary-generate","salaries"]})}),overrideExisting:!1}),{useGetSalaryGenerateQuery:ie,useSalaryGenerateMutation:te}=se;function re({onShowEstimateSalary:r}){const[n,t]=c.useState([]),[l,x]=c.useState(null),[m,C]=c.useState(""),[N,G]=c.useState(!1),[F]=ae(),[q]=te(),P=B(),p=D(a=>a.common.selectedEmployeeAction);c.useEffect(()=>{if(p.action==="salary-estimate-generate"){const a=p.payload.map(s=>({value:String(s.id),label:`${s.first_name} ${s.last_name} (${s.id})`}));t(a)}},[p]);const{data:j}=Q(`per_page=15&page=1&text=${m}`,{skip:!m}),d=H({defaultValues:{employee_ids:"",bank_advice_no:"",bank_date:null,note:""},mode:"onSubmit",reValidateMode:"onChange"}),A=async a=>{var o;return C(a),((o=j==null?void 0:j.data)==null?void 0:o.map(i=>({value:String(i.id),label:`${i.first_name} ${i.last_name} (${i.id})`})))||[]},I=async()=>{if(!l||!n.length)return;const a=n.map(o=>Number(o.value)),s=h(l,"yyyy-MM");try{const o=await F({employee_ids:a,salary_month:s}).unwrap();o.data&&(r(o.data),G(!0))}catch(o){T(o)}},$=async a=>{if(!n.length||!l||!a.bank_advice_no)return;const s=n.map(i=>Number(i.value)),o=h(l,"yyyy-MM");try{await q({bank_advice_no:a.bank_advice_no,bank_date:h(a.bank_date,"yyyy-MM-dd"),comment:a.note,employee_ids:s,salary_month:o}).unwrap(),W.success("Salary Generated Successfully"),P("/hrm/salary-list")}catch(i){T(i)}};return e.jsx(R,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(N?$:I),className:"w-full p-4 rounded-lg space-y-6",children:[e.jsx("h2",{className:"font-semibold mb-6",children:"Estimate Salary"}),e.jsx(M,{children:e.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-6 p-5",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"employees",className:"text-sm font-medium",children:"Employees *"}),e.jsx(J,{value:n,className:"min-h-16",onSearch:A,onChange:a=>t(a),hidePlaceholderWhenSelected:!0,placeholder:"Search employees",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})]}),e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(O,{selected:l,onChange:a=>x(a),dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"})]}),N?e.jsxs(e.Fragment,{children:[e.jsx(g,{control:d.control,name:"bank_advice_no",rules:{required:"Bank Advice No is required"},render:({field:a,fieldState:s})=>e.jsxs(v,{children:[e.jsx(S,{children:"Bank Advice No"}),e.jsx(E,{children:e.jsx(_,{placeholder:"Enter Bank Advice No",...a,className:s.invalid?"border-red-500":""})}),s.error&&e.jsx(f,{children:s.error.message})]})}),e.jsx(g,{control:d.control,name:"bank_date",rules:{required:"Bank Date is required"},render:({field:a,fieldState:s})=>e.jsxs(v,{children:[e.jsx(S,{children:"Bank Date"}),e.jsxs(V,{children:[e.jsx(Y,{asChild:!0,children:e.jsxs(b,{variant:"outline",className:`w-full justify-start text-left font-normal ${s.invalid&&"border-red-500"}`,children:[a.value?h(a.value,"PP"):"Pick a date",e.jsx(K,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(L,{className:"w-auto p-0",align:"start",children:e.jsx(U,{mode:"single",selected:a.value??void 0,onSelect:o=>a.onChange(o),initialFocus:!0})})]}),s.error&&e.jsx(f,{children:s.error.message})]})}),e.jsx(g,{control:d.control,name:"note",render:({field:a})=>e.jsxs(v,{children:[e.jsx(S,{children:"Comment"}),e.jsx(E,{children:e.jsx(_,{placeholder:"Enter your comment",...a})}),e.jsx(f,{})]})}),e.jsx("div",{className:"pt-8",children:e.jsx(b,{variant:"default",type:"submit",className:"w-fit px-14",children:"Generate"})})]}):e.jsx("div",{className:"pt-7",children:e.jsx(b,{variant:"default",type:"submit",className:"w-fit px-14 mt-[3px]",children:"Estimate"})})]})})]})})}function ne({salaryData:r}){if(!r||r.length===0)return e.jsx("p",{});const n=r.reduce((t,l)=>t+l.total,0);return e.jsx("div",{className:"w-full p-5 space-y-4",children:e.jsxs(M,{className:"p-5",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold ",children:"Estimate Salary Information"}),e.jsxs("div",{children:["Total : ",e.jsx("span",{children:n})]})]}),e.jsx("div",{className:"rounded-md border mt-3",children:e.jsxs(z,{children:[e.jsx(X,{children:e.jsxs(k,{className:"",children:[e.jsx(u,{className:"",children:"Employee Name"}),e.jsx(u,{className:"",children:"Allowance"}),e.jsx(u,{className:"",children:"Deduction"}),e.jsx(u,{className:"",children:"Total"})]})}),e.jsx(Z,{children:r.map((t,l)=>e.jsxs(k,{children:[e.jsx(y,{children:t.employee_name}),e.jsx(y,{children:t.allowance}),e.jsx(y,{children:t.deduction}),e.jsx(y,{children:t.total})]},l))})]})}),e.jsx("div",{className:"mt-4 grid place-items-end",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("h3",{className:"font-semibold ",children:"Total Estimate Salary:"}),e.jsx("p",{className:"font-semibold ",children:n})]})})]})})}function ce(){const[r,n]=c.useState([]),t=l=>{n(l)};return e.jsxs("div",{children:[e.jsx(re,{onShowEstimateSalary:t}),e.jsx(ne,{salaryData:r})]})}export{ce as default};
