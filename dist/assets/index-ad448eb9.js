import{b9 as s}from"./index-43f423c4.js";const p=s.injectEndpoints({endpoints:a=>({getLeaveTypes:a.query({query:e=>`leave-types?${e}`,providesTags:["leave-types"]}),createLeaveType:a.mutation({query:e=>({url:"leave-types",method:"POST",body:e}),invalidatesTags:["leave-types"]}),removeLeaveType:a.mutation({query:e=>({url:`leave-types/${e}`,method:"DELETE"}),invalidatesTags:["leave-types"]}),updateLeaveType:a.mutation({query:({leaveTypeId:e,updatedLeaveType:t})=>({url:`leave-types/${e}`,method:"PUT",body:t}),invalidatesTags:["leave-types"]})}),overrideExisting:!1}),{useGetLeaveTypesQuery:v,useCreateLeaveTypeMutation:o,useRemoveLeaveTypeMutation:i,useUpdateLeaveTypeMutation:r}=p;export{r as a,i as b,v as c,o as u};
