
import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../../..";
import { supplierWisePurchaseReportDataType } from "./type";



const supplierWisePurchaseReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSupplierWisePurchaseReport: build.query<
      { data: {
        report:supplierWisePurchaseReportDataType[]
        }; meta: PaginationInfo },
     string


    >({
      query: (params) => `report/supplier-wise-purchase?${params}`,
      providesTags: ["supplier-wise-purchase"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSupplierWisePurchaseReportQuery
} = supplierWisePurchaseReportApi;
