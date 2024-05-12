import {
  ExperienceFormValues,
  type ExperienceColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const experiencesApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getExperiences: build.query<{ data: ExperienceColumn[] }, void>({
      query: () => "experiences",
      providesTags: ["experiences"],
    }),
    createExperience: build.mutation<
      { data: ExperienceColumn },
      ExperienceFormValues
    >({
      query: (newExperience) => ({
        url: `experiences`,
        method: "POST",
        body: newExperience,
      }),
      invalidatesTags: ["experiences", "job-candidates"],
    }),
    removeExperience: build.mutation<DeleteResponse, number>({
      query: (experienceId) => ({
        url: `experiences/${experienceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["experiences"],
    }),
    updateExperience: build.mutation<{ data: ExperienceColumn }, { experienceId: number, updatedExperience: ExperienceFormValues }>({
      query: ({ experienceId, updatedExperience }) => ({
        url: `experiences/${experienceId}`,
        method: "PUT",
        body: updatedExperience,
      }),
      invalidatesTags: ["experiences", "job-candidates"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetExperiencesQuery,
  useCreateExperienceMutation,
  useRemoveExperienceMutation,
  useUpdateExperienceMutation
} = experiencesApi;
