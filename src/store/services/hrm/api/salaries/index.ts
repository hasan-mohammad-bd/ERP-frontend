import { PaginationInfo } from "@/types";
import { hrmApi } from "../..";
import { SalariesRow } from "./types";

const SalariesAPI = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSalaries: build.query<
      { data: SalariesRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `salaries?${params}`,
      providesTags: ["salaries"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSalariesQuery, useLazyGetSalariesQuery } = SalariesAPI;
