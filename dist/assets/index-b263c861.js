import{r as G,aw as q,V as Q,W as U,a as e,K as p,Z as Y,y as Z,z as X,B as H,A as u,aC as v,D,E as ee,_ as y,$ as N,a0 as _,aj as S,a1 as w,ak as C,al as F,am as T,Y as P,an as A,a2 as V,b3 as se,a3 as K,aH as ne,aI as le,aJ as R,aK as te,aL as de,R as ce,aM as n,ae as re}from"./index-eb5fac74.js";import{S as ae}from"./separator-a2e79cf3.js";import{c as ie}from"./index-fe2abc5c.js";import{a as he,b as oe}from"./index-8994ee7e.js";function xe({modalClose:x,data:s}){var J,B,L,O,z,I,$;const[l]=he(),[o]=oe(),[c,t]=G.useState(!1),[m,k]=G.useState(new Date),M=i=>{i&&(k(i),t(!1))},{data:b,isLoading:f}=q(),{data:g,isLoading:E}=ie("page=1&per_page=1000"),a=(g==null?void 0:g.data)||[],h=(b==null?void 0:b.data)||[],j=Q({resolver:U(se),defaultValues:{title:(s==null?void 0:s.title)||"",sorting_index:(s==null?void 0:s.sorting_index)||0,date:(s==null?void 0:s.date)||"",deadline:(s==null?void 0:s.deadline)||"",vacancy_number:(s==null?void 0:s.vacancy_number)||0,organization_id:((J=s==null?void 0:s.organization)==null?void 0:J.id)||1,department_id:((B=s==null?void 0:s.department)==null?void 0:B.id)||1,designation_id:((L=s==null?void 0:s.designation)==null?void 0:L.id)||1,location_id:((O=s==null?void 0:s.location)==null?void 0:O.id)||1,vacancy_requisition_id:((z=s==null?void 0:s.vacancy_requisition)==null?void 0:z.id)||1,employment_status_id:((I=s==null?void 0:s.employment_status)==null?void 0:I.id)||1,work_place_id:(($=s==null?void 0:s.work_place)==null?void 0:$.id)||1,min_age:(s==null?void 0:s.min_age)||18,max_age:(s==null?void 0:s.max_age)||60,responsibilities:(s==null?void 0:s.responsibilities)||"",education:(s==null?void 0:s.education)||"",experience:(s==null?void 0:s.experience)||"",skills:(s==null?void 0:s.skills)||"",show_salary:(s==null?void 0:s.show_salary)||0,min_salary:(s==null?void 0:s.min_salary)||0,max_salary:(s==null?void 0:s.max_salary)||0,status:(s==null?void 0:s.status)||"active"}});async function W(i){try{s?(await o({jobPostId:s.id,updatedJobPost:i}),K.success("Job Post updated successfully"),x()):(await l(i),K.success("Job Post created successfully"),x())}catch(r){console.log(r)}}return e.jsxs(p,{className:"p-6 my-8 max-w-3xl mx-auto w-full",children:[e.jsx(Y,{...j,children:e.jsx("form",{onSubmit:j.handleSubmit(W),className:" space-y-3 ",children:e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"fromDate",className:"text-sm font-medium",children:"Select Date"}),e.jsxs(Z,{open:c,onOpenChange:t,children:[e.jsx(X,{asChild:!0,className:"h-10",children:e.jsxs(H,{variant:"outline",className:`w-full justify-start text-left font-normal ${!m&&"text-muted-foreground"}`,children:[m?u(m,"PP"):"Pick a date",e.jsx(v,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(D,{className:"w-auto p-0",align:"start",children:e.jsx(ee,{mode:"single",selected:m,onSelect:M,initialFocus:!0})})]})]}),e.jsx(y,{control:j.control,name:"department_id",render:({field:i})=>{var r;return e.jsxs(N,{children:[e.jsx(_,{children:"Select Class"}),e.jsxs(S,{onValueChange:i.onChange,defaultValue:(r=s==null?void 0:s.department)!=null&&r.id?String(s.department.id):void 0,children:[e.jsx(w,{children:e.jsx(C,{children:e.jsx(F,{placeholder:"Select Class"})})}),e.jsx(T,{children:E?e.jsx(P,{}):a==null?void 0:a.map(d=>e.jsx(A,{value:String(d.id),children:d.name},d.id))})]}),e.jsx(V,{})]})}}),e.jsx(y,{control:j.control,name:"organization_id",render:({field:i})=>{var r;return e.jsxs(N,{children:[e.jsx(_,{children:"Select Department"}),e.jsxs(S,{onValueChange:i.onChange,defaultValue:(r=s==null?void 0:s.organization)!=null&&r.id?String(s.organization.id):void 0,children:[e.jsx(w,{children:e.jsx(C,{children:e.jsx(F,{placeholder:"Select Department"})})}),e.jsx(T,{children:f?e.jsx(P,{}):h==null?void 0:h.map(d=>e.jsx(A,{value:String(d.id),children:d.name},d.id))})]}),e.jsx(V,{})]})}}),e.jsx(y,{control:j.control,name:"organization_id",render:({field:i})=>{var r;return e.jsxs(N,{children:[e.jsx(_,{children:"Select Employee"}),e.jsxs(S,{onValueChange:i.onChange,defaultValue:(r=s==null?void 0:s.organization)!=null&&r.id?String(s.organization.id):void 0,children:[e.jsx(w,{children:e.jsx(C,{children:e.jsx(F,{placeholder:"Select Employee"})})}),e.jsx(T,{children:f?e.jsx(P,{}):h==null?void 0:h.map(d=>e.jsx(A,{value:String(d.id),children:d.name},d.id))})]}),e.jsx(V,{})]})}}),e.jsx(y,{control:j.control,name:"organization_id",render:({field:i})=>{var r;return e.jsxs(N,{children:[e.jsx(_,{children:"Select Report Type"}),e.jsxs(S,{onValueChange:i.onChange,defaultValue:(r=s==null?void 0:s.organization)!=null&&r.id?String(s.organization.id):void 0,children:[e.jsx(w,{children:e.jsx(C,{children:e.jsx(F,{placeholder:"Select Bill Horizontal"})})}),e.jsx(T,{children:f?e.jsx(P,{}):h==null?void 0:h.map(d=>e.jsx(A,{value:String(d.id),children:d.name},d.id))})]}),e.jsx(V,{})]})}}),e.jsx(y,{control:j.control,name:"organization_id",render:({field:i})=>{var r;return e.jsxs(N,{children:[e.jsx(_,{children:"Select Earn Deduction"}),e.jsxs(S,{onValueChange:i.onChange,defaultValue:(r=s==null?void 0:s.organization)!=null&&r.id?String(s.organization.id):void 0,children:[e.jsx(w,{children:e.jsx(C,{children:e.jsx(F,{placeholder:"Select Any"})})}),e.jsx(T,{children:f?e.jsx(P,{}):h==null?void 0:h.map(d=>e.jsx(A,{value:String(d.id),children:d.name},d.id))})]}),e.jsx(V,{})]})}})]})})}),e.jsxs("div",{className:"flex justify-center gap-4 mt-10",children:[e.jsx(H,{variant:"default",children:"View Report"}),e.jsx(H,{variant:"outline",children:"Print"})]})]})}const me=x=>{let s=0,l=0,o=0,c=0,t=0,m=0,k=0,M=0,b=0,f=0,g=0;return x.forEach(E=>{E.employees.forEach(a=>{s+=a.bp,l+=a.hra,o+=a.ma,c+=a.esa,t+=a.tiff,m+=a.wash,k+=a.tot_ai,M+=a.gpf,b+=a.bf,f+=a.tot_ded,g+=a.net})}),[s,l,o,c,t,m,k,M,b,f,g]},fe=x=>x.reduce((s,l)=>(s.bp+=l.bp,s.hra+=l.hra,s.ma+=l.ma,s.esa+=l.esa,s.tiff+=l.tiff,s.wash+=l.wash,s.tot_ai+=l.tot_ai,s.gpf+=l.gpf,s.bf+=l.bf,s.tot_ded+=l.tot_ded,s.net+=l.net,s),{bp:0,hra:0,ma:0,esa:0,tiff:0,wash:0,tot_ai:0,gpf:0,bf:0,tot_ded:0,net:0}),je=({data:x})=>{const s=me(x);return e.jsxs(ne,{className:"border",children:[e.jsx(le,{className:"border border-black",children:e.jsx(R,{className:"border h-0 bg-gray-100 text-black",children:ge.map((l,o)=>e.jsx(te,{className:"border py-2.5 h-0 text-center text-black",children:l},o))})}),e.jsxs(de,{children:[x.map((l,o)=>{const c=fe(l.employees);return e.jsxs(ce.Fragment,{children:[e.jsxs(R,{children:[e.jsx(n,{className:"border py-2",colSpan:2,children:"Department"}),e.jsx(n,{className:"border py-2",colSpan:12,children:l.department})]}),l.employees.map((t,m)=>e.jsxs(R,{className:"border",children:[e.jsx(n,{className:"border py-2 text-center",children:t.sl}),e.jsx(n,{className:"border py-2",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:t.name}),e.jsx("span",{className:"ml-1.5",children:t.position})]})}),e.jsx(n,{className:"border py-2 text-right",children:t.bp}),e.jsx(n,{className:"border py-2 text-right",children:t.hra}),e.jsx(n,{className:"border py-2 text-right",children:t.ma}),e.jsx(n,{className:"border py-2 text-right",children:t.esa}),e.jsx(n,{className:"border py-2 text-right",children:t.tiff}),e.jsx(n,{className:"border py-2 text-right",children:t.wash}),e.jsx(n,{className:"border py-2 text-right",children:t.tot_ai}),e.jsx(n,{className:"border py-2 text-right",children:t.gpf}),e.jsx(n,{className:"border py-2 text-right",children:t.bf}),e.jsx(n,{className:"border py-2 text-right",children:t.tot_ded}),e.jsx(n,{className:"border py-2 text-right",children:t.net}),e.jsx(n,{className:"border py-2 text-right",children:t.signature})]},m)),e.jsxs(R,{className:"border",children:[e.jsx(n,{className:"font-semibold border py-2"}),e.jsx(n,{className:"font-semibold border py-2",children:"Subtotal"}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.bp}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.hra}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.ma}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.esa}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.tiff}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.wash}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.tot_ai}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.gpf}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.bf}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.tot_ded}),e.jsx(n,{className:"font-semibold border py-2 text-right",children:c.net}),e.jsx(n,{className:"border py-2"})]})]},o)}),e.jsxs(R,{className:"border bg-gray-100",children:[e.jsx(n,{colSpan:2,className:"font-bold border py-2",children:"Total"}),s.map((l,o)=>e.jsx(n,{className:"font-bold border py-2 text-right",children:l},o)),e.jsx(n,{className:"font-bold border py-2"})]})]})]})},be=je,ge=["SL","Name","B.P","H.R.A","M.A","E.S.A","Tiff","Wash","Tot AI","G.P.F","B.F","Tot Ded","Net","Signature"],ye=[{department:"Secretariate of the VC",employees:[{sl:1,name:"Md. Nahid Hasan",position:"PS to VC (Assistant Registrar)",bp:31980,hra:12792,ma:1500,esa:0,tiff:0,wash:0,tot_ai:46272,gpf:3198,bf:100,tot_ded:3298,net:42974,signature:""},{sl:2,name:"Rajib Miah",position:"Office Asst.cum Comp. Op",bp:9770,hra:4800,ma:1500,esa:0,tiff:200,wash:0,tot_ai:16270,gpf:977,bf:50,tot_ded:1027,net:15243,signature:""},{sl:3,name:"Azizul Islam",position:"Driver",bp:9300,hra:4650,ma:1500,esa:0,tiff:200,wash:100,tot_ai:15750,gpf:930,bf:50,tot_ded:980,net:14770,signature:""},{sl:4,name:"Md. Rakib Hossain",position:"Cook",bp:8670,hra:4500,ma:1500,esa:500,tiff:200,wash:100,tot_ai:15470,gpf:867,bf:50,tot_ded:917,net:14553,signature:""},{sl:5,name:"Nazmul Hassan",position:"Office Attendent",bp:8670,hra:4500,ma:1500,esa:0,tiff:200,wash:100,tot_ai:14970,gpf:867,bf:50,tot_ded:917,net:14053,signature:""}]},{department:"Registrar Office",employees:[{sl:1,name:"Md. Sabbir Ahmed",position:"Administrative officer",bp:16800,hra:7e3,ma:1500,esa:0,tiff:0,wash:0,tot_ai:25300,gpf:1680,bf:100,tot_ded:1780,net:23520,signature:""}]},{department:"Finance & Accounts Section",employees:[{sl:1,name:"Mubarak Khan",position:"Assistant Registrar",bp:24260,hra:9704,ma:1500,esa:0,tiff:0,wash:0,tot_ai:35464,gpf:2426,bf:100,tot_ded:2526,net:32938,signature:""},{sl:2,name:"Ratan Kumar Dey",position:"Accounts Assistant",bp:9300,hra:4650,ma:1500,esa:0,tiff:0,wash:0,tot_ai:15450,gpf:930,bf:50,tot_ded:980,net:14470,signature:""}]}],Ne=ye;function Fe(){return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(re,{title:"Salary Sheet",description:"Manage job apply for you business"})}),e.jsx(ae,{}),e.jsx(xe,{modalClose:function(){throw new Error("Function not implemented.")}}),e.jsxs(p,{className:"p-4",children:[e.jsxs("div",{className:"flex flex-col items-center capitalize mb-8",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"habiganj Agriculture Univercity"}),e.jsx("p",{children:"Habiganj - 3300."}),e.jsx("p",{children:"Salary Bill ( Teachers, Officers and Staff ) January, 2023"})]}),e.jsx("div",{className:"rounded-md overflow-hidden",children:e.jsx(be,{data:Ne})})]})]})}export{Fe as default};
