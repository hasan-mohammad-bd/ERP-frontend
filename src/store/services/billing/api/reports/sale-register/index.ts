import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../../..";
import { SaleRegisterDataType } from "./type";


const saleRegisterApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSaleRegister: build.query<
     { data: SaleRegisterDataType, meta: PaginationInfo },
     string
    >({
      query: (params) => `report/sales-register?${params}`,
      providesTags: ["sale-register"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSaleRegisterQuery
} = saleRegisterApi;
