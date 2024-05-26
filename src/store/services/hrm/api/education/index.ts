import {
  EducationFromValues, 
  type EducationColumn, 
} from "@/lib/validators"; 
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const educationApi = hrmApi.injectEndpoints({ 
  endpoints: (build) => ({
    getEducation: build.query<{ data: EducationColumn[] }, void>({ 
      query: () => "education",
      providesTags: ["education"], 
    }),
    createEducation: build.mutation<
      { data: EducationColumn }, 
      EducationFromValues 
    >({
      query: (newEducation) => ({
        url: `education`, 
        method: "POST",
        body: newEducation,
      }),
      invalidatesTags: ["education", "job-candidates", "employees"], 
    }),
    removeEducation: build.mutation<DeleteResponse, number>({
      query: (educationId) => ({
        url: `education/${educationId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["education"], 
    }),
    updateEducation: build.mutation<{ data: EducationColumn }, { educationId: number, updatedEducation: EducationFromValues }>({ 
      query: ({ educationId, updatedEducation }) => ({
        url: `education/${educationId}`,
        method: "PUT", 
        body: updatedEducation,
      }),
      invalidatesTags: ["education", "job-candidates", "employees"], 
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEducationQuery, 
  useCreateEducationMutation, 
  useRemoveEducationMutation, 
  useUpdateEducationMutation 
} = educationApi;
