<<<<<<<< HEAD:dist/assets/index-f2e96dbe.js
import{c as d,a as e,N as r,af as o,ag as A,ah as x,bm as T,a$ as R,b0 as _,b1 as b,b2 as i,b3 as I,b4 as n,x as B,cp as z,am as E,cc as H,cq as V,R as y,a8 as k,cr as q,ab as K,ae as P,cs as $,C as F}from"./index-4b237266.js";import{C as D,A as G,a as w,b as L,c as S,d as C}from"./chart-24f2a1d6.js";import{X as M,B as O,a as Q,q as X}from"./BarChart-cc3c8acb.js";import{C as U}from"./circle-dollar-sign-9118e12c.js";import"./index-e8e5dbb3.js";/**
========
import{c as d,a as e,N as r,af as o,ag as A,ah as x,bm as T,a$ as R,b0 as _,b1 as b,b2 as i,b3 as I,b4 as n,x as B,cp as z,am as E,cc as H,cq as V,R as y,a8 as k,cr as q,ab as K,ae as P,cs as $,C as F}from"./index-945ff9a6.js";import{C as D,A as G,a as w,b as L,c as S,d as C}from"./chart-e9b69866.js";import{X as M,B as O,a as Q,q as X}from"./BarChart-0589ef4e.js";import{C as U}from"./circle-dollar-sign-0f07a842.js";import"./index-e8e5dbb3.js";/**
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/index-fdd20994.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=d("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=d("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=d("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]),Y={desktop:{label:"income",color:"hsl(var(--chart-1))"},mobile:{label:"expense",color:"hsl(var(--chart-2))"}};function ee({chartData:a}){var l,t;return e.jsxs(r,{children:[e.jsx(o,{children:e.jsx(A,{className:"text-md font-normal",children:"Income vs Expense"})}),e.jsx(x,{children:e.jsx(D,{config:Y,children:e.jsxs(G,{accessibilityLayer:!0,data:a,margin:{top:20,left:12,right:12},children:[e.jsx(w,{vertical:!1}),e.jsx(M,{dataKey:"full_name",tickLine:!1,axisLine:!1,tickMargin:8,tickFormatter:c=>c.slice(0,3)}),e.jsx(L,{cursor:!1,content:e.jsx(S,{indicator:"dot"})}),e.jsx(C,{dataKey:"expense",type:"natural",fill:"var(--color-mobile)",fillOpacity:.4,stroke:"var(--color-mobile)",stackId:"a"}),e.jsx(C,{dataKey:"income",type:"natural",fill:"var(--color-desktop)",fillOpacity:.4,stroke:"var(--color-desktop)",stackId:"a"})]})})}),e.jsx(T,{children:e.jsx("div",{className:"flex w-full items-start gap-2 text-sm",children:e.jsx("div",{className:"grid gap-2",children:e.jsxs("div",{className:"flex items-center gap-2 leading-none text-muted-foreground",children:[(l=a[0])==null?void 0:l.full_name," - ",(t=a[a.length-1])==null?void 0:t.full_name]})})})})]})}const se=({tableData:a})=>e.jsx("div",{children:e.jsxs(R,{children:[e.jsx(_,{children:e.jsxs(b,{children:[e.jsx(i,{children:"Date"}),e.jsx(i,{children:"Account Code"}),e.jsx(i,{children:"Amount"})]})}),e.jsx(I,{children:a.slice(0,10).map(l=>{var t;return e.jsxs(b,{children:[e.jsx(n,{children:l.date}),e.jsx(n,{children:l.entry_number}),e.jsx(n,{children:(t=l.total)==null?void 0:t.toLocaleString("en-IN")})]},l.id)})})]})}),ae=()=>{const a=B(),{data:l,isLoading:t}=z("per_page=1000&page=1"),c=(l==null?void 0:l.data)||[];return t?e.jsx(E,{}):e.jsx(e.Fragment,{children:e.jsxs(r,{className:"p-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-md ml-0 px-2",children:"Recent Transaction"})," ",e.jsxs("div",{className:"flex items-center  cursor-pointer",children:[e.jsx("h2",{onClick:()=>a("/accounts/reports/transaction"),children:"View All "})," ",e.jsx(H,{size:16})]})]}),c&&e.jsx("div",{children:e.jsx(se,{tableData:c})})]})})},le=V.injectEndpoints({endpoints:a=>({getDashboardSummaries:a.query({query:l=>`reports/summery?${l}`,providesTags:["dashboard-summery"]})}),overrideExisting:!1}),{useGetDashboardSummariesQuery:te}=le,re={desktop:{label:"Desktop",color:"hsl(var(--chart-1))"}};function ce({chartData:a}){var l,t;return e.jsxs(r,{children:[e.jsx(o,{}),e.jsx(x,{children:e.jsx(D,{config:re,children:e.jsxs(O,{accessibilityLayer:!0,data:a,margin:{top:20,right:12,bottom:20,left:12},children:[e.jsx(w,{vertical:!1}),e.jsx(M,{dataKey:"full_name",tickLine:!1,tickMargin:10,axisLine:!1,tickFormatter:c=>c.slice(0,3)}),e.jsx(L,{cursor:!1,content:e.jsx(S,{hideLabel:!0})}),e.jsx(Q,{dataKey:"sales",fill:"var(--color-desktop)",radius:8,children:e.jsx(X,{position:"top",offset:12,className:"fill-foreground",fontSize:12})})]})})}),e.jsx(T,{className:"flex-col items-start gap-2 text-sm",children:e.jsxs("div",{className:"flex gap-2 font-medium leading-none",children:[(l=a[0])==null?void 0:l.full_name," - ",(t=a[a.length-1])==null?void 0:t.full_name]})})]})}const me=()=>{var p,f,g,u,N,v;const[a,l]=y.useState(new Date),[t,c]=y.useState(new Date),m=k(a||new Date,"yyyy-MM-dd"),h=k(t||new Date,"yyyy-MM-dd"),{data:s}=te(`start_date=${m||""}&end_date=${h||""}`),j=(s==null?void 0:s.data)||[];return e.jsx("div",{className:"flex h-full flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between space-y-2",children:[e.jsx("h2",{className:"text-xl tracking-tight",children:"Accounts Dashboard"}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(q,{setStartDate:l,setEndDate:c})})]}),e.jsx(K,{defaultValue:"overview",className:"space-y-4",children:e.jsx(P,{value:"overview",className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-5 gap-3",children:[e.jsxs("div",{className:"col-span-3",children:[e.jsxs("div",{className:"",children:[e.jsxs(r,{className:"p-3",children:[e.jsx("div",{className:"flex justify-between mb-2",children:e.jsx("h3",{className:"text-md ",children:"Growth Pluses"})}),e.jsxs("div",{className:"grid gap-3 md:grid-cols-2 lg:grid-cols-3",children:[e.jsxs(r,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-blue-200",children:e.jsx(U,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[((p=s==null?void 0:s.growth)==null?void 0:p.income.toLocaleString("en-IN"))||0," BDT"]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Total Income"})]}),e.jsxs(r,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-red-200",children:e.jsx(J,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",((f=s==null?void 0:s.growth)==null?void 0:f.expence.toLocaleString("en-IN"))||0," BDT"]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Total Expense"})]}),e.jsxs(r,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-green-200",children:e.jsx(Z,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",((g=s==null?void 0:s.growth)==null?void 0:g.net_profit.toLocaleString("en-IN"))||0," BDT"]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Net Profit"})]})]})]}),e.jsxs(r,{className:"p-3 mt-3",children:[e.jsx("div",{className:"flex justify-between mb-2",children:e.jsx("h3",{children:"Revenue Projection"})}),e.jsxs("div",{className:"grid gap-3 md:grid-cols-2 lg:grid-cols-3",children:[e.jsxs(r,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-green-200",children:e.jsx($,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[((u=s==null?void 0:s.revenue)==null?void 0:u.accounts_receivable.toLocaleString("en-IN"))||0," BDT"]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Total Receivable"})]}),e.jsxs(r,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-red-200",children:e.jsx(F,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",((N=s==null?void 0:s.revenue)==null?void 0:N.accounts_payable.toLocaleString("en-IN"))||0," BDT"]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Total Payable"})]}),e.jsxs(r,{className:"p-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2 rounded-md bg-blue-200",children:e.jsx(W,{size:16})}),e.jsxs("div",{className:"ml-3 text-lg font-bold",children:[" ",((v=s==null?void 0:s.revenue)==null?void 0:v.difference.toLocaleString("en-IN"))||0," BDT"]})]}),e.jsx("h2",{className:"mt-2 text-sm",children:"Difference"})]})]})]})]}),e.jsxs(r,{className:"mt-3",children:[e.jsx(o,{children:e.jsx("h2",{className:"text-md ",children:"Sales per month"})}),e.jsx(x,{className:"pl-2",children:e.jsx(ce,{chartData:j})})]})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"",children:e.jsx(ee,{chartData:j})}),e.jsx("div",{className:"mt-3",children:e.jsx(ae,{})})]})]})})})]})})};export{me as default};
