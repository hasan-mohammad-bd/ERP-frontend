import { getToken } from "@/utils/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const accountApi = createApi({
	reducerPath: "accountApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_ACCOUNTS_API,
		prepareHeaders: (headers) => {
			const token = getToken();
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["financial-years","ledger-groups", "ledger-groups-tree", "ledger-groups-array", "ledger-accounts", "sub-accounts", "currencies", "accounts-settings", "entries", "catalogs/enum", "opening-balance", "general-ledger", "detailed-general-ledger", "trial-balance", "balance-sheet", "cost-categories", "cost-centers", "projects", "dashboard-summery"],
	endpoints: () => ({}),
});
