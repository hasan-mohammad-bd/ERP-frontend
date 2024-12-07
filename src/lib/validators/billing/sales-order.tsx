import { z } from "zod";

export const salesOrderSchema = z.object({
  contact_id: z.string({ required_error: "The contact id field is required." }),
  subject: z.string().optional(),
  reference: z.string().optional(),
  date: z.string({ required_error: "The date field is required." }),
  delivery_date: z.string().optional(),
  due_date: z.string().optional(),
  discount: z.number().nonnegative().optional(),
  shipping_charges: z.number().nonnegative().optional(),
  sub_total: z
    .number({ required_error: "The Sub total field is required." })
    .nonnegative(),
  total: z
    .number({ required_error: "The total field is required." })
    .nonnegative(),
  note: z.string().optional(),
  terms_conditions: z.string().optional(),
  payment_term_id: z.string().optional(),
  quotation_id: z.string().optional().nullable(),
  project_id: z.string().optional().nullable(),
  sales_person_id: z.string().optional().nullable(),
  tax_type: z.string({ required_error: "The tax type field is required." }),
  tax: z.number({ required_error: "Tax is required." }),
});

export type SalesOrderFormValues = z.infer<typeof salesOrderSchema>;

export const salesOrderFormDataTypeSchema = salesOrderSchema.extend({
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
      tax_id: z.number(),
    })
  ),
});

export type SalesOrderFormDataType = z.infer<
  typeof salesOrderFormDataTypeSchema
>;
