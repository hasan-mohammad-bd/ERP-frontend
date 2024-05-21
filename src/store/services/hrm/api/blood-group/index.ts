import { hrmApi } from "../..";
import { BloodGroupColumn } from "@/lib/validators"; // Assuming you have a BloodGroupColumn type

const bloodGroupApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getBloodGroups: build.query<{ data: BloodGroupColumn[] }, void>({
      query: () => "blood-groups", 
      providesTags: ["blood-groups"], 
    }),
  }),
  overrideExisting: false,
});

export const { useGetBloodGroupsQuery } = bloodGroupApi;
