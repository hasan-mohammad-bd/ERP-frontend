import{bU as V,y as W,r as f,dy as X,dz as Y,dA as Z,dv as ee,dx as ae,dL as se,dM as te,B as re,a as e,ar as ne,aG as ie,Q as l,G as oe,U as Q,aQ as u,H as n,J as i,K as o,M as m,I as S,N as d,a6 as w,a7 as P,a8 as c,aR as F,a9 as C,aa as L,bp as de,D as le,as as ce,at as ue}from"./index-7f835caf.js";import{S as me,C as pe,s as xe}from"./sales-order-09a89bd6.js";function _e(){const M=V(),p=Number(M.id),x=W(),[j,O]=f.useState([]),[h,k]=f.useState({sales_order_date:!1,delivery_date:!1,due_date:!1}),_=a=>{k(s=>({...s,[a]:!s[a]}))},{data:g,isLoading:D}=X("page=1&per_page=1000"),{data:b,isLoading:G}=Y("per_page=1000&page=1"),{data:y,isLoading:q}=Z("per_page=1000&page=1"),{data:N,isLoading:U}=ee("per_page=1000&page=1"),{data:v,isLoading:E}=ae("per_page=1000&page=1"),z=(v==null?void 0:v.data)||[],I=(g==null?void 0:g.data)||[],$=(b==null?void 0:b.data)||[],B=(y==null?void 0:y.data)||[],R=(N==null?void 0:N.data)||[],{data:r,isLoading:H}=se(p,{skip:!p}),[J,{isLoading:A}]=te(),t=re({resolver:le(xe),defaultValues:{total:0}});f.useEffect(()=>{r&&(t.reset({...r.data,note:r.data.note??"",subject:r.data.subject??"",terms_conditions:r.data.terms_conditions??"",contact_id:String(r.data.contact.id),discount:Number(r.data.discount),total:Number(r.data.total),shipping_charges:Number(r.data.shipping_charges),reference:r.data.reference??void 0}),O(r.data.details.map(a=>({barcode:String(a.item_barcode.barcode),id:a.item_barcode.id,barcode_attribute:a.item_barcode.barcode_attribute,name:a.item.name,note:a.note||"",secondary_unit:{wholesale_price:Number(a.item_barcode.wholesale_price),after_discount:Number(a.item_barcode.after_discount),discount:Number(a.discount),discount_amount:Number(a.item_barcode.discount_amount),id:a.unit.id,name:a.item.name,selling_price:Number(a.item_barcode.selling_price)},finalPrice:Number(a.total),quantity:Number(a.qty),subTotal:Number(a.item_barcode.after_discount),total:Number(a.total),primary_unit:{wholesale_price:Number(a.item_barcode.wholesale_price),after_discount:Number(a.item_barcode.after_discount),discount:Number(a.discount),discount_amount:Number(a.item_barcode.discount_amount),id:a.unit.id,name:a.item.name,selling_price:Number(a.item_barcode.selling_price)},unit:{wholesale_price:Number(a.item_barcode.wholesale_price),after_discount:Number(a.item_barcode.after_discount),discount:Number(a.discount),discount_amount:Number(a.item_barcode.discount_amount),id:a.unit.id,name:a.item.name,selling_price:Number(a.item_barcode.selling_price)}}))))},[t,r]);async function K(a){try{await J({salesOrderId:p,updatedSalesOrder:{...a,discount:a.discount||0,shipping_charges:a.shipping_charges||0,details:j.map(s=>{const T=s.unit.selling_price*(1-s.unit.discount/100);return{unit_id:s.unit.id,item_id:s.id,item_barcode_id:Number(s.id),price:s.unit.selling_price,after_discount:Number(T.toFixed(2)),total:Number((T*s.quantity).toFixed(2)),qty:s.quantity,discount:s.unit.discount,note:s.note||""}})}}).unwrap(),ce.success("Sales order updated successfully"),x("/billing/sales-orders")}catch(s){ue(s)}}return H?e.jsx(ne,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(ie,{title:"Edit Sales Order",description:"Manage your sub accounts for you business"}),e.jsx(l,{onClick:()=>x("/billing/sales-orders"),size:"sm",children:"Sales Order List"})]}),e.jsx(oe,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(K),className:"space-y-3 mb-4  overflow-y-scroll no-scrollbar",children:[e.jsx("div",{className:"",children:e.jsx(Q,{className:"p-3",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(u,{loading:D,data:I,displayField:"name",valueField:"id",form:t,name:"contact_id",placeholder:"Select Customer",title:"Customer Name",className:"w-full"}),e.jsx(n,{control:t.control,name:"reference",render:({field:a})=>e.jsxs(i,{children:[e.jsx(o,{children:"Reference"}),e.jsx(m,{children:e.jsx(S,{placeholder:"Enter reference",...a})}),e.jsx(d,{})]})}),e.jsx(n,{control:t.control,name:"date",render:({field:a})=>e.jsxs(i,{children:[e.jsx(o,{children:"Date"}),e.jsxs(w,{open:h.sales_order_date,onOpenChange:()=>_("sales_order_date"),children:[e.jsx(P,{asChild:!0,children:e.jsxs(l,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?c(a.value,"PP"):"Pick a date",e.jsx(F,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(C,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(L,{mode:"single",selected:a.value?new Date(a.value):void 0,onSelect:s=>{a.onChange(s?c(s,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(d,{})]})}),e.jsx(n,{control:t.control,name:"due_date",render:({field:a})=>e.jsxs(i,{children:[e.jsx(o,{children:"Due Date"}),e.jsxs(w,{open:h.due_date,onOpenChange:()=>_("due_date"),children:[e.jsx(P,{asChild:!0,children:e.jsxs(l,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?c(a.value,"PP"):"Pick a date",e.jsx(F,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(C,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(L,{mode:"single",selected:a.value?new Date(a.value):void 0,onSelect:s=>{a.onChange(s?c(s,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(d,{})]})}),e.jsx(n,{control:t.control,name:"delivery_date",render:({field:a})=>e.jsxs(i,{children:[e.jsx(o,{children:"Delivery Date"}),e.jsxs(w,{open:h.delivery_date,onOpenChange:()=>_("delivery_date"),children:[e.jsx(P,{asChild:!0,children:e.jsxs(l,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?c(a.value,"PP"):"Pick a date",e.jsx(F,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(C,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(L,{mode:"single",selected:a.value?new Date(a.value):void 0,onSelect:s=>{a.onChange(s?c(s,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(d,{})]})}),e.jsx(u,{loading:q,data:B,displayField:"name",valueField:"id",form:t,name:"sales_person_id",placeholder:"Select Sales person",title:"Sales Person",className:"w-full"}),e.jsx(u,{loading:G,data:$,displayField:"name",valueField:"id",form:t,name:"project_id",placeholder:"Select Project",title:"Project Name",className:"w-full"}),e.jsx(u,{loading:U,data:R,displayField:"name",valueField:"id",form:t,name:"payment_terms",placeholder:"Select Payment Terms",title:"Payment Terms",className:"w-full"}),e.jsx(u,{loading:E,data:z,displayField:"invoice_number",valueField:"id",form:t,name:"quotation_id",placeholder:"Select Quotation",title:"Quotation",className:"w-full"}),e.jsx(n,{control:t.control,name:"subject",render:({field:a})=>e.jsxs(i,{children:[e.jsx(o,{children:"Subject"}),e.jsx(m,{children:e.jsx(S,{placeholder:"Type Subject.",...a})}),e.jsx(d,{})]})}),e.jsx(n,{control:t.control,name:"note",render:({field:a})=>e.jsxs(i,{children:[e.jsx(o,{children:"Note"}),e.jsx(m,{children:e.jsx(S,{placeholder:"Type Note.",...a})}),e.jsx(d,{})]})}),e.jsx(n,{control:t.control,name:"terms_conditions",render:({field:a})=>e.jsxs(i,{children:[e.jsx(o,{children:"Terms and conditions"}),e.jsx(m,{children:e.jsx(de,{placeholder:"Type terms and conditions.",...a})}),e.jsx(d,{})]})})]})})}),e.jsx(Q,{className:"mb-4",children:e.jsx(me,{setSelectedProducts:O,selectedProducts:j,previousData:!0})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(pe,{form:t,subTotal:Number(j.reduce((a,s)=>a+s.total,0).toFixed(2))})}),e.jsxs("div",{className:"text-right",children:[e.jsx(l,{type:"button",onClick:()=>x("/billing/sales-orders"),className:"mr-2",variant:"primary",children:"Cancel"}),e.jsx(l,{variant:"default",type:"submit",className:"w-fit mt-4",children:A?"Updating...":"Update"})]})]})})]})})}export{_e as default};
