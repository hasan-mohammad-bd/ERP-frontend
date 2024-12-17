
import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../../..";
import { itemWisePurchaseReportDataType } from "./type";



const itemWisePurchaseReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getItemWisePurchaseReport: build.query<

     { data: {
      report:itemWisePurchaseReportDataType[]
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
