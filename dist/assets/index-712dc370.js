import{ba as r}from"./index-d888fdd5.js";const u=r.injectEndpoints({endpoints:a=>({getLeaveGroups:a.query({query:e=>`leave-groups?${e}`,providesTags:["leave-groups"]}),createLeaveGroup:a.mutation({query:e=>({url:"leave-groups",method:"POST",body:e}),invalidatesTags:["leave-groups"]}),removeLeaveGroup:a.mutation({query:e=>({url:`leave-groups/${e}`,method:"DELETE"}),invalidatesTags:["leave-groups"]}),updateLeaveGroup:a.mutation({query:({leaveGroupId:e,updatedLeaveGroup:o})=>({url:`leave-groups/${e}`,method:"PUT",body:o}),invalidatesTags:["leave-groups"]})}),overrideExisting:!1}),{useGetLeaveGroupsQuery:t,useCreateLeaveGroupMutation:p,useRemoveLeaveGroupMutation:v,useUpdateLeaveGroupMutation:i}=u;export{i as a,v as b,t as c,p as u};
