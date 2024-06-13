import { getToken } from "@/utils/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const accountApi = createApi({
	reducerPath: "accountApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_ACCOUNT_API,
		prepareHeaders: (headers) => {
			const token = getToken();
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["financial-years", "ledger-groups", "ledger-accounts", "sub-accounts"],
	endpoints: () => ({}),
});
