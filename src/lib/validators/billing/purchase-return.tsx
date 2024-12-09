


import { z } from "zod";

const ReturnDetailsSchema = z.object({
  purchase_details_id: z.number().min(1, "Purchase details ID must be a positive number"),
  qty: z.number().min(1, "Quantity must be at least 1"),
  note: z.string().min(1, "Note is required"),
});

export const PurchaseReturnSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  return_reason: z.string().min(1, "Return reason is required"),
  sub_total: z.number().nonnegative("Sub total must be non-negative"),
  tax: z.number().nonnegative("Tax must be non-negative"),
  total: z.number().nonnegative("Total must be non-negative"),
  purchase_id: z.number().min(1, "Purchase ID must be a positive number"),
  note: z.string().min(1, "Note is required"),
  details: z.array(ReturnDetailsSchema).nonempty("At least one detail is required"),
});

export type PurchaseReturnFormData = z.infer<typeof PurchaseReturnSchema>;





type Contact = {
  id: number;
  name: string;
  company_name: string;
  company_id: string;
  work_phone: string;
  phone: string;
  email: string;
  type: string;
  opening_balance: string;
  date: string;
  note: string;
  parent_id: number | null;
};
 
export type PurchaseReturnRow = {
  id: number;
  invoice_prifix: string;
  invoice_suffix: number;
  invoice_number: string;
  date: string;
  return_reason: string;
  tax: number;
  sub_total: number;
  discount: number;
  adjustment: number;
  total: number;
  note: string;
  status: number;
  contact: Contact;
  created_at: string;
};