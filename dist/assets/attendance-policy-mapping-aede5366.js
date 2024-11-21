import{bi as n,V as t,c1 as i}from"./index-4e4d6e52.js";import{e as c}from"./index-18a5a4a9.js";const l=n.injectEndpoints({endpoints:o=>({getEmployeeAttendancePolicies:o.query({query:e=>`employee-attendance-policies?${e}`,providesTags:["employee-attendance-policies"]}),createEmployeeAttendancePolicy:o.mutation({query:e=>({url:"employee-attendance-policies",method:"POST",body:e}),invalidatesTags:["employee-attendance-policies"]}),removeEmployeeAttendancePolicy:o.mutation({query:e=>({url:`employee-attendance-policies/${e}`,method:"DELETE"}),invalidatesTags:["employee-attendance-policies"]}),updateEmployeeAttendancePolicy:o.mutation({query:({attendancePolicyId:e,updatedAttendancePolicy:a})=>({url:`employee-attendance-policies/${e}`,method:"PUT",body:a}),invalidatesTags:["employee-attendance-policies"]})}),overrideExisting:!1}),{useGetEmployeeAttendancePoliciesQuery:s,useCreateEmployeeAttendancePolicyMutation:d,useRemoveEmployeeAttendancePolicyMutation:r,useUpdateEmployeeAttendancePolicyMutation:u}=l,p=t.object({effective_date:t.string().date(),attendance_policy_id:t.string(),employee_ids:t.coerce.number().array().optional().nullable(),employee_id:t.coerce.string().optional().nullable()});p.extend({id:t.coerce.number(),attendance_policy:c,employee_id:t.coerce.number(),employee:i});export{u as a,r as b,s as c,p as e,d as u};
