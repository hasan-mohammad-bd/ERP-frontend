<<<<<<<< HEAD:dist/assets/index-982e46b8.js
import{bi as e}from"./index-8b9ca140.js";const s=e.injectEndpoints({endpoints:o=>({getHolidays:o.query({query:a=>`holidays?${a}`,providesTags:["holidays"]}),createHoliday:o.mutation({query:a=>({url:"holidays",method:"POST",body:a}),invalidatesTags:["holidays"]}),removeHoliday:o.mutation({query:a=>({url:`holidays/${a}`,method:"DELETE"}),invalidatesTags:["holidays"]}),updateHoliday:o.mutation({query:({holidayId:a,updatedHoliday:i})=>({url:`holidays/${a}`,method:"PUT",body:i}),invalidatesTags:["holidays"]})}),overrideExisting:!1}),{useGetHolidaysQuery:d,useCreateHolidayMutation:y,useRemoveHolidayMutation:l,useUpdateHolidayMutation:r}=s;export{l as a,d as b,y as c,r as u};
========
import{bi as e}from"./index-d9fd53dc.js";const s=e.injectEndpoints({endpoints:o=>({getHolidays:o.query({query:a=>`holidays?${a}`,providesTags:["holidays"]}),createHoliday:o.mutation({query:a=>({url:"holidays",method:"POST",body:a}),invalidatesTags:["holidays"]}),removeHoliday:o.mutation({query:a=>({url:`holidays/${a}`,method:"DELETE"}),invalidatesTags:["holidays"]}),updateHoliday:o.mutation({query:({holidayId:a,updatedHoliday:i})=>({url:`holidays/${a}`,method:"PUT",body:i}),invalidatesTags:["holidays"]})}),overrideExisting:!1}),{useGetHolidaysQuery:d,useCreateHolidayMutation:y,useRemoveHolidayMutation:l,useUpdateHolidayMutation:r}=s;export{l as a,d as b,y as c,r as u};
>>>>>>>> main:dist/assets/index-08a80a74.js
