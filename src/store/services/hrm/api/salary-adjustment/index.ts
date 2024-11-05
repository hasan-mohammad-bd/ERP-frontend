import { hrmApi } from "../..";
import { SalaryColumnDataType } from "../salaries/types";
import { salaryAdjustmentFormValues } from "./types";

const salaryAdjustmentAPI = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    createSalaryAdjustment: build.mutation<
      { data: SalaryColumnDataType[] },
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
