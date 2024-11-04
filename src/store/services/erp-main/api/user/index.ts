import { authApi } from "../..";
import { LoginRequest, LoginResponse, LogoutResponse, User } from "./types";
import { setCredentials } from "../../slices/authSlice";
import { removeToken } from "@/utils/token";
import { toast } from "sonner";

const userApi = authApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => ({
				url: "login",
				method: "POST",
				body: credentials,
			}),
			invalidatesTags: ["user"],
		}),

		getUser: builder.query<{ data: User }, void | null>({
			query: () => "user",
			providesTags: ["user"],
		}),
		logoutUser: builder.mutation<LogoutResponse, void>({
			query: () => ({
				url: "logout",
				method: "POST",
			}),
			invalidatesTags: ["user"],

			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					await queryFulfilled;
					removeToken(); // Remove token from local storage
					toast("logout successful");
					console.log("logout successful");
					dispatch(setCredentials({ user: null, isLoading: false }));
					window.location.href = "/login";
				} catch (err) {
					console.log(err);
					// console.log("logout failed");
				}
			},
		}),
	}),
	overrideExisting: false,
});

export const { useLoginMutation, useGetUserQuery, useLogoutUserMutation } =
	userApi; // Added useLogoutUserMutation for accessing logoutUser mutation
