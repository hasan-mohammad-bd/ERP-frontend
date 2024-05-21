import { authApi } from "../..";

import { RoleColumn } from "@/lib/validators"; // Assuming you have a RoleColumn type

const roleApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getRoles: build.query<{ data: RoleColumn[] }, void>({
      query: () => "roles", // Updated endpoint to "roles"
      providesTags: ["roles"], // Updated tag name
    }),
  }),
  overrideExisting: false,
});

export const { useGetRolesQuery } = roleApi;
