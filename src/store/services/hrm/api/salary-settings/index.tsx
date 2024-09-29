import { hrmApi } from "../..";
import {
  CreateSalaryCategoryValues,
  SalarySetupValues,
} from "@/lib/validators/hrm/salary-setup-types";

const salarySetupApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSalarySetups: build.query<SalarySetupValues, string | undefined>({
      query: (employee_id) => `salary-settings/${employee_id}`,
      providesTags: ["salary-settings"],
    }),
    createSalarySetup: build.mutation<
      { data: CreateSalaryCategoryValues },
      CreateSalaryCategoryValues
    >({
      query: (newSalarySetup) => ({
        url: `salary-settings`,
        method: "POST",
        body: newSalarySetup,
      }),
      invalidatesTags: ["salary-settings"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSalarySetupsQuery, useCreateSalarySetupMutation } =
  salarySetupApi;
