import{y as te,r as D,dN as ne,dO as re,dP as le,B as oe,D as ie,dB as I,ab as c,bV as ce,dQ as de,dR as ue,dE as xe,dF as b,a as e,aJ as me,V as p,G as he,W as Q,aU as W,H as d,J as u,K as x,b1 as je,N as f,b2 as pe,b3 as ye,b4 as ge,b6 as ve,Q as m,a9 as M,aa as V,aV as q,ac as k,ad as E,I as z,bt as _e,dG as be,dH as fe,dS as Se,av as A,aw as Pe}from"./index-ce80897d.js";function Ne(){const S=te(),[i,L]=D.useState([]),[P,U]=D.useState({sales_order_date:!1,delivery_date:!1,due_date:!1}),w=a=>{U(s=>({...s,[a]:!s[a]}))},{data:N,isLoading:$}=ne("page=1&per_page=1000"),{data:C,isLoading:H}=re("page=1&per_page=1000"),J=(N==null?void 0:N.data)||[],R=(C==null?void 0:C.data)||[],[K,{isLoading:X}]=le(),t=oe({resolver:ie(Se),defaultValues:{total:0,discount:0,tax_type:I[1].id.toString(),date:c(new Date,"yyyy-MM-dd")}}),Y=ce(),T=Number(Y.id),{data:F}=de(T,{skip:!T}),[Z,{isLoading:ee}]=ue(),n=(F==null?void 0:F.data)||void 0;D.useEffect(()=>{var a,s,r;if(n){const o=n.details.map(l=>{var g,v,O,G;return{detailId:l.id,barcodeId:(g=l.item_barcode)==null?void 0:g.id,quantity:l.qty,used_qty:l.used_qty,available_qty:l.available_qty,price:l.price,tax:l.tax||void 0,units:[],unit:l.unit,barcode:(v=l.item_barcode)==null?void 0:v.barcode,name:(O=l.item)==null?void 0:O.name,barcodeAttribute:(G=l.item_barcode)==null?void 0:G.barcode_attribute,note:l.note}});L(o),t.reset({discount:n.discount,tax_type:n.tax_type,total:n.total,contact_id:String((a=n.contact)==null?void 0:a.id),date:n.date||"",due_date:n.due_date||"",delivery_date:n.delivery_date||"",note:n.note||"",terms_conditions:n.terms_conditions||"",sub_total:n.sub_total,reference:n.reference||"",tax:n.tax,warehouse_id:(s=n.warehouse)==null?void 0:s.id,purchase_order_id:(r=n.purchase_order)==null?void 0:r.id})}},[n,t]);const ae=t.watch("discount"),B=t.watch("tax_type");let h=0,y=0,j=0;i&&i.length>0&&(i==null||i.forEach(a=>{var g,v;const s=a.price*a.quantity,r=s*(ae??0)/100,o=s-r,l=B==="inclusive"?xe(o,((g=a.tax)==null?void 0:g.amount)||0):o*(((v=a.tax)==null?void 0:v.amount)||0)/100;h+=s,y+=r,j+=l}));let _=h-y+(B==="inclusive"?0:j);h=b(h),y=b(y),j=b(j),_=b(_),t.setValue("sub_total",h),t.setValue("tax",j),t.setValue("total",_);async function se(a){if(i.length===0)return A.error("Please select at least one product");const s={...a,details:i.map(r=>{var o;return{details_id:r.detailId,item_barcode_id:r.barcodeId,tax_id:(o=r.tax)==null?void 0:o.id,unit_id:r.unit.id,qty:r.quantity,price:r.price,total:r.price*r.quantity,note:r.note||""}})};console.log(s,"payload");try{n?(await Z({purchaseId:T,updatedPurchase:s}).unwrap(),A.success("Purchase updated successfully")):(await K(s).unwrap(),A.success("Purchase created successfully")),S("/billing/purchases")}catch(r){Pe(r)}}return console.log(t.formState.errors,"form errors"),e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(me,{title:n?"Edit Purchase":"Add Purchase",description:"Manage your sub accounts for you business"}),e.jsx(p,{onClick:()=>S("/billing/purchases"),size:"sm",children:"Purchase List"})]}),e.jsx(he,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(se),className:"space-y-3 mb-4  overflow-y-scroll no-scrollbar",children:[e.jsx("div",{className:"",children:e.jsx(Q,{className:"p-3",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(W,{loading:$,data:J,displayField:"name",valueField:"id",form:t,name:"contact_id",placeholder:"Select Supplier",title:"Supplier Name",className:"w-full"}),e.jsx(W,{loading:H,data:R,displayField:"name",valueField:"id",form:t,name:"warehouse_id",placeholder:"Select Warehouse",title:"Warehouse",className:"w-full"}),e.jsx("div",{className:"w-full",children:e.jsx(d,{control:t.control,name:"tax_type",render:({field:a})=>{var s,r,o;return e.jsxs(u,{children:[e.jsx(x,{children:"Tax Type"}),e.jsxs(je,{onValueChange:a.onChange,defaultValue:String((r=(s=I)==null?void 0:s[1])==null?void 0:r.id),children:[e.jsx(f,{children:e.jsx(pe,{children:e.jsx(ye,{placeholder:"Select Tax Type"})})}),e.jsx(ge,{children:(o=I)==null?void 0:o.map(l=>e.jsx(ve,{value:String(l.id),children:l.name},l.id))})]}),e.jsx(m,{})]})}})}),e.jsx(d,{control:t.control,name:"date",render:({field:a})=>e.jsxs(u,{children:[e.jsx(x,{children:"Date"}),e.jsxs(M,{open:P.sales_order_date,onOpenChange:()=>w("sales_order_date"),children:[e.jsx(V,{asChild:!0,children:e.jsxs(p,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?c(a.value,"PP"):"Pick a date",e.jsx(q,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(k,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(E,{mode:"single",selected:a.value?new Date(a.value):void 0,onSelect:s=>{a.onChange(s?c(s,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(m,{})]})}),e.jsx(d,{control:t.control,name:"due_date",render:({field:a})=>e.jsxs(u,{children:[e.jsx(x,{children:"Due Date"}),e.jsxs(M,{open:P.due_date,onOpenChange:()=>w("due_date"),children:[e.jsx(V,{asChild:!0,children:e.jsxs(p,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?c(a.value,"PP"):"Pick a date",e.jsx(q,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(k,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(E,{mode:"single",selected:a.value?new Date(a.value):void 0,onSelect:s=>{a.onChange(s?c(s,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(m,{})]})}),e.jsx(d,{control:t.control,name:"delivery_date",render:({field:a})=>e.jsxs(u,{children:[e.jsx(x,{children:"Delivery Date"}),e.jsxs(M,{open:P.delivery_date,onOpenChange:()=>w("delivery_date"),children:[e.jsx(V,{asChild:!0,children:e.jsxs(p,{variant:"outline",className:`w-full justify-start text-left font-normal ${!a.value&&"text-muted-foreground"}`,children:[a.value?c(a.value,"PP"):"Pick a date",e.jsx(q,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(k,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(E,{mode:"single",selected:a.value?new Date(a.value):void 0,onSelect:s=>{a.onChange(s?c(s,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(m,{})]})}),e.jsx(d,{control:t.control,name:"reference",render:({field:a})=>e.jsxs(u,{children:[e.jsx(x,{children:"Reference"}),e.jsx(f,{children:e.jsx(z,{placeholder:"Enter reference",...a})}),e.jsx(m,{})]})}),e.jsx(d,{control:t.control,name:"note",render:({field:a})=>e.jsxs(u,{children:[e.jsx(x,{children:"Note"}),e.jsx(f,{children:e.jsx(z,{placeholder:"Type Note.",...a})}),e.jsx(m,{})]})}),e.jsx(d,{control:t.control,name:"terms_conditions",render:({field:a})=>e.jsxs(u,{children:[e.jsx(x,{children:"Terms and conditions"}),e.jsx(f,{children:e.jsx(_e,{placeholder:"Type terms and conditions.",...a})}),e.jsx(m,{})]})})]})})}),e.jsx(Q,{className:"mb-4",children:e.jsx(be,{setSelectedProducts:L,selectedProducts:i})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(fe,{form:t,subTotal:h,discountedAmount:y,totalTaxAmount:j,grandTotal:_})}),e.jsxs("div",{className:"text-right",children:[e.jsx(p,{type:"button",onClick:()=>S("/billing/purchases"),className:"mr-2",variant:"primary",children:"Cancel"}),e.jsx(p,{disabled:!t.formState.isValid||X||ee,variant:"default",type:"submit",className:"w-fit mt-4",children:n?"Update":"Add"})]})]})})]})})}export{Ne as default};
