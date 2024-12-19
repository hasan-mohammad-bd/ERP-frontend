// // import { PaginationInfo } from "@/types";
// import { PaginationInfo } from "@/types";
// import { inventoryApi } from "../..";
// import { ReceivableDataType } from "./type";

// const supplierLedgerReportApi = inventoryApi.injectEndpoints({
//   endpoints: (build) => ({
//     getReceivableReport: build.query<
//       { data: {report : ReceivableDataType[]}; meta: PaginationInfo },
//       string
//     >({
//       query: (params) => `report/receivable-report?${params}`,
//       providesTags: ["receivable-report"],
//     }),
//   }),
//   overrideExisting: false,
// });

// export const { 
//     useGetReceivableReportQuery
//  } = supplierLedgerReportApi;
