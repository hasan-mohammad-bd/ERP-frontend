import{bo as n}from"./index-ffb24eb6.js";const s=n.injectEndpoints({endpoints:a=>({getVacancyRequisitions:a.query({query:i=>`vacancy-requisitions?${i}`,providesTags:["vacancy-requisitions"]}),createVacancyRequisition:a.mutation({query:i=>({url:"vacancy-requisitions",method:"POST",body:i}),invalidatesTags:["vacancy-requisitions"]}),removeVacancyRequisition:a.mutation({query:i=>({url:`vacancy-requisitions/${i}`,method:"DELETE"}),invalidatesTags:["vacancy-requisitions"]}),updateVacancyRequisition:a.mutation({query:({vacancyRequisitionId:i,updatedVacancyRequisition:e})=>({url:`vacancy-requisitions/${i}`,method:"PUT",body:e}),invalidatesTags:["vacancy-requisitions"]})}),overrideExisting:!1}),{useGetVacancyRequisitionsQuery:o,useCreateVacancyRequisitionMutation:c,useRemoveVacancyRequisitionMutation:u,useUpdateVacancyRequisitionMutation:r}=s;export{c as a,r as b,u as c,o as u};
