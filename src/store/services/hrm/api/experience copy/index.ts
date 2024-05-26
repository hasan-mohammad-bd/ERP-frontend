import {
  SkillFormValues,
 SkillColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const skillsApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<{ data: SkillColumn[] }, void>({
      query: () => "skills",
      providesTags: ["skills"],
    }),
    createSkill: build.mutation<
      { data: SkillColumn },
      SkillFormValues
    >({
      query: (newSkill) => ({
        url: `skills`,
        method: "POST",
        body: newSkill,
      }),
      invalidatesTags: ["skills", "job-candidates", "employees"],
    }),
    removeSkill: build.mutation<DeleteResponse, number>({
      query: (skillId) => ({
        url: `skills/${skillId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skills"],
    }),
    updateSkill: build.mutation<{ data: SkillColumn }, { skillId: number, updatedSkill: SkillFormValues }>({
      query: ({ skillId, updatedSkill }) => ({
        url: `skills/${skillId}`,
        method: "PUT",
        body: updatedSkill,
      }),
      invalidatesTags: ["skills", "job-candidates", "employees"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSkillsQuery,
  useCreateSkillMutation,
  useRemoveSkillMutation,
  useUpdateSkillMutation
} = skillsApi;
