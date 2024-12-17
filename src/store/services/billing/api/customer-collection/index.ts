// import { PaginationInfo } from "@/types";
import { PaginationInfo } from "@/types";
import {  inventoryApi } from "../..";
import { CustomerCollectionDataType } from "./type";

const customerCollectionApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerCollection: build.query<
//    { data: PurchaseRegisterDataType[]; meta: PaginationInfo },
//      void

     { data: CustomerCollectionDataType[]; meta: PaginationInfo },
     string


    >({
      query: (params) => `report/customer-collection?${params}`,
      providesTags: ["customer-collection"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCustomerCollectionQuery
} = customerCollectionApi;
