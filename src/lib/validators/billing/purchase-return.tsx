







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