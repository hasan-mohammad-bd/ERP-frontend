import{bm as u,a as e,W as i,bb as b,bc as m,bd as d,be as l,bf as T,bg as t,cx as v,r as o,au as y,aJ as f,bl as N,aL as L,cy as P}from"./index-5e0f2197.js";import{E as S}from"./employee-filters-34d44db9.js";import"./index-96eec5cd.js";import"./index-e795360c.js";import"./index-3df121f9.js";const E=u.injectEndpoints({endpoints:r=>({getLeaveTrend:r.query({query:s=>`leave-reports/trend?${s}`,providesTags:["leave-trend"]})}),overrideExisting:!1}),{useGetLeaveTrendQuery:C}=E,F=({tableData:r})=>e.jsxs(i,{children:[" ",e.jsxs(b,{className:"",children:[e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(l,{children:"Month"}),e.jsx(l,{children:"Total Days"}),e.jsx(l,{children:"Total Hours"})]})}),e.jsx(T,{className:"",children:r&&r.map(s=>e.jsxs(d,{className:"",children:[e.jsx(t,{children:s==null?void 0:s.month}),e.jsx(t,{children:s==null?void 0:s.total_days}),e.jsx(t,{children:s==null?void 0:s.total_hours})]}))}),e.jsx(v,{})]})]}),R=()=>{const[r,s]=o.useState(1),[x,p]=o.useState(10),[h,j]=o.useState(""),{data:a,isLoading:g}=C(`per_page=${x}&page=${r}&${h}`);console.log("trend",a);const n=(a==null?void 0:a.data)||[],c=a==null?void 0:a.meta;return g?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-5 space-y-5",children:[e.jsx(f,{title:"Leave Trend",description:"Manage employees for you business"}),e.jsx(S,{setFilterParams:j})]}),e.jsxs(i,{children:[e.jsxs(N,{className:"space-y-4",fileName:"leave-trend-report",children:[e.jsx("div",{className:"flex-1 space-y-4 my-4",children:e.jsxs("div",{className:"text-center  ",children:[e.jsx("h2",{children:"Akaar IT"}),e.jsx("h3",{className:"text-xl",children:"Leave Trend Report"})]})}),e.jsxs("div",{className:"flex-1 space-y-4 w-full mx-auto",children:[e.jsx(L,{}),n?e.jsx(F,{tableData:n}):null]})]}),c&&e.jsx(P,{className:"px-4 pb-4",meta:c,dataCount:n.length,onPageChange:s,onPageSizeChange:p})]})]})};export{R as default};
