<<<<<<<< HEAD:dist/assets/index-aba05743.js
import{c as k,a as e,K as y,M as p,N as v,Q as C,_ as n,$ as r,a1 as c,ad as u,a0 as d,a2 as o,I as m,aj as b,ak as g,al as N,am as f,an as i,V as w,ae as S,B as D,Z as L,a3 as _}from"./index-248274e5.js";import{S as V}from"./separator-a9ddaa14.js";/**
========
import{c as k,a as e,K as y,M as p,N as v,Q as C,_ as n,$ as r,a1 as c,ad as u,a0 as d,a2 as o,I as m,aj as b,ak as g,al as N,am as f,an as i,V as w,ae as S,B as D,Z as L,a3 as _}from"./index-af3a75c9.js";import{S as V}from"./separator-9f4f41ad.js";/**
>>>>>>>> 0cd8807406513f3a966a08b7c886248844c517c5:dist/assets/index-aa2069bf.js
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=k("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]),P=[{id:"consider-absent-policy",label:"Consider absent policy"},{id:"deduct-from-salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"applications",label:"Deduct from gross salary? (Otherwise from basic)"}];function A({form:a}){return e.jsxs(y,{className:"w-[750px]",children:[e.jsx(p,{children:e.jsx(v,{children:"AbsentPolicy"})}),e.jsxs(C,{className:"space-y-4",children:[e.jsx(n,{control:a.control,name:"items",render:()=>e.jsxs(r,{children:[P.map(s=>e.jsx(n,{control:a.control,name:"items",render:({field:l})=>{var t;return e.jsxs(r,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(c,{children:e.jsx(u,{checked:(t=l.value)==null?void 0:t.includes(s.id),onCheckedChange:h=>{var x;return h?l.onChange([...l.value,s.id]):l.onChange((x=l.value)==null?void 0:x.filter(j=>j!==s.id))}})}),e.jsx(d,{className:"font-normal",children:s.label})]},s.id)}},s.id)),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"username",render:({field:s})=>e.jsxs(r,{children:[e.jsx(d,{children:"Number of days Adjust for each absent"}),e.jsx(c,{children:e.jsx(m,{type:"number",className:"w-32",placeholder:"Enter days",...s})}),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"leave_type",render:({field:s})=>e.jsxs(r,{className:"w-[300px]",children:[e.jsx(d,{children:"Leave type"}),e.jsxs(b,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(c,{children:e.jsx(g,{children:e.jsx(N,{placeholder:"Select leave type"})})}),e.jsxs(f,{children:[e.jsx(i,{value:"annual_leave",children:"Annual Leave"}),e.jsx(i,{value:"sick_leave",children:"Sick Leave"}),e.jsx(i,{value:"casual_leave",children:"Casual Leave"})]})]}),e.jsx(o,{})]})})]})]})}const E=[{id:"consider-delay-duration",label:"Consider delay duration"},{id:"deduct-from-salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"applications",label:"Deduct from gross salary? (Otherwise from basic)"}];function M({form:a}){return e.jsxs(y,{className:"w-[750px]",children:[e.jsx(p,{children:e.jsx(v,{children:"Delay Policy"})}),e.jsxs(C,{className:"space-y-6",children:[e.jsx(n,{control:a.control,name:"items",render:()=>e.jsxs(r,{children:[E.map(s=>e.jsx(n,{control:a.control,name:"items",render:({field:l})=>{var t;return e.jsxs(r,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(c,{children:e.jsx(u,{checked:(t=l.value)==null?void 0:t.includes(s.id),onCheckedChange:h=>{var x;return h?l.onChange([...l.value,s.id]):l.onChange((x=l.value)==null?void 0:x.filter(j=>j!==s.id))}})}),e.jsx(d,{className:"font-normal",children:s.label})]},s.id)}},s.id)),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"leave_type",render:({field:s})=>e.jsxs(r,{className:"w-[300px]",children:[e.jsx(d,{children:"Leave type"}),e.jsxs(b,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(c,{children:e.jsx(g,{children:e.jsx(N,{placeholder:"Select leave type"})})}),e.jsxs(f,{children:[e.jsx(i,{value:"annual_leave",children:"Annual Leave"}),e.jsx(i,{value:"sick_leave",children:"Sick Leave"}),e.jsx(i,{value:"casual_leave",children:"Casual Leave"})]})]}),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"mobile",render:({field:s})=>e.jsxs(r,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(c,{children:e.jsx(u,{checked:s.value,onCheckedChange:s.onChange})}),e.jsx(d,{children:"Consider consecutive delay?"})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(n,{control:a.control,name:"username",render:({field:s})=>e.jsxs(r,{children:[e.jsx(d,{children:"Number delay to consider"}),e.jsx(c,{children:e.jsx(m,{type:"number",className:"w-32",placeholder:"Enter days",...s})}),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"username",render:({field:s})=>e.jsxs(r,{children:[e.jsx(d,{children:"Days(s) adjust for delay"}),e.jsx(c,{children:e.jsx(m,{type:"number",className:"w-32",placeholder:"Enter days",...s})}),e.jsx(o,{})]})})]})]})]})}const O=[{id:"consider-extreme-delay-duration",label:"Consider extreme delay duration"},{id:"deduct-from-salary",label:"Deduct from salary? (Otherwise from leave)"},{id:"applications",label:"Deduct from gross salary? (Otherwise from basic)"}];function I({form:a}){return e.jsxs(y,{className:"w-[750px]",children:[e.jsx(p,{children:e.jsx(v,{children:"Extreme Delay Policy"})}),e.jsxs(C,{className:"space-y-6",children:[e.jsx(n,{control:a.control,name:"items",render:()=>e.jsxs(r,{children:[O.map(s=>e.jsx(n,{control:a.control,name:"items",render:({field:l})=>{var t;return e.jsxs(r,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(c,{children:e.jsx(u,{checked:(t=l.value)==null?void 0:t.includes(s.id),onCheckedChange:h=>{var x;return h?l.onChange([...l.value,s.id]):l.onChange((x=l.value)==null?void 0:x.filter(j=>j!==s.id))}})}),e.jsx(d,{className:"font-normal",children:s.label})]},s.id)}},s.id)),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"leave_type",render:({field:s})=>e.jsxs(r,{className:"w-[300px]",children:[e.jsx(d,{children:"Leave type"}),e.jsxs(b,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(c,{children:e.jsx(g,{children:e.jsx(N,{placeholder:"Select leave type"})})}),e.jsxs(f,{children:[e.jsx(i,{value:"annual_leave",children:"Annual Leave"}),e.jsx(i,{value:"sick_leave",children:"Sick Leave"}),e.jsx(i,{value:"casual_leave",children:"Casual Leave"})]})]}),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"mobile",render:({field:s})=>e.jsxs(r,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(c,{children:e.jsx(u,{checked:s.value,onCheckedChange:s.onChange})}),e.jsx(d,{children:"Consider consecutive delay?"})]})}),e.jsxs("div",{className:"flex gap-20",children:[e.jsx(n,{control:a.control,name:"username",render:({field:s})=>e.jsxs(r,{children:[e.jsx(d,{children:"Number delay to consider"}),e.jsx(c,{children:e.jsx(m,{type:"number",className:"w-32",placeholder:"Enter days",...s})}),e.jsx(o,{})]})}),e.jsx(n,{control:a.control,name:"username",render:({field:s})=>e.jsxs(r,{children:[e.jsx(d,{children:"Days(s) adjust for delay"}),e.jsx(c,{children:e.jsx(m,{type:"number",className:"w-32",placeholder:"Enter days",...s})}),e.jsx(o,{})]})})]})]})]})}const z=()=>{const a=w({defaultValues:{items:["consider-absent-policy"]}});function s(l){_.success(JSON.stringify(l))}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(S,{title:"Deduction Policy",description:"Manage your holidays for you organization"}),e.jsxs(D,{size:"sm",onClick:a.handleSubmit(s),children:[e.jsx(F,{className:"mr-2 h-4 w-4"})," Save Policy"]})]}),e.jsx(V,{}),e.jsx(L,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(s),className:"flex flex-col gap-6 items-center",children:[e.jsx(A,{form:a}),e.jsx(M,{form:a}),e.jsx(I,{form:a})]})})]})})})};export{z as default};
