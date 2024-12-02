import{r as S,dy as F,a as e,dz as B,I as b,b7 as k,b8 as M,b9 as _,ba as V,bb as z,bc as h,aZ as E,a_ as Q,a$ as $,b0 as A,b2 as H,Q as f,dA as I,aH as D,aB as L,dB as N,V as a}from"./index-a54ce6e8.js";function G({selectedProducts:x,setSelectedProducts:r,previousData:y}){const[l,o]=S.useState(""),{data:d,isLoading:v,isError:p}=F(`text=${l}&type=molestiae`,{skip:!l}),m=(d==null?void 0:d.data)||[],g=i=>{if(!x.find(t=>t.id===i.id)){const t=i.primary_unit,n=1,c=t.selling_price*n,u=c*(1-t.discount/100),T=u;r(C=>[...C,{...i,unit:t,quantity:n,subTotal:c,total:u,finalPrice:T}])}o("")},j=(i,s)=>{r(t=>t.map(n=>n.id===i?{...n,quantity:s?n.quantity+1:Math.max(1,n.quantity-1),subTotal:n.unit.selling_price*(s?n.quantity+1:Math.max(1,n.quantity-1)),total:n.unit.selling_price*(s?n.quantity+1:Math.max(1,n.quantity-1))*(1-n.unit.discount/100)}:n))},q=(i,s)=>{r(t=>t.map(n=>n.id===i?{...n,unit:s,subTotal:s.selling_price*n.quantity,total:s.selling_price*n.quantity*(1-s.discount/100)}:n))},w=i=>{r(s=>s.filter(t=>t.id!==i))};return e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 relative z-30",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md",children:e.jsx(B,{className:"h-4 w-4"})}),e.jsx(b,{type:"text",placeholder:"Enter Product Name/Sku/scan barcode",value:l,onChange:i=>o(i.target.value),className:"flex-grow"})]}),l&&!v&&!p&&(m==null?void 0:m.length)>0&&e.jsx("div",{className:"mb-4 absolute ml-14 bg-gray-50 dark:bg-gray-900",children:e.jsx("ul",{className:"border rounded-lg p-2",children:m.map(i=>e.jsxs("li",{className:"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm",onClick:()=>g({...i,quantity:1,subTotal:i.primary_unit.selling_price,total:i.primary_unit.selling_price,finalPrice:i.primary_unit.selling_price,unit:i.primary_unit,note:""}),children:[i.name," (Barcode: ",i.barcode,")"]},i.id))})})]}),e.jsxs(k,{children:[e.jsx(M,{className:"border rounded",children:e.jsx(_,{children:["Product Name","Unit","Price","P.O. Quantity","Discount","Total","Note","Action"].map(i=>e.jsx(V,{children:i},i))})}),e.jsx(z,{children:(x==null?void 0:x.length)===0?e.jsx(_,{children:e.jsx(h,{colSpan:11,className:"text-center py-5",children:"No products selected yet."})}):e.jsx(e.Fragment,{children:x.map(i=>e.jsxs(_,{children:[e.jsxs(h,{children:[`${i.name} (${i.barcode_attribute})`,e.jsx("br",{}),e.jsxs("span",{className:"text-sm text-gray-500",children:["Barcode: ",i.barcode]})]}),e.jsx(h,{children:y?i.unit.name:e.jsx("div",{className:"w-64",children:e.jsxs(E,{onValueChange:s=>q(i.id,i.primary_unit.id===Number(s)?i.primary_unit:i.secondary_unit),defaultValue:i.unit.id.toString(),children:[e.jsx(Q,{children:e.jsx($,{placeholder:"Select Unit"})}),e.jsx(A,{children:[i.primary_unit,i.secondary_unit].map(s=>e.jsx(H,{value:String(s.id),children:s.name},s.id))})]})})}),e.jsx(h,{children:e.jsx("div",{className:"w-48",children:e.jsx(b,{id:"price",type:"number",className:"w-full",value:i.unit.selling_price||"",onChange:s=>{const t=s.target.value===""?"":parseFloat(s.target.value);r(n=>n.map(c=>c.id===i.id?{...c,unit:{...c.unit,selling_price:t||0},subTotal:(t||0)*c.quantity,total:(t||0)*c.quantity*(1-(c.unit.discount||0)/100)}:c))}})})}),e.jsx(h,{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(f,{type:"button",size:"icon",variant:"outline",onClick:()=>j(i.id,!1),children:e.jsx(I,{className:"h-4 w-4"})}),e.jsx("span",{children:i.quantity}),e.jsx(f,{type:"button",size:"icon",variant:"outline",onClick:()=>j(i.id,!0),children:e.jsx(D,{className:"h-4 w-4"})})]})}),e.jsx(h,{children:e.jsx("div",{className:"w-32",children:e.jsx(b,{id:"discount",type:"number",value:i.unit.discount||"",onChange:s=>{const t=s.target.value,n=t===""?0:Math.min(parseFloat(t),100);r(c=>c.map(u=>u.id===i.id?{...u,unit:{...u.unit,discount:n},total:(u.unit.selling_price||0)*u.quantity*(1-n/100)}:u))}})})}),e.jsx(h,{children:i.total.toFixed(2)}),e.jsx(h,{children:e.jsx("div",{className:"w-64",children:e.jsx(b,{id:"note",type:"text",value:i.note||"",onChange:s=>{r(t=>t.map(n=>n.id===i.id?{...n,note:s.target.value}:n))}})})}),e.jsx(h,{children:e.jsx(f,{size:"icon",variant:"destructive",onClick:()=>w(i.id),children:e.jsx(L,{className:"h-4 w-4"})})})]},i.id))})})]})]})}function U({form:x,subTotal:r}){const{watch:y,setValue:l}=x,o=y("discount"),d=y("shipping_charges"),v=r*(o??0)/100,p=r-v+(d??0);return l("total",p),e.jsx("div",{className:"w-full max-w-lg p-6 border rounded-lg shadow",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium",children:"Sub Total"}),e.jsx("span",{children:r==null?void 0:r.toFixed(2)})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(N,{htmlFor:"discount",className:"font-medium",children:"Discount"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(b,{id:"discount",type:"number",className:"w-20 mr-2",disabled:!r,value:o??"",onChange:m=>{const g=m.target.value;if(g===""){l("discount",void 0);return}const j=Math.max(0,Math.min(100,parseFloat(g)||0));l("discount",j)},onBlur:()=>{o||l("discount",0)}}),e.jsx("span",{children:"%"})]}),e.jsx("span",{children:o?(r*(o??0)/100).toFixed(2):0})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(N,{htmlFor:"shipping_charges",className:"font-medium",children:"Shipping Charges"}),e.jsx("div",{className:"flex items-center",children:e.jsx(b,{id:"shipping_charges",type:"number",className:"w-32 mr-2",disabled:!r,value:d??"",onChange:m=>{const g=m.target.value;if(g===""){l("shipping_charges",void 0);return}const j=Math.max(0,parseFloat(g)||0);l("shipping_charges",j)},onBlur:()=>{d||l("shipping_charges",0)}})}),e.jsx("span",{children:d?d.toFixed(2):"0.00"})]}),e.jsxs("div",{className:"flex justify-between items-center font-semibold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:p?p.toFixed(2):0})]})]})})}const O=a.object({contact_id:a.string({required_error:"The contact id field is required."}),subject:a.string().optional(),reference:a.string().optional(),date:a.string({required_error:"The date field is required."}),delivery_date:a.string().optional(),due_date:a.string().optional(),discount:a.number().nonnegative().optional(),shipping_charges:a.number().nonnegative().optional(),total:a.number({required_error:"The total field is required."}).nonnegative(),note:a.string().optional(),terms_conditions:a.string().optional(),payment_term_id:a.string().optional(),quotation_id:a.string().optional().nullable(),project_id:a.string().optional().nullable(),sales_person_id:a.string().optional().nullable()});O.extend({details:a.array(a.object({item_id:a.number({required_error:"The item id is required."}),item_barcode_id:a.number({required_error:"The barcode id is required."}),unit_id:a.number({required_error:"The unit id is required."}),price:a.number({required_error:"The price is required."}).nonnegative(),qty:a.number({required_error:"The quantity is required."}).nonnegative(),discount:a.number().nonnegative().optional(),after_discount:a.number().nonnegative(),total:a.number({required_error:"The total is required."}).nonnegative(),note:a.string().optional()}))});export{U as C,G as S,O as s};
