<<<<<<<< HEAD:dist/assets/index-e358d96d.js
import{bm as m,a as e,W as i,bb as u,bc as b,bd as d,be as l,bf as T,bg as t,cl as v,r as o,au as f,aJ as y,bl as N,aL as L,cm as P}from"./index-6406284f.js";import{E as S}from"./employee-filters-fb02e318.js";import"./index-8eea1859.js";import"./index-f3e06798.js";import"./index-b32a351d.js";import"./index-055f93e9.js";import"./index-9fa62ffe.js";import"./index-9b426570.js";const E=m.injectEndpoints({endpoints:r=>({getLeaveTrend:r.query({query:s=>`leave-reports/trend?${s}`,providesTags:["leave-trend"]})}),overrideExisting:!1}),{useGetLeaveTrendQuery:C}=E,F=({tableData:r})=>e.jsxs(i,{children:[" ",e.jsxs(u,{className:"",children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(l,{children:"Month"}),e.jsx(l,{children:"Total Days"}),e.jsx(l,{children:"Total Hours"})]})}),e.jsx(T,{className:"",children:r&&r.map(s=>e.jsxs(d,{className:"",children:[e.jsx(t,{children:s==null?void 0:s.month}),e.jsx(t,{children:s==null?void 0:s.total_days}),e.jsx(t,{children:s==null?void 0:s.total_hours})]}))}),e.jsx(v,{})]})]}),w=()=>{const[r,s]=o.useState(1),[x,p]=o.useState(10),[h,j]=o.useState(""),{data:a,isLoading:g}=C(`per_page=${x}&page=${r}&${h}`);console.log("trend",a);const n=(a==null?void 0:a.data)||[],c=a==null?void 0:a.meta;return g?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-5 space-y-5",children:[e.jsx(y,{title:"Leave Trend",description:"Manage employees for you business"}),e.jsx(S,{setFilterParams:j})]}),e.jsxs(i,{children:[e.jsxs(N,{className:"space-y-4",fileName:"leave-trend-report",children:[e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:"text-center  ",children:[e.jsx("h2",{children:"Akaar IT"}),e.jsx("h3",{className:"text-xl",children:"Leave Trend Report"})]})}),e.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[e.jsx(L,{}),n?e.jsx(F,{tableData:n}):null]})]}),c&&e.jsx(P,{className:"px-4 pb-4",meta:c,dataCount:n.length,onPageChange:s,onPageSizeChange:p})]})]})};export{w as default};
========
import{bn as m,a as e,W as i,bc as u,bd as b,be as d,bf as l,bg as T,bh as t,cm as v,r as o,au as f,aJ as y,bm as N,aL as L,cn as P}from"./index-40479168.js";import{E as S}from"./employee-filters-15f66e2c.js";import"./index-bfe99515.js";import"./index-a79aef06.js";import"./index-efb57781.js";import"./index-365819c7.js";import"./index-c2ce0198.js";import"./index-13e66bd5.js";const E=m.injectEndpoints({endpoints:r=>({getLeaveTrend:r.query({query:s=>`leave-reports/trend?${s}`,providesTags:["leave-trend"]})}),overrideExisting:!1}),{useGetLeaveTrendQuery:C}=E,F=({tableData:r})=>e.jsxs(i,{children:[" ",e.jsxs(u,{className:"",children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(l,{children:"Month"}),e.jsx(l,{children:"Total Days"}),e.jsx(l,{children:"Total Hours"})]})}),e.jsx(T,{className:"",children:r&&r.map(s=>e.jsxs(d,{className:"",children:[e.jsx(t,{children:s==null?void 0:s.month}),e.jsx(t,{children:s==null?void 0:s.total_days}),e.jsx(t,{children:s==null?void 0:s.total_hours})]}))}),e.jsx(v,{})]})]}),w=()=>{const[r,s]=o.useState(1),[x,p]=o.useState(10),[h,j]=o.useState(""),{data:a,isLoading:g}=C(`per_page=${x}&page=${r}&${h}`);console.log("trend",a);const n=(a==null?void 0:a.data)||[],c=a==null?void 0:a.meta;return g?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-5 space-y-5",children:[e.jsx(y,{title:"Leave Trend",description:"Manage employees for you business"}),e.jsx(S,{setFilterParams:j})]}),e.jsxs(i,{children:[e.jsxs(N,{className:"space-y-4",fileName:"leave-trend-report",children:[e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:"text-center  ",children:[e.jsx("h2",{children:"Akaar IT"}),e.jsx("h3",{className:"text-xl",children:"Leave Trend Report"})]})}),e.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[e.jsx(L,{}),n?e.jsx(F,{tableData:n}):null]})]}),c&&e.jsx(P,{className:"px-4 pb-4",meta:c,dataCount:n.length,onPageChange:s,onPageSizeChange:p})]})]})};export{w as default};
>>>>>>>> main:dist/assets/index-f1356362.js
