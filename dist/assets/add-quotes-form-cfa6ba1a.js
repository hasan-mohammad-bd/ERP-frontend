import{y as O,r as S,ds as $,dt as A,du as I,B as R,a as e,aG as B,Q as i,G as H,U as F,aQ as y,H as n,J as l,K as r,M as u,I as v,N as o,a6 as f,a7 as N,a8 as c,aR as _,a9 as C,aa as b,bp as J,D as U,as as K,at as V}from"./index-f0f9ceff.js";import{S as W,C as X,q as Y}from"./quotation-bcdb9648.js";import{b as Z}from"./index-2f006401.js";function te(){const m=O(),[d,w]=S.useState([]);console.log(d);const[x,Q]=S.useState({quote_date:!1,expire_date:!1,estimated_delivery_date:!1}),j=s=>{Q(a=>({...a,[s]:!a[s]}))},{data:h,isLoading:q}=$("page=1&per_page=1000"),{data:p,isLoading:M}=A("per_page=1000&page=1"),{data:g,isLoading:D}=I("per_page=1000&page=1"),L=(h==null?void 0:h.data)||[],k=(p==null?void 0:p.data)||[],T=(g==null?void 0:g.data)||[],[E,{isLoading:G}]=Z(),t=R({resolver:U(Y),defaultValues:{total:0}});async function z(s){console.log(s);try{await E({...s,details:d.map(a=>{const P=a.unit.selling_price*(1-a.unit.discount/100);return{unit_id:a.unit.id,item_id:a.id,item_barcode_id:Number(a.id),price:a.unit.selling_price,after_discount:P,total:P*a.quantity,qty:a.quantity,discount:a.unit.discount,note:""}})}).unwrap(),K.success("Quotation created successfully"),m("/billing/quotes")}catch(a){V(a)}}return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(B,{title:"Add Quote",description:"Manage your sub accounts for you business"}),e.jsx(i,{onClick:()=>m("/billing/quotes"),size:"sm",children:"Quotes List"})]}),e.jsx(H,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(z),className:"space-y-3 mb-4  overflow-y-scroll no-scrollbar",children:[e.jsx("div",{className:"",children:e.jsx(F,{className:"p-3",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(y,{loading:q,data:L,displayField:"name",valueField:"id",form:t,name:"contact_id",placeholder:"Select Customer",title:"Customer Name",className:"w-full"}),e.jsx(n,{control:t.control,name:"reference",render:({field:s})=>e.jsxs(l,{children:[e.jsx(r,{children:"Reference"}),e.jsx(u,{children:e.jsx(v,{placeholder:"Enter reference",...s})}),e.jsx(o,{})]})}),e.jsx(n,{control:t.control,name:"date",render:({field:s})=>e.jsxs(l,{children:[e.jsx(r,{children:"Quote Date"}),e.jsxs(f,{open:x.quote_date,onOpenChange:()=>j("quote_date"),children:[e.jsx(N,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s.value&&"text-muted-foreground"}`,children:[s.value?c(s.value,"PP"):"Pick a date",e.jsx(_,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(C,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(b,{mode:"single",selected:s.value?new Date(s.value):void 0,onSelect:a=>{s.onChange(a?c(a,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(o,{})]})}),e.jsx(n,{control:t.control,name:"expire_date",render:({field:s})=>e.jsxs(l,{children:[e.jsx(r,{children:"Expire Date"}),e.jsxs(f,{open:x.expire_date,onOpenChange:()=>j("expire_date"),children:[e.jsx(N,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s.value&&"text-muted-foreground"}`,children:[s.value?c(s.value,"PP"):"Pick a date",e.jsx(_,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(C,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(b,{mode:"single",selected:s.value?new Date(s.value):void 0,onSelect:a=>{s.onChange(a?c(a,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(o,{})]})}),e.jsx(n,{control:t.control,name:"estimated_delivery",render:({field:s})=>e.jsxs(l,{children:[e.jsx(r,{children:"Estimated Delivery Date"}),e.jsxs(f,{open:x.estimated_delivery_date,onOpenChange:()=>j("estimated_delivery_date"),children:[e.jsx(N,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s.value&&"text-muted-foreground"}`,children:[s.value?c(s.value,"PP"):"Pick a date",e.jsx(_,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(C,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(b,{mode:"single",selected:s.value?new Date(s.value):void 0,onSelect:a=>{s.onChange(a?c(a,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(o,{})]})}),e.jsx(y,{loading:D,data:T,displayField:"name",valueField:"id",form:t,name:"sales_person_id",placeholder:"Select Sells person",title:"Sales Person",className:"w-full"}),e.jsx(y,{loading:M,data:k,displayField:"name",valueField:"id",form:t,name:"project_id",placeholder:"Select Project",title:"Project Name",className:"w-full"}),e.jsx(n,{control:t.control,name:"subject",render:({field:s})=>e.jsxs(l,{children:[e.jsx(r,{children:"Subject"}),e.jsx(u,{children:e.jsx(v,{placeholder:"Type Subject.",...s})}),e.jsx(o,{})]})}),e.jsx(n,{control:t.control,name:"note",render:({field:s})=>e.jsxs(l,{children:[e.jsx(r,{children:"Customer Note"}),e.jsx(u,{children:e.jsx(v,{placeholder:"Type Subject.",...s})}),e.jsx(o,{})]})}),e.jsx(n,{control:t.control,name:"terms_conditions",render:({field:s})=>e.jsxs(l,{children:[e.jsx(r,{children:"Terms and conditions"}),e.jsx(u,{children:e.jsx(J,{placeholder:"Type terms and conditions.",...s})}),e.jsx(o,{})]})})]})})}),e.jsx(F,{className:"mb-4",children:e.jsx(W,{setSelectedProducts:w,selectedProducts:d,previousData:!1})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(X,{form:t,subTotal:Number(d.reduce((s,a)=>s+a.total,0).toFixed(2))})}),e.jsxs("div",{className:"text-right",children:[e.jsx(i,{type:"button",onClick:()=>m("/billing/quotes"),className:"mr-2",variant:"primary",children:"Cancel"}),e.jsx(i,{variant:"default",type:"submit",className:"w-fit mt-4",children:G?"Creating...":"Add"})]})]})})]})})}export{te as default};
