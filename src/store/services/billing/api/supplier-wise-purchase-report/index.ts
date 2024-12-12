// import { PaginationInfo } from "@/types";
import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../..";
import { supplierWisePurchaseReportDataType } from "./type";



const supplierWisePurchaseReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSupplierWisePurchaseReport: build.query<
//    { data: PurchaseRegisterDataType[]; meta: PaginationInfo },
//      void

     { data: {
      report:supplierWisePurchaseReportDataType[]
     }; meta: PaginationInfo },
     string


    >({
      query: (params) => `report/supplier-wise-purchase?${params}`,
      providesTags: ["purchase-register"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSupplierWisePurchaseReportQuery
} = supplierWisePurchaseReportApi;
