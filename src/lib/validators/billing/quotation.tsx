import { EmployeeColumn, OrganizationColumn } from "@/lib/validators";
import { UnitRow } from "./unit";
import { CustomerColumn } from "./customer";
import { z } from "zod";

export type QuotationRow = {
  id: number;
  contact: CustomerColumn;
  invoice_number: string;
  reference: string;
  date: string;
  estimated_delivery: string;
  expire_date: string;
  project_id: number;
  sales_person: EmployeeColumn;
  subject: string;
  note: string;
  terms_conditions: string;
  image: string | null;
  discount: string;
  shipping_charges: string;
  total: string;
  user: EmployeeColumn;
  organization: OrganizationColumn;
  created_at: string;
  quotation_details: {
    id: number;
    item: {
      id: number;
      name: string;
      code: string | null;
      status: string | null;
    };
    item_barcode: {
      id: number;
      barcode: string;
      barcode_attribute: string;
      purchase_price: string;
      selling_price: string;
      discount: string;
      discount_amount: string;
      after_discount: string;
      wholesale_price: string;
      organization_id: number;
    };
    unit: UnitRow;
    price: string;
    qty: string;
    discount: string;
    note: string;
    total: string;
    created_at: string;
  }[];
};

export const quotationSchema = z.object({
  contact_id: z.string({ required_error: "The contact id field is required." }),
  reference: z.string({ required_error: "The reference field is required." }),
  date: z.string({ required_error: "The date field is required." }),
  estimated_delivery: z.string({
    required_error: "The estimated delivery field is required.",
  }),
  expire_date: z.string().optional(),
  project_id: z.string({ required_error: "The project id field is required." }),
  sales_person_id: z.string().optional(),
  subject: z.string().optional(),
  note: z.string().optional(),
  terms_conditions: z.string().optional(),
  // image: z.string().nullable(),
  discount: z.number().nonnegative().optional(),
  shipping_charges: z.number().nonnegative().optional(),
  total: z.number({ message: "The total field is required." }).nonnegative(),
});
export type QuotationFieldsType = z.infer<typeof quotationSchema>;

export const quotationFormDataTypeSchema = quotationSchema.extend({
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

export type QuotationFormDataType = z.infer<typeof quotationFormDataTypeSchema>;
