import {
  SectionFromValues,
  type SectionColumn,
} from "@/lib/validators"; 
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const sectionApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSections: build.query<
    { data: SectionColumn[]; meta: PaginationInfo },
    string
  >({ 
      query: (params) => `sections?${params}`, 
      providesTags: ["sections"], 
    }),
    createSection: build.mutation<
      { data: SectionColumn },
      SectionFromValues
    >({
      query: (newSection) => ({
        url: `sections`,
        method: "POST",
        body: newSection,
      }),
      invalidatesTags: ["sections"], 
    }),
    removeSection: build.mutation<DeleteResponse, number>({
      query: (sectionId) => ({
        url: `sections/${sectionId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["sections"], 
    }),
    updateSection: build.mutation<{ data: SectionColumn }, { sectionId: number, updatedSection: SectionFromValues }>({ // Rename function to updateSection
      query: ({ sectionId, updatedSection }) => ({
        url: `sections/${sectionId}`, 
        method: "PUT", 
        body: updatedSection,
      }),
      invalidatesTags: ["sections"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSectionsQuery, 
  useCreateSectionMutation, 
  useRemoveSectionMutation, 
  useUpdateSectionMutation 
} = sectionApi;
