export interface SupplierLedgerDataType {
  id: number; // Unique identifier
  name: string; // Name of the supplier/customer
  company_name: string; // Name of the associated company
  company_id: string; // Identifier of the company
  work_phone: string; // Work phone number
  phone: string; // Personal phone number
  email: string; // Email address
  type: string; // Type of the entity (e.g., Supplier)
  opening_balance: string; // Opening balance as a string
  date: string; // Date in ISO format (e.g., YYYY-MM-DD)
  note: string; // Additional notes
  parent_id: number | null; // Parent ID, nullable
  location: {
      id: number; // Location identifier
      name: string; // Location name
      parent_id: number | null; // Parent location ID, nullable
      sorting_index: number | null; // Sorting index, nullable
  };
  due: number; // Amount due
}
