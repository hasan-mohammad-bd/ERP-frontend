export interface SupplierDetailsStatementReportData {
  report: ReportItem[];
  supplier: Supplier;
  organization: Organization;
}

interface ReportItem {
  date: string;
  slip_no: string;
  description: string;
  charge: string;
  payment_or_return: number;
  balance: number;
  details: ReportDetail[];
}

interface ReportDetail {
  item_name: string;
  qty: string;
  price: string;
  total: number;
}

interface Supplier {
  id: number;
  name: string;
  company_name: string;
  work_phone: string;
  phone: string;
  email: string;
  address: SupplierAddress[];
  previous_balance: number;
  total_charge: number;
  total_payment_or_return: number;
}

interface SupplierAddress {
  id: number;
  country_id: number;
  attention: string;
  post_code: string;
  address: string;
  type: string;
  phone: string;
  state: string;
}

interface Organization {
  id: number;
  name: string;
  title: string;
  logo: string;
  banner: string;
  phone: string[];
  email: string[];
}
