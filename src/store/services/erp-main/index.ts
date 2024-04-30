// import { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/utils/token";

export const authApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_MAIN_API,
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			// const token = (getState() as RootState).auth.token;
			const token = getToken();
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["user", "organizations", "locations"],
	endpoints: () => ({}),
});
