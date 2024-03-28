import { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse } from "../types";

export const authApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api/",
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => ({
				url: "login",
				method: "POST",
				body: credentials,
			}),
		}),

		protected: builder.mutation<{ message: string }, void>({
			query: () => "protected",
		}),
	}),
});

export const { useLoginMutation, useProtectedMutation } = authApi;
