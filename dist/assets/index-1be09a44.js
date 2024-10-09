import{ar as v,aK as _,V as $,W as z,b5 as U,a as e,Y as f,Z as q,_ as C,$ as b,a0 as F,a1 as T,I as K,a3 as u,a2 as N,aj as V,ak as H,al as G,am as Q,an as B,B as j,r as S,a5 as A,a6 as M,a7 as w,a8 as J,a9 as I,aa as W,ab as Y,ac as k,ad as L,R as Z,ae as X,t as D,af as ee,ag as se}from"./index-96b0e7a7.js";import{u as ae}from"./index-bfeb93fd.js";const te=v.injectEndpoints({endpoints:s=>({getRosters:s.query({query:a=>`rosters?${a}`,providesTags:["rosters"]}),createRoster:s.mutation({query:a=>({url:"rosters",method:"POST",body:a}),invalidatesTags:["rosters"]}),removeRoster:s.mutation({query:a=>({url:`rosters/${a}`,method:"DELETE"}),invalidatesTags:["rosters"]}),updateRoster:s.mutation({query:({rosterId:a,updatedRoster:r})=>({url:`rosters/${a}`,method:"PUT",body:r}),invalidatesTags:["rosters"]})}),overrideExisting:!1}),{useGetRostersQuery:re,useCreateRosterMutation:ne,useRemoveRosterMutation:oe,useUpdateRosterMutation:le}=te;function E({modalClose:s,data:a}){var y,R;const[r,{isLoading:c}]=ne(),[t,{isLoading:x}]=le(),{data:l}=_("page=1&per_page=1000"),h=(l==null?void 0:l.data)||[],{data:i,isLoading:p}=ae("page=1&per_page=1000"),g=(i==null?void 0:i.data)||[],m=$({resolver:z(U),defaultValues:{date:((y=a==null?void 0:a.date)==null?void 0:y.date)||"",schedule_id:((R=a==null?void 0:a.schedule)==null?void 0:R.id)||1}}),O=o=>h.some(n=>n.duration===o);async function P(o){try{a?(await t({rosterId:a.id,updatedRoster:o}),u.success("Roster updated successfully"),s()):(await r(o),u.success("Roster created successfully"),s())}catch(n){console.log(n)}}return e.jsx(e.Fragment,{children:c||x?e.jsx("div",{className:"h-56",children:e.jsx(f,{})}):e.jsx(q,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(P),className:"w-full space-y-3",children:[e.jsx(C,{control:m.control,name:"date",render:({field:o})=>e.jsxs(b,{children:[e.jsx(F,{children:"Date"}),e.jsx(T,{children:e.jsx(K,{type:"date",placeholder:"Enter date",...o,onChange:n=>{const d=n.target.value;O(d)?(n.preventDefault(),u.error(`${d} is a holiday`)):o.onChange(n)}})}),e.jsx(N,{})]})}),e.jsx(C,{control:m.control,name:"schedule_id",render:({field:o})=>{var n;return e.jsxs(b,{children:[e.jsx(F,{children:" Schedule"}),e.jsxs(V,{onValueChange:o.onChange,defaultValue:(n=a==null?void 0:a.schedule)!=null&&n.id?String(a.schedule.id):void 0,children:[e.jsx(T,{children:e.jsx(H,{children:e.jsx(G,{placeholder:"Select Schedule"})})}),e.jsx(Q,{children:p?e.jsx(f,{}):g==null?void 0:g.map(d=>e.jsx(B,{value:String(d.id),children:d.name},d.id))})]}),e.jsx(N,{})]})}}),e.jsx("div",{children:e.jsx(j,{variant:"default",type:"submit",className:"w-full mt-4",children:a?"Update":"Add"})})]})})})}function ce({data:s}){var i;const[a,r]=S.useState(!1),[c,t]=S.useState(!1),[x,{isLoading:l}]=oe(),h=async p=>{try{await x(p),u.success("Roster deleted successfully"),r(!1)}catch(g){console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(A,{children:e.jsxs(M,{children:[e.jsx(w,{asChild:!0,children:e.jsx(j,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>t(!0),children:e.jsx(J,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(A,{children:e.jsxs(M,{children:[e.jsx(w,{asChild:!0,children:e.jsx(j,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{r(!0)},children:e.jsx(W,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(Y,{title:"Are you sure?",description:"This action cannot be undone.",name:(i=s==null?void 0:s.date)==null?void 0:i.date,isOpen:a,onClose:()=>r(!1),onConfirm:()=>h(s.id),loading:l}),c&&e.jsx(k,{title:"Update Roster",isOpen:c,toggleModal:()=>t(!1),children:e.jsx(E,{data:s,modalClose:()=>t(!1)})})]})}const ie=[{id:"select",header:({table:s})=>e.jsx(L,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(L,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"",accessorFn:({date:s})=>s==null?void 0:s.date,header:"Date"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.start_time,header:"Schedule Start time"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.end_time,header:"Schedule End time"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.hour,header:"Schedule Hour"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(ce,{data:s.original})}],he=()=>{const[s,a]=S.useState(!1),[r,c]=Z.useState({pageIndex:0,pageSize:10}),{data:t,isLoading:x}=re(`per_page=${r.pageSize}&page=${r.pageIndex+1}`),l=(t==null?void 0:t.data)||[],h=t==null?void 0:t.meta;return x?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(X,{title:"Roster",description:"Manage roster for you organization"}),e.jsxs(j,{onClick:()=>a(!0),size:"sm",children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Roster"]})]}),e.jsx(ee,{}),l&&e.jsx("div",{children:e.jsx(se,{columns:ie,data:l,paginationInfo:h,pagination:r,setPagination:c})})]})}),s&&e.jsx(k,{title:"Add Roster",isOpen:s,toggleModal:()=>a(!1),children:e.jsx(E,{modalClose:()=>a(!1)})})]})};export{he as default};
