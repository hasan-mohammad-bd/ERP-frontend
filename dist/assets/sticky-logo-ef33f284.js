<<<<<<<< HEAD:dist/assets/sticky-logo-ef33f284.js
import{c as t,a as e,Y as l,Z as r,_ as o,$ as i,a0 as m,a1 as d,a2 as h,a3 as g,a4 as p,Q as c,j as u}from"./index-b155454b.js";/**
========
import{c as t,a as e,Y as l,Z as r,_ as o,$ as i,a0 as m,a1 as d,a2 as h,a3 as g,a4 as p,Q as c,j as u}from"./index-6616b137.js";/**
>>>>>>>> 0ca5b693254d98a076a1d94a539afc0a89e0bcc9:dist/assets/sticky-logo-ef938fbc.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
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
 */const j=t("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function k({user:a,...s}){return e.jsx(l,{...s,children:a.image?e.jsx(r,{alt:"Picture",src:a.image}):e.jsxs(o,{children:[e.jsx("span",{className:"sr-only",children:a.name}),e.jsx(j,{className:"h-4 w-4"})]})})}function z({user:a}){const[s]=i();return e.jsxs(m,{children:[e.jsx(d,{children:e.jsx("div",{className:"border rounded-full",children:e.jsx(k,{user:{name:a.name||null,image:a.image||null},className:"h-8 w-8 cursor-pointer"})})}),e.jsxs(h,{align:"end",children:[e.jsx("div",{className:"flex items-center justify-start gap-4 p-2",children:e.jsxs("div",{className:"flex flex-col space-y-1 leading-none",children:[a.name&&e.jsx("p",{className:"font-medium",children:a.name}),a.email&&e.jsx("p",{className:"w-[200px] truncate text-sm text-zinc-700",children:a.email})]})}),e.jsx(g,{}),e.jsx(p,{asChild:!0,children:e.jsxs(c,{variant:"outline",className:"w-full cursor-pointer",onClick:()=>s(),children:[e.jsx(x,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),"Log Out"]})})]})]})}const v="/assets/financial-profit-46a87794.png",n="/assets/accounting-a9718f8f.png",w="/assets/hrm-c620a641.png",M="/assets/crm-cda85c02.png",N="/assets/factory-0e1f9d9d.png",b="/assets/app-development-ed42f776.png",C=[{title:"Finance",href:"/finance",image:v},{title:"HRM",href:"/hrm",image:w},{title:"Accounts",href:"/accounts",image:n},{title:"Billing",href:"/billing",image:n},{title:"Web",href:"/web",image:b},{title:"CRM",href:"/crm",image:M},{title:"MFG",href:"/mfg",image:N}],L="web,accounts,hrm,billing",T=L.split(",").map(a=>a.trim().toLowerCase()),A=C.filter(a=>T.includes(a.title.toLowerCase()));function D(){const{setTheme:a,theme:s}=u();return e.jsxs(c,{variant:"ghost",size:"icon",onClick:()=>a(s==="light"?"dark":"light"),className:"h-9 w-9 rounded-md border",children:[e.jsx(y,{className:"h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(f,{className:"absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}const I="/assets/sticky-logo-ae42e66d.png";export{D as T,z as U,I as l,A as m};
