<<<<<<<< HEAD:dist/assets/holidays-8debedc2.js
import{V as e}from"./index-8b9ca140.js";const o=e.object({id:e.coerce.number().optional(),name:e.string().min(1,"Holiday name is required"),start_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"From Date is required"}),end_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"To Date is required"}),duration:e.string().optional(),note:e.string().min(1,"Note is required")}),r=e.object({holidays:e.array(o)});o.extend({id:e.coerce.number()});export{o as h,r as s};
========
import{V as e}from"./index-d9fd53dc.js";const o=e.object({id:e.coerce.number().optional(),name:e.string().min(1,"Holiday name is required"),start_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"From Date is required"}),end_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"To Date is required"}),duration:e.string().optional(),note:e.string().min(1,"Note is required")}),r=e.object({holidays:e.array(o)});o.extend({id:e.coerce.number()});export{o as h,r as s};
>>>>>>>> main:dist/assets/holidays-36b61f08.js
