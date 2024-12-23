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
import { CustomerDetailsStatementReport } from "./type";



const CustomerDetailsStatementReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerDetailsStatementReport: build.query<
      { data: CustomerDetailsStatementReport; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/customer-details-statement?${params}`,
      providesTags: ["customer-details-statement"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCustomerDetailsStatementReportQuery } = CustomerDetailsStatementReportApi;