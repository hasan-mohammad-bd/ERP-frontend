import {
  ScheduleFromValues,
  type ScheduleColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const schedulesApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSchedules: build.query<{ data: ScheduleColumn[] }, void>({
      query: () => "schedules",
      providesTags: ["schedules"],
    }),
    createSchedule: build.mutation<
      { data: ScheduleColumn },
      ScheduleFromValues
    >({
      query: (newSchedule) => ({
        url: `schedules`,
        method: "POST",
        body: newSchedule,
      }),
      invalidatesTags: ["schedules"],
    }),
    removeSchedule: build.mutation<DeleteResponse, number>({
      query: (scheduleId) => ({
        url: `schedules/${scheduleId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["schedules"],
    }),
    updateSchedule: build.mutation<{ data: ScheduleColumn }, { scheduleId: number, updatedSchedule: ScheduleFromValues }>({
      query: ({ scheduleId, updatedSchedule }) => ({
        url: `schedules/${scheduleId}`,
        method: "PUT", 
        body: updatedSchedule,
      }),
      invalidatesTags: ["schedules"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSchedulesQuery,
  useCreateScheduleMutation,
  useRemoveScheduleMutation,
  useUpdateScheduleMutation
} = schedulesApi;
