import { z } from "zod";

export const purchaseOrderSchema = z.object({
  contact_id: z.string({ required_error: "The contact id field is required." }),
  subject: z.string().optional(),
  reference: z.string().optional(),
  date: z.string(),
  delivery_date: z.string(),
  due_date: z.string(),
  discount: z.number().nonnegative().optional(),
  shipping_charges: z.number().nonnegative().optional(),
  total: z.number({ message: "The total field is required." }).nonnegative(),
  note: z.string().optional(),
  terms_conditions: z.string().optional(),
  payment_term_id: z.coerce.number().optional(),
  /*   details: z.array(
    z.object({
      item_barcode_id: z.coerce.number(),
      unit_id: z.coerce.number(),
      qty: z.coerce.number(),
      price: z.coerce.number(),
      discount: z.coerce.number(),
      after_discount: z.coerce.number(),
      total: z.coerce.number(),
      note: z.string().nullable(),
    })
  ), */
});

export type PurchaseOrderFormValues = z.infer<typeof purchaseOrderSchema>;

export const purchaseOrderFormDataTypeSchema = purchaseOrderSchema.extend({
  details: z.array(
    z.object({
      item_id: z.number({ required_error: "The item id is required." }),
      item_barcode_id: z.number({
        required_error: "The barcode id is required.",
      }),
      unit_id: z.number({ required_error: "The unit id is required." }),
      price: z
        .number({ required_error: "The price is required." })
        .nonnegative(),
      qty: z
        .number({ required_error: "The quantity is required." })
        .nonnegative(),
      discount: z.number().nonnegative().optional(),
      after_discount: z.number().nonnegative(),
      total: z
        .number({ required_error: "The total is required." })
        .nonnegative(),
      note: z.string().optional(),
    })
  ),
});

export type PurchaseOrderFormDataType = z.infer<
  typeof purchaseOrderFormDataTypeSchema
>;

const ContactSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  company_name: z.string().nullable(),
  company_id: z.coerce.number().nullable(),
  work_phone: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string().email(),
  type: z.string(), // Adjust if `type` has a predefined set of allowed values
  opening_balance: z.coerce.number(), // Assuming this should be a number
  date: z.string().nullable(), // Adjust if a specific date format validation is needed
  note: z.string().nullable(),
  parent_id: z.coerce.number().nullable(),
});

const UnitRow = z.object({
  id: z.number(),
  name: z.string(),
  symbol: z.string(),
});

const purchaseOrderDetails = z.array(
  z.object({
    id: z.number(),
    item: z.object({
      id: z.number(),
      name: z.string(),
      code: z.string().nullable(),
      status: z.string().nullable(),
    }),
    item_barcode: z.object({
      id: z.number(),
      barcode: z.string(),
      barcode_attribute: z.string(),
      purchase_price: z.string(),
      selling_price: z.string(),
      discount: z.string(),
      discount_amount: z.string(),
      after_discount: z.string(),
      wholesale_price: z.string(),
      organization_id: z.number(),
    }),
    unit: UnitRow,
    price: z.string(),
    qty: z.string(),
    discount: z.string(),
    note: z.string(),
    total: z.string(),
    created_at: z.string(),
    sale_account_tax_id: z.number().optional(),
  })
);

export const purchaseOrderRow = z.object({
  id: z.coerce.number(),
  invoice_prifix: z.string(),
  invoice_suffix: z.coerce.number(),
  invoice_number: z.string(),
  subject: z.string().nullable(),
  reference: z.string().nullable(),
  date: z.string(), // Date validation can be added if required
  delivery_date: z.string(),
  due_date: z.string(),
  discount: z.coerce.number(),
  shipping_charges: z.coerce.number(),
  total: z.coerce.number(),
  note: z.string().nullable(),
  terms_conditions: z.string().nullable(),
  status: z.coerce.number(),
  contact: ContactSchema,
  created_at: z.string().datetime(), // Validates as an ISO datetime string
  details: purchaseOrderDetails,
});

export type PurchaseOrderRow = z.infer<typeof purchaseOrderRow>;

export type ExtendedPurchaseOrderRow = z.infer<typeof purchaseOrderRow> & {
  tax: number; // Add the new `tax` field
};
