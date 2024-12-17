export interface CustomerCollectionDataType {
    name: string; // Customer's name
    company_name: string; // Name of the associated company
    company_id: string; // Company identifier
    work_phone: string; // Work phone number
    phone: string; // Personal phone number
    email: string; // Email address
    type: "Customer"; // Fixed string value indicating the type
    opening_balance: string; // Opening balance as a string
    date: string; // Date in string format (e.g., ISO format)
    note: string; // Additional notes
    parent_id: number | null; // Nullable parent identifier
    location: {
      id: number; // Location identifier
      name: string; // Location name
      parent_id: number | null; // Nullable parent location identifier
      sorting_index: number | null; // Nullable sorting index
    };
    total_paid_amount: number; // Total paid amount as a numeric value
  }
  