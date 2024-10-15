
import { billingApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { UnitFormValues, UnitRow } from "@/lib/validators/billing/unit";

const unitApi = billingApi.injectEndpoints({
  endpoints: (build) => ({
    getUnit: build.query<
      { data: UnitRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `unit?${params}`,
      providesTags: ["unit"],
    }),
    createUnit: build.mutation<
      { data: UnitRow },
      UnitFormValues
    >({
      query: (newUnit) => ({
        url: `unit`,
        method: "POST",
        body: newUnit,
      }),
      invalidatesTags: ["unit"],
    }),
    removeUnit: build.mutation<DeleteResponse, number>({
      query: (unitId) => ({
        url: `unit/${unitId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["unit"],
    }),
    updateUnit: build.mutation<
      { data: UnitRow },
      { unitId: number, updatedUnit: UnitFormValues }
    >({
      query: ({ unitId, updatedUnit }) => ({
        url: `unit/${unitId}`,
        method: "PUT",
        body: updatedUnit,
      }),
      invalidatesTags: ["unit"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUnitQuery,
  useCreateUnitMutation,
  useRemoveUnitMutation,
  useUpdateUnitMutation

} = unitApi;
