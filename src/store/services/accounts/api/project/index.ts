
import { ProjectFromValues, ProjectRow } from "@/lib/validators/accounts/projects";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const projectApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getProjects: build.query<
			{ data: ProjectRow[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `projects?${params}`,
			providesTags: ["projects"],
		}),
		createProject: build.mutation<
			{ data: ProjectRow },
			ProjectFromValues
		>({
			query: (newProject) => ({
				url: `projects`,
				method: "POST",
				body: newProject,
			}),
			invalidatesTags: ["projects"],
		}),
		removeProject: build.mutation<DeleteResponse, number>({
			query: (projectId) => ({
				url: `projects/${projectId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["projects"],
		}),
		updateProject: build.mutation<
			{ data: ProjectRow },
			{ projectId: number; updatedProject: ProjectFromValues }
		>({
			query: ({ projectId, updatedProject }) => ({
				url: `projects/${projectId}`,
				method: "PUT",
				body: updatedProject,
			}),
			invalidatesTags: ["projects"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetProjectsQuery,
	useCreateProjectMutation,
	useRemoveProjectMutation,
	useUpdateProjectMutation,
} = projectApi;
