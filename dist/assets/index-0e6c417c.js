import{bi as H,a as e,V as o,bU as q,r as N,B,D as I,ar as L,G as O,aG as U,aU as k,U as G,b7 as _,b8 as S,b9 as c,ba as w,bb as C,bc as r,H as u,J as y,M as j,I as b,N as p,Q as z,aC as J,as as P}from"./index-264ac6f9.js";const Q=H.injectEndpoints({endpoints:n=>({getSalarySetups:n.query({query:d=>`salary-settings/${d}`,providesTags:["salary-settings"]}),createSalarySetup:n.mutation({query:d=>({url:"salary-settings",method:"POST",body:d}),invalidatesTags:["salary-settings"]})}),overrideExisting:!1}),{useGetSalarySetupsQuery:R,useCreateSalarySetupMutation:V}=Q,D=({employeeData:n})=>e.jsxs("div",{className:"mb-3 flex justify-between",children:[e.jsxs("ul",{className:"space-y-2.5",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Name:"})," ",n.first_name," ",n==null?void 0:n.last_name]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Designation:"})," ",n.designation.name]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Department:"})," ",n.department.name]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"joining Date:"})," ",n.joining_date]})]}),e.jsxs("ul",{className:"space-y-2.5 text-right",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Employee ID:"})," ",n.employee_unique_id]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Basic:"})," ","2000.00"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Bank A/C:"})," ",n.account_number]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Date:"})," ",n.joining_date]})]})]}),T=o.object({id:o.number(),name:o.string().nullable(),amount:o.string(),comment:o.string().optional().nullable()}),Y=()=>{const{employee_id:n}=q(),[d,h]=N.useState(!1),[g,F]=N.useState(null),[v,{isLoading:f}]=V(),{data:i,isLoading:A}=R(n),l=i||{employee_id:"",allowance:[],deduction:[],employee:{first_name:"",last_name:"",joining_date:"",employee_unique_id:"",account_number:"",department:{name:""},designation:{name:""}},summery:{total_allowance:0,total_allowance_arrear:0,total_deduction:0,total_deduction_arrear:0,total:0}},m=B({resolver:I(o.object({allowance:o.array(T),deduction:o.array(T)})),defaultValues:{allowance:l.allowance.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}}),deduction:l.deduction.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}})}});N.useEffect(()=>{i&&m.reset({allowance:i.allowance.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}}),deduction:i.deduction.map(a=>{var s,t;return{id:((s=a.salary_category)==null?void 0:s.id)||0,name:((t=a.salary_category)==null?void 0:t.name)||"",amount:a.amount||"0",comment:a.comment||""}})})},[i,m]);const{control:x,handleSubmit:M}=m,E=a=>{F(a),h(!0)},$=async()=>{try{if(g){const a=[...g.allowance.map(s=>({salary_category_id:s.id,amount:parseFloat(s.amount)||0,comment:s.comment||""})),...g.deduction.map(s=>({salary_category_id:s.id,amount:parseFloat(s.amount)||0,comment:s.comment||""}))];await v({employee_id:Number(n),salary_categories:a}).unwrap(),P.success("Salary setup created successfully"),h(!1)}}catch(a){console.log(a)}};return A||f?e.jsx(L,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(O,{...m,children:e.jsx("form",{onSubmit:M(E),children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(U,{title:"Salary Setup",description:"Manage job apply for you business"})}),e.jsx(k,{}),e.jsxs(G,{className:"px-4 py-6",children:[e.jsx(D,{employeeData:l.employee}),e.jsxs(_,{className:"border",children:[e.jsx(S,{className:"border",children:e.jsx(c,{className:"border h-0",children:K.map((a,s)=>e.jsx(w,{className:"border py-2 h-0 text-center text-black bg-gray-100",children:a},s))})}),e.jsxs(C,{className:"border",children:[l.allowance.map((a,s)=>e.jsxs(c,{className:"border ",children:[e.jsx(r,{className:"border py-[5px]",children:a.salary_category.id}),e.jsx(r,{className:"border py-[5px] w-1/3",children:a.salary_category.name}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(u,{control:x,name:`allowance.${s}.amount`,render:({field:t})=>e.jsxs(y,{children:[e.jsx(j,{children:e.jsx(b,{type:"text",...t,className:"text-right"})}),e.jsx(p,{})]})})}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(u,{control:x,name:`allowance.${s}.comment`,render:({field:t})=>e.jsxs(y,{children:[e.jsx(j,{children:e.jsx(b,{type:"text",...t})}),e.jsx(p,{})]})})})]},s)),e.jsxs(c,{className:"border bg-gray-100",children:[e.jsx(r,{className:"font-bold border py-2"}),e.jsx(r,{className:"font-bold border py-2",children:"Sub Total"}),e.jsx(r,{className:"font-bold border py-2 text-right",children:l.summery.total_allowance}),e.jsx(r,{className:"font-bold border py-2"})]})]})]}),e.jsxs(_,{className:"border mt-6",children:[e.jsx(S,{className:"border",children:e.jsx(c,{className:"border h-0",children:W.map((a,s)=>e.jsx(w,{className:"border py-2 h-0 text-center text-black bg-gray-100",children:a},s))})}),e.jsxs(C,{className:"border",children:[l.deduction.map((a,s)=>e.jsxs(c,{className:"border ",children:[e.jsx(r,{className:"border py-[5px]",children:a.salary_category.id}),e.jsx(r,{className:"border py-[5px] w-1/3",children:a.salary_category.name}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(u,{control:x,name:`deduction.${s}.amount`,render:({field:t})=>e.jsxs(y,{children:[e.jsx(j,{children:e.jsx(b,{type:"text",...t,className:"text-right"})}),e.jsx(p,{})]})})}),e.jsx(r,{className:"border py-[5px]",children:e.jsx(u,{control:x,name:`deduction.${s}.comment`,render:({field:t})=>e.jsxs(y,{children:[e.jsx(j,{children:e.jsx(b,{type:"text",...t})}),e.jsx(p,{})]})})})]},s)),e.jsxs(c,{className:"border bg-gray-100",children:[e.jsx(r,{className:"font-bold border py-2"}),e.jsx(r,{className:"font-bold border py-2",children:"Sub Total"}),e.jsx(r,{className:"font-bold border py-2 text-right",children:l.summery.total_deduction}),e.jsx(r,{className:"font-bold border py-2"})]}),e.jsxs(c,{className:"border bg-gray-100",children:[e.jsx(r,{className:"font-bold border py-2"}),e.jsx(r,{className:"font-bold border py-2",children:"Net Total"}),e.jsx(r,{className:"font-bold border py-2 text-right",children:l.summery.total}),e.jsx(r,{className:"font-bold border py-2"})]})]})]}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx(z,{size:"lg",className:"",children:"Submit"})})]})]})})}),e.jsx(J,{title:"Are you sure you want to update this data?",description:"This action can be change later",name:l.employee_id,isOpen:d,onClose:()=>h(!1),onConfirm:$,loading:f,type:"default",alertMessage:`Salary structure will updated for this employee ${l.employee.first_name} ${l.employee.last_name}`})]})})},K=["No","Allowance","Current Amount","Comments"],W=["No","Deduction","Current Amount","Comments"];export{Y as default};
