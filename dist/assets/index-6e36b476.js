<<<<<<<< HEAD:dist/assets/index-6e36b476.js
import{r as p,a as e,U as y,b7 as S,b8 as k,b9 as u,ba as v,bb as w,bc as i,bL as B,Q as j,bM as _,bN as M,bO as F,bP as T,bi as A,B as D,a8 as N,G,bf as P,H as R,J as C,K as L,M as q,bQ as z,at as g,aG as E,aU as H,as as f}from"./index-b155454b.js";const I=({salaryData:s})=>{var b;const t=p.useRef(null);console.log("salaryData",s);const l=async()=>{if(!t.current)return;const a=new F("p","mm","a4"),r=await T(t.current,{scale:2}),o=r.toDataURL("image/png"),n=a.internal.pageSize.getWidth(),x=r.height*n/r.width;a.addImage(o,"PNG",0,0,n,x),a.save("bank-salary-voucher.pdf")},h=s.length>0?s[0].bank_date:"N/A",m=(b=s[0])==null?void 0:b.bank_advice_no;return e.jsxs("div",{children:[e.jsx("div",{ref:t,children:e.jsxs("div",{className:"p-7",children:[e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex justify-between mb-3",children:[e.jsx("p",{children:"To"}),e.jsxs("p",{children:["Date:"," ",h?new Date(h).toLocaleDateString("en-IN"):"N/A"]})," "]}),e.jsx("p",{children:"The Branch Manager"}),e.jsx("p",{children:"Ducth Bangla Bank Ltd."}),e.jsx("p",{children:"Rabindra Sarani Branch"}),e.jsx("p",{children:"Sub: Request for salary disbursement"}),e.jsx("p",{className:"mt-2",children:"Dear Sir,"}),e.jsxs("p",{children:["We would like to request you to kindly transfer Taka to our following employee accounts by debiting our current account no"," ",m," in the name of employee's month salary of May. So, please pay the salaryData of the above employees in these accounts and the total will be debited from our account."]})]}),e.jsx("div",{children:e.jsx(y,{children:e.jsxs(S,{className:"border border-black",children:[e.jsx(k,{className:"border border-black",children:e.jsx(u,{className:"border border-black h-0",children:W.map((a,r)=>e.jsx(v,{className:"border border-black py-[5px] h-0",children:a},r))})}),e.jsxs(w,{className:"border border-black",children:[s.length>0?s.map((a,r)=>{var o,n,x,c,d;return e.jsxs(u,{className:"border border-black",children:[e.jsxs(i,{className:"border border-black py-[5px]",children:[r+1," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[(o=a.employee)==null?void 0:o.first_name," ",(n=a.employee)==null?void 0:n.last_name," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[(c=(x=a==null?void 0:a.employee)==null?void 0:x.designation)==null?void 0:c.name," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[(d=a==null?void 0:a.employee)==null?void 0:d.account_number," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[a==null?void 0:a.total," "]})]},r)}):e.jsx(u,{children:e.jsx(i,{colSpan:5,className:"text-center border border-black py-[5px]",children:"No data available"})}),s.length>0&&e.jsxs(u,{className:"border border-black bg-gray-100",children:[e.jsx(i,{colSpan:4,className:"text-right font-bold border border-black py-[5px]",children:"Total"}),e.jsx(i,{colSpan:2,className:"font-bold border border-black py-[5px]",children:s&&s.length>0&&s.reduce((a,r)=>a+(r.allowance_total||0),0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})})]})]})]})})}),e.jsx("p",{className:"mb-8",children:"Sincerely"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Sheikh Rifat"}),e.jsx("p",{children:"Managing Director"}),e.jsx("p",{children:"Akaar IT Ltd."})]})]})}),e.jsxs("div",{className:"flex space-x-2 items-center justify-end mt-8 print:hidden",children:[e.jsx(B,{trigger:()=>e.jsxs(j,{size:"input",variant:"outline",className:"h-8 lg:flex",children:["Print ",e.jsx(_,{className:"ml-1",size:16,strokeWidth:1.2})]}),content:()=>t.current}),e.jsxs(j,{variant:"outline",size:"input",className:"h-8 lg:flex",onClick:l,children:["PDF ",e.jsx(M,{className:"ml-1",size:16,strokeWidth:1.2})]})]})]})},W=["SL.No","Name","Designation","A/C Number","Pay Salary"],Q=A.injectEndpoints({endpoints:s=>({getSalaryBatch:s.query({query:({salary_month:t})=>`salary-batch?salary_month=${t}`,providesTags:["salary-batch"]}),getSalariesByBatchAndMonth:s.query({query:({batch_number:t,salary_month:l})=>`salaries?batch_number=${t}&salary_month=${l}`,providesTags:["salary-batch-month"]})}),overrideExisting:!1}),{useGetSalaryBatchQuery:K,useGetSalariesByBatchAndMonthQuery:U}=Q;function $({selectedDate:s,setSelectedDate:t,selectedBatch:l,setSelectedBatch:h,onGenerate:m}){const[b,a]=p.useState(!1),r=D({defaultValues:{batch_number:""}}),o=s?N(s,"yyyy-MM"):null,{data:n}=K({salary_month:o},{skip:!o}),x=async()=>{if(s)try{a(!0)}catch(c){console.error("Failed to fetch batch numbers:",c),g(c)}};return e.jsx(G,{...r,children:e.jsx("form",{onSubmit:c=>{c.preventDefault(),m()},className:"w-full",children:e.jsx(y,{children:e.jsxs("div",{className:"grid gap-5 md:grid-cols-2 lg:grid-cols-5 p-5",children:[e.jsxs("div",{className:"space-y-2.5 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(P,{selected:s,onChange:c=>t(c),dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-[7px] w-full"})]}),b?e.jsxs(e.Fragment,{children:[e.jsx(R,{control:r.control,name:"batch_number",render:({field:c})=>e.jsxs(C,{className:"w-full",children:[e.jsx(L,{children:e.jsx("p",{className:"mt-2 mb-1",children:"Batch Number *"})}),e.jsx(q,{children:e.jsx(z,{items:(n==null?void 0:n.data)??[],labelKey:"batch_number",valueKey:"batch_number",value:l,placeholder:"Select batch number",onSelect:d=>{h(d),c.onChange((d==null?void 0:d.batch_number)||"")},className:"w-[290px]",size:"default"})})]})}),e.jsx("div",{className:"pt-8",children:e.jsx(j,{variant:"default",type:"submit",className:"w-fit",children:"Generate Bank Salary Advise"})})]}):e.jsx("div",{className:"pt-7",children:e.jsx(j,{variant:"default",onClick:x,className:"w-fit px-14 mt-[3px]",children:"Get Batch"})})]})})})})}const V=()=>{const[s,t]=p.useState(null),[l,h]=p.useState(void 0),[m,b]=p.useState(null),a=s?N(s,"yyyy-MM"):null,{refetch:r}=U({batch_number:String(l==null?void 0:l.batch_number),salary_month:a},{skip:!l||!a}),o=async()=>{if(!s||!l){f.error("Please select a date and batch.");return}try{const n=await r().unwrap();console.log("Salary Result:",n),b(n.data),f.success("Bank Salary Advise Generated Successfully")}catch(n){console.error("Failed to generate salary:",n),g(n)}};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(E,{title:"Bank Salary Advice",description:"Manage Bank Salary Advice for you business"})}),e.jsx(H,{}),e.jsx("div",{children:e.jsx($,{selectedDate:s,setSelectedDate:t,selectedBatch:l,setSelectedBatch:h,onGenerate:o})}),m&&e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsx(y,{className:"flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4",children:e.jsx(I,{salaryData:m})})})]})};export{V as default};
========
import{r as p,a as e,U as y,b7 as S,b8 as k,b9 as u,ba as v,bb as w,bc as i,bL as B,Q as j,bM as _,bN as M,bO as F,bP as T,bi as A,B as D,a8 as N,G,bf as P,H as R,J as C,K as L,M as q,bQ as z,at as g,aG as E,aU as H,as as f}from"./index-6616b137.js";const I=({salaryData:s})=>{var b;const t=p.useRef(null);console.log("salaryData",s);const l=async()=>{if(!t.current)return;const a=new F("p","mm","a4"),r=await T(t.current,{scale:2}),o=r.toDataURL("image/png"),n=a.internal.pageSize.getWidth(),x=r.height*n/r.width;a.addImage(o,"PNG",0,0,n,x),a.save("bank-salary-voucher.pdf")},h=s.length>0?s[0].bank_date:"N/A",m=(b=s[0])==null?void 0:b.bank_advice_no;return e.jsxs("div",{children:[e.jsx("div",{ref:t,children:e.jsxs("div",{className:"p-7",children:[e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex justify-between mb-3",children:[e.jsx("p",{children:"To"}),e.jsxs("p",{children:["Date:"," ",h?new Date(h).toLocaleDateString("en-IN"):"N/A"]})," "]}),e.jsx("p",{children:"The Branch Manager"}),e.jsx("p",{children:"Ducth Bangla Bank Ltd."}),e.jsx("p",{children:"Rabindra Sarani Branch"}),e.jsx("p",{children:"Sub: Request for salary disbursement"}),e.jsx("p",{className:"mt-2",children:"Dear Sir,"}),e.jsxs("p",{children:["We would like to request you to kindly transfer Taka to our following employee accounts by debiting our current account no"," ",m," in the name of employee's month salary of May. So, please pay the salaryData of the above employees in these accounts and the total will be debited from our account."]})]}),e.jsx("div",{children:e.jsx(y,{children:e.jsxs(S,{className:"border border-black",children:[e.jsx(k,{className:"border border-black",children:e.jsx(u,{className:"border border-black h-0",children:W.map((a,r)=>e.jsx(v,{className:"border border-black py-[5px] h-0",children:a},r))})}),e.jsxs(w,{className:"border border-black",children:[s.length>0?s.map((a,r)=>{var o,n,x,c,d;return e.jsxs(u,{className:"border border-black",children:[e.jsxs(i,{className:"border border-black py-[5px]",children:[r+1," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[(o=a.employee)==null?void 0:o.first_name," ",(n=a.employee)==null?void 0:n.last_name," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[(c=(x=a==null?void 0:a.employee)==null?void 0:x.designation)==null?void 0:c.name," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[(d=a==null?void 0:a.employee)==null?void 0:d.account_number," "]}),e.jsxs(i,{className:"border border-black py-[5px]",children:[a==null?void 0:a.total," "]})]},r)}):e.jsx(u,{children:e.jsx(i,{colSpan:5,className:"text-center border border-black py-[5px]",children:"No data available"})}),s.length>0&&e.jsxs(u,{className:"border border-black bg-gray-100",children:[e.jsx(i,{colSpan:4,className:"text-right font-bold border border-black py-[5px]",children:"Total"}),e.jsx(i,{colSpan:2,className:"font-bold border border-black py-[5px]",children:s&&s.length>0&&s.reduce((a,r)=>a+(r.allowance_total||0),0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})})]})]})]})})}),e.jsx("p",{className:"mb-8",children:"Sincerely"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Sheikh Rifat"}),e.jsx("p",{children:"Managing Director"}),e.jsx("p",{children:"Akaar IT Ltd."})]})]})}),e.jsxs("div",{className:"flex space-x-2 items-center justify-end mt-8 print:hidden",children:[e.jsx(B,{trigger:()=>e.jsxs(j,{size:"input",variant:"outline",className:"h-8 lg:flex",children:["Print ",e.jsx(_,{className:"ml-1",size:16,strokeWidth:1.2})]}),content:()=>t.current}),e.jsxs(j,{variant:"outline",size:"input",className:"h-8 lg:flex",onClick:l,children:["PDF ",e.jsx(M,{className:"ml-1",size:16,strokeWidth:1.2})]})]})]})},W=["SL.No","Name","Designation","A/C Number","Pay Salary"],Q=A.injectEndpoints({endpoints:s=>({getSalaryBatch:s.query({query:({salary_month:t})=>`salary-batch?salary_month=${t}`,providesTags:["salary-batch"]}),getSalariesByBatchAndMonth:s.query({query:({batch_number:t,salary_month:l})=>`salaries?batch_number=${t}&salary_month=${l}`,providesTags:["salary-batch-month"]})}),overrideExisting:!1}),{useGetSalaryBatchQuery:K,useGetSalariesByBatchAndMonthQuery:U}=Q;function $({selectedDate:s,setSelectedDate:t,selectedBatch:l,setSelectedBatch:h,onGenerate:m}){const[b,a]=p.useState(!1),r=D({defaultValues:{batch_number:""}}),o=s?N(s,"yyyy-MM"):null,{data:n}=K({salary_month:o},{skip:!o}),x=async()=>{if(s)try{a(!0)}catch(c){console.error("Failed to fetch batch numbers:",c),g(c)}};return e.jsx(G,{...r,children:e.jsx("form",{onSubmit:c=>{c.preventDefault(),m()},className:"w-full",children:e.jsx(y,{children:e.jsxs("div",{className:"grid gap-5 md:grid-cols-2 lg:grid-cols-5 p-5",children:[e.jsxs("div",{className:"space-y-2.5 flex flex-col",children:[e.jsx("label",{className:"text-sm font-medium mt-1",children:"Month and Year *"}),e.jsx(P,{selected:s,onChange:c=>t(c),dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-[7px] w-full"})]}),b?e.jsxs(e.Fragment,{children:[e.jsx(R,{control:r.control,name:"batch_number",render:({field:c})=>e.jsxs(C,{className:"w-full",children:[e.jsx(L,{children:e.jsx("p",{className:"mt-2 mb-1",children:"Batch Number *"})}),e.jsx(q,{children:e.jsx(z,{items:(n==null?void 0:n.data)??[],labelKey:"batch_number",valueKey:"batch_number",value:l,placeholder:"Select batch number",onSelect:d=>{h(d),c.onChange((d==null?void 0:d.batch_number)||"")},className:"w-[290px]",size:"default"})})]})}),e.jsx("div",{className:"pt-8",children:e.jsx(j,{variant:"default",type:"submit",className:"w-fit",children:"Generate Bank Salary Advise"})})]}):e.jsx("div",{className:"pt-7",children:e.jsx(j,{variant:"default",onClick:x,className:"w-fit px-14 mt-[3px]",children:"Get Batch"})})]})})})})}const V=()=>{const[s,t]=p.useState(null),[l,h]=p.useState(void 0),[m,b]=p.useState(null),a=s?N(s,"yyyy-MM"):null,{refetch:r}=U({batch_number:String(l==null?void 0:l.batch_number),salary_month:a},{skip:!l||!a}),o=async()=>{if(!s||!l){f.error("Please select a date and batch.");return}try{const n=await r().unwrap();console.log("Salary Result:",n),b(n.data),f.success("Bank Salary Advise Generated Successfully")}catch(n){console.error("Failed to generate salary:",n),g(n)}};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(E,{title:"Bank Salary Advice",description:"Manage Bank Salary Advice for you business"})}),e.jsx(H,{}),e.jsx("div",{children:e.jsx($,{selectedDate:s,setSelectedDate:t,selectedBatch:l,setSelectedBatch:h,onGenerate:o})}),m&&e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsx(y,{className:"flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4",children:e.jsx(I,{salaryData:m})})})]})};export{V as default};
>>>>>>>> 0ca5b693254d98a076a1d94a539afc0a89e0bcc9:dist/assets/index-5339b965.js
