import{X as Q,Y as q,ak as he,k as e,Z as M,a0 as Z,T as W,U as X,a1 as t,a2 as l,a3 as c,a4 as r,I as j,a5 as i,al as U,am as R,an as T,ao as O,ap as K,K as J,a7 as P,r as G,a8 as B,a9 as z,aa as $,ab as se,ac as H,af as V,aq as Se,ai as ne,ar as be,as as je,aw as Ce,S as k,W as Ne,V as v,aD as _e,aE as ue,ad as pe,ae as Ee,R as we,ag as Ae,P as Me,ah as Pe}from"./index-Df36uixq.js";import{M as Y}from"./modal-iNOZ8d19.js";import{T as Je,a as Ie,b as D,c as ee}from"./tabs-D_zzpaa7.js";import{a as Le,b as Fe,c as Ve,u as Ue}from"./index-DfwlRkfg.js";import{R as de,a as F}from"./radio-group-CcC5USDy.js";import{u as Re,a as Te,b as Oe,c as Ke,d as Ge,e as Be,f as ze,g as $e,h as He,i as Qe,j as qe,k as Ze}from"./index-BDn2Inn3.js";import{u as We}from"./index-CD_6uIZW.js";import{Z as Xe}from"./zoom-in-CIs-gavv.js";import"./sheet-Bk0mowo8.js";function Ye({previousData:n}){var A,L,le,ce,re,te,ie,oe,xe,ae;const[s,{isLoading:a}]=Re(),[p,{isLoading:y}]=Te(),{data:N,isLoading:S}=Oe(),{data:x,isLoading:E}=Ke(),d=(N==null?void 0:N.data)||[],h=(x==null?void 0:x.data)||[],w=Q({resolver:q(he),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,country_id:((A=n==null?void 0:n.present_address)==null?void 0:A.country.id)||1,city_id:((L=n==null?void 0:n.present_address)==null?void 0:L.city.id)||1,post_code:((le=n==null?void 0:n.present_address)==null?void 0:le.post_code)||"",address:((ce=n==null?void 0:n.present_address)==null?void 0:ce.address)||"",type:"Present"}}),m=Q({resolver:q(he),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,country_id:((re=n==null?void 0:n.permanent_address)==null?void 0:re.country.id)||1,city_id:((te=n==null?void 0:n.permanent_address)==null?void 0:te.city.id)||1,post_code:((ie=n==null?void 0:n.permanent_address)==null?void 0:ie.post_code)||"",address:((oe=n==null?void 0:n.permanent_address)==null?void 0:oe.address)||"",type:"Permanent"}});async function g(f){var b,C;try{(b=n==null?void 0:n.present_address)!=null&&b.id?(await p({addressId:(C=n==null?void 0:n.present_address)==null?void 0:C.id,updatedAddress:f}),P.success("Job Post updated successfully")):(await s(f),P.success("Job Post created successfully"))}catch(_){console.log(_)}}async function o(f){var b,C;try{(b=n==null?void 0:n.permanent_address)!=null&&b.id?(await p({addressId:(C=n==null?void 0:n.permanent_address)==null?void 0:C.id,updatedAddress:f}),P.success("Job Post updated successfully")):(await s(f),P.success("Job Post created successfully"))}catch(_){console.log(_)}}return e.jsx(e.Fragment,{children:a||y?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex items-center h-[535px] gap-x-4",children:[e.jsx("div",{className:"w-1/2",children:e.jsxs(Z,{...w,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Present Address "})}),e.jsxs("form",{onSubmit:w.handleSubmit(g),className:"",children:[e.jsx(t,{control:w.control,name:"address",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Address"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter address",...f})}),e.jsx(i,{})]})}),e.jsx(t,{control:w.control,name:"post_code",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Post Code"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter post code",...f})}),e.jsx(i,{})]})}),e.jsx(t,{control:w.control,name:"country_id",render:({field:f})=>{var b,C,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"Country"}),e.jsxs(U,{onValueChange:f.onChange,defaultValue:(C=(b=n==null?void 0:n.present_address)==null?void 0:b.country)!=null&&C.id?String((I=(_=n.present_address)==null?void 0:_.country)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(T,{placeholder:"Select Country"})})}),e.jsx(O,{children:S?e.jsx(M,{}):d==null?void 0:d.map(u=>e.jsx(K,{value:String(u.id),children:u.name},u.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:w.control,name:"city_id",render:({field:f})=>{var b,C,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"City"}),e.jsxs(U,{onValueChange:f.onChange,defaultValue:(C=(b=n==null?void 0:n.present_address)==null?void 0:b.city)!=null&&C.id?String((I=(_=n.present_address)==null?void 0:_.city)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(T,{placeholder:"Select City"})})}),e.jsx(O,{children:E?e.jsx(M,{}):h==null?void 0:h.map(u=>e.jsx(K,{value:String(u.id),children:u.name},u.id))})]}),e.jsx(i,{})]})}}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:(xe=n==null?void 0:n.present_address)!=null&&xe.id?"Update":"Add"})})]})]})}),e.jsx("div",{className:"w-1/2",children:e.jsxs(Z,{...m,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Permanent Address "})}),e.jsxs("form",{onSubmit:m.handleSubmit(o),className:"",children:[e.jsx(t,{control:m.control,name:"address",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Address"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter address",...f})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"post_code",render:({field:f})=>e.jsxs(l,{children:[e.jsx(c,{children:"Post Code"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter post code",...f})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"country_id",render:({field:f})=>{var b,C,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"Country"}),e.jsxs(U,{onValueChange:f.onChange,defaultValue:(C=(b=n==null?void 0:n.permanent_address)==null?void 0:b.country)!=null&&C.id?String((I=(_=n.permanent_address)==null?void 0:_.country)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(T,{placeholder:"Select Country"})})}),e.jsx(O,{children:S?e.jsx(M,{}):d==null?void 0:d.map(u=>e.jsx(K,{value:String(u.id),children:u.name},u.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:m.control,name:"city_id",render:({field:f})=>{var b,C,_,I;return e.jsxs(l,{children:[e.jsx(c,{children:"City"}),e.jsxs(U,{onValueChange:f.onChange,defaultValue:(C=(b=n==null?void 0:n.permanent_address)==null?void 0:b.city)!=null&&C.id?String((I=(_=n.permanent_address)==null?void 0:_.city)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(T,{placeholder:"Select City"})})}),e.jsx(O,{children:E?e.jsx(M,{}):h==null?void 0:h.map(u=>e.jsx(K,{value:String(u.id),children:u.name},u.id))})]}),e.jsx(i,{})]})}}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:(ae=n==null?void 0:n.permanent_address)!=null&&ae.id?"Update":"Add"})})]})]})})]})})}function ke({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx($,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Education"})})]})}),e.jsx(Y,{title:"Update Education",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(me,{data:n,modelClose:()=>a(!1)})})]})}const ve=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"type",header:"Education Type"},{accessorKey:"academy",header:"Academy"},{accessorKey:"grade",header:"Grade"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ke,{data:n.original})}];function me({previousData:n,data:s,modelClose:a}){const[p,{isLoading:y}]=Ge(),[N,{isLoading:S}]=Be(),x=Q({resolver:q(Se),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,type:(s==null?void 0:s.type)||"",academy:(s==null?void 0:s.academy)||"",title:(s==null?void 0:s.title)||"",degree:(s==null?void 0:s.degree)||"",start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||"",grade:(s==null?void 0:s.grade)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function E(d){try{s!=null&&s.id?(await N({educationId:s==null?void 0:s.id,updatedEducation:d}),P.success("Job Post updated successfully"),a&&a()):(await p(d),P.success("Job Post created successfully"),x.reset())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:y||S?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...x,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Education "})}),e.jsxs("form",{onSubmit:x.handleSubmit(E),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(t,{control:x.control,name:"type",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Education Type"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter education type(HSC/SSC)",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"academy",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Academy"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Academy",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"title",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Title"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Title",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"degree",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Degree"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter degree",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"start_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"end_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (Optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"grade",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Grade"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Grade",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"sorting_index",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"String"}),e.jsx(r,{children:e.jsx(j,{type:"number",placeholder:"Enter sorting",...d})}),e.jsx(i,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:ve,data:(n==null?void 0:n.educations)||[]})})})]})})}function De({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx($,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Experience"})})]})}),e.jsx(Y,{title:"Update Experience",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ge,{data:n,modelClose:()=>a(!1)})})]})}const es=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"institution",header:"Institution"},{accessorKey:"designation",header:"Designation"},{accessorKey:"start_date",header:"Start date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(De,{data:n.original})}];function ge({previousData:n,data:s,modelClose:a}){var m;const[p,{isLoading:y}]=ze(),[N,{isLoading:S}]=$e(),{data:x,isLoading:E}=We(),d=(x==null?void 0:x.data)||[],h=Q({resolver:q(be),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,institution:(s==null?void 0:s.institution)||"",employment_status_id:((m=s==null?void 0:s.employment_status)==null?void 0:m.id)||2,start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||null,description:(s==null?void 0:s.description)||"",designation:(s==null?void 0:s.designation)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function w(g){try{s!=null&&s.id?(await N({experienceId:s==null?void 0:s.id,updatedExperience:g}),P.success("Job Post updated successfully"),a&&a()):(await p(g),P.success("Job Post created successfully"),h.reset())}catch(o){console.log(o)}}return e.jsx(e.Fragment,{children:y||S?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...h,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Experience "})}),e.jsxs("form",{onSubmit:h.handleSubmit(w),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(t,{control:h.control,name:"institution",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Institution"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter institution",...g})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"employment_status_id",render:({field:g})=>{var o;return e.jsxs(l,{children:[e.jsx(c,{children:"Employment Status"}),e.jsxs(U,{onValueChange:g.onChange,defaultValue:(o=s==null?void 0:s.employment_status)!=null&&o.id?String(s.employment_status.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(T,{placeholder:"Select Employment Status"})})}),e.jsx(O,{children:E?e.jsx(M,{}):d==null?void 0:d.map(A=>e.jsx(K,{value:String(A.id),children:A.name},A.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:h.control,name:"designation",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Designation"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Designation",...g})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"description",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Description (optional)"}),e.jsx(r,{children:e.jsx(je,{placeholder:"Enter Description",value:g.value||"",onChange:o=>g.onChange(o.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"start_date",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...g})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"end_date",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",value:g.value||"",onChange:o=>g.onChange(o.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"sorting_index",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"String"}),e.jsx(r,{children:e.jsx(j,{type:"number",placeholder:"Enter sorting",...g})}),e.jsx(i,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:es,data:(n==null?void 0:n.experiences)||[]})})})]})})}function ss({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx($,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Experience"})})]})}),e.jsx(Y,{title:"Update Experience",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(fe,{data:n,modelClose:()=>a(!1)})})]})}const ns=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Skill Name"},{accessorKey:"type",header:"Proficiency level"},{accessorKey:"description",header:"Description"},{accessorKey:"start_date",header:"Start date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ss,{data:n.original})}];function fe({previousData:n,data:s,modelClose:a}){const[p,{isLoading:y}]=He(),[N,{isLoading:S}]=Qe(),x=Q({resolver:q(Ce),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,name:(s==null?void 0:s.name)||"",type:(s==null?void 0:s.type)||"",start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||"",description:(s==null?void 0:s.description)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function E(d){try{s!=null&&s.id?(await N({skillId:s==null?void 0:s.id,updatedSkill:d}),P.success("Job Candidate updated successfully"),a&&a()):(await p(d),P.success("Job Candidate created successfully"),x.reset())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:y||S?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...x,children:[e.jsx(W,{children:e.jsx(X,{className:"text-center",children:"Skill "})}),e.jsxs("form",{onSubmit:x.handleSubmit(E),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(t,{control:x.control,name:"name",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Skill Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter institution",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"type",render:({field:d})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"Proficiency Level"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:d.onChange,defaultValue:d.value,className:"flex items-center space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Basic"})}),e.jsx(c,{className:"font-normal",children:"Basic"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Medium"})}),e.jsx(c,{className:"font-normal",children:"Medium"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Expert"})}),e.jsx(c,{className:"font-normal",children:"Expert"})]})]})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"description",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Description (optional)"}),e.jsx(r,{children:e.jsx(je,{placeholder:"Enter Description",value:d.value||"",onChange:h=>d.onChange(h.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"start_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"end_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",value:d.value||"",onChange:h=>d.onChange(h.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"sorting_index",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"String"}),e.jsx(r,{children:e.jsx(j,{type:"number",placeholder:"Enter sorting",...d})}),e.jsx(i,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:ns,data:(n==null?void 0:n.skills)||[]})})})]})})}function ye({modalClose:n,data:s}){const[a,{isLoading:p}]=Le(),[y,{isLoading:N}]=Fe(),{data:S,isLoading:x}=qe(),{data:E,isLoading:d}=Ze(),h=(S==null?void 0:S.data)||[],w=(E==null?void 0:E.data)||[],m=Q({resolver:q(ue),defaultValues:{first_name:(s==null?void 0:s.first_name)||"",last_name:(s==null?void 0:s.last_name)||"",email:(s==null?void 0:s.email)||"",phone:(s==null?void 0:s.phone)||"",alt_phone:(s==null?void 0:s.alt_phone)||"",nid_type:(s==null?void 0:s.nid_type)||"Nid",nid_number:(s==null?void 0:s.nid_number)||"",marital_status:(s==null?void 0:s.marital_status)||"Married",birth_date:(s==null?void 0:s.birth_date)||"",religion_id:(s==null?void 0:s.religion_id)||1,gender_id:(s==null?void 0:s.gender_id)||1}});async function g(o){try{s?(console.log(s),await y({jobCandidateId:s.id,updatedJobCandidate:o}),P.success("Job Post updated successfully"),n()):(await a(o),P.success("Job Post created successfully"),n())}catch(A){console.log(A)}}return e.jsx(e.Fragment,{children:p||N?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx("div",{children:e.jsxs(Je,{defaultValue:"basic-info",className:"",children:[e.jsxs(Ie,{className:"grid w-full grid-cols-5",children:[e.jsx(D,{value:"basic-info",children:"Basic Info"}),e.jsx(D,{disabled:!s,value:"address",children:"Address"}),e.jsx(D,{disabled:!s,value:"education",children:"Education"}),e.jsx(D,{disabled:!s,value:"experience",children:"Experience"}),e.jsx(D,{disabled:!s,value:"skill",children:"Skill"})]}),e.jsx(ee,{value:"basic-info",children:e.jsxs(k,{children:[e.jsxs(W,{children:[e.jsx(X,{children:"Basic information"}),e.jsx(Ne,{children:"Enter the basic information about job candidate."})]}),e.jsx(v,{className:"space-y-2 ",children:e.jsx(Z,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(g),className:"",children:[e.jsxs("div",{className:"space-y-2 grid grid-cols-3 gap-3",children:[e.jsx(t,{control:m.control,name:"first_name",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"First Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter First Name",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"last_name",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Last Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Last Name",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"email",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Email"}),e.jsx(r,{children:e.jsx(j,{type:"email",placeholder:"Enter Email",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"phone",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Phone"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Phone",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"alt_phone",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Alt Phone"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Alt Phone",...o,value:o.value||""})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"nid_type",render:({field:o})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"NID Type"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:o.onChange,defaultValue:o.value,className:"flex items-center justify-between space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Nid"})}),e.jsx(c,{className:"font-normal",children:"NID"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Passport"})}),e.jsx(c,{className:"font-normal",children:"Passport"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"BirthCertificate"})}),e.jsx(c,{className:"font-normal",children:"Birth Certificate"})]})]})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"nid_number",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"NID Number"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter NID Number",...o,value:o.value||""})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"marital_status",render:({field:o})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"Marital Status"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:o.onChange,defaultValue:o.value,className:"flex items-center space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Married"})}),e.jsx(c,{className:"font-normal",children:"Married"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Unmarried"})}),e.jsx(c,{className:"font-normal",children:"Unmarried"})]})]})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"birth_date",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Birth Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Birth Date",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"religion_id",render:({field:o})=>{var A;return e.jsxs(l,{children:[e.jsx(c,{children:"Religion"}),e.jsxs(U,{onValueChange:o.onChange,defaultValue:(A=s==null?void 0:s.religion)!=null&&A.id?String(s.religion.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(T,{placeholder:"Select Religion"})})}),e.jsx(O,{children:x?e.jsx(M,{}):h==null?void 0:h.map(L=>e.jsx(K,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:m.control,name:"gender_id",render:({field:o})=>{var A;return e.jsxs(l,{children:[e.jsx(c,{children:"Gender"}),e.jsxs(U,{onValueChange:o.onChange,defaultValue:(A=s==null?void 0:s.gender)!=null&&A.id?String(s.gender.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(T,{placeholder:"Select Gender"})})}),e.jsx(O,{children:d?e.jsx(M,{}):w==null?void 0:w.map(L=>e.jsx(K,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(i,{})]})}})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})}),e.jsx(_e,{})]})}),e.jsx(ee,{value:"address",children:e.jsx(k,{children:e.jsx(v,{className:"space-y-2",children:e.jsx(Ye,{previousData:s})})})}),e.jsx(ee,{value:"education",children:e.jsx(k,{children:e.jsx(v,{className:"space-y-2",children:e.jsx(me,{previousData:s})})})}),e.jsx(ee,{value:"experience",children:e.jsx(k,{children:e.jsx(v,{className:"space-y-2",children:e.jsx(ge,{previousData:s})})})}),e.jsx(ee,{value:"skill",children:e.jsx(k,{children:e.jsx(v,{className:"space-y-2",children:e.jsx(fe,{previousData:s})})})})]})})})}const ds=()=>e.jsx("div",{});function ls({data:n}){const[s,a]=G.useState(!1),[p,y]=G.useState(!1),[N,S]=G.useState(!1),[x,{isLoading:E}]=Ve(),d=async h=>{try{await x(h),P.success("Job Candidate deleted successfully"),a(!1)}catch(w){console.log(w)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx($,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>y(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(B,{children:e.jsxs(z,{children:[e.jsx($,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{S(!0)},children:e.jsx(Xe,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(B,{children:e.jsxs(z,{children:[e.jsx($,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(pe,{className:"h-4 w-4 text-foreground"})})}),e.jsx(H,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(Ee,{title:"Are you sure?",description:"This action cannot be undone.",name:n.first_name,isOpen:s,onClose:()=>a(!1),onConfirm:()=>d(n.id),loading:E}),e.jsx(Y,{title:"Update Job",isOpen:p,toggleModal:()=>y(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ye,{data:n,modalClose:()=>y(!1)})}),e.jsx(Y,{title:"Job Details",isOpen:N,toggleModal:()=>S(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ds,{})})]})}const cs=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"First name"},{accessorKey:"last_name",header:"Last name"},{accessorKey:"email",header:"Email"},{accessorKey:"phone",header:"Phone"},{accessorKey:"nid_number",header:"NID Number"},{accessorKey:"birth_date",header:"Birth date"},{accessorKey:"marital_status",header:"Marital status"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ls,{data:n.original})}],gs=()=>{const[n,s]=G.useState(!1),[a,p]=we.useState({pageIndex:0,pageSize:10}),{data:y,isLoading:N}=Ue(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),S=(y==null?void 0:y.data)||[],x=y==null?void 0:y.meta;return N?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Ae,{title:"Job Candidates",description:"Manage job candidates for you business"}),e.jsxs(J,{onClick:()=>s(!0),size:"sm",children:[e.jsx(Me,{className:"mr-2 h-4 w-4"})," Add Job Candidate"]})]}),e.jsx(Pe,{}),S&&e.jsx("div",{children:e.jsx(ne,{columns:cs,data:S,paginationInfo:x,pagination:a,setPagination:p})})]})}),e.jsx(Y,{title:"Add Job Candidate",isOpen:n,toggleModal:()=>s(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ye,{modalClose:()=>s(!1)})})]})};export{gs as default};
