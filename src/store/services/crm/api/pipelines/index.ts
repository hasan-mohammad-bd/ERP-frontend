import { crmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { PipelineFormValues,PipelineRow } from "@/lib/validators/crm/pipelines";

const pipelineApi = crmApi.injectEndpoints({
  endpoints: (build) => ({
    getPipelines: build.query<
      { data: PipelineRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `pipelines?${params}`,
      providesTags: ["pipelines"],
    }),
    getPipelineById: build.query<{ data: PipelineRow  }, number>({
      query: (pipelineId) => `pipelines/${pipelineId}`,
      providesTags: ["pipelines"],
    }),
    createPipeline: build.mutation<
      { data: PipelineRow },
      PipelineFormValues
    >({
      query: (newPipeline) => ({
        url: `pipelines`,
        method: "POST",
        body: newPipeline,
      }),
      invalidatesTags: ["pipelines"],
    }),
    removePipeline: build.mutation<DeleteResponse, number>({
      query: (pipelineId) => ({
        url: `pipelines/${pipelineId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pipelines"],
    }),
    updatePipeline: build.mutation<
      { data: PipelineRow },
      { pipelineId: number; updatedPipeline: PipelineFormValues }
    >({
      query: ({ pipelineId, updatedPipeline }) => ({
        url: `pipelines/${pipelineId}`,
        method: "PUT",
        body: updatedPipeline,
      }),
      invalidatesTags: ["pipelines"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPipelinesQuery,
  useGetPipelineByIdQuery,
  useCreatePipelineMutation,
  useRemovePipelineMutation,
  useUpdatePipelineMutation,
} = pipelineApi;
