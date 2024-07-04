import{b4 as v,Z as E,a0 as w,k as e,a1 as A,a2 as I,a3 as h,a4 as m,a5 as j,a6 as f,I as u,a7 as g,M as o,b5 as _,a9 as y,r as p,aa as F,ab as Y,ac as S,ad as k,ae as b,af as P,ag as L,ah as T,ai as C,R as O,aj as $,P as R,ak as U,al as q}from"./index-nQhhVOoT.js";import{B as N}from"./badge-DyVOQdGr.js";const z=v.injectEndpoints({endpoints:n=>({getFinancialYears:n.query({query:a=>`financial-years?${a}`,providesTags:["financial-years"]}),createFinancialYear:n.mutation({query:a=>({url:"financial-years",method:"POST",body:a}),invalidatesTags:["financial-years"]}),removeFinancialYear:n.mutation({query:a=>({url:`financial-years/${a}`,method:"DELETE"}),invalidatesTags:["financial-years"]}),updateFinancialYear:n.mutation({query:({financialYearId:a,updatedFinancialYear:i})=>({url:`financial-years/${a}`,method:"PUT",body:i}),invalidatesTags:["financial-years"]})}),overrideExisting:!1}),{useGetFinancialYearsQuery:K,useCreateFinancialYearMutation:B,useRemoveFinancialYearMutation:H,useUpdateFinancialYearMutation:V}=z;function M({modalClose:n,rowData:a}){const[i,{isLoading:c}]=B(),[s,{isLoading:r}]=V(),l=E({resolver:w(_),defaultValues:{name:(a==null?void 0:a.name)||"",start_date:(a==null?void 0:a.start_date)||"",end_date:(a==null?void 0:a.end_date)||""}});async function d(t){try{a?(await s({financialYearId:a.id,updatedFinancialYear:t}),y.success("Financial year updated successfully"),n()):(await i(t),y.success("Financial year created successfully"),n())}catch(x){console.log(x)}}return e.jsx(e.Fragment,{children:c||r?e.jsx("div",{className:"h-56",children:e.jsx(A,{})}):e.jsx(I,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(h,{control:l.control,name:"name",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"Name"}),e.jsx(f,{children:e.jsx(u,{placeholder:"Enter financial year name",...t})}),e.jsx(g,{})]})}),e.jsx(h,{control:l.control,name:"start_date",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"Start Date"}),e.jsx(f,{children:e.jsx(u,{type:"date",placeholder:"Enter Financial Start Date",...t})}),e.jsx(g,{})]})}),e.jsx(h,{control:l.control,name:"end_date",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"End Date"}),e.jsx(f,{children:e.jsx(u,{type:"date",placeholder:"Enter Financial End Date",...t})}),e.jsx(g,{})]})}),e.jsx("div",{children:e.jsx(o,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function G({rowData:n}){const[a,i]=p.useState(!1),[c,s]=p.useState(!1),[r,{isLoading:l}]=H(),d=async t=>{try{await r(t),y.success("Financial year deleted successfully"),i(!1)}catch(x){console.log(x)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(Y,{children:[e.jsx(S,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(!0),children:e.jsx(k,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Financial Year"})})]})}),e.jsx(F,{children:e.jsxs(Y,{children:[e.jsx(S,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{i(!0)},children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete Financial Year"})})]})}),e.jsx(L,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:a,onClose:()=>i(!1),onConfirm:()=>d(n.id),loading:l}),e.jsx(T,{title:"Update Financial Year",isOpen:c,toggleModal:()=>s(!1),children:e.jsx(M,{rowData:n,modalClose:()=>s(!1)})})]})}const Q=[{id:"select",header:({table:n})=>e.jsx(C,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>n.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(C,{checked:n.getIsSelected(),onCheckedChange:a=>n.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Financial Year Name"},{accessorKey:"start_date",header:"Start Date"},{accessorKey:"end_date",header:"End Date"},{accessorKey:"is_active",header:"Status",cell:({row:n})=>n.getValue("is_active")===1?e.jsx(N,{children:"Active"}):e.jsx(N,{variant:"destructive",children:"Inactive"})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(G,{rowData:n.original})}],W=()=>{const[n,a]=p.useState(!1),[i,c]=O.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:r}=K(`per_page=${i.pageSize}&page=${i.pageIndex+1}`),l=(s==null?void 0:s.data)||[],d=s==null?void 0:s.meta;return r?e.jsx(A,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx($,{title:"Financial Year",description:"Manage financial year for you business"}),e.jsxs(o,{onClick:()=>a(!0),size:"sm",children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Add Financial Year"]})]}),e.jsx(U,{}),l&&e.jsx("div",{children:e.jsx(q,{columns:Q,data:l,paginationInfo:d,pagination:i,setPagination:c})})]})}),e.jsx(T,{title:"Add Financial Year",isOpen:n,toggleModal:()=>a(!1),children:e.jsx(M,{modalClose:()=>a(!1)})})]})};export{W as default};
