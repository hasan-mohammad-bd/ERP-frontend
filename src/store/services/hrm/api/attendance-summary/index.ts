import { PaginationInfo } from "@/types";
import { hrmApi } from "../..";
import { attendanceSummary } from "./type";

const attendanceSummaryApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getAttendanceSummary: build.query<
      { data: attendanceSummary[], meta: PaginationInfo },
      string
    >({
      query: (params) => `attendance-summary-report?${params}`,
      providesTags: ["attendance-summary-report"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAttendanceSummaryQuery
} = attendanceSummaryApi;
