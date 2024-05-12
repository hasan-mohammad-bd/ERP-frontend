import { hrmApi } from "../..";
import { OrganizationDropdownColumn } from "@/lib/validators"; // Assuming you have a ReligionColumn type

const religionApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getOrganizationForDropDown: build.query<{data:OrganizationDropdownColumn[]}, void>({
      query: () => "self/organization", // Updated endpoint to "self/organization"
      providesTags: ["self-organization"], // Updated tag name
    }),
  }),
  overrideExisting: false,
});

export const { useGetOrganizationForDropDownQuery } = religionApi;
