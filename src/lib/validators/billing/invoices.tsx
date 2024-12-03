import { z } from "zod";
import { EmployeeColumn } from "@/lib/validators";
import { UnitRow } from "./unit";
import { CustomerColumn } from "./customer";
import { PurchaseOrderRow } from "./purchase-order";
import { PaymentTermRow } from "./payment-terms";

// Define types for your quotation row
export type InvoicesRow = {
  id: number;
  invoice_prifix: string;
  invoice_suffix: number;
  invoice_number: string;
  subject: string;
  reference: string;
  order_number: string;
  date: string;
  delivery_date: string | null;
  due_date: string;
  discount: number;
  shipping_charges: number;
  payment_term_id: string;
  sales_order_id: string;
  total: number;
  note: string;
  terms_conditions: string;
  status: number;
  sales_person: EmployeeColumn;
  contact: CustomerColumn;
  sales_order: PurchaseOrderRow;
  payment_term: PaymentTermRow;
  details: {
    id: number;
    qty: number;
    price: number;
    discount: number;
    after_discount: number;
    total: number;
    item: {
      id: number;
      name: string;
      item_nature: string;
      image: string;
      primary_to_secondary_unit: string;
      sku: string;
      purchase_account_id: number;
      purchase_account_tax_id: number;
      sale_account_id: number;
      sale_account_tax_id: number;
      inventory_account_id: number;
      inventory_account_tax_id: number;
      track_inventory: number;
      manufacture: number;
      allow_sale: number;
      created_at: string;
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
    note: string;
  }[];
  user: EmployeeColumn;
  created_at: string;
};

export const invoiceSchema = z.object({
  contact_id: z.string({ required_error: "The contact id field is required." }),
  reference: z.string({ required_error: "The reference field is required." }),
  order_number: z.string({
    required_error: "The order number field is required.",
  }),
  date: z.string({ required_error: "The date field is required." }),
  due_date: z.string({ required_error: "The due date field is required." }),
  payment_term_id: z.string({
    required_error: "The sales person id field is required.",
  }),
  sales_person_id: z.string({
    required_error: "The sales person id field is required.",
  }),
  sales_order_id: z.string({
    required_error: "The sales order field is required.",
  }),
  subject: z.string().optional(),
  note: z.string().optional(),
  terms_conditions: z.string().optional(),
  image: z.string().nullable().optional(),
  discount: z.number().nonnegative().optional(),
  shipping_charges: z.number().nonnegative().optional(),
  total: z
    .number({ required_error: "The total field is required." })
    .nonnegative(),
});
export type InvoiceFieldsType = z.infer<typeof invoiceSchema>;

export const invoiceFormDataTypeSchema = invoiceSchema.extend({
  details: z.array(
    z.object({
      item_barcode_id: z.number({
        required_error: "The item barcode id is required.",
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

export type InvoiceFormDataType = z.infer<typeof invoiceFormDataTypeSchema>;
