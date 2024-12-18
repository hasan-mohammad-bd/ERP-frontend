// import { PaginationInfo } from "@/types";
import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { AgedReceivableDataType } from "./type";


const AgedReceiveableReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getAgedReceiveableReport: build.query<
      { data: { report: AgedReceivableDataType[] }; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/aged-receivable-report?${params}`,
      providesTags: ["aged-receivable-report"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAgedReceiveableReportQuery } = AgedReceiveableReportApi;
