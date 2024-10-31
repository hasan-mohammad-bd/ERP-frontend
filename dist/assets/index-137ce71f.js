import{bh as be,bi as Ce,bj as Se,bk as Ne,$,a0 as q,bl as he,a as e,a2 as M,a3 as Z,V as W,W as X,a4 as i,a5 as l,a6 as c,a7 as r,I as j,a8 as o,aP as U,aQ as R,aR as O,aS as T,aU as K,B as J,a9 as P,r as G,ac as B,ad as z,ae as Q,af as se,ag as H,aj as Y,ak as V,bm as ue,bn as _e,bo as pe,ao as ne,bp as Ee,bq as we,aA as Ae,br as Me,bs as je,bt as Pe,bu as Je,bv as Ie,bw as de,bx as F,by as Le,aC as Fe,bz as Ve,K as Ue,M as Re,N as k,Q as v,U as D,Y as Oe,X as ee,bA as Te,ah as Ke,ai as Ge,R as Be,am as ze,t as Qe,an as He}from"./index-911882cf.js";import{a as $e,b as qe,c as Ze,u as We}from"./index-7fcd66e1.js";import{Z as Xe}from"./zoom-in-162180e1.js";function Ye({previousData:n}){var A,L,le,ce,re,te,ie,oe,xe,ae;const[s,{isLoading:a}]=be(),[u,{isLoading:y}]=Ce(),{data:N,isLoading:b}=Se(),{data:x,isLoading:E}=Ne(),d=(N==null?void 0:N.data)||[],h=(x==null?void 0:x.data)||[],w=$({resolver:q(he),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,country_id:((A=n==null?void 0:n.present_address)==null?void 0:A.country.id)||1,city_id:((L=n==null?void 0:n.present_address)==null?void 0:L.city.id)||1,post_code:((le=n==null?void 0:n.present_address)==null?void 0:le.post_code)||"",address:((ce=n==null?void 0:n.present_address)==null?void 0:ce.address)||"",type:"Present"}}),m=$({resolver:q(he),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,country_id:((re=n==null?void 0:n.permanent_address)==null?void 0:re.country.id)||1,city_id:((te=n==null?void 0:n.permanent_address)==null?void 0:te.city.id)||1,post_code:((ie=n==null?void 0:n.permanent_address)==null?void 0:ie.post_code)||"",address:((oe=n==null?void 0:n.permanent_address)==null?void 0:oe.address)||"",type:"Permanent"}});async function f(g){var C,S;try{(C=n==null?void 0:n.present_address)!=null&&C.id?(await u({addressId:(S=n==null?void 0:n.present_address)==null?void 0:S.id,updatedAddress:g}),P.success("Job Post updated successfully")):(await s(g),P.success("Job Post created successfully"))}catch(_){console.log(_)}}async function t(g){var C,S;try{(C=n==null?void 0:n.permanent_address)!=null&&C.id?(await u({addressId:(S=n==null?void 0:n.permanent_address)==null?void 0:S.id,updatedAddress:g}),P.success("Job Post updated successfully")):(await s(g),P.success("Job Post created successfully"))}catch(_){console.log(_)}}return e.jsx(e.Fragment,{children:a||y?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex items-center h-[535px] gap-x-4",children:[e.jsx("div",{className:"w-1/2",children:e.jsxs(Z,{...w,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Present Address "})}),e.jsxs("form",{onSubmit:w.handleSubmit(f),className:"",children:[e.jsx(i,{control:w.control,name:"address",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Address"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter address",...g})}),e.jsx(o,{})]})}),e.jsx(i,{control:w.control,name:"post_code",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Post Code"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter post code",...g})}),e.jsx(o,{})]})}),e.jsx(i,{control:w.control,name:"country_id",render:({field:g})=>{var C,S,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"Country"}),e.jsxs(U,{onValueChange:g.onChange,defaultValue:(S=(C=n==null?void 0:n.present_address)==null?void 0:C.country)!=null&&S.id?String((I=(_=n.present_address)==null?void 0:_.country)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Country"})})}),e.jsx(T,{children:b?e.jsx(M,{}):d==null?void 0:d.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(o,{})]})}}),e.jsx(i,{control:w.control,name:"city_id",render:({field:g})=>{var C,S,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"City"}),e.jsxs(U,{onValueChange:g.onChange,defaultValue:(S=(C=n==null?void 0:n.present_address)==null?void 0:C.city)!=null&&S.id?String((I=(_=n.present_address)==null?void 0:_.city)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select City"})})}),e.jsx(T,{children:E?e.jsx(M,{}):h==null?void 0:h.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(o,{})]})}}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:(xe=n==null?void 0:n.present_address)!=null&&xe.id?"Update":"Add"})})]})]})}),e.jsx("div",{className:"w-1/2",children:e.jsxs(Z,{...m,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Permanent Address "})}),e.jsxs("form",{onSubmit:m.handleSubmit(t),className:"",children:[e.jsx(i,{control:m.control,name:"address",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Address"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter address",...g})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"post_code",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Post Code"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter post code",...g})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"country_id",render:({field:g})=>{var C,S,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"Country"}),e.jsxs(U,{onValueChange:g.onChange,defaultValue:(S=(C=n==null?void 0:n.permanent_address)==null?void 0:C.country)!=null&&S.id?String((I=(_=n.permanent_address)==null?void 0:_.country)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Country"})})}),e.jsx(T,{children:b?e.jsx(M,{}):d==null?void 0:d.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(o,{})]})}}),e.jsx(i,{control:m.control,name:"city_id",render:({field:g})=>{var C,S,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"City"}),e.jsxs(U,{onValueChange:g.onChange,defaultValue:(S=(C=n==null?void 0:n.permanent_address)==null?void 0:C.city)!=null&&S.id?String((I=(_=n.permanent_address)==null?void 0:_.city)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select City"})})}),e.jsx(T,{children:E?e.jsx(M,{}):h==null?void 0:h.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(o,{})]})}}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:(ae=n==null?void 0:n.permanent_address)!=null&&ae.id?"Update":"Add"})})]})]})})]})})}function ke({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Education"})})]})}),s&&e.jsx(Y,{title:"Update Education",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(me,{data:n,modelClose:()=>a(!1)})})]})}const ve=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"type",header:"Education Type"},{accessorKey:"academy",header:"Academy"},{accessorKey:"grade",header:"Grade"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ke,{data:n.original})}];function me({previousData:n,data:s,modelClose:a}){const[u,{isLoading:y}]=ue(),[N,{isLoading:b}]=_e(),x=$({resolver:q(pe),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,type:(s==null?void 0:s.type)||"",academy:(s==null?void 0:s.academy)||"",title:(s==null?void 0:s.title)||"",degree:(s==null?void 0:s.degree)||"",start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||"",grade:(s==null?void 0:s.grade)||""}});async function E(d){try{s!=null&&s.id?(await N({educationId:s==null?void 0:s.id,updatedEducation:d}),P.success("Job Post updated successfully"),a&&a()):(await u(d),P.success("Job Post created successfully"),x.reset())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:y||b?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...x,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Education "})}),e.jsxs("form",{onSubmit:x.handleSubmit(E),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(i,{control:x.control,name:"type",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Education Type"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter education type(HSC/SSC)",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"academy",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Academy"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Academy",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"title",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Title"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Title",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"degree",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Degree"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter degree",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"start_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"end_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (Optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"grade",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Grade"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Grade",...d})}),e.jsx(o,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:ve,data:(n==null?void 0:n.educations)||[]})})})]})})}function De({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Experience"})})]})}),s&&e.jsx(Y,{title:"Update Experience",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ge,{data:n,modelClose:()=>a(!1)})})]})}const es=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"institution",header:"Institution"},{accessorKey:"designation",header:"Designation"},{accessorKey:"start_date",header:"Start date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(De,{data:n.original})}];function ge({previousData:n,data:s,modelClose:a}){var m;const[u,{isLoading:y}]=Ee(),[N,{isLoading:b}]=we(),{data:x,isLoading:E}=Ae(),d=(x==null?void 0:x.data)||[],h=$({resolver:q(Me),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,institution:(s==null?void 0:s.institution)||"",employment_status_id:((m=s==null?void 0:s.employment_status)==null?void 0:m.id)||2,start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||null,description:(s==null?void 0:s.description)||"",designation:(s==null?void 0:s.designation)||""}});async function w(f){try{s!=null&&s.id?(await N({experienceId:s==null?void 0:s.id,updatedExperience:f}),P.success("Job Post updated successfully"),a&&a()):(await u(f),P.success("Job Post created successfully"),h.reset())}catch(t){console.log(t)}}return e.jsx(e.Fragment,{children:y||b?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...h,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Experience "})}),e.jsxs("form",{onSubmit:h.handleSubmit(w),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(i,{control:h.control,name:"institution",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Institution"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter institution",...f})}),e.jsx(o,{})]})}),e.jsx(i,{control:h.control,name:"employment_status_id",render:({field:f})=>{var t;return e.jsxs(l,{children:[e.jsx(c,{children:"Employment Status"}),e.jsxs(U,{onValueChange:f.onChange,defaultValue:(t=s==null?void 0:s.employment_status)!=null&&t.id?String(s.employment_status.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Employment Status"})})}),e.jsx(T,{children:E?e.jsx(M,{}):d==null?void 0:d.map(A=>e.jsx(K,{value:String(A.id),children:A.name},A.id))})]}),e.jsx(o,{})]})}}),e.jsx(i,{control:h.control,name:"designation",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Designation"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Designation",...f})}),e.jsx(o,{})]})}),e.jsx(i,{control:h.control,name:"description",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Description (optional)"}),e.jsx(r,{children:e.jsx(je,{placeholder:"Enter Description",value:f.value||"",onChange:t=>f.onChange(t.target.value)})}),e.jsx(o,{})]})}),e.jsx(i,{control:h.control,name:"start_date",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...f})}),e.jsx(o,{})]})}),e.jsx(i,{control:h.control,name:"end_date",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",value:f.value||"",onChange:t=>f.onChange(t.target.value)})}),e.jsx(o,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:es,data:(n==null?void 0:n.experiences)||[]})})})]})})}function ss({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Experience"})})]})}),s&&e.jsx(Y,{title:"Update Experience",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ye,{data:n,modelClose:()=>a(!1)})})]})}const ns=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Skill Name"},{accessorKey:"type",header:"Proficiency level"},{accessorKey:"description",header:"Description"},{accessorKey:"start_date",header:"Start date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ss,{data:n.original})}];function ye({previousData:n,data:s,modelClose:a}){const[u,{isLoading:y}]=Pe(),[N,{isLoading:b}]=Je(),x=$({resolver:q(Ie),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,name:(s==null?void 0:s.name)||"",type:(s==null?void 0:s.type)||"",start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||"",description:(s==null?void 0:s.description)||""}});async function E(d){try{s!=null&&s.id?(await N({skillId:s==null?void 0:s.id,updatedSkill:d}),P.success("Job Candidate updated successfully"),a&&a()):(await u(d),P.success("Job Candidate created successfully"),x.reset())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:y||b?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...x,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Skill "})}),e.jsxs("form",{onSubmit:x.handleSubmit(E),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(i,{control:x.control,name:"name",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Skill Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter institution",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"type",render:({field:d})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"Proficiency Level"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:d.onChange,defaultValue:d.value,className:"flex items-center space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Basic"})}),e.jsx(c,{className:"font-normal",children:"Basic"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Medium"})}),e.jsx(c,{className:"font-normal",children:"Medium"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Expert"})}),e.jsx(c,{className:"font-normal",children:"Expert"})]})]})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"description",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Description (optional)"}),e.jsx(r,{children:e.jsx(je,{placeholder:"Enter Description",value:d.value||"",onChange:h=>d.onChange(h.target.value)})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"start_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...d})}),e.jsx(o,{})]})}),e.jsx(i,{control:x.control,name:"end_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",value:d.value||"",onChange:h=>d.onChange(h.target.value)})}),e.jsx(o,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:ns,data:(n==null?void 0:n.skills)||[]})})})]})})}function fe({modalClose:n,data:s}){const[a,{isLoading:u}]=$e(),[y,{isLoading:N}]=qe(),{data:b,isLoading:x}=Le(),{data:E,isLoading:d}=Fe(),h=(b==null?void 0:b.data)||[],w=(E==null?void 0:E.data)||[],m=$({resolver:q(Ve),defaultValues:{first_name:(s==null?void 0:s.first_name)||"",last_name:(s==null?void 0:s.last_name)||"",email:(s==null?void 0:s.email)||"",phone:(s==null?void 0:s.phone)||"",alt_phone:(s==null?void 0:s.alt_phone)||"",nid_type:(s==null?void 0:s.nid_type)||"Nid",nid_number:(s==null?void 0:s.nid_number)||"",marital_status:(s==null?void 0:s.marital_status)||"Married",birth_date:(s==null?void 0:s.birth_date)||"",religion_id:(s==null?void 0:s.religion_id)||1,gender_id:(s==null?void 0:s.gender_id)||1}});async function f(t){try{s?(console.log(s),await y({jobCandidateId:s.id,updatedJobCandidate:t}),P.success("Job Post updated successfully"),n()):(await a(t),P.success("Job Post created successfully"),n())}catch(A){console.log(A)}}return e.jsx(e.Fragment,{children:u||N?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx("div",{children:e.jsxs(Ue,{defaultValue:"basic-info",className:"",children:[e.jsxs(Re,{className:"grid w-full grid-cols-5",children:[e.jsx(k,{value:"basic-info",children:"Basic Info"}),e.jsx(k,{disabled:!s,value:"address",children:"Address"}),e.jsx(k,{disabled:!s,value:"education",children:"Education"}),e.jsx(k,{disabled:!s,value:"experience",children:"Experience"}),e.jsx(k,{disabled:!s,value:"skill",children:"Skill"})]}),e.jsx(v,{value:"basic-info",children:e.jsxs(D,{children:[e.jsxs(W,{children:[e.jsx(X,{children:"Basic information"}),e.jsx(Oe,{children:"Enter the basic information about job candidate."})]}),e.jsx(ee,{className:"space-y-2 ",children:e.jsx(Z,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(f),className:"",children:[e.jsxs("div",{className:"space-y-2 grid grid-cols-3 gap-3",children:[e.jsx(i,{control:m.control,name:"first_name",render:({field:t})=>e.jsxs(l,{children:[e.jsx(c,{children:"First Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter First Name",...t})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"last_name",render:({field:t})=>e.jsxs(l,{children:[e.jsx(c,{children:"Last Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Last Name",...t})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"email",render:({field:t})=>e.jsxs(l,{children:[e.jsx(c,{children:"Email"}),e.jsx(r,{children:e.jsx(j,{type:"email",placeholder:"Enter Email",...t})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"phone",render:({field:t})=>e.jsxs(l,{children:[e.jsx(c,{children:"Phone"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Phone",...t})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"alt_phone",render:({field:t})=>e.jsxs(l,{children:[e.jsx(c,{children:"Alt Phone"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Alt Phone",...t,value:t.value||""})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"nid_type",render:({field:t})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"NID Type"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:t.onChange,defaultValue:t.value,className:"flex items-center justify-between space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Nid"})}),e.jsx(c,{className:"font-normal",children:"NID"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Passport"})}),e.jsx(c,{className:"font-normal",children:"Passport"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"BirthCertificate"})}),e.jsx(c,{className:"font-normal",children:"Birth Certificate"})]})]})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"nid_number",render:({field:t})=>e.jsxs(l,{children:[e.jsx(c,{children:"NID Number"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter NID Number",...t,value:t.value||""})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"marital_status",render:({field:t})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"Marital Status"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:t.onChange,defaultValue:t.value,className:"flex items-center space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Married"})}),e.jsx(c,{className:"font-normal",children:"Married"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Unmarried"})}),e.jsx(c,{className:"font-normal",children:"Unmarried"})]})]})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"birth_date",render:({field:t})=>e.jsxs(l,{children:[e.jsx(c,{children:"Birth Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Birth Date",...t})}),e.jsx(o,{})]})}),e.jsx(i,{control:m.control,name:"religion_id",render:({field:t})=>{var A;return e.jsxs(l,{children:[e.jsx(c,{children:"Religion"}),e.jsxs(U,{onValueChange:t.onChange,defaultValue:(A=s==null?void 0:s.religion)!=null&&A.id?String(s.religion.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Religion"})})}),e.jsx(T,{children:x?e.jsx(M,{}):h==null?void 0:h.map(L=>e.jsx(K,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(o,{})]})}}),e.jsx(i,{control:m.control,name:"gender_id",render:({field:t})=>{var A;return e.jsxs(l,{children:[e.jsx(c,{children:"Gender"}),e.jsxs(U,{onValueChange:t.onChange,defaultValue:(A=s==null?void 0:s.gender)!=null&&A.id?String(s.gender.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Gender"})})}),e.jsx(T,{children:d?e.jsx(M,{}):w==null?void 0:w.map(L=>e.jsx(K,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(o,{})]})}})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})}),e.jsx(Te,{})]})}),e.jsx(v,{value:"address",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(Ye,{previousData:s})})})}),e.jsx(v,{value:"education",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(me,{previousData:s})})})}),e.jsx(v,{value:"experience",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(ge,{previousData:s})})})}),e.jsx(v,{value:"skill",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(ye,{previousData:s})})})})]})})})}const ds=()=>e.jsx("div",{});function ls({data:n}){const[s,a]=G.useState(!1),[u,y]=G.useState(!1),[N,b]=G.useState(!1),[x,{isLoading:E}]=Ze(),d=async h=>{try{await x(h),P.success("Job Candidate deleted successfully"),a(!1)}catch(w){console.log(w)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>y(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{b(!0)},children:e.jsx(Xe,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(Q,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(Ke,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(Ge,{title:"Are you sure?",description:"This action cannot be undone.",name:n.first_name,isOpen:s,onClose:()=>a(!1),onConfirm:()=>d(n.id),loading:E}),u&&e.jsx(Y,{title:"Update Job",isOpen:u,toggleModal:()=>y(!1),className:"w-[90%] max-w-6xl",children:e.jsx(fe,{data:n,modalClose:()=>y(!1)})}),N&&e.jsx(Y,{title:"Job Details",isOpen:N,toggleModal:()=>b(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ds,{})})]})}const cs=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"First name"},{accessorKey:"last_name",header:"Last name"},{accessorKey:"email",header:"Email"},{accessorKey:"phone",header:"Phone"},{accessorKey:"nid_number",header:"NID Number"},{accessorKey:"birth_date",header:"Birth date"},{accessorKey:"marital_status",header:"Marital status"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ls,{data:n.original})}],os=()=>{const[n,s]=G.useState(!1),[a,u]=Be.useState({pageIndex:0,pageSize:10}),{data:y,isLoading:N}=We(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),b=(y==null?void 0:y.data)||[],x=y==null?void 0:y.meta;return N?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(ze,{title:"Job Candidates",description:"Manage job candidates for you business"}),e.jsxs(J,{onClick:()=>s(!0),size:"sm",children:[e.jsx(Qe,{className:"mr-2 h-4 w-4"})," Add Job Candidate"]})]}),e.jsx(He,{}),b&&e.jsx("div",{children:e.jsx(ne,{columns:cs,data:b,paginationInfo:x,pagination:a,setPagination:u})})]})}),n&&e.jsx(Y,{title:"Add Job Candidate",isOpen:n,toggleModal:()=>s(!1),className:"w-[90%] max-w-6xl",children:e.jsx(fe,{modalClose:()=>s(!1)})})]})};export{os as default};
