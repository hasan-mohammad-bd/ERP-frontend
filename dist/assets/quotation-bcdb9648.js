import{dl as S,r as C,a as e,dv as B,I as g,b7 as F,b8 as k,b9 as v,ba as E,bb as M,bc as m,aZ as V,a_ as z,a$ as $,b0 as I,b2 as Q,Q as _,dw as A,aH as H,aB as D,dx as G,V as a}from"./index-f0f9ceff.js";const L=S.injectEndpoints({endpoints:d=>({getSearchBarcodeProducts:d.query({query:t=>({url:`search-barcode?${t}`,method:"GET"}),providesTags:["search-barcode"]})}),overrideExisting:!1}),{useGetSearchBarcodeProductsQuery:P}=L;function U({selectedProducts:d,setSelectedProducts:t,previousData:b}){const[o,c]=C.useState(""),{data:h,isLoading:y,isError:j}=P(`text=${o}&type=molestiae`,{skip:!o}),x=(h==null?void 0:h.data)||[],q=i=>{if(!d.find(r=>r.id===i.id)){const r=i.primary_unit,n=1,l=r.selling_price*n,u=l*(1-r.discount/100),T=u;t(w=>[...w,{...i,unit:r,quantity:n,subTotal:l,total:u,finalPrice:T}])}c("")},p=(i,s)=>{t(r=>r.map(n=>n.id===i?{...n,quantity:s?n.quantity+1:Math.max(1,n.quantity-1),subTotal:n.unit.selling_price*(s?n.quantity+1:Math.max(1,n.quantity-1)),total:n.unit.selling_price*(s?n.quantity+1:Math.max(1,n.quantity-1))*(1-n.unit.discount/100)}:n))},f=(i,s)=>{t(r=>r.map(n=>n.id===i?{...n,unit:s,subTotal:s.selling_price*n.quantity,total:s.selling_price*n.quantity*(1-s.discount/100)}:n))},N=i=>{t(s=>s.filter(r=>r.id!==i))};return e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 relative z-30",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md",children:e.jsx(B,{className:"h-4 w-4"})}),e.jsx(g,{type:"text",placeholder:"Enter Product Name/Sku/scan barcode",value:o,onChange:i=>c(i.target.value),className:"flex-grow"})]}),o&&!y&&!j&&(x==null?void 0:x.length)>0&&e.jsx("div",{className:"mb-4 absolute ml-14 bg-gray-50 dark:bg-gray-900",children:e.jsx("ul",{className:"border rounded-lg p-2",children:x.map(i=>e.jsxs("li",{className:"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm",onClick:()=>q({...i,quantity:1,subTotal:i.primary_unit.selling_price,total:i.primary_unit.selling_price,finalPrice:i.primary_unit.selling_price,unit:i.primary_unit}),children:[i.name," (Barcode: ",i.barcode,")"]},i.id))})})]}),e.jsxs(F,{children:[e.jsx(k,{className:"border rounded",children:e.jsx(v,{children:["Product Name","Unit","Price","P.O. Quantity","Discount","Total","Action"].map(i=>e.jsx(E,{children:i},i))})}),e.jsx(M,{children:(d==null?void 0:d.length)===0?e.jsx(v,{children:e.jsx(m,{colSpan:11,className:"text-center py-5",children:"No products selected yet."})}):e.jsx(e.Fragment,{children:d.map(i=>e.jsxs(v,{children:[e.jsxs(m,{children:[`${i.name} (${i.barcode_attribute})`,e.jsx("br",{}),e.jsxs("span",{className:"text-sm text-gray-500",children:["Barcode: ",i.barcode]})]}),e.jsx(m,{children:b?i.unit.name:e.jsx("div",{className:"w-64",children:e.jsxs(V,{onValueChange:s=>f(i.id,i.primary_unit.id===Number(s)?i.primary_unit:i.secondary_unit),defaultValue:i.unit.id.toString(),children:[e.jsx(z,{children:e.jsx($,{placeholder:"Select Unit"})}),e.jsx(I,{children:[i.primary_unit,i.secondary_unit].map(s=>e.jsx(Q,{value:String(s.id),children:s.name},s.id))})]})})}),e.jsx(m,{children:e.jsx("div",{className:"w-48",children:e.jsx(g,{id:"price",type:"number",className:"w-full",value:i.unit.selling_price||"",onChange:s=>{const r=s.target.value===""?"":parseFloat(s.target.value);t(n=>n.map(l=>l.id===i.id?{...l,unit:{...l.unit,selling_price:r||0},subTotal:(r||0)*l.quantity,total:(r||0)*l.quantity*(1-(l.unit.discount||0)/100)}:l))}})})}),e.jsx(m,{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(_,{type:"button",size:"icon",variant:"outline",onClick:()=>p(i.id,!1),children:e.jsx(A,{className:"h-4 w-4"})}),e.jsx("span",{children:i.quantity}),e.jsx(_,{type:"button",size:"icon",variant:"outline",onClick:()=>p(i.id,!0),children:e.jsx(H,{className:"h-4 w-4"})})]})}),e.jsx(m,{children:e.jsx("div",{className:"w-32",children:e.jsx(g,{id:"discount",type:"number",value:i.unit.discount||"",onChange:s=>{const r=s.target.value,n=r===""?0:Math.min(parseFloat(r),100);t(l=>l.map(u=>u.id===i.id?{...u,unit:{...u.unit,discount:n},total:(u.unit.selling_price||0)*u.quantity*(1-n/100)}:u))}})})}),e.jsx(m,{children:i.total.toFixed(2)}),e.jsx(m,{children:e.jsx(_,{size:"icon",variant:"destructive",onClick:()=>N(i.id),children:e.jsx(D,{className:"h-4 w-4"})})})]},i.id))})})]})]})}function Z({form:d,subTotal:t}){const{watch:b,setValue:o}=d,c=b("discount"),h=t-t*(c??0)/100;return o("total",h),e.jsx("div",{className:"w-full max-w-lg p-6 border rounded-lg shadow",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium",children:"Sub Total"}),e.jsx("span",{children:t==null?void 0:t.toFixed(2)})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(G,{htmlFor:"discount",className:"font-medium",children:"Discount"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(g,{id:"discount",type:"number",className:"w-20 mr-2",disabled:!t,value:c??"",onChange:y=>{const j=y.target.value;if(j===""){o("discount",void 0);return}const x=Math.max(0,Math.min(100,parseFloat(j)||0));o("discount",x)},onBlur:()=>{c||o("discount",0)}}),e.jsx("span",{children:"%"})]}),e.jsx("span",{children:c?(t*(c??0)/100).toFixed(2):0})]}),e.jsxs("div",{className:"flex justify-between items-center font-semibold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:h?h.toFixed(2):0})]})]})})}const R=a.object({contact_id:a.string({required_error:"The contact id field is required."}),reference:a.string({required_error:"The reference field is required."}),date:a.string({required_error:"The date field is required."}),estimated_delivery:a.string({required_error:"The estimated delivery field is required."}),expire_date:a.string().optional(),project_id:a.string({required_error:"The project id field is required."}),sales_person_id:a.string().optional(),subject:a.string().optional(),note:a.string().optional(),terms_conditions:a.string().optional(),discount:a.number().nonnegative().optional(),shipping_charges:a.number().nonnegative().optional(),total:a.number({message:"The total field is required."}).nonnegative()});R.extend({details:a.array(a.object({item_id:a.number({required_error:"The item id is required."}),item_barcode_id:a.number({required_error:"The barcode id is required."}),unit_id:a.number({required_error:"The unit id is required."}),price:a.number({required_error:"The price is required."}).nonnegative(),qty:a.number({required_error:"The quantity is required."}).nonnegative(),discount:a.number().nonnegative().optional(),after_discount:a.number().nonnegative(),total:a.number({required_error:"The total is required."}).nonnegative(),note:a.string().optional()}))});export{Z as C,U as S,R as q};
