
import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../../..";
import { itemBarcodeWisePurchaseReportDataType } from "./type";



const itemWisePurchaseReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getItemWisePurchaseReport: build.query<

     { data: {
      report:itemBarcodeWisePurchaseReportDataType[]
     }; meta: PaginationInfo },
     string


    >({
      query: (params) => `report/item-wise-purchase?${params}`,
      providesTags: ["item-wise-purchase"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetItemWisePurchaseReportQuery
} = itemWisePurchaseReportApi;
