import { CountryColumn } from "@/lib/validators";
import { authApi } from "../..";

const countryAPI = authApi.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query<{ data: CountryColumn[] }, string>({
      query: (params) => `/countries?${params}`,
      providesTags: ["countries"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCountriesQuery } = countryAPI;
