import{cO as M,B as v,D as w,cR as I,a as e,au as A,G as _,H as h,J as m,K as j,N as u,I as g,Q as f,V as o,av as y,r as p,ay as F,az as S,aA as Y,aB as N,aC as L,aD as C,aE as O,aF as P,aG as T,aH as b,R,aJ as k,aK as z,aL as K,aM as U}from"./index-9ef70cee.js";const q=M.injectEndpoints({endpoints:n=>({getFinancialYears:n.query({query:a=>`financial-years?${a}`,providesTags:["financial-years"]}),createFinancialYear:n.mutation({query:a=>({url:"financial-years",method:"POST",body:a}),invalidatesTags:["financial-years"]}),removeFinancialYear:n.mutation({query:a=>({url:`financial-years/${a}`,method:"DELETE"}),invalidatesTags:["financial-years"]}),updateFinancialYear:n.mutation({query:({financialYearId:a,updatedFinancialYear:l})=>({url:`financial-years/${a}`,method:"PUT",body:l}),invalidatesTags:["financial-years"]})}),overrideExisting:!1}),{useGetFinancialYearsQuery:$,useCreateFinancialYearMutation:H,useRemoveFinancialYearMutation:B,useUpdateFinancialYearMutation:G}=q;function E({modalClose:n,rowData:a}){const[l,{isLoading:c}]=H(),[s,{isLoading:r}]=G(),i=v({resolver:w(I),defaultValues:{name:(a==null?void 0:a.name)||"",start_date:(a==null?void 0:a.start_date)||"",end_date:(a==null?void 0:a.end_date)||""}});async function d(t){try{a?(await s({financialYearId:a.id,updatedFinancialYear:t}),y.success("Financial year updated successfully"),n()):(await l(t),y.success("Financial year created successfully"),n())}catch(x){console.log(x)}}return e.jsx(e.Fragment,{children:c||r?e.jsx("div",{className:"h-56",children:e.jsx(A,{})}):e.jsx(_,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(h,{control:i.control,name:"name",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"Name"}),e.jsx(u,{children:e.jsx(g,{placeholder:"Enter financial year name",...t})}),e.jsx(f,{})]})}),e.jsx(h,{control:i.control,name:"start_date",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"Start Date"}),e.jsx(u,{children:e.jsx(g,{type:"date",placeholder:"Enter Financial Start Date",...t})}),e.jsx(f,{})]})}),e.jsx(h,{control:i.control,name:"end_date",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"End Date"}),e.jsx(u,{children:e.jsx(g,{type:"date",placeholder:"Enter Financial End Date",...t})}),e.jsx(f,{})]})}),e.jsx("div",{children:e.jsx(o,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function J({rowData:n}){const[a,l]=p.useState(!1),[c,s]=p.useState(!1),[r,{isLoading:i}]=B(),d=async t=>{try{await r(t),y.success("Financial year deleted successfully"),l(!1)}catch(x){console.log(x)}};return e.jsxs("div",{className:"flex justify-center space-x-2 min-h-10",children:[e.jsx(F,{roles:["financial-years.edit"],children:e.jsx(S,{children:e.jsxs(Y,{children:[e.jsx(N,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(!0),children:e.jsx(L,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Update Financial Year"})})]})})}),e.jsx(F,{roles:["financial-years.delete"],children:e.jsx(S,{children:e.jsxs(Y,{children:[e.jsx(N,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(O,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Delete Financial Year"})})]})})}),e.jsx(P,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:a,onClose:()=>l(!1),onConfirm:()=>d(n.id),loading:i}),e.jsx(T,{title:"Update Financial Year",isOpen:c,toggleModal:()=>s(!1),children:e.jsx(E,{rowData:n,modalClose:()=>s(!1)})})]})}const V=[{id:"select",header:({table:n})=>e.jsx(b,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>n.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(b,{checked:n.getIsSelected(),onCheckedChange:a=>n.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Financial Year Name"},{accessorKey:"start_date",header:"Start Date"},{accessorKey:"end_date",header:"End Date"},{accessorKey:"is_active",header:"Status",cell:({row:n})=>n.getValue("is_active")===1?e.jsx("span",{className:"text-green-600  text-[12px] py-1 px-2 bg-green-100 rounded-xl",children:"Active"}):e.jsx("span",{className:"text-red-600 text-[12px] py-1 px-2 bg-red-100 rounded-xl",children:"Inactive"})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(J,{rowData:n.original})}],W=()=>{const[n,a]=p.useState(!1),[l,c]=R.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:r}=$(`per_page=${l.pageSize}&page=${l.pageIndex+1}`),i=(s==null?void 0:s.data)||[],d=s==null?void 0:s.meta;return r?e.jsx(A,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{title:"Financial Year",description:"Manage financial year for you business"}),e.jsx(F,{roles:["financial-years.create"],children:e.jsxs(o,{onClick:()=>a(!0),size:"sm",children:[e.jsx(z,{className:"mr-2 h-4 w-4"})," Add Financial Year"]})})]}),e.jsx(K,{}),i&&e.jsx("div",{children:e.jsx(U,{columns:V,data:i,paginationInfo:d,pagination:l,setPagination:c})})]})}),e.jsx(T,{title:"Add Financial Year",isOpen:n,toggleModal:()=>a(!1),children:e.jsx(E,{modalClose:()=>a(!1)})})]})};export{W as default};
