import { hrmApi } from "../..";
import { CountryColumn } from "@/lib/validators"; // Assuming you have a CountryColumn type

const countryApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getCountries: build.query<{ data: CountryColumn[] }, string>({
      query: (params) => `countries?${params}`, // Updated endpoint to "countries"
      providesTags: ["countries"], // Updated tag name
    }),
  }),
  overrideExisting: false,
});

export const { useGetCountriesQuery } = countryApi;
