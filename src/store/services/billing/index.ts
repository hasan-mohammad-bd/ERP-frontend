import { getToken } from "@/utils/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const inventoryApi = createApi({
  reducerPath: "inventoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_INVENTORY_API,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "units",
    "category",
    "brand",
    "attribute-categories",
    "attributes",
    "customers",
    "contact-addresses",
    "expenses-category",
    "contact-persons",
    "item",
    "contact-attachments",
    "suppliers",
    "expenses",
    "demoBarcode",
    "payment-terms",
    "quotations",
    "search-barcode",
    "purchaseOrder",
    "invoices",
    "sales-orders",
    "warehouses",
    "payment-receives",
    "sales-order",
    "warehouses",
    "purchaseReturn",
    "purchase",
    "invoiceReturn",
    "payment-mades",
    "purchase-register",
    "item-wise-purchase",
    "item-wise-sale",
    "supplier-wise-purchase",
    "sale-register",
    "opening-stock",
    "purchase-refunds",
    "invoice-refunds",
    'customer-collection',
    'receivable-report',
     "payable-report",
     "aged-receivable-report",
     "aged-payable-report"
  ],
  endpoints: () => ({}),
});
