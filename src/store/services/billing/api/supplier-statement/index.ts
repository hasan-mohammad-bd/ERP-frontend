// // import { PaginationInfo } from "@/types";
// import { PaginationInfo } from "@/types";
// import { inventoryApi } from "../..";
// import { CustomerStatementDataType } from "./type";

// const CustomerStatementReportApi = inventoryApi.injectEndpoints({
//   endpoints: (build) => ({
//     getCustomerStatementReport: build.query<
//       { data: CustomerStatementDataType[] ; meta: PaginationInfo },
//       string
//     >({
//       query: (params) => `report/customer-statement?${params}`,
//       providesTags: ["customer-statement"],
//     }),
//   }),
//   overrideExisting: false,
// });

// export const { useGetCustomerStatementReportQuery } = CustomerStatementReportApi;

import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { SupplierStatementReport } from "./type";


const SupplierStatementReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSupplierStatementReport: build.query<
      { data: SupplierStatementReport; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/supplier-statement?${params}`,
      providesTags: ["supplier-statement"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSupplierStatementReportQuery } = SupplierStatementReportApi;