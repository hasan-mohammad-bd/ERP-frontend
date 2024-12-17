
import { PaginationInfo } from "@/types";
import { hrmApi } from "../..";
import { dailyAttendanceReport } from "./type"


const dailyAttendanceReportApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getDailyAttendanceReport: build.query<
    { data: dailyAttendanceReport[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `daily-attendance-report?${params}`,
      providesTags: ["daily-attendance-report"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDailyAttendanceReportQuery
} = dailyAttendanceReportApi;
