import { DeleteResponse, PaginationInfo } from "@/types";
import { accountApi } from "../..";
import { TaxFormValues, TaxRow } from "@/lib/validators/accounts/tax";

const TaxApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getTaxes: build.query<{ data: TaxRow[]; meta: PaginationInfo }, string>({
      query: (params) => `taxes?${params}`,
      providesTags: ["taxes"],
    }),
    createTaxes: build.mutation<{ data: TaxRow }, TaxFormValues>({
      query: (newTax) => ({
        url: `taxes`,
        method: "POST",
        body: newTax,
      }),
      invalidatesTags: ["taxes"],
    }),
    updateTaxes: build.mutation<
      { data: TaxRow },
      { taxId: number; updatedTax: TaxFormValues }
    >({
      query: ({ taxId, updatedTax }) => ({
        url: `taxes/${taxId}`,
        method: "PUT",
        body: updatedTax,
      }),
      invalidatesTags: ["taxes"],
    }),
    removeTaxes: build.mutation<DeleteResponse, number>({
      query: (taxId) => ({
        url: `taxes/${taxId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["taxes"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTaxesQuery,
  useLazyGetTaxesQuery,
  useUpdateTaxesMutation,
  useCreateTaxesMutation,
  useRemoveTaxesMutation,
} = TaxApi;
