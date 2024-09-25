import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import {
  HolidayFormColumn,
  HolidayFormValues,
} from "@/lib/validators/hrm/holidays";

const holidaysApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getHolidays: build.query<
      { data: HolidayFormColumn[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `holidays?${params}`,
      providesTags: ["holidays"],
    }),
    createHoliday: build.mutation<
      { data: HolidayFormValues },
      HolidayFormValues
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
    updateHoliday: build.mutation<
      { data: HolidayFormColumn },
      { holidayId: number; updatedHoliday: HolidayFormColumn }
    >({
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
  useUpdateHolidayMutation,
} = holidaysApi;
