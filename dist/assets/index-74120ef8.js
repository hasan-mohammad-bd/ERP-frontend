import{bm as o}from"./index-4b1ad796.js";const i=o.injectEndpoints({endpoints:t=>({getSections:t.query({query:e=>`sections?${e}`,providesTags:["sections"]}),createSection:t.mutation({query:e=>({url:"sections",method:"POST",body:e}),invalidatesTags:["sections"]}),removeSection:t.mutation({query:e=>({url:`sections/${e}`,method:"DELETE"}),invalidatesTags:["sections"]}),updateSection:t.mutation({query:({sectionId:e,updatedSection:s})=>({url:`sections/${e}`,method:"PUT",body:s}),invalidatesTags:["sections"]})}),overrideExisting:!1}),{useGetSectionsQuery:a,useLazyGetSectionsQuery:c,useCreateSectionMutation:r,useRemoveSectionMutation:u,useUpdateSectionMutation:d}=i;export{d as a,u as b,a as c,c as d,r as u};
