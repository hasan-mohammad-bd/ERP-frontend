export interface PaymentType {
  name: string;
  id: number;
  amount: number;
}

export interface SalesRegisterType {
  type: "Invoice"; // Fixed string value
  date: string | null; // Nullable date as a string
  invoice_number: string | null; // Nullable string
  customer_name: string | null; // Nullable string
  tax: string | null; // Nullable string (as received from the API)
  amount: string | null; // Nullable string (as received from the API)
  due: string | null; // Nullable string (as received from the API)
  payment: PaymentType[]; // Array of payments
}

export interface TotalsType {
  total_amount: number;
  total_tax: number;
  total_paid: number;
  total_due: number;
  [key: string]: number; // Additional properties for bank-specific totals
}

export interface SaleRegisterDataType {
  sales_register: SalesRegisterType[]; // Array of sales register entries
  totals: TotalsType; // Totals object
  start_date: string; // Start date as a string
  end_date: string; // End date as a string
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
      data: any; // Generic property for additional data
      parent_id: number | null;
      sorting_index: number | null;
      created_at: string;
  };
}

export interface LedgerAccountType {
  id: number; // Unique identifier for the ledger account
  code: string; // Account code
  name: string; // Account name
  type: string; // Type of account (e.g., Assets, Liabilities, etc.)
  nature: string; // Nature of the account (e.g., Bank Accounts)
  parent_id: number | null; // Parent account ID, nullable
  is_active: boolean; // Whether the account is active
  is_ledger: boolean; // Whether this is a ledger account
  is_sub_type: boolean; // Whether it has sub-types
  description: string | null; // Optional description, nullable
}

