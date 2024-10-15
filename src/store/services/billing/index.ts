import { getToken } from "@/utils/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const billingApi = createApi({
	reducerPath: "billingApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BILLING_API,
		prepareHeaders: (headers) => {
			const token = getToken();
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["unit","category","brand"],
	endpoints: () => ({}),
});
