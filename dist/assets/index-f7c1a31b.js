import{bi as k,r as i,y as B,cD as D,aT as Q,B as H,a as e,G as R,U as M,b5 as J,bf as O,Q as b,H as g,J as S,K as f,M as E,I as _,N as v,a6 as Y,a7 as K,a8 as y,aR as L,a9 as U,aa as V,at as T,as as W,b7 as z,b8 as X,b9 as w,ba as u,bb as Z,bc as x}from"./index-e95d71c5.js";const ee=k.injectEndpoints({endpoints:l=>({getEmployeesEstimateSalary:l.query({query:()=>"salary-estimate",providesTags:["salary-estimate"]}),estimateSalary:l.mutation({query:({employee_ids:s,salary_month:t})=>({url:"salary-estimate",method:"POST",body:{employee_ids:s,salary_month:t}}),invalidatesTags:["salary-estimate"]})}),overrideExisting:!1}),{useGetEmployeesEstimateSalaryQuery:oe,useEstimateSalaryMutation:ae}=ee,se=k.injectEndpoints({endpoints:l=>({getSalaryGenerate:l.query({query:()=>"salary-generate",providesTags:["salary-generate"]}),salaryGenerate:l.mutation({query:({bank_advice_no:s,bank_date:t,comment:n,employee_ids:p,salary_month:m})=>({url:"salary-generate",method:"POST",body:{bank_advice_no:s,bank_date:t,comment:n,employee_ids:p,salary_month:m}}),invalidatesTags:["salary-generate","salaries"]})}),overrideExisting:!1}),{useGetSalaryGenerateQuery:ce,useSalaryGenerateMutation:te}=se;function le({onShowEstimateSalary:l}){const[s,t]=i.useState([]),[n,p]=i.useState(null),[m,F]=i.useState(""),[N,C]=i.useState(!1),[G]=ae(),[P]=te(),I=B(),h=D(a=>a.common.selectedEmployeeAction);console.log(s),console.log(h),i.useEffect(()=>{if(h.action==="salary-estimate-generate"){const a=h.payload.map(o=>({value:String(o.id),label:`${o.first_name} ${o.last_name} (${o.id})`}));t(a)}},[h]);const{data:j}=Q(`per_page=15&page=1&text=${m}`,{skip:!m}),d=H({defaultValues:{employee_ids:"",bank_advice_no:"",bank_date:null,note:""}}),$=async a=>{var r;return F(a),((r=j==null?void 0:j.data)==null?void 0:r.map(c=>({value:String(c.id),label:`${c.first_name} ${c.last_name} (${c.id})`})))||[]},A=async()=>{if(!n||!s.length)return;const a=s.map(r=>Number(r.value)),o=y(n,"yyyy-MM");try{const r=await G({employee_ids:a,salary_month:o}).unwrap();r.data&&(l(r.data),C(!0))}catch(r){console.error("Failed to fetch salary estimate:",r),T(r)}},q=async a=>{if(!s.length||!n||!a.bank_advice_no)return;const o=s.map(c=>Number(c.value)),r=y(n,"yyyy-MM");try{await P({bank_advice_no:a.bank_advice_no,bank_date:y(a.bank_date,"yyyy-MM-dd"),comment:a.note,employee_ids:o,salary_month:r}).unwrap(),W.success("Salary Generated Successfully"),I("/hrm/salary-list")}catch(c){console.error("Failed to generate salary:",c),T(c)}};return e.jsx(R,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(N?q:A),className:"w-full p-4 rounded-lg  space-y-6",children:[e.jsx("h2",{className:"font-semibold mb-6",children:"Estimate Salary"}),e.jsx(M,{children:e.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-6 p-5",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"employees",className:"text-sm font-medium",children:"Employees *"}),e.jsx(J,{value:s,className:"min-h-16",onSearch:$,onChange:a=>t(a),hidePlaceholderWhenSelected:!0,placeholder:"Search employees",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})]}),e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(O,{selected:n,onChange:a=>p(a),dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"})]}),N?e.jsxs(e.Fragment,{children:[e.jsx(g,{control:d.control,name:"bank_advice_no",render:({field:a})=>e.jsxs(S,{children:[e.jsx(f,{children:"Bank Advice No"}),e.jsx(E,{children:e.jsx(_,{placeholder:"Enter Bank Advice No",...a})}),e.jsx(v,{})]})}),e.jsx(g,{control:d.control,name:"bank_date",render:({field:a})=>e.jsxs(S,{children:[e.jsx(f,{children:"Bank Date"}),e.jsxs(Y,{children:[e.jsx(K,{asChild:!0,children:e.jsxs(b,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?y(a.value,"PP"):"Pick a date",e.jsx(L,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(U,{className:"w-auto p-0",align:"start",children:e.jsx(V,{mode:"single",selected:a.value??void 0,onSelect:o=>a.onChange(o),initialFocus:!0})})]}),e.jsx(v,{})]})}),e.jsx(g,{control:d.control,name:"note",render:({field:a})=>e.jsxs(S,{children:[e.jsx(f,{children:"Comment"}),e.jsx(E,{children:e.jsx(_,{placeholder:"Enter your comment",...a})}),e.jsx(v,{})]})}),e.jsx("div",{className:"pt-8",children:e.jsx(b,{variant:"default",type:"submit",className:"w-fit px-14  ",children:"Generate"})})]}):e.jsx("div",{className:"pt-7",children:e.jsx(b,{variant:"default",type:"submit",className:"w-fit px-14 mt-[3px]",children:"Estimate"})})]})})]})})}function ne({salaryData:l}){if(!l||l.length===0)return e.jsx("p",{});const s=l.reduce((t,n)=>t+n.total,0);return e.jsx("div",{className:"w-full p-5 space-y-4",children:e.jsxs(M,{className:"p-5",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold ",children:"Estimate Salary Information"}),e.jsxs("div",{children:["Total : ",e.jsx("span",{children:s})]})]}),e.jsx("div",{className:"rounded-md border mt-3",children:e.jsxs(z,{children:[e.jsx(X,{children:e.jsxs(w,{className:"",children:[e.jsx(u,{className:"",children:"Employee Name"}),e.jsx(u,{className:"",children:"Allowance"}),e.jsx(u,{className:"",children:"Deduction"}),e.jsx(u,{className:"",children:"Total"})]})}),e.jsx(Z,{children:l.map((t,n)=>e.jsxs(w,{children:[e.jsx(x,{children:t.employee_name}),e.jsx(x,{children:t.allowance}),e.jsx(x,{children:t.deduction}),e.jsx(x,{children:t.total})]},n))})]})}),e.jsx("div",{className:"mt-4 grid place-items-end",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("h3",{className:"font-semibold ",children:"Total Estimate Salary:"}),e.jsx("p",{className:"font-semibold ",children:s})]})})]})})}function ie(){const[l,s]=i.useState([]),t=n=>{s(n)};return e.jsxs("div",{children:[e.jsx(le,{onShowEstimateSalary:t}),e.jsx(ne,{salaryData:l})]})}export{ie as default};
