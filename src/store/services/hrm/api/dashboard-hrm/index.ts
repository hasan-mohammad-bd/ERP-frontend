
import { hrmApi } from "../..";
import { dashboardHrm } from "./type"

const dashboardHrmApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardHrm: build.query<
   { data: dashboardHrm},
     void
    >({
      query: () => `dashboard-reports`,
      providesTags: ["dashboard-reports"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDashboardHrmQuery
} = dashboardHrmApi;
