import{aE as t}from"./index-4c394285.js";const o=t.injectEndpoints({endpoints:i=>({getOrganizations:i.query({query:a=>`organizations?${a}`,providesTags:["organizations"]}),createOrganization:i.mutation({query:a=>({url:"organizations",method:"POST",body:a}),invalidatesTags:["organizations"]}),removeOrganization:i.mutation({query:a=>({url:`organizations/${a}`,method:"DELETE"}),invalidatesTags:["organizations"]}),updateOrganization:i.mutation({query:({organizationId:a,updatedOrganization:n})=>({url:`organizations/${a}`,method:"PUT",body:n}),invalidatesTags:["organizations"]})}),overrideExisting:!1}),{useGetOrganizationsQuery:r,useCreateOrganizationMutation:s,useRemoveOrganizationMutation:g,useUpdateOrganizationMutation:u}=o;export{u as a,g as b,r as c,s as u};
