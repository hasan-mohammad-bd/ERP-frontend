export interface itemWisePurchaseReportDataType{
  date: string | null;
  slip_no: string | null;
  supplier: string | null;
  qty: number;
  price: number;
  total_amount: number;
  item: string | null;
  item_barcode: string | null;
}
