import{bc as I,Y as E,a as e,$ as A,a0 as B,a1 as g,a2 as m,a3 as y,a4 as j,I as w,a5 as u,bv as P,bw as k,B as x,a6 as h,r as b,a9 as p,aa as f,ab as S,ac as R,ad as C,ae as _,af as v,ag as F,a7 as L,ah as T,R as O,aj as U,t as q,ak as z,al as $}from"./index-08ea88e0.js";const G=I.injectEndpoints({endpoints:s=>({getSalaryCategories:s.query({query:a=>`salary-categories?${a}`,providesTags:["salary-categories"]}),createSalaryCategories:s.mutation({query:a=>({url:"salary-categories",method:"POST",body:a}),invalidatesTags:["salary-categories"]}),removeSalaryCategories:s.mutation({query:a=>({url:`salary-categories/${a}`,method:"DELETE"}),invalidatesTags:["salary-categories"]}),updateSalaryCategories:s.mutation({query:({salaryCategoriesId:a,updatedSalaryCategories:t})=>({url:`salary-categories/${a}`,method:"PUT",body:t}),invalidatesTags:["salary-categories"]})}),overrideExisting:!1}),{useGetSalaryCategoriesQuery:J,useCreateSalaryCategoriesMutation:K,useRemoveSalaryCategoriesMutation:H,useUpdateSalaryCategoriesMutation:V}=G;function M({modalClose:s,data:a}){const[t,{isLoading:c}]=K(),[l,{isLoading:i}]=V();console.log(a);const n=E({defaultValues:{name:(a==null?void 0:a.name)||"",short_code:(a==null?void 0:a.short_code)||"",type:(a==null?void 0:a.type)||"Allowance",sorting_index:a==null?void 0:a.sorting_index}}),d=async r=>{try{if(a){const o={name:r.name,short_code:r.short_code,type:r.type,sorting_index:r.sorting_index};await l({salaryCategoriesId:a.id,updatedSalaryCategories:o}).unwrap(),h.success("Salary breakup created successfully!"),s()}else{const o={name:r.name,short_code:r.short_code,type:r.type};await t(o).unwrap(),h.success("Salary breakup created successfully!"),s()}n.reset()}catch(o){h.error("Failed to create salary breakup."),console.error("Error creating salary breakup:",o)}};return e.jsx(e.Fragment,{children:c||i?e.jsx("div",{className:"h-56",children:e.jsx(A,{})}):e.jsx(B,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(d),className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1",children:[e.jsx(g,{control:n.control,name:"name",render:({field:r})=>e.jsxs(m,{children:[e.jsx(y,{children:"Salary Breakup Name"}),e.jsx(j,{children:e.jsx(w,{placeholder:"Enter Salary Breakup Name",...r})}),e.jsx(u,{})]})}),e.jsx(g,{control:n.control,name:"short_code",render:({field:r})=>e.jsxs(m,{children:[e.jsx(y,{children:"Short Code"}),e.jsx(j,{children:e.jsx(w,{placeholder:"Enter Short Code",...r})}),e.jsx(u,{})]})})]}),e.jsx(g,{control:n.control,name:"type",render:({field:r})=>e.jsxs(m,{children:[e.jsx(y,{children:"Type"}),e.jsx(j,{children:e.jsxs(P,{className:"flex flex-row gap-4",onValueChange:r.onChange,value:r.value,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(k,{value:"Allowance",id:"allowance"}),e.jsx("label",{htmlFor:"allowance",className:"text-sm font-medium ",children:"Allowance"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(k,{value:"Deduction",id:"deduction"}),e.jsx("label",{htmlFor:"deduction",className:"text-sm font-medium ",children:"Deduction"})]})]})}),e.jsx(u,{})]})}),e.jsx("div",{className:"text-right",children:e.jsx(x,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function Q({data:s}){const[a,t]=b.useState(!1),[c,l]=b.useState(!1),[i,{isLoading:n}]=H(),d=async o=>{try{await i(o).unwrap(),h.success("Job deleted successfully"),t(!1)}catch(N){console.log(N),L(N)}},r=s.is_default===0;return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(p,{children:e.jsxs(f,{children:[e.jsx(S,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>l(!0),children:e.jsx(R,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Update Job Post"})})]})}),r?e.jsx(p,{children:e.jsxs(f,{children:[e.jsx(S,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(_,{className:"h-4 w-4 text-foreground"})})}),e.jsx(C,{children:e.jsx("p",{children:"Delete Requisition"})})]})}):e.jsx(p,{children:e.jsxs(f,{children:[e.jsx(S,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"icon",className:"hover:bg-secondary",disabled:!0,children:e.jsx(_,{className:"h-4 w-4 text-gray-400"})})}),e.jsx(C,{children:e.jsx("p",{children:"Cannot delete default category"})})]})}),e.jsx(v,{title:"Are you sure?",description:"This action cannot be undone.",name:s.name,isOpen:a,onClose:()=>t(!1),onConfirm:()=>d(s.id),loading:n}),c&&e.jsx(F,{title:"Update Salary BreakUp",isOpen:c,toggleModal:()=>l(!1),className:"max-w-xl",children:e.jsx(M,{data:{id:s.id,name:s.name,short_code:s.short_code||"",type:s.type,is_default:s.is_default.toString(),sorting_index:s.sorting_index},modalClose:()=>l(!1)})})]})}const Y=[{id:"select",header:({table:s})=>e.jsx(T,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(T,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Salary Category"},{accessorKey:"short_code",header:"Short code"},{accessorKey:"type",header:"Type"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(Q,{data:s.original})}],X=()=>{const[s,a]=b.useState(!1),[t,c]=O.useState({pageIndex:0,pageSize:10}),{data:l,isLoading:i}=J(`per_page=${t.pageSize}&page=${t.pageIndex+1}`),n=(l==null?void 0:l.data)||[],d=l==null?void 0:l.meta;return i?e.jsx(A,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(U,{title:"Salary Breakup",description:"Manage job apply for you business"}),e.jsxs(x,{onClick:()=>a(!0),size:"sm",children:[e.jsx(q,{className:"mr-2 h-4 w-4"})," Add Salary Breakup"]})]}),e.jsx(z,{}),n&&e.jsx("div",{children:e.jsx($,{columns:Y,data:n,paginationInfo:d,pagination:t,setPagination:c})})]})}),s&&e.jsx(F,{title:"Add Salary Breakup",isOpen:s,toggleModal:()=>a(!1),className:"",children:e.jsx(M,{modalClose:()=>a(!1)})})]})};export{X as default};
