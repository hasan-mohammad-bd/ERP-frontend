import{b9 as d}from"./index-43f423c4.js";const o=d.injectEndpoints({endpoints:e=>({getJobCandidates:e.query({query:a=>`job-candidates?${a}`,providesTags:["job-candidates"]}),createJobCandidate:e.mutation({query:a=>({url:"job-candidates",method:"POST",body:a}),invalidatesTags:["job-candidates"]}),removeJobCandidate:e.mutation({query:a=>({url:`job-candidates/${a}`,method:"DELETE"}),invalidatesTags:["job-candidates"]}),updateJobCandidate:e.mutation({query:({jobCandidateId:a,updatedJobCandidate:t})=>({url:`job-candidates/${a}`,method:"PUT",body:t}),invalidatesTags:["job-candidates"]})}),overrideExisting:!1}),{useGetJobCandidatesQuery:n,useCreateJobCandidateMutation:s,useRemoveJobCandidateMutation:r,useUpdateJobCandidateMutation:b}=o;export{s as a,b,r as c,n as u};
