<<<<<<<< HEAD:dist/assets/index-a2413620.js
import{bQ as I,z as w,r as h,dl as O,dm as Q,D as G,E as U,c8 as V,a as e,av as y,X as B,H,J as c,K as i,N as o,aa as J,ab as K,W as l,ac as N,aX as W,ad as X,ae as R,V as d,aW as v,Q as g,bw as q,I as b,aF as Y,aL as Z,aw as ee,ax as ae,aK as se,A as te,aM as ne}from"./index-e481e15b.js";import{e as re}from"./expenses-0b5eeac0.js";import{c as le,d as oe}from"./index-ea63a192.js";const ce=()=>{const m=I(),u=Number(m.id),f=w(),[E,_]=h.useState({date:!1}),{data:x,isLoading:F}=O("type=Assets&nature=Cash&page=1&per_page=1000"),{data:p,isLoading:C}=Q("page=1&per_page=1000"),[A,{isLoading:L}]=le(),{data:t,isLoading:P}=oe(u,{skip:!u,refetchOnMountOrArgChange:u,refetchOnFocus:!0}),S=(x==null?void 0:x.data)||[],k=(p==null?void 0:p.data)||[],n=G({resolver:U(re),defaultValues:{total:0,note:"",details:[{note:"",attachment:""}]}}),D=s=>{_(a=>({...a,[s]:!a[s]}))},{fields:M,append:T,remove:$}=V({control:n.control,name:"details"});h.useEffect(()=>{t!=null&&t.data&&n.reset({note:t==null?void 0:t.data.note,ledger_account_id:String(t==null?void 0:t.data.ledger_account_id),date:t==null?void 0:t.data.date,details:t==null?void 0:t.data.details.map(s=>({note:s.note||"",amount:s.amount,expense_category_id:String(s.expense_category_id)}))})},[t==null?void 0:t.data,n]);const j=n.watch("details").reduce((s,a)=>{const r=parseFloat(a.amount||"0");return s+(isNaN(r)?0:r)},0);h.useEffect(()=>{n.setValue("total",j)},[n,j]);async function z(s){try{await A({expenseId:Number(t==null?void 0:t.data.id),updatedExpense:{...s,ledger_account_id:Number(s.ledger_account_id),details:s.details.map(a=>({...a,expense_category_id:Number(a.expense_category_id),amount:Number(a.amount)}))}}).unwrap(),ee.success("Expense Updated successfully"),f("/billing/expenses")}catch(a){ae(a)}}return P?e.jsx(y,{}):e.jsx(B,{children:L?e.jsx(y,{}):e.jsx(H,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(z),className:"px-6 py-4",children:[e.jsx("div",{className:"grid grid-cols-2 gap-8 justify-between w-full",children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(c,{control:n.control,name:"date",render:({field:s})=>e.jsxs(i,{children:[e.jsx(o,{children:"Date"}),e.jsxs(J,{open:E.date,onOpenChange:()=>D("date"),children:[e.jsx(K,{asChild:!0,children:e.jsxs(l,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s.value&&"text-muted-foreground"}`,children:[s.value?N(s.value,"PP"):"Pick a date",e.jsx(W,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(X,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(R,{mode:"single",selected:s.value?new Date(s.value):void 0,onSelect:a=>{s.onChange(a?N(a,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(d,{})]})}),e.jsx("div",{className:"w-full",children:e.jsx(v,{loading:F,data:S,displayField:"name",valueField:"id",form:n,name:"ledger_account_id",title:"Payform",className:"w-[375px]"})}),e.jsx("div",{className:"grid col-span-2",children:e.jsx(c,{control:n.control,name:"note",render:({field:s})=>e.jsxs(i,{children:[e.jsx(o,{children:"Note"}),e.jsx(g,{children:e.jsx(q,{placeholder:"Enter your note",...s})}),e.jsx(d,{})]})})})]})}),e.jsxs("div",{className:"mt-10 w-full",children:[M.map((s,a)=>e.jsxs("div",{className:"flex gap-4 items-start w-full my-4",children:[e.jsxs("div",{className:`${a===0?"-translate-y-0":"-translate-y-[8px]"}   w-full`,children:[a===0&&e.jsx(o,{children:"Expenses Category"})," ",e.jsx(v,{loading:C,data:k,displayField:"name",valueField:"id",form:n,name:`details.${a}.expense_category_id`,className:"w-[497px]"})]}),e.jsx(c,{control:n.control,name:`details.${a}.note`,render:({field:r})=>e.jsxs(i,{className:"w-full",children:[a===0&&e.jsx(o,{children:"Note"})," ",e.jsx(g,{children:e.jsx(b,{type:"text",placeholder:"Enter note",...r})}),e.jsx(d,{})]})}),e.jsx(c,{control:n.control,name:`details.${a}.amount`,render:({field:r})=>e.jsxs(i,{className:"w-full",children:[a===0&&e.jsx(o,{children:"Amount"})," ",e.jsx(g,{children:e.jsx(b,{type:"number",min:0,placeholder:"Enter amount",...r})}),e.jsx(d,{})]})}),a!==0&&e.jsx("div",{className:`flex items-center ${a===0?"mt-8":"mt-0"}`,children:e.jsx(l,{variant:"outline",className:"text-red-600",type:"button",onClick:()=>$(a),children:e.jsx(Y,{size:16})})})]},s.id)),e.jsx("div",{className:"w-full",children:e.jsxs(l,{variant:"outline",className:"border border-dashed border-gray-700 w-full",type:"button",onClick:()=>T({expense_category_id:"",note:"",amount:"",attachment:""}),children:[e.jsx(Z,{size:16})," ",e.jsx("span",{className:"ml-2",children:"Add Expense"})]})}),e.jsx("div",{className:"flex flex-row-reverse my-5",children:e.jsxs("p",{className:"text-[14px] font-semibold",children:["Total: ",j]})})]}),e.jsxs("div",{className:"flex flex-row-reverse items-center !mb-2 mt-8",children:[e.jsx(l,{variant:"default",type:"submit",className:"w-fit ml-2",children:"Save"}),e.jsx(l,{type:"button",variant:"primary",className:"w-fit",onClick:()=>f("/billing/expenses"),children:"Cancel"})]})]})})})},pe=()=>{const m=w();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(se,{title:"Edit Expense",description:"Manage job apply for you business"}),e.jsxs(l,{onClick:()=>m("/billing/expenses"),size:"sm",children:[e.jsx(te,{className:"mr-2 h-4 w-4"})," Back To All Expenses"]})]}),e.jsx(ne,{})]})}),e.jsx(ce,{})]})};export{pe as default};
========
import{bQ as I,z as w,r as h,dl as O,dm as Q,D as G,E as U,c8 as V,a as e,av as y,X as B,H,J as c,K as i,N as o,aa as J,ab as K,W as l,ac as N,aX as W,ad as X,ae as R,V as d,aW as v,Q as g,bw as q,I as b,aF as Y,aL as Z,aw as ee,ax as ae,aK as se,A as te,aM as ne}from"./index-49b05597.js";import{e as re}from"./expenses-023b50b5.js";import{c as le,d as oe}from"./index-a8ec9452.js";const ce=()=>{const m=I(),u=Number(m.id),f=w(),[E,_]=h.useState({date:!1}),{data:x,isLoading:F}=O("type=Assets&nature=Cash&page=1&per_page=1000"),{data:p,isLoading:C}=Q("page=1&per_page=1000"),[A,{isLoading:L}]=le(),{data:t,isLoading:P}=oe(u,{skip:!u,refetchOnMountOrArgChange:u,refetchOnFocus:!0}),S=(x==null?void 0:x.data)||[],k=(p==null?void 0:p.data)||[],n=G({resolver:U(re),defaultValues:{total:0,note:"",details:[{note:"",attachment:""}]}}),D=s=>{_(a=>({...a,[s]:!a[s]}))},{fields:M,append:T,remove:$}=V({control:n.control,name:"details"});h.useEffect(()=>{t!=null&&t.data&&n.reset({note:t==null?void 0:t.data.note,ledger_account_id:String(t==null?void 0:t.data.ledger_account_id),date:t==null?void 0:t.data.date,details:t==null?void 0:t.data.details.map(s=>({note:s.note||"",amount:s.amount,expense_category_id:String(s.expense_category_id)}))})},[t==null?void 0:t.data,n]);const j=n.watch("details").reduce((s,a)=>{const r=parseFloat(a.amount||"0");return s+(isNaN(r)?0:r)},0);h.useEffect(()=>{n.setValue("total",j)},[n,j]);async function z(s){try{await A({expenseId:Number(t==null?void 0:t.data.id),updatedExpense:{...s,ledger_account_id:Number(s.ledger_account_id),details:s.details.map(a=>({...a,expense_category_id:Number(a.expense_category_id),amount:Number(a.amount)}))}}).unwrap(),ee.success("Expense Updated successfully"),f("/billing/expenses")}catch(a){ae(a)}}return P?e.jsx(y,{}):e.jsx(B,{children:L?e.jsx(y,{}):e.jsx(H,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(z),className:"px-6 py-4",children:[e.jsx("div",{className:"grid grid-cols-2 gap-8 justify-between w-full",children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(c,{control:n.control,name:"date",render:({field:s})=>e.jsxs(i,{children:[e.jsx(o,{children:"Date"}),e.jsxs(J,{open:E.date,onOpenChange:()=>D("date"),children:[e.jsx(K,{asChild:!0,children:e.jsxs(l,{variant:"outline",className:`w-full justify-start text-left font-normal ${!s.value&&"text-muted-foreground"}`,children:[s.value?N(s.value,"PP"):"Pick a date",e.jsx(W,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(X,{className:"w-auto p-0 z-[200]",align:"start",children:e.jsx(R,{mode:"single",selected:s.value?new Date(s.value):void 0,onSelect:a=>{s.onChange(a?N(a,"yyyy-MM-dd"):"")},initialFocus:!0})})]}),e.jsx(d,{})]})}),e.jsx("div",{className:"w-full",children:e.jsx(v,{loading:F,data:S,displayField:"name",valueField:"id",form:n,name:"ledger_account_id",title:"Payform",className:"w-[375px]"})}),e.jsx("div",{className:"grid col-span-2",children:e.jsx(c,{control:n.control,name:"note",render:({field:s})=>e.jsxs(i,{children:[e.jsx(o,{children:"Note"}),e.jsx(g,{children:e.jsx(q,{placeholder:"Enter your note",...s})}),e.jsx(d,{})]})})})]})}),e.jsxs("div",{className:"mt-10 w-full",children:[M.map((s,a)=>e.jsxs("div",{className:"flex gap-4 items-start w-full my-4",children:[e.jsxs("div",{className:`${a===0?"-translate-y-0":"-translate-y-[8px]"}   w-full`,children:[a===0&&e.jsx(o,{children:"Expenses Category"})," ",e.jsx(v,{loading:C,data:k,displayField:"name",valueField:"id",form:n,name:`details.${a}.expense_category_id`,className:"w-[497px]"})]}),e.jsx(c,{control:n.control,name:`details.${a}.note`,render:({field:r})=>e.jsxs(i,{className:"w-full",children:[a===0&&e.jsx(o,{children:"Note"})," ",e.jsx(g,{children:e.jsx(b,{type:"text",placeholder:"Enter note",...r})}),e.jsx(d,{})]})}),e.jsx(c,{control:n.control,name:`details.${a}.amount`,render:({field:r})=>e.jsxs(i,{className:"w-full",children:[a===0&&e.jsx(o,{children:"Amount"})," ",e.jsx(g,{children:e.jsx(b,{type:"number",min:0,placeholder:"Enter amount",...r})}),e.jsx(d,{})]})}),a!==0&&e.jsx("div",{className:`flex items-center ${a===0?"mt-8":"mt-0"}`,children:e.jsx(l,{variant:"outline",className:"text-red-600",type:"button",onClick:()=>$(a),children:e.jsx(Y,{size:16})})})]},s.id)),e.jsx("div",{className:"w-full",children:e.jsxs(l,{variant:"outline",className:"border border-dashed border-gray-700 w-full",type:"button",onClick:()=>T({expense_category_id:"",note:"",amount:"",attachment:""}),children:[e.jsx(Z,{size:16})," ",e.jsx("span",{className:"ml-2",children:"Add Expense"})]})}),e.jsx("div",{className:"flex flex-row-reverse my-5",children:e.jsxs("p",{className:"text-[14px] font-semibold",children:["Total: ",j]})})]}),e.jsxs("div",{className:"flex flex-row-reverse items-center !mb-2 mt-8",children:[e.jsx(l,{variant:"default",type:"submit",className:"w-fit ml-2",children:"Save"}),e.jsx(l,{type:"button",variant:"primary",className:"w-fit",onClick:()=>f("/billing/expenses"),children:"Cancel"})]})]})})})},pe=()=>{const m=w();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(se,{title:"Edit Expense",description:"Manage job apply for you business"}),e.jsxs(l,{onClick:()=>m("/billing/expenses"),size:"sm",children:[e.jsx(te,{className:"mr-2 h-4 w-4"})," Back To All Expenses"]})]}),e.jsx(ne,{})]})}),e.jsx(ce,{})]})};export{pe as default};
>>>>>>>> main:dist/assets/index-dceae322.js
