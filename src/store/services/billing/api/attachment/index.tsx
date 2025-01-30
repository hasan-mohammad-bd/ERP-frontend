import { DeleteResponse, PaginationInfo } from "@/types";

import { inventoryApi } from "../..";
import { Attachment } from "@/lib/validators/billing/customer-supplier";
import { AttachmentFormValues } from "@/pages/billing/customers/edit-customer/components/attachment";

const attachmentAPI = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getAttachments: build.query<
      { data: Attachment[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `contact-attachments?${params}`,
      providesTags: ["contact-attachments"],
    }),

    createAttachment: build.mutation<
      { data: Attachment },
      AttachmentFormValues | FormData
    >({
      query: (formData) => ({
        url: `contact-attachments`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["contact-attachments"],
    }),

    removeAttachment: build.mutation<DeleteResponse, number>({
      query: (attachmentId) => ({
        url: `contact-attachments/${attachmentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact-attachments"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAttachmentsQuery,
  useCreateAttachmentMutation,
  useRemoveAttachmentMutation,
} = attachmentAPI;
