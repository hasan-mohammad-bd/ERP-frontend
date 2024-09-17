import{c as V,r as l,ax as z,a as e,y as D,z as S,B as d,A as v,aB as y,D as k,E as T,aH as _,aI as $,aJ as G,aK as A,aL as n,aM as K,aN as c,I as h,aa as Q,ae as W}from"./index-faae2f3c.js";import{S as q}from"./separator-3d3519fc.js";import{c as J}from"./index-7745ad01.js";import{M as U}from"./multiSelectSearch-e1363fb0.js";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);function X({onShowAttendance:t}){const[r,o]=l.useState([]),[s,u]=l.useState(new Date),[i,x]=l.useState(new Date),[m,F]=l.useState(""),[f,I]=l.useState(null),{data:p}=J(`per_page=15&location_id=${f||""}&page=1&search=${m}`,{skip:!m}),C=async a=>{var b;return F(a),((b=p==null?void 0:p.data)==null?void 0:b.map(j=>({value:String(j.id),label:j.first_name+" "+j.last_name+"("+j.id+")"})))||[]},{data:g,isLoading:O}=z("page=1&per_page=1000"),P=(g==null?void 0:g.data)||[],[R,N]=l.useState(!1),[L,w]=l.useState(!1),M=a=>{a&&(u(a),N(!1))},H=a=>{a&&(x(a),w(!1))},B=()=>{!s||!i||t({fromDate:s,toDate:i,selectedEmployees:r})};return e.jsxs("div",{className:"w-full p-4 bg-white rounded-lg shadow",children:[e.jsx("h2",{className:"font-semibold mb-6 text-gray-800",children:"ATTENDANCE RECONCILIATION"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"employees",className:"text-sm font-medium text-gray-700",children:"Employees"}),e.jsx(U,{value:r,className:"h-16",onSearch:C,onChange:a=>{o(a)},hidePlaceholderWhenSelected:!0,placeholder:"Search employees",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"fromDate",className:"text-sm font-medium text-gray-700",children:"From Date *"}),e.jsxs(D,{open:R,onOpenChange:N,children:[e.jsx(S,{asChild:!0,className:"h-8",children:e.jsxs(d,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s&&"text-muted-foreground"}`,children:[s?v(s,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(k,{className:"w-auto p-0",align:"start",children:e.jsx(T,{mode:"single",selected:s,onSelect:M,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"toDate",className:"text-sm font-medium text-gray-700",children:"To Date *"}),e.jsxs(D,{open:L,onOpenChange:w,children:[e.jsx(S,{asChild:!0,className:"h-8",children:e.jsxs(d,{variant:"outline",className:`w-full justify-start text-left font-normal ${!i&&"text-muted-foreground"}`,children:[i?v(i,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(k,{className:"w-auto p-0",align:"start",children:e.jsx(T,{mode:"single",disabled:a=>a>new Date||!!(s&&a<s),selected:i,onSelect:H,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"branch",className:"text-sm font-medium text-gray-700",children:"Branch"}),e.jsx(_,{items:P,loadingData:O,itemValueKey:"id",itemLabelKey:"name",placeholder:"Select Location",setSelected:I})]})]}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(d,{onClick:B,className:"bg-sky-500 hover:bg-sky-600 text-white",children:"Show Attendance"})})]})}const Y=(t,r)=>{const o=[],s=new Date(t);for(;s<=r;)o.push(new Date(s)),s.setDate(s.getDate()+1);return o};function Z({filterData:t}){const[r,o]=l.useState([]);return l.useEffect(()=>{const s=Y(t.fromDate,t.toDate);o(s)},[t]),t.selectedEmployees.length?e.jsxs("div",{className:"w-full p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-gray-800",children:"ATTENDANCE INFORMATION"}),e.jsxs(d,{className:"bg-sky-500 hover:bg-sky-600",children:[e.jsx(E,{className:"mr-2 h-4 w-4"})," Save All"]})]}),t.selectedEmployees.map((s,u)=>e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[e.jsx("div",{className:"flex items-center space-x-4 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-500",children:s.label}),e.jsx("p",{className:"text-sm text-gray-600",children:"Asst. Sales Manager"}),e.jsx("p",{className:"text-sm text-gray-500",children:"(Vivasoft sales Head-Office)"})]})}),e.jsxs($,{children:[e.jsx(G,{children:e.jsxs(A,{children:[e.jsx(n,{className:"bg-sky-500 text-white",children:"Attendance Date"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"Flag"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"In Time"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"InTime Remarks"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"Out Time"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"Out Time Date"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"OutTime Remarks"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"Working Hour"}),e.jsx(n,{className:"bg-sky-500 text-white",children:"Action"})]})}),e.jsx(K,{children:r.map((i,x)=>{const m=i.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});return e.jsxs(A,{children:[e.jsx(c,{children:m}),e.jsx(c,{}),e.jsx(c,{children:e.jsx(h,{defaultValue:"10:00 AM",className:"bg-yellow-50"})}),e.jsx(c,{children:e.jsx(h,{placeholder:"Enter Remarks"})}),e.jsx(c,{children:e.jsx(h,{defaultValue:"3:00 PM",className:"bg-green-50"})}),e.jsx(c,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(h,{defaultValue:m,className:"mr-2"}),e.jsx(y,{className:"h-4 w-4 text-gray-400"})]})}),e.jsx(c,{children:e.jsx(h,{placeholder:"Enter Remarks"})}),e.jsx(c,{children:"0:0"}),e.jsx(c,{children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(d,{size:"icon",variant:"ghost",children:e.jsx(E,{className:"h-4 w-4 text-green-500"})}),x!==0&&e.jsx(d,{size:"icon",variant:"ghost",children:e.jsx(Q,{className:"h-4 w-4 text-red-500"})})]})})]},x)})})]})]},u))]}):null}function ne(){const[t,r]=l.useState({fromDate:new Date,toDate:new Date,selectedEmployees:[]});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(W,{title:"Daily Attendance",description:"Manage Daily Attendance for you business"})}),e.jsx(q,{}),e.jsx(X,{onShowAttendance:r}),e.jsx(Z,{filterData:t})]})})})}export{ne as default};
