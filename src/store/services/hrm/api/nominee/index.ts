import { NomineeFormValues, type NomineeColumn } from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const nomineeApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getNominees: build.query<{ data: NomineeColumn[] }, void>({
      query: () => "employee-nominee",
      providesTags: ["nominees"],
    }),
    createNominee: build.mutation<{ data: NomineeColumn }, NomineeFormValues>({
      query: (newNominee) => ({
        url: `employee-nominee`,
        method: "POST",
        body: newNominee,
      }),
      invalidatesTags: ["nominees", "employees"],
    }),
    removeNominee: build.mutation<DeleteResponse, number>({
      query: (nomineeId) => ({
        url: `employee-nominee/${nomineeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["nominees"],
    }),
    updateNominee: build.mutation<
      { data: NomineeColumn },
      { nomineeId: number; updatedNominee: NomineeFormValues }
    >({
      query: ({ nomineeId, updatedNominee }) => ({
        url: `employee-nominee/${nomineeId}`,
        method: "PUT",
        body: updatedNominee,
      }),
      invalidatesTags: ["nominees", "employees"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetNomineesQuery,
  useCreateNomineeMutation,
  useRemoveNomineeMutation,
  useUpdateNomineeMutation,
} = nomineeApi;
