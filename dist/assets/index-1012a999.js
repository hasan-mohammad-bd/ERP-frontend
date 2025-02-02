import{bq as v,bE as _,G as q,H as z,bF as H,a as e,ax as f,K,N as C,Q as b,V as F,W as N,I as U,ay as u,X as T,b4 as $,b5 as G,b6 as V,b7 as Q,b9 as J,Y as j,r as S,aC as M,aD as A,aE as I,aF as B,aG as w,aH as W,aI as X,aJ as L,aK as E,R as Y,aM as Z,aN as D,aO as ee,aP as se}from"./index-5bbba7cd.js";import{b as te}from"./index-24dfa33c.js";const ae=v.injectEndpoints({endpoints:s=>({getRosters:s.query({query:t=>`rosters?${t}`,providesTags:["rosters"]}),createRoster:s.mutation({query:t=>({url:"rosters",method:"POST",body:t}),invalidatesTags:["rosters"]}),removeRoster:s.mutation({query:t=>({url:`rosters/${t}`,method:"DELETE"}),invalidatesTags:["rosters"]}),updateRoster:s.mutation({query:({rosterId:t,updatedRoster:r})=>({url:`rosters/${t}`,method:"PUT",body:r}),invalidatesTags:["rosters"]})}),overrideExisting:!1}),{useGetRostersQuery:re,useCreateRosterMutation:ne,useRemoveRosterMutation:oe,useUpdateRosterMutation:le}=ae;function O({modalClose:s,data:t}){var y,R;const[r,{isLoading:c}]=ne(),[a,{isLoading:x}]=le(),{data:l}=te("page=1&per_page=1000"),h=(l==null?void 0:l.data)||[],{data:i,isLoading:p}=_("page=1&per_page=1000"),g=(i==null?void 0:i.data)||[],m=q({resolver:z(H),defaultValues:{date:((y=t==null?void 0:t.date)==null?void 0:y.date)||"",schedule_id:((R=t==null?void 0:t.schedule)==null?void 0:R.id)||1}}),P=o=>h.some(n=>n.duration===o);async function k(o){try{t?(await a({rosterId:t.id,updatedRoster:o}),u.success("Roster updated successfully"),s()):(await r(o),u.success("Roster created successfully"),s())}catch(n){console.log(n)}}return e.jsx(e.Fragment,{children:c||x?e.jsx("div",{className:"h-56",children:e.jsx(f,{})}):e.jsx(K,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(k),className:"w-full space-y-3",children:[e.jsx(C,{control:m.control,name:"date",render:({field:o})=>e.jsxs(b,{children:[e.jsx(F,{children:"Date"}),e.jsx(N,{children:e.jsx(U,{type:"date",placeholder:"Enter date",...o,onChange:n=>{const d=n.target.value;P(d)?(n.preventDefault(),u.error(`${d} is a holiday`)):o.onChange(n)}})}),e.jsx(T,{})]})}),e.jsx(C,{control:m.control,name:"schedule_id",render:({field:o})=>{var n;return e.jsxs(b,{children:[e.jsx(F,{children:" Schedule"}),e.jsxs($,{onValueChange:o.onChange,defaultValue:(n=t==null?void 0:t.schedule)!=null&&n.id?String(t.schedule.id):void 0,children:[e.jsx(N,{children:e.jsx(G,{children:e.jsx(V,{placeholder:"Select Schedule"})})}),e.jsx(Q,{children:p?e.jsx(f,{}):g==null?void 0:g.map(d=>e.jsx(J,{value:String(d.id),children:d.name},d.id))})]}),e.jsx(T,{})]})}}),e.jsx("div",{children:e.jsx(j,{variant:"default",type:"submit",className:"w-full mt-4",children:t?"Update":"Add"})})]})})})}function ce({data:s}){var i;const[t,r]=S.useState(!1),[c,a]=S.useState(!1),[x,{isLoading:l}]=oe(),h=async p=>{try{await x(p),u.success("Roster deleted successfully"),r(!1)}catch(g){console.log(g)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(M,{children:e.jsxs(A,{children:[e.jsx(I,{asChild:!0,children:e.jsx(j,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Update Section"})})]})}),e.jsx(M,{children:e.jsxs(A,{children:[e.jsx(I,{asChild:!0,children:e.jsx(j,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{r(!0)},children:e.jsx(W,{className:"h-4 w-4 text-foreground"})})}),e.jsx(w,{children:e.jsx("p",{children:"Delete Schedule"})})]})}),e.jsx(X,{title:"Are you sure?",description:"This action cannot be undone.",name:(i=s==null?void 0:s.date)==null?void 0:i.date,isOpen:t,onClose:()=>r(!1),onConfirm:()=>h(s.id),loading:l}),c&&e.jsx(L,{title:"Update Roster",isOpen:c,toggleModal:()=>a(!1),children:e.jsx(O,{data:s,modalClose:()=>a(!1)})})]})}const ie=[{id:"select",header:({table:s})=>e.jsx(E,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:t=>s.toggleAllPageRowsSelected(!!t),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(E,{checked:s.getIsSelected(),onCheckedChange:t=>s.toggleSelected(!!t),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"",accessorFn:({date:s})=>s==null?void 0:s.date,header:"Date"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.start_time,header:"Schedule Start time"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.end_time,header:"Schedule End time"},{accessorKey:"",accessorFn:({schedule:s})=>s==null?void 0:s.hour,header:"Schedule Hour"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(ce,{data:s.original})}],he=()=>{const[s,t]=S.useState(!1),[r,c]=Y.useState({pageIndex:0,pageSize:10}),{data:a,isLoading:x}=re(`per_page=${r.pageSize}&page=${r.pageIndex+1}`),l=(a==null?void 0:a.data)||[],h=a==null?void 0:a.meta;return x?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Z,{title:"Roster",description:"Manage roster for you organization"}),e.jsxs(j,{onClick:()=>t(!0),size:"sm",children:[e.jsx(D,{className:"mr-2 h-4 w-4"})," Add Roster"]})]}),e.jsx(ee,{}),l&&e.jsx("div",{children:e.jsx(se,{columns:ie,data:l,paginationInfo:h,pagination:r,setPagination:c})})]})}),s&&e.jsx(L,{title:"Add Roster",isOpen:s,toggleModal:()=>t(!1),children:e.jsx(O,{modalClose:()=>t(!1)})})]})};export{he as default};
