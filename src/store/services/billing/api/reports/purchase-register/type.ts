export interface PurchaseRegisterDataType {
    type: string; // Type of refund (e.g., "Purchase Refund")
    date: string | null; // Date of the refund, nullable
    purchase_invoice_number: string; // Purchase invoice number
    payment_invoice_number: string | null; // Payment invoice number, nullable
    supplier_name: string | null; // Supplier name, nullable
    tax: number; // Tax amount
    amount: number; // Refund amount (e.g., -2202)
    due: number; // Remaining due amount
  }
