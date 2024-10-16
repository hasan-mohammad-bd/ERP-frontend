import{r as p,aJ as V,W as $,X as v,aK as R,aL as C,a as e,Z as O,_ as z,$ as m,a0 as g,a1 as j,a2 as N,I as _,a3 as y,y as b,z as w,B as u,D as H,aE as P,E as F,F as k,a4 as E,aM as K,a6 as M,a7 as T,a8 as A,a9 as U,aa as I,ab as B,ac as J,ad as G,ae as L,aB as Q,R as W,aN as X,af as Z,t as q,ag as Y,ah as D}from"./index-d05f3131.js";function ee({modalClose:s,data:a}){const[r,d]=p.useState({start_date:!1,end_date:!1}),[i,{isLoading:x}]=V(),n=$({resolver:v(R),defaultValues:{name:(a==null?void 0:a.name)||"",start_date:a!=null&&a.start_date?C(a.start_date.toString()):void 0,end_date:a!=null&&a.end_date?C(a.end_date.toString()):void 0,duration:(a==null?void 0:a.duration)||"",note:(a==null?void 0:a.note)||""}}),c=(t,l)=>{if(t&&l){const o=l.getTime()-t.getTime(),h=Math.ceil(o/(1e3*60*60*24));return`${h+1} day${h===0?"":"s"}`}return""};async function S(t){try{a&&(await i({holidayId:a.id,updatedHoliday:t}).unwrap(),E.success("Holiday updated successfully"),s())}catch(l){console.log(l)}}const f=t=>{d(l=>({...l,[t]:!l[t]}))};return p.useEffect(()=>{const t=n.getValues("start_date"),l=n.getValues("end_date");if(t&&l){const o=c(t,l);n.setValue("duration",o)}},[n]),e.jsx(e.Fragment,{children:x?e.jsx("div",{className:"h-56",children:e.jsx(O,{})}):e.jsx(z,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(S),className:"space-y-3 mb-auto",children:[e.jsx(m,{control:n.control,name:"name",render:({field:t})=>e.jsxs(g,{children:[e.jsx(j,{children:"Holiday Name"}),e.jsx(N,{children:e.jsx(_,{type:"text",placeholder:"Enter holiday name",...t})}),e.jsx(y,{})]})}),e.jsx(m,{control:n.control,name:"start_date",render:({field:t})=>e.jsxs(g,{children:[e.jsx(j,{children:"Start Date"}),e.jsxs(b,{open:r.start_date,onOpenChange:()=>f("start_date"),children:[e.jsx(w,{asChild:!0,children:e.jsxs(u,{variant:"outline",className:`w-full justify-start text-left font-normal ${!t.value&&"text-muted-foreground"}`,children:[t.value?H(t.value,"PP"):"Pick a date",e.jsx(P,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(F,{className:"w-auto p-0",align:"start",children:e.jsx(k,{mode:"single",selected:t.value??void 0,onSelect:l=>{t.onChange(l);const o=n.getValues("end_date");if(l&&o){const h=c(l,o);n.setValue("duration",h)}},initialFocus:!0})})]}),e.jsx(y,{})]})}),e.jsx(m,{control:n.control,name:"end_date",render:({field:t})=>e.jsxs(g,{children:[e.jsx(j,{children:"End Date"}),e.jsxs(b,{open:r.end_date,onOpenChange:()=>f("end_date"),children:[e.jsx(w,{asChild:!0,children:e.jsxs(u,{variant:"outline",className:`w-full justify-start text-left font-normal ${!t.value&&"text-muted-foreground"}`,children:[t.value?H(t.value,"PP"):"Pick a date",e.jsx(P,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(F,{className:"w-auto p-0",align:"start",children:e.jsx(k,{mode:"single",selected:t.value??void 0,disabled:l=>{const o=n.getValues("start_date");return!!(o&&l<o)},onSelect:l=>{t.onChange(l);const o=n.getValues("start_date");if(o&&l){const h=c(o,l);n.setValue("duration",h)}},initialFocus:!0})})]}),e.jsx(y,{})]})}),e.jsx(m,{control:n.control,name:"duration",render:({field:t})=>e.jsxs(g,{children:[e.jsx(j,{children:"Duration"}),e.jsx(N,{children:e.jsx(_,{type:"text",placeholder:"Duration",...t,value:t.value||"",disabled:!0})}),e.jsx(y,{})]})}),e.jsx(m,{control:n.control,name:"note",render:({field:t})=>e.jsxs(g,{children:[e.jsx(j,{children:"Note"}),e.jsx(N,{children:e.jsx(_,{type:"text",placeholder:"Enter note",...t})}),e.jsx(y,{})]})}),e.jsx("div",{children:e.jsx(u,{variant:"default",type:"submit",className:"w-full mt-4",children:"Update"})})]})})})}function ae({data:s}){const[a,r]=p.useState(!1),[d,i]=p.useState(!1),[x,{isLoading:n}]=K(),c=async S=>{try{await x(S),E.success("Holiday deleted successfully"),r(!1)}catch(f){console.log(f)}};return console.log(s),e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(M,{children:e.jsxs(T,{children:[e.jsx(A,{asChild:!0,children:e.jsx(u,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>i(!0),children:e.jsx(U,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Update Holiday"})})]})}),e.jsx(M,{children:e.jsxs(T,{children:[e.jsx(A,{asChild:!0,children:e.jsx(u,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{r(!0)},children:e.jsx(B,{className:"h-4 w-4 text-foreground"})})}),e.jsx(I,{children:e.jsx("p",{children:"Delete Holiday"})})]})}),e.jsx(J,{title:"Are you sure?",description:"This action cannot be undone.",name:s==null?void 0:s.name,isOpen:a,onClose:()=>r(!1),onConfirm:()=>c(s.id),loading:n}),d&&e.jsx(G,{title:"Update Holiday",isOpen:d,toggleModal:()=>i(!1),children:e.jsx(ee,{data:s,modalClose:()=>i(!1)})})]})}const te=[{id:"select",header:({table:s})=>e.jsx(L,{checked:s.getIsAllPageRowsSelected()||s.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:s})=>e.jsx(L,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Name"},{accessorKey:"start_date",header:"Start Date",cell:({row:s})=>{const a=s.original.start_date;return a?new Date(a).toLocaleDateString():"N/A"}},{accessorKey:"end_date",header:"End Date",cell:({row:s})=>{const a=s.original.end_date;return a?new Date(a).toLocaleDateString():"N/A"}},{accessorKey:"duration",header:"Duration"},{accessorKey:"note",header:"Note"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:s})=>e.jsx(ae,{data:s.original})}],ne=()=>{const s=Q(),[a,r]=W.useState({pageIndex:0,pageSize:10}),{data:d,isLoading:i}=X(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),x=(d==null?void 0:d.data.map(c=>({...c,id:c.id||0})))||[],n=d==null?void 0:d.meta;return i?e.jsx(O,{}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(Z,{title:x.length?"Holiday List":"Add Holiday",description:"Manage your holidays"}),e.jsxs(u,{size:"sm",onClick:()=>s("/hrm/holidays/add"),children:[e.jsx(q,{className:"mr-2 h-4 w-4"})," Add Holiday"]})]}),e.jsx(Y,{}),x.length>0&&e.jsx(D,{columns:te,data:x,paginationInfo:n,pagination:a,setPagination:r})]})})})};export{ne as default};
