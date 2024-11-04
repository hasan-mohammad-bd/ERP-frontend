import { EmployeeSalaryCertificate } from "@/lib/validators/hrm/salary-certificate";
import { hrmApi } from "../..";

const salaryCertificateApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeSalaryCertificate: build.query<
      EmployeeSalaryCertificate,
      string
    >({
      query: (employeeId) => `salary-settings/${employeeId}`,
      providesTags: ["salary-settings"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetEmployeeSalaryCertificateQuery } = salaryCertificateApi;
