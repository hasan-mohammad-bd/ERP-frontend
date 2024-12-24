export interface CustomerStatementReport {
  report: ReportItem[];
  customer: Customer;
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

interface Customer {
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