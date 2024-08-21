import{c as n,a as e,b0 as l,b1 as i,b2 as d,b3 as h,b4 as c,b5 as m,b6 as t,b7 as r,B as o,j as p}from"./index-15b4a249.js";import{A as x,a as g,b as u}from"./avatar-bbde2809.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=n("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),C={name:"Akaar ERP",currency:{locale:"টাকা",sign:"৳",code:"BDT",shortForm:"Tk"},phone:{country:"Bangladesh",prefix:"(BD) +88",countryCode:"+88",pattern:/^(013|015|016|017|018|019)\d{8}$/},email:{pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/}};function M({user:a,...s}){return e.jsx(x,{...s,children:a.image?e.jsx(g,{alt:"Picture",src:a.image}):e.jsxs(u,{children:[e.jsx("span",{className:"sr-only",children:a.name}),e.jsx(f,{className:"h-4 w-4"})]})})}function L({user:a}){const[s]=l();return e.jsxs(i,{children:[e.jsx(d,{children:e.jsx(M,{user:{name:a.name||null,image:a.image||null},className:"h-8 w-8 cursor-pointer"})}),e.jsxs(h,{align:"end",children:[e.jsx("div",{className:"flex items-center justify-start gap-4 p-2",children:e.jsxs("div",{className:"flex flex-col space-y-1 leading-none",children:[a.name&&e.jsx("p",{className:"font-medium",children:a.name}),a.email&&e.jsx("p",{className:"w-[200px] truncate text-sm text-zinc-700",children:a.email})]})}),e.jsx(c,{}),e.jsxs(m,{children:[e.jsxs(t,{children:["Profile",e.jsx(r,{children:"⇧⌘P"})]}),e.jsxs(t,{children:["Billing",e.jsx(r,{children:"⌘B"})]}),e.jsxs(t,{children:["Settings",e.jsx(r,{children:"⌘S"})]}),e.jsx(t,{children:"New Team"})]}),e.jsx(c,{}),e.jsx(t,{asChild:!0,children:e.jsxs(o,{variant:"outline",className:"w-full cursor-pointer",onClick:()=>s(),children:[e.jsx(y,{className:"mr-2 h-4 w-4","aria-hidden":"true"}),"Log Out"]})})]})]})}const v="/assets/financial-profit-46a87794.png",w="/assets/accounting-a9718f8f.png",b="/assets/hrm-c620a641.png",N="/assets/crm-cda85c02.png",B="/assets/factory-0e1f9d9d.png",A="/assets/app-development-ed42f776.png",S=[{title:"Finance",href:"/finance",image:v},{title:"HRM",href:"/hrm",image:b},{title:"Accounts",href:"/accounts",image:w},{title:"Web",href:"/web",image:A},{title:"CRM",href:"/crm",image:N},{title:"MFG",href:"/mfg",image:B}];function U(){const{setTheme:a,theme:s}=p();return e.jsxs(o,{variant:"ghost",size:"icon",onClick:()=>a(s==="light"?"dark":"light"),className:"h-9 w-9 rounded-md border",children:[e.jsx(j,{className:"h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(k,{className:"absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}export{z as B,U as T,L as U,S as m,C as s};
