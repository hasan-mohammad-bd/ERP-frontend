import {
  type OrganizationColumn,
} from "@/lib/validators"; 
import { authApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const organizationApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getOrganizations: build.query<
    { data: OrganizationColumn[]; meta: PaginationInfo },
    string
  >({ 
      query: (params) => `organizations?${params}`, 
      providesTags: ["organizations"], 
    }),
    getOrganizationById: build.query<OrganizationColumn, string>(
      {
        query: (params) => `organizations/${params}`,

        providesTags: ["organizations"],
      }
    ),
    createOrganization: build.mutation<
      { data: OrganizationColumn },
      FormData 
    >({
      query: (newOrganization) => ({
        url: `organizations`,
        method: "POST",
        body: newOrganization,
      }),
      invalidatesTags: ["organizations"], 
    }),
    removeOrganization: build.mutation<DeleteResponse, number>({
      query: (organizationId) => ({
        url: `organizations/${organizationId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["organizations"], 
    }),
    updateOrganization: build.mutation<{ data: OrganizationColumn }, { organizationId: number, updatedOrganization: FormData  }>({
      query: ({ organizationId, updatedOrganization }) => ({
        url: `organizations/${organizationId}`, 
        method: "POST", 
        body: updatedOrganization,
      }),
      invalidatesTags: ["organizations"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetOrganizationsQuery, 
  useGetOrganizationByIdQuery,
  useCreateOrganizationMutation, 
  useRemoveOrganizationMutation, 
  useUpdateOrganizationMutation 
} = organizationApi;
