import { hrmApi } from "../..";
import { SalaryColumnDataType } from "./types";

const SalariesAPI = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSalaries: build.query<{ data: SalaryColumnDataType[] }, string>({
      query: (params) => `salaries?${params}`,
      providesTags: ["salaries"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSalariesQuery } = SalariesAPI;
