<<<<<<<< HEAD:dist/assets/index-7934a490.js
import{cq as se,cu as xe,cv as je,R as Q,z as ne,B as le,cw as ge,a as e,am as F,F as re,E as N,G as A,H as C,aS as z,J as L,aT as U,aU as R,aV as $,aX as M,K as E,I as P,M as w,an as _,ao as k,cx as pe,a6 as me,a7 as ye,b as J,bW as be,a9 as fe,bX as Ne,bY as Ae,bZ as Ce,b_ as Le,b$ as we,c0 as Se,c1 as Te,r as T,cy as Ge,b1 as q,b4 as j,ar as X,as as Y,at as K,aq as G,av as W,au as Z,aw as v,L as ce,o as de,ay as V,ax as D,N as Ee,a$ as Me,b0 as _e,b2 as B,b3 as Oe,aB as Fe,t as ee,aC as Ie,ab as qe,ac as Pe,ad as ke,ae as Ve}from"./index-4b237266.js";import{S as ze}from"./switch-00842eec.js";const Ue=se.injectEndpoints({endpoints:r=>({getLedgerGroups:r.query({query:()=>"ledger-groups?tree=1",providesTags:["ledger-groups-tree"]}),getLedgerGroupsArray:r.query({query:()=>"ledger-groups",providesTags:["ledger-groups-array"]}),createLedgerGroup:r.mutation({query:s=>({url:"ledger-groups",method:"POST",body:s}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]}),removeLedgerGroup:r.mutation({query:s=>({url:`ledger-groups/${s}`,method:"DELETE"}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]}),updateLedgerGroup:r.mutation({query:({ledgerGroupId:s,updatedLedgerGroup:t})=>({url:`ledger-groups/${s}`,method:"PUT",body:t}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]})}),overrideExisting:!1}),{useGetLedgerGroupsQuery:Re,useGetLedgerGroupsArrayQuery:oe,useCreateLedgerGroupMutation:$e,useRemoveLedgerGroupMutation:Be,useUpdateLedgerGroupMutation:He}=Ue,Qe=se.injectEndpoints({endpoints:r=>({getEnum:r.query({query:()=>"catalogs/enum",providesTags:["catalogs/enum"]})}),overrideExisting:!1}),{useGetEnumQuery:Je}=Qe;function ae({modalClose:r,rowData:s}){const[t,{isLoading:a}]=xe(),[b,{isLoading:m}]=je(),[S,i]=Q.useState(s!=null&&s.is_sub_type?1:0),{data:h,isLoading:O}=oe(),{data:x,isLoading:y}=Je(),I=(x==null?void 0:x.account_nature)||[],c=(h==null?void 0:h.data)||[],u=ne({resolver:le(ge),defaultValues:{name:(s==null?void 0:s.name)||"",parent_id:s==null?void 0:s.parent_id,is_sub_type:s!=null&&s.is_sub_type?1:0,sub_type:s!=null&&s.sub_type&&["None","Employee","Customer","Supplier","Agent"].includes(s.sub_type)?s.sub_type:"None",nature:(s==null?void 0:s.nature)||"",code:(s==null?void 0:s.code)||""}});async function g(d){const p=d.sub_type&&["None","Employee","Customer","Supplier","Agent"].includes(d.sub_type)?d.sub_type:"None";try{s?(await b({ledgerAccountId:s==null?void 0:s.id,updatedLedgerAccount:{...s,...d,sub_type:p}}).unwrap(),_.success("Update ledger account successfully"),r()):(await t(d).unwrap(),_.success("Add ledger account successfully"),r())}catch(f){_.error("error.data.message"),k(f),console.log(f,"dsadasd")}}return e.jsx(e.Fragment,{children:a||m?e.jsx("div",{className:"h-56",children:e.jsx(F,{})}):e.jsx(re,{...u,children:e.jsxs("form",{onSubmit:u.handleSubmit(g),className:"w-full space-y-3",children:[e.jsxs(e.Fragment,{children:[e.jsx(N,{control:u.control,name:"parent_id",render:({field:d})=>{var p,f;return e.jsxs(A,{children:[e.jsx(C,{children:"Parent Group"}),e.jsxs(z,{onValueChange:d.onChange,defaultValue:(p=s==null?void 0:s.parent_id)!=null&&p.toString()?(f=s==null?void 0:s.parent_id)==null?void 0:f.toString():void 0,disabled:!!(s!=null&&s.id),children:[e.jsx(L,{children:e.jsx(U,{children:e.jsx(R,{placeholder:"Select Parent"})})}),e.jsx($,{children:O?e.jsx(F,{}):c==null?void 0:c.filter(o=>(o==null?void 0:o.name)!=="Assets"&&(o==null?void 0:o.name)!=="Liabilities"&&(o==null?void 0:o.name)!=="Equity"&&(o==null?void 0:o.name)!=="Expenses"&&(o==null?void 0:o.name)!=="Income").map(o=>e.jsx(M,{value:String(o.id),children:o.name},o.id))})]}),e.jsx(E,{})]})}}),e.jsx(N,{control:u.control,name:"name",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Account Name"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter ledger account name",...d})}),e.jsx(E,{})]})}),e.jsx(N,{control:u.control,name:"code",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Code"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter code",...d,value:d.value||""})}),e.jsx(E,{})]})})]}),e.jsx(N,{control:u.control,name:"nature",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Default Account Type"}),e.jsxs(z,{onValueChange:d.onChange,defaultValue:(s==null?void 0:s.nature)||"",children:[e.jsx(L,{children:e.jsx(U,{children:e.jsx(R,{placeholder:"Select Parent"})})}),e.jsx($,{children:y?e.jsx(F,{}):I.map((p,f)=>e.jsx(M,{value:p.toString(),children:p.toString()},f))})]}),e.jsx(E,{})]})}),e.jsx(N,{control:u.control,name:"is_sub_type",render:({field:d})=>e.jsxs(A,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(C,{children:"Is Sub Type"})}),e.jsx(L,{children:e.jsx(ze,{checked:d.value===1,onCheckedChange:p=>{d.onChange(p?1:0),i(p?1:0)}})})]})}),S===1&&e.jsx(N,{control:u.control,name:"sub_type",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Sub Type"}),e.jsxs(z,{onValueChange:d.onChange,defaultValue:(s==null?void 0:s.sub_type)||"None",children:[e.jsx(L,{children:e.jsx(U,{children:e.jsx(R,{placeholder:""})})}),e.jsxs($,{children:[e.jsx(M,{value:"None",children:"None"}),e.jsx(M,{value:"Employee",children:"Employee"}),e.jsx(M,{value:"Customer",children:"Customer"}),e.jsx(M,{value:"Supplier",children:"Supplier"}),e.jsx(M,{value:"Agent",children:"Agent"})]})]}),e.jsx(E,{})]})}),e.jsx("div",{children:e.jsx(w,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update Account":"Add Account"})})]})})})}function te({modalClose:r,rowData:s}){const[t,a]=Q.useState(!1),[b,{isLoading:m}]=$e(),[S,{isLoading:i}]=He(),{data:h,isLoading:O}=oe(),x=(h==null?void 0:h.data)||[],y=ne({resolver:le(pe),defaultValues:{parent_id:s==null?void 0:s.id,name:(s==null?void 0:s.name)||"",code:(s==null?void 0:s.code)||""}});async function I(c){try{s?(await S({ledgerGroupId:s.id,updatedLedgerGroup:{...s,...c}}).unwrap(),_.success("Add ledger group successfully"),r()):(await b(c).unwrap(),_.success("Add ledger group successfully"),r())}catch(u){k(u),console.log(u)}}return e.jsx(e.Fragment,{children:m||i?e.jsx("div",{className:"h-56",children:e.jsx(F,{})}):e.jsx(re,{...y,children:e.jsxs("form",{onSubmit:y.handleSubmit(I),className:"w-full space-y-3",children:[e.jsxs(e.Fragment,{children:[e.jsx(N,{control:y.control,name:"parent_id",render:({field:c})=>{var u;return e.jsxs(A,{children:[e.jsx(C,{children:"Parent Group"}),e.jsxs(me,{open:t,onOpenChange:a,modal:!0,children:[e.jsx(ye,{asChild:!0,children:e.jsx(L,{children:e.jsxs(w,{disabled:!!(s!=null&&s.id),variant:"outline",role:"combobox",className:J("w-full justify-between",!c.value&&"text-muted-foreground"),children:[c.value?(u=x.find(g=>g.id===Number(c.value)))==null?void 0:u.name:"Select Parent",e.jsx(be,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),e.jsx(fe,{className:"w-[460px] p-0",children:e.jsxs(Ne,{children:[e.jsx(Ae,{placeholder:"Search parent group..."}),e.jsxs(Ce,{children:[e.jsx(Le,{children:"No parent group found."}),e.jsx(we,{children:O?e.jsx(F,{}):x.map(g=>e.jsxs(Se,{onSelect:()=>{c.onChange(String(g.id)),a(!1)},children:[e.jsx(Te,{className:J("mr-2 h-4 w-4",Number(c.value)===g.id?"opacity-100":"opacity-0")}),g.name]},g.id))})]})]})})]}),e.jsx(E,{})]})}}),e.jsx(N,{control:y.control,name:"name",render:({field:c})=>e.jsxs(A,{children:[e.jsx(C,{children:"Account Name"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter name",...c})}),e.jsx(E,{})]})}),e.jsx(N,{control:y.control,name:"code",render:({field:c})=>e.jsxs(A,{children:[e.jsx(C,{children:"Code"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter code",...c,value:c.value||""})}),e.jsx(E,{})]})})]}),e.jsx("div",{children:e.jsx(w,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update Group":"Add Group"})})]})})})}const ie=({group:r,coaType:s,depth:t=0})=>{const a=Array(t).fill("        ").join(""),[b,m]=T.useState(null),[S,i]=T.useState(null),[h,O]=T.useState(null),[x,y]=T.useState(null),[I,c]=T.useState(null),[u,g]=T.useState(null),[d,{isLoading:p}]=Ge(),[f,{isLoading:o}]=Be(),ue=async n=>{try{await d(n).unwrap(),_.success("Account deleted successfully"),c(null)}catch(l){k(l),console.log(l)}},he=async n=>{try{await f(n).unwrap(),_.success("Account deleted successfully"),g(null)}catch(l){k(l),console.log(l)}};return r.childs_group.map(n=>e.jsxs(Q.Fragment,{children:[e.jsxs(q,{children:[e.jsx(j,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:e.jsx(X,{children:e.jsxs(Y,{delayDuration:100,children:[e.jsx(K,{asChild:!0,children:e.jsxs("span",{children:[a,n.name]})}),e.jsx(G,{roles:["ledger-groups.edit","ledger-groups.delete"],children:e.jsx(W,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(G,{roles:["ledger-groups.edit"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(n.id),y(n)},children:e.jsx(Z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(G,{roles:["ledger-groups.delete"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{g(n.id),y(n)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})})]})})})]})})}),e.jsx(j,{className:"py-2.5",children:n.code}),e.jsx(j,{className:"py-2.5",children:"Group"})]}),n.childs_group&&n.childs_group.length>0&&e.jsx(ie,{group:n,coaType:s,depth:t+1}),n.ledgers&&n.ledgers.length>0&&n.ledgers.map(l=>e.jsxs(q,{children:[e.jsx(j,{className:"py-0 col-span-2 w-2/3",children:e.jsx("div",{className:"py-2.5 col-span-2 w-2/3 font-medium",children:e.jsx(X,{children:e.jsxs(Y,{delayDuration:100,children:[e.jsx(K,{asChild:!0,children:e.jsxs(ce,{className:de({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/reports/detailed-general-ledger/${l.id}`,children:[a,l.name]})}),e.jsx(G,{roles:["ledger-accounts.edit","ledger-accounts.delete"],children:e.jsx(W,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(G,{roles:["ledger-accounts.edit"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{m(l.id),O(l)},children:e.jsx(Z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(G,{roles:["ledger-accounts.delete"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(l.id),O(l)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})})]})})})]})})})}),e.jsx(j,{className:"py-2.5",children:l.code}),e.jsx(j,{className:"py-2.5",children:"Account"}),e.jsxs(j,{className:"py-2.5",children:[(l==null?void 0:l.id)===b&&e.jsx(V,{title:"Edit Account",isOpen:(l==null?void 0:l.id)===b,toggleModal:()=>m(null),children:e.jsx(ae,{rowData:h,modalClose:()=>m(null)})}),e.jsx(D,{title:"Are you sure?",description:"This action cannot be undone.",name:h==null?void 0:h.name,isOpen:I===(l==null?void 0:l.id),onClose:()=>c(null),onConfirm:()=>ue(h==null?void 0:h.id),loading:p})]})]},l.id)),(n==null?void 0:n.id)===S&&e.jsx(V,{title:"Edit Group",isOpen:(n==null?void 0:n.id)===S,toggleModal:()=>i(null),children:e.jsx(te,{rowData:x,modalClose:()=>i(null)})}),e.jsx(D,{title:"Are you sure?",description:"This action cannot be undone.",name:x==null?void 0:x.name,isOpen:(n==null?void 0:n.id)===u,onClose:()=>g(null),onConfirm:()=>he(x==null?void 0:x.id),loading:o})]},n.id))},Xe=({data:r,coaType:s})=>{const t=r.find(a=>a.name===s);return t?e.jsx(Ee,{className:"mt-4",children:e.jsxs(Me,{children:[e.jsx(_e,{children:e.jsxs(q,{children:[e.jsx(B,{className:"py-2.5 h-8 col-span-2 w-2/3",children:"Name"}),e.jsx(B,{className:"py-2.5 h-8 w-[100px]",children:"Code"}),e.jsx(B,{className:"py-2.5 h-8",children:"Type"})]})}),e.jsxs(Oe,{children:[e.jsxs(q,{children:[e.jsx(j,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:t.name}),e.jsx(j,{className:"py-2.5",children:t.code}),e.jsx(j,{className:"py-2.5",children:"Group"})]}),e.jsx(ie,{group:t,coaType:s,depth:1}),t.ledgers.map(a=>e.jsxs(q,{children:[e.jsx(j,{className:"py-2.5 col-span-2 w-2/3",children:e.jsxs(ce,{className:de({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/detailed-general-ledger/${a.id}`,children:["    ",a.name]})}),e.jsx(j,{className:"py-2.5",children:a.code}),e.jsx(j,{className:"py-2.5",children:"Account"})]},a.id))]})]})}):null},H=[{type:"Assets",title:"Assets",description:"Manage assets for your business"},{type:"Liabilities",title:"Liabilities",description:"Manage liabilities for your business"},{type:"Income",title:"Income",description:"Manage incomes for your business"},{type:"Expenses",title:"Expenses",description:"Manage expenses for your business"},{type:"Equity",title:"Equity",description:"Manage expenses for your business"}],We=()=>{const{data:r,isLoading:s}=Re(),[t,a]=T.useState(!1),[b,m]=T.useState(!1),S=(r==null?void 0:r.data)||[];return s?e.jsx(F,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Fe,{title:"Chart Of Account",description:"Manage Chart of account for you business"}),e.jsxs("div",{className:"flex space-x-2 items-center",children:[e.jsx(G,{roles:["ledger-groups.create"],children:e.jsxs(w,{onClick:()=>a(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Group"]})}),e.jsx(G,{roles:["ledger-accounts.create"],children:e.jsxs(w,{onClick:()=>m(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Account"]})})]})]}),e.jsx(Ie,{}),e.jsxs(qe,{defaultValue:H[0].type,className:"w-full mt-3",children:[e.jsx(Pe,{className:"w-fit",children:H.map(i=>e.jsx(ke,{value:i.type,children:i.title},i.type))}),H.map(i=>e.jsx(Ve,{value:i.type,children:e.jsx(Xe,{title:i.title,coaType:i.type,description:i.description,data:S})},i.type))]}),t&&e.jsx(V,{title:"Add Group",isOpen:t,toggleModal:()=>a(!1),children:e.jsx(te,{modalClose:()=>a(!1)})}),b&&e.jsx(V,{title:"Add Account",isOpen:b,toggleModal:()=>m(!1),children:e.jsx(ae,{modalClose:()=>m(!1)})})]})};export{We as default};
========
import{cq as se,cu as xe,cv as je,R as Q,z as ne,B as le,cw as ge,a as e,am as F,F as re,E as N,G as A,H as C,aS as z,J as L,aT as U,aU as R,aV as $,aX as M,K as E,I as P,M as w,an as _,ao as k,cx as pe,a6 as me,a7 as ye,b as J,bW as be,a9 as fe,bX as Ne,bY as Ae,bZ as Ce,b_ as Le,b$ as we,c0 as Se,c1 as Te,r as T,cy as Ge,b1 as q,b4 as j,ar as X,as as Y,at as K,aq as G,av as W,au as Z,aw as v,L as ce,o as de,ay as V,ax as D,N as Ee,a$ as Me,b0 as _e,b2 as B,b3 as Oe,aB as Fe,t as ee,aC as Ie,ab as qe,ac as Pe,ad as ke,ae as Ve}from"./index-945ff9a6.js";import{S as ze}from"./switch-068af577.js";const Ue=se.injectEndpoints({endpoints:r=>({getLedgerGroups:r.query({query:()=>"ledger-groups?tree=1",providesTags:["ledger-groups-tree"]}),getLedgerGroupsArray:r.query({query:()=>"ledger-groups",providesTags:["ledger-groups-array"]}),createLedgerGroup:r.mutation({query:s=>({url:"ledger-groups",method:"POST",body:s}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]}),removeLedgerGroup:r.mutation({query:s=>({url:`ledger-groups/${s}`,method:"DELETE"}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]}),updateLedgerGroup:r.mutation({query:({ledgerGroupId:s,updatedLedgerGroup:t})=>({url:`ledger-groups/${s}`,method:"PUT",body:t}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]})}),overrideExisting:!1}),{useGetLedgerGroupsQuery:Re,useGetLedgerGroupsArrayQuery:oe,useCreateLedgerGroupMutation:$e,useRemoveLedgerGroupMutation:Be,useUpdateLedgerGroupMutation:He}=Ue,Qe=se.injectEndpoints({endpoints:r=>({getEnum:r.query({query:()=>"catalogs/enum",providesTags:["catalogs/enum"]})}),overrideExisting:!1}),{useGetEnumQuery:Je}=Qe;function ae({modalClose:r,rowData:s}){const[t,{isLoading:a}]=xe(),[b,{isLoading:m}]=je(),[S,i]=Q.useState(s!=null&&s.is_sub_type?1:0),{data:h,isLoading:O}=oe(),{data:x,isLoading:y}=Je(),I=(x==null?void 0:x.account_nature)||[],c=(h==null?void 0:h.data)||[],u=ne({resolver:le(ge),defaultValues:{name:(s==null?void 0:s.name)||"",parent_id:s==null?void 0:s.parent_id,is_sub_type:s!=null&&s.is_sub_type?1:0,sub_type:s!=null&&s.sub_type&&["None","Employee","Customer","Supplier","Agent"].includes(s.sub_type)?s.sub_type:"None",nature:(s==null?void 0:s.nature)||"",code:(s==null?void 0:s.code)||""}});async function g(d){const p=d.sub_type&&["None","Employee","Customer","Supplier","Agent"].includes(d.sub_type)?d.sub_type:"None";try{s?(await b({ledgerAccountId:s==null?void 0:s.id,updatedLedgerAccount:{...s,...d,sub_type:p}}).unwrap(),_.success("Update ledger account successfully"),r()):(await t(d).unwrap(),_.success("Add ledger account successfully"),r())}catch(f){_.error("error.data.message"),k(f),console.log(f,"dsadasd")}}return e.jsx(e.Fragment,{children:a||m?e.jsx("div",{className:"h-56",children:e.jsx(F,{})}):e.jsx(re,{...u,children:e.jsxs("form",{onSubmit:u.handleSubmit(g),className:"w-full space-y-3",children:[e.jsxs(e.Fragment,{children:[e.jsx(N,{control:u.control,name:"parent_id",render:({field:d})=>{var p,f;return e.jsxs(A,{children:[e.jsx(C,{children:"Parent Group"}),e.jsxs(z,{onValueChange:d.onChange,defaultValue:(p=s==null?void 0:s.parent_id)!=null&&p.toString()?(f=s==null?void 0:s.parent_id)==null?void 0:f.toString():void 0,disabled:!!(s!=null&&s.id),children:[e.jsx(L,{children:e.jsx(U,{children:e.jsx(R,{placeholder:"Select Parent"})})}),e.jsx($,{children:O?e.jsx(F,{}):c==null?void 0:c.filter(o=>(o==null?void 0:o.name)!=="Assets"&&(o==null?void 0:o.name)!=="Liabilities"&&(o==null?void 0:o.name)!=="Equity"&&(o==null?void 0:o.name)!=="Expenses"&&(o==null?void 0:o.name)!=="Income").map(o=>e.jsx(M,{value:String(o.id),children:o.name},o.id))})]}),e.jsx(E,{})]})}}),e.jsx(N,{control:u.control,name:"name",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Account Name"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter ledger account name",...d})}),e.jsx(E,{})]})}),e.jsx(N,{control:u.control,name:"code",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Code"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter code",...d,value:d.value||""})}),e.jsx(E,{})]})})]}),e.jsx(N,{control:u.control,name:"nature",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Default Account Type"}),e.jsxs(z,{onValueChange:d.onChange,defaultValue:(s==null?void 0:s.nature)||"",children:[e.jsx(L,{children:e.jsx(U,{children:e.jsx(R,{placeholder:"Select Parent"})})}),e.jsx($,{children:y?e.jsx(F,{}):I.map((p,f)=>e.jsx(M,{value:p.toString(),children:p.toString()},f))})]}),e.jsx(E,{})]})}),e.jsx(N,{control:u.control,name:"is_sub_type",render:({field:d})=>e.jsxs(A,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(C,{children:"Is Sub Type"})}),e.jsx(L,{children:e.jsx(ze,{checked:d.value===1,onCheckedChange:p=>{d.onChange(p?1:0),i(p?1:0)}})})]})}),S===1&&e.jsx(N,{control:u.control,name:"sub_type",render:({field:d})=>e.jsxs(A,{children:[e.jsx(C,{children:"Sub Type"}),e.jsxs(z,{onValueChange:d.onChange,defaultValue:(s==null?void 0:s.sub_type)||"None",children:[e.jsx(L,{children:e.jsx(U,{children:e.jsx(R,{placeholder:""})})}),e.jsxs($,{children:[e.jsx(M,{value:"None",children:"None"}),e.jsx(M,{value:"Employee",children:"Employee"}),e.jsx(M,{value:"Customer",children:"Customer"}),e.jsx(M,{value:"Supplier",children:"Supplier"}),e.jsx(M,{value:"Agent",children:"Agent"})]})]}),e.jsx(E,{})]})}),e.jsx("div",{children:e.jsx(w,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update Account":"Add Account"})})]})})})}function te({modalClose:r,rowData:s}){const[t,a]=Q.useState(!1),[b,{isLoading:m}]=$e(),[S,{isLoading:i}]=He(),{data:h,isLoading:O}=oe(),x=(h==null?void 0:h.data)||[],y=ne({resolver:le(pe),defaultValues:{parent_id:s==null?void 0:s.id,name:(s==null?void 0:s.name)||"",code:(s==null?void 0:s.code)||""}});async function I(c){try{s?(await S({ledgerGroupId:s.id,updatedLedgerGroup:{...s,...c}}).unwrap(),_.success("Add ledger group successfully"),r()):(await b(c).unwrap(),_.success("Add ledger group successfully"),r())}catch(u){k(u),console.log(u)}}return e.jsx(e.Fragment,{children:m||i?e.jsx("div",{className:"h-56",children:e.jsx(F,{})}):e.jsx(re,{...y,children:e.jsxs("form",{onSubmit:y.handleSubmit(I),className:"w-full space-y-3",children:[e.jsxs(e.Fragment,{children:[e.jsx(N,{control:y.control,name:"parent_id",render:({field:c})=>{var u;return e.jsxs(A,{children:[e.jsx(C,{children:"Parent Group"}),e.jsxs(me,{open:t,onOpenChange:a,modal:!0,children:[e.jsx(ye,{asChild:!0,children:e.jsx(L,{children:e.jsxs(w,{disabled:!!(s!=null&&s.id),variant:"outline",role:"combobox",className:J("w-full justify-between",!c.value&&"text-muted-foreground"),children:[c.value?(u=x.find(g=>g.id===Number(c.value)))==null?void 0:u.name:"Select Parent",e.jsx(be,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),e.jsx(fe,{className:"w-[460px] p-0",children:e.jsxs(Ne,{children:[e.jsx(Ae,{placeholder:"Search parent group..."}),e.jsxs(Ce,{children:[e.jsx(Le,{children:"No parent group found."}),e.jsx(we,{children:O?e.jsx(F,{}):x.map(g=>e.jsxs(Se,{onSelect:()=>{c.onChange(String(g.id)),a(!1)},children:[e.jsx(Te,{className:J("mr-2 h-4 w-4",Number(c.value)===g.id?"opacity-100":"opacity-0")}),g.name]},g.id))})]})]})})]}),e.jsx(E,{})]})}}),e.jsx(N,{control:y.control,name:"name",render:({field:c})=>e.jsxs(A,{children:[e.jsx(C,{children:"Account Name"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter name",...c})}),e.jsx(E,{})]})}),e.jsx(N,{control:y.control,name:"code",render:({field:c})=>e.jsxs(A,{children:[e.jsx(C,{children:"Code"}),e.jsx(L,{children:e.jsx(P,{placeholder:"Enter code",...c,value:c.value||""})}),e.jsx(E,{})]})})]}),e.jsx("div",{children:e.jsx(w,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update Group":"Add Group"})})]})})})}const ie=({group:r,coaType:s,depth:t=0})=>{const a=Array(t).fill("        ").join(""),[b,m]=T.useState(null),[S,i]=T.useState(null),[h,O]=T.useState(null),[x,y]=T.useState(null),[I,c]=T.useState(null),[u,g]=T.useState(null),[d,{isLoading:p}]=Ge(),[f,{isLoading:o}]=Be(),ue=async n=>{try{await d(n).unwrap(),_.success("Account deleted successfully"),c(null)}catch(l){k(l),console.log(l)}},he=async n=>{try{await f(n).unwrap(),_.success("Account deleted successfully"),g(null)}catch(l){k(l),console.log(l)}};return r.childs_group.map(n=>e.jsxs(Q.Fragment,{children:[e.jsxs(q,{children:[e.jsx(j,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:e.jsx(X,{children:e.jsxs(Y,{delayDuration:100,children:[e.jsx(K,{asChild:!0,children:e.jsxs("span",{children:[a,n.name]})}),e.jsx(G,{roles:["ledger-groups.edit","ledger-groups.delete"],children:e.jsx(W,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(G,{roles:["ledger-groups.edit"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(n.id),y(n)},children:e.jsx(Z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(G,{roles:["ledger-groups.delete"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{g(n.id),y(n)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})})]})})})]})})}),e.jsx(j,{className:"py-2.5",children:n.code}),e.jsx(j,{className:"py-2.5",children:"Group"})]}),n.childs_group&&n.childs_group.length>0&&e.jsx(ie,{group:n,coaType:s,depth:t+1}),n.ledgers&&n.ledgers.length>0&&n.ledgers.map(l=>e.jsxs(q,{children:[e.jsx(j,{className:"py-0 col-span-2 w-2/3",children:e.jsx("div",{className:"py-2.5 col-span-2 w-2/3 font-medium",children:e.jsx(X,{children:e.jsxs(Y,{delayDuration:100,children:[e.jsx(K,{asChild:!0,children:e.jsxs(ce,{className:de({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/reports/detailed-general-ledger/${l.id}`,children:[a,l.name]})}),e.jsx(G,{roles:["ledger-accounts.edit","ledger-accounts.delete"],children:e.jsx(W,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(G,{roles:["ledger-accounts.edit"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{m(l.id),O(l)},children:e.jsx(Z,{className:"h-4 w-4 text-foreground"})})}),e.jsx(G,{roles:["ledger-accounts.delete"],children:e.jsx(w,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{c(l.id),O(l)},children:e.jsx(v,{className:"h-4 w-4 text-foreground"})})})]})})})]})})})}),e.jsx(j,{className:"py-2.5",children:l.code}),e.jsx(j,{className:"py-2.5",children:"Account"}),e.jsxs(j,{className:"py-2.5",children:[(l==null?void 0:l.id)===b&&e.jsx(V,{title:"Edit Account",isOpen:(l==null?void 0:l.id)===b,toggleModal:()=>m(null),children:e.jsx(ae,{rowData:h,modalClose:()=>m(null)})}),e.jsx(D,{title:"Are you sure?",description:"This action cannot be undone.",name:h==null?void 0:h.name,isOpen:I===(l==null?void 0:l.id),onClose:()=>c(null),onConfirm:()=>ue(h==null?void 0:h.id),loading:p})]})]},l.id)),(n==null?void 0:n.id)===S&&e.jsx(V,{title:"Edit Group",isOpen:(n==null?void 0:n.id)===S,toggleModal:()=>i(null),children:e.jsx(te,{rowData:x,modalClose:()=>i(null)})}),e.jsx(D,{title:"Are you sure?",description:"This action cannot be undone.",name:x==null?void 0:x.name,isOpen:(n==null?void 0:n.id)===u,onClose:()=>g(null),onConfirm:()=>he(x==null?void 0:x.id),loading:o})]},n.id))},Xe=({data:r,coaType:s})=>{const t=r.find(a=>a.name===s);return t?e.jsx(Ee,{className:"mt-4",children:e.jsxs(Me,{children:[e.jsx(_e,{children:e.jsxs(q,{children:[e.jsx(B,{className:"py-2.5 h-8 col-span-2 w-2/3",children:"Name"}),e.jsx(B,{className:"py-2.5 h-8 w-[100px]",children:"Code"}),e.jsx(B,{className:"py-2.5 h-8",children:"Type"})]})}),e.jsxs(Oe,{children:[e.jsxs(q,{children:[e.jsx(j,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:t.name}),e.jsx(j,{className:"py-2.5",children:t.code}),e.jsx(j,{className:"py-2.5",children:"Group"})]}),e.jsx(ie,{group:t,coaType:s,depth:1}),t.ledgers.map(a=>e.jsxs(q,{children:[e.jsx(j,{className:"py-2.5 col-span-2 w-2/3",children:e.jsxs(ce,{className:de({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/detailed-general-ledger/${a.id}`,children:["    ",a.name]})}),e.jsx(j,{className:"py-2.5",children:a.code}),e.jsx(j,{className:"py-2.5",children:"Account"})]},a.id))]})]})}):null},H=[{type:"Assets",title:"Assets",description:"Manage assets for your business"},{type:"Liabilities",title:"Liabilities",description:"Manage liabilities for your business"},{type:"Income",title:"Income",description:"Manage incomes for your business"},{type:"Expenses",title:"Expenses",description:"Manage expenses for your business"},{type:"Equity",title:"Equity",description:"Manage expenses for your business"}],We=()=>{const{data:r,isLoading:s}=Re(),[t,a]=T.useState(!1),[b,m]=T.useState(!1),S=(r==null?void 0:r.data)||[];return s?e.jsx(F,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Fe,{title:"Chart Of Account",description:"Manage Chart of account for you business"}),e.jsxs("div",{className:"flex space-x-2 items-center",children:[e.jsx(G,{roles:["ledger-groups.create"],children:e.jsxs(w,{onClick:()=>a(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Group"]})}),e.jsx(G,{roles:["ledger-accounts.create"],children:e.jsxs(w,{onClick:()=>m(!0),size:"sm",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"})," Add Account"]})})]})]}),e.jsx(Ie,{}),e.jsxs(qe,{defaultValue:H[0].type,className:"w-full mt-3",children:[e.jsx(Pe,{className:"w-fit",children:H.map(i=>e.jsx(ke,{value:i.type,children:i.title},i.type))}),H.map(i=>e.jsx(Ve,{value:i.type,children:e.jsx(Xe,{title:i.title,coaType:i.type,description:i.description,data:S})},i.type))]}),t&&e.jsx(V,{title:"Add Group",isOpen:t,toggleModal:()=>a(!1),children:e.jsx(te,{modalClose:()=>a(!1)})}),b&&e.jsx(V,{title:"Add Account",isOpen:b,toggleModal:()=>m(!1),children:e.jsx(ae,{modalClose:()=>m(!1)})})]})};export{We as default};
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/index-e2d463ec.js
