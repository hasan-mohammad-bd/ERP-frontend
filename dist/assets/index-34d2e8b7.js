import{bh as e,bg as i}from"./index-e4d4ab45.js";const o=e.object({day:e.string().optional().nullable(),in_time:e.string(),delay_buffer_time:e.string(),ex_delay_buffer_time:e.string(),break_time:e.coerce.number(),working_hour:e.coerce.number(),out_time:e.string(),working_type:e.string()}),c=e.object({name:e.string().min(2,{message:"Name must be at least 2 characters."}),in_time:e.string(),delay_buffer_time:e.string(),ex_delay_buffer_time:e.string(),break_time:e.coerce.number(),working_hour:e.coerce.number(),out_time:e.string(),ignore_overtime:e.number(),exclude_attendance_report:e.number(),discard_weekend_attendance:e.number(),days:o.array().optional().nullable()}),d=c.extend({id:e.coerce.number()}),r=i.injectEndpoints({endpoints:n=>({getAttendancePolicies:n.query({query:t=>`attendance-policy?${t}`,providesTags:["attendance-policy"]}),createAttendancePolicy:n.mutation({query:t=>({url:"attendance-policy",method:"POST",body:t}),invalidatesTags:["attendance-policy"]}),removeAttendancePolicy:n.mutation({query:t=>({url:`attendance-policy/${t}`,method:"DELETE"}),invalidatesTags:["attendance-policy"]}),updateAttendancePolicy:n.mutation({query:({attendancePolicyId:t,updatedAttendancePolicy:a})=>({url:`attendance-policy/${t}`,method:"PUT",body:a}),invalidatesTags:["attendance-policy"]})}),overrideExisting:!1}),{useGetAttendancePoliciesQuery:u,useCreateAttendancePolicyMutation:l,useRemoveAttendancePolicyMutation:m,useUpdateAttendancePolicyMutation:y}=r;export{l as a,y as b,c,m as d,d as e,u};
