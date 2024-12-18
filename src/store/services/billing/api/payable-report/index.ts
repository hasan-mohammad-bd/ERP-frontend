// import { PaginationInfo } from "@/types";
import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { PayableReportDataType } from "./type";

const payableReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPayableReport: build.query<
      { data: { report: PayableReportDataType[] }; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/payable-report?${params}`,
      providesTags: ["payable-report"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPayableReportQuery } = payableReportApi;
