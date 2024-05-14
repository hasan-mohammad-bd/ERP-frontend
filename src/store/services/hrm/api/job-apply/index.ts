import {
  JobApplyFormValues,
  JobApplyStatusColumn,
  type JobApplyColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const jobApplyApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getJobApplies: build.query<{ data: JobApplyColumn[] }, void>({
      query: () => "job-applies", 
      providesTags: ["job-applies"], 
    }),
    getJobApplyStatusData: build.query<{ job_apply_status: JobApplyStatusColumn[] }, void>({
      query: () => "job-applies/additional/list", 
      providesTags: ["job-applies-status"], 
    }),
    createJobApply: build.mutation<
      { data: JobApplyColumn },
      JobApplyFormValues
    >({
      query: (newJobApply) => ({
        url: `job-applies`, 
        method: "POST",
        body: newJobApply,
      }),
      invalidatesTags: ["job-applies"], 
    }),
    removeJobApply: build.mutation<DeleteResponse, number>({
      query: (jobApplyId) => ({
        url: `job-applies/${jobApplyId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["job-applies"], 
    }),
    updateJobApply: build.mutation<{ data: JobApplyColumn }, { jobApplyId: number, updatedJobApply: JobApplyFormValues }>({
      query: ({ jobApplyId, updatedJobApply }) => ({
        url: `job-applies/${jobApplyId}`, 
        method: "PUT", 
        body: updatedJobApply,
      }),
      invalidatesTags: ["job-applies"], 
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetJobAppliesQuery, 
  useGetJobApplyStatusDataQuery,
  useCreateJobApplyMutation, 
  useRemoveJobApplyMutation, 
  useUpdateJobApplyMutation 
} = jobApplyApi;
