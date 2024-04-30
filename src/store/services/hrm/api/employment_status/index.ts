import { hrmApi } from "../..";
import { EmploymentStatusColumn } from "@/lib/validators";

const employmentStatusApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmploymentStatuses: build.query<{data:EmploymentStatusColumn[]}, void>({
      query: () => "employment-status", // Updated endpoint
      providesTags: ["employment-status"], // Updated tag name
    }),
  }),
  overrideExisting: false,
});

export const { useGetEmploymentStatusesQuery } = employmentStatusApi;
