import {z} from "zod";


export const purchaseOrderSchema = z.object({
  contact_id: z.coerce.number(),
  subject: z.string().nullable(),
  reference: z.string().nullable(),
  date: z.string(), 
  delivery_date: z.string(),
  due_date: z.string(),
  discount: z.coerce.number(),
  shipping_charges: z.coerce.number(),
  total: z.coerce.number(),
  note: z.string().nullable(),
  terms_conditions: z.string().nullable(),
  payment_term_id: z.coerce.number().nullable(),
  details: z.array(
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
  ),
});

export type PurchaseOrderFormValues = z.infer<typeof purchaseOrderSchema>;


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
});

export type PurchaseOrderRow  = z.infer<typeof purchaseOrderRow>;

