import{aD as t}from"./index-6c9c37b6.js";const a=t.injectEndpoints({endpoints:s=>({getSchedules:s.query({query:e=>`schedules?${e}`,providesTags:["schedules"]}),createSchedule:s.mutation({query:e=>({url:"schedules",method:"POST",body:e}),invalidatesTags:["schedules"]}),removeSchedule:s.mutation({query:e=>({url:`schedules/${e}`,method:"DELETE"}),invalidatesTags:["schedules"]}),updateSchedule:s.mutation({query:({scheduleId:e,updatedSchedule:u})=>({url:`schedules/${e}`,method:"PUT",body:u}),invalidatesTags:["schedules"]})}),overrideExisting:!1}),{useGetSchedulesQuery:c,useCreateScheduleMutation:o,useRemoveScheduleMutation:h,useUpdateScheduleMutation:l}=a;export{o as a,l as b,h as c,c as u};
