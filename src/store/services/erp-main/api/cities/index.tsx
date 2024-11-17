import { CityColumn } from "@/lib/validators";
import { authApi } from "../..";

const citiesAPI = authApi.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<{ data: CityColumn[] }, string>({
      query: (params) => `/cities?${params}`,
      providesTags: ["cities"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCitiesQuery } = citiesAPI;
