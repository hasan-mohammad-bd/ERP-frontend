<<<<<<<< HEAD:dist/assets/index-3b0e393e.js
import{c as m,a as e,U as c,ak as x,al as p,am as y,cs as h,ct as Z,cu as R,ad as F,cv as j,cw as g,cx as P,bu as U,an as W,cy as D,cz as ee,b7 as O,b8 as q,bb as S,b9 as d,bc as n,Y as G,Z as J,_ as $,ac as se,ae,af as le,cA as H,ba as K,w as te,bi as re,ag as ce,aj as ie}from"./index-8b9ca140.js";import{U as ne}from"./user-round-search-22c2fdf7.js";/**
========
import{c as m,a as e,U as c,ak as x,al as p,am as h,cj as y,ck as Z,cl as R,ad as F,cm as j,cn as g,co as P,bu as U,an as W,cp as D,cq as ee,b7 as q,b8 as O,bb as S,b9 as d,bc as n,Y as G,Z as J,_ as $,ac as se,ae,af as le,cr as K,ba as M,w as te,bi as re,ag as ce,aj as ie}from"./index-d9fd53dc.js";import{U as ne}from"./user-round-search-2a784eb6.js";/**
>>>>>>>> main:dist/assets/index-72c9b938.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=m("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=m("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=m("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);function xe({employee_month:a}){const s=(a==null?void 0:a.map(r=>({month:r.month_short,desktop:r.count})))||[],l={desktop:{label:"Total Employees",color:"hsl(var(--chart-1))"}};return e.jsxs(c,{children:[e.jsx(x,{children:e.jsx(p,{className:"text-md font-normal",children:"Total Employee By Year"})}),e.jsx(h,{children:e.jsx(y,{config:l,children:e.jsxs(Z,{accessibilityLayer:!0,data:s,margin:{left:12,right:12},children:[e.jsx(R,{vertical:!1}),e.jsx(F,{dataKey:"month",tickLine:!1,axisLine:!1,tickMargin:8,tickFormatter:r=>r.slice(0,3)}),e.jsx(j,{cursor:!1,content:e.jsx(g,{indicator:"line"})}),e.jsx(P,{dataKey:"desktop",type:"natural",fill:"var(--color-desktop)",fillOpacity:.4,stroke:"var(--color-desktop)"})]})})}),e.jsx(U,{children:e.jsx("div",{className:"flex w-full items-start gap-2 text-sm",children:e.jsx("div",{className:"grid gap-2",children:e.jsx("div",{className:"flex items-center gap-2 leading-none text-muted-foreground",children:"January - June 2024"})})})})]})}function pe({organizationsPicChartData:a}){const s=(a==null?void 0:a.map((r,i)=>({browser:r.name,visitors:r.employees_count,fill:`hsl(var(--chart-${i+1}))`})))||[],l=s.reduce((r,i)=>(r[i.browser]={label:i.browser,color:i.fill},r),{});return e.jsxs(c,{className:"flex flex-col",children:[e.jsxs(x,{className:"items-center pb-0",children:[e.jsx(p,{className:"text-md font-normal",children:"Employee Branch"}),e.jsx(W,{children:"January - June 2024"})]}),e.jsx(h,{className:"flex-1 pb-0",children:e.jsx(y,{config:l,className:"mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground",children:e.jsxs(D,{children:[e.jsx(j,{content:e.jsx(g,{hideLabel:!0})}),e.jsx(ee,{data:s,dataKey:"visitors",label:!0,nameKey:"browser"})]})})}),e.jsx(U,{className:"flex-col gap-2 text-sm"})]})}const he=({data:a,subject:s})=>e.jsx("div",{children:e.jsxs(q,{children:[e.jsx(O,{}),e.jsx(S,{className:"",children:a.map(l=>e.jsxs(d,{children:[e.jsx(n,{className:"w-8",children:e.jsxs(G,{children:[e.jsx(J,{className:"object-cover",src:l.image,alt:"@shadcn"}),e.jsx($,{children:"CN"})]})}),e.jsxs(n,{className:"flex flex-col ",children:[e.jsx("span",{children:l.employee_name}),e.jsx("span",{className:"text-xs text-gray-500",children:l.designation})]}),e.jsx(n,{children:s?l[s]:null})]},l.id))})]})}),ye=({title:a,data:s,subject:l})=>e.jsx(e.Fragment,{children:e.jsxs(c,{className:"p-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-md ml-0 px-2 mb-5",children:a})," "]}),e.jsx("div",{children:e.jsx(he,{data:s,subject:l})})]})}),je={desktop:{label:"total_employee",color:"hsl(var(--chart-1))"},mobile:{label:"Mobile",color:"hsl(var(--chart-2))"},label:{color:"hsl(var(--background))"}};function o({chartData:a,title:s,dataKey_1:l}){return e.jsxs(c,{children:[e.jsx(x,{children:e.jsx(p,{className:"text-md font-normal",children:s})}),e.jsx(h,{children:e.jsx(y,{config:je,children:e.jsxs(se,{accessibilityLayer:!0,data:a,layout:"vertical",margin:{right:32},children:[e.jsx(R,{horizontal:!1}),e.jsx(ae,{dataKey:l,type:"category",tickLine:!1,tickMargin:10,axisLine:!1,tickFormatter:r=>r.slice(0,3),hide:!0}),e.jsx(F,{dataKey:"total_employee",type:"number",hide:!0}),e.jsx(j,{cursor:!1,content:e.jsx(g,{indicator:"line"})}),e.jsxs(le,{dataKey:"total_employee",layout:"vertical",fill:"var(--color-desktop)",radius:4,children:[e.jsx(K,{dataKey:l,position:"insideLeft",offset:8,className:"fill-[--color-label]",fontSize:12}),e.jsx(K,{dataKey:"total_employee",position:"right",offset:8,className:"fill-foreground",fontSize:12})]})]})})})]})}const ge=({data:a,subject:s})=>e.jsx("div",{children:e.jsxs(q,{children:[e.jsx(O,{children:e.jsxs(d,{children:[e.jsx(M,{children:s?s[0].toUpperCase()+s.slice(1,s.length):null}),e.jsx(M,{className:"!text-right",children:"Employee Count"})]})}),e.jsx(S,{className:"",children:a.map(l=>e.jsxs(d,{children:[e.jsxs(n,{className:"w-8 flex items-center gap-x-2",children:[e.jsxs(G,{children:[e.jsx(J,{className:"object-cover",src:l.image,alt:"@shadcn"}),e.jsx($,{children:"CN"})]}),e.jsx("span",{className:"whitespace-nowrap",children:s?l[s]:null})]}),e.jsx(n,{className:"!text-right ",children:l.total_employee})]},l.id))})]})}),z=({title:a,data:s,subject:l})=>e.jsx(e.Fragment,{children:e.jsx(te,{className:`${s.length>=5?"h-[535px]":""}  rounded-md border`,children:e.jsxs(c,{className:"p-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-md ml-0 px-2 mb-5",children:a})," "]}),e.jsx("div",{children:e.jsx(ge,{data:s,subject:l})})]})})}),ue=re.injectEndpoints({endpoints:a=>({getDashboardHrm:a.query({query:()=>"dashboard-reports",providesTags:["dashboard-reports"]})}),overrideExisting:!1}),{useGetDashboardHrmQuery:Ne}=ue,ve=()=>{var u,N,_,f,v,b,k,C,L,w,E,T,B,A,H;const{data:a}=Ne(),s=(a==null?void 0:a.data)||[];console.log("object",a);const l=[{id:1,total_employee:Number(((u=s.employee_service_life)==null?void 0:u.years_10_plus)||0),years:"10+ years",age:"60 + ages"},{id:2,total_employee:Number(((N=s.employee_service_life)==null?void 0:N.years_5_to_10)||0),years:"5-10 years",age:"40 - 60 ages"},{id:3,total_employee:Number(((_=s.employee_service_life)==null?void 0:_.years_2_to_5)||0),years:"2-5 years",age:"20 - 40 ages"},{id:4,total_employee:Number(((f=s.employee_service_life)==null?void 0:f.years_0_to_2)||0),years:"0-2 years",age:"10 - 20 ages"},{id:5,total_employee:Number(((v=s.employee_service_life)==null?void 0:v.less_than_1_year)||0),years:"Less than 1 year",age:"Less than 10 ages"}],r=[{id:1,total_employee:Number(((b=s.employee_age_group)==null?void 0:b.age_60_plus)||0),age:"60+ ages"},{id:2,total_employee:Number(((k=s.employee_age_group)==null?void 0:k.age_40_to_60)||0),age:"40 - 60 ages"},{id:3,total_employee:Number(((C=s.employee_age_group)==null?void 0:C.age_20_to_40)||0),age:"20 - 40 ages"},{id:4,total_employee:Number(((L=s.employee_age_group)==null?void 0:L.age_10_to_20)||0),age:"10 - 20 ages"},{id:5,total_employee:Number(((w=s.employee_age_group)==null?void 0:w.age_less_than_10)||0),age:"Less than 10 ages"}],i=((E=s.genders)==null?void 0:E.map(t=>({id:t.id,total_employee:t.employees_count,gender:t.name})))||[],Y=((T=s.organizations)==null?void 0:T.map(t=>({id:t.id,total_employee:Number(t.employees_count||0),organization:t.name})))||[],I=((B=s.departments)==null?void 0:B.map(t=>({id:t.id,total_employee:Number(t.employees_count||0),department:t.name})))||[],V=Array.isArray(s==null?void 0:s.leaves_today)?s.leaves_today.map(t=>({id:t.id,employee_name:`${t.employee.first_name} ${t.employee.last_name}`,department:t.employee.department.name,designation:t.employee.designation.name})):[],Q=(s==null?void 0:s.organizations)||[],X=(s==null?void 0:s.employee_month)||[];return e.jsx("div",{className:"flex h-full flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between space-y-2",children:[e.jsx("h2",{className:"text-xl tracking-tight",children:"HRM Dashboard"}),e.jsx("div",{className:"flex items-center space-x-2"})]}),e.jsx(ce,{defaultValue:"overview",className:"space-y-4",children:e.jsxs(ie,{value:"overview",className:"space-y-4",children:[e.jsxs(c,{className:"p-3",children:[e.jsx("div",{className:"flex justify-between mb-2",children:e.jsx("h3",{className:"text-md "})}),e.jsxs("div",{className:"grid gap-3 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs(c,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-blue-200",children:e.jsx(me,{size:16})}),e.jsx("div",{className:"ml-3 text-lg font-bold",children:(A=s==null?void 0:s.employee)==null?void 0:A.total_employee})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Total Employee"})]}),e.jsxs(c,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-red-200",children:e.jsx(oe,{size:16})}),e.jsx("div",{className:"ml-3 text-lg font-bold",children:s==null?void 0:s.todays_present})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Today's Present"})]}),e.jsxs(c,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-green-200",children:e.jsx(de,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",s==null?void 0:s.leaves_today_count]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Today's Leave"})]}),e.jsxs(c,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-green-200",children:e.jsx(ne,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",(H=s==null?void 0:s.employee)==null?void 0:H.new_employee]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"New Employee"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{className:"pb-3",children:[e.jsx(xe,{employee_month:X}),e.jsx("div",{className:"mt-3",children:e.jsx(ye,{title:"Employee on Leave",subject:"department",data:V})})]}),e.jsxs("div",{className:"",children:[e.jsx("div",{className:"",children:e.jsx(pe,{organizationsPicChartData:Q})}),e.jsx("div",{className:"mt-3",children:e.jsx(z,{title:"Employee By Department",data:I,subject:"department"})}),e.jsx("div",{className:"mt-3",children:e.jsx(z,{title:"Employee By Organization",data:Y,subject:"organization"})}),e.jsx("div",{className:"mt-3"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"",children:e.jsx(o,{title:"Employee Service Life",dataKey_1:"years",chartData:l})}),e.jsx("div",{className:"mt-3",children:e.jsx(o,{title:"Employee Buy Age",dataKey_1:"age",chartData:r})}),e.jsx("div",{className:"mt-3",children:e.jsx(o,{title:"Employee Buy Gender",dataKey_1:"gender",chartData:i})})]})]})]})})]})})};export{ve as default};
