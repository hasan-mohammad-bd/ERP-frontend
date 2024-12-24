import { inventoryApi } from "../../..";
import { TopSoldItemType } from "./type";

const topSoldItemsApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getTopSoldItems: build.query<
      { data: TopSoldItemType[]; start_date: string; end_date: string },
      string
    >({
      query: (params) => `report/top-sold-items?${params}`,
      providesTags: ["top-sold-items"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTopSoldItemsQuery, useLazyGetTopSoldItemsQuery } =
  topSoldItemsApi;
