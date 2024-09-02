import {

} from "@/lib/validators"; 
import { authApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { UsersFormValues, UsersRow } from "@/lib/validators/web/users";


const userApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<
      { data: UsersRow[]; meta: PaginationInfo },
      string
    >({ 
      query: (params) => `users?${params}`, 
      providesTags: ["users"], 
    }),

    createUser: build.mutation<
      { data: UsersRow },
      FormData
    >({

      query: (newUser) => ({
        url: `users`,
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["users"], 
    }),
    removeUser: build.mutation<DeleteResponse, number>({
      query: (userId) => ({
        url: `users/${userId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["users"], 
    }),
    updateUser: build.mutation<{ data: UsersRow }, { userId: number, updatedUser: FormData }>({
      query: ({ userId, updatedUser }) => ({
        url: `users/${userId}`, 
        method: "POST", 
        body: updatedUser,
      }),
      invalidatesTags: ["users"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUsersQuery, 
  useCreateUserMutation, 
  useRemoveUserMutation, 
  useUpdateUserMutation 
} = userApi;
