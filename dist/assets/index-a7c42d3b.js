<<<<<<<< HEAD:dist/assets/index-322c1794.js
import{a as e,aZ as B,a_ as G,a$ as H,b0 as Q,b1 as z,ar as K,b2 as D,b3 as W,r as n,aT as U,b4 as Z,b5 as q,a6 as v,a7 as T,Q as m,a8 as k,aR as y,a9 as A,aa as C,b6 as J,b7 as X,b8 as Y,b9 as E,ba as c,bb as ee,bc as r,I as g,aB as se,aG as ae,aU as te}from"./index-8b9ca140.js";import{S as F}from"./save-b19c0fc8.js";function le({defaultValue:t,loadingData:i,items:h,itemValueKey:s,itemLabelKey:j,placeholder:l,setSelected:x}){const o=d=>{x(d==="-1"?null:d)};return e.jsxs(B,{defaultValue:t,onValueChange:o,children:[e.jsx(G,{className:"w-[200px] h-8",children:e.jsx(H,{placeholder:l||"Select an option"})}),e.jsx(Q,{children:e.jsx(z,{children:i?e.jsx(K,{}):e.jsxs(e.Fragment,{children:[e.jsx(D,{value:"-1",children:e.jsxs("span",{className:"flex space-x-1 items-center",children:[e.jsx("p",{children:"Clear Selection"})," ",e.jsx(W,{color:"red"})]})},"clear"),h.map((d,u)=>e.jsx(D,{value:d[s],children:d[j]},u))]})})})]})}function ne({onShowAttendance:t}){const[i,h]=n.useState([]),[s,j]=n.useState(new Date),[l,x]=n.useState(new Date),[o,d]=n.useState(""),[u,I]=n.useState(null),{data:N}=U(`per_page=15&location_id=${u||""}&page=1&text=${o}`,{skip:!o}),O=async a=>{var w;return d(a),((w=N==null?void 0:N.data)==null?void 0:w.map(p=>({value:String(p.id),label:p.first_name+" "+p.last_name+"("+p.id+")"})))||[]},{data:f,isLoading:R}=Z("page=1&per_page=1000"),P=(f==null?void 0:f.data)||[],[V,b]=n.useState(!1),[L,S]=n.useState(!1),M=a=>{a&&(j(a),b(!1))},_=a=>{a&&(x(a),S(!1))},$=()=>{!s||!l||t({fromDate:s,toDate:l,selectedEmployees:i})};return e.jsxs("div",{className:"w-full p-4 bg-white rounded-lg shadow",children:[e.jsx("h2",{className:"font-semibold mb-6 text-gray-800",children:"ATTENDANCE RECONCILIATION"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"employees",className:"text-sm font-medium text-gray-700",children:"Employees"}),e.jsx(q,{value:i,className:"h-16",onSearch:O,onChange:a=>{h(a)},hidePlaceholderWhenSelected:!0,placeholder:"Search employees",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"fromDate",className:"text-sm font-medium text-gray-700",children:"From Date *"}),e.jsxs(v,{open:V,onOpenChange:b,children:[e.jsx(T,{asChild:!0,className:"h-8",children:e.jsxs(m,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s&&"text-muted-foreground"}`,children:[s?k(s,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(A,{className:"w-auto p-0",align:"start",children:e.jsx(C,{mode:"single",selected:s,onSelect:M,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"toDate",className:"text-sm font-medium text-gray-700",children:"To Date *"}),e.jsxs(v,{open:L,onOpenChange:S,children:[e.jsx(T,{asChild:!0,className:"h-8",children:e.jsxs(m,{variant:"outline",className:`w-full justify-start text-left font-normal ${!l&&"text-muted-foreground"}`,children:[l?k(l,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(A,{className:"w-auto p-0",align:"start",children:e.jsx(C,{mode:"single",disabled:a=>a>new Date||!!(s&&a<s),selected:l,onSelect:_,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"branch",className:"text-sm font-medium text-gray-700",children:"Branch"}),e.jsx(le,{items:P,loadingData:R,itemValueKey:"id",itemLabelKey:"name",placeholder:"Select Location",setSelected:I})]})]}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(m,{onClick:$,className:"bg-sky-500 hover:bg-sky-600 text-white",children:"Show Attendance"})})]})}function ce({filterData:t}){const[i,h]=n.useState([]);return n.useEffect(()=>{const s=J(t.fromDate,t.toDate);h(s)},[t]),t.selectedEmployees.length?e.jsxs("div",{className:"w-full py-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-gray-800",children:"ATTENDANCE INFORMATION"}),e.jsxs(m,{className:"bg-sky-500 hover:bg-sky-600",children:[e.jsx(F,{className:"mr-2 h-4 w-4"})," Save All"]})]}),t.selectedEmployees.map((s,j)=>e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[e.jsx("div",{className:"flex items-center space-x-4 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-500",children:s.label}),e.jsx("p",{className:"text-sm text-gray-600",children:"Asst. Sales Manager"}),e.jsx("p",{className:"text-sm text-gray-500",children:"(Vivasoft sales Head-Office)"})]})}),e.jsxs(X,{children:[e.jsx(Y,{children:e.jsxs(E,{children:[e.jsx(c,{className:"bg-sky-500 text-white",children:"Attendance Date"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Flag"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"In Time"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"InTime Remarks"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Out Time"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Out Time Date"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"OutTime Remarks"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Working Hour"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Action"})]})}),e.jsx(ee,{children:i.map((l,x)=>{const o=l.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});return e.jsxs(E,{children:[e.jsx(r,{children:o}),e.jsx(r,{}),e.jsx(r,{children:e.jsx(g,{defaultValue:"10:00 AM",className:"bg-yellow-50"})}),e.jsx(r,{children:e.jsx(g,{placeholder:"Enter Remarks"})}),e.jsx(r,{children:e.jsx(g,{defaultValue:"3:00 PM",className:"bg-green-50"})}),e.jsx(r,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(g,{defaultValue:o,className:"mr-2"}),e.jsx(y,{className:"h-4 w-4 text-gray-400"})]})}),e.jsx(r,{children:e.jsx(g,{placeholder:"Enter Remarks"})}),e.jsx(r,{children:"0:0"}),e.jsx(r,{children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(m,{size:"icon",variant:"ghost",children:e.jsx(F,{className:"h-4 w-4 text-green-500"})}),x!==0&&e.jsx(m,{size:"icon",variant:"ghost",children:e.jsx(se,{className:"h-4 w-4 text-red-500"})})]})})]},x)})})]})]},j))]}):null}function de(){const[t,i]=n.useState({fromDate:new Date,toDate:new Date,selectedEmployees:[]});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(ae,{title:"Daily Attendance",description:"Manage Daily Attendance for you business"})}),e.jsx(te,{}),e.jsx(ne,{onShowAttendance:i}),e.jsx(ce,{filterData:t})]})})})}export{de as default};
========
import{a as e,aZ as B,a_ as G,a$ as H,b0 as Q,b1 as z,ar as K,b2 as D,b3 as W,r as n,aT as U,b4 as Z,b5 as q,a6 as v,a7 as T,Q as m,a8 as k,aR as y,a9 as A,aa as C,b6 as J,b7 as X,b8 as Y,b9 as E,ba as c,bb as ee,bc as r,I as g,aB as se,aG as ae,aU as te}from"./index-d9fd53dc.js";import{S as F}from"./save-cde68a63.js";function le({defaultValue:t,loadingData:i,items:h,itemValueKey:s,itemLabelKey:j,placeholder:l,setSelected:x}){const o=d=>{x(d==="-1"?null:d)};return e.jsxs(B,{defaultValue:t,onValueChange:o,children:[e.jsx(G,{className:"w-[200px] h-8",children:e.jsx(H,{placeholder:l||"Select an option"})}),e.jsx(Q,{children:e.jsx(z,{children:i?e.jsx(K,{}):e.jsxs(e.Fragment,{children:[e.jsx(D,{value:"-1",children:e.jsxs("span",{className:"flex space-x-1 items-center",children:[e.jsx("p",{children:"Clear Selection"})," ",e.jsx(W,{color:"red"})]})},"clear"),h.map((d,u)=>e.jsx(D,{value:d[s],children:d[j]},u))]})})})]})}function ne({onShowAttendance:t}){const[i,h]=n.useState([]),[s,j]=n.useState(new Date),[l,x]=n.useState(new Date),[o,d]=n.useState(""),[u,I]=n.useState(null),{data:N}=U(`per_page=15&location_id=${u||""}&page=1&text=${o}`,{skip:!o}),O=async a=>{var w;return d(a),((w=N==null?void 0:N.data)==null?void 0:w.map(p=>({value:String(p.id),label:p.first_name+" "+p.last_name+"("+p.id+")"})))||[]},{data:f,isLoading:R}=Z("page=1&per_page=1000"),P=(f==null?void 0:f.data)||[],[V,b]=n.useState(!1),[L,S]=n.useState(!1),M=a=>{a&&(j(a),b(!1))},_=a=>{a&&(x(a),S(!1))},$=()=>{!s||!l||t({fromDate:s,toDate:l,selectedEmployees:i})};return e.jsxs("div",{className:"w-full p-4 bg-white rounded-lg shadow",children:[e.jsx("h2",{className:"font-semibold mb-6 text-gray-800",children:"ATTENDANCE RECONCILIATION"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"employees",className:"text-sm font-medium text-gray-700",children:"Employees"}),e.jsx(q,{value:i,className:"h-16",onSearch:O,onChange:a=>{h(a)},hidePlaceholderWhenSelected:!0,placeholder:"Search employees",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"fromDate",className:"text-sm font-medium text-gray-700",children:"From Date *"}),e.jsxs(v,{open:V,onOpenChange:b,children:[e.jsx(T,{asChild:!0,className:"h-8",children:e.jsxs(m,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s&&"text-muted-foreground"}`,children:[s?k(s,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(A,{className:"w-auto p-0",align:"start",children:e.jsx(C,{mode:"single",selected:s,onSelect:M,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"toDate",className:"text-sm font-medium text-gray-700",children:"To Date *"}),e.jsxs(v,{open:L,onOpenChange:S,children:[e.jsx(T,{asChild:!0,className:"h-8",children:e.jsxs(m,{variant:"outline",className:`w-full justify-start text-left font-normal ${!l&&"text-muted-foreground"}`,children:[l?k(l,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(A,{className:"w-auto p-0",align:"start",children:e.jsx(C,{mode:"single",disabled:a=>a>new Date||!!(s&&a<s),selected:l,onSelect:_,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"branch",className:"text-sm font-medium text-gray-700",children:"Branch"}),e.jsx(le,{items:P,loadingData:R,itemValueKey:"id",itemLabelKey:"name",placeholder:"Select Location",setSelected:I})]})]}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(m,{onClick:$,className:"bg-sky-500 hover:bg-sky-600 text-white",children:"Show Attendance"})})]})}function ce({filterData:t}){const[i,h]=n.useState([]);return n.useEffect(()=>{const s=J(t.fromDate,t.toDate);h(s)},[t]),t.selectedEmployees.length?e.jsxs("div",{className:"w-full py-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-gray-800",children:"ATTENDANCE INFORMATION"}),e.jsxs(m,{className:"bg-sky-500 hover:bg-sky-600",children:[e.jsx(F,{className:"mr-2 h-4 w-4"})," Save All"]})]}),t.selectedEmployees.map((s,j)=>e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[e.jsx("div",{className:"flex items-center space-x-4 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-500",children:s.label}),e.jsx("p",{className:"text-sm text-gray-600",children:"Asst. Sales Manager"}),e.jsx("p",{className:"text-sm text-gray-500",children:"(Vivasoft sales Head-Office)"})]})}),e.jsxs(X,{children:[e.jsx(Y,{children:e.jsxs(E,{children:[e.jsx(c,{className:"bg-sky-500 text-white",children:"Attendance Date"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Flag"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"In Time"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"InTime Remarks"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Out Time"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Out Time Date"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"OutTime Remarks"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Working Hour"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Action"})]})}),e.jsx(ee,{children:i.map((l,x)=>{const o=l.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});return e.jsxs(E,{children:[e.jsx(r,{children:o}),e.jsx(r,{}),e.jsx(r,{children:e.jsx(g,{defaultValue:"10:00 AM",className:"bg-yellow-50"})}),e.jsx(r,{children:e.jsx(g,{placeholder:"Enter Remarks"})}),e.jsx(r,{children:e.jsx(g,{defaultValue:"3:00 PM",className:"bg-green-50"})}),e.jsx(r,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(g,{defaultValue:o,className:"mr-2"}),e.jsx(y,{className:"h-4 w-4 text-gray-400"})]})}),e.jsx(r,{children:e.jsx(g,{placeholder:"Enter Remarks"})}),e.jsx(r,{children:"0:0"}),e.jsx(r,{children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(m,{size:"icon",variant:"ghost",children:e.jsx(F,{className:"h-4 w-4 text-green-500"})}),x!==0&&e.jsx(m,{size:"icon",variant:"ghost",children:e.jsx(se,{className:"h-4 w-4 text-red-500"})})]})})]},x)})})]})]},j))]}):null}function de(){const[t,i]=n.useState({fromDate:new Date,toDate:new Date,selectedEmployees:[]});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(ae,{title:"Daily Attendance",description:"Manage Daily Attendance for you business"})}),e.jsx(te,{}),e.jsx(ne,{onShowAttendance:i}),e.jsx(ce,{filterData:t})]})})})}export{de as default};
>>>>>>>> main:dist/assets/index-a7c42d3b.js
