import{a as e,b2 as $,b3 as B,b4 as G,b5 as K,b6 as W,av as z,b7 as D,b8 as Q,r as n,aZ as X,b9 as Z,ba as q,aa as v,ab as T,W as m,ac as k,aX as y,ad as A,ae as C,bb as J,bc as U,bd as Y,be as F,bf as c,bg as ee,bh as r,I as g,aF as se,aK as ae,a_ as te}from"./index-ffb24eb6.js";import{S as E}from"./save-e955ef27.js";function le({defaultValue:t,loadingData:i,items:h,itemValueKey:s,itemLabelKey:j,placeholder:l,setSelected:x}){const o=d=>{x(d==="-1"?null:d)};return e.jsxs($,{defaultValue:t,onValueChange:o,children:[e.jsx(B,{className:"w-[200px] h-8",children:e.jsx(G,{placeholder:l||"Select an option"})}),e.jsx(K,{children:e.jsx(W,{children:i?e.jsx(z,{}):e.jsxs(e.Fragment,{children:[e.jsx(D,{value:"-1",children:e.jsxs("span",{className:"flex space-x-1 items-center",children:[e.jsx("p",{children:"Clear Selection"})," ",e.jsx(Q,{color:"red"})]})},"clear"),h.map((d,u)=>e.jsx(D,{value:d[s],children:d[j]},u))]})})})]})}function ne({onShowAttendance:t}){const[i,h]=n.useState([]),[s,j]=n.useState(new Date),[l,x]=n.useState(new Date),[o,d]=n.useState(""),[u,I]=n.useState(null),{data:f}=X(`per_page=15&location_id=${u||""}&page=1&text=${o}`,{skip:!o}),O=async a=>{var w;return d(a),((w=f==null?void 0:f.data)==null?void 0:w.map(p=>({value:String(p.id),label:p.first_name+" "+p.last_name+"("+p.id+")"})))||[]},{data:N,isLoading:P}=Z("page=1&per_page=1000"),R=(N==null?void 0:N.data)||[],[V,b]=n.useState(!1),[L,S]=n.useState(!1),M=a=>{a&&(j(a),b(!1))},_=a=>{a&&(x(a),S(!1))},H=()=>{!s||!l||t({fromDate:s,toDate:l,selectedEmployees:i})};return e.jsxs("div",{className:"w-full p-4 bg-white rounded-lg shadow",children:[e.jsx("h2",{className:"font-semibold mb-6 text-gray-800",children:"ATTENDANCE RECONCILIATION"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"employees",className:"text-sm font-medium text-gray-700",children:"Employees"}),e.jsx(q,{value:i,className:"h-16",onSearch:O,onChange:a=>{h(a)},hidePlaceholderWhenSelected:!0,placeholder:"Search employees",loadingIndicator:e.jsx("span",{children:"Loading..."}),emptyIndicator:e.jsx("span",{children:"No options found"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"fromDate",className:"text-sm font-medium text-gray-700",children:"From Date *"}),e.jsxs(v,{open:V,onOpenChange:b,children:[e.jsx(T,{asChild:!0,className:"h-8",children:e.jsxs(m,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s&&"text-muted-foreground"}`,children:[s?k(s,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(A,{className:"w-auto p-0",align:"start",children:e.jsx(C,{mode:"single",selected:s,onSelect:M,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"toDate",className:"text-sm font-medium text-gray-700",children:"To Date *"}),e.jsxs(v,{open:L,onOpenChange:S,children:[e.jsx(T,{asChild:!0,className:"h-8",children:e.jsxs(m,{variant:"outline",className:`w-full justify-start text-left font-normal ${!l&&"text-muted-foreground"}`,children:[l?k(l,"PP"):"Pick a date",e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(A,{className:"w-auto p-0",align:"start",children:e.jsx(C,{mode:"single",disabled:a=>a>new Date||!!(s&&a<s),selected:l,onSelect:_,initialFocus:!0})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"branch",className:"text-sm font-medium text-gray-700",children:"Branch"}),e.jsx(le,{items:R,loadingData:P,itemValueKey:"id",itemLabelKey:"name",placeholder:"Select Location",setSelected:I})]})]}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(m,{onClick:H,className:"bg-sky-500 hover:bg-sky-600 text-white",children:"Show Attendance"})})]})}function ce({filterData:t}){const[i,h]=n.useState([]);return n.useEffect(()=>{const s=J(t.fromDate,t.toDate);h(s)},[t]),t.selectedEmployees.length?e.jsxs("div",{className:"w-full py-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-gray-800",children:"ATTENDANCE INFORMATION"}),e.jsxs(m,{className:"bg-sky-500 hover:bg-sky-600",children:[e.jsx(E,{className:"mr-2 h-4 w-4"})," Save All"]})]}),t.selectedEmployees.map((s,j)=>e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow",children:[e.jsx("div",{className:"flex items-center space-x-4 mb-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-500",children:s.label}),e.jsx("p",{className:"text-sm text-gray-600",children:"Asst. Sales Manager"}),e.jsx("p",{className:"text-sm text-gray-500",children:"(Vivasoft sales Head-Office)"})]})}),e.jsxs(U,{children:[e.jsx(Y,{children:e.jsxs(F,{children:[e.jsx(c,{className:"bg-sky-500 text-white",children:"Attendance Date"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Flag"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"In Time"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"InTime Remarks"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Out Time"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Out Time Date"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"OutTime Remarks"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Working Hour"}),e.jsx(c,{className:"bg-sky-500 text-white",children:"Action"})]})}),e.jsx(ee,{children:i.map((l,x)=>{const o=l.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});return e.jsxs(F,{children:[e.jsx(r,{children:o}),e.jsx(r,{}),e.jsx(r,{children:e.jsx(g,{defaultValue:"10:00 AM",className:"bg-yellow-50"})}),e.jsx(r,{children:e.jsx(g,{placeholder:"Enter Remarks"})}),e.jsx(r,{children:e.jsx(g,{defaultValue:"3:00 PM",className:"bg-green-50"})}),e.jsx(r,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(g,{defaultValue:o,className:"mr-2"}),e.jsx(y,{className:"h-4 w-4 text-gray-400"})]})}),e.jsx(r,{children:e.jsx(g,{placeholder:"Enter Remarks"})}),e.jsx(r,{children:"0:0"}),e.jsx(r,{children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(m,{size:"icon",variant:"ghost",children:e.jsx(E,{className:"h-4 w-4 text-green-500"})}),x!==0&&e.jsx(m,{size:"icon",variant:"ghost",children:e.jsx(se,{className:"h-4 w-4 text-red-500"})})]})})]},x)})})]})]},j))]}):null}function de(){const[t,i]=n.useState({fromDate:new Date,toDate:new Date,selectedEmployees:[]});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(ae,{title:"Daily Attendance",description:"Manage Daily Attendance for you business"})}),e.jsx(te,{}),e.jsx(ne,{onShowAttendance:i}),e.jsx(ce,{filterData:t})]})})})}export{de as default};
