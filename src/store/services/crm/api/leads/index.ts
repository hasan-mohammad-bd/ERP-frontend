import { crmApi } from "../..";
import { PaginationInfo } from "@/types";
import { LeadRow } from "./type";

const leadsApi = crmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeads: build.query<{ data: LeadRow[]; meta: PaginationInfo }, string>({
      query: (params) => `leads?${params}`,
      providesTags: ["leads"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetLeadsQuery, useLazyGetLeadsQuery } = leadsApi;
