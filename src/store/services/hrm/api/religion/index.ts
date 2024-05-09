import { hrmApi } from "../..";
import { ReligionColumn } from "@/lib/validators"; // Assuming you have a ReligionColumn type

const religionApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getReligions: build.query<{data:ReligionColumn[]}, void>({
      query: () => "religions", // Updated endpoint to "religions"
      providesTags: ["religions"], // Updated tag name
    }),
  }),
  overrideExisting: false,
});

export const { useGetReligionsQuery } = religionApi;
