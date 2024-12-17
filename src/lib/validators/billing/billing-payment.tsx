import { z } from "zod";
import { files } from "../accounts/entry";

export type BillingPaymentRow = {
  id: number;
  invoice_prifix: string;
  invoice_suffix: number;
  invoice_number: string;
  date: string;
  amount: number;
  note: string;
  contact: {
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
  created_at: string;
};
//payment details
export type BillingPaymentRowDetails = {
  id: number;
  invoice_prifix: string;
  invoice_suffix: number;
  invoice_number: string;
  date: string; // ISO date string
  amount: number;
  note: string;
  contact: {
    id: number;
    name: string;
    company_name: string;
    company_id: string;
    work_phone: string;
    phone: string;
    email: string;
    type: string; // e.g., "Supplier"
    opening_balance: string;
    date: string; // ISO date string
    note: string;
    parent_id: number | null;
  };
  details: {
    id: number;
    amount: number;
    source: {
      id: number;
      invoice_prifix: string;
      invoice_suffix: number;
      invoice_number: string;
      reference: string;
      date: string;
      delivery_date: string;
      due_date: string;
      discount_type: string; // e.g., "transaction"
      tax_type: string; // e.g., "exclusive"
      tax: number;
      sub_total: number;
      discount: number;
      shipping_charges: number;
      total: number;
      paid_amount: number;
      return_amount: number;
      total_due: number;
      note: string;
      terms_conditions: string;
      status: number;
      created_at: string; // ISO date string
    };
  }[];
  ledger_account: {
    id: number;
    code: string;
    name: string;
    type: string; // e.g., "Assets"
    nature: string; // e.g., "Bank Accounts"
    parent_id: number;
    is_active: boolean;
    is_ledger: boolean;
    is_sub_type: boolean;
    description: string | null;
  };
  files: any[]; // Assuming it's an array of file objects; specify more if structure is known
  user: {
    id: number;
    name: string;
    username: string;
    image: string;
    phone: string;
    email: string;
    organization_id: number;
    location_id: number;
    role_id: number;
  };
  organization: {
    id: number;
    name: string;
    title: string;
    logo: string;
    banner: string;
    phone: string[];
    email: string[];
    address: string[];
    website: string[];
    g_map: string[];
    data: any | null; // Could be further specified
    parent_id: number | null;
    sorting_index: number | null;
    created_at: string; // ISO date string
  };
  created_at: string; // ISO date string
};




export const billingPaymentSchema = z.object({
  files: files,
  date: z.string({ required_error: "Date is required" }),
  ledger_account_id: z.string({ required_error: "Account is required" }),
  note: z.string().optional(),
});

export type BillingPaymentFormType = z.infer<typeof billingPaymentSchema>;
