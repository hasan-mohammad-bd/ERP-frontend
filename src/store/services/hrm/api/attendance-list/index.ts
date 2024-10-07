import { AttendanceRow, attendanceCheckInFormValues } from "@/lib/validators/hrm/attendance-list";
import { hrmApi } from "../..";
import {  PaginationInfo } from "@/types";

const attendanceListApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getAttendanceList: build.query<{ data: AttendanceRow[]; meta: PaginationInfo }, string>({
      query: (params) =>
        `attendances?${params}`,
      providesTags: ["attendance-list"],
    }),
    // checkIn
    createAttendanceCheckIn: build.mutation<{ data: attendanceCheckInFormValues }, attendanceCheckInFormValues>({
      query: (payload) => ({
        url: "attendance-check-in",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["attendance-list"],
    }),

    // checkOut
    createAttendanceCheckOut: build.mutation<{ data: attendanceCheckInFormValues }, attendanceCheckInFormValues>({
      query: (payload) => ({
        url: "attendance-check-out",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["attendance-list"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAttendanceListQuery,
  useCreateAttendanceCheckInMutation,
  useCreateAttendanceCheckOutMutation,
} = attendanceListApi;

