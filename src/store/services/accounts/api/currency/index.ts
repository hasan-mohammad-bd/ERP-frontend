import { CurrencyRow } from "@/lib/validators/accounts";
import { accountApi } from "../..";
import { PaginationInfo } from "@/types";

const currencyApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrencies: build.query<{data: CurrencyRow[],meta: PaginationInfo}, string>({
      query: (params) => `currencies?${params}`,
      providesTags: ["currencies"], 
    }),
  }),
  overrideExisting: false,
});

export const { useGetCurrenciesQuery } = currencyApi;
