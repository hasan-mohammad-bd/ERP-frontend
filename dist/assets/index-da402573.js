import{b7 as B,a as e,R as I,V as A,Y as r,L as $,o as Q,F as se,Q as ne,U as ae,W as C,X as re,ad as _,a4 as U,a5 as H,$ as S,a6 as Y,a7 as p,a8 as g,a9 as y,y as le,z as ce,aa as f,B as w,b as V,b9 as te,D as de,ba as oe,bb as ie,bc as he,bd as xe,be as me,bf as ue,bg as je,ab as N,I as T,bh as pe,bi as ge,as as G,at as M,au as F,av as O,aw as b,bj as ye,r as k,an as fe,t as v,ao as Ne,al as z}from"./index-e05f5e98.js";import{T as be,a as Ce,b as Se,c as Ae}from"./tabs-202a1862.js";import{B as J}from"./badge-4d27793f.js";import{S as we}from"./switch-020b2394.js";const Le=B.injectEndpoints({endpoints:n=>({getLedgerGroups:n.query({query:()=>"ledger-groups?tree=1",providesTags:["ledger-groups-tree"]}),getLedgerGroupsArray:n.query({query:()=>"ledger-groups",providesTags:["ledger-groups-array"]}),createLedgerGroup:n.mutation({query:s=>({url:"ledger-groups",method:"POST",body:s}),invalidatesTags:["ledger-groups","ledger-groups-tree","ledger-groups-array"]}),removeLedgerGroup:n.mutation({query:s=>({url:`ledger-groups/${s}`,method:"DELETE"}),invalidatesTags:["ledger-groups"]}),updateLedgerGroup:n.mutation({query:({ledgerGroupId:s,updatedLedgerGroup:a})=>({url:`ledger-groups/${s}`,method:"PUT",body:a}),invalidatesTags:["ledger-groups"]})}),overrideExisting:!1}),{useGetLedgerGroupsQuery:Te,useGetLedgerGroupsArrayQuery:W,useCreateLedgerGroupMutation:Ee,useRemoveLedgerGroupMutation:ve,useUpdateLedgerGroupMutation:ze}=Le,X=({group:n,coaType:s,depth:a=0})=>{const l=Array(a).fill("        ").join("");return n.childs_group.map(c=>e.jsxs(I.Fragment,{children:[e.jsxs(A,{children:[e.jsxs(r,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:[l,c.name]}),e.jsx(r,{className:"py-2.5",children:c.code}),e.jsx(r,{className:"py-2.5",children:"Group"}),e.jsx(r,{className:"py-2.5"}),e.jsx(r,{className:"py-2.5"}),e.jsx(r,{className:"py-2.5"})]}),c.childs_group&&c.childs_group.length>0&&e.jsx(X,{group:c,coaType:s,depth:a+1}),c.ledgers&&c.ledgers.length>0&&c.ledgers.map(o=>e.jsxs(A,{children:[e.jsx(r,{className:"py-0 col-span-2 w-2/3",children:e.jsxs($,{className:Q({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/reports/detailed-general-ledger/${o.id}`,children:[l,o.name]})}),e.jsx(r,{className:"py-2.5",children:o.code}),e.jsx(r,{className:"py-2.5",children:"Account"}),e.jsx(r,{className:"py-2.5",children:e.jsx(J,{variant:"outline",children:"active"})}),e.jsx(r,{className:"py-2.5",children:"700"}),e.jsx(r,{className:"py-2.5",children:"500"})]},o.id))]},c.id))},Ge=({data:n,coaType:s})=>{const a=n.find(l=>l.name===s);return a?e.jsx(se,{className:"mt-4",children:e.jsxs(ne,{children:[e.jsx(ae,{children:e.jsxs(A,{children:[e.jsx(C,{className:"py-2.5 h-8 col-span-2 w-2/3",children:"Name"}),e.jsx(C,{className:"py-2.5 h-8 w-[100px]",children:"Code"}),e.jsx(C,{className:"py-2.5 h-8",children:"Type"}),e.jsx(C,{className:"py-2.5 h-8",children:"Status"}),e.jsx(C,{className:"py-2.5 h-8",children:"Debit"}),e.jsx(C,{className:"py-2.5 h-8",children:"Credit"})]})}),e.jsxs(re,{children:[e.jsxs(A,{children:[e.jsx(r,{className:"py-2.5 col-span-2 w-2/3 font-medium",children:a.name}),e.jsx(r,{className:"py-2.5",children:a.code}),e.jsx(r,{className:"py-2.5",children:"Group"}),e.jsx(r,{className:"py-2.5"}),e.jsx(r,{className:"py-2.5"}),e.jsx(r,{className:"py-2.5"})]}),e.jsx(X,{group:a,coaType:s,depth:1}),a.ledgers.map(l=>e.jsxs(A,{children:[e.jsx(r,{className:"py-2.5 col-span-2 w-2/3",children:e.jsxs($,{className:Q({variant:"link",size:"sm",className:"text-blue-400 hover:no-underline"}),to:`/accounts/detailed-general-ledger/${l.id}`,children:["    ",l.name]})}),e.jsx(r,{className:"py-2.5",children:l.code}),e.jsx(r,{className:"py-2.5",children:"Account"}),e.jsx(r,{className:"py-2.5",children:e.jsx(J,{variant:"secondary",children:"Inactive"})}),e.jsx(r,{className:"py-2.5",children:"700"}),e.jsx(r,{className:"py-2.5",children:"500"})]},l.id))]})]})}):null},P=[{type:"Assets",title:"Assets",description:"Manage assets for your business"},{type:"Liabilities",title:"Liabilities",description:"Manage liabilities for your business"},{type:"Income",title:"Incomes",description:"Manage incomes for your business"},{type:"Expenses",title:"Expenses",description:"Manage expenses for your business"}];function Me(n){var l,c;const s=(l=n==null?void 0:n.data)==null?void 0:l.data,a=[];if(s)for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&s[o].forEach(u=>{a.push(u)});return a.length===0&&a.push(((c=n==null?void 0:n.data)==null?void 0:c.message)||"Something went wrong. Please try again."),a}function K(n){Me(n).forEach(a=>{_.error(a)})}function Fe({modalClose:n,rowData:s}){const[a,l]=I.useState(!1),[c,{isLoading:o}]=Ee(),{data:u,isLoading:i}=W(),L=(u==null?void 0:u.data)||[],j=U({resolver:H(pe),defaultValues:{parent_id:s==null?void 0:s.id}});async function E(h){try{await c(h).unwrap(),_.success("Add ledger group successfully"),n()}catch(x){K(x),console.log(x)}}return e.jsx(e.Fragment,{children:o?e.jsx("div",{className:"h-56",children:e.jsx(S,{})}):e.jsx(Y,{...j,children:e.jsxs("form",{onSubmit:j.handleSubmit(E),className:"w-full space-y-3",children:[(s==null?void 0:s.id)&&e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Parent:"})," ",s==null?void 0:s.name]}),!(s!=null&&s.id)&&e.jsxs(e.Fragment,{children:[e.jsx(p,{control:j.control,name:"parent_id",render:({field:h})=>{var x;return e.jsxs(g,{children:[e.jsx(y,{children:"Parent Group"}),e.jsxs(le,{open:a,onOpenChange:l,modal:!0,children:[e.jsx(ce,{asChild:!0,children:e.jsx(f,{children:e.jsxs(w,{variant:"outline",role:"combobox",className:V("w-full justify-between",!h.value&&"text-muted-foreground"),children:[h.value?(x=L.find(d=>d.id===Number(h.value)))==null?void 0:x.name:"Select Parent",e.jsx(te,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),e.jsx(de,{className:"w-[460px] p-0",children:e.jsxs(oe,{children:[e.jsx(ie,{placeholder:"Search parent group..."}),e.jsxs(he,{children:[e.jsx(xe,{children:"No parent group found."}),e.jsx(me,{children:i?e.jsx(S,{}):L.map(d=>e.jsxs(ue,{onSelect:()=>{h.onChange(String(d.id)),l(!1)},children:[e.jsx(je,{className:V("mr-2 h-4 w-4",Number(h.value)===d.id?"opacity-100":"opacity-0")}),d.name]},d.id))})]})]})})]}),e.jsx(N,{})]})}}),e.jsx(p,{control:j.control,name:"name",render:({field:h})=>e.jsxs(g,{children:[e.jsx(y,{children:"Account Name"}),e.jsx(f,{children:e.jsx(T,{placeholder:"Enter name",...h})}),e.jsx(N,{})]})}),e.jsx(p,{control:j.control,name:"code",render:({field:h})=>e.jsxs(g,{children:[e.jsx(y,{children:"Code"}),e.jsx(f,{children:e.jsx(T,{placeholder:"Enter code",...h,value:h.value||""})}),e.jsx(N,{})]})})]}),e.jsx("div",{children:e.jsx(w,{variant:"default",type:"submit",className:"w-full mt-4",children:"Add Group"})})]})})})}const Oe=B.injectEndpoints({endpoints:n=>({getEnum:n.query({query:()=>"catalogs/enum",providesTags:["catalogs/enum"]})}),overrideExisting:!1}),{useGetEnumQuery:Pe}=Oe;function Ie({modalClose:n,rowData:s,coaType:a}){var q;const[l,{isLoading:c}]=ge(),[o,u]=I.useState(0),{data:i,isLoading:L}=W(),{data:j,isLoading:E}=Pe(),h=(j==null?void 0:j.account_nature)||[],x=(i==null?void 0:i.data)||[],d=U({resolver:H(ye),defaultValues:{name:(s==null?void 0:s.name)||"",parent_id:s==null?void 0:s.id,is_sub_type:0,nature:(s==null?void 0:s.nature)||""}});console.log(x);const Z=d.watch("parent_id"),R=x==null?void 0:x.filter(t=>(t==null?void 0:t.id)==Z);async function D(t){try{await l(t).unwrap(),_.success("Add ledger account successfully"),n()}catch(m){K(m),console.log(m)}}return e.jsx(e.Fragment,{children:c?e.jsx("div",{className:"h-56",children:e.jsx(S,{})}):e.jsx(Y,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(D),className:"w-full space-y-3",children:[(s==null?void 0:s.id)&&e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Parent:"})," ",s==null?void 0:s.name]}),!(s!=null&&s.id)&&e.jsxs(e.Fragment,{children:[e.jsx(p,{control:d.control,name:"parent_id",render:({field:t})=>e.jsxs(g,{children:[e.jsx(y,{children:"Parent Group"}),e.jsxs(G,{onValueChange:t.onChange,children:[e.jsx(f,{children:e.jsx(M,{children:e.jsx(F,{placeholder:"Select Parent"})})}),e.jsx(O,{children:L?e.jsx(S,{}):x==null?void 0:x.map(m=>e.jsx(b,{value:String(m.id),children:m.name},m.id))})]}),e.jsx(N,{})]})}),e.jsx(p,{control:d.control,name:"name",render:({field:t})=>e.jsxs(g,{children:[e.jsx(y,{children:"Account Name"}),e.jsx(f,{children:e.jsx(T,{placeholder:"Enter ledger account name",...t})}),e.jsx(N,{})]})}),e.jsx(p,{control:d.control,name:"code",render:({field:t})=>e.jsxs(g,{children:[e.jsx(y,{children:"Code"}),e.jsx(f,{children:e.jsx(T,{placeholder:"Enter code",...t,value:t.value||""})}),e.jsx(N,{})]})})]}),a==="Assets"||((q=R[0])==null?void 0:q.type)==="Assets"?e.jsx(p,{control:d.control,name:"nature",render:({field:t})=>e.jsxs(g,{children:[e.jsx(y,{children:"Default Account Type"}),e.jsxs(G,{onValueChange:t.onChange,children:[e.jsx(f,{children:e.jsx(M,{children:e.jsx(F,{placeholder:"Select Parent"})})}),e.jsx(O,{children:E?e.jsx(S,{}):h.map((m,ee)=>e.jsx(b,{value:m.toString(),children:m.toString()},ee))})]}),e.jsx(N,{})]})}):null,e.jsx(p,{control:d.control,name:"is_sub_type",render:({field:t})=>e.jsxs(g,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(y,{children:"Is Sub Type"})}),e.jsx(f,{children:e.jsx(we,{checked:t.value===1,onCheckedChange:m=>{t.onChange(m?1:0),u(m?1:0)}})})]})}),o===1&&e.jsx(p,{control:d.control,name:"sub_type",render:({field:t})=>e.jsxs(g,{children:[e.jsx(y,{children:"Sub Type"}),e.jsxs(G,{onValueChange:t.onChange,defaultValue:"None",children:[e.jsx(f,{children:e.jsx(M,{children:e.jsx(F,{placeholder:""})})}),e.jsxs(O,{children:[e.jsx(b,{value:"None",children:"None"}),e.jsx(b,{value:"Employee",children:"Employee"}),e.jsx(b,{value:"Customer",children:"Customer"}),e.jsx(b,{value:"Supplier",children:"Supplier"}),e.jsx(b,{value:"Agent",children:"Agent"})]})]}),e.jsx(N,{})]})}),e.jsx("div",{children:e.jsx(w,{variant:"default",type:"submit",className:"w-full mt-4",children:"Add Account"})})]})})})}const Be=()=>{const{data:n,isLoading:s}=Te(),[a,l]=k.useState(!1),[c,o]=k.useState(!1),u=(n==null?void 0:n.data)||[];return s?e.jsx(S,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(fe,{title:"Chart Of Account",description:"Manage Chart of account for you business"}),e.jsxs("div",{className:"flex space-x-2 items-center",children:[e.jsxs(w,{onClick:()=>l(!0),size:"sm",children:[e.jsx(v,{className:"mr-2 h-4 w-4"})," Add Group"]}),e.jsxs(w,{onClick:()=>o(!0),size:"sm",children:[e.jsx(v,{className:"mr-2 h-4 w-4"})," Add Account"]})]})]}),e.jsx(Ne,{}),e.jsxs(be,{defaultValue:P[0].type,className:"w-full mt-3",children:[e.jsx(Ce,{className:"w-fit",children:P.map(i=>e.jsx(Se,{value:i.type,children:i.title},i.type))}),P.map(i=>e.jsx(Ae,{value:i.type,children:e.jsx(Ge,{title:i.title,coaType:i.type,description:i.description,data:u})},i.type))]}),a&&e.jsx(z,{title:"Add Group",isOpen:a,toggleModal:()=>l(!1),children:e.jsx(Fe,{modalClose:()=>l(!1)})}),c&&e.jsx(z,{title:"Add Account",isOpen:c,toggleModal:()=>o(!1),children:e.jsx(Ie,{modalClose:()=>o(!1)})})]})};export{Be as default};
