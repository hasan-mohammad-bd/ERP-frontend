import { hrmApi } from "../..";
import { GenderColumn } from "@/lib/validators"; // Assuming you have a GenderColumn type

const genderApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getGenders: build.query<{data:GenderColumn[]}, void>({
      query: () => "genders", // Updated endpoint to "genders"
      providesTags: ["genders"], // Updated tag name
    }),
  }),
  overrideExisting: false,
});

export const { useGetGendersQuery, useLazyGetGendersQuery } = genderApi;
