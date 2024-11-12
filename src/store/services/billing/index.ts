import { getToken } from "@/utils/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const inventoryApi = createApi({
	reducerPath: "inventoryApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_INVENTORY_API,
		prepareHeaders: (headers) => {
			const token = getToken();
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["units","category","brand", "attribute-categories"],
	endpoints: () => ({}),
});
