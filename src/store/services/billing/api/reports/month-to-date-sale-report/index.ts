import { inventoryApi } from "../../..";
import { MonthToDateSaleReport } from "./type";

const monthDateSaleApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getMonthDateSale: build.query<
      { data: MonthToDateSaleReport[] },
      string
    >({
      query: (params) => `report/month-date-sale?${params}`,
      providesTags: ["month-date-sale-report"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMonthDateSaleQuery
} = monthDateSaleApi;
