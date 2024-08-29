import{bu as b,bv as u,a1 as w,a as e,bw as M,r as A,a8 as q,a9 as L,$ as y,aa as T,ab as j,ac as g,ad as f,aw as E,ae as p,ax as U,ay as V,az as k,aA as I,af as C,B as _,ah as O,b as P,bx as $,ar as z,t as B,as as R,F as N,ap as G}from"./index-624370c3.js";import{S as Q}from"./switch-6323df50.js";const H=b.pick({id:!0}),J=u.object({currency_id:u.coerce.number({required_error:"Currency is required"}),multi_currency:u.coerce.number().optional().nullable(),currencies:H.array().optional().nullable()});u.object({currency:b,currency_id:u.coerce.number(),multi_currency:u.coerce.number(),currencies:b.array()});const W=w.injectEndpoints({endpoints:c=>({getAccountsSettings:c.query({query:()=>"accounts-settings",providesTags:["accounts-settings"]}),createAccountSetting:c.mutation({query:s=>({url:"accounts-settings",method:"POST",body:s}),invalidatesTags:["accounts-settings"]}),updateAccountSetting:c.mutation({query:({accountSettingId:s,updatedAccountSetting:a})=>({url:`accounts-settings/${s}`,method:"PUT",body:a}),invalidatesTags:["accounts-settings"]})}),overrideExisting:!1}),{useGetAccountsSettingsQuery:K,useCreateAccountSettingMutation:X,useUpdateAccountSettingMutation:re}=W,Y=w.injectEndpoints({endpoints:c=>({getCurrencies:c.query({query:s=>`currencies?${s}`,providesTags:["currencies"]})}),overrideExisting:!1}),{useGetCurrenciesQuery:Z}=Y,D=({options:c,value:s,onChange:a})=>{const m=l=>{a(l?l.map(i=>i.value):[])},n=c.filter(l=>s.includes(l.value));return e.jsx(M,{isMulti:!0,options:c,value:n,onChange:m,className:"react-select-container",classNamePrefix:"react-select"})};function ee({modalClose:c,rowData:s}){var S;const[a,{isLoading:m}]=X(),[n,l]=A.useState((s==null?void 0:s.currencies.map(r=>r.id))||[]),{data:i,isLoading:x}=Z("page=1&per_page=1000"),t=(i==null?void 0:i.data)||[],d=q({resolver:L(J),defaultValues:{currency_id:((S=s==null?void 0:s.currency)==null?void 0:S.id)||13,multi_currency:(s==null?void 0:s.multi_currency)||0,currencies:(s==null?void 0:s.currencies)||[]}});async function v(r){const o={...r,currencies:n.map(h=>({id:h}))};try{s&&(await a(o),O.success("Contact updated successfully"),c())}catch(h){console.log(h)}}const F=Number(d.watch("currency_id"));return e.jsx(e.Fragment,{children:m?e.jsx("div",{className:"h-56",children:e.jsx(y,{})}):e.jsx(T,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(v),className:"w-full space-y-3",children:[e.jsx(j,{control:d.control,name:"currency_id",render:({field:r})=>e.jsxs(g,{children:[e.jsx(f,{children:"Default Country"}),e.jsxs(E,{onValueChange:r.onChange,defaultValue:s!=null&&s.currency_id?String(s==null?void 0:s.currency_id):void 0,children:[e.jsx(p,{children:e.jsx(U,{children:e.jsx(V,{placeholder:"Select Country"})})}),e.jsx(k,{children:x?e.jsx(y,{}):t==null?void 0:t.map(o=>e.jsx(I,{value:String(o.id),children:o.name},o.id))})]}),e.jsx(C,{})]})}),e.jsx(j,{control:d.control,name:"multi_currency",render:({field:r})=>e.jsxs(g,{className:"flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",children:[e.jsx("div",{className:"space-y-0.5",children:e.jsx(f,{children:"Multi Currency "})}),e.jsx(p,{children:e.jsx(Q,{checked:r.value===1,onCheckedChange:o=>{r.onChange(o?1:0)}})})]})}),d.watch("multi_currency")===1&&e.jsx(j,{control:d.control,name:"currencies",render:()=>e.jsxs(g,{children:[e.jsx(f,{children:"Select Other Currencies"}),e.jsx(D,{options:t.filter(r=>r.id!==F).map(r=>({value:r.id,label:r.name})),value:n,onChange:l}),e.jsx(C,{})]})}),e.jsx("div",{children:e.jsx(_,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})})}const se=$("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ne({className:c,variant:s,...a}){return e.jsx("div",{className:P(se({variant:s}),c),...a})}const ae=()=>{var l,i,x;const[c,s]=A.useState(!1),{data:a,isLoading:m}=K(),n=(a==null?void 0:a.data)||null;return m?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(z,{title:" Accounts Settings",description:"Manage your sub accounts for you business"}),e.jsxs(_,{onClick:()=>s(!0),size:"sm",children:[e.jsx(B,{className:"mr-2 h-4 w-4"})," Update Accounts Settings"]})]}),e.jsx(R,{}),n&&e.jsx("div",{className:"",children:e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-3",children:"Currencies"}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx(N,{children:e.jsxs("div",{className:"p-4 ",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("h2",{className:"font-bold text-xl",children:[" ",(l=n==null?void 0:n.currency)==null?void 0:l.name]}),e.jsx("span",{className:"",children:e.jsx(ne,{children:"Default"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Symbol:"})," ",(i=n==null?void 0:n.currency)==null?void 0:i.symbol]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Code:"})," ",(x=n==null?void 0:n.currency)==null?void 0:x.code]})]})}),n==null?void 0:n.currencies.map(t=>e.jsx(N,{children:e.jsxs("div",{className:"p-4",children:[e.jsxs("h2",{className:"font-bold text-xl mb-3",children:[e.jsx("span",{className:"font-bold"})," ",t==null?void 0:t.name]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Symbol:"})," ",t==null?void 0:t.symbol]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Code:"})," ",t==null?void 0:t.code]})]})},t.id))]})]})})]})}),e.jsx(G,{title:"Update Accounts Settings",isOpen:c,toggleModal:()=>s(!1),children:e.jsx(ee,{rowData:n,modalClose:()=>s(!1)})})]})};export{ae as default};
