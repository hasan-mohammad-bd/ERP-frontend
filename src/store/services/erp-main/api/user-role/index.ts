import {

} from "@/lib/validators"; 
import { authApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { RoleFormValues, RoleRow } from "@/lib/validators/web/user-role";

const roleApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getRoles: build.query<
      { data: RoleRow[]; meta: PaginationInfo },
      string
    >({ 
      query: (params) => `roles?${params}`, 
      providesTags: ["roles"], 
    }),
    getPermission: build.query<
      string[],
      void
    >({ 
      query: () => `permissions`, 
      providesTags: ["permissions"], 
    }),
    createRole: build.mutation<
      { data: RoleRow },
      RoleFormValues
    >({
      query: (newRole) => ({
        url: `roles`,
        method: "POST",
        body: newRole,
      }),
      invalidatesTags: ["roles"], 
    }),
    removeRole: build.mutation<DeleteResponse, number>({
      query: (roleId) => ({
        url: `roles/${roleId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["roles"], 
    }),
    updateRole: build.mutation<{ data: RoleRow }, { roleId: number, updatedRole: RoleFormValues }>({
      query: ({ roleId, updatedRole }) => ({
        url: `roles/${roleId}`, 
        method: "PUT", 
        body: updatedRole,
      }),
      invalidatesTags: ["roles"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetRolesQuery, 
  useGetPermissionQuery,
  useCreateRoleMutation, 
  useRemoveRoleMutation, 
  useUpdateRoleMutation 
} = roleApi;
