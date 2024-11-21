// import { AttributeFormValues, AttributeRow } from "@/lib/validators/billing/attributes";
// import { BarcodeFormValues, BarcodeRow } from "@/lib/validators/billing/barcodedemo";
import { inventoryApi } from "../..";



const itemBarcodeGenerateDemoApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    generateDemoBarcode: build.mutation<
      { data: any },
      any
    >({

      query: (newAttribute) => ({
        url: `item-barcode-generate-demo`, // Updated endpoint
        method: "POST",
        body: newAttribute,
      }),
      invalidatesTags: ["demoBarcode"], // Optional, updated tag naming
    }),
  }),
  overrideExisting: false,
});

export const {
  useGenerateDemoBarcodeMutation, // Updated hook name
} = itemBarcodeGenerateDemoApi;
