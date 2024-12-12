export interface SaleRegisterDataType {
    type: string; // Fixed string value
    date: string | null; // Nullable date as a string
    invoice_number: string | null; // Nullable string
    customer_name: string | null; // Nullable string
    tax: string | null; // Nullable string (as received from the API)
    amount: string | null; // Nullable string (as received from the API)
    due: string | null; // Nullable string (as received from the API)
  }
  