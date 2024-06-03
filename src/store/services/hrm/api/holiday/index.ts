import {
  HolidayFromValues,
  type HolidayColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const holidaysApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getHolidays: build.query<{ data: HolidayColumn[] }, void>({
      query: () => "holidays",
      providesTags: ["holidays"],
    }),
    createHoliday: build.mutation<
      { data: HolidayColumn },
      HolidayFromValues
    >({
      query: (newHoliday) => ({
        url: `holidays`,
        method: "POST",
        body: newHoliday,
      }),
      invalidatesTags: ["holidays"],
    }),
    removeHoliday: build.mutation<DeleteResponse, number>({
      query: (holidayId) => ({
        url: `holidays/${holidayId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["holidays"],
    }),
    updateHoliday: build.mutation<{ data: HolidayColumn }, { holidayId: number, updatedHoliday: HolidayFromValues }>({
      query: ({ holidayId, updatedHoliday }) => ({
        url: `holidays/${holidayId}`,
        method: "PUT", 
        body: updatedHoliday,
      }),
      invalidatesTags: ["holidays"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetHolidaysQuery,
  useCreateHolidayMutation,
  useRemoveHolidayMutation,
  useUpdateHolidayMutation
} = holidaysApi;
