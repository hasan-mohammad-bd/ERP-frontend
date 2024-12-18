import{bS as ee,bT as te,bU as ae,r as s,a as t,X as se,bM as l,bl as P,W as R,bV as le,ac as H,aw as T}from"./index-a17decc1.js";import{d as oe}from"./index-46a6aa90.js";import{a as ne}from"./index-458e3e33.js";import{d as de}from"./index-27e4fd44.js";import{a as ie}from"./index-4e2b2c3e.js";import{d as ce}from"./index-121c84b8.js";import{d as re}from"./index-1f193f3d.js";function ge({setFilterParams:G}){const[A,{data:d}]=ee(),[U,{data:i}]=te(),[Y,{data:c}]=oe(),[J,{data:r}]=ae(),[V,{data:S}]=ne(),[W,{data:y}]=de(),[X,{data:p}]=ie(),[q,{data:m}]=ce(),[I,{data:u}]=re(),[h,K]=s.useState(void 0),[v,_]=s.useState(void 0),[g,M]=s.useState(void 0),[f,z]=s.useState(void 0),[x,L]=s.useState(void 0),[b,F]=s.useState(void 0),[j,w]=s.useState(void 0),[E,Q]=s.useState(void 0),[C,N]=s.useState(void 0),[o,$]=s.useState(void 0),[n,D]=s.useState(void 0),O=()=>{const e=o?H(o,"yyyy-MM"):"",k=n?H(n,"yyyy-MM"):"";console.log(k);const a=new URLSearchParams;h&&a.append("department_id",h.id.toString()),v&&a.append("designation_id",v.id.toString()),g&&a.append("location_id",g.id.toString()),f&&a.append("section_id",f.id.toString()),x&&a.append("employment_status_id",x.id.toString()),b&&a.append("schedule_id",b.id.toString()),j&&a.append("gender_id",j.id.toString()),E&&a.append("employee_class_id",E.id.toString()),C&&a.append("employee_grade_id",C.id.toString()),o&&a.append("estimate_salary_for",e.toString()),n&&a.append("has_salary_month",k.toString());const B=a.toString();console.log(B),G(B),T.success("Filters applied successfully")},Z=()=>{K(void 0),_(void 0),M(void 0),z(void 0),L(void 0),F(void 0),w(void 0),Q(void 0),N(void 0),G(""),$(void 0),D(void 0),T.success("Filters reset successfully")};return t.jsx(se,{className:"w-full p-5",children:t.jsxs("div",{className:"flex gap-4 flex-wrap",children:[t.jsx(l,{items:(d==null?void 0:d.data)||[],labelKey:"name",valueKey:"id",value:h,placeholder:"Select Department",onSelect:K,onChangeSearch:e=>A(`text=${e}`)}),t.jsx(l,{items:(i==null?void 0:i.data)||[],labelKey:"name",valueKey:"id",value:v,placeholder:"Select Designation",onSelect:_,onChangeSearch:e=>U(`text=${e}`)}),t.jsx(l,{items:(r==null?void 0:r.data)||[],labelKey:"name",valueKey:"id",value:g,placeholder:"Select Branch",onSelect:M,onChangeSearch:e=>J(`text=${e}`)}),t.jsx(l,{items:(c==null?void 0:c.data)||[],labelKey:"name",valueKey:"id",value:f,placeholder:"Select Section",onSelect:z,onChangeSearch:e=>Y(`text=${e}`)}),t.jsx(l,{items:(S==null?void 0:S.data)||[],labelKey:"name",valueKey:"id",value:x,placeholder:"Select Status",onSelect:L,onChangeSearch:()=>V()}),t.jsx(l,{items:(y==null?void 0:y.data)||[],labelKey:"name",valueKey:"id",value:b,placeholder:"Select Shift",onSelect:F,onChangeSearch:e=>W(`text=${e}`)}),t.jsx(l,{items:(p==null?void 0:p.data)||[],labelKey:"name",valueKey:"id",value:j,placeholder:"Select Gender",onSelect:w,onChangeSearch:()=>X()}),t.jsx(l,{items:(m==null?void 0:m.data)||[],labelKey:"name",valueKey:"id",value:E,placeholder:"Select Class",onSelect:Q,onChangeSearch:e=>q(`text=${e}`)}),t.jsx(l,{items:(u==null?void 0:u.data)||[],labelKey:"name",valueKey:"id",value:C,placeholder:"Select Grade",onSelect:N,onChangeSearch:e=>I(`text=${e}`)}),t.jsx("div",{className:"space-y-2 flex flex-col py-0",children:t.jsx(P,{selected:o,onChange:e=>{$(e??void 0)},dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select Estimate Salary For",className:"border rounded p-[6px] w-full bg-none bg_remove "})}),t.jsx("div",{className:"space-y-2 flex flex-col py-0",children:t.jsx(P,{selected:n,onChange:e=>{D(e??void 0)},dateFormat:"MM/yyyy",showMonthYearPicker:!0,placeholderText:"Select Has Salary Month",className:"border rounded p-[6px] w-full bg-none bg_remove "})}),t.jsx(R,{variant:"outline",size:"sm",onClick:Z,children:"Reset Filters"}),t.jsxs(R,{variant:"default",size:"sm",onClick:O,children:[t.jsx(le,{className:"mr-2 h-4 w-4"}),"Apply Filters"]})]})})}export{ge as E};
