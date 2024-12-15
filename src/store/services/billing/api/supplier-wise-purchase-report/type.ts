export interface supplierWisePurchaseReportDataType {
  date: string | null; // Nullable date as a string
  slip_no: string | null; // Nullable slip number
  supplier: string | null; // Nullable supplier name
  qty: number; // Numeric value for quantity
  price: number; // Numeric value for price
  total_amount: number; // Numeric value for total amount
  item: string | null; // Nullable string for item name
  item_barcode: string | null; // Nullable string for item barcode
}
