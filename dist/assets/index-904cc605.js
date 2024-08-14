import{aA as t}from"./index-e05f5e98.js";const n=t.injectEndpoints({endpoints:e=>({getReligions:e.query({query:()=>"religions",providesTags:["religions"]})}),overrideExisting:!1}),{useGetReligionsQuery:y}=n,a=t.injectEndpoints({endpoints:e=>({getGenders:e.query({query:()=>"genders",providesTags:["genders"]})}),overrideExisting:!1}),{useGetGendersQuery:g}=a,o=t.injectEndpoints({endpoints:e=>({getCountries:e.query({query:()=>"countries",providesTags:["countries"]})}),overrideExisting:!1}),{useGetCountriesQuery:E}=o,r=t.injectEndpoints({endpoints:e=>({getAddresses:e.query({query:()=>"addresses",providesTags:["addresses"]}),createAddress:e.mutation({query:s=>({url:"addresses",method:"POST",body:s}),invalidatesTags:["addresses","job-candidates","employees"]}),removeAddress:e.mutation({query:s=>({url:`addresses/${s}`,method:"DELETE"}),invalidatesTags:["addresses"]}),updateAddress:e.mutation({query:({addressId:s,updatedAddress:i})=>({url:`addresses/${s}`,method:"PUT",body:i}),invalidatesTags:["addresses","job-candidates","employees"]})}),overrideExisting:!1}),{useGetAddressesQuery:m,useCreateAddressMutation:v,useRemoveAddressMutation:T,useUpdateAddressMutation:q}=r,d=t.injectEndpoints({endpoints:e=>({getCities:e.query({query:()=>"cities",providesTags:["cities"]})}),overrideExisting:!1}),{useGetCitiesQuery:x}=d,u=t.injectEndpoints({endpoints:e=>({getEducation:e.query({query:()=>"education",providesTags:["education"]}),createEducation:e.mutation({query:s=>({url:"education",method:"POST",body:s}),invalidatesTags:["education","job-candidates","employees"]}),removeEducation:e.mutation({query:s=>({url:`education/${s}`,method:"DELETE"}),invalidatesTags:["education"]}),updateEducation:e.mutation({query:({educationId:s,updatedEducation:i})=>({url:`education/${s}`,method:"PUT",body:i}),invalidatesTags:["education","job-candidates","employees"]})}),overrideExisting:!1}),{useGetEducationQuery:k,useCreateEducationMutation:A,useRemoveEducationMutation:j,useUpdateEducationMutation:h}=u,c=t.injectEndpoints({endpoints:e=>({getExperiences:e.query({query:()=>"experiences",providesTags:["experiences"]}),createExperience:e.mutation({query:s=>({url:"experiences",method:"POST",body:s}),invalidatesTags:["experiences","job-candidates","employees"]}),removeExperience:e.mutation({query:s=>({url:`experiences/${s}`,method:"DELETE"}),invalidatesTags:["experiences"]}),updateExperience:e.mutation({query:({experienceId:s,updatedExperience:i})=>({url:`experiences/${s}`,method:"PUT",body:i}),invalidatesTags:["experiences","job-candidates","employees"]})}),overrideExisting:!1}),{useGetExperiencesQuery:M,useCreateExperienceMutation:S,useRemoveExperienceMutation:f,useUpdateExperienceMutation:G}=c,p=t.injectEndpoints({endpoints:e=>({getSkills:e.query({query:()=>"skills",providesTags:["skills"]}),createSkill:e.mutation({query:s=>({url:"skills",method:"POST",body:s}),invalidatesTags:["skills","job-candidates","employees"]}),removeSkill:e.mutation({query:s=>({url:`skills/${s}`,method:"DELETE"}),invalidatesTags:["skills"]}),updateSkill:e.mutation({query:({skillId:s,updatedSkill:i})=>({url:`skills/${s}`,method:"PUT",body:i}),invalidatesTags:["skills","job-candidates","employees"]})}),overrideExisting:!1}),{useGetSkillsQuery:C,useCreateSkillMutation:P,useRemoveSkillMutation:Q,useUpdateSkillMutation:U}=p;export{q as a,E as b,x as c,A as d,h as e,S as f,G as g,P as h,U as i,y as j,g as k,v as u};
