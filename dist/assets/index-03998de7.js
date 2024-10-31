import{r as h,a as e,U as t,aY as x,aZ as p,a_ as l,a$ as d,b0 as u,b1 as a,b_ as j,B as o,b$ as N,c0 as y,c1 as f,c2 as g}from"./index-911882cf.js";const k=()=>{const n=h.useRef(null),i=async()=>{if(!n.current)return;const s=new f("p","mm","a4"),r=await g(n.current,{scale:2}),m=r.toDataURL("image/png"),c=s.internal.pageSize.getWidth(),b=r.height*c/r.width;s.addImage(m,"PNG",0,0,c,b),s.save("bank-salary-boucher.pdf")};return e.jsxs("div",{children:[e.jsx("div",{ref:n,children:e.jsxs("div",{className:"p-7",children:[e.jsxs("div",{className:"flex flex-col items-center gap-8 mb-4",children:[e.jsx("h2",{className:"font-bold text-center text-2xl",children:"Salary Certificate"}),e.jsx("p",{className:"font-bold text-center text-lg underline capitalize",children:"To whom it may concern"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"mb-4",children:"Date: 10/06/2024"}),e.jsx("p",{className:"mb-3",children:"This is to certify that Mr. Shaik Mahmud, has been employed with Akaar IT Ltd. for the past two years. He has been a dedicated and hardworking employee of our company."}),e.jsxs("div",{className:"space-y-3 mb-3",children:[e.jsx("p",{className:"font-bold",children:"Employee Details:"}),e.jsx("p",{children:"Employee ID: 1641"}),e.jsx("p",{children:"Name: Redacted"}),e.jsx("p",{children:"Employee Type: Permanent"}),e.jsx("p",{children:"Designation: Software Developer"}),e.jsx("p",{children:"Date of Joining: June 5, 2022"})]})]}),e.jsx("div",{children:e.jsx(t,{children:e.jsxs(x,{className:"border border-black",children:[e.jsx(p,{className:"border border-black",children:e.jsxs(l,{className:"border border-black h-0",children:[e.jsx(d,{colSpan:2,className:"border border-black py-[5px] h-0 text-center",children:"Earnings"}),e.jsx(d,{colSpan:2,className:"border border-black py-[5px] h-0 text-center",children:"Deductions"})]})}),e.jsxs(u,{className:"border border-black",children:[w.map((s,r)=>e.jsxs(l,{className:"border border-black ",children:[e.jsx(a,{className:"border border-black py-[5px] w-1/4",children:s.earnings}),e.jsxs(a,{className:"border border-black py-[5px] w-1/4",children:["Tk. ",s.earningAmount]}),e.jsx(a,{className:"border border-black py-[5px] w-1/4",children:s.deductions}),e.jsxs(a,{className:"border border-black py-[5px] w-1/4",children:["Tk. ",s.deductionAmount]})]},r)),e.jsxs(l,{className:"border border-black bg-gray-100",children:[e.jsx(a,{className:"font-bold border border-black py-[5px]",children:"Total Earnings"}),e.jsxs(a,{className:"font-bold border border-black py-[5px]",children:["Tk. ",1e3.toLocaleString("en-IN")]}),e.jsx(a,{className:"font-bold border border-black py-[5px]",children:"Total Deductions"}),e.jsxs(a,{className:"font-bold border border-black py-[5px]",children:["Tk. ",1e3.toLocaleString("en-IN")]})]}),e.jsxs(l,{className:"border border-black bg-gray-100",children:[e.jsx(a,{colSpan:3,className:"font-bold border border-black py-[5px] text-center",children:"Net Salary"}),e.jsxs(a,{className:"font-bold border border-black py-[5px]",children:["Tk. ",1e3.toLocaleString("en-IN")]})]})]})]})})}),e.jsx("p",{className:"my-4",children:"Mr. Shaik Mahmud’s salary is paid on a monthly basis and includes all applicable allowances and deductions as per company policy. He has shown excellent performance throughout his tenure."}),e.jsx("p",{className:"mb-4",children:"If you have any questions or need further information, please feel free to contact us."}),e.jsx("p",{className:"mb-10 font-medium",children:"Sincerely,"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Md Ashiqur Rahman"}),e.jsx("p",{children:"Chairman"}),e.jsx("p",{children:"Akaar IT Ltd."})]})]})}),e.jsxs("div",{className:"flex space-x-2 items-center justify-end mt-8 print:hidden",children:[e.jsx(j,{trigger:()=>e.jsxs(o,{size:"input",variant:"outline",className:"h-8 lg:flex",children:["Print ",e.jsx(N,{className:"ml-1",size:16,strokeWidth:1.2})]}),content:()=>n.current}),e.jsxs(o,{variant:"outline",size:"input",className:"h-8 lg:flex",onClick:i,children:["PDF ",e.jsx(y,{className:"ml-1",size:16,strokeWidth:1.2})]})]})]})},w=[{earnings:"Basic Wage",earningAmount:"100",deductions:"EPF",deductionAmount:"123"},{earnings:"House Rent Allowance",earningAmount:"100",deductions:"",deductionAmount:"123"},{earnings:"Conveyance Allowances",earningAmount:"100",deductions:"",deductionAmount:"123"},{earnings:"Medical Allowances",earningAmount:"100",deductions:"",deductionAmount:"123"},{earnings:"Other Allowances",earningAmount:"100",deductions:"",deductionAmount:"123"}],T=()=>e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx(t,{className:"flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4",children:e.jsx(k,{})})});export{T as default};
