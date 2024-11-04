import{c as n,a as e,W as o,X as m,Y as d,Z as h,_ as g,$ as p,a0 as u,a1 as r,a2 as x,a3 as t,a4 as c,M as l,j as f}from"./index-606beb75.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=n("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function M({user:a,...s}){return e.jsx(o,{...s,children:a.image?e.jsx(m,{alt:"Picture",src:a.image}):e.jsxs(d,{children:[e.jsx("span",{className:"sr-only",children:a.name}),e.jsx(w,{className:"h-4 w-4"})]})})}function z({user:a}){const[s]=h();return e.jsxs(g,{children:[e.jsx(p,{children:e.jsx(M,{user:{name:a.name||null,image:a.image||null},className:"h-8 w-8 cursor-pointer"})}),e.jsxs(u,{align:"end",children:[e.jsx("div",{className:"flex items-center justify-start gap-4 p-2",children:e.jsxs("div",{className:"flex flex-col space-y-1 leading-none",children:[a.name&&e.jsx("p",{className:"font-medium",children:a.name}),a.email&&e.jsx("p",{className:"w-[200px] truncate text-sm text-zinc-700",children:a.email})]})}),e.jsx(r,{}),e.jsxs(x,{children:[e.jsxs(t,{children:["Profile",e.jsx(c,{children:"⇧⌘P"})]}),e.jsxs(t,{children:["Billing",e.jsx(c,{children:"⌘B"})]}),e.jsxs(t,{children:["Settings",e.jsx(c,{children:"⌘S"})]}),e.jsx(t,{children:"New Team"})]}),e.jsx(r,{}),e.jsx(t,{asChild:!0,children:e.jsxs(l,{variant:"outline",className:"w-full cursor-pointer",onClick:()=>s(),children:[e.jsx(j,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),"Log Out"]})})]})]})}const v="/assets/financial-profit-46a87794.png",i="/assets/accounting-a9718f8f.png",N="/assets/hrm-c620a641.png",b="/assets/crm-cda85c02.png",C="/assets/factory-0e1f9d9d.png",D="/assets/app-development-ed42f776.png",L=[{title:"Finance",href:"/finance",image:v},{title:"HRM",href:"/hrm",image:N},{title:"Accounts",href:"/accounts",image:i},{title:"Billing",href:"/billing",image:i},{title:"Web",href:"/web",image:D},{title:"CRM",href:"/crm",image:b},{title:"MFG",href:"/mfg",image:C}],T="web,finance,accounts,hrm,billing,crm,mfg",S=T.split(",").map(a=>a.trim().toLowerCase()),A=L.filter(a=>S.includes(a.title.toLowerCase()));function I(){const{setTheme:a,theme:s}=f();return e.jsxs(l,{variant:"ghost",size:"icon",onClick:()=>a(s==="light"?"dark":"light"),className:"h-9 w-9 rounded-md border",children:[e.jsx(k,{className:"h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(y,{className:"absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}const B="/assets/sticky-logo-ae42e66d.png";export{I as T,z as U,B as l,A as m};
