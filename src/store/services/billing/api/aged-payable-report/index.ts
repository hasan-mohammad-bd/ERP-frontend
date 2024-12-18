// import { PaginationInfo } from "@/types";
import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { AgedPayableDataType } from "./type";


const AgedpayableReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getAgedPayableReport: build.query<
      { data: { report: AgedPayableDataType[] }; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/aged-payable-report?${params}`,
      providesTags: ["aged-payable-report"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAgedPayableReportQuery } = AgedpayableReportApi;
