import { jsonPlaceholderApi } from "../..";
import { Post } from "./types";

const extendedApi = jsonPlaceholderApi.injectEndpoints({
	endpoints: (build) => ({
		getPosts: build.query<Post[], void>({
			query: () => "posts",
			providesTags: ["posts"],
		}),
		getPostById: build.query<Post, number>({
			query: (id) => "posts/" + id,
			providesTags: ["post"],
		}),
	}),
	overrideExisting: false,
});

export const { useGetPostsQuery } = extendedApi;
