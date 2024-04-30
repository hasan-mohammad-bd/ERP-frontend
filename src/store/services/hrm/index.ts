import { getToken } from "@/utils/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const hrmApi = createApi({
	reducerPath: "hrmApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_HRM_API,
		prepareHeaders: (headers) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			// const token = (getState() as RootState).auth.token;
			const token = getToken();
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["departments", "designations", "sections", "employee-classes", "employee-grades", "schedules", "vacancy-requisitions", "job-posts", "employment-status", "workplaces"],
	endpoints: () => ({}),
});
