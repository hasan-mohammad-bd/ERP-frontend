import{bb as k,r as i,cS as q,aT as B,z as D,a as e,F as H,N as M,b2 as Q,M as f,E as S,G as b,H as g,J as N,I as _,K as v,a6 as J,a7 as L,a8 as h,aL as O,a9 as R,aa as Y,ao as T,an as z,b3 as K,b4 as V,b5 as w,b6 as y,b7 as W,b8 as x}from"./index-7aa002ab.js";/* empty css                         */import{D as U}from"./index-925d1aab.js";import"./parseISO-2d2c8399.js";const X=k.injectEndpoints({endpoints:l=>({getEmployeesEstimateSalary:l.query({query:()=>"salary-estimate",providesTags:["salary-estimate"]}),estimateSalary:l.mutation({query:({employee_ids:s,salary_month:t})=>({url:"salary-estimate",method:"POST",body:{employee_ids:s,salary_month:t}}),invalidatesTags:["salary-estimate"]})}),overrideExisting:!1}),{useGetEmployeesEstimateSalaryQuery:ce,useEstimateSalaryMutation:Z}=X,ee=k.injectEndpoints({endpoints:l=>({getSalaryGenerate:l.query({query:()=>"salary-generate",providesTags:["salary-generate"]}),salaryGenerate:l.mutation({query:({bank_advice_no:s,bank_date:t,comment:n,employee_ids:p,salary_month:m})=>({url:"salary-generate",method:"POST",body:{bank_advice_no:s,bank_date:t,comment:n,employee_ids:p,salary_month:m}}),invalidatesTags:["salary-generate"]})}),overrideExisting:!1}),{useGetSalaryGenerateQuery:ie,useSalaryGenerateMutation:ae}=ee;function se({onShowEstimateSalary:l}){const[s,t]=i.useState([]),[n,p]=i.useState(null),[m,F]=i.useState(""),[E,C]=i.useState(!1),[G]=Z(),[P]=ae(),u=q(a=>a.common.selectedEmployeeAction);console.log(s),console.log(u),i.useEffect(()=>{if(u){const a=u.payload.map(o=>({value:String(o.id),label:`${o.first_name} ${o.last_name} (${o.id})`}));t(a)}},[u]);const{data:j}=B(`per_page=15&page=1&search=${m}`,{skip:!m}),d=D({defaultValues:{employee_ids:"",bank_advice_no:"",bank_date:null,note:""}}),I=async a=>{var r;return F(a),((r=j==null?void 0:j.data)==null?void 0:r.map(c=>({value:String(c.id),label:`${c.first_name} ${c.last_name} (${c.id})`})))||[]},$=async()=>{if(!n||!s.length)return;const a=s.map(r=>Number(r.value)),o=h(n,"yyyy-MM");try{const r=await G({employee_ids:a,salary_month:o}).unwrap();r.data&&(l(r.data),C(!0))}catch(r){console.error("Failed to fetch salary estimate:",r),T(r)}},A=async a=>{if(!s.length||!n||!a.bank_advice_no)return;const o=s.map(c=>Number(c.value)),r=h(n,"yyyy-MM");try{const c=await P({bank_advice_no:a.bank_advice_no,bank_date:h(a.bank_date,"yyyy-MM-dd"),comment:a.note,employee_ids:o,salary_month:r}).unwrap();z.success("Salary Generated Successfully"),console.log("Salary generated successfully:",c)}catch(c){console.error("Failed to generate salary:",c),T(c)}};return e.jsx(H,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(E?A:$),className:"w-full p-4 rounded-lg  space-y-6",children:[e.jsx("h2",{className:"font-semibold mb-6",children:"Estimate Salary"}),e.jsx(M,{children:e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-5 p-5 ",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"employees",className:"text-sm font-medium",children:"Employees *"}),e.jsx(Q,{value:s,className:"min-h-16",onSearch:I,onChange:a=>t(a),hidePlaceholderWhenSelected:!0,placeholder:"Search employees",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})]}),e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(U,{selected:n,onChange:a=>p(a),dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"})]}),E?e.jsxs(e.Fragment,{children:[e.jsx(S,{control:d.control,name:"bank_advice_no",render:({field:a})=>e.jsxs(b,{children:[e.jsx(g,{children:"Bank Advice No"}),e.jsx(N,{children:e.jsx(_,{placeholder:"Enter Bank Advice No",...a})}),e.jsx(v,{})]})}),e.jsx(S,{control:d.control,name:"bank_date",render:({field:a})=>e.jsxs(b,{children:[e.jsx(g,{children:"Bank Date"}),e.jsxs(J,{children:[e.jsx(L,{asChild:!0,children:e.jsxs(f,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?h(a.value,"PP"):"Pick a date",e.jsx(O,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(R,{className:"w-auto p-0",align:"start",children:e.jsx(Y,{mode:"single",selected:a.value??void 0,onSelect:o=>a.onChange(o),initialFocus:!0})})]}),e.jsx(v,{})]})}),e.jsx(S,{control:d.control,name:"note",render:({field:a})=>e.jsxs(b,{children:[e.jsx(g,{children:"Comment"}),e.jsx(N,{children:e.jsx(_,{placeholder:"Enter your comment",...a})}),e.jsx(v,{})]})}),e.jsx("div",{className:"col-span-5 flex justify-end items-center mt-auto",children:e.jsx(f,{variant:"default",type:"submit",className:"w-fit px-14  ",children:"Generate"})})]}):e.jsx("div",{className:"pt-7 col-span-3 flex justify-end items-center mt-auto",children:e.jsx(f,{variant:"default",type:"submit",className:"w-fit px-14 mt-[3px]",children:"Estimate"})})]})})]})})}function te({salaryData:l}){if(!l||l.length===0)return e.jsx("p",{});const s=l.reduce((t,n)=>t+n.total,0);return e.jsx("div",{className:"w-full p-5 space-y-4",children:e.jsxs(M,{className:"p-5",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold ",children:"Estimate Salary Information"}),e.jsxs("div",{children:["Total : ",e.jsx("span",{children:s})]})]}),e.jsx("div",{className:"rounded-md border mt-3",children:e.jsxs(K,{children:[e.jsx(V,{children:e.jsxs(w,{className:"",children:[e.jsx(y,{className:"",children:"Employee Name"}),e.jsx(y,{className:"",children:"Allowance"}),e.jsx(y,{className:"",children:"Deduction"}),e.jsx(y,{className:"",children:"Total"})]})}),e.jsx(W,{children:l.map((t,n)=>e.jsxs(w,{children:[e.jsx(x,{children:t.employee_name}),e.jsx(x,{children:t.allowance}),e.jsx(x,{children:t.deduction}),e.jsx(x,{children:t.total})]},n))})]})}),e.jsx("div",{className:"mt-4 grid place-items-end",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("h3",{className:"font-semibold ",children:"Total Estimate Salary:"}),e.jsx("p",{className:"font-semibold ",children:s})]})})]})})}function de(){const[l,s]=i.useState([]),t=n=>{s(n)};return e.jsxs("div",{children:[e.jsx(se,{onShowEstimateSalary:t}),e.jsx(te,{salaryData:l})]})}export{de as default};
