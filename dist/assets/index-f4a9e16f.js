import{B as J,D as q,dm as he,r as b,a as e,au as z,G as W,H as u,J as g,K as f,N,I as v,Q as y,aU as R,bt as Y,V as S,av as _,aw as E,ao as $,W as k,ap as F,b as se,aK as B,aG as Z,aF as X,bV as re,az as G,aA as K,aB as Q,aC as me,aD as V,aE as ie,aH as O,R as H,aJ as D,aY as ee,aZ as oe,aM as de,_ as pe,$ as je,a0 as ue,ca as ge,y as fe,b8 as ye,ds as Ne,dt as Ce,A as ve,aj as Se,ak as be,al as I,am as T,an as ae,a9 as we,aa as Ae,ab as ne,aV as Pe,ac as _e,ad as ke,dq as Fe}from"./index-5bd6595c.js";import{u as Ee,a as Me,b as Le,c as Ie,d as te,e as Te,T as le,f as $e,g as Oe,h as ze,i as Ue,j as Re,k as Be,l as Ge,m as Ke}from"./index-cca4a458.js";import{S as ce}from"./square-pen-43516df7.js";function Qe({modalClose:s,data:n,customer_id:t,addressType:x}){const[m,{isLoading:c}]=Ee(),[p,{isLoading:a}]=Me(),d=J({resolver:q(he)}),h=d.watch("country_id"),{data:j,isLoading:A}=Le("per_page=500"),P=(j==null?void 0:j.data)||[],r=P.find(i=>i.id===Number(h)),{data:w,isLoading:l}=Ie(`per_page=500&country=${r==null?void 0:r.code}`,{skip:!r}),C=(w==null?void 0:w.data)||[];b.useEffect(()=>{var i;n&&d.reset({...n,country_id:String(n.country.id),city_id:String((i=n.city)==null?void 0:i.id)})},[d,n]);const M=async i=>{try{n?(await p({addressId:n.id,updatedAddress:{...i,contact_id:t,type:x,country_id:Number(i.country_id),city_id:Number(i.city_id),model_id:t}}).unwrap(),_.success("Address updated successfully"),s()):(await m({...i,contact_id:t,type:x,country_id:Number(i.country_id),city_id:Number(i.city_id)}).unwrap(),_.success("Address created successfully"),s())}catch(U){E(U)}};return e.jsx(e.Fragment,{children:c||a?e.jsx(z,{}):e.jsx(W,{...d,children:e.jsxs("form",{className:"space-y-3",onSubmit:d.handleSubmit(M),children:[e.jsx("div",{children:e.jsx(u,{control:d.control,name:"attention",render:({field:i})=>e.jsxs(g,{children:[e.jsx(f,{children:"Attention"}),e.jsx(N,{children:e.jsx(v,{placeholder:"Enter attention",...i,value:i.value||""})}),e.jsx(y,{})]})})}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(R,{loading:A,data:P,displayField:"name",valueField:"id",form:d,name:"country_id",placeholder:"Select country",title:"Country",className:"w-[305px]"}),e.jsx(R,{loading:l,data:C,displayField:"name",valueField:"id",form:d,name:"city_id",placeholder:"Select city",title:"City",className:"w-[305px]"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(u,{control:d.control,name:"post_code",render:({field:i})=>e.jsxs(g,{children:[e.jsx(f,{children:"Post code"}),e.jsx(N,{children:e.jsx(v,{placeholder:"Enter post code",...i})}),e.jsx(y,{})]})}),e.jsx(u,{control:d.control,name:"state",render:({field:i})=>e.jsxs(g,{children:[e.jsx(f,{children:"State"}),e.jsx(N,{children:e.jsx(v,{placeholder:"Enter state",...i,value:i.value||""})}),e.jsx(y,{})]})})]}),e.jsx(u,{control:d.control,name:"phone",render:({field:i})=>e.jsxs(g,{children:[e.jsx(f,{children:"Phone"}),e.jsx(N,{children:e.jsx(v,{type:"text",placeholder:"Enter phone number",...i,value:i.value||""})}),e.jsx(y,{})]})}),e.jsx("div",{children:e.jsx(u,{control:d.control,name:"address",render:({field:i})=>e.jsxs(g,{children:[e.jsx(f,{children:"Address"}),e.jsx(N,{children:e.jsx(Y,{placeholder:"Enter address",...i,value:i.value||""})}),e.jsx(y,{})]})})}),e.jsxs("div",{className:"flex flex-row-reverse items-center pt-5",children:[e.jsx(S,{variant:"default",type:"submit",className:"w-fit ml-2",children:"Save"}),e.jsx(S,{variant:"primary",type:"button",className:"w-fit",onClick:()=>s(),children:"Cancel"})]})]})})})}const Ve=({customer_id:s})=>{const{data:n,isLoading:t}=te(`type=Billing&contact_id=${s}`),{data:x,isLoading:m}=te(`type=Shipping&contact_id=${s}`),c=(n==null?void 0:n.data)||[],p=(x==null?void 0:x.data)||[],[a,{isLoading:d}]=Te(),[h,j]=b.useState(!1),[A,P]=b.useState(""),[r,w]=b.useState(void 0),[l,C]=b.useState(!1),[M,i]=b.useState(void 0),U=async o=>{try{await a(o).unwrap(),C(!1),_.success("Address deleted successfully")}catch(L){E(L),console.log(L)}};return t||m?e.jsx(z,{}):e.jsxs("div",{children:[e.jsx("div",{children:e.jsx($,{className:"mb-4 text-xl",children:"Billing Addresses"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[c.length>0&&c.map((o,L)=>e.jsx(k,{children:e.jsxs(F,{className:"p-5 flex items-start gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:se(o.attention||o.phone?"mb-3":""),children:[e.jsx("p",{children:o.attention}),e.jsx("p",{className:"text-sm",children:o.phone})]}),e.jsx("p",{children:`${o.address?o.address:""} ${o.post_code}, ${o.city.name}, ${o.country.name}`})]}),e.jsxs("div",{className:"flex items-center gap-2.5 ml-auto",children:[e.jsx("button",{className:"text-primary",onClick:()=>{w(o),j(!0),P("Billing")},children:e.jsx(ce,{size:18})}),e.jsx("button",{onClick:()=>{C(!0),i(o)},className:"text-red-500",children:e.jsx(le,{size:18})})]})]})},L)),e.jsx(k,{onClick:()=>{j(!0),P("Billing")},children:e.jsx(F,{className:"p-5 cursor-pointer text-center grid place-items-center h-full",children:e.jsxs("div",{className:"flex flex-col gap-1.5 justify-center items-center",children:[e.jsx(B,{}),e.jsx("span",{className:"underline",children:"Add new billing address"})]})})})]}),e.jsx($,{className:"mb-4 mt-8 text-xl",children:"Shipping Addresses"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[p.length>0&&p.map((o,L)=>e.jsx("div",{children:e.jsx(k,{children:e.jsxs(F,{className:"p-5 flex items-start gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:se(o.attention||o.phone?"mb-3":""),children:[e.jsx("p",{children:o.attention}),e.jsx("p",{className:"text-sm",children:o.phone})]}),e.jsx("p",{children:`${o.address?o.address:""} ${o.post_code}, ${o.city.name}, ${o.country.name}`})]}),e.jsxs("div",{className:"flex items-center gap-2.5 ml-auto",children:[e.jsx("button",{className:"text-primary",onClick:()=>{w(o),j(!0),P("Shipping")},children:e.jsx(ce,{size:18})}),e.jsx("button",{className:"text-red-500",onClick:()=>{C(!0),i(o)},children:e.jsx(le,{size:18})})]})]})})},L)),e.jsx(k,{onClick:()=>{j(!0),P("Shipping")},children:e.jsx(F,{className:"p-5 cursor-pointer text-center grid place-items-center h-full",children:e.jsxs("div",{className:"flex flex-col gap-1.5 justify-center items-center",children:[e.jsx(B,{}),e.jsx("span",{className:"underline",children:"Add new delivery address"})]})})})]}),h&&e.jsx(Z,{title:`${r?"Edit":"Add"} ${A} Address`,isOpen:h,toggleModal:()=>{j(!1),w(void 0)},className:"!w-full max-w-2xl",children:e.jsx(Qe,{modalClose:()=>{j(!1),w(void 0)},customer_id:s,addressType:A,data:r})}),e.jsx(X,{title:"Are you sure?",description:"This action cannot be undone.",name:M==null?void 0:M.attention,isOpen:l,onClose:()=>C(!1),onConfirm:()=>U(M.id),loading:d})]})},xe=({modalClose:s,customer_id:n,data:t})=>{const[x,{isLoading:m}]=$e(),[c,{isLoading:p}]=Oe();console.log(t);const a=J({resolver:q(ze),defaultValues:{name:"",email:"",phone:"",note:"",contact_id:n}});b.useEffect(()=>{t&&a.reset({...t,contact_id:n})},[n,a,t]);const d=async h=>{try{t?(console.log(t.id),await c({contactPersonId:t==null?void 0:t.id,updatedContactPerson:h}).unwrap(),_.success("Contact person updated successfully"),s()):(await x(h).unwrap(),_.success("Contact person added successfully"),s())}catch(j){E(j)}};return e.jsx(e.Fragment,{children:m||p?e.jsx(z,{}):e.jsx(W,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(d),className:"space-y-3",children:[e.jsx(u,{control:a.control,name:"name",render:({field:h})=>e.jsxs(g,{children:[e.jsx(f,{children:"Name"}),e.jsx(N,{children:e.jsx(v,{type:"text",placeholder:"Enter name",...h})}),e.jsx(y,{})]})}),e.jsx(u,{control:a.control,name:"email",render:({field:h})=>e.jsxs(g,{children:[e.jsx(f,{children:"Email Address"}),e.jsx(N,{children:e.jsx(v,{type:"email",placeholder:"Enter email address",...h})}),e.jsx(y,{})]})}),e.jsx(u,{control:a.control,name:"phone",render:({field:h})=>e.jsxs(g,{children:[e.jsx(f,{children:"Mobile Number"}),e.jsx(N,{children:e.jsx(v,{type:"text",placeholder:"Enter mobile number",...h})}),e.jsx(y,{})]})}),e.jsx(u,{control:a.control,name:"note",render:({field:h})=>e.jsxs(g,{children:[e.jsx(f,{children:"Note"}),e.jsx(N,{children:e.jsx(Y,{placeholder:"Enter your note",...h})}),e.jsx(y,{})]})}),e.jsxs("div",{className:"flex flex-row-reverse items-center pt-5",children:[e.jsx(S,{variant:"default",type:"submit",className:"w-fit ml-2",children:"Save"}),e.jsx(S,{variant:"primary",type:"button",className:"w-fit",onClick:()=>s(),children:"Cancel"})]})]})})})};function He({data:s}){const n=re(),t=Number(n.id),[x,m]=b.useState(!1),[c,p]=b.useState(!1),[a,{isLoading:d}]=Ue(),h=async j=>{try{await a(j).unwrap(),m(!1),_.success("Item deleted successfully")}catch(A){E(A),console.log(A)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(G,{children:e.jsxs(K,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(S,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>p(!0),children:e.jsx(me,{className:"h-4 w-4 text-foreground"})})}),e.jsx(V,{children:e.jsx("p",{children:"Update Contact Person"})})]})}),e.jsx(G,{children:e.jsxs(K,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(S,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{m(!0)},children:e.jsx(ie,{className:"h-4 w-4 text-foreground"})})}),e.jsx(V,{children:e.jsx("p",{children:"Delete Contact Person"})})]})}),c&&e.jsx(Z,{title:"Update Contact Person",isOpen:c,toggleModal:()=>{p(!1)},className:"!w-full max-w-lg",children:e.jsx(xe,{modalClose:()=>{p(!1)},customer_id:t,data:s})}),e.jsx(X,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:x,onClose:()=>m(!1),onConfirm:()=>h(s.id),loading:d})]})}const Je=[{id:"select",header:({table:s})=>e.jsx(O,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(O,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Name",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.name})},{accessorKey:"email",header:"Email",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.email})},{accessorKey:"phone",header:"Phone",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.phone})},{accessorKey:"note",header:"Note",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.note})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(He,{data:s.original})}],qe=({customer_id:s})=>{const[n,t]=b.useState(!1),[x,m]=H.useState({pageIndex:0,pageSize:10}),{data:c,isLoading:p}=Re(`contact_id=${s}&per_page=${x.pageSize}&page=${x.pageIndex+1}`),a=(c==null?void 0:c.data)||[],d=c==null?void 0:c.meta;return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between pt-4",children:[e.jsx(D,{title:"Contact person",description:"Manage all items for you business"}),e.jsxs(S,{size:"sm",onClick:()=>t(!0),children:[e.jsx(B,{className:"mr-2 h-4 w-4"})," Add Contact Person"]})]}),e.jsx(ee,{}),p&&e.jsx(oe,{}),e.jsx("div",{children:e.jsx(de,{columns:Je,data:a,paginationInfo:d,pagination:x,setPagination:m})}),n&&e.jsx(Z,{title:"Add Contact Person",isOpen:n,toggleModal:()=>{t(!1)},className:"!w-full max-w-lg",children:e.jsx(xe,{modalClose:()=>{t(!1)},customer_id:s})})]})},We=qe;function Ye({data:s}){const[n,t]=b.useState(!1),[x,{isLoading:m}]=Be(),c=async p=>{try{await x(p).unwrap(),t(!1),_.success("Item deleted successfully")}catch(a){E(a),console.log(a)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(G,{children:e.jsxs(K,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(S,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{t(!0)},children:e.jsx(ie,{className:"h-4 w-4 text-foreground"})})}),e.jsx(V,{children:e.jsx("p",{children:"Delete Contact Person"})})]})}),e.jsx(X,{title:"Are you sure?",description:"This action cannot be undone.",name:s.file_name,isOpen:n,onClose:()=>t(!1),onConfirm:()=>c(s.id),loading:m})]})}const Ze=[{id:"select",header:({table:s})=>e.jsx(O,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(O,{checked:s.getIsSelected(),onCheckedChange:n=>s.toggleSelected(!!n),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"thumbnail",header:"Image",cell:({row:s})=>e.jsxs(pe,{className:"h-9 w-9",children:[e.jsx(je,{src:s.getValue("thumbnail"),alt:"Customer Attachment Image"}),e.jsx(ue,{children:"CI"})," "]})},{accessorKey:"file_name",header:"File Name",cell:({row:s})=>e.jsx(e.Fragment,{children:e.jsx("a",{href:s.original.path,target:"_blank",rel:"noopener noreferrer",className:"text-primary",children:s.original.file_name})})},{accessorKey:"file_type",header:"File Type",cell:({row:s})=>e.jsx(e.Fragment,{children:s.original.file_type})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Ye,{data:s.original})}],Xe=({customer_id:s})=>{const[n,t]=H.useState({pageIndex:0,pageSize:10}),[x,m]=H.useState([]);console.log(x);const{data:c,isLoading:p,refetch:a}=Ge(`contact_id=${s}&per_page=${n.pageSize}&page=${n.pageIndex+1}`),[d,{isLoading:h}]=Ke(),j=(c==null?void 0:c.data)||[],A=c==null?void 0:c.meta,P=async()=>{if(!x.length){_.error("Please upload at least one file.");return}try{const r=new FormData;x.forEach(w=>r.append("files[]",w)),r.append("contact_id",s.toString()),await d(r).unwrap(),_.success("Files uploaded successfully!"),m([])}catch(r){console.error("Error uploading files:",r),E(r)}};return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"flex items-center justify-between pt-4",children:e.jsx(D,{title:"Attachments",description:"Manage all items for you business"})}),e.jsx(ee,{}),p&&e.jsx(oe,{}),e.jsx("div",{children:e.jsx(de,{columns:Ze,data:j,paginationInfo:A,pagination:n,setPagination:t})})," ",e.jsxs("div",{className:"w-full mt-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Add Attachments"}),e.jsx(ge,{setFilesToUpload:m,filesToUpload:x,onDeleteSuccess:()=>a()})]}),e.jsxs("div",{className:"flex flex-row-reverse items-center pt-5",children:[e.jsx(S,{variant:"default",className:"w-fit ml-2",onClick:P,disabled:h,children:h?"Saving...":"Save"}),e.jsx(S,{variant:"primary",type:"button",className:"w-fit",onClick:()=>m([]),children:"Cancel"})]})]})]})},De=Xe;function ns(){const s=fe(),n=re(),t=Number(n.id),[x,m]=b.useState({date:!1}),{data:c,isLoading:p}=ye("page=1&per_page=1000"),{data:a,isLoading:d}=Ne(t,{skip:!t}),h=(c==null?void 0:c.data)||[],[j,{isLoading:A}]=Ce(),P=l=>{m(C=>({...C,[l]:!C[l]}))},r=J({resolver:q(Fe),defaultValues:{}});b.useEffect(()=>{a!=null&&a.data&&r.reset({name:(a==null?void 0:a.data.name)||"",email:(a==null?void 0:a.data.email)||"",phone:(a==null?void 0:a.data.phone)||"",work_phone:(a==null?void 0:a.data.work_phone)||"",opening_balance:String(a==null?void 0:a.data.opening_balance)||"",note:(a==null?void 0:a.data.note)||"",date:(a==null?void 0:a.data.date)||"",company_name:(a==null?void 0:a.data.company_name)||"",company_id:(a==null?void 0:a.data.company_id)||"",location_id:String(a==null?void 0:a.data.location.id)||""})},[a==null?void 0:a.data,r]);async function w(l){try{await j({updatedCustomer:{...l,location_id:Number(l.location_id),opening_balance:Number(l.opening_balance)},supplier_id:t}).unwrap(),_.success("Supplier updated successfully")}catch(C){E(C),console.log(C)}}return d?e.jsx(z,{}):e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(D,{title:"Supplier Edit",description:"Manage all items for you business"}),e.jsxs(S,{onClick:()=>s("/billing/supplier"),size:"sm",children:[e.jsx(ve,{className:"mr-2 h-4 w-4"})," Back To All Supplier"]})]}),e.jsx(ee,{}),e.jsxs(Se,{defaultValue:"supplier",className:"max-w-[1000px] mx-auto mt-10",children:[e.jsxs(be,{className:"grid w-full grid-cols-4",children:[e.jsx(I,{value:"supplier",children:"Supplier Details"}),e.jsx(I,{value:"address",children:"Address"}),e.jsx(I,{value:"contact_person",children:"Contact Person"}),e.jsx(I,{value:"attachment",children:"Attachment"})]}),e.jsx(W,{...r,children:e.jsx("form",{onSubmit:r.handleSubmit(w),className:"space-y-3 max-w-[1200px] mx-auto",children:e.jsx(T,{value:"supplier",children:e.jsxs(k,{children:[e.jsx(ae,{children:e.jsx($,{children:"Edit Supplier"})}),e.jsxs(F,{className:"space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:[e.jsx(u,{control:r.control,name:"name",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Full Name"}),e.jsx(N,{children:e.jsx(v,{className:"",placeholder:"Enter full name",...l})}),e.jsx(y,{})]})}),e.jsx(u,{control:r.control,name:"company_name",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Company Name"}),e.jsx(N,{children:e.jsx(v,{className:"",placeholder:"Enter company name",...l})}),e.jsx(y,{})]})}),e.jsx(u,{control:r.control,name:"company_id",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Customer Id"}),e.jsx(N,{children:e.jsx(v,{type:"text",placeholder:"Enter customer Id",...l})}),e.jsx(y,{})]})}),e.jsx(u,{control:r.control,name:"work_phone",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Work Phone"}),e.jsx(N,{children:e.jsx(v,{type:"text",placeholder:"Enter work phone",...l})}),e.jsx(y,{})]})}),e.jsx(u,{control:r.control,name:"phone",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Phone number"}),e.jsx(N,{children:e.jsx(v,{type:"text",placeholder:"Enter phone number",...l})}),e.jsx(y,{})]})}),e.jsx(u,{control:r.control,name:"email",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Email Address"}),e.jsx(N,{children:e.jsx(v,{type:"email",placeholder:"Enter email address",...l})}),e.jsx(y,{})]})}),e.jsx(u,{control:r.control,name:"opening_balance",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Opening Balance"}),e.jsx(N,{children:e.jsx(v,{placeholder:"Enter opening balance",...l})}),e.jsx(y,{})]})}),e.jsx(u,{control:r.control,name:"date",render:({field:l})=>e.jsxs(g,{children:[e.jsx(f,{children:"Date"}),e.jsxs(we,{open:x.date,onOpenChange:()=>P("date"),children:[e.jsx(Ae,{asChild:!0,children:e.jsxs(S,{variant:"outline",className:`w-full justify-start text-left font-normal ${!l.value&&"text-muted-foreground"}`,children:[l.value?ne(l.value,"PP"):"Pick a date",e.jsx(Pe,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(_e,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(ke,{mode:"single",selected:l.value?new Date(l.value):void 0,onSelect:C=>{l.onChange(C?ne(C,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(y,{})]})}),e.jsx(R,{loading:p,data:h,displayField:"name",valueField:"id",form:r,name:"location_id",placeholder:"Location",title:"Location",className:"w-[300px]"}),e.jsx(u,{control:r.control,name:"note",render:({field:l})=>e.jsxs(g,{className:"col-span-2",children:[e.jsx(f,{children:"Note"}),e.jsx(N,{children:e.jsx(Y,{placeholder:"Enter note",...l})}),e.jsx(y,{})]})})]}),e.jsxs("div",{className:"flex flex-row-reverse items-center pt-5",children:[e.jsx(S,{variant:"default",type:"submit",className:"w-fit ml-2",children:A?"Saving":"Save"}),e.jsx(S,{variant:"primary",type:"button",className:"w-fit",onClick:()=>s("/billing/supplier"),children:"Cancel"})]})]})]})})})}),e.jsx(T,{value:"address",children:e.jsxs(k,{children:[e.jsx(ae,{children:e.jsx($,{children:"Address"})}),e.jsx(F,{className:"space-y-2",children:e.jsx("div",{className:"flex flex-col gap-5",children:e.jsx(Ve,{customer_id:t})})})]})}),e.jsx(T,{value:"contact_person",children:e.jsx(k,{children:e.jsx(F,{className:"space-y-2",children:e.jsx("div",{className:"flex flex-col gap-5",children:e.jsx(We,{customer_id:t})})})})}),e.jsx(T,{value:"attachment",children:e.jsx(k,{children:e.jsx(F,{className:"space-y-2",children:e.jsx("div",{className:"flex flex-col gap-5",children:e.jsx(De,{customer_id:t})})})})})]})]})}export{ns as default};
