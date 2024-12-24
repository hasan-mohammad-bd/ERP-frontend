import { inventoryApi } from "../..";
import { RepresentativeWiseSaleReport, TotalSummary } from "./type";

const RepresentativeWiseSaleReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getRepresentativeWiseSaleReport: build.query<
      { data: RepresentativeWiseSaleReport[], start_date:string,end_date:string, total:TotalSummary},
      string
    >({
      query: (params) => `report/representative-wise-sales?${params}`,
      providesTags: ["representative-wise-sales"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRepresentativeWiseSaleReportQuery } = RepresentativeWiseSaleReportApi;