import{bo as $,a as e,Y as c,bQ as H,r as N,D as q,E as B,av as I,H as L,aK as O,a_ as k,X as Q,bc as _,bd as S,be as d,bf as w,bg as C,bh as r,J as y,K as p,Q as u,I as b,V as j,W as z,aG as G,aw as J}from"./index-ffb24eb6.js";const K=$.injectEndpoints({endpoints:n=>({getSalarySetups:n.query({query:l=>`salary-settings/${l}`,providesTags:["salary-settings"]}),createSalarySetup:n.mutation({query:l=>({url:"salary-settings",method:"POST",body:l}),invalidatesTags:["salary-settings"]})}),overrideExisting:!1}),{useGetSalarySetupsQuery:P,useCreateSalarySetupMutation:R}=K,V=({data:n})=>{const l=(n==null?void 0:n.employee)||{};return e.jsxs("div",{className:"mb-3 flex justify-between",children:[e.jsxs("ul",{className:"space-y-2.5",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Name:"})," ",l.first_name," ",l==null?void 0:l.last_name]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Designation:"})," ",l.designation.name]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Department:"})," ",l.department.name]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"joining Date:"})," ",l.joining_date]})]}),e.jsxs("ul",{className:"space-y-2.5 text-right",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Employee ID:"})," ",l.employee_unique_id]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Basic:"})," ",n.basic,console.log(n.basic,"employeeData")]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Bank A/C:"})," ",l.account_number]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Date:"})," ",l.joining_date]})]})]})},T=c.object({id:c.number(),name:c.string().nullable(),amount:c.string(),comment:c.string().optional().nullable()}),Y=()=>{const{employee_id:n}=H(),[l,h]=N.useState(!1),[g,D]=N.useState(null),[F,{isLoading:f}]=R(),{data:m,isLoading:v}=P(n),o=m||{employee_id:"",allowance:[],deduction:[],employee:{first_name:"",last_name:"",joining_date:"",employee_unique_id:"",account_number:"",department:{name:""},designation:{name:""}},summery:{total_allowance:0,total_allowance_arrear:0,total_deduction:0,total_deduction_arrear:0,total:0}},i=q({resolver:B(c.object({allowance:c.array(T),deduction:c.array(T)})),defaultValues:{allowance:o.allowance.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}}),deduction:o.deduction.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}})}});N.useEffect(()=>{m&&i.reset({allowance:m.allowance.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}}),deduction:m.deduction.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}})})},[m,i]);const{control:x,handleSubmit:A}=i,E=a=>{D(a),h(!0)},M=async()=>{try{if(g){const a=[...g.allowance.map(s=>({salary_category_id:s.id,amount:parseFloat(s.amount)||0,comment:s.comment||""})),...g.deduction.map(s=>({salary_category_id:s.id,amount:parseFloat(s.amount)||0,comment:s.comment||""}))];await F({employee_id:Number(n),salary_categories:a}).unwrap(),J.success("Salary setup created successfully"),h(!1)}}catch(a){console.log(a)}};return v||f?e.jsx(I,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(L,{...i,children:e.jsx("form",{onSubmit:A(E),children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(O,{title:"Salary Setup",description:"Manage job apply for you business"})}),e.jsx(k,{}),e.jsxs(Q,{className:"px-4 py-6",children:[e.jsx(V,{data:o}),e.jsxs(_,{className:"border",children:[e.jsx(S,{className:"border",children:e.jsx(d,{className:"border h-0",children:U.map((a,s)=>e.jsx(w,{className:"border py-2 h-0 text-center text-black bg-gray-100",children:a},s))})}),e.jsxs(C,{className:"border",children:[o.allowance.map((a,s)=>e.jsxs(d,{className:"border ",children:[e.jsx(r,{className:"border py-[5px]",children:a.salary_category.id}),e.jsx(r,{className:"border py-[5px] w-1/3",children:a.salary_category.name}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(y,{control:x,name:`allowance.${s}.amount`,render:({field:t})=>e.jsxs(p,{children:[e.jsx(u,{children:e.jsx(b,{type:"text",...t,className:"text-right"})}),e.jsx(j,{})]})})}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(y,{control:x,name:`allowance.${s}.comment`,render:({field:t})=>e.jsxs(p,{children:[e.jsx(u,{children:e.jsx(b,{type:"text",...t})}),e.jsx(j,{})]})})})]},s)),e.jsxs(d,{className:"border bg-gray-100",children:[e.jsx(r,{className:"font-bold border py-2"}),e.jsx(r,{className:"font-bold border py-2",children:"Sub Total"}),e.jsx(r,{className:"font-bold border py-2 text-right",children:o.summery.total_allowance}),e.jsx(r,{className:"font-bold border py-2"})]})]})]}),e.jsxs(_,{className:"border mt-6",children:[e.jsx(S,{className:"border",children:e.jsx(d,{className:"border h-0",children:W.map((a,s)=>e.jsx(w,{className:"border py-2 h-0 text-center text-black bg-gray-100",children:a},s))})}),e.jsxs(C,{className:"border",children:[o.deduction.map((a,s)=>e.jsxs(d,{className:"border ",children:[e.jsx(r,{className:"border py-[5px]",children:a.salary_category.id}),e.jsx(r,{className:"border py-[5px] w-1/3",children:a.salary_category.name}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(y,{control:x,name:`deduction.${s}.amount`,render:({field:t})=>e.jsxs(p,{children:[e.jsx(u,{children:e.jsx(b,{type:"text",...t,className:"text-right"})}),e.jsx(j,{})]})})}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(y,{control:x,name:`deduction.${s}.comment`,render:({field:t})=>e.jsxs(p,{children:[e.jsx(u,{children:e.jsx(b,{type:"text",...t})}),e.jsx(j,{})]})})})]},s)),e.jsxs(d,{className:"border bg-gray-100",children:[e.jsx(r,{className:"font-bold border py-2"}),e.jsx(r,{className:"font-bold border py-2",children:"Sub Total"}),e.jsx(r,{className:"font-bold border py-2 text-right",children:o.summery.total_deduction}),e.jsx(r,{className:"font-bold border py-2"})]}),e.jsxs(d,{className:"border bg-gray-100",children:[e.jsx(r,{className:"font-bold border py-2"}),e.jsx(r,{className:"font-bold border py-2",children:"Net Total"}),e.jsx(r,{className:"font-bold border py-2 text-right",children:o.summery.total}),e.jsx(r,{className:"font-bold border py-2"})]})]})]}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx(z,{size:"lg",className:"",children:"Submit"})})]})]})})}),e.jsx(G,{title:"Are you sure you want to update this data?",description:"This action can be change later",name:o.employee_id,isOpen:l,onClose:()=>h(!1),onConfirm:M,loading:f,type:"default",alertMessage:`Salary structure will updated for this employee ${o.employee.first_name} ${o.employee.last_name}`})]})})},U=["No","Allowance","Current Amount","Comments"],W=["No","Deduction","Current Amount","Comments"];export{Y as default};
