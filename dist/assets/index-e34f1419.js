<<<<<<<< HEAD:dist/assets/index-e34f1419.js
import{bo as e}from"./index-a17decc1.js";const a=e.injectEndpoints({endpoints:s=>({getJobPosts:s.query({query:o=>`job-posts?${o}`,providesTags:["job-posts"]}),createJobPost:s.mutation({query:o=>({url:"job-posts",method:"POST",body:o}),invalidatesTags:["job-posts"]}),removeJobPost:s.mutation({query:o=>({url:`job-posts/${o}`,method:"DELETE"}),invalidatesTags:["job-posts"]}),updateJobPost:s.mutation({query:({jobPostId:o,updatedJobPost:t})=>({url:`job-posts/${o}`,method:"PUT",body:t}),invalidatesTags:["job-posts"]})}),overrideExisting:!1}),{useGetJobPostsQuery:r,useCreateJobPostMutation:b,useRemoveJobPostMutation:u,useUpdateJobPostMutation:n}=a;export{b as a,n as b,u as c,r as u};
========
import{bo as e}from"./index-df507673.js";const a=e.injectEndpoints({endpoints:s=>({getJobPosts:s.query({query:o=>`job-posts?${o}`,providesTags:["job-posts"]}),createJobPost:s.mutation({query:o=>({url:"job-posts",method:"POST",body:o}),invalidatesTags:["job-posts"]}),removeJobPost:s.mutation({query:o=>({url:`job-posts/${o}`,method:"DELETE"}),invalidatesTags:["job-posts"]}),updateJobPost:s.mutation({query:({jobPostId:o,updatedJobPost:t})=>({url:`job-posts/${o}`,method:"PUT",body:t}),invalidatesTags:["job-posts"]})}),overrideExisting:!1}),{useGetJobPostsQuery:r,useCreateJobPostMutation:b,useRemoveJobPostMutation:u,useUpdateJobPostMutation:n}=a;export{b as a,n as b,u as c,r as u};
>>>>>>>> main:dist/assets/index-07fa01a8.js
