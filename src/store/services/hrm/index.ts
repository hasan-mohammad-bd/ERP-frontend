import { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const hrmApi = createApi({
	reducerPath: "hrmApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_HRM_API,
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["departments"],
	endpoints: () => ({}),
});
