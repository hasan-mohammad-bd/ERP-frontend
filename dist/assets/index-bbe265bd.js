import{dr as G,r as m,a as e,az as H,aA as K,aB as V,V as N,aE as B,aD as Q,aF as q,av as D,aH as E,dl as J,dN as W,dM as Y,dT as X,I as T,bb as Z,bc as ee,bd as _,be as ae,bf as se,bg as f,B as te,D as ne,dU as le,du as re,au as $,G as oe,W as ie,H as O,J as z,K as L,a9 as ce,aa as de,ab as U,aV as ue,ac as me,ad as pe,Q as R,aU as he,N as xe,ca as ge,cb as je,aw as ye,aJ as fe,aK as Se,aL as be,aM as ve,aG as Ne}from"./index-66d9c5b6.js";const Pe=G.injectEndpoints({endpoints:s=>({getSupplierPayments:s.query({query:t=>`payment-mades?${t}`,providesTags:["payment-mades"]}),createSupplierPayment:s.mutation({query:t=>({url:"payment-mades",method:"POST",body:t}),invalidatesTags:["payment-mades","purchase","suppliers"]}),removeSupplierPayment:s.mutation({query:t=>({url:`payment-mades/${t}`,method:"DELETE"}),invalidatesTags:["payment-mades","purchase","suppliers"]})}),overrideExisting:!1}),{useGetSupplierPaymentsQuery:Ce,useCreateSupplierPaymentMutation:Te,useRemoveSupplierPaymentMutation:Fe}=Pe;function we({rowData:s}){const[t,c]=m.useState(!1),[g,{isLoading:o}]=Fe(),d=async j=>{try{await g(j),D.success("Supplier Payment deleted successfully"),c(!1)}catch(u){console.log(u)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(H,{children:e.jsxs(K,{children:[e.jsx(V,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(!0)},children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Delete Supplier Payment"})})]})}),e.jsx(q,{title:"Are you sure?",description:"This action cannot be undone.",name:s.invoice_number,isOpen:t,onClose:()=>c(!1),onConfirm:()=>d(s.id),loading:o})]})}const ke=[{id:"select",header:({table:s})=>e.jsx(E,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:t=>s.toggleAllPageRowsSelected(!!t),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(E,{checked:s.getIsSelected(),onCheckedChange:t=>s.toggleSelected(!!t),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"invoice_number",header:"Invoice No"},{accessorKey:"date",header:"Date"},{accessorKey:"contact",header:"Supplier Name",cell:({row:s})=>s.original.contact.name},{accessorKey:"amount",header:"Amount",cell:({row:s})=>e.jsx(J,{amount:parseFloat(String(s.original.amount))})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(we,{rowData:s.original})}];function Ae({selectedProducts:s,setSelectedProducts:t,setContactId:c,receivedAmount:g,setReceivedAmount:o}){const[d,j]=m.useState(""),[u,F]=m.useState(null),[w,P]=m.useState(!1),{data:h,isLoading:S}=W("only_due=1&per_page=1000&page=1",{skip:!d}),{data:b}=Y(`only_due=1&contact_id=${u}&per_page=1000&page=1`,{skip:!u}),C=((h==null?void 0:h.data)||[]).filter(a=>{var r;return(r=a.name)==null?void 0:r.toLowerCase().includes(d.toLowerCase())}),v=(b==null?void 0:b.data.map(a=>({...a,amount:a.total_due})))||[],k=(a,r)=>{F(a),j(r),P(!1)},A=a=>{if(s.find(n=>n.id===a.id)){const n=s.filter(p=>p.id!==a.id);t(n),o(n.reduce((p,i)=>p+(i.amount||0),0))}else{const n=[...s,a];t(n),o(n.reduce((p,i)=>p+(i.amount||0),0))}},l=a=>{let r=a;const n=[];for(const p of v){if(r<=0)break;const i=Math.min(p.total_due,r);n.push({...p,amount:i}),r-=i}o(a),t(n)},x=a=>{const r=a.target.value,n=parseFloat(r);(r===""||!isNaN(n))&&(o(n||0),l(n||0))},y=(a,r)=>{const n=s.map(i=>i.id===a?{...i,amount:Math.min(r,i.total_due)}:i);t(n);const p=n.reduce((i,I)=>i+(I.amount||0),0);if(o(p),r===0){const i=n.filter(I=>I.amount!==0);t(i)}};return e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 relative z-30",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md",children:e.jsx(X,{className:"h-4 w-4"})}),e.jsx(T,{type:"text",placeholder:"Enter Customer Name",value:d,onChange:a=>{j(a.target.value),P(!0)},className:"flex-grow"})]}),d&&w&&!S&&C.length>0&&e.jsx("div",{className:"absolute ml-14 bg-gray-50 dark:bg-gray-900",children:e.jsx("ul",{className:"border rounded-lg p-2",children:C.map(a=>e.jsx("li",{className:"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm w-full",onClick:()=>{k(a.id,a.name),c(a.id)},children:a.name},a.id))})})]}),e.jsxs(Z,{children:[e.jsx(ee,{className:"border rounded",children:e.jsx(_,{children:["Select","Date","Invoice No","Due Amount","Amount"].map(a=>e.jsx(ae,{children:a},a))})}),e.jsx(se,{children:v.length===0?e.jsx(_,{children:e.jsx(f,{colSpan:5,className:"text-center py-5",children:"No Items Selected Yet"})}):e.jsx(e.Fragment,{children:v.map(a=>{var r;return e.jsxs(_,{children:[e.jsx(f,{children:e.jsx("input",{type:"checkbox",checked:s.some(n=>n.id===a.id),onChange:()=>A(a)})}),e.jsx(f,{children:a.date}),e.jsx(f,{children:a.invoice_number}),e.jsx(f,{children:a.total_due}),e.jsx(f,{children:e.jsx(T,{type:"number",value:((r=s.find(n=>n.id===a.id))==null?void 0:r.amount)||a.total_due,onChange:n=>y(a.id,parseFloat(n.target.value)||0)})})]},a.id)})})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"block mb-2 font-medium",children:"Received Amount*"}),e.jsx(T,{type:"number",value:g===0?"":g,onChange:x})]})]})}function Ie({modalClose:s}){const[t,c]=m.useState([]),[g,o]=m.useState(null),[d,j]=m.useState(0),[u,F]=m.useState([]),[w,{isLoading:P}]=Te(),h=te({resolver:ne(le),defaultValues:{}}),{data:S,isLoading:b}=re("page=1&per_page=1000"),M=(S==null?void 0:S.data)||[],[C,v]=m.useState({date:!1,due_date:!1}),k=l=>{v(x=>({...x,[l]:!x[l]}))};async function A(l){if(t.length===0)return D.error("Please select at least one customer");const x=je.serialize({...l,contact_id:g,amount:Number(d),details:t.map(y=>({amount:y.amount,purchase_id:y.id})),files:u,_method:"POST"},{indices:!0});try{await w(x).unwrap(),D.success("Supplier Payment created successfully"),s()}catch(y){console.log(y),ye(y)}}return e.jsx(e.Fragment,{children:P?e.jsx("div",{children:e.jsx($,{})}):e.jsx(oe,{...h,children:e.jsxs("form",{onSubmit:h.handleSubmit(A),className:"space-y-3",children:[e.jsx(ie,{className:"mb-4",children:e.jsx(Ae,{setSelectedProducts:c,selectedProducts:t,previousData:!1,setContactId:o,receivedAmount:d,setReceivedAmount:j})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 ",children:[e.jsx(O,{control:h.control,name:"date",render:({field:l})=>e.jsxs(z,{children:[e.jsx(L,{children:"Date"}),e.jsxs(ce,{open:C.date,onOpenChange:()=>k("date"),children:[e.jsx(de,{asChild:!0,children:e.jsxs(N,{variant:"outline",className:`w-full justify-start text-left font-normal ${!l.value&&"text-muted-foreground"}`,children:[l.value?U(l.value,"PP"):"Pick a date",e.jsx(ue,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(me,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(pe,{mode:"single",selected:l.value?new Date(l.value):void 0,onSelect:x=>{l.onChange(x?U(x,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(R,{})]})}),e.jsx(he,{loading:b,data:M.filter(l=>l.nature==="Cash"||l.nature==="Bank Accounts"),displayField:"name",valueField:"id",form:h,name:"ledger_account_id",placeholder:"Select Ledger Account",title:"Ledger Account",className:"w-full"}),e.jsx(O,{control:h.control,name:"note",render:({field:l})=>e.jsxs(z,{children:[e.jsx(L,{children:"Note"}),e.jsx(xe,{children:e.jsx(T,{placeholder:"Type Subject.",...l})}),e.jsx(R,{})]})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(L,{children:"Upload Files"}),e.jsx(ge,{setFilesToUpload:F,filesToUpload:u})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx(N,{type:"button",onClick:()=>s(),className:"mr-2",variant:"primary",children:"Cancel"}),e.jsx(N,{variant:"default",type:"submit",className:"w-fit mt-4",children:"Add"})]})]})})})}const Le=()=>{const[s,t]=m.useState(!1),[c,g]=m.useState({pageIndex:0,pageSize:10}),{data:o,isLoading:d}=Ce(`per_page=${c.pageSize}&page=${c.pageIndex+1}`),j=(o==null?void 0:o.data)||[],u=o==null?void 0:o.meta;return d?e.jsx($,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(fe,{title:"Supplier Payments",description:"Manage your sub accounts for you business"}),e.jsxs(N,{onClick:()=>t(!0),size:"sm",children:[e.jsx(Se,{className:"mr-2 h-4 w-4"})," Add Supplier Payment"]})]}),e.jsx(be,{}),o&&e.jsx("div",{children:e.jsx(ve,{columns:ke,data:j,paginationInfo:u,pagination:u&&c,setPagination:u&&g})})]})}),s&&e.jsx(Ne,{title:"Add Supplier Payment",isOpen:s,toggleModal:()=>t(!1),className:"max-w-4xl w-full",children:e.jsx(Ie,{modalClose:()=>t(!1)})})]})};export{Le as default};
