import { DeleteResponse, PaginationInfo } from "@/types";

import { inventoryApi } from "../..";
import { CustomerColumn } from "@/lib/validators/billing/customer-supplier";
import { ContactPersonsFormValues } from "@/lib/validators/billing/contact-persons";

const contactPersonAPI = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getContactPersons: build.query<
      { data: CustomerColumn[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `contact-persons?${params}`,
      providesTags: ["contact-persons"],
    }),

    createContactPerson: build.mutation<
      { data: CustomerColumn },
      ContactPersonsFormValues
    >({
      query: (formData) => ({
        url: `contact-persons`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["contact-persons"],
    }),

    updateContactPerson: build.mutation<
      { data: CustomerColumn },
      {
        contactPersonId: number;
        updatedContactPerson: ContactPersonsFormValues;
      }
    >({
      query: ({ contactPersonId, updatedContactPerson }) => ({
        url: `contact-persons/${contactPersonId}`,
        method: "PUT",
        body: updatedContactPerson,
      }),
      invalidatesTags: ["contact-persons"],
    }),

    removeContactPerson: build.mutation<DeleteResponse, number>({
      query: (contactPersonId) => ({
        url: `contact-persons/${contactPersonId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact-persons"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetContactPersonsQuery,
  useCreateContactPersonMutation,
  useUpdateContactPersonMutation,
  useRemoveContactPersonMutation,
} = contactPersonAPI;
