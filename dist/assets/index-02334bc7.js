import{b7 as E,a4 as M,a5 as w,a as e,$ as C,a6 as I,a7 as h,a8 as m,a9 as j,aa as g,I as u,ab as f,B as o,b8 as v,ad as p,r as y,ae as F,af as S,ag as Y,ah as _,ai as b,aj as k,ak as L,al as T,am as N,R as O,an as P,t as R,ao as U,ap as $}from"./index-e05f5e98.js";const q=E.injectEndpoints({endpoints:n=>({getFinancialYears:n.query({query:a=>`financial-years?${a}`,providesTags:["financial-years"]}),createFinancialYear:n.mutation({query:a=>({url:"financial-years",method:"POST",body:a}),invalidatesTags:["financial-years"]}),removeFinancialYear:n.mutation({query:a=>({url:`financial-years/${a}`,method:"DELETE"}),invalidatesTags:["financial-years"]}),updateFinancialYear:n.mutation({query:({financialYearId:a,updatedFinancialYear:l})=>({url:`financial-years/${a}`,method:"PUT",body:l}),invalidatesTags:["financial-years"]})}),overrideExisting:!1}),{useGetFinancialYearsQuery:z,useCreateFinancialYearMutation:K,useRemoveFinancialYearMutation:B,useUpdateFinancialYearMutation:H}=q;function A({modalClose:n,rowData:a}){const[l,{isLoading:c}]=K(),[s,{isLoading:r}]=H(),i=M({resolver:w(v),defaultValues:{name:(a==null?void 0:a.name)||"",start_date:(a==null?void 0:a.start_date)||"",end_date:(a==null?void 0:a.end_date)||""}});async function d(t){try{a?(await s({financialYearId:a.id,updatedFinancialYear:t}),p.success("Financial year updated successfully"),n()):(await l(t),p.success("Financial year created successfully"),n())}catch(x){console.log(x)}}return e.jsx(e.Fragment,{children:c||r?e.jsx("div",{className:"h-56",children:e.jsx(C,{})}):e.jsx(I,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(d),className:"w-full space-y-3",children:[e.jsx(h,{control:i.control,name:"name",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"Name"}),e.jsx(g,{children:e.jsx(u,{placeholder:"Enter financial year name",...t})}),e.jsx(f,{})]})}),e.jsx(h,{control:i.control,name:"start_date",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"Start Date"}),e.jsx(g,{children:e.jsx(u,{type:"date",placeholder:"Enter Financial Start Date",...t})}),e.jsx(f,{})]})}),e.jsx(h,{control:i.control,name:"end_date",render:({field:t})=>e.jsxs(m,{children:[e.jsx(j,{children:"End Date"}),e.jsx(g,{children:e.jsx(u,{type:"date",placeholder:"Enter Financial End Date",...t})}),e.jsx(f,{})]})}),e.jsx("div",{children:e.jsx(o,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function V({rowData:n}){const[a,l]=y.useState(!1),[c,s]=y.useState(!1),[r,{isLoading:i}]=B(),d=async t=>{try{await r(t),p.success("Financial year deleted successfully"),l(!1)}catch(x){console.log(x)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(F,{children:e.jsxs(S,{children:[e.jsx(Y,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>s(!0),children:e.jsx(_,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Update Financial Year"})})]})}),e.jsx(F,{children:e.jsxs(S,{children:[e.jsx(Y,{asChild:!0,children:e.jsx(o,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{l(!0)},children:e.jsx(k,{className:"h-4 w-4 text-foreground"})})}),e.jsx(b,{children:e.jsx("p",{children:"Delete Financial Year"})})]})}),e.jsx(L,{title:"Are you sure?",description:"This action cannot be undone.",name:n.name,isOpen:a,onClose:()=>l(!1),onConfirm:()=>d(n.id),loading:i}),e.jsx(T,{title:"Update Financial Year",isOpen:c,toggleModal:()=>s(!1),children:e.jsx(A,{rowData:n,modalClose:()=>s(!1)})})]})}const G=[{id:"select",header:({table:n})=>e.jsx(N,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>n.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(N,{checked:n.getIsSelected(),onCheckedChange:a=>n.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Financial Year Name"},{accessorKey:"start_date",header:"Start Date"},{accessorKey:"end_date",header:"End Date"},{accessorKey:"is_active",header:"Status",cell:({row:n})=>n.getValue("is_active")===1?e.jsx("span",{className:"text-green-600  text-[12px] py-1 px-2 bg-green-100 rounded-xl",children:"Active"}):e.jsx("span",{className:"text-red-600 text-[12px] py-1 px-2 bg-red-100 rounded-xl",children:"Inactive"})},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(V,{rowData:n.original})}],Q=()=>{const[n,a]=y.useState(!1),[l,c]=O.useState({pageIndex:0,pageSize:10}),{data:s,isLoading:r}=z(`per_page=${l.pageSize}&page=${l.pageIndex+1}`),i=(s==null?void 0:s.data)||[],d=s==null?void 0:s.meta;return r?e.jsx(C,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(P,{title:"Financial Year",description:"Manage financial year for you business"}),e.jsxs(o,{onClick:()=>a(!0),size:"sm",children:[e.jsx(R,{className:"mr-2 h-4 w-4"})," Add Financial Year"]})]}),e.jsx(U,{}),i&&e.jsx("div",{children:e.jsx($,{columns:G,data:i,paginationInfo:d,pagination:l,setPagination:c})})]})}),e.jsx(T,{title:"Add Financial Year",isOpen:n,toggleModal:()=>a(!1),children:e.jsx(A,{modalClose:()=>a(!1)})})]})};export{Q as default};
