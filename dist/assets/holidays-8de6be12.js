import{Y as e}from"./index-1d5a1686.js";const a=e.object({id:e.coerce.number().optional(),name:e.string().min(1,"Holiday name is required"),start_date:e.date().nullable(),end_date:e.date().nullable(),duration:e.string().optional(),note:e.string().min(1,"Note is required")}),n=e.object({holidays:e.array(a)});a.extend({id:e.coerce.number()});export{a as h,n as s};
