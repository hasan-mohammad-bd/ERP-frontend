<<<<<<<< HEAD:dist/assets/theme-toggle-284ce7e0.js
import{c as t,a as e,b6 as i,b7 as l,b8 as m,b9 as d,ba as c,bb as h,bc as n,bd as r,B as o,j as p}from"./index-cd9c5464.js";import{A as u,a as g,b as x}from"./avatar-1c66acb0.js";/**
========
import{c as t,a as e,b3 as i,b4 as l,b5 as m,b6 as d,b7 as c,b8 as h,b9 as n,ba as r,B as o,j as p}from"./index-22834323.js";import{A as u,a as g,b as x}from"./avatar-9cacf7d9.js";/**
>>>>>>>> main:dist/assets/theme-toggle-5fe0dd85.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),C={name:"Akaar ERP",currency:{locale:"টাকা",sign:"৳",code:"BDT",shortForm:"Tk"},phone:{country:"Bangladesh",prefix:"(BD) +88",countryCode:"+88",pattern:/^(013|015|016|017|018|019)\d{8}$/},email:{pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/}};function M({user:a,...s}){return e.jsx(u,{...s,children:a.image?e.jsx(g,{alt:"Picture",src:a.image}):e.jsxs(x,{children:[e.jsx("span",{className:"sr-only",children:a.name}),e.jsx(k,{className:"h-4 w-4"})]})})}function S({user:a}){const[s]=i();return e.jsxs(l,{children:[e.jsx(m,{children:e.jsx(M,{user:{name:a.name||null,image:a.image||null},className:"h-8 w-8 cursor-pointer"})}),e.jsxs(d,{align:"end",children:[e.jsx("div",{className:"flex items-center justify-start gap-4 p-2",children:e.jsxs("div",{className:"flex flex-col space-y-1 leading-none",children:[a.name&&e.jsx("p",{className:"font-medium",children:a.name}),a.email&&e.jsx("p",{className:"w-[200px] truncate text-sm text-zinc-700",children:a.email})]})}),e.jsx(c,{}),e.jsxs(h,{children:[e.jsxs(n,{children:["Profile",e.jsx(r,{children:"⇧⌘P"})]}),e.jsxs(n,{children:["Billing",e.jsx(r,{children:"⌘B"})]}),e.jsxs(n,{children:["Settings",e.jsx(r,{children:"⌘S"})]}),e.jsx(n,{children:"New Team"})]}),e.jsx(c,{}),e.jsx(n,{asChild:!0,children:e.jsxs(o,{variant:"outline",className:"w-full cursor-pointer",onClick:()=>s(),children:[e.jsx(j,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),"Log Out"]})})]})]})}const w="/assets/financial-profit-46a87794.png",b="/assets/accounting-a9718f8f.png",v="/assets/hrm-c620a641.png",N="/assets/crm-cda85c02.png",D="/assets/factory-0e1f9d9d.png",T="/assets/app-development-ed42f776.png",U=[{title:"Finance",href:"/finance",image:w},{title:"HRM",href:"/hrm",image:v},{title:"Accounts",href:"/accounts",image:b},{title:"Web",href:"/web",image:T},{title:"CRM",href:"/crm",image:N},{title:"MFG",href:"/mfg",image:D}];function z(){const{setTheme:a,theme:s}=p();return e.jsxs(o,{variant:"ghost",size:"icon",onClick:()=>a(s==="light"?"dark":"light"),className:"h-9 w-9 rounded-md border",children:[e.jsx(y,{className:"h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(f,{className:"absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}export{z as T,S as U,U as m,C as s};
