<<<<<<<< HEAD:dist/assets/index-e4ddf198.js
import{aF as E,aT as T,B as k,D as L,a as e,U as N,G as M,b as A,bf as D,aQ as _,Q as w,V as u,a8 as v,w as C,b7 as G,b8 as P,b9 as f,ba as b,bb as Q,R,bc as n,bV as B,bi as $,r as z,s as O,aG as H,aU as U,ar as V,bh as Y,aY as q}from"./index-b155454b.js";import{c as I}from"./index-41eb09cb.js";const W=u.object({employee_ids:u.string().optional(),salary_month:u.date(),department_id:u.string().optional(),employee_class_id:u.string().optional()});function J({setFilterParams:c}){var g;const{data:m,isLoading:d}=E("page=1&per_page=1000"),{data:o,isLoading:p}=T("page=1&per_page=1000"),{data:h,isLoading:a}=I("per_page=1000"),l=(o==null?void 0:o.data)||[],r=(m==null?void 0:m.data)||[],t=(h==null?void 0:h.data)||[],s=k({resolver:L(W)});async function i(x){const S=v(String(x.salary_month),"yyyy-MM");if(!S)return;const j=new URLSearchParams;j.append("salary_month",S),j.append("employee_ids",x.employee_ids?x.employee_ids:""),j.append("department_id",x.department_id?x.department_id:""),j.append("employee_class_id",x.employee_class_id?x.employee_class_id:"");const F=j.toString();c(F)}function y(){s.reset({employee_ids:"",salary_month:null,department_id:"",employee_class_id:""}),c("")}return e.jsx(N,{className:"p-6 w-full",children:e.jsx(M,{...s,children:e.jsx("form",{onSubmit:s.handleSubmit(i),className:" space-y-6 ",children:e.jsxs("div",{className:"grid 2xl:grid-cols-5 grid-cols-4 gap-5",children:[e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:A("text-sm font-medium mt-1",s.formState.errors.salary_month&&"text-red-500"),children:"Month and Year"}),e.jsx(D,{selected:s.watch("salary_month"),onChange:x=>{s.setValue("salary_month",x),s.trigger("salary_month")},dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"}),s.formState.errors.salary_month&&e.jsx("p",{className:"text-red-500 text-sm",children:(g=s.formState.errors.salary_month)==null?void 0:g.message})]}),e.jsx("div",{className:"w-full",children:e.jsx(_,{loading:p,data:l,displayField:"first_name",valueField:"id",form:s,name:"employee_ids",title:"Select Employee",className:"w-[245px]"})}),e.jsx("div",{className:"w-full",children:e.jsx(_,{loading:d,data:r,displayField:"name",valueField:"id",form:s,name:"department_id",title:"Select Department",className:"w-[245px]"})}),e.jsx("div",{className:"w-full",children:e.jsx(_,{loading:a,data:t,displayField:"name",valueField:"id",form:s,name:"employee_class_id",title:"Select Employee Class",className:"w-[245px]"})}),e.jsxs("div",{className:"flex space-x-4 w-full pt-8",children:[e.jsx(w,{variant:"outline",onClick:y,className:"w-fit",children:"Reset Filters"}),e.jsx(w,{variant:"default",type:"submit",className:"w-fit 2xl:px-10",children:"Apply"})]})]})})})})}const K=({data:c,salary_category:m})=>{function d(a){const l={};return a==null||a.employees.forEach(r=>{r==null||r.salaries.forEach(t=>{t.salary_details.forEach(s=>{l[s.category_name]?l[s.category_name]+=s.total:l[s.category_name]=s.total})})}),Object.values(l)}function o(a){const l={};return a.forEach(r=>{var s;const t=d(r);Object.keys((s=r.employees[0])==null?void 0:s.salaries[0].salary_details).forEach((i,y)=>{l[i]?l[i]+=t[y]:l[i]=t[y]})}),Object.values(l)}function p(a,l){let r=0;return a.employees.forEach(t=>{t.salaries.forEach(s=>{r+=s[l]||0})}),r}function h(a,l){return a.reduce((r,t)=>r+p(t,l),0)}return e.jsxs(C,{className:"w-[1567px] whitespace-nowrap",children:[e.jsxs(G,{className:"border",children:[e.jsx(P,{className:"border border-black",children:e.jsxs(f,{className:"border h-0 bg-gray-100 text-black",children:[e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"SL"}),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Name"}),m.map((a,l)=>e.jsx(b,{title:a.name,className:"border py-2.5 h-0 text-center text-black",children:a.short_code?a.short_code:a.name.split(" ").map(r=>r[0]).join(".")},l)),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Tot AI"}),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Tot Ded"}),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Net"})]})}),e.jsxs(Q,{children:[c.map((a,l)=>e.jsxs(R.Fragment,{children:[e.jsxs(f,{children:[e.jsx(n,{className:"border py-2",colSpan:2,children:"Department"}),e.jsx(n,{className:"border py-2",colSpan:12,children:a==null?void 0:a.name})]}),a.employees.map((r,t)=>{var s;return e.jsxs(f,{className:"border",children:[e.jsx(n,{className:"border py-2 text-center",children:t+1}),e.jsx(n,{className:"border py-2",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:`${r.first_name} ${r.last_name}`}),e.jsx("span",{className:"ml-1.5",children:r.designation})]})}),(s=r==null?void 0:r.salaries)==null?void 0:s.map(i=>{var y;return e.jsxs(e.Fragment,{children:[(y=i==null?void 0:i.salary_details)==null?void 0:y.map(g=>e.jsx(n,{className:"border py-2 text-right",children:g.total})),e.jsx(n,{className:"border py-2 text-right",children:i.allowance_total}),e.jsx(n,{className:"border py-2 text-right",children:i.deduction_total}),e.jsx(n,{className:"border py-2 text-right",children:i.net_salary})]})})]},t)}),e.jsxs(f,{className:"border",children:[e.jsx(n,{className:"font-semibold border py-2"}),e.jsx(n,{className:"font-semibold border py-2",children:"Subtotal"}),d(a).map(r=>e.jsx(n,{className:"font-semibold border py-2 text-right",children:r})),["allowance_total","deduction_total","net_salary"].map((r,t)=>e.jsx(n,{className:"font-semibold border py-2 text-right",children:p(a,r)},t))," "]})]},l)),e.jsxs(f,{className:"border bg-gray-100",children:[e.jsx(n,{colSpan:2,className:"font-bold border py-2",children:"Total"}),o(c).map((a,l)=>e.jsx(n,{className:"font-bold border py-2 text-right",children:a==null?void 0:a.toFixed(0)},l)),["allowance_total","deduction_total","net_salary"].map((a,l)=>e.jsx(n,{className:"font-bold border py-2 text-right",children:h(c,a)},l))]})]})]}),e.jsx(B,{orientation:"horizontal"})]})},X=K,Z=$.injectEndpoints({endpoints:c=>({getSalaryReport:c.query({query:m=>`salary-report?${m}`,providesTags:["salary-report"]})}),overrideExisting:!1}),{useGetSalaryReportQuery:ee}=Z;function le(){var t;const[c,m]=z.useState(""),{user:d}=O(),{data:o,isLoading:p,isError:h}=ee(`${c}`,{skip:!c}),a=o==null?void 0:o.data,l=(a==null?void 0:a.map(s=>s==null?void 0:s.name))||[],r=l.length>1?l.slice(0,-1).join(", ")+" and "+l.slice(-1):l[0]||"";return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(H,{title:"Salary Sheet",description:"Manage job apply for you business"})}),e.jsx(U,{}),e.jsx(J,{setFilterParams:m}),p&&e.jsx(V,{}),a&&(a==null?void 0:a.length)!==0&&!p&&!h&&e.jsx(N,{className:"p-4",children:e.jsxs(Y,{className:"space-y-4",fileName:"employee-salary-payslip",children:[e.jsxs("div",{className:"flex flex-col items-center mb-8 max-w-4xl mx-auto",children:[e.jsx("h3",{className:"text-lg font-semibold",children:d==null?void 0:d.organization.name}),e.jsx("p",{children:d==null?void 0:d.organization.address.join(", ")}),e.jsxs("p",{children:["Salary Bill (",r,")"," ",v(q((t=c==null?void 0:c.split("&")[0])==null?void 0:t.split("=")[1]),"MMM-yy")]})]}),e.jsx(X,{data:a,salary_category:o==null?void 0:o.salary_category})]})}),(a==null?void 0:a.length)===0&&!h&&!p&&e.jsx(N,{className:"flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 py-6 grid place-items-center",children:e.jsx("h2",{className:"text-center",children:"No Data Found"})})]})}export{le as default};
========
import{aF as E,aT as T,B as k,D as L,a as e,U as N,G as M,b as A,bf as D,aQ as _,Q as w,V as u,a8 as v,w as C,b7 as G,b8 as P,b9 as f,ba as b,bb as Q,R,bc as n,bV as B,bi as $,r as z,s as O,aG as H,aU as U,ar as V,bh as Y,aY as q}from"./index-6616b137.js";import{c as I}from"./index-48b9e920.js";const W=u.object({employee_ids:u.string().optional(),salary_month:u.date(),department_id:u.string().optional(),employee_class_id:u.string().optional()});function J({setFilterParams:c}){var g;const{data:m,isLoading:d}=E("page=1&per_page=1000"),{data:o,isLoading:p}=T("page=1&per_page=1000"),{data:h,isLoading:a}=I("per_page=1000"),l=(o==null?void 0:o.data)||[],r=(m==null?void 0:m.data)||[],t=(h==null?void 0:h.data)||[],s=k({resolver:L(W)});async function i(x){const S=v(String(x.salary_month),"yyyy-MM");if(!S)return;const j=new URLSearchParams;j.append("salary_month",S),j.append("employee_ids",x.employee_ids?x.employee_ids:""),j.append("department_id",x.department_id?x.department_id:""),j.append("employee_class_id",x.employee_class_id?x.employee_class_id:"");const F=j.toString();c(F)}function y(){s.reset({employee_ids:"",salary_month:null,department_id:"",employee_class_id:""}),c("")}return e.jsx(N,{className:"p-6 w-full",children:e.jsx(M,{...s,children:e.jsx("form",{onSubmit:s.handleSubmit(i),className:" space-y-6 ",children:e.jsxs("div",{className:"grid 2xl:grid-cols-5 grid-cols-4 gap-5",children:[e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx("label",{className:A("text-sm font-medium mt-1",s.formState.errors.salary_month&&"text-red-500"),children:"Month and Year"}),e.jsx(D,{selected:s.watch("salary_month"),onChange:x=>{s.setValue("salary_month",x),s.trigger("salary_month")},dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select month and year",className:"border rounded p-2 w-full bg-none bg_remove"}),s.formState.errors.salary_month&&e.jsx("p",{className:"text-red-500 text-sm",children:(g=s.formState.errors.salary_month)==null?void 0:g.message})]}),e.jsx("div",{className:"w-full",children:e.jsx(_,{loading:p,data:l,displayField:"first_name",valueField:"id",form:s,name:"employee_ids",title:"Select Employee",className:"w-[245px]"})}),e.jsx("div",{className:"w-full",children:e.jsx(_,{loading:d,data:r,displayField:"name",valueField:"id",form:s,name:"department_id",title:"Select Department",className:"w-[245px]"})}),e.jsx("div",{className:"w-full",children:e.jsx(_,{loading:a,data:t,displayField:"name",valueField:"id",form:s,name:"employee_class_id",title:"Select Employee Class",className:"w-[245px]"})}),e.jsxs("div",{className:"flex space-x-4 w-full pt-8",children:[e.jsx(w,{variant:"outline",onClick:y,className:"w-fit",children:"Reset Filters"}),e.jsx(w,{variant:"default",type:"submit",className:"w-fit 2xl:px-10",children:"Apply"})]})]})})})})}const K=({data:c,salary_category:m})=>{function d(a){const l={};return a==null||a.employees.forEach(r=>{r==null||r.salaries.forEach(t=>{t.salary_details.forEach(s=>{l[s.category_name]?l[s.category_name]+=s.total:l[s.category_name]=s.total})})}),Object.values(l)}function o(a){const l={};return a.forEach(r=>{var s;const t=d(r);Object.keys((s=r.employees[0])==null?void 0:s.salaries[0].salary_details).forEach((i,y)=>{l[i]?l[i]+=t[y]:l[i]=t[y]})}),Object.values(l)}function p(a,l){let r=0;return a.employees.forEach(t=>{t.salaries.forEach(s=>{r+=s[l]||0})}),r}function h(a,l){return a.reduce((r,t)=>r+p(t,l),0)}return e.jsxs(C,{className:"w-[1567px] whitespace-nowrap",children:[e.jsxs(G,{className:"border",children:[e.jsx(P,{className:"border border-black",children:e.jsxs(f,{className:"border h-0 bg-gray-100 text-black",children:[e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"SL"}),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Name"}),m.map((a,l)=>e.jsx(b,{title:a.name,className:"border py-2.5 h-0 text-center text-black",children:a.short_code?a.short_code:a.name.split(" ").map(r=>r[0]).join(".")},l)),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Tot AI"}),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Tot Ded"}),e.jsx(b,{className:"border py-2.5 h-0 text-center text-black",children:"Net"})]})}),e.jsxs(Q,{children:[c.map((a,l)=>e.jsxs(R.Fragment,{children:[e.jsxs(f,{children:[e.jsx(n,{className:"border py-2",colSpan:2,children:"Department"}),e.jsx(n,{className:"border py-2",colSpan:12,children:a==null?void 0:a.name})]}),a.employees.map((r,t)=>{var s;return e.jsxs(f,{className:"border",children:[e.jsx(n,{className:"border py-2 text-center",children:t+1}),e.jsx(n,{className:"border py-2",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:`${r.first_name} ${r.last_name}`}),e.jsx("span",{className:"ml-1.5",children:r.designation})]})}),(s=r==null?void 0:r.salaries)==null?void 0:s.map(i=>{var y;return e.jsxs(e.Fragment,{children:[(y=i==null?void 0:i.salary_details)==null?void 0:y.map(g=>e.jsx(n,{className:"border py-2 text-right",children:g.total})),e.jsx(n,{className:"border py-2 text-right",children:i.allowance_total}),e.jsx(n,{className:"border py-2 text-right",children:i.deduction_total}),e.jsx(n,{className:"border py-2 text-right",children:i.net_salary})]})})]},t)}),e.jsxs(f,{className:"border",children:[e.jsx(n,{className:"font-semibold border py-2"}),e.jsx(n,{className:"font-semibold border py-2",children:"Subtotal"}),d(a).map(r=>e.jsx(n,{className:"font-semibold border py-2 text-right",children:r})),["allowance_total","deduction_total","net_salary"].map((r,t)=>e.jsx(n,{className:"font-semibold border py-2 text-right",children:p(a,r)},t))," "]})]},l)),e.jsxs(f,{className:"border bg-gray-100",children:[e.jsx(n,{colSpan:2,className:"font-bold border py-2",children:"Total"}),o(c).map((a,l)=>e.jsx(n,{className:"font-bold border py-2 text-right",children:a==null?void 0:a.toFixed(0)},l)),["allowance_total","deduction_total","net_salary"].map((a,l)=>e.jsx(n,{className:"font-bold border py-2 text-right",children:h(c,a)},l))]})]})]}),e.jsx(B,{orientation:"horizontal"})]})},X=K,Z=$.injectEndpoints({endpoints:c=>({getSalaryReport:c.query({query:m=>`salary-report?${m}`,providesTags:["salary-report"]})}),overrideExisting:!1}),{useGetSalaryReportQuery:ee}=Z;function le(){var t;const[c,m]=z.useState(""),{user:d}=O(),{data:o,isLoading:p,isError:h}=ee(`${c}`,{skip:!c}),a=o==null?void 0:o.data,l=(a==null?void 0:a.map(s=>s==null?void 0:s.name))||[],r=l.length>1?l.slice(0,-1).join(", ")+" and "+l.slice(-1):l[0]||"";return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(H,{title:"Salary Sheet",description:"Manage job apply for you business"})}),e.jsx(U,{}),e.jsx(J,{setFilterParams:m}),p&&e.jsx(V,{}),a&&(a==null?void 0:a.length)!==0&&!p&&!h&&e.jsx(N,{className:"p-4",children:e.jsxs(Y,{className:"space-y-4",fileName:"employee-salary-payslip",children:[e.jsxs("div",{className:"flex flex-col items-center mb-8 max-w-4xl mx-auto",children:[e.jsx("h3",{className:"text-lg font-semibold",children:d==null?void 0:d.organization.name}),e.jsx("p",{children:d==null?void 0:d.organization.address.join(", ")}),e.jsxs("p",{children:["Salary Bill (",r,")"," ",v(q((t=c==null?void 0:c.split("&")[0])==null?void 0:t.split("=")[1]),"MMM-yy")]})]}),e.jsx(X,{data:a,salary_category:o==null?void 0:o.salary_category})]})}),(a==null?void 0:a.length)===0&&!h&&!p&&e.jsx(N,{className:"flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 py-6 grid place-items-center",children:e.jsx("h2",{className:"text-center",children:"No Data Found"})})]})}export{le as default};
>>>>>>>> 0ca5b693254d98a076a1d94a539afc0a89e0bcc9:dist/assets/index-b49ecb0e.js
