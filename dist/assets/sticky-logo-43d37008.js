<<<<<<<< HEAD:dist/assets/sticky-logo-0efe8b3b.js
import{c as t,a as e,_ as r,$ as c,a0 as o,a1 as i,a2 as m,a3 as d,a4 as h,a5 as g,a6 as p,a7 as u,V as l,j as x}from"./index-6406284f.js";/**
========
import{c as t,a as e,_ as o,$ as r,a0 as c,a1 as i,a2 as m,a3 as d,a4 as h,a5 as g,a6 as p,a7 as u,V as l,j as x}from"./index-40479168.js";/**
>>>>>>>> main:dist/assets/sticky-logo-43d37008.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function k({user:a,...s}){return e.jsx(o,{...s,children:a.image?e.jsx(r,{alt:"Picture",src:a.image}):e.jsxs(c,{children:[e.jsx("span",{className:"sr-only",children:a.name}),e.jsx(i,{className:"h-4 w-4"})]})})}function A({user:a}){const[s]=m();return e.jsxs(d,{children:[e.jsx(h,{children:e.jsx("div",{className:"border rounded-full",children:e.jsx(k,{user:{name:a.name||null,image:a.image||null},className:"h-8 w-8 cursor-pointer"})})}),e.jsxs(g,{align:"end",children:[e.jsx("div",{className:"flex items-center justify-start gap-4 p-2",children:e.jsxs("div",{className:"flex flex-col space-y-1 leading-none",children:[a.name&&e.jsx("p",{className:"font-medium",children:a.name}),a.email&&e.jsx("p",{className:"w-[200px] truncate text-sm text-zinc-700",children:a.email})]})}),e.jsx(p,{}),e.jsx(u,{asChild:!0,children:e.jsxs(l,{variant:"outline",className:"w-full cursor-pointer",onClick:()=>s(),children:[e.jsx(f,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),"Log Out"]})})]})]})}const w="/assets/financial-profit-46a87794.png",n="/assets/accounting-a9718f8f.png",M="/assets/hrm-c620a641.png",v="/assets/crm-cda85c02.png",N="/assets/factory-0e1f9d9d.png",b="/assets/app-development-ed42f776.png",C=[{title:"Finance",href:"/finance",image:w},{title:"HRM",href:"/hrm",image:M},{title:"Accounts",href:"/accounts",image:n},{title:"Billing",href:"/billing",image:n},{title:"Web",href:"/web",image:b},{title:"CRM",href:"/crm",image:v},{title:"MFG",href:"/mfg",image:N}],L="web,accounts,hrm,billing",T=L.split(",").map(a=>a.trim().toLowerCase()),D=C.filter(a=>T.includes(a.title.toLowerCase()));function I(){const{setTheme:a,theme:s}=x();return e.jsxs(l,{variant:"ghost",size:"icon",onClick:()=>a(s==="light"?"dark":"light"),className:"h-9 w-9 rounded-md border",children:[e.jsx(y,{className:"h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(j,{className:"absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}const U="/assets/sticky-logo-ae42e66d.png";export{I as T,A as U,U as l,D as m};
