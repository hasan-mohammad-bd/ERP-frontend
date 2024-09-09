import{bf as z,a as e,R as P,b9 as L,bc as x,L as R,o as $,M as W,b7 as X,b8 as Z,ba as G,bb as D,W as v,X as H,Y as A,Z as B,_ as j,$ as m,a0 as g,z as ee,A as se,a1 as p,B as S,b as q,bm as ne,E as re,bn as le,bo as ae,bp as ce,bq as de,br as oe,bs as te,bt as ie,a2 as b,I as w,bu as ue,a4 as Q,bv as U,bw as xe,aj as E,ak as M,al as F,am as _,an as N,bx as he,r as I,ae as je,v as k,af as me,G as ge,H as pe,J as ye,K as be,ac as V}from"./index-492716bc.js";import{S as fe}from"./switch-53650eec.js";const Ne=z.injectEndpoints({endpoints:r=>({getLedgerGroups:r.query({query:()=>"ledger-groups?tree=1",providesTags:["ledger-groups-tree"]}),getLedgerGroupsArray:r.query({query:()=>"ledger-groups",providesTags:["ledger-groups-array"]}),createLedgerGroup:r.mutation({query:s=>({url:"ledger-groups",method:"POST",body:s}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]}),removeLedgerGroup:r.mutation({query:s=>({url:`ledger-groups/${s}`,method:"DELETE"}),invalidatesTags:["ledger-groups"]}),updateLedgerGroup:r.mutation({query:({ledgerGroupId:s,updatedLedgerGroup:c})=>({url:`ledger-groups/${s}`,method:"PUT",body:c}),invalidatesTags:["ledger-groups"]})}),overrideExisting:!1}),{useGetLedgerGroupsQuery:Ce,useGetLedgerGroupsArrayQuery:J,useCreateLedgerGroupMutation:Ae,useRemoveLedgerGroupMutation:Fe,useUpdateLedgerGroupMutation:_e}=Ne,Y=({group:r,coaType:s,depth:c=0})=>{const l=Array(c).fill("        ").join("");return r.childs_group.map(d=>e.jsxs(P.Fragment,{children:[e.jsxs(L,{children:[e.jsxs(x,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:[l,d.name]}),e.jsx(x,{className:"py-2.5",children:d.code}),e.jsx(x,{className:"py-2.5",children:"Group"})]}),d.childs_group&&d.childs_group.length>0&&e.jsx(Y,{group:d,coaType:s,depth:c+1}),d.ledgers&&d.ledgers.length>0&&d.ledgers.map(u=>e.jsxs(L,{children:[e.jsx(x,{className:"py-0 col-span-2 w-2/3",children:e.jsxs(R,{className:$({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/reports/detailed-general-ledger/${u.id}`,children:[l,u.name]})}),e.jsx(x,{className:"py-2.5",children:u.code}),e.jsx(x,{className:"py-2.5",children:"Account"})]},u.id))]},d.id))},Le=({data:r,coaType:s})=>{const c=r.find(l=>l.name===s);return c?e.jsx(W,{className:"mt-4",children:e.jsxs(X,{children:[e.jsx(Z,{children:e.jsxs(L,{children:[e.jsx(G,{className:"py-2.5 h-8 col-span-2 w-2/3",children:"Name"}),e.jsx(G,{className:"py-2.5 h-8 w-[100px]",children:"Code"}),e.jsx(G,{className:"py-2.5 h-8",children:"Type"})]})}),e.jsxs(D,{children:[e.jsxs(L,{children:[e.jsx(x,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:c.name}),e.jsx(x,{className:"py-2.5",children:c.code}),e.jsx(x,{className:"py-2.5",children:"Group"})]}),e.jsx(Y,{group:c,coaType:s,depth:1}),c.ledgers.map(l=>e.jsxs(L,{children:[e.jsx(x,{className:"py-2.5 col-span-2 w-2/3",children:e.jsxs(R,{className:$({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/detailed-general-ledger/${l.id}`,children:["    ",l.name]})}),e.jsx(x,{className:"py-2.5",children:l.code}),e.jsx(x,{className:"py-2.5",children:"Account"})]},l.id))]})]})}):null},O=[{type:"Assets",title:"Assets",description:"Manage assets for your business"},{type:"Liabilities",title:"Liabilities",description:"Manage liabilities for your business"},{type:"Income",title:"Income",description:"Manage incomes for your business"},{type:"Expenses",title:"Expenses",description:"Manage expenses for your business"},{type:"Equity",title:"Equity",description:"Manage expenses for your business"}];function Se({modalClose:r,rowData:s}){const[c,l]=P.useState(!1),[d,{isLoading:u}]=Ae(),{data:h,isLoading:i}=J(),C=(h==null?void 0:h.data)||[],f=v({resolver:H(ue),defaultValues:{parent_id:s==null?void 0:s.id}});async function T(a){try{await d(a).unwrap(),Q.success("Add ledger group successfully"),r()}catch(t){U(t),console.log(t)}}return e.jsx(e.Fragment,{children:u?e.jsx("div",{className:"h-56",children:e.jsx(A,{})}):e.jsx(B,{...f,children:e.jsxs("form",{onSubmit:f.handleSubmit(T),className:"w-full space-y-3",children:[(s==null?void 0:s.id)&&e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Parent:"})," ",s==null?void 0:s.name]}),!(s!=null&&s.id)&&e.jsxs(e.Fragment,{children:[e.jsx(j,{control:f.control,name:"parent_id",render:({field:a})=>{var t;return e.jsxs(m,{children:[e.jsx(g,{children:"Parent Group"}),e.jsxs(ee,{open:c,onOpenChange:l,modal:!0,children:[e.jsx(se,{asChild:!0,children:e.jsx(p,{children:e.jsxs(S,{variant:"outline",role:"combobox",className:q("w-full justify-between",!a.value&&"text-muted-foreground"),children:[a.value?(t=C.find(y=>y.id===Number(a.value)))==null?void 0:t.name:"Select Parent",e.jsx(ne,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),e.jsx(re,{className:"w-[460px] p-0",children:e.jsxs(le,{children:[e.jsx(ae,{placeholder:"Search parent group..."}),e.jsxs(ce,{children:[e.jsx(de,{children:"No parent group found."}),e.jsx(oe,{children:i?e.jsx(A,{}):C.map(y=>e.jsxs(te,{onSelect:()=>{a.onChange(String(y.id)),l(!1)},children:[e.jsx(ie,{className:q("mr-2 h-4 w-4",Number(a.value)===y.id?"opacity-100":"opacity-0")}),y.name]},y.id))})]})]})})]}),e.jsx(b,{})]})}}),e.jsx(j,{control:f.control,name:"name",render:({field:a})=>e.jsxs(m,{children:[e.jsx(g,{children:"Account Name"}),e.jsx(p,{children:e.jsx(w,{placeholder:"Enter name",...a})}),e.jsx(b,{})]})}),e.jsx(j,{control:f.control,name:"code",render:({field:a})=>e.jsxs(m,{children:[e.jsx(g,{children:"Code"}),e.jsx(p,{children:e.jsx(w,{placeholder:"Enter code",...a,value:a.value||""})}),e.jsx(b,{})]})})]}),e.jsx("div",{children:e.jsx(S,{variant:"default",type:"submit",className:"w-full mt-4",children:"Add Group"})})]})})})}const we=z.injectEndpoints({endpoints:r=>({getEnum:r.query({query:()=>"catalogs/enum",providesTags:["catalogs/enum"]})}),overrideExisting:!1}),{useGetEnumQuery:Te}=we;function Ge({modalClose:r,rowData:s}){const[c,{isLoading:l}]=xe(),[d,u]=P.useState(0),{data:h,isLoading:i}=J(),{data:C,isLoading:f}=Te(),T=(C==null?void 0:C.account_nature)||[],a=(h==null?void 0:h.data)||[];console.log(a);const t=v({resolver:H(he),defaultValues:{name:(s==null?void 0:s.name)||"",parent_id:s==null?void 0:s.id,is_sub_type:0,nature:(s==null?void 0:s.nature)||""}});console.log(a);async function y(o){try{await c(o).unwrap(),Q.success("Add ledger account successfully"),r()}catch(n){U(n),console.log(n)}}return e.jsx(e.Fragment,{children:l?e.jsx("div",{className:"h-56",children:e.jsx(A,{})}):e.jsx(B,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(y),className:"w-full space-y-3",children:[(s==null?void 0:s.id)&&e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Parent:"})," ",s==null?void 0:s.name]}),!(s!=null&&s.id)&&e.jsxs(e.Fragment,{children:[e.jsx(j,{control:t.control,name:"parent_id",render:({field:o})=>e.jsxs(m,{children:[e.jsx(g,{children:"Parent Group"}),e.jsxs(E,{onValueChange:o.onChange,children:[e.jsx(p,{children:e.jsx(M,{children:e.jsx(F,{placeholder:"Select Parent"})})}),e.jsx(_,{children:i?e.jsx(A,{}):a==null?void 0:a.filter(n=>(n==null?void 0:n.name)!=="Assets"&&(n==null?void 0:n.name)!=="Liabilities"&&(n==null?void 0:n.name)!=="Equity"&&(n==null?void 0:n.name)!=="Expenses"&&(n==null?void 0:n.name)!=="Income").map(n=>e.jsx(N,{value:String(n.id),children:n.name},n.id))})]}),e.jsx(b,{})]})}),e.jsx(j,{control:t.control,name:"name",render:({field:o})=>e.jsxs(m,{children:[e.jsx(g,{children:"Account Name"}),e.jsx(p,{children:e.jsx(w,{placeholder:"Enter ledger account name",...o})}),e.jsx(b,{})]})}),e.jsx(j,{control:t.control,name:"code",render:({field:o})=>e.jsxs(m,{children:[e.jsx(g,{children:"Code"}),e.jsx(p,{children:e.jsx(w,{placeholder:"Enter code",...o,value:o.value||""})}),e.jsx(b,{})]})})]}),e.jsx(j,{control:t.control,name:"nature",render:({field:o})=>e.jsxs(m,{children:[e.jsx(g,{children:"Default Account Type"}),e.jsxs(E,{onValueChange:o.onChange,children:[e.jsx(p,{children:e.jsx(M,{children:e.jsx(F,{placeholder:"Select Parent"})})}),e.jsx(_,{children:f?e.jsx(A,{}):T.map((n,K)=>e.jsx(N,{value:n.toString(),children:n.toString()},K))})]}),e.jsx(b,{})]})}),e.jsx(j,{control:t.control,name:"is_sub_type",render:({field:o})=>e.jsxs(m,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(g,{children:"Is Sub Type"})}),e.jsx(p,{children:e.jsx(fe,{checked:o.value===1,onCheckedChange:n=>{o.onChange(n?1:0),u(n?1:0)}})})]})}),d===1&&e.jsx(j,{control:t.control,name:"sub_type",render:({field:o})=>e.jsxs(m,{children:[e.jsx(g,{children:"Sub Type"}),e.jsxs(E,{onValueChange:o.onChange,defaultValue:"None",children:[e.jsx(p,{children:e.jsx(M,{children:e.jsx(F,{placeholder:""})})}),e.jsxs(_,{children:[e.jsx(N,{value:"None",children:"None"}),e.jsx(N,{value:"Employee",children:"Employee"}),e.jsx(N,{value:"Customer",children:"Customer"}),e.jsx(N,{value:"Supplier",children:"Supplier"}),e.jsx(N,{value:"Agent",children:"Agent"})]})]}),e.jsx(b,{})]})}),e.jsx("div",{children:e.jsx(S,{variant:"default",type:"submit",className:"w-full mt-4",children:"Add Account"})})]})})})}const Oe=()=>{const{data:r,isLoading:s}=Ce(),[c,l]=I.useState(!1),[d,u]=I.useState(!1),h=(r==null?void 0:r.data)||[];return s?e.jsx(A,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(je,{title:"Chart Of Account",description:"Manage Chart of account for you business"}),e.jsxs("div",{className:"flex space-x-2 items-center",children:[e.jsxs(S,{onClick:()=>l(!0),size:"sm",children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Add Group"]}),e.jsxs(S,{onClick:()=>u(!0),size:"sm",children:[e.jsx(k,{className:"mr-2 h-4 w-4"})," Add Account"]})]})]}),e.jsx(me,{}),e.jsxs(ge,{defaultValue:O[0].type,className:"w-full mt-3",children:[e.jsx(pe,{className:"w-fit",children:O.map(i=>e.jsx(ye,{value:i.type,children:i.title},i.type))}),O.map(i=>e.jsx(be,{value:i.type,children:e.jsx(Le,{title:i.title,coaType:i.type,description:i.description,data:h})},i.type))]}),c&&e.jsx(V,{title:"Add Group",isOpen:c,toggleModal:()=>l(!1),children:e.jsx(Se,{modalClose:()=>l(!1)})}),d&&e.jsx(V,{title:"Add Account",isOpen:d,toggleModal:()=>u(!1),children:e.jsx(Ge,{modalClose:()=>u(!1)})})]})};export{Oe as default};
