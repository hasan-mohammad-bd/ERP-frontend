
import { crmApi } from "../..";
import { DashboardCrm } from "./type"

const dashboardCrmApi = crmApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardCrm: build.query<
   { data: DashboardCrm},
     void
    >({
      query: () => `dashboard-reports`,
      providesTags: ["dashboard-reports"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDashboardCrmQuery
} = dashboardCrmApi;
