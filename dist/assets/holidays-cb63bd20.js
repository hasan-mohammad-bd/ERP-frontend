<<<<<<<< HEAD:dist/assets/holidays-03a63fe5.js
import{Q as e}from"./index-4b237266.js";const o=e.object({id:e.coerce.number().optional(),name:e.string().min(1,"Holiday name is required"),start_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"From Date is required"}),end_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"To Date is required"}),duration:e.string().optional(),note:e.string().min(1,"Note is required")}),r=e.object({holidays:e.array(o)});o.extend({id:e.coerce.number()});export{o as h,r as s};
========
import{Q as e}from"./index-945ff9a6.js";const o=e.object({id:e.coerce.number().optional(),name:e.string().min(1,"Holiday name is required"),start_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"From Date is required"}),end_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"To Date is required"}),duration:e.string().optional(),note:e.string().min(1,"Note is required")}),r=e.object({holidays:e.array(o)});o.extend({id:e.coerce.number()});export{o as h,r as s};
>>>>>>>> 5642829550ae661cfbd9cc1d4e8aa9666d0f3ce1:dist/assets/holidays-cb63bd20.js
