import {
  JobCandidateFromValues,
  type JobCandidateColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const jobCandidateApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getJobCandidates: build.query<
    { data: JobCandidateColumn[]; meta: PaginationInfo },
    string
  >({
      query: (params) => `job-candidates?${params}`,
      providesTags: ["job-candidates"],
    }),
    createJobCandidate: build.mutation<
      { data: JobCandidateColumn },
      JobCandidateFromValues
    >({
      query: (newJobCandidate) => ({
        url: `job-candidates`,
        method: "POST",
        body: newJobCandidate,
      }),
      invalidatesTags: ["job-candidates"],
    }),
    removeJobCandidate: build.mutation<DeleteResponse, number>({
      query: (jobCandidateId) => ({
        url: `job-candidates/${jobCandidateId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["job-candidates"],
    }),
    updateJobCandidate: build.mutation<{ data: JobCandidateColumn }, { jobCandidateId: number, updatedJobCandidate: JobCandidateFromValues }>({
      query: ({ jobCandidateId, updatedJobCandidate }) => ({
        url: `job-candidates/${jobCandidateId}`,
        method: "PUT", 
        body: updatedJobCandidate,
      }),
      invalidatesTags: ["job-candidates"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetJobCandidatesQuery,
  useCreateJobCandidateMutation,
  useRemoveJobCandidateMutation,
  useUpdateJobCandidateMutation
} = jobCandidateApi;
