import{V as e,c9 as t,c1 as r,ca as s}from"./index-52204ff5.js";const n=e.object({name:e.string().min(2,{message:"Name must be at least 2 characters."}),short_code:e.string({required_error:"Short code is required"}),maternity_leave:e.number(),unpaid_leave:e.number()}),a=n.extend({id:e.coerce.number()}),c=e.object({leave_type_id:e.string(),leave_count:e.coerce.number()}),o=e.object({name:e.string().min(2,{message:"Name must be at least 2 characters."}),leave:e.array(c)}),m=e.object({leave_type:a,id:e.coerce.number(),leave_count:e.coerce.number()});o.extend({id:e.coerce.number(),leave_group_types:e.array(m)}).omit({leave:!0});const i=e.object({employee_id:e.coerce.number(),start_date_time:e.string(),end_date_time:e.string(),status:e.string(),subject:e.string().optional().nullable(),description:e.string().optional().nullable(),leave_type_id:e.string(),files:t});i.extend({id:e.coerce.number().int().min(0,{message:"Id must be at least 0."}).max(9999,{message:"Id must be at most 9999."}),employee:r,leave_type:a,approval:s});const u=e.object({ids:e.array(e.coerce.number()),status:e.string()});export{u as a,n as b,o as c,i as l};
