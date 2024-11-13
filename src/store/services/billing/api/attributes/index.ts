
import { AttributeFormValues, AttributeRow } from "@/lib/validators/billing/attributes";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const attributeApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getAttributes: build.query<
      { data: AttributeRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `attributes?${params}`,
      providesTags: ["attributes"],
    }),
    createAttribute: build.mutation<
      { data: AttributeRow },
      AttributeFormValues
    >({
      query: (newAttribute) => ({
        url: `attributes`,
        method: "POST",
        body: newAttribute,
      }),
      invalidatesTags: ["attributes"],
    }),
    updateAttribute: build.mutation<
      { data: AttributeRow },
      { attributeId: number, updatedAttribute: AttributeFormValues }
    >({
      query: ({ attributeId, updatedAttribute }) => ({
        url: `attributes/${attributeId}`,
        method: "PUT",
        body: updatedAttribute,
      }),
      invalidatesTags: ["attributes"],
    }),
    removeAttribute: build.mutation<DeleteResponse, number>({
      query: (attributeId) => ({
        url: `attributes/${attributeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["attributes"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAttributesQuery,
  useLazyGetAttributesQuery,
  useCreateAttributeMutation,
  useUpdateAttributeMutation,
  useRemoveAttributeMutation
} = attributeApi;
