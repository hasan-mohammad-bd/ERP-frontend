<<<<<<<< HEAD:dist/assets/index-ef46ad31.js
import{A as j,a as e,K as D,aO as y,aP as A,aQ as t,aR as f,aT as a,aS as L,R as r,ci as v,cj as R,ck as m,cl as G,Y as E,cm as Q,af as $}from"./index-2c05d2d2.js";const k=({tableData:c,reportFormate:n,summery:s})=>{const h=n&&n.startDate?j(new Date(n.startDate),"dd-MMM-yyyy"):null,x=n&&n.endDate?j(new Date(n.endDate),"dd-MMM-yyyy"):null;return e.jsxs(D,{className:"p-3 w-full mx-auto ",children:[n?e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:" text-center ",children:[e.jsx("h2",{children:n.company}),e.jsx("h3",{className:"text-xl",children:n.reportType}),e.jsxs("p",{className:"text-sm",children:[h," - ",x]})]})}):null,e.jsxs(D,{children:[" ",e.jsxs(y,{className:"",children:[e.jsx(A,{children:e.jsxs(t,{children:[e.jsx(f,{children:"#Account"}),e.jsx(f,{children:"Account Code"}),e.jsx(f,{className:"text-right",children:"Total"})]})}),e.jsxs(t,{children:[e.jsx(a,{children:"Product Sales"}),e.jsx(a,{}),e.jsx(a,{className:"text-right",children:s==null?void 0:s.product_sale.toLocaleString("en-IN")})]}),e.jsxs(t,{children:[e.jsx(a,{children:"COGS"}),e.jsx(a,{}),e.jsx(a,{className:"text-right",children:s==null?void 0:s.cogs.toLocaleString("en-IN")})]}),e.jsxs(t,{className:"bg-gray-100",children:[e.jsx(a,{className:"font-bold",children:"Gross Profit"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold",children:s==null?void 0:s.gros_profit.toLocaleString("en-IN")})]}),c&&c.map(d=>e.jsxs(L,{className:"",children:[e.jsx(t,{className:"",children:e.jsx(a,{className:"font-bold",children:d.name})}),d.childs_group.length>0&&d.childs_group.map(l=>e.jsxs(r.Fragment,{children:[e.jsxs(t,{children:[e.jsx(a,{style:{paddingLeft:"15px"},children:l.name}),e.jsx(a,{children:l.code})]}),l.ledgers.length>0&&l.ledgers.map(o=>e.jsxs(t,{children:[e.jsx(a,{style:{paddingLeft:"30px"},children:o.name}),e.jsx(a,{children:o.code}),e.jsx(a,{className:"text-right",children:o.balance.toLocaleString("en-IN")})]},o.name)),e.jsxs(t,{className:"bg-gray-100 !mb-4",children:[e.jsxs(a,{style:{paddingLeft:"15px"},className:"font-semibold",colSpan:2,children:["Total ",l.name]}),e.jsx(a,{className:"font-bold text-end",children:l.balance.toLocaleString("en-IN")})]}),e.jsx(t,{children:e.jsx(a,{})}),e.jsx(t,{})]},l.name)),e.jsxs(t,{className:"bg-gray-100 !mb-4",children:[e.jsxs(a,{className:"font-bold my-3",colSpan:2,children:["Total ",d.name]}),e.jsx(a,{className:"font-bold text-end",children:d.balance.toLocaleString("en-IN")})]}),e.jsx(t,{children:e.jsx(a,{})})]},d.name)),e.jsxs(t,{className:"",children:[e.jsx(a,{className:"font-bold",children:"Depreciation"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold ",children:s==null?void 0:s.deprecetaion.toLocaleString("en-IN")})]}),e.jsxs(t,{className:"bg-gray-100",children:[e.jsx(a,{className:"font-bold",children:"Profit before tax"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold ",children:s==null?void 0:s.profit_befor_tax.toLocaleString("en-IN")})]}),e.jsxs(t,{className:"",children:[e.jsx(a,{className:"",children:"Tax"}),e.jsx(a,{}),e.jsx(a,{className:"text-right",children:s==null?void 0:s.tax})]}),e.jsxs(t,{className:"bg-gray-100",children:[e.jsx(a,{className:"font-bold",children:"Profit"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold ",children:s==null?void 0:s.profit.toLocaleString("en-IN")})]}),e.jsx(L,{}),e.jsx(v,{})]})]})]})},H=()=>{const[c,n]=r.useState(),[s,h]=r.useState(),[x,d]=r.useState(new Date),[l,o]=r.useState(new Date),b=j(x||new Date,"yyyy-MM-dd"),p=j(l||new Date,"yyyy-MM-dd"),{data:i,isLoading:T}=R(`start_date=${b||""}&end_date=${p||""}&ledger_account_id=${s!=null&&s.id?s==null?void 0:s.id:""}&project_id=${c!=null&&c.id?c==null?void 0:c.id:""}`),S=i==null?void 0:i.data.slice().reverse(),I=i==null?void 0:i.summery,{data:g,isLoading:_}=m("page=1&per_page=1000"),w=(g==null?void 0:g.data)||[],{data:N,isLoading:M}=G("page=1&per_page=1000"),P=(N==null?void 0:N.data)||[];return T?e.jsx(E,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col mb-3",children:[e.jsx(Q,{setStartDate:d,setEndDate:o,filterProp:{account:s,setAccount:h,project:c,setProject:n,arrayItems:w,loadingData:_,arrayItemsTwo:P,loadingDataTwo:M}}),e.jsxs("div",{className:"flex-1 space-y-4 w-2/3 mx-auto",children:[e.jsx($,{}),S?e.jsx(k,{tableData:S,summery:I,reportFormate:{startDate:x,endDate:l,company:"Akaar IT",reportType:"Income Statement"}}):null]})]})})};export{H as default};
========
import{A as j,a as e,K as D,aO as y,aP as A,aQ as t,aR as f,aT as a,aS as L,R as r,ci as v,cj as R,ck as m,cl as G,Y as E,cm as Q,af as $}from"./index-3e1b8bd0.js";const k=({tableData:c,reportFormate:n,summery:s})=>{const h=n&&n.startDate?j(new Date(n.startDate),"dd-MMM-yyyy"):null,x=n&&n.endDate?j(new Date(n.endDate),"dd-MMM-yyyy"):null;return e.jsxs(D,{className:"p-3 w-full mx-auto ",children:[n?e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:" text-center ",children:[e.jsx("h2",{children:n.company}),e.jsx("h3",{className:"text-xl",children:n.reportType}),e.jsxs("p",{className:"text-sm",children:[h," - ",x]})]})}):null,e.jsxs(D,{children:[" ",e.jsxs(y,{className:"",children:[e.jsx(A,{children:e.jsxs(t,{children:[e.jsx(f,{children:"#Account"}),e.jsx(f,{children:"Account Code"}),e.jsx(f,{className:"text-right",children:"Total"})]})}),e.jsxs(t,{children:[e.jsx(a,{children:"Product Sales"}),e.jsx(a,{}),e.jsx(a,{className:"text-right",children:s==null?void 0:s.product_sale.toLocaleString("en-IN")})]}),e.jsxs(t,{children:[e.jsx(a,{children:"COGS"}),e.jsx(a,{}),e.jsx(a,{className:"text-right",children:s==null?void 0:s.cogs.toLocaleString("en-IN")})]}),e.jsxs(t,{className:"bg-gray-100",children:[e.jsx(a,{className:"font-bold",children:"Gross Profit"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold",children:s==null?void 0:s.gros_profit.toLocaleString("en-IN")})]}),c&&c.map(d=>e.jsxs(L,{className:"",children:[e.jsx(t,{className:"",children:e.jsx(a,{className:"font-bold",children:d.name})}),d.childs_group.length>0&&d.childs_group.map(l=>e.jsxs(r.Fragment,{children:[e.jsxs(t,{children:[e.jsx(a,{style:{paddingLeft:"15px"},children:l.name}),e.jsx(a,{children:l.code})]}),l.ledgers.length>0&&l.ledgers.map(o=>e.jsxs(t,{children:[e.jsx(a,{style:{paddingLeft:"30px"},children:o.name}),e.jsx(a,{children:o.code}),e.jsx(a,{className:"text-right",children:o.balance.toLocaleString("en-IN")})]},o.name)),e.jsxs(t,{className:"bg-gray-100 !mb-4",children:[e.jsxs(a,{style:{paddingLeft:"15px"},className:"font-semibold",colSpan:2,children:["Total ",l.name]}),e.jsx(a,{className:"font-bold text-end",children:l.balance.toLocaleString("en-IN")})]}),e.jsx(t,{children:e.jsx(a,{})}),e.jsx(t,{})]},l.name)),e.jsxs(t,{className:"bg-gray-100 !mb-4",children:[e.jsxs(a,{className:"font-bold my-3",colSpan:2,children:["Total ",d.name]}),e.jsx(a,{className:"font-bold text-end",children:d.balance.toLocaleString("en-IN")})]}),e.jsx(t,{children:e.jsx(a,{})})]},d.name)),e.jsxs(t,{className:"",children:[e.jsx(a,{className:"font-bold",children:"Depreciation"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold ",children:s==null?void 0:s.deprecetaion.toLocaleString("en-IN")})]}),e.jsxs(t,{className:"bg-gray-100",children:[e.jsx(a,{className:"font-bold",children:"Profit before tax"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold ",children:s==null?void 0:s.profit_befor_tax.toLocaleString("en-IN")})]}),e.jsxs(t,{className:"",children:[e.jsx(a,{className:"",children:"Tax"}),e.jsx(a,{}),e.jsx(a,{className:"text-right",children:s==null?void 0:s.tax})]}),e.jsxs(t,{className:"bg-gray-100",children:[e.jsx(a,{className:"font-bold",children:"Profit"}),e.jsx(a,{}),e.jsx(a,{className:"text-right font-bold ",children:s==null?void 0:s.profit.toLocaleString("en-IN")})]}),e.jsx(L,{}),e.jsx(v,{})]})]})]})},H=()=>{const[c,n]=r.useState(),[s,h]=r.useState(),[x,d]=r.useState(new Date),[l,o]=r.useState(new Date),b=j(x||new Date,"yyyy-MM-dd"),p=j(l||new Date,"yyyy-MM-dd"),{data:i,isLoading:T}=R(`start_date=${b||""}&end_date=${p||""}&ledger_account_id=${s!=null&&s.id?s==null?void 0:s.id:""}&project_id=${c!=null&&c.id?c==null?void 0:c.id:""}`),S=i==null?void 0:i.data.slice().reverse(),I=i==null?void 0:i.summery,{data:g,isLoading:_}=m("page=1&per_page=1000"),w=(g==null?void 0:g.data)||[],{data:N,isLoading:M}=G("page=1&per_page=1000"),P=(N==null?void 0:N.data)||[];return T?e.jsx(E,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col mb-3",children:[e.jsx(Q,{setStartDate:d,setEndDate:o,filterProp:{account:s,setAccount:h,project:c,setProject:n,arrayItems:w,loadingData:_,arrayItemsTwo:P,loadingDataTwo:M}}),e.jsxs("div",{className:"flex-1 space-y-4 w-2/3 mx-auto",children:[e.jsx($,{}),S?e.jsx(k,{tableData:S,summery:I,reportFormate:{startDate:x,endDate:l,company:"Akaar IT",reportType:"Income Statement"}}):null]})]})})};export{H as default};
>>>>>>>> main:dist/assets/index-ba6fe09c.js
