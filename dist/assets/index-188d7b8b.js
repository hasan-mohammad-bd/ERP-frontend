import{bq as v,G as I,a as e,ax as F,K as E,N as m,Q as g,V as y,W as u,I as w,X as j,Y as h,ay as x,r as N,aC as p,aD as f,aE as S,aF as P,aG as C,aH as k,aI as R,aJ as M,az as O,aK as T,R as B,aM as L,aN as U,aO as q,aP as z}from"./index-5bbba7cd.js";import{R as G,a as A}from"./radio-group-f7514c7f.js";const K=v.injectEndpoints({endpoints:s=>({getSalaryCategories:s.query({query:a=>`salary-categories?${a}`,providesTags:["salary-categories"]}),createSalaryCategories:s.mutation({query:a=>({url:"salary-categories",method:"POST",body:a}),invalidatesTags:["salary-categories"]}),removeSalaryCategories:s.mutation({query:a=>({url:`salary-categories/${a}`,method:"DELETE"}),invalidatesTags:["salary-categories"]}),updateSalaryCategories:s.mutation({query:({salaryCategoriesId:a,updatedSalaryCategories:t})=>({url:`salary-categories/${a}`,method:"PUT",body:t}),invalidatesTags:["salary-categories"]})}),overrideExisting:!1}),{useGetSalaryCategoriesQuery:$,useCreateSalaryCategoriesMutation:J,useRemoveSalaryCategoriesMutation:H,useUpdateSalaryCategoriesMutation:V}=K;function _({modalClose:s,data:a}){const[t,{isLoading:c}]=J(),[l,{isLoading:i}]=V();console.log(a);const o=I({defaultValues:{name:(a==null?void 0:a.name)||"",short_code:(a==null?void 0:a.short_code)||"",type:(a==null?void 0:a.type)||"Allowance"}}),d=async r=>{try{if(a){const n={name:r.name,short_code:r.short_code,type:r.type};await l({salaryCategoriesId:a.id,updatedSalaryCategories:n}).unwrap(),x.success("Salary breakup created successfully!"),s()}else{const n={name:r.name,short_code:r.short_code,type:r.type};await t(n).unwrap(),x.success("Salary breakup created successfully!"),s()}o.reset()}catch(n){x.error("Failed to create salary breakup."),console.error("Error creating salary breakup:",n)}};return e.jsx(e.Fragment,{children:c||i?e.jsx("div",{className:"h-56",children:e.jsx(F,{})}):e.jsx(E,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(d),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1",children:[e.jsx(m,{control:o.control,name:"name",render:({field:r})=>e.jsxs(g,{children:[e.jsx(y,{children:"Salary Breakup Name"}),e.jsx(u,{children:e.jsx(w,{placeholder:"Enter Salary Breakup Name",...r})}),e.jsx(j,{})]})}),e.jsx(m,{control:o.control,name:"short_code",render:({field:r})=>e.jsxs(g,{children:[e.jsx(y,{children:"Short Code"}),e.jsx(u,{children:e.jsx(w,{placeholder:"Enter Short Code",...r})}),e.jsx(j,{})]})})]}),e.jsx(m,{control:o.control,name:"type",render:({field:r})=>e.jsxs(g,{children:[e.jsx(y,{children:"Type"}),e.jsx(u,{children:e.jsxs(G,{className:"flex flex-row gap-4",onValueChange:r.onChange,value:r.value,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(A,{value:"Allowance",id:"allowance"}),e.jsx("label",{htmlFor:"allowance",className:"text-sm font-medium ",children:"Allowance"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(A,{value:"Deduction",id:"deduction"}),e.jsx("label",{htmlFor:"deduction",className:"text-sm font-medium ",children:"Deduction"})]})]})}),e.jsx(j,{})]})}),e.jsx("div",{className:"text-right",children:e.jsx(h,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function Q({data:s}){const[a,t]=N.useState(!1),[c,l]=N.useState(!1),[i,{isLoading:o}]=H(),d=async n=>{try{await i(n).unwrap(),x.success("Job deleted successfully"),t(!1)}catch(b){console.log(b),O(b)}},r=s.is_default===0;return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(p,{children:e.jsxs(f,{children:[e.jsx(S,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(P,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Update Job Post"})})]})}),r?e.jsx(p,{children:e.jsxs(f,{children:[e.jsx(S,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(k,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Delete Requisition"})})]})}):e.jsx(p,{children:e.jsxs(f,{children:[e.jsx(S,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"icon",className:"hover:bg-secondary",disabled:!0,children:e.jsx(k,{className:"h-4 w-4 text-gray-400"})})}),e.jsx(C,{children:e.jsx("p",{children:"Cannot delete default category"})})]})}),e.jsx(R,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>d(s.id),loading:o}),c&&e.jsx(M,{title:"Update Salary BreakUp",isOpen:c,toggleModal:()=>l(!1),className:"max-w-xl",children:e.jsx(_,{data:{id:s.id,name:s.name,short_code:s.short_code||"",type:s.type,is_default:s.is_default.toString()},modalClose:()=>l(!1)})})]})}const W=[{id:"select",header:({table:s})=>e.jsx(T,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(T,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Salary Category"},{accessorKey:"short_code",header:"Short code"},{accessorKey:"type",header:"Type"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Q,{data:s.original})}],Z=()=>{const[s,a]=N.useState(!1),[t,c]=B.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=$(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),o=(l==null?void 0:l.data)||[],d=l==null?void 0:l.meta;return i?e.jsx(F,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(L,{title:"Salary Breakup",description:"Manage job apply for you business"}),e.jsxs(h,{onClick:()=>a(!0),size:"sm",children:[e.jsx(U,{className:"mr-2 h-4 w-4"})," Add Salary Breakup"]})]}),e.jsx(q,{}),o&&e.jsx("div",{children:e.jsx(z,{columns:W,data:o,paginationInfo:d,pagination:t,setPagination:c})})]})}),s&&e.jsx(M,{title:"Add Salary Breakup",isOpen:s,toggleModal:()=>a(!1),className:"",children:e.jsx(_,{modalClose:()=>a(!1)})})]})};export{Z as default};
