import { z } from "zod";

// Common for all transaction types
export const barcodeLineItemSchema = z.object({
  item_barcode_id: z.number({
    required_error: "The barcode id is required.",
  }),
  unit_id: z.number({ required_error: "The unit id is required." }),
  tax_id: z.number().optional(),
  price: z.number({ required_error: "The price is required." }).nonnegative(),
  qty: z.number({ required_error: "The quantity is required." }).nonnegative(),
  total: z.number({ required_error: "The total is required." }).nonnegative(),
  note: z.string().optional(),
});

export const billingTransactionCommonSchema = z.object({
  contact_id: z.string({ required_error: "The contact id field is required." }),
  reference: z.string().optional(),
  date: z.string({ required_error: "The date field is required." }),
  delivery_date: z.string().optional(),
  due_date: z.string().optional(),
  discount: z.coerce
    .number()
    .nonnegative()
    .optional()
    .refine(
      (discount) =>
        discount === undefined || (discount >= 0 && discount <= 100),
      { message: "Discount must be between 0 and 100." }
    ),
  sub_total: z
    .number({ required_error: "The Sub total field is required." })
    .nonnegative(),
  total: z
    .number({ required_error: "The total field is required." })
    .nonnegative(),
  note: z.string().optional(),
  terms_conditions: z.string().optional(),
  tax_type: z.string({ required_error: "The tax type field is required." }),
  tax: z.number({ required_error: "Tax is required." }),
  details: barcodeLineItemSchema.array().optional(),
});

export const salesOrderSchema = billingTransactionCommonSchema.extend({});

export const salesInvoiceSchema = billingTransactionCommonSchema.extend({
  shipping_charge: z.coerce.number().nonnegative().optional(),
  warehouse_id: z.string({
    required_error: "The warehouse id field is required.",
  }),
  sales_order_id: z.string({
    required_error: "The sales order id field is required.",
  }),
  subject: z.string().optional(),
  adjustment: z.coerce.number().optional(),
});

export const purchaseOrderSchema = billingTransactionCommonSchema.extend({
  shipping_charges: z.number().nonnegative().optional(),
});

// payment_term_id: z.string().optional(),
//   quotation_id: z.string().optional().nullable(),
//   project_id: z.string().optional().nullable(),
//   sales_person_id: z.string().optional().nullable(),

export type SalesOrderFormValues = z.infer<typeof salesOrderSchema>;
export type SalesInvoiceFormValues = z.infer<typeof salesInvoiceSchema>;
export type PurchaseOrderFormValues = z.infer<typeof purchaseOrderSchema>;

// export type SalesOrderFormDataType = z.infer<typeof barcodeLineItemSchema>;
