import{c as u,r as f,x as v,a as e,b as x,y as p,z as N,B as h,D as m,E as g,F as w,G as i,H as d,J as c,K as y,M,N as o,Q as k,U as a,V as t,W as l,X as r,Y as b}from"./index-911882cf.js";import{R as L,B as C,X as A,Y as D,a as R}from"./BarChart-68e3ce7a.js";import"./index-e8e5dbb3.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=u("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);function S({className:n}){const[s,j]=f.useState({from:new Date(2023,0,20),to:v(new Date(2023,0,20),20)});return e.jsx("div",{className:x("grid gap-2",n),children:e.jsxs(p,{children:[e.jsx(N,{asChild:!0,children:e.jsxs(h,{id:"date",variant:"outline",className:x("w-[260px] justify-start text-left font-normal",!s&&"text-muted-foreground"),children:[e.jsx(B,{size:16,className:"mr-2"}),s!=null&&s.from?s.to?e.jsxs(e.Fragment,{children:[m(s.from,"LLL dd, y")," -"," ",m(s.to,"LLL dd, y")]}):m(s.from,"LLL dd, y"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(g,{className:"w-auto p-0",align:"end",children:e.jsx(w,{initialFocus:!0,mode:"range",defaultMonth:s==null?void 0:s.from,selected:s,onSelect:j,numberOfMonths:2})})]})})}const T=[{name:"Jan",total:Math.floor(Math.random()*5e3)+1e3},{name:"Feb",total:Math.floor(Math.random()*5e3)+1e3},{name:"Mar",total:Math.floor(Math.random()*5e3)+1e3},{name:"Apr",total:Math.floor(Math.random()*5e3)+1e3},{name:"May",total:Math.floor(Math.random()*5e3)+1e3},{name:"Jun",total:Math.floor(Math.random()*5e3)+1e3},{name:"Jul",total:Math.floor(Math.random()*5e3)+1e3},{name:"Aug",total:Math.floor(Math.random()*5e3)+1e3},{name:"Sep",total:Math.floor(Math.random()*5e3)+1e3},{name:"Oct",total:Math.floor(Math.random()*5e3)+1e3},{name:"Nov",total:Math.floor(Math.random()*5e3)+1e3},{name:"Dec",total:Math.floor(Math.random()*5e3)+1e3}];function $(){return e.jsx(L,{width:"100%",height:350,children:e.jsxs(C,{data:T,children:[e.jsx(A,{dataKey:"name",stroke:"#888888",tickLine:!1,axisLine:!1}),e.jsx(D,{stroke:"#888888",tickLine:!1,axisLine:!1,tickFormatter:n=>`$${n}`}),e.jsx(R,{dataKey:"total",className:"fill-primary",radius:[4,4,0,0]})]})})}function H(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs(i,{className:"h-9 w-9",children:[e.jsx(d,{src:"/avatars/01.png",alt:"Avatar"}),e.jsx(c,{children:"OM"})]}),e.jsxs("div",{className:"ml-4 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Olivia Martin"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"olivia.martin@email.com"})]}),e.jsx("div",{className:"ml-auto font-medium",children:"+$1,999.00"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs(i,{className:"flex h-9 w-9 items-center justify-center space-y-0 border",children:[e.jsx(d,{src:"/avatars/02.png",alt:"Avatar"}),e.jsx(c,{children:"JL"})]}),e.jsxs("div",{className:"ml-4 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Jackson Lee"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"jackson.lee@email.com"})]}),e.jsx("div",{className:"ml-auto font-medium",children:"+$39.00"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs(i,{className:"h-9 w-9",children:[e.jsx(d,{src:"/avatars/03.png",alt:"Avatar"}),e.jsx(c,{children:"IN"})]}),e.jsxs("div",{className:"ml-4 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Isabella Nguyen"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"isabella.nguyen@email.com"})]}),e.jsx("div",{className:"ml-auto font-medium",children:"+$299.00"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs(i,{className:"h-9 w-9",children:[e.jsx(d,{src:"/avatars/04.png",alt:"Avatar"}),e.jsx(c,{children:"WK"})]}),e.jsxs("div",{className:"ml-4 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"William Kim"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"will@email.com"})]}),e.jsx("div",{className:"ml-auto font-medium",children:"+$99.00"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs(i,{className:"h-9 w-9",children:[e.jsx(d,{src:"/avatars/05.png",alt:"Avatar"}),e.jsx(c,{children:"SD"})]}),e.jsxs("div",{className:"ml-4 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Sofia Davis"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"sofia.davis@email.com"})]}),e.jsx("div",{className:"ml-auto font-medium",children:"+$39.00"})]})]})}const J=({title:n})=>e.jsx("div",{className:"flex h-full flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between space-y-2",children:[e.jsx("h2",{className:"text-xl font-bold tracking-tight",children:n}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(S,{}),e.jsx(h,{size:"sm",children:"Download"})]})]}),e.jsxs(y,{defaultValue:"overview",className:"space-y-4",children:[e.jsxs(M,{children:[e.jsx(o,{value:"overview",children:"Overview"}),e.jsx(o,{value:"analytics",disabled:!0,children:"Analytics"}),e.jsx(o,{value:"reports",disabled:!0,children:"Reports"}),e.jsx(o,{value:"notifications",disabled:!0,children:"Notifications"})]}),e.jsxs(k,{value:"overview",className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs(a,{children:[e.jsxs(t,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Total Revenue"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-4 w-4 text-muted-foreground",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})})]}),e.jsxs(r,{children:[e.jsx("div",{className:"text-2xl font-bold",children:"$45,231.89"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"+20.1% from last month"})]})]}),e.jsxs(a,{children:[e.jsxs(t,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Subscriptions"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-4 w-4 text-muted-foreground",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})]})]}),e.jsxs(r,{children:[e.jsx("div",{className:"text-2xl font-bold",children:"+2350"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"+180.1% from last month"})]})]}),e.jsxs(a,{children:[e.jsxs(t,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Sales"}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-4 w-4 text-muted-foreground",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),e.jsx("path",{d:"M2 10h20"})]})]}),e.jsxs(r,{children:[e.jsx("div",{className:"text-2xl font-bold",children:"+12,234"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"+19% from last month"})]})]}),e.jsxs(a,{children:[e.jsxs(t,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(l,{className:"text-sm font-medium",children:"Active Now"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-4 w-4 text-muted-foreground",children:e.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})]}),e.jsxs(r,{children:[e.jsx("div",{className:"text-2xl font-bold",children:"+573"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"+201 since last hour"})]})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-7",children:[e.jsxs(a,{className:"col-span-4",children:[e.jsx(t,{children:e.jsx(l,{children:"Overview"})}),e.jsx(r,{className:"pl-2",children:e.jsx($,{})})]}),e.jsxs(a,{className:"col-span-3",children:[e.jsxs(t,{children:[e.jsx(l,{children:"Recent Sales"}),e.jsx(b,{children:"You made 265 sales this month."})]}),e.jsx(r,{children:e.jsx(H,{})})]})]})]})]})]})});export{J as default};
