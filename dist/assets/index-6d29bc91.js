<<<<<<<< HEAD:dist/assets/index-1e39dd55.js
import{bR as j,bS as T,s as _,a as e,a8 as k,U as u,b7 as v,b8 as $,b9 as h,ba as w,bb as a,bc as c,r as E,bT as M,bQ as F,Q as z,bi as A,aG as I,aU as L,ar as R,bh as q}from"./index-b155454b.js";function S(s,n){const d=j(s),l=j(n),o=d.getTime()-l.getTime();return o<0?-1:o>0?1:o}function H(s,n){const d=j(s),l=j(n),o=S(d,l),r=Math.abs(T(d,l));d.setFullYear(1584),l.setFullYear(1584);const p=S(d,l)===-o,m=o*(r-+p);return m===0?0:m}const Y=({salaryCertificateData:s})=>{var d,l,o,r,p,m,N,g,t,y;const{user:n}=_();if(s)return console.log(s),e.jsx("div",{children:e.jsx("div",{children:e.jsxs("div",{className:"p-7",children:[e.jsxs("div",{className:"flex flex-col items-center gap-8 mb-4",children:[e.jsx("h2",{className:"font-bold text-center text-2xl",children:"Salary Certificate"}),e.jsx("p",{className:"font-bold text-center text-lg underline capitalize",children:"To whom it may concern"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("p",{className:"mb-4",children:["Date: ",k(new Date,"MM/dd/yyyy")]}),e.jsxs("p",{className:"mb-3",children:["This is to certify that"," ",`${(d=s==null?void 0:s.employee)==null?void 0:d.first_name} ${(l=s==null?void 0:s.employee)==null?void 0:l.last_name}`,", has been employed with ",n==null?void 0:n.organization.name," for the past",` ${H(new Date,new Date(s.employee.joining_date))} years`,". He has been a dedicated and hardworking employee of our company."]}),e.jsxs("div",{className:"space-y-3 mb-3",children:[e.jsx("p",{className:"font-bold",children:"Employee Details:"}),e.jsxs("p",{children:["Employee ID:"," ",(o=s==null?void 0:s.employee)==null?void 0:o.employee_unique_id]}),e.jsxs("p",{children:["Name:"," ",`${(r=s==null?void 0:s.employee)==null?void 0:r.first_name} ${(p=s==null?void 0:s.employee)==null?void 0:p.last_name}`]}),e.jsx("p",{children:"Employee Type: Permanent"}),e.jsxs("p",{children:["Designation:"," ",(N=(m=s==null?void 0:s.employee)==null?void 0:m.designation)==null?void 0:N.name]}),e.jsxs("p",{children:["Date of Joining:"," ",k((g=s==null?void 0:s.employee)==null?void 0:g.joining_date,"MMM dd, yyy")]})]})]}),e.jsx("div",{children:e.jsx(u,{children:e.jsxs(v,{className:"border border-black",children:[e.jsx($,{className:"border border-black",children:e.jsxs(h,{className:"border border-black h-0",children:[e.jsx(w,{colSpan:2,className:"border border-black py-[5px] h-0 text-center",children:"Earnings"}),e.jsx(w,{colSpan:2,className:"border border-black py-[5px] h-0 text-center",children:"Deductions"})]})}),e.jsxs(a,{className:"border border-black",children:[s&&s.allowance&&s.deduction&&Array.from({length:Math.max(s.allowance.length,s.deduction.length)}).map((B,i)=>{const x=s.allowance[i],b=s.deduction[i];return e.jsxs(h,{className:"border border-black",children:[e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:x?x.salary_category.name:""}),e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:x?`Tk. ${x.amount}`:""}),e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:b?b.salary_category.name:""}),e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:b?`Tk. ${b.amount}`:""})]},i)}),e.jsxs(h,{className:"border border-black bg-gray-100",children:[e.jsx(c,{className:"font-bold border border-black py-[5px]",children:"Total Earnings"}),e.jsxs(c,{className:"font-bold border border-black py-[5px]",children:["Tk. ",s==null?void 0:s.summery.total_allowance]}),e.jsx(c,{className:"font-bold border border-black py-[5px]",children:"Total Deductions"}),e.jsxs(c,{className:"font-bold border border-black py-[5px]",children:["Tk.",s==null?void 0:s.summery.total_deduction]})]}),e.jsxs(h,{className:"border border-black bg-gray-100",children:[e.jsx(c,{colSpan:3,className:"font-bold border border-black py-[5px] text-center",children:"Net Salary"}),e.jsxs(c,{className:"font-bold border border-black py-[5px]",children:["Tk. ",s==null?void 0:s.summery.total]})]})]})]})})}),e.jsxs("p",{className:"my-4",children:[`${(t=s==null?void 0:s.employee)==null?void 0:t.first_name} ${(y=s==null?void 0:s.employee)==null?void 0:y.last_name}’s `,"salary is paid on a monthly basis and includes all applicable allowances and deductions as per company policy. He has shown excellent performance throughout his tenure."]}),e.jsx("p",{className:"mb-4",children:"If you have any questions or need further information, please feel free to contact us."}),e.jsx("p",{className:"mb-10 font-medium",children:"Sincerely,"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Md Ashiqur Rahman"}),e.jsx("p",{children:"Chairman"}),e.jsx("p",{children:n==null?void 0:n.organization.name})]})]})})})};function P({setFilterParams:s}){const[n,d]=E.useState(),[l,{data:o}]=M(),r=(o==null?void 0:o.data)||[],p=()=>{s(String(n==null?void 0:n.id))};return e.jsx(u,{className:"p-5",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(F,{items:r||[],labelKey:"first_name",valueKey:"id",value:n,placeholder:"Select Employee",onSelect:d,onChangeSearch:m=>l(`text=${m}`),className:"w-[250px]"}),e.jsx(z,{variant:"default",className:"w-fit px-14 capitalize",onClick:p,size:"sm",children:"apply"})]})})}const Q=A.injectEndpoints({endpoints:s=>({getEmployeeSalaryCertificate:s.query({query:n=>`salary-settings/${n}`,providesTags:["salary-settings"]})}),overrideExisting:!1}),{useGetEmployeeSalaryCertificateQuery:G}=Q,U=()=>{const[s,n]=E.useState(""),{data:d,isLoading:l,isError:o}=G(s,{skip:!s});return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(I,{title:"Employee Salary Certificate",description:""})}),e.jsx(L,{}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(P,{setFilterParams:n}),l&&e.jsx(R,{}),d&&!l&&!o&&e.jsx(u,{className:"flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4",children:e.jsx(q,{className:"space-y-4",fileName:"employee-salary-certificate",children:e.jsx(Y,{salaryCertificateData:d})})}),o&&!l&&e.jsx(u,{className:"flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 py-6 grid place-items-center",children:e.jsx("h2",{className:"text-center",children:"No Data Found"})})]})]})};export{U as default};
========
import{bR as j,bS as T,s as _,a as e,a8 as k,U as u,b7 as v,b8 as $,b9 as h,ba as w,bb as a,bc as c,r as E,bT as M,bQ as F,Q as z,bi as A,aG as I,aU as L,ar as R,bh as q}from"./index-6616b137.js";function S(s,n){const d=j(s),l=j(n),o=d.getTime()-l.getTime();return o<0?-1:o>0?1:o}function H(s,n){const d=j(s),l=j(n),o=S(d,l),r=Math.abs(T(d,l));d.setFullYear(1584),l.setFullYear(1584);const p=S(d,l)===-o,m=o*(r-+p);return m===0?0:m}const Y=({salaryCertificateData:s})=>{var d,l,o,r,p,m,N,g,t,y;const{user:n}=_();if(s)return console.log(s),e.jsx("div",{children:e.jsx("div",{children:e.jsxs("div",{className:"p-7",children:[e.jsxs("div",{className:"flex flex-col items-center gap-8 mb-4",children:[e.jsx("h2",{className:"font-bold text-center text-2xl",children:"Salary Certificate"}),e.jsx("p",{className:"font-bold text-center text-lg underline capitalize",children:"To whom it may concern"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("p",{className:"mb-4",children:["Date: ",k(new Date,"MM/dd/yyyy")]}),e.jsxs("p",{className:"mb-3",children:["This is to certify that"," ",`${(d=s==null?void 0:s.employee)==null?void 0:d.first_name} ${(l=s==null?void 0:s.employee)==null?void 0:l.last_name}`,", has been employed with ",n==null?void 0:n.organization.name," for the past",` ${H(new Date,new Date(s.employee.joining_date))} years`,". He has been a dedicated and hardworking employee of our company."]}),e.jsxs("div",{className:"space-y-3 mb-3",children:[e.jsx("p",{className:"font-bold",children:"Employee Details:"}),e.jsxs("p",{children:["Employee ID:"," ",(o=s==null?void 0:s.employee)==null?void 0:o.employee_unique_id]}),e.jsxs("p",{children:["Name:"," ",`${(r=s==null?void 0:s.employee)==null?void 0:r.first_name} ${(p=s==null?void 0:s.employee)==null?void 0:p.last_name}`]}),e.jsx("p",{children:"Employee Type: Permanent"}),e.jsxs("p",{children:["Designation:"," ",(N=(m=s==null?void 0:s.employee)==null?void 0:m.designation)==null?void 0:N.name]}),e.jsxs("p",{children:["Date of Joining:"," ",k((g=s==null?void 0:s.employee)==null?void 0:g.joining_date,"MMM dd, yyy")]})]})]}),e.jsx("div",{children:e.jsx(u,{children:e.jsxs(v,{className:"border border-black",children:[e.jsx($,{className:"border border-black",children:e.jsxs(h,{className:"border border-black h-0",children:[e.jsx(w,{colSpan:2,className:"border border-black py-[5px] h-0 text-center",children:"Earnings"}),e.jsx(w,{colSpan:2,className:"border border-black py-[5px] h-0 text-center",children:"Deductions"})]})}),e.jsxs(a,{className:"border border-black",children:[s&&s.allowance&&s.deduction&&Array.from({length:Math.max(s.allowance.length,s.deduction.length)}).map((B,i)=>{const x=s.allowance[i],b=s.deduction[i];return e.jsxs(h,{className:"border border-black",children:[e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:x?x.salary_category.name:""}),e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:x?`Tk. ${x.amount}`:""}),e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:b?b.salary_category.name:""}),e.jsx(c,{className:"border border-black py-[5px] w-1/4",children:b?`Tk. ${b.amount}`:""})]},i)}),e.jsxs(h,{className:"border border-black bg-gray-100",children:[e.jsx(c,{className:"font-bold border border-black py-[5px]",children:"Total Earnings"}),e.jsxs(c,{className:"font-bold border border-black py-[5px]",children:["Tk. ",s==null?void 0:s.summery.total_allowance]}),e.jsx(c,{className:"font-bold border border-black py-[5px]",children:"Total Deductions"}),e.jsxs(c,{className:"font-bold border border-black py-[5px]",children:["Tk.",s==null?void 0:s.summery.total_deduction]})]}),e.jsxs(h,{className:"border border-black bg-gray-100",children:[e.jsx(c,{colSpan:3,className:"font-bold border border-black py-[5px] text-center",children:"Net Salary"}),e.jsxs(c,{className:"font-bold border border-black py-[5px]",children:["Tk. ",s==null?void 0:s.summery.total]})]})]})]})})}),e.jsxs("p",{className:"my-4",children:[`${(t=s==null?void 0:s.employee)==null?void 0:t.first_name} ${(y=s==null?void 0:s.employee)==null?void 0:y.last_name}’s `,"salary is paid on a monthly basis and includes all applicable allowances and deductions as per company policy. He has shown excellent performance throughout his tenure."]}),e.jsx("p",{className:"mb-4",children:"If you have any questions or need further information, please feel free to contact us."}),e.jsx("p",{className:"mb-10 font-medium",children:"Sincerely,"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Md Ashiqur Rahman"}),e.jsx("p",{children:"Chairman"}),e.jsx("p",{children:n==null?void 0:n.organization.name})]})]})})})};function P({setFilterParams:s}){const[n,d]=E.useState(),[l,{data:o}]=M(),r=(o==null?void 0:o.data)||[],p=()=>{s(String(n==null?void 0:n.id))};return e.jsx(u,{className:"p-5",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(F,{items:r||[],labelKey:"first_name",valueKey:"id",value:n,placeholder:"Select Employee",onSelect:d,onChangeSearch:m=>l(`text=${m}`),className:"w-[250px]"}),e.jsx(z,{variant:"default",className:"w-fit px-14 capitalize",onClick:p,size:"sm",children:"apply"})]})})}const Q=A.injectEndpoints({endpoints:s=>({getEmployeeSalaryCertificate:s.query({query:n=>`salary-settings/${n}`,providesTags:["salary-settings"]})}),overrideExisting:!1}),{useGetEmployeeSalaryCertificateQuery:G}=Q,U=()=>{const[s,n]=E.useState(""),{data:d,isLoading:l,isError:o}=G(s,{skip:!s});return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(I,{title:"Employee Salary Certificate",description:""})}),e.jsx(L,{}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(P,{setFilterParams:n}),l&&e.jsx(R,{}),d&&!l&&!o&&e.jsx(u,{className:"flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4",children:e.jsx(q,{className:"space-y-4",fileName:"employee-salary-certificate",children:e.jsx(Y,{salaryCertificateData:d})})}),o&&!l&&e.jsx(u,{className:"flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 py-6 grid place-items-center",children:e.jsx("h2",{className:"text-center",children:"No Data Found"})})]})]})};export{U as default};
>>>>>>>> 0ca5b693254d98a076a1d94a539afc0a89e0bcc9:dist/assets/index-6d29bc91.js
