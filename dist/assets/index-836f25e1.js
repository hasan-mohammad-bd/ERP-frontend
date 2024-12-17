import{r as h,a as e,aA as U,aB as G,aC as Q,W as v,aF as V,aE as $,aG as B,aw as L,aI as O,db as W,dy as J,dx as X,dE as Y,I as F,bc as q,bd as Z,be as T,bf as ee,bg as ae,bh as y,D as se,E as te,dF as ne,ac as A,dj as le,av as K,H as re,X as ce,J as z,K as E,N as M,aa as oe,ab as de,aX as ie,ad as ue,ae as he,V as H,aW as me,Q as pe,c0 as xe,c1 as ge,ax as je,aK as fe,aL as ye,aM as be,aN as Se,aH as Ne}from"./index-2817363c.js";import{u as ve,a as Ce,b as Pe}from"./index-85fdeb9a.js";function Fe({rowData:s}){const[n,d]=h.useState(!1),[g,{isLoading:c}]=ve(),i=async j=>{try{await g(j),L.success("Purchase Refund deleted successfully"),d(!1)}catch(u){console.log(u)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(U,{children:e.jsxs(G,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(v,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{d(!0)},children:e.jsx(V,{className:"h-4 w-4 text-foreground"})})}),e.jsx($,{children:e.jsx("p",{children:"Delete Purchase Refund"})})]})}),e.jsx(B,{title:"Are you sure?",description:"This action cannot be undone.",name:s.invoice_number,isOpen:n,onClose:()=>d(!1),onConfirm:()=>i(s.id),loading:c})]})}const we=[{id:"select",header:({table:s})=>e.jsx(O,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(O,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"invoice_number",header:"Invoice No"},{accessorKey:"date",header:"Date"},{accessorKey:"contact",header:"Supplier Name",cell:({row:s})=>s.original.contact.name},{accessorKey:"amount",header:"Amount",cell:({row:s})=>e.jsx(W,{amount:parseFloat(String(s.original.amount))})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Fe,{rowData:s.original})}];function ke({selectedProducts:s,setSelectedProducts:n,setContactId:d,receivedAmount:g,setReceivedAmount:c}){const[i,j]=h.useState(""),[u,w]=h.useState(null),[k,C]=h.useState(!1),{data:p,isLoading:b}=J("only_due=-1&per_page=1000&page=1",{skip:!i}),{data:S}=X(`only_due=-1&contact_id=${u}&per_page=1000&page=1`,{skip:!u}),P=((p==null?void 0:p.data)||[]).filter(a=>{var r;return(r=a.name)==null?void 0:r.toLowerCase().includes(i.toLowerCase())}),N=(S==null?void 0:S.data.map(a=>({...a,total_due:Math.abs(a.total_due),amount:Math.abs(a.total_due)})))||[],_=(a,r)=>{w(a),j(r),C(!1)},I=a=>{if(s.find(t=>t.id===a.id)){const t=s.filter(m=>m.id!==a.id);n(t),c(t.reduce((m,o)=>m+(o.amount||0),0))}else{const t=[...s,a];n(t),c(t.reduce((m,o)=>m+(o.amount||0),0))}},l=a=>{let r=a;const t=[];for(const m of N){if(r<=0)break;const o=Math.min(m.total_due,r);t.push({...m,amount:o}),r-=o}c(a),n(t)},x=a=>{const r=a.target.value,t=parseFloat(r);(r===""||!isNaN(t))&&(c(t||0),l(t||0))},f=(a,r)=>{const t=s.map(o=>o.id===a?{...o,amount:Math.min(r,o.total_due)}:o);n(t);const m=t.reduce((o,R)=>o+(R.amount||0),0);if(c(m),r===0){const o=t.filter(R=>R.amount!==0);n(o)}};return e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 relative z-30",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md",children:e.jsx(Y,{className:"h-4 w-4"})}),e.jsx(F,{type:"text",placeholder:"Enter Supplier Name",value:i,onChange:a=>{j(a.target.value),C(!0)},className:"flex-grow"})]}),i&&k&&!b&&P.length>0&&e.jsx("div",{className:"absolute ml-14 bg-gray-50 dark:bg-gray-900",children:e.jsx("ul",{className:"border rounded-lg p-2",children:P.map(a=>e.jsx("li",{className:"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm w-full",onClick:()=>{_(a.id,a.name),d(a.id)},children:a.name},a.id))})})]}),e.jsxs(q,{children:[e.jsx(Z,{className:"border rounded",children:e.jsx(T,{children:["Select","Date","Invoice No","Due Amount","Amount"].map(a=>e.jsx(ee,{children:a},a))})}),e.jsx(ae,{children:N.length===0?e.jsx(T,{children:e.jsx(y,{colSpan:5,className:"text-center py-5",children:"No Items Selected Yet"})}):e.jsx(e.Fragment,{children:N.map(a=>{var r;return e.jsxs(T,{children:[e.jsx(y,{children:e.jsx("input",{type:"checkbox",checked:s.some(t=>t.id===a.id),onChange:()=>I(a)})}),e.jsx(y,{children:a.date}),e.jsx(y,{children:a.invoice_number}),e.jsx(y,{children:a.total_due}),e.jsx(y,{children:e.jsx(F,{type:"number",value:((r=s.find(t=>t.id===a.id))==null?void 0:r.amount)||a.total_due,onChange:t=>f(a.id,parseFloat(t.target.value)||0)})})]},a.id)})})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"block mb-2 font-medium",children:"Received Amount*"}),e.jsx(F,{type:"number",value:g===0?"":g,onChange:x})]})]})}function _e({modalClose:s}){const[n,d]=h.useState([]),[g,c]=h.useState(null),[i,j]=h.useState(0),[u,w]=h.useState([]),[k,{isLoading:C}]=Ce(),p=se({resolver:te(ne),defaultValues:{date:A(new Date,"yyyy-MM-dd")}}),{data:b,isLoading:S}=le("page=1&per_page=1000"),D=(b==null?void 0:b.data)||[],[P,N]=h.useState({date:!1,due_date:!1}),_=l=>{N(x=>({...x,[l]:!x[l]}))};async function I(l){if(n.length===0)return L.error("Please select at least one supplier");const x=ge.serialize({...l,contact_id:g,amount:Number(i),details:n.map(f=>({amount:f.amount,purchase_id:f.id})),files:u,_method:"POST"},{indices:!0});try{await k(x).unwrap(),L.success("Purchase Refund created successfully"),s()}catch(f){console.log(f),je(f)}}return e.jsx(e.Fragment,{children:C?e.jsx("div",{children:e.jsx(K,{})}):e.jsx(re,{...p,children:e.jsxs("form",{onSubmit:p.handleSubmit(I),className:"space-y-3",children:[e.jsx(ce,{className:"mb-4",children:e.jsx(ke,{setSelectedProducts:d,selectedProducts:n,previousData:!1,setContactId:c,receivedAmount:i,setReceivedAmount:j})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 ",children:[e.jsx(z,{control:p.control,name:"date",render:({field:l})=>e.jsxs(E,{children:[e.jsx(M,{children:"Date"}),e.jsxs(oe,{open:P.date,onOpenChange:()=>_("date"),children:[e.jsx(de,{asChild:!0,children:e.jsxs(v,{variant:"outline",className:`w-full justify-start text-left font-normal ${!l.value&&"text-muted-foreground"}`,children:[l.value?A(l.value,"PP"):"Pick a date",e.jsx(ie,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(ue,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(he,{mode:"single",selected:l.value?new Date(l.value):void 0,onSelect:x=>{l.onChange(x?A(x,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(H,{})]})}),e.jsx(me,{loading:S,data:D.filter(l=>l.nature==="Cash"||l.nature==="Bank Accounts"),displayField:"name",valueField:"id",form:p,name:"ledger_account_id",placeholder:"Select Ledger Account",title:"Ledger Account",className:"w-full"}),e.jsx(z,{control:p.control,name:"note",render:({field:l})=>e.jsxs(E,{children:[e.jsx(M,{children:"Note"}),e.jsx(pe,{children:e.jsx(F,{placeholder:"Type Subject.",...l})}),e.jsx(H,{})]})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(M,{children:"Upload Files"}),e.jsx(xe,{setFilesToUpload:w,filesToUpload:u})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx(v,{type:"button",onClick:()=>s(),className:"mr-2",variant:"primary",children:"Cancel"}),e.jsx(v,{variant:"default",type:"submit",className:"w-fit mt-4",children:"Add"})]})]})})})}const Te=()=>{const[s,n]=h.useState(!1),[d,g]=h.useState({pageIndex:0,pageSize:10}),{data:c,isLoading:i}=Pe(`per_page=${d.pageSize}&page=${d.pageIndex+1}`),j=(c==null?void 0:c.data)||[],u=c==null?void 0:c.meta;return i?e.jsx(K,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(fe,{title:"Purchase Refunds",description:"Manage your sub accounts for you business"}),e.jsxs(v,{onClick:()=>n(!0),size:"sm",children:[e.jsx(ye,{className:"mr-2 h-4 w-4"})," Add Purchase Refund"]})]}),e.jsx(be,{}),c&&e.jsx("div",{children:e.jsx(Se,{columns:we,data:j,paginationInfo:u,pagination:u&&d,setPagination:u&&g})})]})}),s&&e.jsx(Ne,{title:"Add Purchase Refund",isOpen:s,toggleModal:()=>n(!1),className:"max-w-4xl w-full",children:e.jsx(_e,{modalClose:()=>n(!1)})})]})};export{Te as default};
