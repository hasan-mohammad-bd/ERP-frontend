import { inventoryApi } from "../../..";
import { WarehouseSaleItemBarcodeType } from "./type";

const warehouseWiseItemSaleApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getWarehouseWiseItemSaleSummary: build.query<
      {
        data: WarehouseSaleItemBarcodeType[];
        start_date: string;
        end_date: string;
      },
      string
    >({
      query: (params) => `report/warehouse-wise-item-sale-summary?${params}`,
      providesTags: ["warehouse-wise-item-sale-summary"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetWarehouseWiseItemSaleSummaryQuery } =
  warehouseWiseItemSaleApi;
