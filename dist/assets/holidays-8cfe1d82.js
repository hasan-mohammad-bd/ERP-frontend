import{V as e}from"./index-4e4d6e52.js";const o=e.object({id:e.coerce.number().optional(),name:e.string().min(1,"Holiday name is required"),start_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"From Date is required"}),end_date:e.date().optional().refine(i=>i!==void 0&&!isNaN(i.getTime()),{message:"To Date is required"}),duration:e.string().optional(),note:e.string().min(1,"Note is required")}),r=e.object({holidays:e.array(o)});o.extend({id:e.coerce.number()});export{o as h,r as s};
