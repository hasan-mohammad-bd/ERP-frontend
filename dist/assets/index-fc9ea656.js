<<<<<<<< HEAD:dist/assets/index-28ad6a50.js
import{V as N,a as e,Z as k,_ as t,$ as c,a0 as u,a1 as m,I as p,a2 as x,ad as M,B as h,a3 as O,r as f,aI as _,a5 as g,a6 as v,a7 as b,a8 as I,a9 as w,aa as P,ab as A,ac as C,R as F,aJ as S,Y as H,ae as E,t as z,af as L,ag as R}from"./index-3f8f5d35.js";const D=[{id:"calculate-on-basic-salary",label:"Calculate on basic salary? (Otherwise gross salary)[*6]"},{id:"calculate-from-actual-in-time",label:"Calculate from actual in-time [*3]"},{id:"count-holiday-as-ot",label:"Count Holiday as OT"},{id:"count-weekend-as-ot",label:"Count Weekend as OT"},{id:"count-leave-as-ot",label:"Count Leave as OT"},{id:"is-active",label:"Is Active"},{id:"consider-cumulative-over-and-under-time",label:"Consider cumulative over and under time"},{id:"consider-ot-minutes",label:"Consider OT minutes[*5]"},{id:"is-fixed-amount",label:"Is Fixed Amount[*6]"},{id:"exclude-from-salary",label:"Exclude from Salary[*7]"}];function T({modalClose:l,data:o}){const a=N({defaultValues:{items:["calculate-on-basic-salary"],policy_name:"Overtime Policy",monthly_max_allowed_ot:50,minimum_countable_minutes:10,ot_ratio:1.5}});async function r(s){try{O.success("Policy created successfully"),console.log(s),console.log(o)}catch(n){console.log(n)}l()}return e.jsx(e.Fragment,{children:e.jsx(k,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(r),className:"w-full",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{control:a.control,name:"policy_name",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"Policy Name"}),e.jsx(m,{children:e.jsx(p,{type:"text",placeholder:"Enter days",...s})}),e.jsx(x,{})]})}),e.jsx(t,{control:a.control,name:"monthly_max_allowed_ot",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"Monthly MAX Allowed OT(hours)"}),e.jsx(m,{children:e.jsx(p,{type:"number",placeholder:"Enter days",...s})}),e.jsx(x,{})]})}),e.jsx(t,{control:a.control,name:"minimum_countable_minutes",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"Minimum Countable Minutes[*1]"}),e.jsx(m,{children:e.jsx(p,{type:"number",placeholder:"Enter days",...s})}),e.jsx(x,{})]})}),e.jsx(t,{control:a.control,name:"ot_ratio",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"OT Ratio[*2]"}),e.jsx(m,{children:e.jsx(p,{type:"number",placeholder:"Enter days",...s})}),e.jsx(x,{})]})})]}),e.jsx("div",{children:e.jsx(t,{control:a.control,name:"items",render:()=>e.jsxs(c,{children:[D.map(s=>e.jsx(t,{control:a.control,name:"items",render:({field:n})=>{var i;return e.jsxs(c,{className:"flex flex-row items-center space-x-3 space-y-2",children:[e.jsx(m,{children:e.jsx(M,{checked:(i=n.value)==null?void 0:i.includes(s.id),onCheckedChange:d=>{var j;return d?n.onChange([...n.value,s.id]):n.onChange((j=n.value)==null?void 0:j.filter(y=>y!==s.id))}})}),e.jsx(u,{className:"font-normal cursor-pointer",children:s.label})]},s.id)}},s.id)),e.jsx(x,{})]})})})]}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-2 mt-5",children:[e.jsx("p",{children:"** 1. OT starting time after regular working hour (Minutes)"}),e.jsx("p",{children:"** 2. How many times of per hour salary you want to give for OT."}),e.jsx("p",{children:"** 3. If you checked this option, working hours calculated from employee's actual intime otherwise it will count from office intime even employee came before office intime."}),e.jsx("p",{children:"** 4. If checked, sum of overtime and underwork will be added for overtime (if sum is positive) or will be deduced for underwork (if sum is negative)"}),e.jsx("p",{children:"** 5. Consider OT minutes during salary calculation"}),e.jsx("p",{children:"** 6. You can select only one checkbox to calculate OT from basic salary or fixed amount. One checkbox will be automatically unchecked if you try to check both options. In that case, last selection will remain, previous one will be unchecked."}),e.jsx("p",{children:"** 7. Overtime will be handed separately. Overtime Amount will not added during salary generation."})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-5",children:[e.jsx(h,{type:"submit",className:"bg-green-500 hover:bg-green-600 text-white",children:"Save"}),e.jsx(h,{type:"button",onClick:()=>l(),variant:"destructive",children:"Exit"})]})]})})})}function U({data:l}){const[o,a]=f.useState(!1),[r,s]=f.useState(!1),[n,{isLoading:i}]=_(),d=async j=>{try{await n(j),O.success("Holiday deleted successfully"),a(!1)}catch(y){console.log(y)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(g,{children:e.jsxs(v,{children:[e.jsx(b,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(!0),children:e.jsx(I,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Update Holiday"})})]})}),e.jsx(g,{children:e.jsxs(v,{children:[e.jsx(b,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Delete Holiday"})})]})}),e.jsx(A,{title:"Are you sure?",description:"This action cannot be undone.",name:l==null?void 0:l.name,isOpen:o,onClose:()=>a(!1),onConfirm:()=>d(l.id),loading:i}),r&&e.jsx(C,{title:"Update Over Time Policy",isOpen:r,toggleModal:()=>s(!1),children:e.jsx(T,{data:l,modalClose:()=>s(!1)})})]})}const $=[{header:"Policy Name",accessorKey:"name"},{header:"Monthly Allowed OT",cell:()=>e.jsx("span",{children:"50.00"})},{header:"Minimum countable minutes",cell:()=>e.jsx("span",{children:"10"})},{header:"Count from actual intime",cell:()=>e.jsx("span",{children:"False"})},{header:"Is Active",cell:()=>e.jsx("span",{children:"True"})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:l})=>e.jsx(U,{data:l.original})}],J=()=>{const[l,o]=f.useState(!1),[a,r]=F.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:n}=S(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),i=(s==null?void 0:s.data)||[],d=s==null?void 0:s.meta;return n?e.jsx(H,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"Over Time Policy",description:"Manage your over time for you organization"}),e.jsxs(h,{onClick:()=>o(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add New"]})]}),e.jsx(L,{}),i&&e.jsx("div",{children:e.jsx(R,{columns:$,data:i,paginationInfo:d,pagination:a,setPagination:r})})]})}),l&&e.jsx(C,{title:"New Over Time Policy",isOpen:l,toggleModal:()=>o(!1),className:"w-full max-w-3xl",children:e.jsx(T,{modalClose:()=>o(!1)})})]})};export{J as default};
========
import{V as N,a as e,Z as k,_ as t,$ as c,a0 as u,a1 as m,I as p,a2 as x,ad as M,B as h,a3 as O,r as f,aI as _,a5 as g,a6 as v,a7 as b,a8 as I,a9 as w,aa as P,ab as A,ac as C,R as F,aJ as S,Y as H,ae as E,t as z,af as L,ag as R}from"./index-9b71b1d1.js";const D=[{id:"calculate-on-basic-salary",label:"Calculate on basic salary? (Otherwise gross salary)[*6]"},{id:"calculate-from-actual-in-time",label:"Calculate from actual in-time [*3]"},{id:"count-holiday-as-ot",label:"Count Holiday as OT"},{id:"count-weekend-as-ot",label:"Count Weekend as OT"},{id:"count-leave-as-ot",label:"Count Leave as OT"},{id:"is-active",label:"Is Active"},{id:"consider-cumulative-over-and-under-time",label:"Consider cumulative over and under time"},{id:"consider-ot-minutes",label:"Consider OT minutes[*5]"},{id:"is-fixed-amount",label:"Is Fixed Amount[*6]"},{id:"exclude-from-salary",label:"Exclude from Salary[*7]"}];function T({modalClose:l,data:o}){const a=N({defaultValues:{items:["calculate-on-basic-salary"],policy_name:"Overtime Policy",monthly_max_allowed_ot:50,minimum_countable_minutes:10,ot_ratio:1.5}});async function r(s){try{O.success("Policy created successfully"),console.log(s),console.log(o)}catch(n){console.log(n)}l()}return e.jsx(e.Fragment,{children:e.jsx(k,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(r),className:"w-full",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{control:a.control,name:"policy_name",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"Policy Name"}),e.jsx(m,{children:e.jsx(p,{type:"text",placeholder:"Enter days",...s})}),e.jsx(x,{})]})}),e.jsx(t,{control:a.control,name:"monthly_max_allowed_ot",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"Monthly MAX Allowed OT(hours)"}),e.jsx(m,{children:e.jsx(p,{type:"number",placeholder:"Enter days",...s})}),e.jsx(x,{})]})}),e.jsx(t,{control:a.control,name:"minimum_countable_minutes",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"Minimum Countable Minutes[*1]"}),e.jsx(m,{children:e.jsx(p,{type:"number",placeholder:"Enter days",...s})}),e.jsx(x,{})]})}),e.jsx(t,{control:a.control,name:"ot_ratio",render:({field:s})=>e.jsxs(c,{children:[e.jsx(u,{children:"OT Ratio[*2]"}),e.jsx(m,{children:e.jsx(p,{type:"number",placeholder:"Enter days",...s})}),e.jsx(x,{})]})})]}),e.jsx("div",{children:e.jsx(t,{control:a.control,name:"items",render:()=>e.jsxs(c,{children:[D.map(s=>e.jsx(t,{control:a.control,name:"items",render:({field:n})=>{var i;return e.jsxs(c,{className:"flex flex-row items-center space-x-3 space-y-2",children:[e.jsx(m,{children:e.jsx(M,{checked:(i=n.value)==null?void 0:i.includes(s.id),onCheckedChange:d=>{var j;return d?n.onChange([...n.value,s.id]):n.onChange((j=n.value)==null?void 0:j.filter(y=>y!==s.id))}})}),e.jsx(u,{className:"font-normal cursor-pointer",children:s.label})]},s.id)}},s.id)),e.jsx(x,{})]})})})]}),e.jsxs("div",{className:"text-sm text-gray-600 space-y-2 mt-5",children:[e.jsx("p",{children:"** 1. OT starting time after regular working hour (Minutes)"}),e.jsx("p",{children:"** 2. How many times of per hour salary you want to give for OT."}),e.jsx("p",{children:"** 3. If you checked this option, working hours calculated from employee's actual intime otherwise it will count from office intime even employee came before office intime."}),e.jsx("p",{children:"** 4. If checked, sum of overtime and underwork will be added for overtime (if sum is positive) or will be deduced for underwork (if sum is negative)"}),e.jsx("p",{children:"** 5. Consider OT minutes during salary calculation"}),e.jsx("p",{children:"** 6. You can select only one checkbox to calculate OT from basic salary or fixed amount. One checkbox will be automatically unchecked if you try to check both options. In that case, last selection will remain, previous one will be unchecked."}),e.jsx("p",{children:"** 7. Overtime will be handed separately. Overtime Amount will not added during salary generation."})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-5",children:[e.jsx(h,{type:"submit",className:"bg-green-500 hover:bg-green-600 text-white",children:"Save"}),e.jsx(h,{type:"button",onClick:()=>l(),variant:"destructive",children:"Exit"})]})]})})})}function U({data:l}){const[o,a]=f.useState(!1),[r,s]=f.useState(!1),[n,{isLoading:i}]=_(),d=async j=>{try{await n(j),O.success("Holiday deleted successfully"),a(!1)}catch(y){console.log(y)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(g,{children:e.jsxs(v,{children:[e.jsx(b,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(!0),children:e.jsx(I,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Update Holiday"})})]})}),e.jsx(g,{children:e.jsxs(v,{children:[e.jsx(b,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Delete Holiday"})})]})}),e.jsx(A,{title:"Are you sure?",description:"This action cannot be undone.",name:l==null?void 0:l.name,isOpen:o,onClose:()=>a(!1),onConfirm:()=>d(l.id),loading:i}),r&&e.jsx(C,{title:"Update Over Time Policy",isOpen:r,toggleModal:()=>s(!1),children:e.jsx(T,{data:l,modalClose:()=>s(!1)})})]})}const $=[{header:"Policy Name",accessorKey:"name"},{header:"Monthly Allowed OT",cell:()=>e.jsx("span",{children:"50.00"})},{header:"Minimum countable minutes",cell:()=>e.jsx("span",{children:"10"})},{header:"Count from actual intime",cell:()=>e.jsx("span",{children:"False"})},{header:"Is Active",cell:()=>e.jsx("span",{children:"True"})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:l})=>e.jsx(U,{data:l.original})}],J=()=>{const[l,o]=f.useState(!1),[a,r]=F.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:n}=S(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),i=(s==null?void 0:s.data)||[],d=s==null?void 0:s.meta;return n?e.jsx(H,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(E,{title:"Over Time Policy",description:"Manage your over time for you organization"}),e.jsxs(h,{onClick:()=>o(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add New"]})]}),e.jsx(L,{}),i&&e.jsx("div",{children:e.jsx(R,{columns:$,data:i,paginationInfo:d,pagination:a,setPagination:r})})]})}),l&&e.jsx(C,{title:"New Over Time Policy",isOpen:l,toggleModal:()=>o(!1),className:"w-full max-w-3xl",children:e.jsx(T,{modalClose:()=>o(!1)})})]})};export{J as default};
>>>>>>>> main:dist/assets/index-fc9ea656.js
