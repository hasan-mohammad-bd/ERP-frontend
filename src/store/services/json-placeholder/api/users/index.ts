import { jsonPlaceholderApi } from "../..";
import { User } from "./types";

const extendedApi = jsonPlaceholderApi.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<User[], void>({
			query: () => "users",
			providesTags: ["users"],
		}),
	}),
	overrideExisting: false,
});

export const { useGetUsersQuery } = extendedApi;
