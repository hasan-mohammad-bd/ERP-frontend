import{aD as P,a7 as z,a8 as _,a as e,$ as f,a9 as $,aa as C,ab as F,ac as T,ad as b,I as q,ag as u,ae as N,av as U,aw as H,ax as K,ay as V,az as G,B as j,aW as Q,r as S,ah as w,ai as A,aj as M,ak as B,al as I,am as J,an as W,ao as k,ap as L,R as X,aq as Y,t as Z,ar as D,as as ee}from"./index-4c394285.js";import{u as se}from"./index-79717aea.js";import{c as ae}from"./index-1863ca3b.js";const te=P.injectEndpoints({endpoints:s=>({getRosters:s.query({query:a=>`rosters?${a}`,providesTags:["rosters"]}),createRoster:s.mutation({query:a=>({url:"rosters",method:"POST",body:a}),invalidatesTags:["rosters"]}),removeRoster:s.mutation({query:a=>({url:`rosters/${a}`,method:"DELETE"}),invalidatesTags:["rosters"]}),updateRoster:s.mutation({query:({rosterId:a,updatedRoster:r})=>({url:`rosters/${a}`,method:"PUT",body:r}),invalidatesTags:["rosters"]})}),overrideExisting:!1}),{useGetRostersQuery:re,useCreateRosterMutation:ne,useRemoveRosterMutation:oe,useUpdateRosterMutation:le}=te;function v({modalClose:s,data:a}){var y,R;const[r,{isLoading:d}]=ne(),[t,{isLoading:x}]=le(),{data:l}=ae("page=1&per_page=1000"),h=(l==null?void 0:l.data)||[],{data:c,isLoading:p}=se("page=1&per_page=1000"),g=(c==null?void 0:c.data)||[],m=z({resolver:_(Q),defaultValues:{date:((y=a==null?void 0:a.date)==null?void 0:y.date)||"",schedule_id:((R=a==null?void 0:a.schedule)==null?void 0:R.id)||1}}),E=o=>h.some(n=>n.date.date===o);async function O(o){try{a?(await t({rosterId:a.id,updatedRoster:o}),u.success("Roster updated successfully"),s()):(await r(o),u.success("Roster created successfully"),s())}catch(n){console.log(n)}}return e.jsx(e.Fragment,{children:d||x?e.jsx("div",{className:"h-56",children:e.jsx(f,{})}):e.jsx($,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(O),className:"w-full space-y-3",children:[e.jsx(C,{control:m.control,name:"date",render:({field:o})=>e.jsxs(F,{children:[e.jsx(T,{children:"Date"}),e.jsx(b,{children:e.jsx(q,{type:"date",placeholder:"Enter date",...o,onChange:n=>{const i=n.target.value;E(i)?(n.preventDefault(),u.error(`${i} is a holiday`)):o.onChange(n)}})}),e.jsx(N,{})]})}),e.jsx(C,{control:m.control,name:"schedule_id",render:({field:o})=>{var n;return e.jsxs(F,{children:[e.jsx(T,{children:" Schedule"}),e.jsxs(U,{onValueChange:o.onChange,defaultValue:(n=a==null?void 0:a.schedule)!=null&&n.id?String(a.schedule.id):void 0,children:[e.jsx(b,{children:e.jsx(H,{children:e.jsx(K,{placeholder:"Select Schedule"})})}),e.jsx(V,{children:p?e.jsx(f,{}):g==null?void 0:g.map(i=>e.jsx(G,{value:String(i.id),children:i.name},i.id))})]}),e.jsx(N,{})]})}}),e.jsx("div",{children:e.jsx(j,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function ce({data:s}){var c;const[a,r]=S.useState(!1),[d,t]=S.useState(!1),[x,{isLoading:l}]=oe(),h=async p=>{try{await x(p),u.success("Roster deleted successfully"),r(!1)}catch(g){console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(w,{children:e.jsxs(A,{children:[e.jsx(M,{asChild:!0,children:e.jsx(j,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(w,{children:e.jsxs(A,{children:[e.jsx(M,{asChild:!0,children:e.jsx(j,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{r(!0)},children:e.jsx(J,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(W,{title:"Are you sure?",description:"This action cannot be undone.",name:(c=s==null?void 0:s.date)==null?void 0:c.date,isOpen:a,onClose:()=>r(!1),onConfirm:()=>h(s.id),loading:l}),e.jsx(k,{title:"Update Roster",isOpen:d,toggleModal:()=>t(!1),children:e.jsx(v,{data:s,modalClose:()=>t(!1)})})]})}const ie=[{id:"select",header:({table:s})=>e.jsx(L,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(L,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"",accessorFn:({date:s})=>s==null?void 0:s.date,header:"Date"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.start_time,header:"Schedule Start time"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.end_time,header:"Schedule End time"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.hour,header:"Schedule Hour"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(ce,{data:s.original})}],ge=()=>{const[s,a]=S.useState(!1),[r,d]=X.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:x}=re(`per_page=${r.pageSize}&page=${r.pageIndex+1}`),l=(t==null?void 0:t.data)||[],h=t==null?void 0:t.meta;return x?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Y,{title:"Roster",description:"Manage roster for you organization"}),e.jsxs(j,{onClick:()=>a(!0),size:"sm",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"})," Add Roster"]})]}),e.jsx(D,{}),l&&e.jsx("div",{children:e.jsx(ee,{columns:ie,data:l,paginationInfo:h,pagination:r,setPagination:d})})]})}),e.jsx(k,{title:"Add Roster",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(v,{modalClose:()=>a(!1)})})]})};export{ge as default};
