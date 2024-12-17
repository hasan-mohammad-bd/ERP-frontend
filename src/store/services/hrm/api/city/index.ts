import { hrmApi } from "../..";
import { CityColumn } from "@/lib/validators"; 

const cityApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<{ data: CityColumn[] }, string>({
      query: (params) => `cities?${params}`,
      providesTags: ["cities"], 
    }),
  }),
  overrideExisting: false,
});

export const { useGetCitiesQuery } = cityApi; 
