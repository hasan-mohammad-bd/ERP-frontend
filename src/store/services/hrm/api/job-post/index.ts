import {
  JobPostFromValues,
  type JobPostColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const jobPostApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getJobPosts: build.query<{ data: JobPostColumn[] }, void>({
      query: () => "job-posts",
      providesTags: ["job-posts"],
    }),
    createJobPost: build.mutation<
      { data: JobPostColumn },
      JobPostFromValues
    >({
      query: (newJobPost) => ({
        url: `job-posts`,
        method: "POST",
        body: newJobPost,
      }),
      invalidatesTags: ["job-posts"],
    }),
    removeJobPost: build.mutation<DeleteResponse, number>({
      query: (jobPostId) => ({
        url: `job-posts/${jobPostId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["job-posts"],
    }),
    updateJobPost: build.mutation<{ data: JobPostColumn }, { jobPostId: number, updatedJobPost: JobPostFromValues }>({
      query: ({ jobPostId, updatedJobPost }) => ({
        url: `job-posts/${jobPostId}`,
        method: "PUT", 
        body: updatedJobPost,
      }),
      invalidatesTags: ["job-posts"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetJobPostsQuery,
  useCreateJobPostMutation,
  useRemoveJobPostMutation,
  useUpdateJobPostMutation
} = jobPostApi;
