export interface PurchaseRegisterDataType {
    type: string; // Fixed string value
    date: string | null; // Nullable date as a string
    purchase_invoice_number: string | null; // Nullable string
    payment_purchase_number: string | null; // Nullable string
    supplier_name: string | null; // Nullable string
    tax: number; // Numeric value
    amount: number; // Numeric value (can be negative)
    due: number; // Numeric value
  }
  