import{V as $,W as q,ai as he,a as e,Y as M,Z,M as W,N as Y,_ as t,$ as l,a0 as c,a1 as r,I as j,a2 as i,aj as U,ak as R,al as O,am as T,an as K,B as J,a3 as P,r as G,a5 as B,a6 as z,a7 as H,a8 as se,a9 as Q,ac as X,ad as V,ao as Se,ag as ne,ap as be,aq as je,av as Ce,b2 as Ne,F as _e,G as ue,H as k,J as v,K as D,U as pe,Q as ee,b3 as Ee,aa as we,ab as Ae,R as Me,ae as Pe,t as Je,af as Ie}from"./index-96b0e7a7.js";import{a as Le,b as Fe,c as Ve,u as Ue}from"./index-37388cba.js";import{R as de,a as F}from"./radio-group-c3b20bb7.js";import{u as Re,a as Oe,b as Te,c as Ke,d as Ge,e as Be,f as ze,g as He,h as Qe,i as $e,j as qe,k as Ze}from"./index-9a1b8300.js";import{u as We}from"./index-51a42c6f.js";import{Z as Ye}from"./zoom-in-8404caa6.js";function Xe({previousData:n}){var A,L,le,ce,re,te,ie,oe,xe,ae;const[s,{isLoading:a}]=Re(),[_,{isLoading:f}]=Oe(),{data:N,isLoading:S}=Te(),{data:x,isLoading:E}=Ke(),d=(N==null?void 0:N.data)||[],h=(x==null?void 0:x.data)||[],w=$({resolver:q(he),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,country_id:((A=n==null?void 0:n.present_address)==null?void 0:A.country.id)||1,city_id:((L=n==null?void 0:n.present_address)==null?void 0:L.city.id)||1,post_code:((le=n==null?void 0:n.present_address)==null?void 0:le.post_code)||"",address:((ce=n==null?void 0:n.present_address)==null?void 0:ce.address)||"",type:"Present"}}),m=$({resolver:q(he),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,country_id:((re=n==null?void 0:n.permanent_address)==null?void 0:re.country.id)||1,city_id:((te=n==null?void 0:n.permanent_address)==null?void 0:te.city.id)||1,post_code:((ie=n==null?void 0:n.permanent_address)==null?void 0:ie.post_code)||"",address:((oe=n==null?void 0:n.permanent_address)==null?void 0:oe.address)||"",type:"Permanent"}});async function g(y){var b,C;try{(b=n==null?void 0:n.present_address)!=null&&b.id?(await _({addressId:(C=n==null?void 0:n.present_address)==null?void 0:C.id,updatedAddress:y}),P.success("Job Post updated successfully")):(await s(y),P.success("Job Post created successfully"))}catch(u){console.log(u)}}async function o(y){var b,C;try{(b=n==null?void 0:n.permanent_address)!=null&&b.id?(await _({addressId:(C=n==null?void 0:n.permanent_address)==null?void 0:C.id,updatedAddress:y}),P.success("Job Post updated successfully")):(await s(y),P.success("Job Post created successfully"))}catch(u){console.log(u)}}return e.jsx(e.Fragment,{children:a||f?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex items-center h-[535px] gap-x-4",children:[e.jsx("div",{className:"w-1/2",children:e.jsxs(Z,{...w,children:[e.jsx(W,{children:e.jsx(Y,{className:"text-center",children:"Present Address "})}),e.jsxs("form",{onSubmit:w.handleSubmit(g),className:"",children:[e.jsx(t,{control:w.control,name:"address",render:({field:y})=>e.jsxs(l,{children:[e.jsx(c,{children:"Address"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter address",...y})}),e.jsx(i,{})]})}),e.jsx(t,{control:w.control,name:"post_code",render:({field:y})=>e.jsxs(l,{children:[e.jsx(c,{children:"Post Code"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter post code",...y})}),e.jsx(i,{})]})}),e.jsx(t,{control:w.control,name:"country_id",render:({field:y})=>{var b,C,u,I;return e.jsxs(l,{children:[e.jsx(c,{children:"Country"}),e.jsxs(U,{onValueChange:y.onChange,defaultValue:(C=(b=n==null?void 0:n.present_address)==null?void 0:b.country)!=null&&C.id?String((I=(u=n.present_address)==null?void 0:u.country)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Country"})})}),e.jsx(T,{children:S?e.jsx(M,{}):d==null?void 0:d.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:w.control,name:"city_id",render:({field:y})=>{var b,C,u,I;return e.jsxs(l,{children:[e.jsx(c,{children:"City"}),e.jsxs(U,{onValueChange:y.onChange,defaultValue:(C=(b=n==null?void 0:n.present_address)==null?void 0:b.city)!=null&&C.id?String((I=(u=n.present_address)==null?void 0:u.city)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select City"})})}),e.jsx(T,{children:E?e.jsx(M,{}):h==null?void 0:h.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(i,{})]})}}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:(xe=n==null?void 0:n.present_address)!=null&&xe.id?"Update":"Add"})})]})]})}),e.jsx("div",{className:"w-1/2",children:e.jsxs(Z,{...m,children:[e.jsx(W,{children:e.jsx(Y,{className:"text-center",children:"Permanent Address "})}),e.jsxs("form",{onSubmit:m.handleSubmit(o),className:"",children:[e.jsx(t,{control:m.control,name:"address",render:({field:y})=>e.jsxs(l,{children:[e.jsx(c,{children:"Address"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter address",...y})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"post_code",render:({field:y})=>e.jsxs(l,{children:[e.jsx(c,{children:"Post Code"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter post code",...y})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"country_id",render:({field:y})=>{var b,C,u,I;return e.jsxs(l,{children:[e.jsx(c,{children:"Country"}),e.jsxs(U,{onValueChange:y.onChange,defaultValue:(C=(b=n==null?void 0:n.permanent_address)==null?void 0:b.country)!=null&&C.id?String((I=(u=n.permanent_address)==null?void 0:u.country)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Country"})})}),e.jsx(T,{children:S?e.jsx(M,{}):d==null?void 0:d.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:m.control,name:"city_id",render:({field:y})=>{var b,C,u,I;return e.jsxs(l,{children:[e.jsx(c,{children:"City"}),e.jsxs(U,{onValueChange:y.onChange,defaultValue:(C=(b=n==null?void 0:n.permanent_address)==null?void 0:b.city)!=null&&C.id?String((I=(u=n.permanent_address)==null?void 0:u.city)==null?void 0:I.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select City"})})}),e.jsx(T,{children:E?e.jsx(M,{}):h==null?void 0:h.map(p=>e.jsx(K,{value:String(p.id),children:p.name},p.id))})]}),e.jsx(i,{})]})}}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:(ae=n==null?void 0:n.permanent_address)!=null&&ae.id?"Update":"Add"})})]})]})})]})})}function ke({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(H,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Update Education"})})]})}),s&&e.jsx(X,{title:"Update Education",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(me,{data:n,modelClose:()=>a(!1)})})]})}const ve=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"type",header:"Education Type"},{accessorKey:"academy",header:"Academy"},{accessorKey:"grade",header:"Grade"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ke,{data:n.original})}];function me({previousData:n,data:s,modelClose:a}){const[_,{isLoading:f}]=Ge(),[N,{isLoading:S}]=Be(),x=$({resolver:q(Se),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,type:(s==null?void 0:s.type)||"",academy:(s==null?void 0:s.academy)||"",title:(s==null?void 0:s.title)||"",degree:(s==null?void 0:s.degree)||"",start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||"",grade:(s==null?void 0:s.grade)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function E(d){try{s!=null&&s.id?(await N({educationId:s==null?void 0:s.id,updatedEducation:d}),P.success("Job Post updated successfully"),a&&a()):(await _(d),P.success("Job Post created successfully"),x.reset())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:f||S?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...x,children:[e.jsx(W,{children:e.jsx(Y,{className:"text-center",children:"Education "})}),e.jsxs("form",{onSubmit:x.handleSubmit(E),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(t,{control:x.control,name:"type",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Education Type"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter education type(HSC/SSC)",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"academy",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Academy"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Academy",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"title",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Title"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Title",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"degree",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Degree"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter degree",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"start_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"end_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (Optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"grade",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Grade"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Grade",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"sorting_index",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"String"}),e.jsx(r,{children:e.jsx(j,{type:"number",placeholder:"Enter sorting",...d})}),e.jsx(i,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:ve,data:(n==null?void 0:n.educations)||[]})})})]})})}function De({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(H,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Update Experience"})})]})}),s&&e.jsx(X,{title:"Update Experience",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ge,{data:n,modelClose:()=>a(!1)})})]})}const es=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"institution",header:"Institution"},{accessorKey:"designation",header:"Designation"},{accessorKey:"start_date",header:"Start date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(De,{data:n.original})}];function ge({previousData:n,data:s,modelClose:a}){var m;const[_,{isLoading:f}]=ze(),[N,{isLoading:S}]=He(),{data:x,isLoading:E}=We(),d=(x==null?void 0:x.data)||[],h=$({resolver:q(be),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,institution:(s==null?void 0:s.institution)||"",employment_status_id:((m=s==null?void 0:s.employment_status)==null?void 0:m.id)||2,start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||null,description:(s==null?void 0:s.description)||"",designation:(s==null?void 0:s.designation)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function w(g){try{s!=null&&s.id?(await N({experienceId:s==null?void 0:s.id,updatedExperience:g}),P.success("Job Post updated successfully"),a&&a()):(await _(g),P.success("Job Post created successfully"),h.reset())}catch(o){console.log(o)}}return e.jsx(e.Fragment,{children:f||S?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...h,children:[e.jsx(W,{children:e.jsx(Y,{className:"text-center",children:"Experience "})}),e.jsxs("form",{onSubmit:h.handleSubmit(w),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(t,{control:h.control,name:"institution",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Institution"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter institution",...g})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"employment_status_id",render:({field:g})=>{var o;return e.jsxs(l,{children:[e.jsx(c,{children:"Employment Status"}),e.jsxs(U,{onValueChange:g.onChange,defaultValue:(o=s==null?void 0:s.employment_status)!=null&&o.id?String(s.employment_status.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Employment Status"})})}),e.jsx(T,{children:E?e.jsx(M,{}):d==null?void 0:d.map(A=>e.jsx(K,{value:String(A.id),children:A.name},A.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:h.control,name:"designation",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Designation"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Designation",...g})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"description",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Description (optional)"}),e.jsx(r,{children:e.jsx(je,{placeholder:"Enter Description",value:g.value||"",onChange:o=>g.onChange(o.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"start_date",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...g})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"end_date",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",value:g.value||"",onChange:o=>g.onChange(o.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:h.control,name:"sorting_index",render:({field:g})=>e.jsxs(l,{children:[e.jsx(c,{children:"String"}),e.jsx(r,{children:e.jsx(j,{type:"number",placeholder:"Enter sorting",...g})}),e.jsx(i,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:es,data:(n==null?void 0:n.experiences)||[]})})})]})})}function ss({data:n}){const[s,a]=G.useState(!1);return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(H,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>a(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Update Experience"})})]})}),s&&e.jsx(X,{title:"Update Experience",isOpen:s,toggleModal:()=>a(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ye,{data:n,modelClose:()=>a(!1)})})]})}const ns=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"name",header:"Skill Name"},{accessorKey:"type",header:"Proficiency level"},{accessorKey:"description",header:"Description"},{accessorKey:"start_date",header:"Start date"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ss,{data:n.original})}];function ye({previousData:n,data:s,modelClose:a}){const[_,{isLoading:f}]=Qe(),[N,{isLoading:S}]=$e(),x=$({resolver:q(Ce),defaultValues:{model_type:"App\\Models\\Job\\JobCandidate",model_id:n==null?void 0:n.id,name:(s==null?void 0:s.name)||"",type:(s==null?void 0:s.type)||"",start_date:(s==null?void 0:s.start_date)||"",end_date:(s==null?void 0:s.end_date)||"",description:(s==null?void 0:s.description)||"",sorting_index:(s==null?void 0:s.sorting_index)||0}});async function E(d){try{s!=null&&s.id?(await N({skillId:s==null?void 0:s.id,updatedSkill:d}),P.success("Job Candidate updated successfully"),a&&a()):(await _(d),P.success("Job Candidate created successfully"),x.reset())}catch(h){console.log(h)}}return e.jsx(e.Fragment,{children:f||S?e.jsx("div",{className:"h-[535px]",children:e.jsx(M,{})}):e.jsxs("div",{className:"flex  h-[535px] gap-x-4",children:[e.jsx("div",{className:`${n?"w-1/2":"w-full"} `,children:e.jsxs(Z,{...x,children:[e.jsx(W,{children:e.jsx(Y,{className:"text-center",children:"Skill "})}),e.jsxs("form",{onSubmit:x.handleSubmit(E),className:"",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(t,{control:x.control,name:"name",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Skill Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter institution",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"type",render:({field:d})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"Proficiency Level"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:d.onChange,defaultValue:d.value,className:"flex items-center space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Basic"})}),e.jsx(c,{className:"font-normal",children:"Basic"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Medium"})}),e.jsx(c,{className:"font-normal",children:"Medium"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Expert"})}),e.jsx(c,{className:"font-normal",children:"Expert"})]})]})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"description",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Description (optional)"}),e.jsx(r,{children:e.jsx(je,{placeholder:"Enter Description",value:d.value||"",onChange:h=>d.onChange(h.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"start_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"Start Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Start Date",...d})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"end_date",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"End Date (optional)"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter End Date",value:d.value||"",onChange:h=>d.onChange(h.target.value)})}),e.jsx(i,{})]})}),e.jsx(t,{control:x.control,name:"sorting_index",render:({field:d})=>e.jsxs(l,{children:[e.jsx(c,{children:"String"}),e.jsx(r,{children:e.jsx(j,{type:"number",placeholder:"Enter sorting",...d})}),e.jsx(i,{})]})})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s!=null&&s.id?"Update":"Add"})})]})]})}),!(s!=null&&s.id)&&e.jsx("div",{className:"w-1/2 mt-4",children:e.jsx("div",{children:e.jsx(ne,{columns:ns,data:(n==null?void 0:n.skills)||[]})})})]})})}function fe({modalClose:n,data:s}){const[a,{isLoading:_}]=Le(),[f,{isLoading:N}]=Fe(),{data:S,isLoading:x}=qe(),{data:E,isLoading:d}=Ze(),h=(S==null?void 0:S.data)||[],w=(E==null?void 0:E.data)||[],m=$({resolver:q(Ne),defaultValues:{first_name:(s==null?void 0:s.first_name)||"",last_name:(s==null?void 0:s.last_name)||"",email:(s==null?void 0:s.email)||"",phone:(s==null?void 0:s.phone)||"",alt_phone:(s==null?void 0:s.alt_phone)||"",nid_type:(s==null?void 0:s.nid_type)||"Nid",nid_number:(s==null?void 0:s.nid_number)||"",marital_status:(s==null?void 0:s.marital_status)||"Married",birth_date:(s==null?void 0:s.birth_date)||"",religion_id:(s==null?void 0:s.religion_id)||1,gender_id:(s==null?void 0:s.gender_id)||1}});async function g(o){try{s?(console.log(s),await f({jobCandidateId:s.id,updatedJobCandidate:o}),P.success("Job Post updated successfully"),n()):(await a(o),P.success("Job Post created successfully"),n())}catch(A){console.log(A)}}return e.jsx(e.Fragment,{children:_||N?e.jsx("div",{className:"h-56",children:e.jsx(M,{})}):e.jsx("div",{children:e.jsxs(_e,{defaultValue:"basic-info",className:"",children:[e.jsxs(ue,{className:"grid w-full grid-cols-5",children:[e.jsx(k,{value:"basic-info",children:"Basic Info"}),e.jsx(k,{disabled:!s,value:"address",children:"Address"}),e.jsx(k,{disabled:!s,value:"education",children:"Education"}),e.jsx(k,{disabled:!s,value:"experience",children:"Experience"}),e.jsx(k,{disabled:!s,value:"skill",children:"Skill"})]}),e.jsx(v,{value:"basic-info",children:e.jsxs(D,{children:[e.jsxs(W,{children:[e.jsx(Y,{children:"Basic information"}),e.jsx(pe,{children:"Enter the basic information about job candidate."})]}),e.jsx(ee,{className:"space-y-2 ",children:e.jsx(Z,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(g),className:"",children:[e.jsxs("div",{className:"space-y-2 grid grid-cols-3 gap-3",children:[e.jsx(t,{control:m.control,name:"first_name",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"First Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter First Name",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"last_name",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Last Name"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Last Name",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"email",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Email"}),e.jsx(r,{children:e.jsx(j,{type:"email",placeholder:"Enter Email",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"phone",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Phone"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Phone",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"alt_phone",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Alt Phone"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter Alt Phone",...o,value:o.value||""})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"nid_type",render:({field:o})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"NID Type"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:o.onChange,defaultValue:o.value,className:"flex items-center justify-between space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Nid"})}),e.jsx(c,{className:"font-normal",children:"NID"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Passport"})}),e.jsx(c,{className:"font-normal",children:"Passport"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"BirthCertificate"})}),e.jsx(c,{className:"font-normal",children:"Birth Certificate"})]})]})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"nid_number",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"NID Number"}),e.jsx(r,{children:e.jsx(j,{type:"text",placeholder:"Enter NID Number",...o,value:o.value||""})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"marital_status",render:({field:o})=>e.jsxs(l,{className:"space-y-3",children:[e.jsx(c,{children:"Marital Status"}),e.jsx(r,{children:e.jsxs(de,{onValueChange:o.onChange,defaultValue:o.value,className:"flex items-center space-y-1",children:[e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Married"})}),e.jsx(c,{className:"font-normal",children:"Married"})]}),e.jsxs(l,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(F,{value:"Unmarried"})}),e.jsx(c,{className:"font-normal",children:"Unmarried"})]})]})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"birth_date",render:({field:o})=>e.jsxs(l,{children:[e.jsx(c,{children:"Birth Date"}),e.jsx(r,{children:e.jsx(j,{type:"date",placeholder:"Enter Birth Date",...o})}),e.jsx(i,{})]})}),e.jsx(t,{control:m.control,name:"religion_id",render:({field:o})=>{var A;return e.jsxs(l,{children:[e.jsx(c,{children:"Religion"}),e.jsxs(U,{onValueChange:o.onChange,defaultValue:(A=s==null?void 0:s.religion)!=null&&A.id?String(s.religion.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Religion"})})}),e.jsx(T,{children:x?e.jsx(M,{}):h==null?void 0:h.map(L=>e.jsx(K,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(i,{})]})}}),e.jsx(t,{control:m.control,name:"gender_id",render:({field:o})=>{var A;return e.jsxs(l,{children:[e.jsx(c,{children:"Gender"}),e.jsxs(U,{onValueChange:o.onChange,defaultValue:(A=s==null?void 0:s.gender)!=null&&A.id?String(s.gender.id):void 0,children:[e.jsx(r,{children:e.jsx(R,{children:e.jsx(O,{placeholder:"Select Gender"})})}),e.jsx(T,{children:d?e.jsx(M,{}):w==null?void 0:w.map(L=>e.jsx(K,{value:String(L.id),children:L.name},L.id))})]}),e.jsx(i,{})]})}})]}),e.jsx("div",{children:e.jsx(J,{variant:"default",type:"submit",className:"w-full mt-4",children:s?"Update":"Add"})})]})})}),e.jsx(Ee,{})]})}),e.jsx(v,{value:"address",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(Xe,{previousData:s})})})}),e.jsx(v,{value:"education",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(me,{previousData:s})})})}),e.jsx(v,{value:"experience",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(ge,{previousData:s})})})}),e.jsx(v,{value:"skill",children:e.jsx(D,{children:e.jsx(ee,{className:"space-y-2",children:e.jsx(ye,{previousData:s})})})})]})})})}const ds=()=>e.jsx("div",{});function ls({data:n}){const[s,a]=G.useState(!1),[_,f]=G.useState(!1),[N,S]=G.useState(!1),[x,{isLoading:E}]=Ve(),d=async h=>{try{await x(h),P.success("Job Candidate deleted successfully"),a(!1)}catch(w){console.log(w)}};return e.jsxs("div",{className:"flex justify-center space-x-2",children:[e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(H,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>f(!0),children:e.jsx(se,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Update Job Post"})})]})}),e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(H,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{S(!0)},children:e.jsx(Ye,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(B,{children:e.jsxs(z,{children:[e.jsx(H,{asChild:!0,children:e.jsx(J,{variant:"ghost",size:"icon",className:"hover:bg-secondary",onClick:()=>{a(!0)},children:e.jsx(we,{className:"h-4 w-4 text-foreground"})})}),e.jsx(Q,{children:e.jsx("p",{children:"Delete Requisition"})})]})}),e.jsx(Ae,{title:"Are you sure?",description:"This action cannot be undone.",name:n.first_name,isOpen:s,onClose:()=>a(!1),onConfirm:()=>d(n.id),loading:E}),_&&e.jsx(X,{title:"Update Job",isOpen:_,toggleModal:()=>f(!1),className:"w-[90%] max-w-6xl",children:e.jsx(fe,{data:n,modalClose:()=>f(!1)})}),N&&e.jsx(X,{title:"Job Details",isOpen:N,toggleModal:()=>S(!1),className:"w-[90%] max-w-6xl",children:e.jsx(ds,{})})]})}const cs=[{id:"select",header:({table:n})=>e.jsx(V,{checked:n.getIsAllPageRowsSelected()||n.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:s=>n.toggleAllPageRowsSelected(!!s),"aria-label":"Select all",className:"translate-y-[2px]"}),cell:({row:n})=>e.jsx(V,{checked:n.getIsSelected(),onCheckedChange:s=>n.toggleSelected(!!s),"aria-label":"Select row",className:"translate-y-[2px]"}),enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"First name"},{accessorKey:"last_name",header:"Last name"},{accessorKey:"email",header:"Email"},{accessorKey:"phone",header:"Phone"},{accessorKey:"nid_number",header:"NID Number"},{accessorKey:"birth_date",header:"Birth date"},{accessorKey:"marital_status",header:"Marital status"},{id:"actions",header:()=>e.jsx("div",{className:"text-center",children:"Actions"}),enableSorting:!1,cell:({row:n})=>e.jsx(ls,{data:n.original})}],hs=()=>{const[n,s]=G.useState(!1),[a,_]=Me.useState({pageIndex:0,pageSize:10}),{data:f,isLoading:N}=Ue(`per_page=${a.pageSize}&page=${a.pageIndex+1}`),S=(f==null?void 0:f.data)||[],x=f==null?void 0:f.meta;return N?e.jsx(M,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Pe,{title:"Job Candidates",description:"Manage job candidates for you business"}),e.jsxs(J,{onClick:()=>s(!0),size:"sm",children:[e.jsx(Je,{className:"mr-2 h-4 w-4"})," Add Job Candidate"]})]}),e.jsx(Ie,{}),S&&e.jsx("div",{children:e.jsx(ne,{columns:cs,data:S,paginationInfo:x,pagination:a,setPagination:_})})]})}),n&&e.jsx(X,{title:"Add Job Candidate",isOpen:n,toggleModal:()=>s(!1),className:"w-[90%] max-w-6xl",children:e.jsx(fe,{modalClose:()=>s(!1)})})]})};export{hs as default};
