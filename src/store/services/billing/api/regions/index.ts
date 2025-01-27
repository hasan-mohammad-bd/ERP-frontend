import { DeleteResponse, PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { DivisionFormValues, DivisionRow } from "@/lib/validators/billing/regions";

const regionsApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getRegion: build.query<
      { data: DivisionFormValues[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `regions?${params}`,
      providesTags: ["regions"],
    }),

    createRegion: build.mutation<
      { data: DivisionRow }, // Adjust the response type if necessary
      FormData // Expect FormData here as well
    >({
      query: (formData) => ({
        url: `regions`,
        method: "POST",
        body: formData, // FormData is sent here
      }),
      invalidatesTags: ["regions"],
    }),

    removeRegion: build.mutation<DeleteResponse, number>({
      query: (regionId) => ({
        url: `regions/${regionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["regions"],
    }),
    updateRegion: build.mutation<
      { data: DivisionRow },
      { regionId: number; updatedRegion: FormData }
    >({
      query: ({ regionId, updatedRegion }) => ({
        url: `regions/${regionId}`,
        method: "POST",
        body: updatedRegion,
      }),
      invalidatesTags: ["regions"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetRegionQuery,
  useCreateRegionMutation,
  useRemoveRegionMutation,
  useUpdateRegionMutation,
} = regionsApi;
