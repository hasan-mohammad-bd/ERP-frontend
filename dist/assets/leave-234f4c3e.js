import{Q as e,cI as a,bK as s}from"./index-464ea72c.js";const r=e.object({name:e.string().min(2,{message:"Name must be at least 2 characters."}),short_code:e.string({required_error:"Short code is required"}),maternity_leave:e.number(),unpaid_leave:e.number()}),t=r.extend({id:e.coerce.number().int().min(0,{message:"Id must be at least 0."}).max(9999,{message:"Id must be at most 9999."})}),n=e.object({leave_type_id:e.string(),leave_count:e.coerce.number()}),m=e.object({name:e.string().min(2,{message:"Name must be at least 2 characters."}),leave:e.array(n)}),o=e.object({leave_type:t,id:e.coerce.number(),leave_count:e.coerce.number()});m.extend({id:e.coerce.number(),leave_group_types:e.array(o)}).omit({leave:!0});const c=e.object({employee_id:e.string(),start_date_time:e.string(),end_date_time:e.string(),status:e.string(),subject:e.string().optional().nullable(),description:e.string().optional().nullable(),leave_type_id:e.string(),files:a});c.extend({id:e.coerce.number().int().min(0,{message:"Id must be at least 0."}).max(9999,{message:"Id must be at most 9999."}),employee:s,leave_type:t});const l=e.object({ids:e.array(e.coerce.number()),status:e.string()});export{l as a,r as b,m as c,c as l};
