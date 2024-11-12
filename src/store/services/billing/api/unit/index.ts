
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { UnitFormValues, UnitRow } from "@/lib/validators/billing/unit";

const unitApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getUnits: build.query<
      { data: UnitRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `units?${params}`,
      providesTags: ["units"],
    }),
    createUnit: build.mutation<
      { data: UnitRow },
      UnitFormValues
    >({
      query: (newUnit) => ({
        url: `units`,
        method: "POST",
        body: newUnit,
      }),
      invalidatesTags: ["units"],
    }),
    updateUnit: build.mutation<
      { data: UnitRow },
      { unitId: number, updatedUnit: UnitFormValues }
    >({
      query: ({ unitId, updatedUnit }) => ({
        url: `units/${unitId}`,
        method: "PUT",
        body: updatedUnit,
      }),
      invalidatesTags: ["units"],
    }),
    removeUnit: build.mutation<DeleteResponse, number>({
      query: (unitId) => ({
        url: `units/${unitId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["units"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUnitsQuery,
  useLazyGetUnitsQuery,
  useCreateUnitMutation,
  useUpdateUnitMutation,
  useRemoveUnitMutation

} = unitApi;
