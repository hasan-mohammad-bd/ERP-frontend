import{ar as e}from"./index-a2059318.js";const s=e.injectEndpoints({endpoints:o=>({getHolidays:o.query({query:a=>`holidays?${a}`,providesTags:["holidays"]}),createHoliday:o.mutation({query:a=>({url:"holidays",method:"POST",body:a}),invalidatesTags:["holidays"]}),removeHoliday:o.mutation({query:a=>({url:`holidays/${a}`,method:"DELETE"}),invalidatesTags:["holidays"]}),updateHoliday:o.mutation({query:({holidayId:a,updatedHoliday:i})=>({url:`holidays/${a}`,method:"PUT",body:i}),invalidatesTags:["holidays"]})}),overrideExisting:!1}),{useGetHolidaysQuery:d,useCreateHolidayMutation:y,useRemoveHolidayMutation:l,useUpdateHolidayMutation:r}=s;export{r as a,l as b,d as c,y as u};
