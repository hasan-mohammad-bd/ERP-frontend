export interface StockTransactionReportDataType {
  transaction_on: string | null; // Date of the transaction or null if not provided
  warehouse: string; // Name of the warehouse
  adjustment: number; // Adjustment value
  purchase: string | number; // Purchase quantity (can be a string or number)
  sale: string | number; // Sale quantity (can be a string or number)
  in_hand: string | number; // In-hand quantity (can be a string or number)
  remark: string; // Remark or description of the transaction
}
