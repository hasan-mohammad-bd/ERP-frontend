// export interface CustomerStatementDataType {
//     id: number;
//     name: string;
//     company_name: string;
//     company_id: string;
//     work_phone: string;
//     phone: string;
//     email: string;
//     type: string;
//     opening_balance: string;
//     date: string; // Format: YYYY-MM-DD
//     note: string;
//     parent_id: number | null;
//     location: {
//       id: number;
//       name: string;
//       parent_id: number | null;
//       sorting_index: number | null;
//     };
//     invoices: {
//       id: number;
//       invoice_prifix: string;
//       invoice_suffix: number;
//       invoice_number: string;
//       reference: string | null;
//       date: string; // Format: YYYY-MM-DD
//       delivery_date: string | null;
//       due_date: string | null;
//       discount_type: string;
//       tax_type: string;
//       tax: number;
//       sub_total: number;
//       discount: number;
//       shipping_charge: number;
//       adjustment: number;
//       total: number;
//       paid_amount: number;
//       return_amount: number;
//       total_due: number;
//       note: string | null;
//       terms_conditions: string | null;
//       status: number;
//       created_at: string; // Format: ISO 8601
//     }[];
//   }
  

export interface SupplierStatementReport {
  report: ReportItem[];
  supplier: supplier;
  organization: Organization;
}

interface ReportItem {
  date: string;
  slip_no: string;
  description: string;
  charge: string;
  payment_or_return: number;
  balance: number;
}

interface supplier {
  address: any;
  id: number;
  name: string;
  company_name: string;
  work_phone: string;
  phone: string;
  email: string;
  location: Location;
  previous_balance: string;
  total_charge:string;
  total_payment_or_return:string;
}

interface Location {
  id: number;
  name: string;
  parent_id: null | number;
  organization_id: number;
  sorting_index: null | number;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}

interface Organization {
  id: number;
  name: string;
  title: string;
  logo: string;
  banner: string;
  phone: string[];
}