import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { RegionUserDataType } from "./type";
import {
  ApplyRegionUserRow,
  RegionUserFormValues,
} from "@/lib/validators/billing/apply-region-user";

const regionUserApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getRegionUser: build.query<
      { data: RegionUserDataType[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `region-user?${params}`,
      providesTags: ["region-user"],
    }),
    createApplyRegionUser: build.mutation<
      { data: ApplyRegionUserRow }, // Adjust the response type if necessary
      Pick<RegionUserFormValues, "user_id" | "region_id" | "effective_date"> // Expect FormData here as well
    >({
      query: (formData) => ({
        url: `apply-region-user`,
        method: "POST",
        body: formData, // FormData is sent here
      }),
      invalidatesTags: ["region-user"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRegionUserQuery, useCreateApplyRegionUserMutation } =
  regionUserApi;
