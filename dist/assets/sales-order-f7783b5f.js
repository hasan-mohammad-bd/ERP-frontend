import{r as E,dF as z,dO as I,a as e,dG as Q,I as v,bb as A,bc as G,bd as N,be as H,bf as O,bg as u,b1 as S,b2 as C,b3 as F,b4 as k,b6 as V,V as T,dH as $,aK as L,aE as R,dI as U,X as a}from"./index-5e4ea710.js";function D({selectedProducts:h,setSelectedProducts:r,previousData:j}){const[g,o]=E.useState(""),{data:c,isLoading:f,isError:y}=z(`text=${g}&type=molestiae`,{skip:!g}),{data:x}=I("per_page=1000&page=1"),m=(c==null?void 0:c.data)||[],l=(x==null?void 0:x.data)||[],b=i=>{if(!h.find(t=>t.id===i.id)){const t=i.primary_unit,n=1,d=t.selling_price*n,w=d,M=w;r(B=>[...B,{...i,unit:t,quantity:n,subTotal:d,total:w,finalPrice:M}])}o("")},_=(i,s)=>{r(t=>t.map(n=>n.id===i?{...n,quantity:s?n.quantity+1:Math.max(1,n.quantity-1),subTotal:n.unit.selling_price*(s?n.quantity+1:Math.max(1,n.quantity-1)),total:n.unit.selling_price*(s?n.quantity+1:Math.max(1,n.quantity-1))}:n))},q=(i,s)=>{r(t=>t.map(n=>n.id===i?{...n,unit:s,subTotal:s.selling_price*n.quantity,total:s.selling_price*n.quantity}:n))},p=i=>{r(s=>s.filter(t=>t.id!==i))};return e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 relative z-30",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md",children:e.jsx(Q,{className:"h-4 w-4"})}),e.jsx(v,{type:"text",placeholder:"Enter Product Name/Sku/scan barcode",value:g,onChange:i=>o(i.target.value),className:"flex-grow"})]}),g&&!f&&!y&&(m==null?void 0:m.length)>0&&e.jsx("div",{className:"mb-4 absolute ml-14 bg-gray-50 dark:bg-gray-900",children:e.jsx("ul",{className:"border rounded-lg p-2",children:m.map(i=>e.jsxs("li",{className:"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm",onClick:()=>b({...i,quantity:1,subTotal:i.primary_unit.selling_price,total:i.primary_unit.selling_price,finalPrice:i.primary_unit.selling_price,unit:i.primary_unit,note:"",tax:l.find(s=>s.id===i.sale_account_tax.id)??{name:"",amount:"",description:"",status:0,id:0}}),children:[i.name," (Barcode: ",i.barcode,")"]},i.id))})})]}),e.jsxs(A,{children:[e.jsx(G,{className:"border rounded",children:e.jsx(N,{children:["Product Name","Unit","Price","P.O. Quantity","Tax","Total","Note","Action"].map(i=>e.jsx(H,{children:i},i))})}),e.jsx(O,{children:(h==null?void 0:h.length)===0?e.jsx(N,{children:e.jsx(u,{colSpan:11,className:"text-center py-5",children:"No products selected yet."})}):e.jsx(e.Fragment,{children:h.map(i=>e.jsxs(N,{children:[e.jsxs(u,{children:[`${i.name} (${i.barcode_attribute})`,e.jsx("br",{}),e.jsxs("span",{className:"text-sm text-gray-500",children:["Barcode: ",i.barcode]})]}),e.jsx(u,{children:j?i.unit.name:e.jsx("div",{className:"w-64",children:e.jsxs(S,{onValueChange:s=>q(i.id,i.primary_unit.id===Number(s)?i.primary_unit:i.secondary_unit),defaultValue:i.unit.id.toString(),children:[e.jsx(C,{children:e.jsx(F,{placeholder:"Select Unit"})}),e.jsx(k,{children:[i.primary_unit,i.secondary_unit].map(s=>e.jsx(V,{value:String(s.id),children:s.name},s.id))})]})})}),e.jsx(u,{children:e.jsx("div",{className:"w-48",children:e.jsx(v,{id:"price",type:"number",className:"w-full",value:i.unit.selling_price||"",onChange:s=>{const t=s.target.value===""?"":parseFloat(s.target.value);r(n=>n.map(d=>d.id===i.id?{...d,unit:{...d.unit,selling_price:t||0},subTotal:(t||0)*d.quantity,total:(t||0)*d.quantity}:d))}})})}),e.jsx(u,{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(T,{type:"button",size:"icon",variant:"outline",onClick:()=>_(i.id,!1),children:e.jsx($,{className:"h-4 w-4"})}),e.jsx("span",{children:i.quantity}),e.jsx(T,{type:"button",size:"icon",variant:"outline",onClick:()=>_(i.id,!0),children:e.jsx(L,{className:"h-4 w-4"})})]})}),e.jsx(u,{children:e.jsx("div",{className:"w-64",children:e.jsxs(S,{onValueChange:s=>{r(t=>t.map(n=>n.id===i.id?{...n,tax:l.find(d=>d.id.toString()===s)??{name:"",amount:"",description:"",status:0,id:0}}:n))},defaultValue:i.sale_account_tax.id.toString()||void 0,children:[e.jsx(C,{children:e.jsx(F,{placeholder:"Select Tax"})}),e.jsx(k,{children:l==null?void 0:l.map(s=>e.jsx(V,{value:String(s.id),children:s.name},s.id))})]})})}),e.jsx(u,{children:i.total.toFixed(2)}),e.jsx(u,{children:e.jsx("div",{className:"w-64",children:e.jsx(v,{id:"note",type:"text",value:i.note||"",onChange:s=>{r(t=>t.map(n=>n.id===i.id?{...n,note:s.target.value}:n))}})})}),e.jsx(u,{children:e.jsx(T,{size:"icon",variant:"destructive",onClick:()=>p(i.id),children:e.jsx(R,{className:"h-4 w-4"})})})]},i.id))})})]})]})}function J({form:h,subTotal:r,selectedProducts:j}){const{watch:g,setValue:o}=h,c=g("discount"),f=g("tax_type");let y=0,x=0;j&&j.length>0&&(j==null||j.forEach(l=>{var p;const b=l.total*(c??0)/100,q=(l.total-b)*(Number((p=l.tax)==null?void 0:p.amount)||0)/100;y+=b,x+=q}));const m=Math.round(r-y+(f==="inclusive"?0:x));return o("total",m),o("sub_total",r),o("tax",x),e.jsx("div",{className:"w-full max-w-lg p-6 border rounded-lg shadow",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium",children:"Sub Total"}),e.jsx("span",{children:r==null?void 0:r.toFixed(2)})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(U,{htmlFor:"discount",className:"font-medium",children:"Discount"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(v,{id:"discount",type:"number",className:"w-20 mr-2",disabled:!r,value:c??"",onChange:l=>{const b=l.target.value;if(b===""){o("discount",void 0);return}const _=Math.max(0,Math.min(100,parseFloat(b)||0));o("discount",_)},onBlur:()=>{c||o("discount",0)}}),e.jsx("span",{children:"%"})]}),e.jsx("span",{children:y.toFixed(2)})]}),e.jsxs("div",{className:"flex justify-between items-center font-semibold",children:[e.jsx("span",{children:"Tax"}),e.jsx("span",{children:x.toFixed(2)})]}),e.jsxs("div",{className:"flex justify-between items-center font-semibold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:m?m.toFixed(2):0})]})]})})}const K=a.object({contact_id:a.string({required_error:"The contact id field is required."}),subject:a.string().optional(),reference:a.string().optional(),date:a.string({required_error:"The date field is required."}),delivery_date:a.string().optional(),due_date:a.string().optional(),discount:a.number().nonnegative().optional(),shipping_charges:a.number().nonnegative().optional(),sub_total:a.number({required_error:"The Sub total field is required."}).nonnegative(),total:a.number({required_error:"The total field is required."}).nonnegative(),note:a.string().optional(),terms_conditions:a.string().optional(),payment_term_id:a.string().optional(),quotation_id:a.string().optional().nullable(),project_id:a.string().optional().nullable(),sales_person_id:a.string().optional().nullable(),tax_type:a.string({required_error:"The tax type field is required."}),tax:a.number({required_error:"Tax is required."})});K.extend({details:a.array(a.object({item_id:a.number({required_error:"The item id is required."}),item_barcode_id:a.number({required_error:"The barcode id is required."}),unit_id:a.number({required_error:"The unit id is required."}),price:a.number({required_error:"The price is required."}).nonnegative(),qty:a.number({required_error:"The quantity is required."}).nonnegative(),discount:a.number().nonnegative().optional(),after_discount:a.number().nonnegative(),total:a.number({required_error:"The total is required."}).nonnegative(),note:a.string().optional(),tax_id:a.number()}))});export{J as C,D as S,K as s};
