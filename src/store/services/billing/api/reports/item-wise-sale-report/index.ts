
import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../../..";
import { itemWiseSaleReportDataType } from "./type";

const itemWiseSaleReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getItemWiseSaleReport: build.query<

     { data: {
      report:itemWiseSaleReportDataType[]
     }; meta: PaginationInfo },
     string


    >({
      query: (params) => `report/item-wise-sales-report?${params}`,
      providesTags: ["item-wise-sale"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetItemWiseSaleReportQuery
} = itemWiseSaleReportApi;
