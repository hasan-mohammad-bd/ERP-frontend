import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../../..";
import { PurchaseRegisterDataType } from "./type";


const purchaseRegisterApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchaseRegister: build.query<
     { data: PurchaseRegisterDataType[]; meta: PaginationInfo },
     string

    >({
      query: (params) => `report/purchase-register?${params}`,
      providesTags: ["purchase-register"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPurchaseRegisterQuery
} = purchaseRegisterApi;
