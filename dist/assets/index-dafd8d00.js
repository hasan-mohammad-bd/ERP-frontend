import{ar as t}from"./index-d30437cb.js";const s=t.injectEndpoints({endpoints:e=>({getDesignation:e.query({query:i=>`designations?${i}`,providesTags:["designations"]}),createDesignation:e.mutation({query:i=>({url:"designations",method:"POST",body:i}),invalidatesTags:["designations"]}),removeDesignation:e.mutation({query:i=>({url:`designations/${i}`,method:"DELETE"}),invalidatesTags:["designations"]}),updateDesignation:e.mutation({query:({designationId:i,updatedDesignation:n})=>({url:`designations/${i}`,method:"PUT",body:n}),invalidatesTags:["designations"]})}),overrideExisting:!1}),{useGetDesignationQuery:o,useCreateDesignationMutation:g,useRemoveDesignationMutation:d,useUpdateDesignationMutation:r}=s;export{r as a,d as b,o as c,g as u};
