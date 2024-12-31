import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { SupplierWiseSaleSummaryType, SupplierWiseSaleItemType } from "./type";

const RepresentativeWiseSaleReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSupplierWiseSaleReport: build.query<
      {
        data: SupplierWiseSaleItemType[];
        start_date: string;
        end_date: string;
        total: SupplierWiseSaleSummaryType;
        meta: PaginationInfo;
      },
      string
    >({
      query: (params) => `report/supplier-wise-sales?${params}`,
      providesTags: ["supplier-wise-sales"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSupplierWiseSaleReportQuery } =
  RepresentativeWiseSaleReportApi;
