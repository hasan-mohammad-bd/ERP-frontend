import { hrmApi } from "../..";
import { WorkPlaceColumn } from "@/lib/validators";

const workplacesApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getWorkplaces: build.query<{ data: WorkPlaceColumn[] }, void>({
      query: () => "workplaces", // Updated endpoint to "workplaces"
      providesTags: ["workplaces"], // Updated tag name
    }),
  }),
  overrideExisting: false,
});

export const { useGetWorkplacesQuery } = workplacesApi;
