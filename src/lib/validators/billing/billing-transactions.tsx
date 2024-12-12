import { z } from "zod";

// Common for all transaction types
export const barcodeLineItemSchema = z.object({
  details_id: z.number().optional(),
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
  warehouse_id: z.coerce.number({ required_error: "The warehouse id field is required." }),
  sales_order_id: z.coerce.number().optional(),
  subject: z.string().optional(),
  adjustment: z.coerce.number().optional(),
});

export const purchaseSchema = billingTransactionCommonSchema.extend({
  warehouse_id: z.coerce.number({ required_error: "The warehouse id field is required." }),
  purchase_order_id: z.coerce.number().optional(),
});

export const purchaseOrderSchema = billingTransactionCommonSchema.extend({
  // shipping_charges: z.number().nonnegative().optional(),
});



// payment_term_id: z.string().optional(),
//   quotation_id: z.string().optional().nullable(),
//   project_id: z.string().optional().nullable(),
//   sales_person_id: z.string().optional().nullable(),

export type SalesOrderFormValues = z.infer<typeof salesOrderSchema>;
export type SalesInvoiceFormValues = z.infer<typeof salesInvoiceSchema>;
export type PurchaseOrderFormValues = z.infer<typeof purchaseOrderSchema>;
export type PurchaseFormValues = z.infer<typeof purchaseSchema>;


// Return details

const returnDetailForPurchaseSchema = z.object({
  purchase_details_id: z.number().min(1, "Purchase details ID must be a positive number"),
  qty: z.number().min(1, "Quantity must be at least 1"),
  note: z.string().optional(),
})

const returnDetailForInvoiceSchema = z.object({
  invoice_details_id: z.number().min(1, "Invoice details ID must be a positive number"),
  qty: z.number().min(1, "Quantity must be at least 1"),
  note: z.string().optional(),
})

// export type SalesOrderFormDataType = z.infer<typeof barcodeLineItemSchema>;
export const returnSchema = z.object({
  date : z.string().date(),
  return_reason: z.string().min(1, "Return reason is required"),
  sub_total: z.number().nonnegative("Sub total must be non-negative"),
  discount: z.number().nonnegative("Discount must be non-negative"),
  tax: z.number().nonnegative("Tax must be non-negative"),
  total: z.number().nonnegative("Total must be non-negative"),
  // purchase_id: z.number().min(1, "Purchase ID must be a positive number"),
  note: z.string().optional(),
  // details: returnDetailSchema.array().optional()
 
})

export const purchaseReturnSchema = returnSchema.extend({
  details: returnDetailForPurchaseSchema.array().optional(),
  purchase_id: z.number().min(1, "Purchase ID must be a positive number"),
})

export const invoiceReturnSchema = returnSchema.extend({
  details: returnDetailForInvoiceSchema.array().optional(),
  invoice_id: z.number().min(1, "Invoice ID must be a positive number"),
})


export type PurchaseReturnFormValues = z.infer<typeof purchaseReturnSchema>;
export type InvoiceReturnFormValues = z.infer<typeof invoiceReturnSchema>;
