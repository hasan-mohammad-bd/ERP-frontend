import { hrmApi } from "../..";
import { SalariesRow } from "../salaries/types";
import { salaryAdjustmentFormValues } from "./types";
import { PaginationInfo } from "@/types";

const salaryAdjustmentAPI = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    createSalaryAdjustment: build.mutation<
      { data: SalariesRow[]; meta: PaginationInfo },
      salaryAdjustmentFormValues
    >({
      query: (salaryAdjustmentData) => ({
        url: `salary-adjustment`,
        method: "POST",
        body: salaryAdjustmentData,
      }),
      invalidatesTags: ["salaries"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateSalaryAdjustmentMutation } = salaryAdjustmentAPI;
